import { OrbitControls } from "@react-three/drei";
import { Astronaut } from "../components/Astronaut";
import HeroText from "../components/HeroText"
import ParallaxBackground from "../components/ParallaxBackground";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { useFrame } from "@react-three/fiber";
import { Suspense } from "react";
import { easing } from "maath";
import { Float } from "@react-three/drei";
import Loader from "../components/Loader";

const Hero = ({id}) => {
    const isMobile=useMediaQuery({maxWidth:853});
  return (
    <section id={id} className="flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space">
        <HeroText/>
        <ParallaxBackground/>
        <figure 
            className="absolute inset-0"
            style={{ width: "100vw", height: "100vh" }}>
            <Canvas camera={{ position: [0, 1, 5], fov: 50 }}>
              <Suspense fallback={<Loader/>}>
                <Float>
                  {/* lights */}
                  <ambientLight intensity={0.5} />
                  <directionalLight position={[10, 10, 5]} intensity={1} />
                  <pointLight position={[-10, -10, -5]} intensity={0.5} />
                  
                  <Astronaut position={isMobile && [-0.6, -2.5, 0]} scale={isMobile && 1.5} rotation={[5, Math.PI, 12]}/>
                </Float>
              </Suspense>
                <Rig/>
            </Canvas>
        </figure>
    </section>
  );
};

function Rig(){
  return useFrame((state, delta)=> {
    easing.damp3(
      state.camera.position, 
      [state.mouse.x /10, 1 + state.mouse.y /10, 3],
        0.25, 
        delta)
  });
}

export default Hero;