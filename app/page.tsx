import Profile from "./components/profile/profile";
import Header from "./components/header/header";

export default function Home() {
  return (
    <main className="flex flex-col justify-between p-16 gap-2">
      <Header />
      <div className="flex justify-center p-24">
        <Profile />
      </div>
    </main>
  );
}
