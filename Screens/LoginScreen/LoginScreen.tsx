import React from 'react';
import {SafeAreaView, StyleSheet, TextInput,Pressable,Text} from 'react-native';
interface props{
onlogin?:any
}
const LoginScreen = ({onlogin}:props) => {
  const [text, onChangeText] = React.useState('');
  const [password, onChangePassword] = React.useState('');

  const onPressLogin=()=>{
    onlogin(false)
  }
  return (
    <SafeAreaView>
        <SafeAreaView >
            <TextInput placeholder='Username or email' style={styles.input} onChangeText={onChangeText} value={text} />
            <TextInput placeholder='Password' style={styles.input} onChangeText={onChangePassword} value={password} />
        </SafeAreaView>
        <Pressable style={styles.button} onPress={onPressLogin}>
            <Text style={styles.buttontext}>{"Login"}</Text>
        </Pressable >
        <Text style={styles.passwordtext}>Forgot password?</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width:350,
    borderWidth: 1,
    padding:5,
    margin:10,
  },
  buttontext:{
    marginBottom:5
  },
  button:{
    height:40,
    width:350,
    margin:10,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"white",
    borderWidth:1,
    borderRadius:15,
  },
  passwordtext:{
    alignSelf:"center"
  }
});

export default LoginScreen;