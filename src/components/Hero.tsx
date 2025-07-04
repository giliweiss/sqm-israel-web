import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(hsla(214, 100%, 33%, 0.6), hsla(214, 100%, 33%, 0.6)), url(${heroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="container mx-auto px-4 text-center text-white z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          Reliable Power Quality, Energy Storage & Grid Protection
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto font-medium opacity-90">
          Since 1990, SQM Israel Ltd keeps Israel's grid—and its industries—running safely and efficiently.
        </p>
        <div className="flex justify-center">
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-4 text-lg h-auto"
            onClick={() => window.location.href = '/about'}
          >
            Read More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;