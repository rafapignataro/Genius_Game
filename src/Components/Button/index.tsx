import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface Props {
  text: string;
  onPress?: any;
}

const Button = ({text, onPress, ...props}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button} {...props}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: '80%',
    marginTop: 10,
    backgroundColor: '#080808',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default Button;
