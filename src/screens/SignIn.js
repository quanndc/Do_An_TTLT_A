import { StyleSheet, View, Text, Image,ImageBackground, TouchableHighlight, Alert, TouchableOpacity } from 'react-native'
import React from 'react'
// import { signInWithPopup, signInWithRedirect } from "firebase/auth";
// import { auth, provider } from "../../components/firebaseConfig";

const SignIn = () => {

  function logIn() {
  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    // const credential = GoogleAuthProvider.credentialFromResult(result);
    // const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
    alert(user.displayName)
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    alert(errorMessage)
  });

  }




  return (
    <View style={design.background}>
      <View style={design.header}>
        <Image style={design.headerImage} source = {require('../../assets/logo.png')}></Image>
      </View>
      <View style={design.body}>
        <ImageBackground source={require('../../assets/flags.jpg')} resizeMode="cover" style={design.bodyImage} imageStyle={{ opacity: 0.1 }}>

            <TouchableOpacity style = {design.touchable} onPress={logIn} >

              <View style={design.button}>
                  <Text style={design.buttonText}>ĐĂNG NHẬP BẰNG GOOGLE</Text>
                  <Image style={design.googleLogo} source={require('../../assets/googleLogo.png')} ></Image>
              </View>
            
            </TouchableOpacity>


        </ImageBackground>

      </View>
      
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
    flex: 3,
    padding: 'auto',


    
  },

  headerImage: {
    margin: 110,
    alignSelf: 'center',
    width: 208,
    height: 86.32
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

  //BUTTON
  buttonText: {
    alignItems: 'center',
    top: 15,
    left: 15,
    fontSize: 16,
  },

  button: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    width: 280,
    padding: 10, 
    
  },

  googleLogo: {
    width: 30,
    height: 30,
    right: 110,
    bottom: 10
  },

  touchable: {
    bottom: 160
  }

})

export default SignIn