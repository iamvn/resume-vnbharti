import Profile from "./components/profile/profile";
import Header from "./components/header/header";
import Projects from "./components/projects/projects";
import Skills from "./components/skills/skills";

export default function Home() {
  const skillsCardArray = [
    {
      title: "Frontend",
      skills: [
        "HTML",
        "CSS",
        "Tailwind",
        "Javascript",
        "Typescript",
        "React Js",
        "Next Js 13",
      ],
    },
    {
      title: "Backend",
      skills: [
        "Node Js",
        "Express Js",
        "Prism",
        "Nest"
      ],
    },
    {
      title: "Database",
      skills: [
        "MySql",
        "MongoDB",
        "PostgreSQL"
      ],
    },
    {
      title: "Others",
      skills: [
        "Git",
        "Jenkins",
        "Figma",
        "Basic of Aws"
      ],
    },
  ];
  return (
<div className="relative">
<div className="fixed top-0 left-0 right-0 bg-gray-900"><Header/></div>
<main className="flex flex-col justify-between p-16 gap-2">
      <div className="flex justify-center p-24">
        <Profile />
      </div>
      <div>
        <div className="text-xl font-medium text-zinc-200 py-5">Projects</div>
        <div className="flex gap-3">
          {[1, 2, 3, 4].map((val, index) => {
            return <Projects key={index}/>;
          })}
        </div> 

        <div className="flex flex-col mt-5 h-14">
        <div className="text-xl font-medium text-zinc-200 py-5">
          What I know
        </div>
        <div className="flex gap-3 items-baseline justify-center">
          {skillsCardArray &&
            skillsCardArray.map((val: any, index: any) => {
              return <Skills key={index} data={val} />;
            })}
        </div>
        </div>

      </div>
    </main>
</div>
  );
}
