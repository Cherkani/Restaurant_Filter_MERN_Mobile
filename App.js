import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Login from "./components/Login"; // Import the Login component
import Signup from "./components/Signup"; // Import the Login component
import Chat from "./components/Chat";
import Profile from "./components/Profile";
import New from "./components/New";
import { DrawerItem, DrawerContentScrollView } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import Filtrage from "./components/Filtrage";

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();
const DrawerNav = createDrawerNavigator();
// function Login({navigation}){
//   return (r
//     <View style={styles.container}>
//       <Text>Login Page</Text>
//       <Button onPress={() => navigation.navigate('Signup')}
//       title='Need an account?'  />
//     </View>
//   )
// }
// function Signup({ navigation }) {
//   return (
//     <View style={styles.container}>
//       <Text>Login Page</Text>
//       <Button
//         onPress={() => navigation.navigate("Tab")}
//         title="Need To Login?"
//       />
//     </View>
//   );
// }
function Dashboard({ navigation }) {
  return (
    <View style={styles.container}>
      {/* <Text>Dashboard</Text> */}

      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>logout</Text>
      </TouchableOpacity>
    </View>
  );
}

function Setting() {
  return (
    <View style={styles.container}>
      <Text>Settings Page</Text>
    </View>
  );
}
// function Profile() {
//   return (
//     <View style={styles.container}>
//       <Text>Profile Page</Text>
//     </View>
//   );
// }
// function Chat() {
//   return (
//     <View style={styles.container}>
//       <Text>Chat Room</Text>
//     </View>
//   );
// }
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.containerImage}>
        <Image source={require('./assets/image1.png')} style={styles.logoImage} />
        {/* Autres éléments du contenu du drawer */}
      </View>
      <DrawerItem
        label="About"
        labelStyle={{ color: 'black' }}
        icon={({ color, size }) => (
          <Ionicons name="md-home" size={size} color="black" />
        )}
        onPress={() => props.navigation.navigate("About")}
      />
      <DrawerItem
        labelStyle={{ color: 'black' }}
        label="Filtrage"
        icon={({ color, size }) => (
          <Ionicons name="md-filter" size={size} color="black" />
        )}
        onPress={() => props.navigation.navigate("Filtrage")}
      />
      {/* <DrawerItem
        labelStyle={{ color: 'black' }}
        label="Dashboard"
        icon={({ color, size }) => (
          <Ionicons name="md-home" size={size} color={color} />
        )}
        onPress={() => props.navigation.navigate("Dashboard")}
      /> */}
      <DrawerItem
        labelStyle={{ color: 'black' }}
        label="Restaurant List"
        icon={({ color, size }) => (
          <Ionicons name="md-restaurant" size={size} color="black" />
        )}
        onPress={() => props.navigation.navigate("Restaurant List")}
      />

      <DrawerItem
        labelStyle={{ color: 'black' }}
        label="Map"
        icon={({ color, size }) => (
          <Ionicons name="md-map" size={size} color="black" />
        )}
        onPress={() => props.navigation.navigate("Map")}
      />


      <DrawerItem
        labelStyle={{ color: 'black' }}
        label="Logout"
        icon={({ color, size }) => (
          <Ionicons name="md-log-out" size={size} color="black" />
        )}
        onPress={() => props.navigation.navigate("Login")}
      />
    </DrawerContentScrollView>
  );
}

function Drawer() {
  return (
    <DrawerNav.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <DrawerNav.Screen name="Login" component={Login} options={{ headerShown: false }} />

      <DrawerNav.Screen name="Restaurant List" component={Profile} />
      <DrawerNav.Screen name="Map" component={Chat} />
      <DrawerNav.Screen name="About" component={New} />
      <DrawerNav.Screen name="Filtrage" component={Filtrage} />

    </DrawerNav.Navigator>
  );
}
function Tab() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="Dashboard"
        component={Drawer}
        options={{ headerShown: true }}
      />
      <BottomTab.Screen name="Setting" component={Setting} />
    </BottomTab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Tab" component={Drawer} />
        {/*//etait avant 'Tab'
        
                <Stack.Screen name="Profile" component={Profile} />

        */}
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
  button: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
  containerImage: {
    flex: 0,
    marginTop: 50,
  },
  logoImage: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 20,
    backgroundColor: 'white',
  },
});

// import { StatusBar } from 'expo-status-bar';
// import { Button, StyleSheet, Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createDrawerNavigator } from '@react-navigation/drawer';

// const Stack = createNativeStackNavigator();
// const BottomTab = createBottomTabNavigator();
// const DrawerNav = createDrawerNavigator();

// function Login({navigation}){
//   return (
//     <View style={styles.container}>
//       <Text>Login Page</Text>
//       <Button onPress={() => navigation.navigate('Signup')}
//       title='Need an account?'  />
//     </View>
//   )
// }
// function Signup({navigation}){
//   return (
//     <View style={styles.container}>
//       <Text>Login Page</Text>
//       <Button onPress={() => navigation.navigate('Tab')}
//       title='Need To Login?'  />
//     </View>
//   )
// }
// function Dashboard({navigation}){
//   return (
//     <View style={styles.container}>
//       <Text>Dashboard</Text>
//       <Button title='Logout' onPress={() => navigation.navigate('Login')} />
//     </View>
//   )
// }
// function Setting(){
//   return (
//     <View style={styles.container}>
//       <Text>Settings Page</Text>
//     </View>
//   )
// }
// function Profile(){
//   return (
//     <View style={styles.container}>
//       <Text>Profile Page</Text>
//     </View>
//   )
// }
// function Chat(){
//   return (
//     <View style={styles.container}>
//       <Text>Chat Room</Text>
//     </View>
//   )
// }
// function Drawer(){
//   return (
//     <DrawerNav.Navigator>
//       <DrawerNav.Screen name='Dashboard' component={Dashboard} />
//       <DrawerNav.Screen name='Profile' component={Profile} />
//       <DrawerNav.Screen name='Chat' component={Chat} />
//     </DrawerNav.Navigator>
//   )
// }
// function Tab(){
//   return (
//     <BottomTab.Navigator>
//       <BottomTab.Screen name='Dashboard' component={Drawer} options={{headerShown:false}} />
//       <BottomTab.Screen name='Setting' component={Setting} />
//     </BottomTab.Navigator>
//   )
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{ headerShown:false }}>
//         <Stack.Screen name='Tab' component={Tab} />
//         <Stack.Screen name='Login' component={Login} />
//         <Stack.Screen name='Signup' component={Signup} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
