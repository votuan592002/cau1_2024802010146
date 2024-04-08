import React, { useState } from 'react';
import { ImageBackground,View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    alert(`Tài khoản: ${username}, mật khẩu: ${password}`)
  };

  return (
 
    <ImageBackground  source={require('C:\\Users\\ACER\\cau1\\assets\\background.jpg')} style={styles.background}>
    <View style={{flex:1}}>
      <Image source={require('C:\\Users\\ACER\\cau1\\assets\\logo.jpg')} style={{height:200, width:500}} />
      <Text style={styles.registerText}>REGISTER</Text>
      <TextInput
        style={styles.input}
        placeholder="USERNAME"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="PASSWORD"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  
  background: {
  
    width:null,
    height:null,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4CAF50',
  },
  input: {

    width: 500,
    padding: 10,
    backgroundColor: '#fff',
  },
  button: {
    width: 500,
    padding: 10,
    backgroundColor: '#f44336',
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  registerText: {
    alignSelf:'flex-end',
    marginRight:40,
    color: '#fff',
    marginTop: 10,
  },
});


export default App;