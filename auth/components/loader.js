import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React, {Component, useEffect} from 'react';

const Loader = () => {
  return (
    <View>
      <ActivityIndicator size={100} color="green" />
    </View>
  );
};
