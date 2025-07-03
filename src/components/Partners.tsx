const Partners = () => {
  const partners = [
    "S&C Electric",
    "Hitzinger", 
    "Iljin",
    "Zibo-Taiguang",
    "K-Line",
    "CSL"
  ];

  return (
    <section id="suppliers" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted Suppliers
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Working with leading manufacturers to deliver world-class solutions
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 h-24 flex items-center justify-center"
            >
              <div className="text-center">
                <div className="font-semibold text-primary text-sm">
                  {partner}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;