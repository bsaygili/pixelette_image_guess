
import { Dimensions } from 'react-native';

const useDimensions = () => {
  const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
  const canvasSize = Math.min(screenWidth, screenHeight);
  return {
    screenWidth,
    screenHeight,
    canvasSize,
  };
};

export default useDimensions;
