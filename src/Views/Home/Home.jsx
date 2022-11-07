import VideoPlayer from '../.././Components/Video/VideoPlayer.jsx';
import stockvid from '../.././Assets/stockvid.mp4';
import KeyTruths from '../.././Components/KeyTruths/KeyTruths.jsx';
import Carousels from '../.././Components/Carousel/Carousel.jsx';
import Header from '../../Components/Layout/Header.jsx';
import Foot from '../../Components/Layout/Foot.jsx';

export default function Home() {
  return (
    <div className="w-screen p-5 flex flex-col items-center bg-bg-white lg:w-full">
      <Header />
      <VideoPlayer content={stockvid} />
      <KeyTruths />
      <Carousels />
      <Foot />
    </div>
  )
}