import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import type { CarouselApi } from "@/components/ui/carousel";

// Import all customer logos
import jedcoLogo from '@/assets/customers-logos/jedco.jpg';
import idfLogo from '@/assets/customers-logos/idf.png';
import ormatLogo from '@/assets/customers-logos/ormat.png';
import towerLogo from '@/assets/customers-logos/tower.png';
import shebaLogo from '@/assets/customers-logos/sheba.png';
import interPlusLogo from '@/assets/customers-logos/inter-plus.png';
import iclLogo from '@/assets/customers-logos/icl.png';
import electraElcoLogo from '@/assets/customers-logos/electra-elco.png';
import afconLogo from '@/assets/customers-logos/afcon.png';
import vrtLogo from '@/assets/customers-logos/vrt.png';
import kibutzCabriLogo from '@/assets/customers-logos/kibutz-cabri.jpg';
import israelElectricLogo from '@/assets/customers-logos/israel-electric.png';

const Projects = () => {
  const customers = [
    { name: "JEDCO", logo: jedcoLogo, largeSize: true, url: "https://www.jedco.org/" },
    { name: "Israel Defense Forces (IDF)", logo: idfLogo, largeSize: true, url: "https://www.idf.il/en/" },
    { name: "ORMAT Technologies", logo: ormatLogo, largeSize: false, url: "https://www.ormat.com/en/home/a/main/" },
    { name: "Tower Semiconductor", logo: towerLogo, largeSize: false, url: "https://towersemi.com/" },
    { name: "SHEBA Medical Center", logo: shebaLogo, largeSize: false, url: "https://www.shebaonline.org/" },
    { name: "InterPlus Energy", logo: interPlusLogo, largeSize: true, url: "https://www.interplus.co.il/en/home" },
    { name: "Israel Chemicals Ltd (ICL)", logo: iclLogo, largeSize: false, url: "https://www.icl-group.com/" },
    { name: "ELECTRA ELCO C&S", logo: electraElcoLogo, largeSize: false, url: "https://www.electra-elco-cs.co.il/en" },
    { name: "Afcon Holdings", logo: afconLogo, largeSize: false, url: "https://www.afcon.co.il/" },
    { name: "VRT", logo: vrtLogo, largeSize: true, url: "https://www.vrtpower.com/en" },
    { name: "Kibbutz Cabri", logo: kibutzCabriLogo, largeSize: false, url: "https://www.cabri.org.il/english/" },
    { name: "Israel Electric Corporation (IEC)", logo: israelElectricLogo, largeSize: false, url: "https://www.iec.co.il/en/home" }
  ];

  const [api, setApi] = useState<CarouselApi>();
  const [isHovered, setIsHovered] = useState(false);

  const handleCustomerClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  useEffect(() => {
    if (!api) {
      return;
    }

    // Smooth auto-scroll - more frequent, smaller movements
    const interval = setInterval(() => {
      if (!isHovered) {
        api.scrollNext();
      }
    }, 3000); // Slightly slower but smoother

    return () => clearInterval(interval);
  }, [api, isHovered]);

  return (
    <section id="customers" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Customers
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Delivering critical infrastructure solutions across Israel
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
              duration: 25, // Smooth transition duration
            }}
            className="w-full carousel-smooth"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {customers.map((customer, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <div 
                    className="bg-white rounded-lg p-8 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 h-40 flex items-center justify-center transform cursor-pointer"
                    onClick={() => handleCustomerClick(customer.url)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        handleCustomerClick(customer.url);
                      }
                    }}
                  >
                    <img 
                      src={customer.logo} 
                      alt={customer.name}
                      className={customer.largeSize ? "max-h-32 max-w-full object-contain" : "max-h-24 max-w-full object-contain"}
                    />
                  </div>
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

export default Projects;