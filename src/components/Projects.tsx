import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Projects = () => {
  const customers = [
    "Israel Electric Corporation (IEC)",
    "Ministry of Defense",
    "Israel Defense Forces (IDF)", 
    "Mekorot Water Company",
    "Dead Sea Works",
    "Israel Chemicals Ltd (ICL)",
    "Teva Pharmaceutical Industries",
    "Intel Israel"
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
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center max-w-6xl mx-auto">
          {customers.map((customer, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 h-24 flex items-center justify-center"
            >
              <div className="text-center">
                <div className="font-semibold text-primary text-sm">
                  {customer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;