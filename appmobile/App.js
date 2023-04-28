import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Nav from './components/nav';
export default function App() {
  return (
    <View style={styled.Container}>
      <Nav />
    </View>
  );
}
const styled=StyleSheet.create(
  {
    Container:{
      width:360,
      height:740,
    }
  }
)

