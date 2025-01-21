import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const handleAddition = () => {
    const sum = parseFloat(num1) + parseFloat(num2);
    setResult(sum);
  };
  const handleSubtraction = () => {
    const difference = parseFloat(num1) - parseFloat(num2);
    setResult(difference);
  };
  
  const handlePress = () => {
    Alert.alert("You typed:" + text);
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 0,}}>
        Result: {result !== null ? result : ""}
      </Text>
      <TextInput
        style={{height: 40, borderWidth: 1, borderColor: 'black', borderRadius: 5,
           marginBottom: 10, paddingHorizontal: 10, width: '35%', }}
        placeholder='1.numero'
        keyboardType="numeric"
        onChangeText={text => setNum1(text)} 
        value={num1} 
      />
      <TextInput
        style={{height: 40, borderWidth: 1, borderColor: 'black', borderRadius: 5,
          marginBottom: 10, paddingHorizontal: 10, width: '35%', }}
        placeholder='2.numero'
        keyboardType="numeric"
        onChangeText={text => setNum2(text)} 
        value={num2} 
      />
      <View style={{flex: 0, flexDirection: 'row',
        alignItems: 'center', justifyContent: 'space-around'}}>
          <View style={{marginHorizontal: 10}}>
            <Button title=" + " onPress={handleAddition}/>
          </View>  
          <View style={{marginHorizontal: 10}}>
            <Button title=" - " onPress={handleSubtraction}/>
          </View>
      </View>
      
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
