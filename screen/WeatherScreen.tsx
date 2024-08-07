import {FC, useEffect, useState} from "react";
import {View, Text, StyleSheet, ActivityIndicator, Alert} from "react-native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../App";
import axios from "axios";

export type WeatherScreenProps = NativeStackScreenProps<RootStackParamList, "Weather">;

const WeatherScreen: FC<WeatherScreenProps> = (props) => {

    const [weather, setWeather] = useState<weather | null>(null)

    useEffect(() => {
        axios.get<weather>(
            "https://api.openweathermap.org/data/2.5/weather",
            {
                params: {
                    q: props.route.params.city,
                    units: "metrics",
                    appid: "c3d4c3a148098dd000d4f95dab3380c9"
                }
            }
        ).then((response) => {
            setWeather(response.data)
        }).catch(err => {
            Alert.alert("Погода", "Не вдалось отримати інформацію. ")
        })
    }, [])

    if (weather == null) {
        return (
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <ActivityIndicator size="large" />
                <Text style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    marginTop: 20
                }}>
                    Інформація не завантажена
                </Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Місто: {props.route.params.city}
            </Text>
            <Text style={styles.text}>
                Температура: {(weather?.main.temp - 273).toFixed(2)}*C
            </Text>
            <Text style={styles.text}>
                Швидкість вітру: {weather?.wind.speed} м/с
            </Text>
            <Text style={styles.text}>
                Вологість: {weather?.main.humidity}%
            </Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
        justifyContent: "center",
        alignItems: "stretch",
    },
    text: {
        fontSize: 25,
        fontWeight: "bold"
    }
})

export default WeatherScreen
