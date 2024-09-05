import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

// import Login from "./Login";
// import Home from "./Home";
// import Dashboard from "./Dashboard";

import Register from "./Register";
import Home from "./Home";
import TSComp from "./TSComp";
import G1ClassComp from './G1ClassComp';

import MyTypeScriptTesting from "./MyTypeScriptTesting";

import { StyleSheet, 
  Text, 
  View,
  Button,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  FlatList
  } from 'react-native';

export default function App() {

  return (

    <View>
      <Text>
        In the name of Allah

      </Text>

      <Text>
        In the name of Allah
        
      </Text>

      <Text>
        In the name of Allah
        
      </Text>

      <Text>
        In the name of Allah
        
      </Text>

      <Text>
        In the name of Allah
      </Text>

      <Button
      // onPress={onPressLearnMore}
      title="Learn More"
      color="#841584"
      accessibilityLabel="Learn more about this purple button"
      />

    </View>
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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