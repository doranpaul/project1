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
        textAlignVertical:'auto',
        fontSize:18
    },

    container_PRIMARY: {
        backgroundColor: 'grey',
        height:50
    },

    container_TERTIARY: {
        backgroundColor: 'transparent',
        padding: 0,                       
        borderWidth: 0,
    },

    text_TERTIARY:{
        color: 'whitesmoke',
        fontWeight:'light',
        fontSize:12
    },
});

export default CustomButton;
