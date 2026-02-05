import {ButtomLG, ButtomSM} from "./ui/Buttom";


export default function HomeNav(){
    return(
        <div className="bgdevice:flex bgdevice:justify-center bgdevice:gap-[1%] 
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
                <ButtomLG text='silly blog' path="/blog"></ButtomLG>
            </div>
        </div>
    )
}
