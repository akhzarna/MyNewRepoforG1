import { StatusBar } from 'expo-status-bar';
import { useState, useLayoutEffect, useEffect } from 'react';
import { StyleSheet, 
  Text, 
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert
  } from 'react-native';

  global.font=12;
export default function Settings({navigation}) {

    const[myfont, setMyfont] = useState(12);
   
    const onPress = ()=>{
        // navigation.navigate('Register',{data:'I am Setting Screen'});

        // global.font = myfont;
        // global.font=global.font+10;

        global.font=global.font+2;
        console.log(global.font);
        setMyfont(myfont+80);

    }
  
  // useEffect(()=>{

  //   global.flag=10;
  //   const unsubscribe = navigation.addListener('focus', ()=>{
  //     console.log('Navigation useEffect is Called')
  //   })
  //   return unsubscribe;
  // },[navigation])

  useEffect(()=>{
    return()=>{
      console.log('Going Back');
      // Alert.alert('You wanna go back');
    }
  },[])

  return (
    <View style={styles.container}>
        <Text style={{fontSize:global.font}}> This is Settings Screen {global.font} </Text>
       
    <View style={styles.logo}>

    


    </View>

    <View style={styles.input}>

    </View>

      <View style={styles.buttons}>

        <TouchableOpacity onPress={onPress}>

            <Text style={{fontSize:40}}> Go to Next Screen</Text>
        </TouchableOpacity>

        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  logo:{
    // backgroundColor:'red',
    flex:0.25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    // backgroundColor:'green',
    flex:0.50
  },
  buttons:{
    backgroundColor:'blue',
    flex:0.25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  top: {
    flex: '25%',
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    flex: '50%',
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottom: {
    flex: '25%',
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchablebutton:{
    color:'Black',
    backgroundColor:'yellow',
    fontSize:30
  },
  tinyLogo:{
    width:100,
    height:100
  },
  inputtext:{
    backgroundColor:'white',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
});
