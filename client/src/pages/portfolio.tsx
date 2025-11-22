import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import tattooImage from "@assets/generated_images/Tattoo_studio_workspace_bfc3187a.png";

export default function PortfolioPage() {
  const portfolioItems = [
    { id: 1, title: "Tatuagem realista preto e cinza", category: "Realismo" },
    { id: 2, title: "Sleeve colorida estilo japonês", category: "Tradicional" },
    { id: 3, title: "Tatuagem geométrica minimalista", category: "Geométrico" },
    { id: 4, title: "Retrato realista", category: "Realismo" },
    { id: 5, title: "Tatuagem aquarela floral", category: "Aquarela" },
    { id: 6, title: "Tatuagem tribal", category: "Tradicional" },
    { id: 7, title: "Fineline delicado", category: "Fineline" },
    { id: 8, title: "Mandala geométrica", category: "Geométrico" },
    { id: 9, title: "Piercing orelha", category: "Piercing" },
    { id: 10, title: "Sleeve completa", category: "Realismo" },
    { id: 11, title: "Tatuagem minimalista", category: "Minimalista" },
    { id: 12, title: "Arte japonesa", category: "Tradicional" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-20 md:pt-24">
        <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="mb-6">
              <Link href="/tatuagem">
                <Button variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10" data-testid="button-back">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Voltar para Tatuagens
                </Button>
              </Link>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-center" data-testid="text-page-title">
              Portfolio Completo
            </h1>
            <p className="text-lg text-primary-foreground/90 max-w-3xl mx-auto text-center">
              Explore nossa galeria completa de trabalhos. Cada peça é única e representa a dedicação e talento dos nossos artistas.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item) => (
              <Card key={item.id} className="overflow-hidden hover-elevate transition-all cursor-pointer group">
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={tattooImage}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    data-testid={`portfolio-item-${item.id}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="font-heading font-bold text-lg mb-1">{item.title}</h3>
                      <p className="text-sm text-white/90">{item.category}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
