import React, {FC} from "react";
import {Pressable, Text, StyleSheet, View} from "react-native";

type ButtonProps = {
    title: string;
    onPress: () => void;
}

const Button: FC<ButtonProps> = (props) => {
    return (
        <Pressable onPress={() => {
            props.onPress()
        }} style={styles.pressable}>
            <Text style={styles.text}>{props.title}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    pressable: {
        backgroundColor: "#6EACDA",
        padding: 5,
    },
    text: {
        color: "#021526",
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
    }
})

export default Button
