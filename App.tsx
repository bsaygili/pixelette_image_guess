import React, { useState } from 'react';
import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';
import {
  useImage,
} from '@shopify/react-native-skia';
import { ImageCanvas, PixelSlider } from './src/components';
import { images } from './src/constants';


const App = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [pixelSize, setPixelSize] = useState<number>(0.1);
  const [score, setScore] = useState<number>(0);
  const image = useImage(images[currentIndex].download_url);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setPixelSize(0.1);
  };
  const checkGuess = (value: number) => {
    if (value === images[currentIndex].answer) {
      setPixelSize(0);
      Alert.alert('🎉 Doğru!', 'Tebrikler, doğru tahmin ettiniz!', [
        {
          text: 'Bitir',
          onPress: () => {
            setScore(0);
          },
          style: 'cancel',
        },
        {
          text: 'Sonraki', onPress: () => {
            setScore(score + 1);
            nextImage();
          },
        },
      ]);
    } else {
      Alert.alert('❌ Yanlış!', 'Tekrar dene!');
    }
  };

  if (!image) {
    return null;
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.score}>Puan: {score}</Text>
        <ImageCanvas image={image} pixelSize={pixelSize} />

        <View style={styles.sliderContainer}>
          <PixelSlider pixelSize={pixelSize} setPixelSize={setPixelSize} />
        </View>
        <View style={styles.optionsContainer}>
          {
            images[currentIndex].options?.map(option => {
              return (
                <Pressable
                  style={styles.optionBtn}
                  key={option.text}
                  onPress={() => checkGuess(option.value)}
                >
                  <Text style={styles.optionText}>{option.text}</Text>
                </Pressable>
              );
            })
          }
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffb217',
    padding: 20,
  },
  sliderContainer: {
    marginTop: 20,
    width: '80%',
    alignItems: 'center',
  },
  optionsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginTop: 20,
  },
  optionBtn: {
    backgroundColor: '#e0b0ff',
    padding: 10,
    borderRadius: 10,
  },
  score: {
    color: '#fff',
    fontSize: 20,
    marginBottom: 10,
  },
  optionText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
});
export default App;
