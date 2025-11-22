import { ArrowRight, LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
  href: string;
}

export default function ServiceCard({ title, description, image, icon: Icon, href }: ServiceCardProps) {
  return (
    <Card className="group overflow-hidden hover-elevate transition-all duration-300">
      <a href={href} className="block" data-testid={`card-service-${href.slice(1)}`}>
        <div className="relative h-64 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-primary p-2 rounded-md">
                <Icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-2xl font-semibold text-white" data-testid={`text-service-title-${href.slice(1)}`}>
                {title}
              </h3>
            </div>
          </div>
        </div>
        <div className="p-6">
          <p className="text-muted-foreground mb-4" data-testid={`text-service-desc-${href.slice(1)}`}>
            {description}
          </p>
          <Button variant="default" size="sm" data-testid={`button-explore-${href.slice(1)}`}>
            +Info
          </Button>
        </div>
      </a>
    </Card>
  );
}
