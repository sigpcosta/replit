import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import FeaturedActivity from "@/components/FeaturedActivity";
import WhyChoose from "@/components/WhyChoose";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { Home as HomeIcon, Zap, PartyPopper, Scissors, Building2, Store } from "lucide-react";

import apartmentImage from "@assets/generated_images/Modern_Horta_apartment_interior_ec6f658d.png";
import lasertagImage from "@assets/generated_images/Laser_tag_action_shot_63a174d9.png";
import eventsImage from "@assets/generated_images/Event_tent_celebration_fca04953.png";
import tattooImage from "@assets/generated_images/Tattoo_studio_workspace_bfc3187a.png";
import propertyImage from "@assets/generated_images/Azorean_property_exterior_4bd4f6fb.png";
import shopImage from "@assets/generated_images/Azores4fun_retail_shop_8204420f.png";
import supImage from "@assets/generated_images/SUP_paddleboarding_Azores_ocean_960e2ee9.png";
import vanImage from "@assets/generated_images/Electric_van_island_tour_9d32feea.png";
import teambuildingImage from "@assets/generated_images/Teambuilding_outdoor_activity_99e77711.png";
import paintballImage from "@assets/generated_images/Paintball_action_gameplay_8c01711a.png";

export default function Home() {
  const services = [
    {
      title: "Lasertag, Paintball, Gelblaster e NERFs",
      description: "Atividades de estratégia ao ar livre, num campo construído de raiz para o efeito, como se estivessem \"ao vivo e a cores\" em pleno \"Call of Duty\". Desafia-te! (Faial & Pico)",
      image: lasertagImage,
      icon: Zap,
      href: "#paintball",
    },
    {
      title: "Tours de Carrinha",
      description: "Vem descobrir a ilha, e todos os seus fantásticos recantos, na nossa confortável carrinha. Programas pré-definidos ou feitos à tua medida, com ou sem almoço incluído.",
      image: vanImage,
      icon: HomeIcon,
      href: "#tours",
    },
    {
      title: "SUPs e Caiaques",
      description: "Com os nossos SUPs e caiaques insufláveis podes aventurar-te por portos e praias ao longo de toda a ilha do Faial e ter o privilégio de a conhecer noutra perspectiva.",
      image: supImage,
      icon: Zap,
      href: "#sups",
    },
    {
      title: "Snorkeling",
      description: "Máscara, tubo e barbatanas é tudo quanto é preciso para se explorar e desfrutar do maravilhoso mundo subaquático superficial das nossas ilhas.",
      image: supImage,
      icon: Zap,
      href: "#snorkeling",
    },
    {
      title: "Percursos Pedestres e Camping",
      description: "Calce as botas, coloque a mochila às costas e venha connosco descobrir incríveis trilhos! Quer apenas os transferes ou dormir na natureza e não trouxe a tenda!? Fale connosco!",
      image: teambuildingImage,
      icon: PartyPopper,
      href: "#percursos",
    },
    {
      title: "Apartamentos Casa da Travessa",
      description: "No centro da cidade da Horta disponibilizamos três apartamentos independentes, em regime de Alojamento Local, tipologias T0, T2 e T3.",
      image: apartmentImage,
      icon: HomeIcon,
      href: "#apartamentos",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <Hero />

      <section id="services" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>


      <CTASection />

      <Footer />
    </div>
  );
}
