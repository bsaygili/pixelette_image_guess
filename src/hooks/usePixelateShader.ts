import { Skia } from '@shopify/react-native-skia';

const usePixelateShader = () => {
  const pixelateShader = Skia.RuntimeEffect.Make(`
        uniform vec2 u_resolution;
        uniform float u_pixelSize;
        uniform shader image;
        
        half4 main(float2 xy) {
          if (u_pixelSize == 0.0) {
            return image.eval(xy);
          }
          vec2 uv = xy / u_resolution;
          vec2 pixelatedUV = floor(uv / u_pixelSize) * u_pixelSize;
          return image.eval(pixelatedUV * u_resolution);
        }`)!;

  return {
    pixelateShader,
  };
};

export default usePixelateShader;
