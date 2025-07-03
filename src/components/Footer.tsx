import { useNavigate, useLocation } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { href: "#expertise", label: "Expertise" },
    { href: "#suppliers", label: "Suppliers" },
    { href: "#customers", label: "Customers" },
    { href: "/about", label: "About Us" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (href: string) => {
    // Handle About Us navigation (route-based)
    if (href === "/about") {
      navigate("/about");
      // Scroll to top of the page after navigation
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
      return;
    }

    // Handle section scrolling
    // If we're not on the homepage, navigate there first
    if (location.pathname !== '/') {
      navigate('/', { replace: true });
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      // We're already on homepage, just scroll
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-sm opacity-90">
              © 2025 SQM Israel Ltd. All rights reserved.
            </p>
          </div>
          
          {/* Footer Navigation */}
          <nav className="flex space-x-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-sm opacity-90 hover:opacity-100 transition-opacity"
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
        
        {/* Company Info */}
        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center">
          <div className="text-sm opacity-75 max-w-2xl mx-auto">
            SQM Israel Ltd - Leading provider of power quality, energy storage, and grid protection solutions since 1990.
            Serving utility and industrial customers across Israel with reliable, engineered solutions.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;