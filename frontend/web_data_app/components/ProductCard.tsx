import Image from "next/image";

export default function ProductCard (props: any) {
    const Product = require ('../public/pizza.jpg')
    return(
        <div className="my-2 px-2 w-full h-20 rounded-lg bg-white border border-slate-200 flex flex-row justify-between items-center">
            <Image src={Product} alt="product" className="w-1/3 h-full "/>
            <div className="w-2/3 h-full  overflow-y-scroll px-2">
                <h1 className=" text-center font-roboto text-lg"> Titulo de comida</h1>
                <h1 className=" text-justify font-montserrat text-xs">Descipcion de la comida </h1>
                <div className="relative">
                    <button type="button"  className=" bg-sky-300 absolute inset-y-0 right-0"> icon add</button>
                </div>
                
          
            </div>
        </div>
    )
}