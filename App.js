import { StyleSheet, Text, View } from 'react-native';

import List from './list';
import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <List />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch'
  },
});
