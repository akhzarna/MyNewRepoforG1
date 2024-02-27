import { StatusBar } from 'expo-status-bar';
import { useState, useLayoutEffect } from 'react';
import { StyleSheet, 
  Text, 
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert
  } from 'react-native';

export default function Home({navigation, route}) {

    useLayoutEffect(() => {

		console.log('MessagesScreen',route.params.data);
		
        navigation.setOptions({
			title: 'Hello',
			headerLeft: () => (
				<TouchableOpacity
					style={{ 
						marginRight: 20, 
						// backgroundColor: 'blue' 
						}}
					onPress={() => navigation.pop()}
				>

                    <Text> Back Button </Text>
					{/* <MaterialCommunityIcons
						name='chevron-left'
						color={'white'}
						size={30}
					/> */}
				</TouchableOpacity>
			),
			headerRight: () => (
				<View
					style={{
						marginRight: 10,
						alignItems:'center',
						justifyContent:'center'
					}}
				>
				<TouchableOpacity
					onPress={() => navigation.pop()}
					style={{
						// backgroundColor: 'blue',
						alignItems:'center',
						justifyContent:'center'
					}}
				>

                    <Text> Right Side </Text>
					{/* <MaterialCommunityIcons
						name='android-messages'
						color={'white'}
						size={30}
					/> */}

					{/* <Image style={{width:25, height:25, marginBottom:3}} source={require("../../assets/icons/chat-room-icon.png")} /> */}

					<Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold' }}>
						Chats
					</Text>
				</TouchableOpacity>
				</View>
			),
		});
	}, [navigation]);


    const onPress = ()=>{
        // navigation.pop();
        console.log(route.params.data[0]);
    }

  return (
    <View style={styles.container}>
        <Text> This is Home </Text>
        <Text> This is Home </Text>
        <Text> This is Home </Text>
        <Text> This is Home </Text>
        <Text> This is Home </Text>
        <Text> This is Home </Text>
        <Text> This is Home </Text>

    <View style={styles.logo}>

    <Image
        style={styles.tinyLogo}
        source={require('./assets/favicon.png')}
      />


    </View>

    <View style={styles.input}>

    </View>

      <View style={styles.buttons}>
      <TouchableOpacity onPress={onPress}>
            <Text style={{fontSize:30, color:'white'}}>Go to Next Screen</Text>
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
