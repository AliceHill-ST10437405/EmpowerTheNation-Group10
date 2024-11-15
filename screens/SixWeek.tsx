import { FontAwesome } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';

export default function SixWeekScreen({ navigation }) {
  // Define state for search input and available courses
  const [searchText, setSearchText] = useState('');
  const [courses] = useState([
    { title: 'Garden maintenance', description: 'Baic knowledge of watering, pruning and planting in a domestic garden.', screen: 'GardenMaintenance' },
    { title: 'Cooking', description: 'Prepare and cook nutritious family meals.', screen: 'Cooking' },
    { title: 'Child Minding', description: 'Learn to provide basic child and baby care.', screen: 'ChildMinding' }
  ]);

  // Filter courses based on search input
  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <ImageBackground
    source={require('../assets/SixMonthh.jpg')} 
    style={styles.backgroundImage}
  >
    <ScrollView style={styles.container}>
      {/* Greeting and Search Bar */}
      <View style={styles.header}>
        <Text style={styles.greeting}>Hello,</Text>
        <Text style={styles.subGreeting}>Lets find your course</Text>
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
              <FontAwesome name="arrow-right" size={24} color="black" />
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
  container: {
    flex: 1,
    padding: 20,
   
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // This will make the image cover the entire screen
  },
  header: {
    marginBottom: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000"
  },
  subGreeting: {
    fontSize: 18,
      color:  "#000"
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
    shadowColor: "#fff",
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

