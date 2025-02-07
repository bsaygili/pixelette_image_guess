import { Canvas, Fill, ImageShader, Shader, SkImage } from '@shopify/react-native-skia';
import React from 'react';
import { useDimensions, usePixelateShader } from '../../hooks';


interface ImageCanvasProps {
  image: SkImage;
  pixelSize: number;
}

const ImageCanvas: React.FC<ImageCanvasProps> = ({ image, pixelSize }) => {
  const { canvasSize } = useDimensions();

  const { pixelateShader } = usePixelateShader();

  return (
    <Canvas style={{ width: canvasSize, height: canvasSize }
    }>
      <Fill>
        <Shader
          source={pixelateShader}
          uniforms={{
            u_resolution: [canvasSize, canvasSize],
            u_pixelSize: pixelSize,
          }}
        >
          <ImageShader
            image={image}
            fit="cover"
            rect={{ x: 0, y: 0, width: canvasSize, height: canvasSize }}
          />
        </Shader>
      </Fill>
    </Canvas>
  );
};

export default ImageCanvas;
