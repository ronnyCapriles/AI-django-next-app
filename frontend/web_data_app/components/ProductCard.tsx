import Image from "next/image";

export default function ProductCard (props: any) {
    const Product = require ('../public/pizza2.jpg')
    return(
        <div className="w-full flex flex-row items-center justify-around">
            <div className="w-5/12 md:w-1/4 flex flex-col items-center justify-center h-full">
            <Image src={Product} alt="product" className="h-full w-full object-contain"/>
            </div>
            <div className="w-7/12 md:w-3/4 h-64 px-2 flex flex-col justify-center">
                <h1 className="w-full h-1/6 font-roboto text-lg text-center text-lg align-middle"> Titulo de comida</h1>
                <h1 className="w-full h-2/3 overflow-y-scroll text-justify font-montserrat">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt justo eget tortor mattis, non laoreet turpis ultricies. Aliquam condimentum interdum lacinia. Sed at ante at tortor tempus finibus eget ac justo. Curabitur sagittis, turpis lacinia ullamcorper consequat, lacus turpis consequat felis, ultrices ornare lacus urna et diam. Nullam imperdiet neque eu sollicitudin faucibus. Vivamus sollicitudin porttitor est, id sagittis metus. Mauris imperdiet odio sit amet tellus gravida, ac aliquet arcu ornare. Nunc turpis turpis, maximus a felis sed, eleifend pellentesque diam. Donec semper consectetur eros, non placerat ipsum. Phasellus elit nibh, bibendum nec tortor ut, dignissim bibendum ante. Mauris viverra arcu augue. Fusce finibus mi nisl, ac hendrerit eros rhoncus vel.
                    Vivamus semper pellentesque ornare. Vestibulum interdum molestie libero, id viverra erat vestibulum sollicitudin. Aenean erat sapien, ultrices eget purus ut, viverra rhoncus sem. Integer et arcu id ipsum tincidunt aliquam. Morbi porta eleifend velit, sed porta risus dignissim ut. Morbi vehicula nisi id magna rutrum consectetur. Nulla pulvinar sapien lectus, iaculis elementum est dictum vitae. Phasellus ac pretium odio, sed maximus orci. Praesent porttitor mi sit amet condimentum cursus. Sed et volutpat ipsum. Praesent viverra pharetra nunc quis dignissim. Nunc eu felis ut dolor dapibus volutpat et eget erat. Aenean et dui eu lacus gravida elementum. Sed vitae ex posuere, viverra lectus non, fringilla lectus.
                    Donec ut varius lectus. Curabitur feugiat quam ac tincidunt condimentum. Nam sodales sed diam elementum faucibus. Ut ultricies commodo porttitor. Mauris volutpat tincidunt tortor sed feugiat. Maecenas posuere sem ut metus rutrum tincidunt. Nam dictum, quam ut sollicitudin tempus, magna nibh condimentum ex, non aliquet mauris metus et lacus. Aenean pharetra quis ligula vel efficitur. Aenean rhoncus consequat bibendum. Phasellus sollicitudin sem non risus commodo malesuada. Curabitur quis feugiat neque. Nam tempor odio in orci vehicula, in aliquet sapien volutpat. Vestibulum sit amet massa turpis.
                    Praesent eu vehicula mauris. Morbi tincidunt risus id libero euismod, sit amet fermentum mi blandit. Nam pellentesque et elit non ultrices. Vivamus mollis sodales lacus a luctus. Curabitur volutpat erat sit amet metus laoreet, vel ultricies quam varius. Aenean rhoncus tincidunt massa vel mattis. Etiam at erat volutpat, aliquam felis eget, convallis nibh. Sed rhoncus, sem placerat elementum varius, velit mauris pellentesque velit, non mattis lectus neque sit amet nisl. Morbi nec tempus metus. Etiam pretium enim viverra, finibus quam et, efficitur risus. Nunc id rhoncus lacus, id consectetur ipsum. Curabitur nunc mauris, malesuada ac nunc at, congue iaculis dolor.
                    Donec nec sollicitudin nisl. Nam sit amet quam eu nisl elementum suscipit ac et nibh. Suspendisse vitae neque placerat, sodales metus ut, placerat purus. Nulla facilisi. Quisque congue urna quis nisi tristique ultricies. Aliquam in laoreet lorem, quis facilisis enim. Pellentesque dapibus id lacus eu feugiat. Cras risus diam, euismod sit amet tincidunt eget, facilisis a justo. Sed at nisi vel ligula scelerisque tincidunt interdum in turpis.
                    Donec suscipit elit quis felis consequat, eu consequat ligula semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus leo eu viverra ornare. Nullam eget nulla ac leo sodales elementum vel ac turpis. Donec gravida nibh at vehicula placerat. Nulla eros lorem, rutrum eu porta varius, tempus ac nulla. Vestibulum faucibus velit non dui efficitur, a ullamcorper urna consectetur. Curabitur sollicitudin iaculis sapien nec lobortis. Donec consectetur lacus quis ante efficitur, eget condimentum nulla tempus. Quisque tristique dignissim eleifend. Suspendisse enim velit, tempor vitae venenatis id, faucibus non nisi. Aenean lobortis, nisi quis efficitur feugiat, quam quam viverra nibh, ut volutpat orci orci vel purus. Nam dignissim laoreet libero eleifend mattis. Aliquam faucibus aliquet gravida. Sed sed suscipit magna.
                    Ut nec ultrices metus. Fusce pretium nibh leo, eu bibendum felis interdum molestie. Nulla eleifend arcu eu velit ultrices vehicula. Pellentesque id magna nec tortor sagittis malesuada. Mauris eleifend orci leo. Vestibulum vel ornare sem. Donec pulvinar imperdiet dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris odio magna, sagittis at interdum eu, placerat sed felis. Curabitur nec aliquet lectus, quis tincidunt ligula.
                    Sed ultrices est semper sapien tempor, non volutpat erat auctor. Vivamus erat nulla, viverra non euismod a, placerat sit amet magna. Curabitur id tortor posuere, euismod nisi accumsan, venenatis purus. In convallis aliquet orci, eu blandit felis aliquam mattis. Donec bibendum feugiat ante, vitae imperdiet leo pharetra sed. Pellentesque sagittis urna in elementum pulvinar. Morbi posuere neque lorem, a euismod ex euismod nec. Aliquam maximus rutrum augue, a facilisis tellus consectetur a. Suspendisse pellentesque faucibus mi in sagittis. Nulla congue eu dolor ut vulputate. Mauris ultricies, nunc aliquam porttitor accumsan, urna diam ullamcorper mi, sit amet ullamcorper risus tortor a ligula. Praesent mollis nunc quis pulvinar vestibulum. Aliquam sit amet massa eget risus pulvinar hendrerit. Praesent fermentum tellus vel justo ultrices dignissim. Aliquam erat volutpat.
                    Nulla sed nisl pellentesque, faucibus diam ut, hendrerit tellus. In sed nisl at velit lacinia efficitur eget vel odio. Fusce dolor enim, elementum eu nibh a, mollis suscipit sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mattis elit vel condimentum sodales. Sed ullamcorper augue massa, id placerat nunc interdum ut. Sed accumsan sollicitudin tellus, eget ornare tortor consectetur non. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc porta feugiat finibus. Suspendisse non elit vel purus commodo dictum. Donec id sapien rhoncus dui blandit ullamcorper at ac lectus. Morbi eget elit in leo vehicula porta non venenatis velit. Duis iaculis lacus vitae nulla varius pharetra. Donec id lorem vitae tortor imperdiet elementum id sit amet augue.
                    Suspendisse potenti. Maecenas sollicitudin sit amet risus non accumsan. Fusce quis dui placerat, pretium orci at, elementum urna. Curabitur egestas consequat quam sed sagittis. Proin at enim eget quam fermentum luctus quis dapibus justo. Sed dui tortor, interdum sed gravida at, consequat eget nisl. Morbi volutpat, lorem nec ullamcorper consectetur, leo urna consectetur ligula, et varius neque risus pulvinar diam. Cras quis fringilla metus. Cras placerat non lorem at dignissim. Etiam lacinia et magna in congue. Integer in luctus turpis, eget accumsan purus. Aliquam vel egestas diam. Integer vehicula vel dolor sed posuere. Quisque posuere magna ipsum, id consequat nulla maximus eu. Vivamus imperdiet ipsum purus, vitae accumsan ligula lacinia non. Donec tempor felis tortor, nec pulvinar nulla varius in.
                </h1>
                <div className="w-min h-min px-1 items-center bg-slate-200 rounded-full">
                    <button type="button" >Add</button>
                </div>
                    
            </div>
        </div>
    )
}