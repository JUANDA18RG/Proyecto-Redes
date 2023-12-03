import { VideoPlane } from "@/components";
import { Environment, GizmoHelper, OrbitControls, Stars} from "@react-three/drei";
import { useState } from 'react';


export const HomeScene = () => {

  const [currentVideo, setCurrentVideo] = useState('Osi.mp4');

  return (
    <>
    <OrbitControls />
        <pointLight
          position={[10, 15, 15]}
          color="purple"
          castShadow
          intensity={10} /* Aumentar la intensidad de la luz */
          distance={30} /* Aumentar la distancia de alcance de la luz */
          shadow-camera-near={0.1}
          shadow-camera-far={30} /* Aumentar la distancia de sombra */
          shadow-camera-left={-20}
          shadow-camera-right={20}
          shadow-camera-top={20}
          shadow-camera-bottom={-20}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />

        <directionalLight
          position={[15, 10, -5]}
          color="blue"
          castShadow
          intensity={10} /* Aumentar la intensidad de la luz */
          shadow-camera-near={0.1}
          shadow-camera-far={30} /* Aumentar la distancia de sombra */
          shadow-camera-left={-20}
          shadow-camera-right={20}
          shadow-camera-top={20}
          shadow-camera-bottom={-20}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />

        <Environment preset="city" />
        <GizmoHelper alignment="bottom-right" margin={[100, 100]} />
        <group position={[0, -3, 0]}>
        
        
        
      <OrbitControls />
      <pointLight
        position={[10, 15, 15]}
        color="purple"
        castShadow
        intensity={10} /* Aumentar la intensidad de la luz */
        distance={30} /* Aumentar la distancia de alcance de la luz */
      />
      <VideoPlane videourl={currentVideo} setVideoUrl={setCurrentVideo} receiveShadow castShadow />
     
      <directionalLight
        position={[15, 10, -5]}
        color="blue"
        castShadow
        intensity={15} /* Aumentar la intensidad de la luz */
      />
       <directionalLight
        position={[-15, 10, 5]}
        color="yellow"
        castShadow
        intensity={3} /* Aumentar la intensidad de la luz */
      />
        
        {/* Televisor */}
        <mesh castShadow receiveShadow position={[0, 5, 0]}>
          <boxGeometry args={[17, 10, 1]} />
          <meshStandardMaterial color='white' roughness={0.2} metalness={0.8} envMapIntensity={0.5} />
        </mesh>
        {/* parte de atras del televisor */}
        <mesh position={[0, 5, -1]}>
          <boxGeometry args={[2, 10, 2]} /> {/* Los argumentos son la anchura, la altura y la profundidad del cubo */}
          <meshStandardMaterial
            color='white' roughness={0.2} metalness={0.8} envMapIntensity={0.5} 
          />
        </mesh>
          {/*  parte de atras del televisor */}
          <mesh position={[0, 0, -2]}>
          <boxGeometry args={[5, 1, 5]} /> {/* Los argumentos son la anchura, la altura y la profundidad del cubo */}
          <meshStandardMaterial
            color='white' roughness={0.2} metalness={0.8} envMapIntensity={0.5} 
          />
        </mesh>

        

        {/* La base de la mesa */}
        <mesh position={[0, -5, 0]}>
          <cylinderGeometry args={[10, 10, 10, 64]} />
          <meshStandardMaterial color='#DC5B3B' roughness={0} metalness={0} envMapIntensity={0.5} />
        </mesh>

        {/* Objetos que hay en la mesa */}
        <mesh position={[5, 1, 5]} castShadow>
          <icosahedronGeometry />
          <meshStandardMaterial color='#8e00f4' envMapIntensity={0.8} roughness={0.2} metalness={1} />
        </mesh>
        <mesh receiveShadow castShadow rotation-x={-Math.PI / 2} position={[8, 1.1, 2]} scale={[2, 2, 2]}>
          <boxGeometry args={[1, 1, 1, 3, 3, 3]} />
          <meshStandardMaterial color='#2d2d2d' envMapIntensity={0.5} roughness={0} metalness={0} wireframe />
        </mesh>

        {/* Teclado encima de la mesa */}
        <mesh position={[-2, 0, 5]}>
          <boxGeometry args={[8.3, 0.3, 5.5]} />
          <meshStandardMaterial color='white' roughness={0} metalness={0} envMapIntensity={0.5} />
        </mesh>
        {/* Teclas del teclado */}
        {Array.from({ length: 60 }).map((_, index) => {
          const row = Math.floor(index / 10); // Filas de teclas
          const col = index % 10; // Columnas de teclas
          const keyWidth = 0.7;
          const keyHeight = 0.2;
          const keyDepth = 0.7;
          const keySpacing = 0.1;
          const keyX = -5.6 + col * (keyWidth + keySpacing);
          const keyY = 0.3; // Ajusta la altura para que las teclas estén encima
          const keyZ = 7.2 - row * (keyDepth + keySpacing);
          
        return (
            <mesh
            key={index}
            position={[keyX, keyY, keyZ]}
            >
            <boxGeometry args={[keyWidth, keyHeight, keyDepth]} />
            <meshStandardMaterial color='black' roughness={0.2} metalness={0.8} envMapIntensity={0.5} />
            </mesh>
        );
        })}

            {/* Mouse encima de la mesa */}
             <mesh position={[4, 0, 7.5]}> {/* Ajusta la posición del mouse según tu preferencia */}
                    <boxGeometry args={[1, 1, 2]} /> {/* Ajusta las dimensiones del mouse según tu preferencia */}
                    <meshStandardMaterial color='white' roughness={0.2} metalness={0.8} envMapIntensity={0.5} />
            </mesh>
                    {/* Mouse encima de la mesa */}
            <mesh position={[4, 0, 7.5]}> {/* Ajusta la posición del mouse según tu preferencia */}
            <boxGeometry args={[1, 1, 1.5]} /> {/* Ajusta las dimensiones del mouse según tu preferencia */}
            <meshStandardMaterial color='white' roughness={0.2} metalness={0.8} envMapIntensity={0.5} />
            </mesh>

            {/* Botón de la rueda */}
            <mesh position={[4, 0.5, 7]}> {/* Ajusta la posición del botón de la rueda según tu preferencia */}
            <boxGeometry args={[0.2, 0.3, 0.2]} /> {/* Ajusta las dimensiones del botón de la rueda según tu preferencia */}
            <meshStandardMaterial color='black' roughness={0.2} metalness={0.8} envMapIntensity={0.5} />
            </mesh>

              {/* Esfera brillante (como un sol) */}
          <mesh castShadow receiveShadow position={[20, 20, -20]}>
            <sphereGeometry args={[5, 32, 32]} />
            <meshStandardMaterial color='yellow' emissive='orange' emissiveIntensity={1.5} roughness={0.1} metalness={1.0} />
          </mesh>

          {/* Esfera como un planeta */}
          <mesh castShadow receiveShadow position={[-15, 30, -40]}>
            <sphereGeometry args={[5, 32, 32]} />
            <meshStandardMaterial
              color='red' 
              emissive='blue'
              roughness={0.5}
              metalness={0.2}
            />

          </mesh>
             {/* Esfera como un planeta */}
             <mesh castShadow receiveShadow position={[-15, 30, -40]}>
            <sphereGeometry args={[-10, 32, 32]} />
            <meshStandardMaterial
              color='blue' 
              emissive='green'
              roughness={0.5}
              metalness={0.2}
            />
          </mesh>

            {/* Esfera como un planeta */}
            <mesh castShadow receiveShadow position={[-15, -10, -50]}>
            <sphereGeometry args={[-15, 32, 32]} />
            <meshStandardMaterial
              color='red' 
              emissive='red'
              roughness={0.5}
              metalness={0.2}
            />
          </mesh>

      <mesh castShadow receiveShadow position={[-15, -10, -50]}>
        <dodecahedronGeometry args={[5, 0]} /> {/* El primer argumento es el radio y el segundo es el detalle */}
        <meshStandardMaterial
          color="orange"
          emissive="green"
          roughness={0.5}
          metalness={0.2}
        />
      </mesh>

      <mesh castShadow receiveShadow position={[20, -10, -50]}>
        <ringGeometry args={[2, 3, 16, 1, 0, Math.PI * 2]} /> {/* Los argumentos son: innerRadius, outerRadius, thetaSegments, phiSegments, thetaStart, thetaLength */}
        <meshStandardMaterial
          color="red"
          emissive="blue"
          roughness={0.5}
          metalness={0.2}
        />
      </mesh>

      <mesh castShadow receiveShadow position={[20, -15, -15]}>
        <ringGeometry args={[2, 3, 16, 1, 0, Math.PI * 2]} /> {/* Los argumentos son: innerRadius, outerRadius, thetaSegments, phiSegments, thetaStart, thetaLength */}
        <meshStandardMaterial
          color="orange"
          emissive="orange"
          roughness={0.5}
          metalness={0.2}
        />
      </mesh>

      <mesh castShadow receiveShadow position={[-30, 0, -15]}>
        <dodecahedronGeometry args={[5, 0]} /> {/* El primer argumento es el radio y el segundo es el detalle */}
        <meshStandardMaterial
          color="purple"
          emissive="green"
          roughness={0.5}
          metalness={0.2}
        />
      </mesh>
      </group>
      <Stars radius={50} depth={50} count={5000} factor={20} saturation={0} fade speed={1} />
    </>
  );
}
