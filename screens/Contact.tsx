import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert, ImageBackground, ScrollView } from 'react-native';
import { WebView } from 'react-native-webview';

// Define a type for each venue's data
type VenueDetails = {
  phone: string;
  email: string;
  address: string;
  mapUrl: string;
};

// Define the structure of the 'venues' object
type Venues = {
  Sandton: VenueDetails;
  Midrand: VenueDetails;
  Fourways: VenueDetails;
};

// Define the 'venues' object with a specific type
const venues: Venues = {
  Sandton: {
    phone: '066 214 6578',
    email: 'sandton.EmpowerTheNation@gmail.com',
    address: '1 Winston Ave, Rivonia, Sandton,2128, Johannesburg',
    mapUrl: 'https://maps.app.goo.gl/4eptMPbSYBpFGFz79'
  },
  Midrand: {
    phone: '066 214 1038',
    email: 'midrand.EmpowerTheNation@gmail.com',
    address: '112 2nd St, Halfway House Esate, Midrand, 1685,Johannesburg',
    mapUrl: 'https://maps.app.goo.gl/zzti4sgbP96GQMYT7'
  },
  Fourways: {
    phone: '066 214 2742',
    email: 'fourways.EmpowerTheNation@gmail.com',
    address: '7 Quelea St, Fourways, Sandton, 2055,Johannesburg',
    mapUrl: 'https://maps.app.goo.gl/kxnRqhzeo4qifyqJ6'
  }
};

export default function ContactScreen() {
  // States for user input and selected venue
  const [selectedVenue, setSelectedVenue] = useState<keyof Venues>('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [venueEmail, setVenueEmail] = useState('');
  const [mapUrl, setMapUrl] = useState('');
  
  // State for storing user data
  const [submittedData, setSubmittedData] = useState<any[]>([]);

  const handleVenueChange = (venue: keyof Venues) => {
    setSelectedVenue(venue);
    if (venue && venues[venue]) {
      setPhoneNumber(venues[venue].phone);
      setVenueEmail(venues[venue].email);
      setMapUrl(venues[venue].mapUrl);
    } else {
      setPhoneNumber('');
      setVenueEmail('');
      setMapUrl('');
    }
  };

  const handleSubmit = () => {
    if (!email || !phone || !message || !selectedVenue) {
      Alert.alert('Missing information', 'Please fill out all fields before proceeding.');
      return;
    }

    // Save the user data to the array
    const userData = {
      from_name: email,
      from_phone: phone,
      message: message,
      venue: selectedVenue,
    };
    
    setSubmittedData((prevData) => [...prevData, userData]);

    // Reset the form
    setEmail('');
    setPhone('');
    setMessage('');
    setSelectedVenue('');
    setPhoneNumber('');
    setVenueEmail('');
    setMapUrl('');
    
    Alert.alert('Success', 'Your information has been submitted!');
  };

  return (
    <ImageBackground source={require('../assets/Contact.jpg')} style={styles.background}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.item}>
          <Text style={styles.title}>Get in Touch</Text>
          <Text style={styles.subtitle}>Reach out to us with your questions or queries.</Text>

          {/* User Input Fields */}
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />

          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your phone number"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
          />

          <Text style={styles.label}>Message</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your message"
            value={message}
            onChangeText={setMessage}
            multiline
            numberOfLines={4}
          />

          {/* Venue Selection */}
          <Text style={styles.label}>Select Venue</Text>
          <Picker
            selectedValue={selectedVenue}
            onValueChange={(venue) => handleVenueChange(venue as keyof Venues)} // Ensure correct type
            style={styles.picker}
          >
            <Picker.Item label="Choose a venue" value="" />
            <Picker.Item label="Sandton" value="Sandton" />
            <Picker.Item label="Midrand" value="Midrand" />
            <Picker.Item label="Fourways" value="Fourways" />
          </Picker>

          {/* Display Venue Details */}
          {selectedVenue && venues[selectedVenue] ? (
            <View style={styles.contactInfo}>
              <Text style={styles.contactDetails}>Phone: {venues[selectedVenue].phone}</Text>
              <Text style={styles.contactDetails}>Email: {venues[selectedVenue].email}</Text>
              <Text style={styles.contactDetails}>Address: {venues[selectedVenue].address}</Text>
            </View>
          ) : null}

          {/* Map View */}
          {mapUrl ? (
            <WebView source={{ uri: mapUrl }} style={styles.map} />
          ) : null}

          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    padding: 20,
  },
  item: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#777',
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  picker: {
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  contactInfo: {
    marginTop: 10,
    marginBottom: 10,
  },
  contactDetails: {
    fontSize: 14,
  },
  map: {
    height: 200,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});
