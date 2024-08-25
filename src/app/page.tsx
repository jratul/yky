import Starfield from "react-starfield";
import Carousel from "./Carousel";

export default function Home() {
  return (
    <div>
      <Carousel />
      <Starfield
        starCount={1000}
        starColor={[255, 255, 255]}
        speedFactor={0.05}
        backgroundColor="#00011a"
      />
    </div>
  );
}
