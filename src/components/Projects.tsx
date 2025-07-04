import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Projects = () => {
  const customers = [
    { name: "JEDCO", logo: "/src/assets/customersLogos/jedco.jpg" },
    { name: "Israel Defense Forces (IDF)", logo: "/src/assets/customersLogos/idf.jpg" },
    { name: "ORMAT Technologies", logo: "/src/assets/customersLogos/ormat.png" },
    { name: "Tower Semiconductor", logo: "/src/assets/customersLogos/tower.jpg" },
    { name: "SHEBA Medical Center", logo: "/src/assets/customersLogos/sheba.jpg" },
    { name: "InterPlus Energy", logo: "/src/assets/customersLogos/inter-plus.png" },
    { name: "Israel Chemicals Ltd (ICL)", logo: "/src/assets/customersLogos/icl.png" },
    { name: "ELECTRA ELCO C&S", logo: "/src/assets/customersLogos/electra-elco.png" },
    { name: "Afcon Holdings", logo: "/src/assets/customersLogos/afcon.jpg" },
    { name: "VRT", logo: "/src/assets/customersLogos/vrt.png" },
    { name: "Kibbutz Cabri", logo: "/src/assets/customersLogos/kibutz-cabri.jpg" },
    { name: "Israel Electric Corporation (IEC)", logo: "/src/assets/customersLogos/israel-electric.jpg" }
  ];

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
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {customers.map((customer, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 h-32 flex flex-col items-center justify-center">
                    <div className="mb-2 flex-1 flex items-center justify-center">
                      <img 
                        src={customer.logo} 
                        alt={customer.name}
                        className="max-h-16 max-w-full object-contain"
                      />
                    </div>
                    <div className="text-center">
                      <div className="font-medium text-primary text-xs">
                        {customer.name}
                      </div>
                    </div>
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