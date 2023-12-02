
import { Canvas } from "@react-three/fiber";
import {HomeScene} from '@/scenes/HomeScene';
import { useState } from 'react';


 export const App=() =>{

  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Osi.mp4');

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  }

  const changeOption = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  }
 
  return (
    
   <> 
   <section className="navbar">
      <ul>
        <li>
          <a href="">Inicio</a>
          <div className="description">
          <h1 className="Titulonavbar">Nuestra Pagina</h1>
          <p className="Texto">¡Bienvenidos, ingenieros! 
En esta página, podrán visualizar un video que explica las capas del modelo OSI y su funcionamiento. El video se proyecta en una pantalla de computadora y se puede disfrutar en 360 grados, con todos sus componentes representados en 3D. Esta experiencia se ha desarrollado utilizando TypeScript y three.js.</p>

          </div>
        </li>
        <li>
          <a href="">Videos</a>
          <div className="description">
          <h1 className="Titulonavbar">Funcionamiento del video</h1>
          <p className="Texto">Este código React crea un componente llamado VideoPlane que muestra un video en un plano 3D utilizando three.js. El video se reproduce automáticamente al montar el componente y se utiliza como textura en el plano, lo que permite integrar videos en una escena 3D de manera efectiva.</p>
          </div>
        </li>
        <li>
          <a href="">Acerca De...</a>
          <div className="description">
          <h1 className="Titulonavbar">Nosotros Somos</h1>
          <p className="Texto">Nicolas Arturo Valencia : Diseñador<br />
          Santiago Garcia Gil : Encargado de la documentacion <br />
          Juan David Ramirez Grismaldo: Desarrollador
          </p>
          </div>
        </li>
      </ul>
      </section>

    <main className="app">
      <section className="hero">
        <h1 className="Marca">MP4</h1>
        <h3  className="submarca">Reproductor de video</h3>
        <p  className="textomarca">Puedes aprender del Modelo OSI,Vlan y Subbneting con videos sobre esos temas</p>
        <img className='Logo' src="https://colombiaestudia.com/wp-content/uploads/2022/03/Logo_UniValle.jpg" alt="Univalle" />
      </section>
    </main>
    

    
    <Canvas className="canvas" 
    shadows 
    camera={{ position: [0, 30, 60], fov: 15 }}
    >
     <HomeScene />
    </Canvas>
    </>
  );
}

