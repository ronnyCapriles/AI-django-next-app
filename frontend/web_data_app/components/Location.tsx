import { PinAlt } from "iconoir-react"

export default function Location (props:any){
    return (
        <div className="flex flex-row justify-around">
            <PinAlt className="mr-1" color="black" height={20} width={20} />
            <p className='text-sky-800 text-xs font-montserrat'>
                agregar icon Esta es la ubicaion 
            </p>
            
        </div>
    )
}

