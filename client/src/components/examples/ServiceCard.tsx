import ServiceCard from '../ServiceCard'
import { Home as HomeIcon } from "lucide-react";
import apartmentImage from "@assets/generated_images/Modern_Horta_apartment_interior_ec6f658d.png";

export default function ServiceCardExample() {
  return (
    <div className="p-8 max-w-sm">
      <ServiceCard
        title="Alojamento Local"
        description="3 apartamentos modernos no centro da cidade da Horta, totalmente equipados para uma estadia confortável."
        image={apartmentImage}
        icon={HomeIcon}
        href="#alojamento"
      />
    </div>
  )
}
