import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface FeaturedActivityProps {
  title: string;
  description: string;
  image: string;
  imagePosition?: "left" | "right";
  highlights?: string[];
}

export default function FeaturedActivity({
  title,
  description,
  image,
  imagePosition = "left",
  highlights = [],
}: FeaturedActivityProps) {
  return (
    <div className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${imagePosition === "right" ? "md:flex-row-reverse" : ""}`}>
      <div className={`${imagePosition === "right" ? "md:order-2" : ""}`}>
        <img
          src={image}
          alt={title}
          className="w-full h-80 md:h-96 object-cover rounded-lg"
        />
      </div>
      <div className={`${imagePosition === "right" ? "md:order-1" : ""}`}>
        <h3 className="font-heading text-3xl font-bold mb-4" data-testid={`text-activity-title`}>
          {title}
        </h3>
        <p className="text-muted-foreground text-lg mb-6" data-testid={`text-activity-desc`}>
          {description}
        </p>
        {highlights.length > 0 && (
          <ul className="space-y-2 mb-6">
            {highlights.map((highlight, index) => (
              <li key={index} className="flex items-start gap-2">
                <div className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                <span className="text-foreground">{highlight}</span>
              </li>
            ))}
          </ul>
        )}
        <Button size="lg" data-testid="button-activity-learn">
          Saber Mais
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}
