import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, Dimensions, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';



const HomeScreen = ({navigation}) => {


  return (
    <ScrollView contentContainerStyle={styles.container}>
  <View style={styles.bannerContainer}>
        <Image source={require('../assets/HomeLogo.jpg')} style={styles.bannerImage} />
      </View>

      <View style={styles.banner}>
        <View style={styles.textContainer}>
          <Text style={styles.discountText}>Get up to 15% off three or more courses.</Text>
          <Text style={styles.arrivalsText}>Buy any three courses and get 10% off</Text>
          <Text style={styles.description}> Buy two courses and get 5% Off </Text>
            <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Registration')}>
        <Text style={styles.buttonText}>Get Your Course Now</Text>
      </TouchableOpacity>
        </View>
        
      </View>
      {/* Featured Courses */}
      <View style={styles.courseOfTheWeek}>
        <Image source={require('../assets/SixWeekH.jpg')} style={styles.courseWeekImage} />
        <View style={styles.courseDetails}>
          <Text style={styles.courseWeekTitle}>Six Month Courses</Text>
          <Text style={styles.courseDuration}>4 Courses Available</Text>
          <View style={styles.rating}>
            <FontAwesome name="star" size={16} color="gold" />
            <FontAwesome name="star" size={16} color="gold" />
            <FontAwesome name="star" size={16} color="gold" />
            <FontAwesome name="star" size={16} color="gold" />
          </View>
        </View>
        <TouchableOpacity style={styles.arrowIcon} onPress={() => navigation.navigate('SixMonth')}>
          <FontAwesome name="arrow-right" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.courseOfTheWeek}>
        <Image source={require('../assets/SixMonthh.jpg')} style={styles.courseWeekImage} />
        <View style={styles.courseDetails}>
          <Text style={styles.courseWeekTitle}>Six Week Courses</Text>
          <Text style={styles.courseDuration}>3 Courses  Available</Text>
          <View style={styles.rating}>
            <FontAwesome name="star" size={16} color="gold" />
            <FontAwesome name="star" size={16} color="gold" />
            <FontAwesome name="star" size={16} color="gold" />
            <FontAwesome name="star" size={16} color="gold" />
            <FontAwesome name="star-half" size={16} color="gold" />
          </View>
        </View>
        <TouchableOpacity style={styles.arrowIcon} onPress={() => navigation.navigate('SixWeek')}>
          <FontAwesome name="arrow-right" size={24} color="black" />
        </TouchableOpacity>
      </View>
   
        
    
     <View style={styles.trendingSection}>
     <View style={styles.sectionHeader}>
       <Text style={styles.sectionTitle}>Our Services</Text>
       <TouchableOpacity style={styles.viewAllButton} onPress={() => navigation.navigate('Vision')}>
         <Text style={styles.viewAllText}>View all</Text>
       </TouchableOpacity>
     </View>
   </View>
   </ScrollView>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  banner: {
    flexDirection: 'row',
    backgroundColor: '#14213D', // Dark background for the left side
    padding: 20,
    borderRadius: 10,
  },
  textContainer: {
    backgroundColor: '#14213D', // Dark background color to match your style
    borderRadius: 10,
    padding: 5,
    width: '100%',
    maxWidth: 400, // Keep the text container compact
  },
  discountText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  arrivalsText: {
    color: '#FCA311', // Highlight the second offer with orange color
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    color: '#E5E5E5', // Light gray for descriptive text
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FCA311', // Customize your button color
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff', // Customize text color
    fontSize: 16,
    fontWeight: 'bold',
  },
 
  trendingSection: {
    marginBottom: 20,
    
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  viewAllButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#FF4081',
    borderRadius: 20,
    alignItems: 'center',
  },
  viewAllText: {
    color: '#FFF',
    fontWeight: '600',
    alignItems: 'center',
  },
  productCard: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 10,
    marginRight: 15,
    width: Dimensions.get('window').width * 0.35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 5 },
    elevation: 3,
  },
  productImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  productTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  productDiscount: {
    fontSize: 12,
    color: '#FF4081',
  },
  bannerContainer: {
    marginBottom: 20,
    
    
  },
  bannerImage: {
    width: '100%',
    height: 190,
    borderRadius: 10,
  },
  newArrivalsSection: {
    marginBottom: 20,
  },
  courseOfTheWeek: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
    marginTop: 5
  },
  courseWeekImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  courseDetails: {
    flex: 1,
    marginLeft: 16,
    justifyContent: 'center',
  },
  courseWeekTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  courseDuration: {
    fontSize: 12,
    color: '#888',
    marginVertical: 5,
  },
  rating: {
    flexDirection: 'row',
  },
  arrowIcon: {
    justifyContent: 'center',
  },
});

export default HomeScreen;
