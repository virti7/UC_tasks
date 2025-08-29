import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts, DancingScript_400Regular } from "@expo-google-fonts/dancing-script";
import { Lobster_400Regular } from "@expo-google-fonts/lobster";

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello, welcome to my first page!</Text>
      <View style={{ marginTop: 20 }}>
        <Button title="Navigate" onPress={() =>
           navigation.navigate("Second")}
           color="#23316eff" />  // try other metods of adding color to button
      </View>
    </View>
  );
}

function SecondScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Welcome Virti!!</Text>
    </View>
  );
}

export default function App() {
  const [fontsLoaded] = useFonts({
    DancingScript_400Regular,
    Lobster_400Regular
  });

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Second" component={SecondScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: "center",
     alignItems: "center"
  }
  ,
  title: { 
    fontFamily: "DancingScript_400Regular", 
  fontSize: 32, 
    color: "#240e79ff",
    textAlign: "center"
  },
  subtitle: { 
    fontFamily: "Lobster_400Regular", 
    fontSize: 24, 
    color: "#264794ff", 
    marginVertical: 12
  },
});
