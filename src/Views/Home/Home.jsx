import 'flowbite';
import Header from '../../Components/Layout/Header';
import Foot from '../../Components/Layout/Foot';

export default function Home() {
  return (
    <div>
    <h1 className='text-emerald-500 text-3xl text-center pb-3 font-mono'>
        Hello World!
    </h1>
   <header><Header/></header> 
   <footer><Foot /></footer>
    <script src="../path/to/flowbite/dist/flowbite.js"></script>
    </div>
  )
}
