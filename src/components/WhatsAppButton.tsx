import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    // Format: +972 50-724-0010 becomes 972507240010
    const phoneNumber = "972507240010";
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-accent hover:bg-accent/90 text-white rounded-full px-4 py-3 shadow-lg transition-all duration-300 hover:scale-110 flex items-center gap-2"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={24} />
      <span className="font-medium">Contact Us</span>
    </button>
  );
};

export default WhatsAppButton;