import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const Todo = ({ title }) => (
  <View>
    <Text style={styles.message}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  message: {
    fontSize: 16,
  },
});

Todo.propTypes = {
  title: PropTypes.string.isRequired,
};

Todo.defaultProps = {
  title: 'Welcome to React Native!!!',
};

export default Todo;
