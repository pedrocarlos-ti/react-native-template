import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import './config/ReactotronConfig';

import Welcome from '~/components/Welcome';

const bgColor = '#F5FCFF';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: bgColor,
    flex: 1,
    justifyContent: 'center',
  },
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Welcome />
      </View>
    );
  }
}
