import {StyleSheet, Text, View} from 'react-native';
import React, {Component, useEffect} from 'react';

const ResponsiveLayout = () => {
  return (
    <View style={styles.main}>
      <View style={styles.box}></View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'space-around', // Space them evenly
    flexDirection: 'row', // Arrange boxes vertically
    alignItems: 'center', // Align them in the center horizontally
  },
  box: {
    flex: 1, // Adjust flex property as needed
    width: 100, // Specify width
    height: 100, // Specify height
    backgroundColor: 'green',
  },
  box2: {
    flex: 1, // Adjust flex property as needed
    width: 100, // Specify width
    height: 100, // Specify height
    backgroundColor: 'red',
  },
  box3: {
    flex: 1, // Adjust flex property as needed
    width: 100, // Specify width
    height: 100, // Specify height
    backgroundColor: 'blue',
  },
});

export default ResponsiveLayout;
