import Image from 'next/image'
import { useTheme } from "./ThemeContext";

export default function HistoryCard({ subtitle, text, avatar }: {subtitle: string,text:string,avatar:string}) {
    
    const { primary, textColor, secondary } = useTheme();

    return(
        <div className='mb-11'>
            
            <div className='flex items-end justify-between'>
                <div>
                    <p style={{color: secondary, fontFamily: '"Times New Roman", Times, serif'}} className="italic ml-5 text-[25px]">{subtitle}</p>
                </div>

                <Image 
                    src={avatar} 
                    alt="Avatar curioso" 
                    width={150} 
                    height={150}
                    style={{borderColor: secondary}}
                    className='relative top-3 p-3 bg-white rounded-full border-[3px] min-w-[150px] min-h-[150px] object-contain'
                />

            </div>


            <div style={{borderColor: primary, backgroundColor: `color-mix(in srgb, ${primary}, transparent 10%)`}} className={`group max-w-sm overflow-hidden rounded-3xl border p-3`}>
                
                <p style={{color: textColor}} className={`text-base leading-relaxed text-center`}>
                    {text}
                </p>

            </div>

        </div>

    )

}