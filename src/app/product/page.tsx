import Image from "next/image";
import jumbo from "../public/jumbo.png";
import image001 from "../public/img001.png";
import image002 from "../public/img002.png";
import image003 from "../public/img003.png";
import image004 from "../public/img004.png";
import image005 from "../public/img005.png";
import image006 from "../public/img006.png";
import image007 from "../public/img007.png";
import image008 from "../public/img008.png";
import image009 from "../public/img009.png";
import image010 from "../public/img010.png";
import image011 from "../public/img011.png";
import image012 from "../public/img012.png";

export default function Product() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-[#2e3758] p-4">
      
      {/* Header Image */}
      <div className="mb-8">
        <Image src={jumbo} alt="jumbo" width={1448} height={200} priority />
      </div>

      {/* Product Images in Grid */}
      <div className="grid grid-cols-3 gap-6">
        <Image src={image001} alt="watch" width={300} height={600} />
        <Image src={image002} alt="watch" width={300} height={600}/>
        <Image src={image003} alt="watch" width={300} height={600} />
        <Image src={image004} alt="watch" width={300} height={600} />
        <Image src={image005} alt="watch" width={300} height={600}/>
        <Image src={image006} alt="watch" width={300} height={600} />
        <Image src={image007} alt="watch" width={300} height={600} />
        <Image src={image008} alt="watch" width={300} height={600}/>
        <Image src={image009} alt="watch" width={300} height={600}/>
        <Image src={image010} alt="watch" width={300} height={600} />
        <Image src={image011} alt="watch" width={300} height={600}/>
        <Image src={image012} alt="watch" width={300} height={600} />
      </div>
    </div>
  ); 
        
}
