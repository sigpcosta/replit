import FeaturedActivity from '../FeaturedActivity'
import lasertagImage from "@assets/generated_images/Laser_tag_action_shot_63a174d9.png";

export default function FeaturedActivityExample() {
  return (
    <div className="p-8 max-w-6xl">
      <FeaturedActivity
        title="Lasertag & Paintball"
        description="Viva momentos emocionantes com os nossos jogos de estratégia em campo próprio. Equipamento de qualidade e cenários desafiantes."
        image={lasertagImage}
        highlights={[
          "Campo próprio em localização privilegiada",
          "Equipamento moderno e seguro",
          "Ideal para grupos e festas de aniversário"
        ]}
      />
    </div>
  )
}
