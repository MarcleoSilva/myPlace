import '../App.css';
import oceanTrail from '../assets/home/ocean.gif';
import HomeNav from '../modules/HomeNav';
import MainBackground from '../modules/ui/MainBackground';
import SimpleTextBlock from '../modules/ui/SimpleTextBlock';
import birb from '../assets/home/birb.gif';


export default function Home() {
  return (
    <div>
        <MainBackground />
        <div className='grid justify-items-center'>
          <h1 className='text-[#0D314A] font-(family-name:--big-font) text-3xl sm:text-5xl md:text-6xl
          text-center'>Navigare necesse est, vivere non est necesse</h1>
          <img src={oceanTrail} ></img>
        </div>
        <div className='pt-10 flex justify-center items-center'>
          <HomeNav></HomeNav>
          <img src={birb} className='h-12 pl-10'></img>

        </div>
        <div className='flex justify-center items-center pr-5 pt-5'>
          <SimpleTextBlock title="Hi, I'm Marcleo" text="im a biologist, currently pursuing a degree in computer science. my alma mater is the portuguese language. i love learning new things and dismember the pieces that compose this world we live on. for that, im quite amazed by automation, emergent behavior, politics, economy and philosophy. despite ive been writing poetry since i was 16 or so, im not good at it, though i believe i have great poets as inspiration. if youre reading this, hope you find what fulfills you the most."/>
        </div>
        

    </div>
  );
}

