import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Component} from 'react';
const UserData = () => {
  return (
    <View>
      <Text>HELLO USER</Text>
    </View>
  );
};
export default UserData;

export const CompanyData = props => {
  return (
    <View>
      <Text>HELLO {props.data}</Text>
    </View>
  );
};

export const LoginForm = props => {
  return (
    <ScrollView>
      <View>
        <Text style={styles.subHeading}>Email</Text>
        <TextInput
          placeholder="Email"
          style={styles.inputField}
          keyboardType="email-address"
          onChangeText={text => {
            console.warn(text);
          }}
        />
      </View>
      <View>
        <Text style={styles.subHeading}>Password</Text>
        <TextInput
          placeholder="Password"
          style={styles.inputField}
          onChangeText={text => {
            console.warn(text);
          }}
        />
      </View>
      <TouchableOpacity style={styles.btnStyle}>
        <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  btnText: {
    color: 'white',
    textAlign: 'center',
  },
  btnStyle: {
    marginTop: 10,
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 8,
  },
  subHeading: {
    margin: 8,
  },
  inputField: {
    borderColor: 'grey',
    borderWidth: 2,
    marginHorizontal: 8,
    borderRadius: 10,
    paddingHorizontal: 4,
  },
});
