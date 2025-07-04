import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import type { CarouselApi } from "@/components/ui/carousel";

const Partners = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [isHovered, setIsHovered] = useState(false);

  // Flatten all companies with their categories for the carousel
  const allSuppliers = [
    { 
      name: "Iljin Electric", 
      website: "http://www.iljinelectric.com/eng/main.jsp",
      logo: "https://via.placeholder.com/180x80/E5E7EB/6B7280?text=ILJIN+Electric",
      category: "HV Cables"
    },
    { 
      name: "Taiguang Electrical Equipment Factory", 
      website: "http://www.taiguang.com/",
      logo: "https://via.placeholder.com/180x80/E5E7EB/6B7280?text=Taiguang",
      category: "Composite Insulators"
    },
    { 
      name: "K-Line", 
      website: "https://www.k-line.net/",
      logo: "https://via.placeholder.com/180x80/E5E7EB/6B7280?text=K-Line",
      category: "Composite Insulators"
    },
    { 
      name: "Jinguan Electric", 
      website: "https://www.jinguanelectric.com/products/composite-insulator/",
      logo: "https://via.placeholder.com/180x80/E5E7EB/6B7280?text=Jinguan+Electric",
      category: "Composite Insulators"
    },
    { 
      name: "S&C Electric Co", 
      website: "http://www.sandc.com/",
      logo: "https://via.placeholder.com/180x80/E5E7EB/6B7280?text=S%26C+Electric",
      category: "Switching & Protection"
    },
    { 
      name: "Hitzinger", 
      website: "http://www.hitzinger.at/en",
      logo: "https://via.placeholder.com/180x80/E5E7EB/6B7280?text=Hitzinger",
      category: "Switching & Protection"
    },
    { 
      name: "S&C Electric Co", 
      website: "http://www.sandc.com/",
      logo: "https://via.placeholder.com/180x80/E5E7EB/6B7280?text=S%26C+Electric",
      category: "Energy Storage"
    },
    { 
      name: "Jiangsu Shuanghui Power Development Co.", 
      website: "#",
      logo: "https://via.placeholder.com/180x80/E5E7EB/6B7280?text=Jiangsu+Shuanghui",
      category: "Transmission & Distribution Hardware"
    },
    { 
      name: "Jinguan Electric", 
      website: "https://www.jinguanelectric.com/",
      logo: "https://via.placeholder.com/180x80/E5E7EB/6B7280?text=Jinguan+Electric",
      category: "MV & HV Surge Arresters"
    }
  ];

  useEffect(() => {
    if (!api) {
      return;
    }

    const interval = setInterval(() => {
      if (!isHovered) {
        api.scrollNext();
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [api, isHovered]);

  return (
    <section id="suppliers" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Suppliers
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Working with leading manufacturers to deliver world-class solutions
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
              skipSnaps: false,
              dragFree: true,
              duration: 25,
            }}
            className="w-full"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {allSuppliers.map((supplier, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <Card className="bg-white shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 h-full">
                    <CardContent className="p-4">
                      <div className="flex flex-col items-center space-y-3 h-full">
                        <div className="w-full h-16 flex items-center justify-center bg-gray-50 rounded-lg overflow-hidden">
                          <img 
                            src={supplier.logo} 
                            alt={supplier.name}
                            className="max-w-full max-h-full object-contain"
                          />
                        </div>
                        <div className="text-center flex-1 flex flex-col justify-between">
                          <div>
                            <div className="text-xs text-primary font-medium mb-1">
                              {supplier.category}
                            </div>
                            <h4 className="font-medium text-foreground text-sm mb-3 line-clamp-2">
                              {supplier.name}
                            </h4>
                          </div>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => window.open(supplier.website, '_blank', 'noopener,noreferrer')}
                            className="text-xs w-full"
                          >
                            Visit Website
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Partners;