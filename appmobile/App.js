import { StatusBar } from 'expo-status-bar';
import { useState,useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [datar,setDatar]=useState([]);
  const getciudad=async()=>{
 const response=await fetch('http://127.0.0.1:8000/api/ciudades');
 const data=await response?.json();
 setDatar(data);

  }
  
useEffect(() => {
  getciudad();
}, []);
  return (
    <View style={styles.container}>
      {datar.map((v,i)=>(
        <Text key={i}>{v.ciudad}</Text>
      ))}
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
