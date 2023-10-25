import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, TouchableOpacity } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import sootheGPTLogo from '../../../assets/images/sootheGPTlogo.png';

const SignInScreen = ({ navigation}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    
    
    const {height} = useWindowDimensions();

    const onSignInPressed = () => {
        console.log("Sign in pressed")
        navigation.navigate('SignIn');
    };

    const onRegisterPressed = () => {
        console.log("Register pressed")
        navigation.navigate('Confirm Email')
    };

    const onTermsOfUsePressed = () => {
        console.log("Terms of use pressed")
    };

    const onPrivacyPressed = () => {
        console.log("Privacy policy pressed")
    };

    return(
        
    <ScrollView style={styles.scrollView}>
        
        <View>
        <Text style={styles.title}>Create an account</Text>
            
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

                <View style={styles.buttonContainer}>
                    <CustomButton 
                    text="Register" 
                    onPress={onRegisterPressed}
                    />

                    <Text style={styles.text}>
                    By registering you confirm you have read our <Text style={styles.link} onPress={onTermsOfUsePressed}>Terms of 
                    use</Text> and <Text style={styles.link} onPress={onPrivacyPressed}>Privacy Policy.</Text>
                    </Text>
                </View>

                <CustomButton 
                text="Already have an account? "
                linkText="Sign in?"
                onPress={onSignInPressed}
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


export default SignInScreen;