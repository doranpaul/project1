import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import reactlogo from '../../../assets/images/reactlogo.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';

const SignInScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const {height} = useWindowDimensions();

    const onSignInPressed = () => {
        console.log("Sign in pressed")
    };

    const onForgotPasswordPressed = () => {
        console.log("Forgot password pressed")
    };

    const onDontHaveAccount = () => {
        console.log("No account pressed")
    };

    return(
    <ScrollView style={styles.scrollView}>
        
        <View>
        <Text style={styles.title}>SOOTHE</Text>
            <Image 
            source={reactlogo} 
            style={[styles.reactlogo, { height: height * 0.7 }]} 
            resizeMode='cover'  // or 'cover'
            />
            
             <View style={styles.inputContainer}>
                <CustomInput 
                    placeholder="Username" 
                    value={username} 
                    setValue={setUsername}
                />

                <CustomInput 
                    placeholder="Password" 
                    value={password} 
                    setValue={setPassword}
                    secureTextEntry={true}
                />
            </View>

            <View style={styles.buttonContainer}>
            <CustomButton 
            text="Log in" 
            onPress={onSignInPressed}
            />

            <CustomButton 
            text="Forgot password?" 
            onPress={onForgotPasswordPressed}
            type="TERTIARY"
            />
        
            <CustomButton 
            text="Don't have an account? Sign up?" 
            onPress={onDontHaveAccount}
            type="TERTIARY"
            />
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
    reactlogo: {
        width: '75%',
        height: '40%',  // define the container height, adjust as needed
        marginBottom:40,
        alignSelf: 'center',
        overflow: 'hidden',  // hide the overflowing parts of the image
    },
    inputContainer: {
        //position: 'absolute',
        bottom: 165,  // Adjust this value as needed
        width: '100%',
        alignItems: 'center',
    },
    buttonContainer: {
        //position: 'absolute',
        bottom: 150,  // Adjust this value as needed
        width: '100%',
        alignItems: 'center',
    },

    title: {
        fontSize: 30,   // Adjust font size as needed
        fontWeight: 'light',
        color: 'white', // Adjust color as needed
        alignSelf:'center',
        marginTop: 60,  // Adjust margin as needed
        position: 'absolute'
    }
});


export default SignInScreen;