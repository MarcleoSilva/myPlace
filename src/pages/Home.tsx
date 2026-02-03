import '../App.css';
import MainBackground from '../modules/ui/MainBackground'
import oceanTrail from '../assets/home/ocean.gif'
import HomeNav from '../modules/ui/HomeNav';


export default function Home() {
  return (
    <div>
        <MainBackground />
        <div className='grid justify-items-center'>
          <h1 className='text-[#0D314A] font-(family-name:--big-font) text-3xl sm:text-5xl md:text-6xl
          text-center'>Navigare necesse est, vivere non est necesse</h1>
          <img src={oceanTrail} ></img>
        </div>
        <div className='pt-10'>
          <HomeNav></HomeNav>
        </div>
        

    </div>
  );
}

