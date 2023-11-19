import Image from "next/image";
import Projects from "./components/projects/projects";
import Profile from "./components/profile/profile";
import Headers from "./components/headers/headers";
import Skills from "./components/skills/skills";
import About from "./components/about-me/about";

export default function Home() {
  return (
    <main className="flex flex-col justify-between p-16 gap-2">
      <Headers />
      <div className="flex justify-center p-24">
      <Profile/>
      </div>
      
    </main>
  );
}
