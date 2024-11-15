import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Image,
    TouchableOpacity,
    Modal,
    TextInput,
} from "react-native";

export default function LoginScreen({ navigation }) {
    const [isLoginVisible, setLoginVisible] = useState(false);
    const [isSignUpVisible, setSignUpVisible] = useState(false);

    // This should only navigate after login or sign-up is successful
    const handleLogin = () => {
        setLoginVisible(false);
        navigation.navigate('Main', { screen: 'Home' });
    };

    const handleSignUp = () => {
        setSignUpVisible(false);
        navigation.navigate('Main', { screen: 'Home' });
    };

    return (
        <ImageBackground
            source={require('../assets/login.jpg')}
            style={styles.background}
            resizeMode="cover" 
        >
            {/* Move logo to the top */}
            <Image
                source={require('../assets/logoPlain.png')}
                style={styles.logo}
                resizeMode="contain"
            />

            {/* Container for the text */}
            <View style={styles.textContainer}>
                <Text style={styles.text}>Empower the Nation</Text>
            </View>

            {/* Container for the buttons */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => setLoginVisible(true)}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => setSignUpVisible(true)}
                >
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
            </View>

            {/* Login Modal */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={isLoginVisible}
                onRequestClose={() => setLoginVisible(false)}
            >
                <View style={styles.modalView}>
                    <Text style={styles.modalTitle}>Login</Text>
                    <TextInput style={styles.input} placeholder="Email" />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        secureTextEntry
                    />
                    <TouchableOpacity
                        style={styles.modalButton}
                        onPress={handleLogin} // Use the handleLogin function
                    >
                        <Text style={styles.modalButtonText}>Done</Text>
                    </TouchableOpacity>
                </View>
            </Modal>

            {/* Sign Up Modal */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={isSignUpVisible}
                onRequestClose={() => setSignUpVisible(false)}
            >
                <View style={styles.modalView}>
                    <Text style={styles.modalTitle}>Sign Up</Text>
                    <TextInput style={styles.input} placeholder="Email" />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        secureTextEntry
                    />
                    <TouchableOpacity
                        style={styles.modalButton}
                        onPress={handleSignUp} // Use the handleSignUp function
                    >
                        <Text style={styles.modalButtonText}>Done</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
    },
    textContainer: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 60,
    },
    logo: {
        position: "absolute",
        top: 50, // Set an explicit value to position the logo
        width: 200,
        height: 300,
        alignSelf: "center", // Centers the logo horizontally
    },
    text: {
        fontSize: 28,
        color: "white",
        fontWeight: "bold",
        marginTop: 50,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "80%",
        marginTop: 100,
    },
    button: {
        backgroundColor: "#008CBA",
        padding: 15,
        borderRadius: 5,
        width: "45%",
        alignItems: "center",
    },
    buttonText: {
        color: "white",
        fontSize: 16,
    },
    modalView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        color: "#fff",
    },
    input: {
        width: "80%",
        backgroundColor: "#fff",
        padding: 10,
        marginVertical: 10,
        borderRadius: 5,
    },
    modalButton: {
        backgroundColor: "#28a745",
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
    },
    modalButtonText: {
        color: "#fff",
        fontSize: 16,
    },
});
