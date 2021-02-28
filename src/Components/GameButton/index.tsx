import React from 'react';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const COLORS = {
  green: '#32FF7E',
  greenActive: '#25ac57',
  red: '#FF4D4D',
  redActive: '#ce3d3d',
  yellow: '#FFFA65',
  yellowActive: '#ceca55',
  blue: '#18DCFF',
  blueActive: '#14aec9',
};

interface Props {
  color: string;
  onPress: Function;
  disabled: boolean;
  active: boolean;
}

const GameButton = ({color, disabled, onPress, active}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      touchSoundDisabled={true}
      style={[
        styles.gameButton,
        {backgroundColor: active ? COLORS[`${color}Active`] : COLORS[color]},
      ]}
    />
  );
};

const styles = StyleSheet.create({
  gameButton: {
    height: 150,
    width: 150,
    borderRadius: 100,
    margin: 5,
  },
});

export default GameButton;
