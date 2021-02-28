import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
  time: number;
}

const GameLoading = ({time}: Props) => {
  const [counter, setCounter] = useState<number>(time);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (counter > 0) timer = setInterval(() => setCounter(counter - 1), 100);

    return () => clearInterval(timer);
  }, [counter]);

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>{counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 10,
  },
  counterText: {
    fontSize: 200,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default GameLoading;
