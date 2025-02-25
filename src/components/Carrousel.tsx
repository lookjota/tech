import Image from "next/image"
import car01 from '../../public/car1.jpg'
import car02 from '../../public/car2.jpg'
import car03 from '../../public/car3.jpg'
// import Car04 from '../../public/car4.png'
// import Car05 from '../../public/car5.jpg'


    import { Carousel } from "@material-tailwind/react";
 
    export function Carrousel() {
      return (
        <Carousel className="rounded-xl" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
          <Image
            src={car01}
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <Image
            src={car02}
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <Image
            src={car03}
            alt="image 3"
            className="h-full w-full object-cover"
          />
        </Carousel>
      );
    }
