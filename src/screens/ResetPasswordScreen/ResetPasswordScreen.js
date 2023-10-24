import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, TouchableOpacity } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const ResetPasswordScreen = ({ navigation}) => {
    const [code, setCode] = useState('');
    const [password, setPassword] = useState('');
    
    const {height} = useWindowDimensions();

    const onSubmitPressed = () => {
        console.log("Submit new password pressed")
    };

    const onSignInPressed = () => {
        console.log("Sign in pressed")
        navigation.navigate('SignIn')
    };

    return(
    <ScrollView style={styles.scrollView}>
        
        <View>
        <Text style={styles.title}>Confirm your email</Text>
            
             <View style={styles.inputContainer}>
                <CustomInput 
                    placeholder="Enter your Confirmation Code" 
                    value={code} 
                    setValue={setCode}
                />

                <CustomInput 
                    placeholder="Enter your new Password" 
                    value={password} 
                    setValue={setPassword}
                />

                <View style={styles.buttonContainer}>
                    <CustomButton 
                    text="Submit" 
                    onPress={onSubmitPressed}
                    />
            </View>

                <Text style={styles.text}>
                    Back to <Text style={styles.link} onPress={onSignInPressed}> Sign In </Text>
                </Text>

                </View>
            </View>
        </ScrollView>
        
    );
};


const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        backgroundColor: '#5a4fcf', 
        position: 'relative',  // This is important
    },
    root: {
        flexGrow: 1,  // This will make sure your content takes the full height
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#5a4fcf',
    },
    inputContainer: {
        //position: 'absolute',
        //bottom: 165,  // Adjust this value as needed
        marginTop:110,
        width: '100%',
        alignItems: 'center',
    },
    buttonContainer: {
        //position: 'absolute',
        //bottom: 150,  // Adjust this value as needed
        width: '100%',
        alignItems: 'center',
        marginVertical: 20,
    },

    title: {
        fontSize: 30,   // Adjust font size as needed
        fontWeight: 'light',
        color: 'white', // Adjust color as needed
        alignSelf:'center',
        marginTop: 60,  // Adjust margin as needed
        position: 'absolute'
    },

    text: {
        color:'whitesmoke',
        fontSize: 12,
        marginVertical:20,
    },

    link: {
        fontSize:12,
        color:'whitesmoke',
        textDecorationLine: 'underline',

    },

});


export default ResetPasswordScreen;