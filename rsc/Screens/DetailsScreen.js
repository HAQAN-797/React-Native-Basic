import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const DetailsScreen = ({ route }) => {
  const { imagepath, webimage, name, registrationNumber, cnic } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      <Text style={styles.label}>Name:</Text>
      <Text style={styles.value}>{name}</Text>

      <Text style={styles.label}>Registration Number:</Text>
      <Text style={styles.value}>{registrationNumber}</Text>

      <Text style={styles.label}>CNIC:</Text>
      <Text style={styles.value}>{cnic}</Text>

      <Text style={styles.label}>Local Image:</Text>
      <Image
        source={{ uri: imagepath }}
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={styles.label}>Web Image:</Text>
      <Image
        source={{ uri: webimage }}
        style={styles.image}
        resizeMode="contain"
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  value: {
    marginBottom: 15,
    fontSize: 16,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
});

export default DetailsScreen;
