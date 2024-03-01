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

  import Top from './Top';
  import Card from './Card';
  import Score from './Score';

  import CustomFlatList from './CustomFlatList';

  var c = 15;

export default function Register({navigation, route}) {
  
  console.log('Top AREA');
  
  useLayoutEffect(() => {
    // console.log('useLayout Effect');
  // console.log('MessagesScreen',route.params.data);
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
    // headerRight: () => (
    // 	<View
    // 		style={{
    // 			marginRight: 10,
    // 			alignItems:'center',
    // 			justifyContent:'center'
    // 		}}
    // 	>
    // 	<TouchableOpacity
    // 		onPress={() => navigation.pop()}
    // 		style={{
    // 			// backgroundColor: 'blue',
    // 			alignItems:'center',
    // 			justifyContent:'center'
    // 		}}
    // 	>

          //         <Text> Right Side </Text>
    // 		{/* <MaterialCommunityIcons
    // 			name='android-messages'
    // 			color={'white'}
    // 			size={30}
    // 		/> */}

    // 		{/* <Image style={{width:25, height:25, marginBottom:3}} source={require("../../assets/icons/chat-room-icon.png")} /> */}

    // 		<Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold' }}>
    // 			Chats
    // 		</Text>
    // 	</TouchableOpacity>
    // 	</View>
    // ),
  });
}, [navigation]);
  
  
  const [store, setStore] = useState(12);
  const [count, setCount] = useState(12);
  const [score, setScore] = useState(10);

    const onPress = ()=>{
      setCount(count+2);
      setStore(store+2);
      setScore(score+12);
    }
   
    const myData = [
      {key:'0', title:'Lahore'},
      {key:'1', title:'Karachi'},
      {key:'2', title:'Islamabad'},
    ];

  // Funtion Overriding

  useEffect(()=>{
    console.log('useEffect');
  })

  useEffect(()=>{
    console.log('useEffect []');
    // Fetch Data From CricInfo
    // setScore(score+12);
  },[])

  // useEffect(()=>{
  //   console.log('useEffect [store]');
  // },[store])

  // useEffect(()=>{
  //   console.log('useEffect [count]');
  // },[count])

  // useEffect(()=>{
  //   console.log('useEffect [count, store]');
  // },[count, store])

  return (
    
    <View style={styles.container}>
    
      {console.log('return')}
    
      <Text style={{fontSize:40}}> 
       Score is = {score}
      </Text>
    <CustomFlatList data={myData}/>
      <View style={styles.buttons}>
        <TouchableOpacity onPress={onPress}>
          <Text style={{fontSize:40}}> Update </Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo:{
    flex:0.25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    flex:0.50,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor:'green'
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
