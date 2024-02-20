import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, 
  Text, 
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert
  } from 'react-native';

export default function App() {



  // var flag = 0;
  // const [text, onChangeText] = useState('');
  // const [pass, onChangePass] = useState('');
  // const [count, setCount] = useState(0);



  const [username, onChangeUserName] = useState('');
  const [pass, onChangePass] = useState('');

  const onPress = () => {
    // Alert.alert('Username and pass is =', username, pass)
    // console.log(username)
    // console.log(pass)
    // Alert.warn('Warning');
  }

  return (
    <View style={styles.container}>
    
    <View style={styles.logo}>

    <Image
        style={styles.tinyLogo}
        source={require('./assets/favicon.png')}
      />


    </View>

    <View style={styles.input}>

    <TextInput
        style={styles.inputtext}
        onChangeText={onChangeUserName}
        value={username}
        placeholder='Username'
      />

      <TextInput
        style={styles.inputtext}
        onChangeText={onChangePass}
        value={pass}
        secureTextEntry={true}
        placeholder='password'
      />


    </View>

      <View style={styles.buttons}>

        <TouchableOpacity
        onPress={onPress}
        >

          <Text style={styles.touchablebutton}>Login Button</Text>
          {/* <View>
          </> */}

        </TouchableOpacity>

    </View>

    



    
      {/* <Text style={{fontSize:32}}>  In The name of Allah </Text>    
      <View style={styles.top}>
        <Image
        style={styles.tinyLogo}
        source={require('./assets/icon.png')}
        />      
        </View>
      <View style={styles.center}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder='Username'
        />

        <TextInput
          style={styles.input}
          onChangeText={onChangePass}
          value={pass}
          placeholder='password'
          secureTextEntry={true}
        />

      </View>
      <View style={styles.bottom}>
      <TouchableOpacity onPress={onPress}>
        <Text>Login</Text>
      </TouchableOpacity>
      </View>
      <StatusBar style="auto" /> */}
    
    
    
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
    backgroundColor:'yellow'
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
