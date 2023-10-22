import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, TouchableOpacity } from 'react-native';
//import reactlogo from '../../../assets/images/reactlogo.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const SignInScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    
    
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
        <Text style={styles.title}>Register your account</Text>
            
             <View style={styles.inputContainer}>
                <CustomInput 
                    placeholder="First Name" 
                    value={firstName} 
                    setValue={setFirstName}
                />

                <CustomInput 
                    placeholder="Surname" 
                    value={surname} 
                    setValue={setSurname}
                />

                <CustomInput 
                    placeholder="Email" 
                    value={email} 
                    setValue={setEmail}
                />

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

                <CustomInput 
                    placeholder="Confirm Password" 
                    value={confirmPassword} 
                    setValue={setConfirmPassword}
                    secureTextEntry={true}
                />
            </View>

            <View style={styles.buttonContainer}>
            <CustomButton 
            text="Register" 
            onPress={onSignInPressed}
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