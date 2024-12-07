import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, ScrollView, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RegistrationScreen = () => {
  const [imagePath, setImagePath] = useState('');
  const [webimage, setWebimage] = useState('');
  const [name, setName] = useState('');
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [cnic, setCnic] = useState('');
  const navigation = useNavigation();

  const handleSubmit = () => {
    if (!name || !registrationNumber || !cnic || !imagePath || !webimage) {
      Alert.alert('Validation Error', 'All fields are required!');
      return;
    }

    // Navigate to the Details screen and pass data as parameters
    navigation.navigate('Details', {
      imagePath,
      webimage,
      name,
      registrationNumber,
      cnic,
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
       <View style={styles.inputContainer}>
        <Image source={require('../assets/Images/images.png')}/>
        <Text style={styles.label}>Relative Image Path:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter image path (e.g., myImage.png)"
          onChangeText={setImagePath}
          value={imagePath}
        />
      </View>
      <View></View>
            <View style={styles.inputContainer}>
        <Text style={styles.label}>Web Image URL:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter image URL"
          onChangeText={setWebimage}
          value={webimage}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Name"
          onChangeText={setName}
          value={name}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Registration Number:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Registration Number"
          onChangeText={setRegistrationNumber}
          value={registrationNumber}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>CNIC:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter CNIC"
          onChangeText={setCnic}
          value={cnic}
        />
      </View>

      <Button title="Submit" onPress={handleSubmit} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 50,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
});

export default RegistrationScreen;
