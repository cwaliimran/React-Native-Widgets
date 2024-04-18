import {
  Button,
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Component, useEffect} from 'react';

const users = [
  {
    name: 'Ali',
    age: 22,
  },
  {
    name: 'Ahmed',
    age: 42,
  },
  {
    name: 'Sameer',
    age: 223,
  },
  {
    name: 'Sameer1',
    age: 2,
  },
];

const LoadAllUsers = () => {
  useEffect(() => {
    return () => {
      console.warn('unmount');
    };
  });

  return (
    <View>
      <Text>All Users</Text>
      <FlatList
        data={users}
        renderItem={item => <User data={item.item} />}
        keyExtractor={item => item.name}
      />
    </View>
  );
};
export default LoadAllUsers;

export const User = props => {
  console.log(props.data.name);
  return (
    <View>
      <Text>{props.data.name}</Text>
      <Text>{props.data.age}</Text>
    </View>
  );
};
