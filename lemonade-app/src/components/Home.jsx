import lemonadevideo from "../assets/lemonadevideo.mp4";

export default function Home() {
  return (
    <>
      <div className="w-full h-screen relative">
        <video
          className="w-full h-full object-cover"
          src={lemonadevideo}
          autoPlay
          loop
          muted
        />
        <div className="absolute w-full h-full top-0 left-0"></div>
      </div>
    </>
  );
}
