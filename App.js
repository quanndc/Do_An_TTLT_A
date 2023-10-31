import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity} from 'react-native';

export default function App() {
  return (   
    <View style={styles.container}>
        <View style={styles.top}></View>
      <View style={styles.screen}>
        <Text style={styles.text}>Việt Nam</Text>
      </View>
      
      <View style={styles.button}>
        <TouchableOpacity style={styles.button1}>
        <Image style={styles.img} source={require('./assets/FlagVietNam.png')}/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button1}>
        <Image style={styles.img} source={require('./assets/FlagLaos.png')}/>
        </TouchableOpacity>
      </View>

      <View style={styles.button}>
        <TouchableOpacity style={styles.button1}>
        <Image style={styles.img} source={require('./assets/FlagMy.png')}/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button1}>
        <Image style={styles.img} source={require('./assets/FlagTrungQuoc.png')}/>
        </TouchableOpacity>
      </View>

      <View style={styles.bottom}>
        <TouchableOpacity>
           <Image style={styles.home} source={require('./assets/home.png')}/>
        </TouchableOpacity>
       
        <TouchableOpacity>
            <Image style={styles.play} source={require('./assets/play.png')}/>
        </TouchableOpacity>
        
        <TouchableOpacity>
          <Image style={styles.settings} source={require('./assets/settings.png')}/>
        </TouchableOpacity>
        </View>


      <StatusBar style="auto" />
    </View>
    
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D6E9FF',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },

  top: {

    width: '100%',
    height: 300,
    backgroundColor: '#99C2FF',
    padding: 'auto',
  },

  screen :{
    backgroundColor: '#FFF',
    width: 300,
    bottom: 150,
    height: 250, 
    alignItems: 'center',
    borderRadius: 12,
  },

  flag: {
    width: 250,
    height: 150,
    alignItems: 'center',
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
