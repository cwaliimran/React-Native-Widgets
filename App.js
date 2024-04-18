import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import React, {Component, useEffect, useState} from 'react';
import UserData, {CompanyData, LoginForm} from './auth/components/user';
import LoadAllUsers from './auth/components/flatList';
import ResponsiveLayout from './auth/components/responsiveLayout';
import Loader from './auth/components/loader';
import {NavigationContainer} from '@react-navigation/native';
import {ScreenStack} from 'react-native-screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './auth/components/Login';
import Home from './auth/components/Home';
import Profile from './auth/components/Profile';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BottomTabBar from './auth/components/BottomTabBar';

const Stack = createNativeStackNavigator();

const App = () => {
  const [count, setCount] = useState(0);
  const [name, setname] = useState('');
  const [showText, setshowText] = useState(false);

  const handlePress = () => {
    updateStates(true);
  };

  const updateStates = update => {
    if (update) {
      setCount(count + 1);
      console.log(count);
      setname('Ali');
      setshowText(true);
    }
  };

  useEffect(() => {
    // console.warn('called');
  }, []);

  return (
    // <View>
    //   {/* <Text style={styles.headingTxt}>{`Hello to ${name} count ${count}`}</Text>
    //   {showText ? <UserData /> : null}
    //   <CompanyData data={[1, 2, 3, 4]} />
    //   <Button title="Say Hello" onPress={handlePress} />

    //   <View style={styles.container}>
    //     <View style={styles.box}></View>
    //   </View>
    //   <LoginForm /> */}
    //   {/* <Button title="Count" onPress={() => setCount(count + 1)} />
    //   <LoadAllUsers /> */}
    //   {/* <ResponsiveLayout /> */}
    //   {/* <ActivityIndicator size={20} color="green" /> */}
    //   <StatusBar backgroundColor="orange" barStyle="default" hidden={false} />

    // </View>
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen
    //       name="Login"
    //       component={Login}
    //       options={{
    //         title: 'User login',
    //         headerStyle: {backgroundColor: 'blue'},
    //       }}
    //     />
    //     <Stack.Screen name="Home" component={Home} />
    //     <Stack.Screen name="Profile" component={Profile} />
    //   </Stack.Navigator>
    // </NavigationContainer>

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="BottomTabBar" component={BottomTabBar} />
        {/* <Stack.Screen name="Profile" component={Profile} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  headingTxt: {
    color: 'red',
    fontSize: 22,
  },
  box: {
    height: 100,
    width: 100,
    backgroundColor: 'green',
    margin: 10,
  },
});
