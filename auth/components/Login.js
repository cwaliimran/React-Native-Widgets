import React from 'react';
import {View, Text, Button} from 'react-native';

const Login = props => {
  return (
    <View>
      <Text>Login</Text>
      <Button
        title="Go to Home"
        onPress={() => props.navigation.navigate('Home', {name: 'Ali'})}
      />
    </View>
  );
};

export default Login;
