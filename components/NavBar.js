import { StyleSheet, View, Text, Image, ImageBackground, TouchableHighlight,TouchableOpacity, Alert, Dimensions } from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';


const Navbar = () => {
  const navigation = useNavigation()
  return (
    <View style={design.footer}>
      <TouchableHighlight style={design.imgContent}
        activeOpacity={0.9}
        underlayColor="#DDDDDD"
        onPress={() => navigation.navigate('HomeScreen')}
      >
        <Image style={design.img} source={require('../assets/home.png')} />
      </TouchableHighlight>

      <TouchableHighlight style={design.imgContent}
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        onPress={() => navigation.navigate('Leaderboard')}

      >
        <Image style={design.img} source={require('../assets/play.png')} />
      </TouchableHighlight>

      <TouchableHighlight style={design.imgContent}
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        onPress={() => navigation.navigate('Setting')}

      >
        <Image style={design.img} source={require('../assets/settings.png')} />
      </TouchableHighlight>
    </View>
  )


}

const design = new StyleSheet.create({
  footer: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height * 0.07,
    backgroundColor: '#EAEAEA',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
    gap: 35
  },

  imgContent: {
    width: Dimensions.get('screen').width * 0.3,
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: 'center',
    // borderRadius: 100,
    // backgroundColor: 'yellow'
  },

  img: {
    width: 30,
    height: 30,
  }

})

export default Navbar


