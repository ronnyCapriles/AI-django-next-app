import Image from "next/image";

export default function ProductCard (props: any) {
    const Product = require ('../public/pizza.jpg')
    return(
        <div className="my-2 px-2 w-full h-20 rounded-lg bg-white border border-slate-200 flex flex-row justify-between items-center">
            <Image src={Product} alt="product" className="w-25% h-full"/>
            <div className="w-70% h-full text-justify overflow-y-scroll px-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
        </div>
    )
}