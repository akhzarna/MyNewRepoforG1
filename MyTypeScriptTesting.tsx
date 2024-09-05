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

  // Interfaces in TypeScript are used to define the shape of an object
  // Interface are extendable

  // Type Aliases
  // Type aliases, on the other hand, are used to create a new name for a type. 
  // Type aliases are not just limited to objects; 
  // they can also be used for primitives, unions, intersections, tuples, and more. 
  // This makes type aliases more versatile than interfaces.

  // Abstract Class
  // Interface 
  // (Jis main Function Name likh detay hain Boday nahin Banatay)
  // Benefits

  // Yeh Kam ham Classes se kar lain
  // Code Reuseablity class main bhi hoti hai
  // 1 Child Class kay 2 Parents Class Nahin hoti 
  // 1 Class kay 2 interface ho saktay hain

  // Abstract Class vs Interface
  // C and Java is different

  // Stack 
  // ADTS
  // ADTS (Abstracted Data Types)


  class Mehdi{

  }

  // What is Abstract Class

   interface University{
    name:string,
    email:string,
    phone:number
  }

  interface Hassan extends University{
    class:string    
  }

  const abdullah: Hassan = {
    class:'BCS',
    name:'MyName',
    email:'abc@gmail.com',
    phone:1234
  }


  type Hussain = {

  }




  // class Arham implements University{
  //     area:12
  // }

  type University12 = {
    name:string,
    email:string,
    phone:number
  }

  interface subcampus extends University{
    location:string
  }
   // type
   type University1 = {
    name:string,
    email:string,
    phone:number
  }


  interface Colorful {
    color?: string;
  }
   
  interface Circle {
    radius: number;
  }
   
  interface ColorfulCircle extends Colorful, Circle {
    area: number
  }
  
  // const cc1: number = 10;

  const cc: ColorfulCircle = {
    radius: 42,
    area: 50
  };

  interface dataProps{
    item:{
      category:{id:1},
      id:number,
      image:string,
      price:number,
      rating:string
    },
  }

  // Passing Value as Props
  type myProps={
    name:'Mohsin',
    class:'BCS'
  }

  // Define Props type
interface CommonButtonProps {
  type: "0" | "1"; // type can only be "0" or "1"
  height?: any;
  width?: any ;
  backgroundColor?: string;
  borderRadius?: number;
  onPress: () => void;
  leftIcon?: React.ElementType;
  RightIcon?: React.ElementType;
  textAlign?: "center" | "flex-start";
  textColor?: string;
  fontFamily?: string;
  textSize?: number;
  title: string;
}

// Explanation of Generics
// TypeScript Generics is a tool that provides a way to create reusable components. 
// It creates a component that can work with a variety of data types rather than a single data type

interface User {
  id: number;
  name: string;
  email: string;
}

interface Product {
  id: number;
  name: string;
  price: number;
}

const userData: User = {
  id: 1,
  name: "John Doe",
  email: "johndoe@example.com"
};

const productData: Product = {
  id: 1,
  name: "Smartphone",
  price: 999
};

// Usage of Summary component with different data sources and properties
{/* <Summary<User, "name"> data={userData} property="name" />
<Summary<Product, "price"> data={productData} property="price" /> */}

export default function MyTypeScriptTesting({navigation}) {


  




  const [campus1, setCampus1] = useState<University>();
  const [campus, setCampus] = useState<University[]>([]);

    useEffect(() => {
      // var newVar = myFun(12);
      // console.log(newVar);
      // console.log(user123);
      // console.log(myDirection);
      let myCampus:University = {
        name: 'Akhzar',
        email:'akhzaronline@gmail.com',
        phone:1234566
      }
      testingTypeAndInterface(myCampus)
    }, []);

    function testingTypeAndInterface(campus:University){
      console.log(campus);
    }
      
      // Variable 
      var num: number = 10;
      num = 20;

      // Function 
      function myFun (myDocument: number): number{
        return 33;
      }

      // Arrays
      // let numbers = [12,3,4,5,6,6,'Ali'];
      
      let numbers: string[] = ['Ali','Asif'];

      // Tuples
      let user123:[number, string, boolean] = [12,'Class',true];
      user123.push('Akhzar Nazir');
      user123.push(false);
      user123.push(1234);

      
      // enum
      enum Direction{
        Up=0,
        Down,
        Left,
        Right
      }
      let myDirection: Direction = Direction.Left;

      // Optional Variable
      let student:{id:number, name?:string} = {id:12};
      student.name='Ali Anwar';

      // Read Only 
      let student1:{readonly id:number, name?:string} = {id:12};

      // Type Aliases
      type Student = {
        id: number,
        name: string,
        study:(Subjects:string)=> void
      }
      
      let mySTD: Student = {
        id: 12,
        name: 'Mobeen',
        study:(Subjects:string)=> {
          console.log('Hello')
        }
      }

      // Union Types
      function meterToKM (mtoKM: number | String){
        // mtoKM.
        if(typeof mtoKM === 'number'){
          // mtoKM.
        }else{
          // mtoKM.
        }
      }

      // Intersection 
      let metertoKM : number & string;

      type Draggable = {
        drag:()=>void
      }

      type Resizable = {
        resize:()=>void
      }

      type UIWidget = Draggable & Resizable;

      let textBox: UIWidget={
          drag:()=>{},
          resize:()=>{}
        }

      useEffect(() => {
        var newVar = myFun(12);
        console.log(newVar);
        console.log(user123);
        console.log(myDirection);
      }, []);
    
  return (
    <View style={styles.container}>
        <Text> In The name of Allah </Text>
        <Text style ={{fontSize:40}}> Score is ===== {cc.radius} </Text>

        {/* <Text style={{fontSize:30}}> State = {value} </Text> */}
        {/* <Text style={{fontSize:30}}> flag = {flag} </Text> */}
        {/* <Text style={{fontSize:30}}> Match = {match} </Text> */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
