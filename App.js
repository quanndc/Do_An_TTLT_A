import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/screens/Home/Home'
import SignIn from './src/screens/SignIn';
import ModeSelections from './src/screens/Modes/ModeSelections';
import DiffSelections from './src/screens/Modes/Difficulties';
import Leaderboard from './src/screens/Leaderboard/Leaderboard';
import Setting from './src/screens/Setting/Setting';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator  screenOptions = {{headerShown: false}}>
          
          <Stack.Screen name="HomeScreen" component={Home} /> 
          <Stack.Screen name = "Modes" component = {ModeSelections}/>
          <Stack.Screen name="Difficulty" component={DiffSelections}/>
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="Leaderboard" component={Leaderboard}></Stack.Screen>
          <Stack.Screen name = "Setting" component={Setting}></Stack.Screen>

        </Stack.Navigator>
      </NavigationContainer>
      

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
    justifyContent: 'center',
  },
});

