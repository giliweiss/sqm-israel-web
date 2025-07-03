import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Projects = () => {
  const projects = [
    {
      title: "Nation-wide Underground Switching Stations",
      description: "Complete underground switching station solutions for IDF campuses nationwide, featuring 22 kV infrastructure and advanced protection systems.",
      category: "Defense Infrastructure"
    },
    {
      title: "Independent Natural-Gas & Renewables IPP Consortiums",
      description: "Strategic consortium partnerships for independent power producers across Israel, integrating natural gas and renewable energy sources.",
      category: "Energy Integration"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Delivering critical infrastructure solutions across Israel
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="text-sm font-semibold text-accent mb-2">
                  {project.category}
                </div>
                <CardTitle className="text-xl font-semibold text-primary">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;