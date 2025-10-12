import { OrbitingCircles } from "./OrbitingCircles"

export function Frameworks() {
    const skills = [
        "vitejs",
        "python",
        "react",
        "tailwindcss",
        "cplusplus",
        "git",
        "javascript",
        "mongodb",
        "sql",
        "html5",
        "css3",
        "csharp",
        "java",
        "c",
        "github",
    ];
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
            <Icons key={index} src={`assets/logos/${skill}.svg`} />
            ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={30} radius={100} reverse speed={2}>
        {skills.reverse().map((skill, index) => (
            <Icons key={index} src={`assets/logos/${skill}.svg`} />
            ))}
      </OrbitingCircles>
    </div>
  )
}

const Icons = ({ src }) => (
    <img src={src} className="duration-200 rounded-sm hover:scale-110" />  
)
