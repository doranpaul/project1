import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ScrollView, StyleSheet } from 'react-native';
import axios from 'axios'; // Make sure to install axios if you haven't: npm install axios

const LoggedInHomeScreen = () => {
  const [routines, setRoutines] = useState([]);

  useEffect(() => {
    // Fetch recommended routines from your backend based on the user's profile.
    axios.get('https://yourbackendurl.com/routines?level=...')
         .then(response => {
             setRoutines(response.data);
         })
         .catch(error => {
             console.error("Error fetching routines:", error);
         });
  }, []);

  return (
    <ScrollView style={styles.scrollView}>
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={styles.text}>Welcome "Name"</Text>
      <Text></Text>
      <Text style={styles.text}>Thank you for answering the initial questions, we can now offer you some recommended exercise and mindfulness routines based on your 
        answers. Enjoy the next steps in your journey towards positive mental health.</Text>
      <Text></Text>
      <Text style={styles.text}>Recommended Routines:</Text>
      <FlatList
        data={routines}
        renderItem={({ item }) => <Text>{item.title}</Text>}
        keyExtractor={item => item.routine_id.toString()}
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
    },

   
});

export default LoggedInHomeScreen;
