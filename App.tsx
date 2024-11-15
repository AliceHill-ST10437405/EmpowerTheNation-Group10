import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from "@expo/vector-icons";
import HomeScreen from "./screens/Home";
import LoginScreen from "./screens/Login";
import SixWeekScreen from "./screens/SixWeek";
import SixMonthScreen from "./screens/SixMonth";
import AboutUsScreen from "./screens/AboutUs";
import OurServicesScreen from "./screens/OurServices";
import ContactScreen from "./screens/Contact";
import ChildMindingScreen from "./screens/ChildMinding";
import CookingScreen from "./screens/Cooking";
import GardenMaintenance from "./screens/GardenMaintenance";
import FirstAidScreen from "./screens/FirstAid";
import SewingScreen from "./screens/Sewing";
import LandscapingScreen from "./screens/Landscaping";
import { RootStackParamList } from "./screens/RootStackParams";
import LifeSkillsScreen from "./screens/LifeSkills";
import Registration from "./screens/Registration";

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootStackParamList>();

// Tab Navigator (only accessible after login)
function TabNavigator() {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused ? 'home' : 'home';
        } else if (route.name === 'AboutUs') {
          iconName = focused ? 'info-circle' : 'info-circle';
        } else if (route.name === 'Contact') {
          iconName = focused ? 'envelope' : 'envelope-o';
        } else if (route.name === 'OurServices') {
          iconName = focused ? 'cogs' : 'cog';
        }

          return <FontAwesome name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#007bff',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          paddingBottom: 10,
          paddingTop: 10,
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          paddingBottom: 5,
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="AboutUs" component={AboutUsScreen} />
      <Tab.Screen name="OurServices" component={OurServicesScreen} />
      <Tab.Screen name="Contact" component={ContactScreen} />
      <Tab.Screen name="Registration" component={Registration} />
    </Tab.Navigator>
  );
}

// Stack Navigator that includes login flow
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {/* Login screen */}
        <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
  

        {/* Main app (shown after login) */}
        <Stack.Screen
          name="Main"
          component={TabNavigator}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Registration"
          component={Registration}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="SixMonth" component={SixMonthScreen}  options={{
          headerBackTitleVisible: false, // Hide the back button text
          headerTitle: '',               // Hide the title by setting it to an empty string
        } as any}    
         />
        <Stack.Screen name="SixWeek" component={SixWeekScreen} options={{
          headerBackTitleVisible: false, 
          headerTitle: '',               
        } as any}/>
        <Stack.Screen name="ChildMinding" component={ChildMindingScreen}  options={{
          headerBackTitleVisible: false, 
          headerTitle: '',               
        }as any}/>
        <Stack.Screen name="Cooking" component={CookingScreen}  options={{
          headerBackTitleVisible: false, 
        }as any}/>
        <Stack.Screen name="FirstAid" component={FirstAidScreen}  options={{
          headerBackTitleVisible: false, 
          headerTitle: '',               
        } as any }/>
        <Stack.Screen name="GardenMaintenance" component={GardenMaintenance}  options={{
          headerBackTitleVisible: false, 
          headerTitle: '',               
        } as any}/>
        <Stack.Screen name="Landscaping" component={LandscapingScreen}  options={{
          headerBackTitleVisible: false, 
          headerTitle: '',              
        } as any}/>
        <Stack.Screen name="LifeSkills" component={LifeSkillsScreen} options={{
          headerBackTitleVisible: false, 
          title: '',       
        } as any} />
        <Stack.Screen name="Sewing" component={SewingScreen}  options={{
          headerBackTitleVisible: false, // Hide the back button text
          headerTitle: '',               // Hide the title by setting it to an empty string
        }as any}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

