import { StatusBar } from 'expo-status-bar';
import { useState, useLayoutEffect, useEffect, Component } from 'react';

import { StyleSheet, 
  Text, 
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  FlatList
  } from 'react-native';

  export class TestingClassComponents extends Component{
    render(){
        return(
            <View>
                <Text> We are testing Class Components Now </Text>
            </View>
        )
    }
  }