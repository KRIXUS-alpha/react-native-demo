import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, NativeSyntheticEvent, NativeTouchEvent, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [name, setname] = useState<string>("Name");
  const [people, setpeople] = useState([
    { name: 'John', key: '1' },
    { name: 'ansari', key: '2' },
    { name: 'abhinav', key: '3' },
    { name: 'niket', key: '4' },
    { name: 'harshit', key: '5' },
    { name: 'abdul', key: '6' },
    { name: 'ansari', key: '7' },
    { name: 'abhinav', key: '8' },
    { name: 'niket', key: '9' },
    { name: 'harshit', key: '10' },
    { name: 'abdul', key: '11' },
    { name: 'ansari', key: '12' },
    { name: 'abhinav', key: '13' },
    { name: 'niket', key: '14' },
    { name: 'harshit', key: '15' },
  ]);
  return (
    <View >
      {/* <Text style={styles.red}>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <Text>{name}</Text> */}
      {/* <Button title="Click this" onPress={()=>setname(prevState => prevState=="Name"?"changed":"Name")}/> */}
      <ScrollView>
        {people.map((item)=>{
          return (
            <View  key={item.key}>
              <Text style={styles.item}>{item.name}</Text>
            </View>
          )
          })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  red: {
    color:"red"
  },
  item: {
    marginTop: 24, 
    padding: 10, 
    height: 30 ,
    backgroundColor: 'pink',
    fontSize: 10,
    color: 'blue'
  }

});
