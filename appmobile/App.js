import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './components/Login';
import Results from './components/Results';
import Home from './components/Home';

export default function App() {
  return (
    <View style={styled.Container}>
      <Results/>
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

