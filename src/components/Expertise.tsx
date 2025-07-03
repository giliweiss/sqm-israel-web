import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Expertise = () => {
  const expertiseAreas = [
    {
      title: "Power Quality & Energy Storage",
      description: "UPS, battery & hybrid solutions for reliable power delivery and grid stability.",
      icon: "⚡"
    },
    {
      title: "Switching & Protection",
      description: "HV switching (22 kV-400 kV), surge arresters, underground switch-gear for comprehensive grid protection.",
      icon: "🔌"
    },
    {
      title: "Engineering & Project Management",
      description: "Tender support, consortium building, 24/7 field service for complete project lifecycle management.",
      icon: "🔧"
    }
  ];

  return (
    <section id="expertise" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions for power systems, energy storage, and grid infrastructure
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-4">{area.icon}</div>
                <CardTitle className="text-xl font-semibold text-primary">
                  {area.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-muted-foreground leading-relaxed">
                  {area.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;