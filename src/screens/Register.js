import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {useDeviceOrientation} from '@react-native-community/hooks';
import {useDispatch, useSelector} from 'react-redux';
import {UserRegister} from '../store/action/UserAction';

const Register = (props) => {
  const [name, setName] = useState();
  const [number, setNumber] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [roll, setRoll] = useState();

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const {error} = userRegister;

  const register = () => {
    if (name && number && email && password && roll) {
      dispatch(UserRegister(name, number, email, password, roll));
      if (!error) {
        props.navigation.navigate('home');
      }
    }
  };

  return (
    <>
      {useDeviceOrientation().portrait ? (
        <SafeAreaView style={styles.container}>
          <View style={styles.container}>
            <Text style={styles.heading}>Welcome to I.T Collage</Text>
            <View>
              <View>
                <TextInput
                  placeholder="Full Name"
                  keyboardType="default"
                  style={styles.input}
                  onChangeText={(e) => setName(e)}
                />
                <TextInput
                  placeholder="Mobile Number"
                  keyboardType="number-pad"
                  style={styles.input}
                  onChangeText={(e) => setNumber(e)}
                />
                <TextInput
                  placeholder="Email Address"
                  keyboardType="email-address"
                  style={styles.input}
                  onChangeText={(e) => setEmail(e)}
                />
                <TextInput
                  placeholder="Roll No."
                  keyboardType="decimal-pad"
                  style={styles.input}
                  onChangeText={(e) => setRoll(e)}
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
                <TouchableOpacity activeOpacity={0.5} onPress={register}>
                  <Text style={styles.registerButton}>Register Your Self</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.signin}>
                <Text>Already Have An Account ?</Text>
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => props.navigation.navigate('signin')}>
                  <Text style={styles.signinButton}>Sign In</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </SafeAreaView>
      ) : (
        <ScrollView>
          <SafeAreaView style={styles.container}>
            <View style={styles.container}>
              <Text style={styles.heading}>Welcome to I.T Collage</Text>
              <View>
                <View>
                  <TextInput
                    placeholder="Full Name"
                    keyboardType="default"
                    style={styles.input}
                    onChangeText={(e) => setName(e)}
                  />
                  <TextInput
                    placeholder="Mobile Number"
                    keyboardType="number-pad"
                    style={styles.input}
                    onChangeText={(e) => setNumber(e)}
                  />
                  <TextInput
                    placeholder="Email Address"
                    keyboardType="email-address"
                    style={styles.input}
                    onChangeText={(e) => setEmail(e)}
                  />
                  <TextInput
                    placeholder="Roll No."
                    keyboardType="decimal-pad"
                    style={styles.input}
                    onChangeText={(e) => setRoll(e)}
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
                  <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => props.navigation.navigate('home')}>
                    <Text style={styles.registerButton}>
                      Register Your Self
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.signin}>
                  <Text>Already Have An Account ?</Text>
                  <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => props.navigation.navigate('signin')}>
                    <Text style={styles.signinButton}>Sign In</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </SafeAreaView>
        </ScrollView>
      )}
    </>
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

export default Register;
