import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text } from 'react-native';

import Button from '../../Components/Button';

interface Props {
  navigation: any;
}

const HomeScreen = ({navigation}: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>GENIUS GAME</Text>
      <Image source={require('../../assets/img/logo.png')} />
      <Button text="PLAY" onPress={() => navigation.navigate('Game')} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#080808',
    marginBottom: 27,
  },
});

export default HomeScreen;
