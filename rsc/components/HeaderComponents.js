import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet, SafeAreaView } from 'react-native';

const HeaderComp = ({ goBack = () => {}, text }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <TouchableOpacity onPress={goBack} style={styles.goBackButton}>
          <Text style={styles.goBackText}>Go Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>{text}</Text>
      </View>
    </SafeAreaView>
  );
};

export default HeaderComp;

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#f8f9fa', // Background color for the safe area
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15, // Horizontal padding for spacing
    paddingVertical: 10, // Vertical padding for spacing
    backgroundColor: '#007bff', // Header background color
  },
  goBackButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#0056b3', // Background color for the "Go Back" button
  },
  goBackText: {
    color: '#ffffff', // Text color for the "Go Back" button
    fontSize: 16,
    fontWeight: 'bold',
  },
  headerText: {
    color: '#ffffff', // Text color for the header title
    fontSize: 20,
    fontWeight: 'bold',
  },
});
