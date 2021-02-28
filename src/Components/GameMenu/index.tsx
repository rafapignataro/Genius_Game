import React, { ReactChild, ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Button from '../Button';

interface Props {
  gameScore: number;
  handlePlayAgain: Function;
  handleHome: Function;
}

const GameMenu = ({gameScore, handlePlayAgain, handleHome}: Props) => {
  return (
    <View style={styles.menuContainer}>
      <Text style={styles.gameCongrats}>SCORE</Text>
      <Text style={styles.gameScore}>{gameScore}</Text>
      <Button text="HOME" onPress={handleHome} />
      <Button text="PLAY AGAIN" onPress={handlePlayAgain} />
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.8)',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 10,
  },
  gameScore: {
    fontSize: 106,
    fontWeight: 'bold',
  },
  gameCongrats: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default GameMenu;
