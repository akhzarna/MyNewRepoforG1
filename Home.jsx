import { StatusBar } from 'expo-status-bar';
import { useState, useLayoutEffect, useEffect } from 'react';
import { StyleSheet, 
  Text, 
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  FlatList
  } from 'react-native';

  import axios from 'axios';

  global.font=12;

  import AsyncStorage from "@react-native-async-storage/async-storage";

  import CustomHook from './CustomHook';

  import GETAPICustomHook from './GETAPICustomHook';

  import APIHook from './APIHook';
  import POSTAPIHook from './POSTAPIHook';

  const GLOBAL = require("./Globals");

export default function Home({navigation}) {
    console.log('Top Area');
    const[myfont, setMyfont] = useState(12);
    
    const onPress = ()=>{
      console.log('On press called');
        setMyfont(myfont+80);
    }

    useEffect(()=>{
      console.log('This is simple useEffect');
    })

    useEffect(()=>{
        console.log('This is useEffect with []');
    },[])

    useEffect(()=>{
      console.log('This is useEffect with [Font]');
    },[myfont])

  return (
    <View style={styles.container}>
      <Text>Hello</Text>
      <View style={styles.top}>
      <Text>Hello</Text>
      </View>
      <View style={styles.center}>
      <Text>Hello</Text>
      </View>
      <View style={styles.bottom}>
      <Text>Hello</Text>
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
    // flex:0.25,
    // alignItems: 'center',
    // justifyContent: 'center',
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
