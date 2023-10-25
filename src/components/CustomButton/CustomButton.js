import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

const CustomButton = ({ onPress, text, linkText, type = "PRIMARY" }) => {
    return (
        <Pressable onPress={!linkText ? onPress : undefined} style={[styles.container, styles[`container_${type}`]]}>
            <Text style={[styles.text, styles[`text_${type}`]]}>
                {text.replace(linkText, '')}
                {linkText && (
                    <Text 
                        onPress={onPress}
                        style={[styles.linkText, styles[`text_${type}`]]}>
                        {linkText}
                    </Text>
                )}
            </Text>
        </Pressable>
    );
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
        color: 'whitesmoke',
        fontWeight:'bold',
        alignSelf: 'center',
        textAlignVertical:'auto',
        fontSize:18
    },

    container_PRIMARY: {
        backgroundColor: 'grey',
        height:50,
        marginVertical:-5,
        marginTop:30,
    },

    container_SECONDARY: {
        marginTop:0,
        marginVertical:10,
        borderColor: 'grey',
        borderWidth: 2,
    },
    
    container_TERTIARY: {
        backgroundColor: 'transparent',
        padding: 0,                       
        borderWidth: 0,
        marginVertical:15,
    },

    text_TERTIARY:{
        color: 'whitesmoke',
        fontWeight:'light',
        fontSize:12
    },

    text_SECONDARY:{
        color: 'white',
    },

    linkText: {
        //color: 'blue',
        textDecorationLine: 'underline',
        
    },
});

export default CustomButton;