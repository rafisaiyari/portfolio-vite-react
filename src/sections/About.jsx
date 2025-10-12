import Card from "../components/Card";
import { useRef } from "react";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";

const About = ({id}) => {
    const grid2Container = useRef();
  return (
  <section id={id} className="c-space section-spacing">
    <h2 className="text-heading">About Me</h2>
    <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        <div className="flex items-end grid-default-color grid-1">
            <img
                src="assets/coding-pov.png"
                className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 
                md:inset-y-10 lg:scale-[2.5]"
            />
            <div className="z-10">
                <p className="headtext">
                    Hi, I'm Rafi Saiyari
                </p>
                <p className="subtext">
                I'm a fullstack developer with experience in building scalable applications. My skill set covers both frontend and backend, and I'm passionate about integrating machine learning to create smarter solutions.
                </p>
            </div>
            <div className="absolute inset-x-0 pointer-events-none-bottom-0 h-32 bg-gradient-to-t from-indigo">

            </div>
        </div>
        {/* Grid2 */}
        <div className="grid-default-color grid-2">
            <div 
            ref={grid2Container} 
            className="flex items-center justify-center w-full h-full">
                <p className="flex items-end text-5xl text-gray-500">
                    Think. Solution. <br /> Develop. Visualize.
                </p>
                <Card style={{rotate: "0deg", top: "30%", left: "20%"}} 
                image="assets/logos/sqlite.svg"
                containerRef={grid2Container}/>
                <Card style={{rotate: "0deg", top: "60%", left: "20%"}}
                image="assets/logos/cplusplus.svg"
                containerRef={grid2Container}/>
                <Card style={{rotate: "0deg", bottom: "30%", left: "70%"}}
                image="assets/logos/javascript.svg"
                containerRef={grid2Container}/>
                <Card style={{rotate: "0deg", top: "70%", left: "70%"}}
                image="assets/logos/git.svg"
                containerRef={grid2Container}/>
                <Card style={{rotate: "0deg", top: "5%", left: "10%"}}
                image="assets/logos/react.svg"
                containerRef={grid2Container}/>
                <Card style={{rotate: "0deg", top: "90%", left: "10%"}}
                image="assets/logos/python.svg"
                containerRef={grid2Container}/>
                <Card style={{rotate: "0deg", top: "20%", left: "10%"}}
                image="assets/logos/mongodb.svg"
                containerRef={grid2Container}/>
            </div>
        </div>
        {/* Grid3 */}
        <div className="grid-default-color grid-3">
            <div className="z-10 w-[50%]">
                <p className="headtext">Time Zone</p>
                <p>I'm based in the Philippines and open to remote work worldwide.</p>
                <Globe />
            </div>
        </div>
        {/* Grid4 */}
        <div className="grid-default-color grid-4">
            <div className="flex flex-col items-center justify-center gap-4 size-full">
                <p className="text-center headtext">Want to do a project together?</p>
                <CopyEmailButton />
            </div>
        </div>
        {/* Grid5 */}
        <div className="grid-default-color grid-5">
            <div className="z-10 w-[50%]">
                <p className="headtext">Tech Stack and Languages</p>
                <p className="subtext">I specialize in a wide range of programming languages and frameworks, 
                    allowing me to build robust and scalable solutions. My expertise spans both 
                    frontend, backend development and machine learning.</p>
            </div>
            <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%]
            md:scale-125">
                <Frameworks />
            </div>

        </div>
    </div>
  </section>
  );
};

export default About;