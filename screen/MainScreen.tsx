import React, {FC, useState} from "react";
import {View, StyleSheet, Text, TextInput} from "react-native";
import {StatusBar} from "expo-status-bar";
import Button from "./main-screen-components/Button";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../App";

export type MainScreenProps = NativeStackScreenProps<RootStackParamList, "Main">;

const MainScreen: FC<MainScreenProps> = (props: MainScreenProps) => {

    const [input, setInput] = useState("")

    return (
        <View style={styles.container}>
            <Text style={{
                fontSize: 20,
                fontWeight: 'bold',
                textAlign: 'center',
                marginBottom: 10,
            }}>Місто</Text>
            <TextInput
                onChangeText={text => setInput(text)}
                style={{
                borderWidth: 1,
                fontSize: 20,
                fontWeight: 'bold',
                padding: 10,
                marginHorizontal: 30
            }} />

            <View style={{
                margin: 40,
                marginTop: 15,
            }}>
                <Button title="Пошук" onPress={() => {
                    props.navigation.push("Weather", {city: input})
                }} />
            </View>

            <StatusBar style="auto" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "stretch",
        margin: 40,
    }
})

export default MainScreen
