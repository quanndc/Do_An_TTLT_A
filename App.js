import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/screens/Home/Home'
import SignIn from './src/screens/SignIn';
import ModeSelections from './src/screens/Modes/ModeSelections';
import DiffSelections from './src/screens/Modes/Difficulties';
import Leaderboard from './src/screens/Leaderboard/Leaderboard';
import Setting from './src/screens/Setting/Setting';
import Navbar from './components/NavBar';
import Quiz from './src/screens/Quiz/Quiz';
const Stack = createNativeStackNavigator();

export default function App() {
  return (   

    <Quiz/>
    // <View style={styles.container}>
    //   <NavigationContainer>
    //     <Stack.Navigator  screenOptions = {{headerShown: false}}>
          
    //       <Stack.Screen name="HomeScreen" component={Home} /> 
    //       <Stack.Screen name = "Modes" component = {ModeSelections}/>
    //       <Stack.Screen name="Difficulty" component={DiffSelections}/>
    //       <Stack.Screen name="SignIn" component={SignIn} />
    //       <Stack.Screen name="Leaderboard" component={Leaderboard}></Stack.Screen>
    //       <Stack.Screen name = "Setting" component={Setting}></Stack.Screen>

    //     </Stack.Navigator>
    //   <Navbar/>

    //   </NavigationContainer>
      

    // </View>
    
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
    justifyContent: 'center',
    top: 30
  },

  text: {
    fontSize: 40,
    justifyContent: 'center',
    top: 90,
    alignSelf: 'center'
  },

    button: {
      width: '100%',
      bottom: 160,
      flexDirection: 'row',
      justifyContent: 'space-evenly'
    },


    img: {
      width: 180,
      height: 120,
    },

    button1: {
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    
    },

 
    bottom: {
      width: '100%',
      height: '8%',
      backgroundColor: '#EAEAEA',
      display: 'flex',
      position:'absolute',
      bottom:0
    },

    home: {
      left: 50,
      top: 5,
      width: 50,
      height: 50,

    },

    play: {
      width: 50,
      height: 50,
      bottom: 45,
      left: 180
    },

    settings: {
      width: 50,
      height: 50,
      bottom: 95,
      left: 300
    }

});

