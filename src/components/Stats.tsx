import statsBackground from "@/assets/stats-background.jpg";

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
    <section 
      className="py-16 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(hsla(214, 100%, 33%, 0.8), hsla(214, 100%, 33%, 0.8)), url(${statsBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-white mb-1">
                {stat.label}
              </div>
              <div className="text-white/80">
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