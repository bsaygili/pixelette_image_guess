import Slider from '@react-native-community/slider';
import React from 'react';
import { StyleSheet } from 'react-native';

interface PixelSliderProps {
  pixelSize: number;
  setPixelSize: (value: number) => void;
}

const PixelSlider: React.FC<PixelSliderProps> = ({
  pixelSize,
  setPixelSize,
}) => {
  return (
    <Slider
      style={styles.slider}
      minimumValue={0.0}
      maximumValue={0.2}
      step={0.01}
      value={pixelSize}
      onValueChange={value => {
        setPixelSize(value);
      }}
      minimumTrackTintColor="#FFFFFF"
      maximumTrackTintColor="#000000"
    />
  );
};

const styles = StyleSheet.create({
  slider: {
    width: '100%',
    height: 40,
  },
});

export default PixelSlider;
