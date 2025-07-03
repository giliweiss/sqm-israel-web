const Partners = () => {
  const supplierCategories = [
    {
      title: "HV Cables",
      companies: [
        { name: "Iljin", website: "http://www.iljinelectric.com/eng/main.jsp" }
      ]
    },
    {
      title: "Composite Insulators", 
      companies: [
        { name: "Taiguang Electrical Equipment Factory", website: "http://www.taiguang.com/" },
        { name: "K-Line", website: "https://www.k-line.net/" },
        { name: "Jinguan Electric", website: "https://www.jinguanelectric.com/products/composite-insulator/" }
      ]
    },
    {
      title: "Switching & Protection",
      companies: [
        { name: "S&C Electric Co", website: "http://www.sandc.com/" },
        { name: "Hitzinger", website: "http://www.hitzinger.at/en" }
      ]
    }
  ];

  return (
    <section id="suppliers" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Suppliers
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Working with leading manufacturers to deliver world-class solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {supplierCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-primary mb-4 text-center">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.companies.map((company, companyIndex) => (
                  <div key={companyIndex} className="text-center">
                    <div className="font-medium text-foreground text-sm mb-1">
                      {company.name}
                    </div>
                    <a 
                      href={company.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-muted-foreground hover:text-primary transition-colors"
                    >
                      Company Website
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;