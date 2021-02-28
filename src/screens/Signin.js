import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Sign_In} from '../store/action/UserAction';

const Signin = (props) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const dispatch = useDispatch();

  const userSignin = useSelector((state) => state.userSignin);
  const {error} = userSignin;

  const signin = () => {
    if (email && password) {
      dispatch(Sign_In(email, password));
      if (!error) {
        props.navigation.navigate('home');
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Welcome to I.T Collage</Text>
      <View>
        <View>
          <TextInput
            placeholder="Email Address"
            keyboardType="email-address"
            style={styles.input}
            onChangeText={(e) => setEmail(e)}
          />
          <TextInput
            placeholder="Password"
            keyboardType="default"
            secureTextEntry={true}
            style={styles.input}
            onChangeText={(e) => setPassword(e)}
          />
        </View>
        {error && <Text>{error}</Text>}
        <View>
          <TouchableOpacity activeOpacity={0.5} onPress={signin}>
            <Text style={styles.registerButton}>Sign In</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.signin}>
          <Text>Donot Have An Account ?</Text>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => props.navigation.navigate('register')}>
            <Text style={styles.signinButton}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    width: 300,
    fontSize: 16,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  registerButton: {
    backgroundColor: 'black',
    color: '#fff',
    textAlign: 'center',
    borderRadius: 5,
    paddingVertical: 10,
  },
  signin: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 10,
  },
  signinButton: {
    backgroundColor: 'black',
    color: '#fff',
    textAlign: 'center',
    borderRadius: 5,
    padding: 10,
  },
});

export default Signin;
