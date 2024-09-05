import { StatusBar } from 'expo-status-bar';
import { useState, useLayoutEffect, useEffect, Component } from 'react';

import { StyleSheet, 
  Text, 
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  FlatList,
  Button
  } from 'react-native';

  export default class G1ClassComp extends Component {

    constructor(props) {
        super(props);

        console.log('We are testing Constructor');
        // Don't call this.setState() here!
        // const [count, setCount] = useStat
        
        this.state = { counter:0, flag:10 };
        
        // this.handleClick = this.handleClick.bind(this);

      }

      onPressButton=()=>{
        // this.setState({counter:20});  
        
        // Alert.alert('You clicked the button!')  
    }  

    // constructor
    // No UseEffect
    // useStat ki jagah Simple State

    componentDidMount(){
      console.log('Component Did Mount');
      // API Call Hamesha Yahaan ho gi
      // CricInfo Latest Score aa gaya
      // Stored in Array
      // this.setState({counter:counter++});
      let score = 50;
      this.setState({counter:score}); 
      
      
    }

    render(){

        console.log('We are testing Render');
        
        return(
            <View>
            <Text style = {{fontSize:30}}> Counter Value is = {this.state.counter} </Text>

            <Button  
                        onPress={this.onPressButton}  
                        title="Press Me"  
                    />  

            </View>
        );

    }

   

    componentWillUnmount(){
      
    }


  }