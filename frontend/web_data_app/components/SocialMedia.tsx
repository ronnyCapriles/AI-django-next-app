import { Facebook, Instagram } from 'iconoir-react';

export default function SocialMedia (props:any){
    const size = 24
    return (
        <div className="flex flex-row w-full justify-around p-2 text-center bg-white rounded rounded-full shadow-lg">
            <Facebook color="black" height={size} width={size} />
            <Instagram color="black" height={size} width={size} />
        </div>
    )
}