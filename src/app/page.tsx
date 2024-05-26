"use client";
import { useRouter } from "next/navigation";
const Home = () => {
  const route = useRouter();
  const handleClick = () => {
    route.push("/blog");
  };
  return (
    <div>
      Home page
      <button onClick={handleClick}>click</button>
    </div>
  );
};

export default Home;
