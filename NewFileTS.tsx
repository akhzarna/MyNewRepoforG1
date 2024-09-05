import {useEffect } from 'react';

import { StyleSheet, 
  Text, 
  View
  } from 'react-native';

export default function NewFileTS({navigation}) {


      useEffect(() => {
       
      }, []);
    
  return (
    <View style={styles.container}>
        <Text> In The name of Allah </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
