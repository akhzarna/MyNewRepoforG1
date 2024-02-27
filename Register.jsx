import { StatusBar } from 'expo-status-bar';
import { useState, useLayoutEffect } from 'react';
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
  

  const [c1, setC1] = useState(15);


  const [abc, setAbc] = useState(34);

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
    
    const onPress = ()=>{
        c=c+100;
        setC1(c1+100);
        console.log('Value of C is =',c);
    }

    const [myflag, setMyflag] = useState(234);

   
    const myData = [
      {key:'0', title:'Lahore'},
      {key:'1', title:'Karachi'},
      {key:'2', title:'Islamabad'},
    ];

  return (
    <View style={styles.container}>

      <Text style={{fontSize:40}}> 
      We are testing C Variable Value = {c}
      </Text>

      <Text style={{fontSize:40}}> 
      We are testing C1 Variable Value = {c1}
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
