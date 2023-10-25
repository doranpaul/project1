import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CustomButton from '../../components/CustomButton';
import { Picker } from '@react-native-picker/picker';

const InitialRegistrationScreen = ({ navigation }) => {
  const [exerciseFrequency, setExerciseFrequency] = useState('');
  const [mindfulnessPreviously, setMindfulnessPreviously] = useState('');

  const onSubmitPressed = () => {
    console.log("Confirm Email pressed")
    navigation.navigate('User Home')
};
  return (
    <ScrollView style={styles.scrollView}>
        <View style={{ flex: 1, padding: 20 }}>
            <Text style={styles.text}>How many times a week do you exercise?</Text>
                <Picker style={styles.picker}
                    selectedValue={exerciseFrequency}
                    onValueChange={(itemValue) => setExerciseFrequency(itemValue)}
                >
                <Picker.Item label="0-2 times" value="0-2" />
                <Picker.Item label="3-4 times" value="3-4" />
                <Picker.Item label="5+ times" value="5+" />
                </Picker>

                <Text style={styles.text}>Have you practiced mindfulness or meditation before?</Text>
                <Picker style={styles.picker}
                    selectedValue={mindfulnessPreviously}
                    onValueChange={(itemValue) => setMindfulnessPreviously(itemValue)}
                >
                <Picker.Item label="Yes" value="Yes" />
                <Picker.Item label="No" value="No" />
        
                </Picker>

                <CustomButton 
                    text="Submit"
                    onPress={onSubmitPressed}
                    type="PRIMARY"
                />
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

    text: {
        color:'whitesmoke',
        fontSize: 16,
        marginVertical:20,
    },

    picker: {
        backgroundColor: 'whitesmoke',
        zIndex: 1,
        borderRadius:5,
    },

   
});


export default InitialRegistrationScreen;
