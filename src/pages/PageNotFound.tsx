import are from '../assets/arecomputersalive.png';

export default function PageNotFound(){
    const buildingtext = "Building ;)"
    return(
        <div className='flex justify-center items-center mt-[50vh]'>
            <div className="group justify-center items-center size-fit flex flex-col">
                <img className='' src={are}></img>
                <h1 className='hidden group-hover:block font-[pagenotfound-font]
                text-2xl'>{buildingtext}</h1>
            </div>
        </div>
    )
}