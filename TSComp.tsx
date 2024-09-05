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

export default function Home({navigation}) {

    const [match, setMatch] = useState<string>('Match');
    const [value, setValue] = useState('We are testing');
    var flag = 10;
    var score:number;
    // score = 100;

    function getTime(): number {
        return new Date().getTime();
    }

      useEffect(() => {
        console.log('We are testing TS',getTime());
      }, []);
    
  return (
    <View style={styles.container}>
        <Text> In The name of Allah </Text>
        <Text> Score = {score} </Text>

        <Text style={{fontSize:30}}> State = {value} </Text>

        <Text style={{fontSize:30}}> flag = {flag} </Text>
        <Text style={{fontSize:30}}> Match = {match} </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
