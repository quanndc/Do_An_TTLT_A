import { StyleSheet, View, Text, Image, ImageBackground, TouchableHighlight, Alert } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'


const Navbar = () => {
    return (
                <View style = {design.footer}>
                    <TouchableHighlight style = {{left: 160}} onPress={() => navigation.navigate('HomeScreen')}>
                    <Image source={require('../../../assets/home.png')} style={design.homeImage}></Image>
                </TouchableHighlight>

                    <TouchableHighlight style = {{left: 10}} onPress={() => Alert.alert("")}>
                        <Image source={require('../../../assets/settings.png')} style={design.settingImage}></Image>
                    </TouchableHighlight>

                    <TouchableHighlight style = {{left: 200}} onPress={() => navigation.navigate('Leaderboard')}>
                        <Image source={require("../../../assets/competition.png")} style={design.leaderboardImage}></Image>
                    </TouchableHighlight>
                </View>
    )


}

const design = new StyleSheet.create({
  background: {
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'column',
  },

  //HEADER
  header: {
    backgroundColor: "#B4D2FF",
    flex: 2,
    padding: 'auto',
    
  },

    
  //BODY

  body:{
    flex: 6,
    backgroundColor: "#FFF",


  },
  bodyImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
  },

  bodyContainer: {
    flex: 1,
    backgroundColor: "#FFF",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    bottom: 20,
    marginBottom: -50,
  },

  //Footer

  footer: {
    flex: 1,
    backgroundColor: "#EAEAEA",
    alignItems: "center",
    alignContent: "center",
    flexDirection: "row",
    padding: 'auto',
  },


  //BUTTON
  buttonText: {
    alignItems: 'center',
    top: 15,
    left: 10,
    fontSize: 16,
  },

  buttonText2: {
    alignItems: 'center',
    top: 15,
    left: 20,
    fontSize: 16,
  },

  button1: {
    alignItems: 'center',
    backgroundColor: '#DAE9FF',
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    width: 200,
    height:80,
    padding: 10, 
    bottom: 120,
    right:90
  },

  button2: {
    alignItems: 'center',
    backgroundColor: '#DAE9FF',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    width: 200,
    height:80,
    padding: 10,
    margin: 40,
    bottom: 70,
    left: 90
  },

    
  button3: {
    alignItems: 'center',
    backgroundColor: '#DAE9FF',
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    width: 200,
    height:80,
    padding: 10, 
    bottom: 0,
    right:90
  },


  buttonBackImage: {
      flex: 2,
      width: 200,
      height: 70
    
  },

  buttonBackImage2: {
      flex: 2,
      width: 200,
      height: 70,
      
  },

  buttonBackImage3: {
      flex: 2,
      width: 200,
      height: 70
    
  },

  buttonIcon: {
    width: 30,
    height: 30,
    alignSelf: 'flex-start',
    bottom: 10,
    left: 10,
  },
  
  buttonIcon2: {
    width: 30,
    height: 30,
    alignSelf: 'flex-start',
    bottom: 13,
    left: 10,
  },
    
  buttonIcon3: {
    width: 30,
    height: 30,
    alignSelf: 'flex-start',
    bottom: 10,
    left: 10,
    },


  //NAV
  homeImage: {
    width: 40,
    height: 40,
    alignSelf:'center',

  },
        

})

export default Navbar


