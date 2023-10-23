import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const CustomInput = ({ value, setValue, placeholder, secureTextEntry }) => {
    return (
        <View style={styles.container}>
            <TextInput
             value={value}
             onChangeText={setValue}
             placeholder={placeholder} 
             style={styles.input}
             secureTextEntry={secureTextEntry}
             />
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'whitesmoke',
        width:'85%',
        alignSelf: 'center',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 5,
        height:40
    },
    input: {
        fontSize: 18,
        textAlignVertical:'bottom'
        
    },
});



export default CustomInput;