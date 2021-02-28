import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import GameButton from '../../Components/GameButton';
import GameMenu from '../../Components/GameMenu';
import { useMaxScore } from '../../contexts/maxScore';
import gameButtonSound from '../../utils/gameButtonSound';
import randomNumber from '../../utils/randomNumber';

const GameScreen = ({navigation}: any) => {
  const {maxScore, setMaxScore} = useMaxScore();
  // Game finished ?
  const [finished, setFinished] = useState(false);
  // Player turn
  const [playerTurn, setPlayerTurn] = useState(false);
  // Max Score
  // Game Score
  const [score, setScore] = useState<number>(0);
  // Game Sequence
  const [buttonSequence, setButtonSequence] = useState<number[]>([
    randomNumber(4),
  ]);
  // Player Sequence
  const [userButtonSequence, setUserButtonSequence] = useState<number[]>([]);
  // Current Sequence Button
  const [currentSequenceButton, setCurrentSequenceButton] = useState<number>();

  const resetGame = () => {
    setFinished(false);
    setScore(0);
    setPlayerTurn(false);
    setButtonSequence([randomNumber(4)]);
    setUserButtonSequence([]);
  };

  const handleButtonClick = (buttonIndex: number) => {
    gameButtonSound(buttonIndex);
    setUserButtonSequence([...userButtonSequence, buttonIndex]);
  };

  const playSequence = () => {
    const intervalTime = 600;

    buttonSequence.map((button, index) => {
      setTimeout(() => {
        setCurrentSequenceButton(button);
        gameButtonSound(button);
      }, (index + 1) * intervalTime);

      setTimeout(() => {
        setCurrentSequenceButton(4);

        if (index === buttonSequence.length - 1) {
          setPlayerTurn(true);
        }
      }, (index + 1) * intervalTime + 100);
    });
  };

  // Play first sequence on game Start
  useEffect(() => playSequence(), []);

  useEffect(() => {
    if (finished == false) playSequence();
  }, [finished]);

  // Compare game and player sequence when player
  useEffect(() => {
    const isEqual = userButtonSequence.every((button, index) => {
      return button === buttonSequence[index];
    });

    if (!isEqual) {
      setFinished(true);
    }

    if (userButtonSequence.length === buttonSequence.length && isEqual) {
      setScore(score + 1);
      setPlayerTurn(false);
      setUserButtonSequence([]);
      setButtonSequence([...buttonSequence, randomNumber(4)]);
    }
  }, [userButtonSequence]);

  useEffect(() => {
    playSequence();
  }, [buttonSequence]);

  useEffect(() => {
    if (score >= maxScore) setMaxScore(score);
  }, [score]);

  return (
    <SafeAreaView style={styles.container}>
      {finished && (
        <GameMenu
          gameScore={score}
          handlePlayAgain={() => resetGame()}
          handleHome={() => navigation.navigate('Home')}
        />
      )}
      <Text style={styles.gameModeTitle}>{playerTurn ? 'PLAY' : 'WATCH'}</Text>
      <View style={styles.gameAreaContainer}>
        <View style={styles.gameAreaRow}>
          <GameButton
            onPress={() => handleButtonClick(0)}
            color="green"
            disabled={!playerTurn}
            active={currentSequenceButton === 0}
          />
          <GameButton
            onPress={() => handleButtonClick(1)}
            color="red"
            disabled={!playerTurn}
            active={currentSequenceButton === 1}
          />
        </View>
        <View style={styles.gameAreaRow}>
          <GameButton
            onPress={() => handleButtonClick(2)}
            color="yellow"
            disabled={!playerTurn}
            active={currentSequenceButton === 2}
          />
          <GameButton
            onPress={() => handleButtonClick(3)}
            color="blue"
            disabled={!playerTurn}
            active={currentSequenceButton === 3}
          />
        </View>
      </View>
      <View style={styles.scoresContainer}>
        <View style={styles.scoreContainer}>
          <Text style={styles.scoreNumber}>{score}</Text>
          <Text style={styles.scoreTitle}>SCORE</Text>
        </View>
        <View style={styles.scoreContainer}>
          <Text style={styles.scoreNumber}>{maxScore}</Text>
          <Text style={styles.scoreTitle}>MAX SCORE</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gameModeTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#080808',
    marginBottom: 11,
  },
  gameAreaContainer: {
    width: '80%',
  },
  gameAreaRow: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  gameButton: {
    backgroundColor: 'red',
    height: 150,
    width: 150,
    borderRadius: 100,
    margin: 5,
  },
  scoresContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    width: '60%',
    maxWidth: 400,
  },
  scoreContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  scoreNumber: {
    fontSize: 72,
    fontWeight: 'bold',
    marginBottom: 1,
  },
  scoreTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 0,
  },
});

export default GameScreen;
