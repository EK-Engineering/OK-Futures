import VideoPlayer from '../.././Components/Video/VideoPlayer.jsx';
import stockvid from '../.././Assets/stockvid.mp4';

export default function Home() {
  return (
    <div className="w-96 p-4">
    <VideoPlayer content={stockvid}/>
    </div>
  )
}
