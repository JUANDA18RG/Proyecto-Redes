
import { Canvas } from "@react-three/fiber";
import {HomeScene} from '@/scenes';
 export const App=() =>{
 
  return (
   <> 
   <section className="navbar">
      <ul>
        <li>
          <a href="">Inicio</a>
          <div className="description">
          <h1 className="Titulonavbar">Nuestra Pagina</h1>
          <p className="Texto">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto aperiam quasi ipsa, nihil sunt sapiente tenetur veritatis consectetur nisi sed totam dicta facilis facere voluptatibus, reprehenderit amet suscipit in cupiditate.</p>

          </div>
        </li>
        <li>
          <a href="">Videos</a>
          <div className="description">
          <h1 className="Titulonavbar">Funcionamineto de los Videos</h1>
          <p className="Texto">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto aperiam quasi ipsa, nihil sunt sapiente tenetur veritatis consectetur nisi sed totam dicta facilis facere voluptatibus, reprehenderit amet suscipit in cupiditate.</p>
          </div>
        </li>
        <li>
          <a href="">Acerca De...</a>
          <div className="description">
          <h1 className="Titulonavbar">Nosotros Somos</h1>
          <p className="Texto">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto aperiam quasi ipsa, nihil sunt sapiente tenetur veritatis consectetur nisi sed totam dicta facilis facere voluptatibus, reprehenderit amet suscipit in cupiditate.</p>
          </div>
        </li>
      </ul>
      </section>

    <main className="app">
      <section className="hero">
        <h1 className="Marca">MP4</h1>
        <h3  className="submarca">Reproductor de video</h3>
        <p  className="textomarca">Pon un link de cualquier video y lo reproducimos</p>
        <img className='Logo' src="https://colombiaestudia.com/wp-content/uploads/2022/03/Logo_UniValle.jpg" alt="" />
      </section>
    </main>
    
    <Canvas className="canvas" 
    shadows 
    camera={{ position: [0, 30, 60], fov: 15 }}
    >
    <HomeScene/>
    </Canvas>
    </>
  );
}

