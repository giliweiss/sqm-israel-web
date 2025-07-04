import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Partners = () => {
  const supplierCategories = [
    {
      title: "HV Cables",
      companies: [
        { 
          name: "Iljin Electric", 
          website: "http://www.iljinelectric.com/eng/main.jsp",
          logo: "https://via.placeholder.com/200x100/E5E7EB/6B7280?text=ILJIN+Electric"
        }
      ]
    },
    {
      title: "Composite Insulators", 
      companies: [
        { 
          name: "Taiguang Electrical Equipment Factory", 
          website: "http://www.taiguang.com/",
          logo: "https://via.placeholder.com/200x100/E5E7EB/6B7280?text=Taiguang"
        },
        { 
          name: "K-Line", 
          website: "https://www.k-line.net/",
          logo: "https://via.placeholder.com/200x100/E5E7EB/6B7280?text=K-Line"
        },
        { 
          name: "Jinguan Electric", 
          website: "https://www.jinguanelectric.com/products/composite-insulator/",
          logo: "https://via.placeholder.com/200x100/E5E7EB/6B7280?text=Jinguan+Electric"
        }
      ]
    },
    {
      title: "Switching & Protection",
      companies: [
        { 
          name: "S&C Electric Co", 
          website: "http://www.sandc.com/",
          logo: "https://via.placeholder.com/200x100/E5E7EB/6B7280?text=S%26C+Electric"
        },
        { 
          name: "Hitzinger", 
          website: "http://www.hitzinger.at/en",
          logo: "https://via.placeholder.com/200x100/E5E7EB/6B7280?text=Hitzinger"
        }
      ]
    },
    {
      title: "Energy Storage",
      companies: [
        { 
          name: "S&C Electric Co", 
          website: "http://www.sandc.com/",
          logo: "https://via.placeholder.com/200x100/E5E7EB/6B7280?text=S%26C+Electric"
        }
      ]
    },
    {
      title: "Transmission & Distribution Hardware",
      companies: [
        { 
          name: "Jiangsu Shuanghui Power Development Co.", 
          website: "#",
          logo: "https://via.placeholder.com/200x100/E5E7EB/6B7280?text=Jiangsu+Shuanghui"
        }
      ]
    },
    {
      title: "MV & HV Surge Arresters",
      companies: [
        { 
          name: "Jinguan Electric", 
          website: "https://www.jinguanelectric.com/",
          logo: "https://via.placeholder.com/200x100/E5E7EB/6B7280?text=Jinguan+Electric"
        }
      ]
    }
  ];

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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {supplierCategories.map((category, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-xl font-semibold text-primary text-center mb-6">
                {category.title}
              </h3>
              <div className="grid gap-6">
                {category.companies.map((company, companyIndex) => (
                  <Card key={companyIndex} className="bg-white shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center space-y-4">
                        <div className="w-full h-24 flex items-center justify-center bg-gray-50 rounded-lg overflow-hidden">
                          <img 
                            src={company.logo} 
                            alt={company.name}
                            className="max-w-full max-h-full object-contain"
                          />
                        </div>
                        <div className="text-center">
                          <h4 className="font-medium text-foreground text-sm mb-2">
                            {company.name}
                          </h4>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => window.open(company.website, '_blank', 'noopener,noreferrer')}
                            className="text-xs"
                          >
                            Company Website
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;