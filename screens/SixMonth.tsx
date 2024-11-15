import { FontAwesome } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';

// Import ImageBackground from React Native
export default function SixMonthScreen({ navigation }) {

  // Define state for search input and available courses
  const [searchText, setSearchText] = useState('');
  const [courses] = useState([
    { title: 'First Aid', description: ' first aid awareness and basic life support.', screen: 'FirstAid' },
    { title: 'Sewing', description: 'To provide alterations and new garment tailoring services.', screen: 'Sewing' },
    { title: 'Landscaping', description: 'Learn landscaping services for new and established gardens.', screen: 'Landscaping' },
    { title: 'Life Skills', description: 'Navigate through and create basic life necessities.', screen: 'LifeSkills' }
  ]);

  // Filter courses based on search input
  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <ImageBackground
      source={require('../assets/SixWeekH.jpg')} // Replace with the correct image path
      style={styles.backgroundImage}
    >
      <ScrollView style={styles.container}>
        {/* Greeting and Search Bar */}
        <View style={styles.header}>
          <Text style={styles.greeting}>Hello,</Text>
          <Text style={styles.subGreeting}>Lets find your Course</Text>
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search your course"
              value={searchText}
              onChangeText={(text) => setSearchText(text)}
            />
            <FontAwesome name="search" size={24} color="black" />
          </View>
        </View>

     
        {/* Show filtered courses */}
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course, index) => (
            <View key={index} style={styles.infoContainer}>
              <Text style={styles.infoTitle}>{course.title}</Text>
              <Text style={styles.infoText}>{course.description}</Text>
              <TouchableOpacity
                style={styles.arrowIcon}
                onPress={() => navigation.navigate(course.screen)}
              >
                <FontAwesome name="arrow-right" size={20} color="black" />
              </TouchableOpacity>
            </View>
          ))
        ) : (
          <Text style={styles.noResultsText}>No courses found</Text>
        )}
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // This will make the image cover the entire screen
  },
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    marginBottom: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFF"
  },
  subGreeting: {
    fontSize: 18,
    color: "#FFFF",
    fontWeight: "bold",
    shadowColor: "#000",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    padding: 5,
  },
 
  infoContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    
  },
  infoText: {
    fontSize: 16,
    textAlign: "center",
  },
  arrowIcon: {
    alignSelf: "flex-end",
    marginTop: 10,
  },
  noResultsText: {
    fontSize: 18,
    color: "#888",
    textAlign: 'center',
    marginTop: 20,
  }
});
