import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, FlatList, ImageBackground } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const OurServicesScreen = () => {
  const [review, setReview] = useState('');
  const [reviews, setReviews] = useState([]);

  const submitReview = () => {
    if (review.trim()) {
      setReviews([]);
      setReview('');
    }
  };


  return (
    
    <ScrollView style={styles.container}>
        <ImageBackground
      source={require('../assets/FeedBack.jpg')} 
        style={styles.headerImage}
      >
        <Text style={styles.headerText}>We Offer</Text>
      <View style={styles.listContainer}>
        <Text style={styles.listItem}>  Six-month courses for long, in-depth skill development.</Text>
        <Text style={styles.listItem}>Six-week courses to upskill workers for an easier and quicker entry into the job market.</Text>
      </View>
      </ImageBackground>
      
      <View style={styles.listContainer2}>
      <Text style={styles.subHeader}>We are dedicated to providing high-quality courses that help individuals grow their skills and reach their full potential.

Our mission is to empower people through knowledge and support their journey toward personal and professional growth. 

Join us today and take the next step in your learning journey!</Text>
      
      </View>

      <Text style={styles.subHeader}>Let us know your exprience</Text>
      <ImageBackground
      source={require('../assets/StarRating.jpg')} 
        style={styles.headerImage}>
      <TextInput
        style={styles.input}
        placeholder="Write your review..."
        value={review}
        onChangeText={setReview}
      />
      <Button title="Submit Review" onPress={submitReview} />
      </ImageBackground>
      </ScrollView>
    
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#e6e6e6',
   
  },
  headerImage: { 
    height: 200, 
    justifyContent: 'center', 
    alignItems: 'center',
    padding: 4,
    borderRadius: 15
   },

  headerText: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    color: '#000',
    textAlign: 'center',
  },
  
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  listContainer: {
    marginVertical: 20,

  },
  listItem: {
    fontSize: 16,
    color: '#000',
    marginBottom: 5, //  spacing between list items
    fontWeight: 'bold',
  },
  listContainer2: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    justifyContent: 'center',
    padding: 10, // Add padding inside the border
    borderWidth: 2, // Set border thickness
    borderColor: '#14213D', // Set a nice color (Green in this case)
    borderRadius: 10, // Optional: Make the border rounded
    backgroundColor: '#fff', // Optional: Add a background color to the text
    textAlign: 'center', // Optional: Center align text
    marginTop: 10, // Add some mar
  },
  listItem2: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 5, //  spacing between list items
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  subHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
  },
  offerings: {
    fontSize: 16,
    marginBottom: 20,
  },

  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 10,
    marginBottom: 10
  },
});

export default  OurServicesScreen;
