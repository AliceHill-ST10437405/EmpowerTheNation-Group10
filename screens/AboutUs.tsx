import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, Modal } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { PieChart } from 'react-native-chart-kit'; 
import { Dimensions, ScrollView } from 'react-native';




const AboutUsScreen = () => {
  const [modalVisible, setModalVisible] = useState(false); // State to control modal visibility
  const screenWidth = Dimensions.get('window').width;

  const passRateData = [
    {
      name: "Passed",
      population: 95,
      color: "#87bdd8",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Failed",
      population: 5,
      color: "#878f99",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    }
  ];
  
  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <ImageBackground
        source={require('../assets/pencil.jpg')}
        style={styles.headerImage}
      >
        <Text style={styles.headerText}>Our Story</Text>

        <TouchableOpacity style={styles.openButton} onPress={() => setModalVisible(true)}>
          <Text style={styles.buttonText}>Read More</Text>
        </TouchableOpacity>
      </ImageBackground>

      {/* Modal Component */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}  // For Android back button
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Who We Are</Text>

            <Text style={styles.modalContentText}>
              Empowering the Nation was established in 2018 by Precious Radebe, and offers courses in Johannesburg.
              Hundreds of domestic workers and gardeners have been trained on both the six-month long
              Learnerships and six-week short skills training Programmes to empower themselves and 
              provide more marketable skills.
            </Text>

            {/* Cancel button to close the modal */}
            <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.closeButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Text style={styles.Header}>Our Vision</Text>
      <Text style={styles.headerStory}>
        Creating a sustainable future for these workers by providing them with the skills is vital for their future life. 
        We can equip them with skills and the confidence to get to where they want to be, and for them to be able to earn 
        money to where they are comfortable and where they can provide for their families.
      </Text>


      <Text style={styles.chartTitle}>Pass Rate </Text>
      <PieChart
      data={passRateData}
      width={screenWidth}
      height={220}
      chartConfig={{
        backgroundColor: '#1cc910',
        backgroundGradientFrom: '#eff3ff',
        backgroundGradientTo: '#efefef',
        decimalPlaces: 2, 
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      }}
      accessor="population"
      backgroundColor="transparent"
      paddingLeft={"15"}
      absolute // Shows the percentage in the pie chart slices
    />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  Header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginTop: 30,
  },
  headerStory: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    justifyContent: 'center',
    padding: 15, 
    borderWidth: 2, 
    borderColor: '#FCA311', 
    borderRadius: 10, 
    backgroundColor: '#fff', 
    textAlign: 'center', 
    marginTop: 20, 
  },
  headerImage: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  openButton: {
    backgroundColor: '#FCA311',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalView: {
    width: 300,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 5,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  modalContentText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: '#f44336',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
  chartTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 10,
  },
});

export default AboutUsScreen;


