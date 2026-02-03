import {ButtomLG, ButtomSM} from "./Buttom";


export default function HomeNav(){
    return(
        <div className="nav:flex nav:justify-center nav:gap-[1%] 
        grid-cols-2 grid-rows-2 grid place-items-center gap-10">
            <div>
                <ButtomSM  text='about' path="/about"></ButtomSM>
            </div>
            <div>
                <ButtomLG text='cs projects' path="/cs"></ButtomLG>
            </div>
            <div>
                <ButtomSM  text='poetry' path="/poetry"></ButtomSM>
            </div>
            <div>
                <ButtomLG text='current msc' path="/msc"></ButtomLG>
            </div>
        </div>
    )
}
