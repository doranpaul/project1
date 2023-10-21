import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

const CustomButton = ({onPress, text, type = "PRIMARY"}) => {
    return (
        <Pressable onPress={onPress} style={[styles.container, styles[`container_${type}`]]}>
            <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
        </Pressable>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'grey',
        width:'85%',
        alignSelf: 'center',
        padding: 10,
        marginVertical: 5,
        alignItems: 'centre',
        borderRadius: 5,
    },
    text: {
        color: '#5a4fcf',
        fontWeight:'bold',
        alignSelf: 'center',
    },

    container_PRIMARY: {
        backgroundColor: 'grey',
    },

    container_TERTIARY: {
        backgroundColor: 'transparent',   // No background for tertiary button
        padding: 0,                       // Remove or reduce padding if needed
        borderWidth: 0,                   // No border
    },

    text_TERTIARY:{
        color: 'whitesmoke',
        fontWeight:'light',
    },
});

export default CustomButton;