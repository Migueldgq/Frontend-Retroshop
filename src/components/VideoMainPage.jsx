export default function VideoMain() {
  return (
    <video className=" w-full" autoPlay loop muted playsInline >
      <source src="./videoMainPage.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
