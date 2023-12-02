import {useEffect, useState} from 'react';
import * as THREE from 'three';
import { Text } from '@react-three/drei';

export const VideoPlane = ({videourl, setVideoUrl, ...props}:any) => {
  const [video, setVideo] = useState<HTMLVideoElement | null>(null);
  const [isPaused, setIsPaused] = useState(true);
  

  useEffect(() => {
    const videoElement = document.createElement('video');
    videoElement.src = videourl;
    videoElement.crossOrigin = 'anonymous';
    videoElement.loop = true;
    videoElement.muted = false; // Asegúrate de que el video no esté silenciado
    setVideo(videoElement);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === 'Space') {
        if (videoElement.paused) {
          videoElement.play();
          setIsPaused(false);
        } else {
          videoElement.pause();
          setIsPaused(true);
        }
      } else if (event.code === 'ArrowRight' || event.code === 'ArrowLeft' ) {
        // Detiene el video actual antes de cambiar a un nuevo video
        videoElement.pause();
        setIsPaused(true);
        setVideoUrl((prevUrl: string) => {
          switch (prevUrl) {
            case 'Osi.mp4':
              return 'Vlan.mp4';
            case 'Vlan.mp4':
              return 'Subbne.mp4';
              case 'Subbne.mp4':
                return 'Protocolo.mp4'; 
            default:
              return 'Osi.mp4';
          }
        });
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [videourl, setVideoUrl]);

  return (
    <mesh castShadow receiveShadow position={[0,5,0.6]} scale={[16,9,1]} {...props}>
      <planeGeometry/>
      {video && <meshBasicMaterial>
        <videoTexture attach="map" args={[video]} encoding={THREE.sRGBEncoding}/>
      </meshBasicMaterial>}
      {isPaused && <group position={[0, 0, 0.1]}>
    <mesh position={[0, 0, -0.01]} scale={[1, 0.5, 1]}>
      <planeGeometry />
      <meshBasicMaterial color="white" />
    </mesh>
    <Text 
      fontSize={0.15} 
      color="red" 
      anchorX="center"
      anchorY="middle" 
    >
      {videourl}
    </Text>
  </group>
}
    </mesh>
  );
}