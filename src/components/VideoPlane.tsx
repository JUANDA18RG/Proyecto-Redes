import {useEffect, useState} from 'react';
import * as THREE from 'three';
import { Text } from '@react-three/drei';

export const VideoPlane = ({setVideoUrl, ...props}:any) => {
  const videos = ['Osi.mp4', 'Vlan.mp4', 'Subbne.mp4', 'Protocolo.mp4', 'https://www.youtube.com/watch?v=4Bj3QePATuc&ab_channel=DavooXeneizePlus'];
  const [videoIndex, setVideoIndex] = useState(0);
  const [video, setVideo] = useState<HTMLVideoElement | null>(null);
  const [ ,setIsPaused] = useState(true);
  const [showVideoName, setShowVideoName] = useState(true);


const API_KEY = 'AIzaSyAv8FuFSLJjVgo_ERedqxbQMkq04Bu8N_Q'; // Reemplaza esto con tu API key de YouTube
const VIDEO_ID = '4Bj3QePATuc'; // El ID del video de YouTube

fetch(`https://www.googleapis.com/youtube/v3/videos?id=${VIDEO_ID}&part=snippet,contentDetails,statistics,status&key=${API_KEY}`)
  .then(response => {
    if (!response.ok) {
      throw new Error('Error de red al intentar obtener el video de YouTube');
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
  

  useEffect(() => {
    const videoElement = document.createElement('video');
    videoElement.src = videos[videoIndex];
    videoElement.crossOrigin = 'anonymous';
    videoElement.loop = true;
    videoElement.muted = false; // Asegúrate de que el video no esté silenciado
    setVideo(videoElement);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === 'Space') {
        if (videoElement.paused) {
          videoElement.play();
          setIsPaused(false);
          setShowVideoName(false); // Oculta el nombre del video cuando se reproduce
        } else {
          videoElement.pause();
          setIsPaused(true);
          setShowVideoName(true); // Muestra el nombre del video cuando se pausa
        }
      } else if (event.code === 'ArrowRight') {
        // Detén el video actual
        videoElement.pause();
        // Avanza al siguiente video
        setVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
        setShowVideoName(true); // Muestra el nombre del video cuando cambias de video
      } else if (event.code === 'ArrowLeft') {
        // Detén el video actual
        videoElement.pause();
        // Retrocede al video anterior
        setVideoIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
        setShowVideoName(true); // Muestra el nombre del video cuando cambias de video
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [videoIndex]);

  return (
    <mesh castShadow receiveShadow position={[0,5,0.6]} scale={[16,9,1]} {...props}>
      <planeGeometry/>
      {video && <meshBasicMaterial>
        <videoTexture attach="map" args={[video]} encoding={THREE.sRGBEncoding}/>
      </meshBasicMaterial>}
      {showVideoName && (
        <Text
          position={[0, 0, 0.2]}
          fontSize={0.1}
          color='red'
          anchorX='center'
          anchorY='middle'
          textAlign='center'
        >
          {videos[videoIndex]}
        </Text>
      )}
    </mesh>
  );
}
