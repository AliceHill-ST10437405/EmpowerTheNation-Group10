import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Modal } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function GardenMaintenanceScreen({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalText, setModalText] = useState('');


  const handlePress = (text, title) => {
    setModalTitle(title);
    setModalText(text);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      {/* Header with Image */}
      <View style={styles.headerContainer}>
      <Image
          source={require('../assets/gardening.jpg')} 
          style={styles.headerImage}
        />
     
      </View>

      {/* Course Information */}
     
        <Text style={styles.courseTitle}>Garden Maintenace</Text>
        <Text style={styles.mentorText}>Empowering the Nation </Text>

        <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={styles.tab}
          onPress={() =>
            handlePress(
             `• Basics of soil preparation and plant selection.\n • Planting techniques for flowers, shrubs, and trees.\n• How to maintain lawns, flowerbeds, and vegetable gardens.\n• Pest control and disease prevention.\n• Seasonal garden care and landscape design tips.`,
              'What You’ll Learn:',
            )
          }
        >
          <Text style={styles.tabText}>Overview</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab}
          onPress={() =>
            handlePress(
             `• Gardening tools (trowels, pruning shears, watering cans).\n• Fertilizers and soil conditioners.\n• A small garden space or plot to practice hands-on tasks.\n• Plants, seeds, or saplings (as specified per lesson).`,
              'Materials You’ll Need:',
            
            )
          }
        >
          <Text style={styles.tabText}>Materials</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab}
          onPress={() =>
            handlePress(
             `• Ability to plant and maintain a variety of plants and trees. \n• Knowledge of irrigation systems and water conservation methods.\n• Proficiency in pruning, trimming, and shaping plants. \n• Understanding of pest control and environmentally-friendly gardening. \n• Landscape design skills for creating a visually appealing garden.`,
            'Skills You Will Develop:',
            )
          }
        >
          <Text style={styles.tabText}>Skills</Text>
        </TouchableOpacity>
      </View>
   

      {/* About Course */}
      <View style={styles.aboutContainer}>
        <Text style={styles.aboutTitle}>About Course</Text>
        <Text style={styles.aboutText}>
        Discover the techniques and tools needed to create and maintain a beautiful, thriving garden. This course is perfect for beginners or those looking to enhance their gardening skills, covering everything from planting and pruning to seasonal care.
        </Text>
      </View>
      <View style={styles.statsContainer}>
      <View style={styles.statBox}>
          <Text style={styles.statValue}>R750</Text>
          <Text style={styles.statLabel}>Cost</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>40</Text>
          <Text style={styles.statLabel}>Classes</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>6 Weeks</Text>
          <Text style={styles.statLabel}>Duration</Text>
        </View>
      </View>
      {/* Enroll Button */}
      <TouchableOpacity style={styles.enrollButton} onPress={() => navigation.navigate('Registration')}>
        <Text style={styles.enrollButtonText}>Enroll Now</Text>
        <Icon name="arrow-right" size={20} color="#fff" style={styles.icon} /> 
      </TouchableOpacity>

      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{modalTitle}</Text>
            <Text style={styles.modalText}>{modalText}</Text>
            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EBF7D4",
  },
  icon: {
    marginLeft: 10, 
  },
  modalTitle: {
     fontSize: 20, 
     fontWeight: 'bold', 
     marginBottom: 10, 
     textAlign: 'center',
     color: '#207e3c'
     },
  headerContainer: {
    position: "relative",
  },
  headerImage: {
    width: "100%",
    height: 250,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
 
  courseInfoContainer: {
    padding: 20,
  },
  courseTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    textAlign: 'center'
  },
  mentorText: {
    fontSize: 16,
    color: "#888",
    marginBottom: 20,
     textAlign: 'center'
  },
  tabsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  tabText: {
    fontSize: 16,
    color: "#207e3c",
    fontWeight: "bold",
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 15,
    marginHorizontal: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  statBox: {
    alignItems: "center",
  },
  statValue: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#207e3c",
  },
  statLabel: {
    fontSize: 14,
    color: "#777",
  },
  aboutContainer: {
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  aboutTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign:'center',
    marginTop: 10,

  },
  aboutText: {
    fontSize: 16,
    color: "#000",
  },
  enrollButton: {
    backgroundColor: "#207e3c",
    paddingVertical: 15,
    borderRadius: 10,
    marginHorizontal: 20,
    alignItems: "center",
    marginTop: 60,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  enrollButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: '#BED09A',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: { 
    fontSize: 18, 
    textAlign: 'center', 
    marginBottom: 15,
    color: '#091D34'
  },
  closeButton: { 
    marginTop: 10, 
    padding: 10, 
    backgroundColor: '#207e3c', 
    borderRadius: 5 
  },
  closeButtonText: { 
    color: 'white', fontSize: 16 },
});