import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Modal } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function FirstAidScreen({ navigation }) {
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
        <Image source={require('../assets/FirstAid.jpg')} style={styles.headerImage} />
      </View>

      {/* Course Information */}
      <Text style={styles.courseTitle}>First Aid</Text>
      <Text style={styles.mentorText}>Empowering the Nation</Text>

      
      <View style={styles.tabsContainer}>
        
        <TouchableOpacity
          style={styles.tab}
          onPress={() => handlePress(
            `• Basic CPR and choking management.\n• Wound care, bandaging, and controlling bleeding.\n• Managing burns, fractures, and sprains.\n• How to respond to allergic reactions, poisoning, and seizures.\n• Creating a personal and workplace first aid kit.`,
            'What You’ll Learn:'
          )}
        >
          <Text style={styles.tabText}>Overview</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => handlePress(
            `• CPR mannequins.\n• Bandages, dressings, and antiseptics.\n• Splints and slings.\n• Latex gloves and masks.`,
            'Materials You’ll Need:'
          )}
        >
          <Text style={styles.tabText}>Materials</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => handlePress(
            `• Confidence in managing medical emergencies.\n• CPR and choking response skills.\n• Understanding of workplace safety protocols.\n• Building and maintaining a first aid kit.`,
            'Skills You Will Develop:'
          )}
        >
          <Text style={styles.tabText}>Skills</Text>
        </TouchableOpacity>
      </View>

      {/* About Course */}
      <View style={styles.aboutContainer}>
        <Text style={styles.aboutTitle}>About Course</Text>
        <Text style={styles.aboutText}>
          This course equips participants with essential first aid skills to handle emergencies until professional medical help arrives.
        </Text>
      </View>

      {/* Stats */}
      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>R1500</Text>
          <Text style={styles.statLabel}>Cost</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>130</Text>
          <Text style={styles.statLabel}>Classes</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>6 Months</Text>
          <Text style={styles.statLabel}>Duration</Text>
        </View>
      </View>

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
    backgroundColor: "#F9F3EB",
  },
  headerContainer: {
    position: "relative",
    elevation: 5,
  },
  headerImage: {
    width: "100%",
    height: 250,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  courseTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    textAlign: 'center',
    marginTop: 10,
  },
  mentorText: {
    fontSize: 16,
    color: "#777",
    textAlign: 'center',
    marginBottom: 20,
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
    color: "#e74c3c",
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
    color: "#e74c3c",
  },
  statLabel: {
    fontSize: 14,
    color: "#777",
  },
  aboutContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  aboutTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: 'center',
    marginTop: 10,
    color: "#333",
  },
  aboutText: {
    fontSize: 16,
    color: "#000",
    textAlign: 'center',
    marginTop: 5,
    fontWeight: 'semibold',
  },
  enrollButton: {
    backgroundColor: "#e74c3c",
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
    shadowColor: "#000",
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: '#FFE2DC',
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  icon: {
    marginLeft: 10,
  },

  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#A72002'
  },
  modalText: {
    fontSize: 16,
    textAlign: 'center',
    color: "#000",
    marginBottom: 15,
    fontWeight: 'bold',
  },
  closeButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#e74c3c',
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
