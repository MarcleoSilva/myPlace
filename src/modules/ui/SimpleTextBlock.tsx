import big from '../../assets/blocks/bigblock.svg'
import small from '../../assets/blocks/smallblock.svg'
import medium from '../../assets/blocks/mediumblock.svg'

export default function SimpleTextBlock(
    {title, text}:{title: string, text: string}

    ){
        return(
            <div className='relative w-screen flex justify-center'>
                <div className='absolute -z-1'>
                    <img src={big} className='hidden bgdevice:block'></img>
                    <img src={medium} className='hidden smdevice:block bgdevice:hidden'></img>
                    <img src={small} className='smdevice:hidden bgdevice:hidden'></img>
                </div>
                <div className='flex flex-col pt-5 max-w-75 smdevice:max-w-130 bgdevice:max-w-160'>
                    <div>
                        <label className='peer flex flex-row justify-end'>
                            <input type='checkbox' name='highlight' 
                            className='peer appearence-none rounded-lg border border-blue-950 accent-[#54838b] '/>
                            <p className='text-black bg-[#54838b] text-1xl 
                            ml-3 font-(family-name:--big-font)'>Highlight text?</p>
                        </label>
                        <h1 className='font-(family-name:--big-font)
                    text-white text-6xl'>{title}</h1>
                    <p className='peer-has-checked:bg-[#54838b]
                     peer-has-checked:text-black mt-3 p-1 text-white 
                     font-(family-name:--sillytext-font) text-1xl smdevice:text-2xl'>{text}</p>
                    </div>
                </div>
            </div>
        )

}



