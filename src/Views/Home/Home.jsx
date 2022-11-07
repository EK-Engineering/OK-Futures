import VideoPlayer from '../.././Components/Video/VideoPlayer.jsx';
import stockvid from '../.././Assets/stockvid.mp4';
import KeyTruths from '../.././Components/KeyTruths/KeyTruths.jsx';
import Carousels from '../.././Components/Carousel/Carousel.jsx';
import Header from '../../Components/Layout/Header.jsx';
import Foot from '../../Components/Layout/Foot.jsx';

export default function Home() {
  return (
    <div className="w-screen p-4 flex flex-col content-center">
      <Header />
      <VideoPlayer content={stockvid} />
      <KeyTruths />
      <Carousels />
      <Foot />
    </div>
  )
}