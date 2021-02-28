import Sound from 'react-native-sound';

export default (buttonIndex: number) => {
  const sound = new Sound(
    `button_${buttonIndex}.wav`,
    Sound.MAIN_BUNDLE,
    (error) => {
      if (error) throw error;

      sound.setVolume(0.5);
      sound.play();

      setTimeout(() => {
        sound.stop();
        sound.release();
      }, 250);
    },
  );
};
