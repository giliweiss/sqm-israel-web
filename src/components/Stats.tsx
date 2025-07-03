const Stats = () => {
  const stats = [
    {
      number: "35+",
      label: "Years Experience",
      description: "Since 1990"
    },
    {
      number: "50+",
      label: "Utility & Industrial Projects",
      description: "Completed nationwide"
    },
    {
      number: "10",
      label: "In-house Engineers",
      description: "Expert team"
    },
    {
      number: "ISO 9001",
      label: "Certified",
      description: "Quality assured"
    }
  ];

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-foreground mb-1">
                {stat.label}
              </div>
              <div className="text-muted-foreground">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;