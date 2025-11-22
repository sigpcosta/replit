import FAQSection from '../FAQSection'
import { Home as HomeIcon } from "lucide-react";

export default function FAQSectionExample() {
  const categories = [
    {
      title: "Alojamento Local",
      icon: HomeIcon,
      href: "/alojamento",
      faqs: [
        {
          question: "Onde ficam localizados os apartamentos?",
          answer: "Os nossos 3 apartamentos estão localizados no centro da cidade da Horta, Faial, com fácil acesso a todas as comodidades."
        },
        {
          question: "Os apartamentos estão equipados?",
          answer: "Sim, todos os apartamentos estão totalmente equipados com cozinha, Wi-Fi, roupa de cama e tudo o que precisa para uma estadia confortável."
        }
      ]
    }
  ];

  return <FAQSection categories={categories} />
}
