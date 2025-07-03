import { Button } from "@/components/ui/button";
import ctaBackground from "@/assets/cta-background.jpg";
const CtaStrip = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section className="py-20 relative overflow-hidden" style={{
    backgroundImage: `linear-gradient(hsla(214, 100%, 33%, 0.7), hsla(214, 100%, 33%, 0.7)), url(${ctaBackground})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed"
  }}>
      <div className="container mx-auto px-4 text-center text-white relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Need a custom power solution?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Our engineering team is ready to design the perfect solution for your specific requirements.
        </p>
        <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-4 text-lg h-auto" onClick={scrollToContact}>Contact Us</Button>
      </div>
    </section>;
};
export default CtaStrip;