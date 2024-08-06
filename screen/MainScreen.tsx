import React, {FC} from "react";
import {View, StyleSheet, Text, TextInput} from "react-native";
import {StatusBar} from "expo-status-bar";
import Button from "./main-screen-components/Button";

const HomeScreen: FC = () => {
    return (
        <View style={styles.container}>
            <Text style={{
                fontSize: 20,
                fontWeight: 'bold',
                textAlign: 'center',
                marginBottom: 10,
            }}>Місто</Text>
            <TextInput style={{
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

export default HomeScreen
