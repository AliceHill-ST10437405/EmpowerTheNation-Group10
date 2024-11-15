import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Modal, TouchableOpacity, Alert, ScrollView } from 'react-native';

type Course = {
  title: string;
  price: number;
};
const courses = [
  { title: 'Cooking', price: 750 },
  { title: 'Child Minding', price: 750 },
  { title: 'Garden Maintenance', price: 750 },
  { title: 'First Aid', price: 1500 },
  { title: 'Life Skills', price: 1500 },
  { title: 'Landscaping', price: 1500 },
  { title: 'Sewing', price: 1500 },
];

export default function Registration() {
  const [selectedCourses, setSelectedCourses] = useState<Course[]>([]);
  const [totalFees, setTotalFees] = useState(0);
  const [discountedTotal, setDiscountedTotal] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [thankYouVisible, setThankYouVisible] = useState(false);

  // Form input states
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [campus, setCampus] = useState('');
  const [year, setYear] = useState('');

  const toggleCourseSelection = (course: Course) => {
    const isSelected = selectedCourses.some((selected) => selected.title === course.title);
    if (isSelected) {
      setSelectedCourses(selectedCourses.filter((selected) => selected.title !== course.title));
    } else {
      setSelectedCourses([...selectedCourses, course]);
    }
  };

  const calculateTotalFees = () => {
    const total = selectedCourses.reduce((sum, course) => sum + course.price, 0);
    let discount = 0;

    if (selectedCourses.length === 2) {
      discount = 0.05;
    } else if (selectedCourses.length === 3) {
      discount = 0.10;
    } else if (selectedCourses.length > 3) {
      discount = 0.15;
    }

    const discountedTotal = total - total * discount;
    const totalWithVAT = (discountedTotal * 1.15).toFixed(2);

    setTotalFees(total);
    setDiscountedTotal(parseFloat(totalWithVAT));
  };

  const clearSelection = () => {
    setSelectedCourses([]);
    setTotalFees(0);
    setDiscountedTotal(0);
  };

  const handleEnroll = () => {
    setModalVisible(true);
  };

  const handleSubmit = () => {
    // Add form validation logic if needed
    if (!email || !phoneNumber || !campus || !year) {
      Alert.alert("Please fill all fields");
      return;
    }

    setModalVisible(false);
    setThankYouVisible(true);
    setTimeout(() => setThankYouVisible(false), 3000);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Make your future a reality</Text>
      <Text style={styles.subheader}>Select your courses:</Text>

      {courses.map((course) => {
        const isSelected = selectedCourses.some((selected) => selected.title === course.title);
        return (
          <View key={course.title} style={styles.courseContainer}>
            <Text style={styles.courseText}>{`${course.title} - R${course.price}`}</Text>
            <TouchableOpacity
              style={[styles.selectButton, isSelected && styles.deselectButton]}
              onPress={() => toggleCourseSelection(course)}
            >
              <Text style={styles.buttonText}>{isSelected ? 'DESELECT' : 'SELECT'}</Text>
            </TouchableOpacity>
          </View>
        );
      })}

      <TouchableOpacity style={styles.calculateButton} onPress={calculateTotalFees}>
        <Text style={styles.buttonText}>TOTAL</Text>
      </TouchableOpacity>

      <Text style={styles.totalText}>Total after discount and VAT: R{discountedTotal}</Text>

      <TouchableOpacity style={styles.enrollButton} onPress={handleEnroll}>
        <Text style={styles.buttonText}>ENROLL</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.clearButton} onPress={clearSelection}>
        <Text style={styles.buttonText}>CLEAR</Text>
      </TouchableOpacity>

      {/* Modal for Enrollment Form */}
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalHeader}>Enter Your Details</Text>

            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              style={styles.input}
              placeholder="Phone Number"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              keyboardType="phone-pad"
            />
            <TextInput
              style={styles.input}
              placeholder="Campus"
              value={campus}
              onChangeText={setCampus}
            />
            <TextInput
              style={styles.input}
              placeholder="Year"
              value={year}
              onChangeText={setYear}
              keyboardType="numeric"
            />

            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
              <Text style={styles.buttonText}>DONE</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Thank You Message */}
      {thankYouVisible && (
        <View style={styles.thankYouContainer}>
          <Text style={styles.thankYouText}>Thank you, let's create a new future!</Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F5EF',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 1,
  },
  subheader: {
    fontSize: 18,
    marginBottom: 15,
    textAlign: 'center',
    color: '#333',
  },
  courseContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
    marginHorizontal: 8,
    paddingHorizontal: 10,
    paddingVertical: 7,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  courseText: {
    fontSize: 16,
    color: '#000',
  },
  selectButton: {
    backgroundColor: '#289ECC',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  deselectButton: {
    backgroundColor: '#B66058',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
  calculateButton: {
    backgroundColor: '#289ECC',
    paddingVertical: 12,
    borderRadius: 8,
    marginVertical: 20,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  totalText: {
    fontSize: 20,
    marginVertical: 10,
    textAlign: 'center',
  },
  enrollButton: {
    backgroundColor: '#289ECC',
    paddingVertical: 12,
    borderRadius: 8,
    marginVertical: 10,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  clearButton: {
    backgroundColor: '#B66058',
    paddingVertical: 12,
    borderRadius: 8,
    marginVertical: 10,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  thankYouContainer: {
    position: 'absolute',
    bottom: 50,
    alignSelf: 'center',
    backgroundColor: '#d4edda',
    padding: 10,
    borderRadius: 8,
  },
  thankYouText: {
    color: '#155724',
    fontWeight: 'bold',
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
    backgroundColor: 'white',
    borderRadius: 8,
    alignItems: 'center',
  },
  modalHeader: {
    fontSize: 18,
    marginBottom: 15,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
  },
  submitButton: {
    backgroundColor: '#289ECC',
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginTop: 15,
    alignItems: 'center',
  },
});
