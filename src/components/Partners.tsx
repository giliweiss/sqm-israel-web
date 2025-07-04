import { useState, useEffect } from 'react';

const Partners = () => {
  const [currentSlides, setCurrentSlides] = useState<{[key: number]: number}>({});
  const [isHovered, setIsHovered] = useState<{[key: number]: boolean}>({});

  // Auto-advance slides for categories with multiple companies
  useEffect(() => {
    const intervals: NodeJS.Timeout[] = [];
    
    supplierCategories.forEach((category, index) => {
      if (category.companies.length > 1 && !isHovered[index]) {
        const interval = setInterval(() => {
          setCurrentSlides(prev => ({
            ...prev,
            [index]: ((prev[index] || 0) + 1) % category.companies.length
          }));
        }, 4000); // Change slide every 4 seconds
        intervals.push(interval);
      }
    });

    return () => {
      intervals.forEach(interval => clearInterval(interval));
    };
  }, [isHovered]);

  const nextSlide = (categoryIndex: number, totalCompanies: number) => {
    setCurrentSlides(prev => ({
      ...prev,
      [categoryIndex]: ((prev[categoryIndex] || 0) + 1) % totalCompanies
    }));
  };

  const prevSlide = (categoryIndex: number, totalCompanies: number) => {
    setCurrentSlides(prev => ({
      ...prev,
      [categoryIndex]: ((prev[categoryIndex] || 0) - 1 + totalCompanies) % totalCompanies
    }));
  };

  const goToSlide = (categoryIndex: number, slideIndex: number) => {
    setCurrentSlides(prev => ({
      ...prev,
      [categoryIndex]: slideIndex
    }));
  };

  const handleMouseEnter = (categoryIndex: number) => {
    setIsHovered(prev => ({ ...prev, [categoryIndex]: true }));
  };

  const handleMouseLeave = (categoryIndex: number) => {
    setIsHovered(prev => ({ ...prev, [categoryIndex]: false }));
  };
  const supplierCategories = [
    {
      title: "HV Cables",
      icon: "⚡",
      color: "from-blue-500 to-blue-600",
      companies: [
        { 
          name: "Iljin Electric", 
          website: "http://www.iljinelectric.com/eng/main.jsp",
          description: "Leading HV cable manufacturer",
          logo: "/src/assets/suppliers-logos/iljin-electric.png"
        }
      ]
    },
    {
      title: "Composite Insulators", 
      icon: "🔧",
      color: "from-green-500 to-green-600",
      companies: [
        { 
          name: "Taiguang Electrical Equipment Factory", 
          website: "http://www.taiguang.com/",
          description: "Composite insulator specialist",
          logo: "/src/assets/suppliers-logos/taiguang-electrical-equipment-factory.png"
        },
        { 
          name: "K-Line", 
          website: "https://www.k-line.net/",
          description: "Polymer insulation solutions",
          logo: "/src/assets/suppliers-logos/k-line.png"
        },
        { 
          name: "Jinguan Electric", 
          website: "https://www.jinguanelectric.com/products/composite-insulator/",
          description: "Advanced composite materials",
          logo: "/src/assets/suppliers-logos/jinguan-logo_70h.png"
        }
      ]
    },
    {
      title: "Switching & Protection",
      icon: "🛡️",
      color: "from-purple-500 to-purple-600",
      companies: [
        { 
          name: "S&C Electric Co", 
          website: "http://www.sandc.com/",
          description: "Grid protection & automation",
          logo: "/src/assets/suppliers-logos/s-and-c-electric.png"
        },
        { 
          name: "Hitzinger", 
          website: "http://www.hitzinger.at/en",
          description: "High-voltage test systems",
          logo: "/src/assets/suppliers-logos/hitzinger.png"
        }
      ]
    },
    {
      title: "Energy Storage",
      icon: "🔋",
      color: "from-orange-500 to-orange-600",
      companies: [
        { 
          name: "S&C Electric Co", 
          website: "http://www.sandc.com/",
          description: "Grid-scale energy storage",
          logo: "/src/assets/suppliers-logos/s-and-c-electric.png"
        }
      ]
    },
    {
      title: "Transmission &\nDistribution Hardware",
      icon: "🏗️",
      color: "from-red-500 to-red-600",
      companies: [
        { 
          name: "Jiangsu Shuanghui Power Development Co.", 
          website: "http://www.jsshdl.com/",
          description: "Transmission & Distribution hardware solutions",
          logo: "/src/assets/suppliers-logos/jiangsu-power-supply.png"
        }
      ]
    },
    {
      title: "Surge Arresters",
      icon: "⚡",
      color: "from-indigo-500 to-indigo-600",
      companies: [
        { 
          name: "Jinguan Electric", 
          website: "https://www.jinguanelectric.com/",
          description: "MV & HV surge protection technology",
          logo: "/src/assets/suppliers-logos/jinguan-logo_70h.png"
        }
      ]
    }
  ];

  return (
    <section id="suppliers" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Global Suppliers
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Partnering with world-class manufacturers to deliver cutting-edge power solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {supplierCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-gray-300 group"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              {/* Category Header */}
              <div className={`bg-gradient-to-r ${category.color} p-6 text-white`}>
                <div className="flex items-center justify-between min-h-[100px]">
                  <div className="flex-1">
                    <div className="text-3xl mb-2">{category.icon}</div>
                    <h3 className="text-xl font-bold mb-1 leading-tight min-h-[50px] flex items-center whitespace-pre-line">
                      {category.title}
                    </h3>
                    <div className="text-sm opacity-90">
                      {category.companies.length} {category.companies.length === 1 ? 'Partner' : 'Partners'}
                    </div>
                  </div>
                </div>
              </div>

              {/* Companies Carousel */}
              <div className="p-6">
                <div className="relative">
                  {/* Auto-advance indicator */}
                  {category.companies.length > 1 && !isHovered[index] && (
                    <div className="absolute top-0 right-0 bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-bl-lg rounded-tr-lg z-20">
                      Auto
                    </div>
                  )}
                  
                  {/* Carousel Container */}
                  <div className="overflow-hidden rounded-lg">
                    <div 
                      className="flex transition-transform duration-500 ease-in-out"
                      style={{ 
                        transform: `translateX(-${(currentSlides[index] || 0) * 100}%)` 
                      }}
                    >
                      {category.companies.map((company, companyIndex) => (
                        <div 
                          key={companyIndex} 
                          className="w-full flex-shrink-0"
                        >
                          <div className="border border-gray-100 rounded-lg p-3 hover:border-gray-300 transition-colors duration-200 hover:shadow-sm min-h-[240px] flex flex-col bg-gradient-to-br from-white to-gray-50 group/card">
                            {/* Large Company Logo - Takes up most of the card */}
                            <div className="flex justify-center items-center flex-1 mb-3">
                              <div className="w-full h-40 flex items-center justify-center bg-white rounded-lg border border-gray-100 shadow-sm p-6 group-hover/card:shadow-md transition-shadow duration-200">
                                <img 
                                  src={company.logo} 
                                  alt={`${company.name} logo`}
                                  className="max-w-full max-h-full object-contain hover:scale-110 transition-transform duration-300"
                                  onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.style.display = 'none';
                                  }}
                                />
                              </div>
                            </div>
                            
                            {/* Minimal Company Info - Just essentials */}
                            <div className="text-center space-y-2">
                              <h4 
                                className="font-semibold text-foreground text-sm leading-tight"
                                title={company.description}
                              >
                                {company.name}
                              </h4>
                              
                              {company.website !== "#" && company.website !== "https://www.jsshuanghui.com/" && (
                                <a 
                                  href={company.website}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 transition-colors duration-200 font-medium group/link bg-blue-50 hover:bg-blue-100 px-2 py-1 rounded-full"
                                >
                                  <span>Visit Website</span>
                                  <svg className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                  </svg>
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Navigation Arrows - Only show if more than 1 company */}
                  {category.companies.length > 1 && (
                    <>
                      <button
                        onClick={() => prevSlide(index, category.companies.length)}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-white rounded-full p-2 shadow-lg border border-gray-200 hover:bg-gray-50 hover:shadow-xl transition-all duration-200 z-10 opacity-0 group-hover:opacity-100"
                        aria-label="Previous supplier"
                      >
                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      
                      <button
                        onClick={() => nextSlide(index, category.companies.length)}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-white rounded-full p-2 shadow-lg border border-gray-200 hover:bg-gray-50 hover:shadow-xl transition-all duration-200 z-10 opacity-0 group-hover:opacity-100"
                        aria-label="Next supplier"
                      >
                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </>
                  )}

                  {/* Pagination Dots - Only show if more than 1 company */}
                  {category.companies.length > 1 && (
                    <div className="flex justify-center mt-4 gap-2">
                      {category.companies.map((_, dotIndex) => (
                        <button
                          key={dotIndex}
                          onClick={() => goToSlide(index, dotIndex)}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            (currentSlides[index] || 0) === dotIndex 
                              ? 'bg-blue-600 scale-125' 
                              : 'bg-gray-300 hover:bg-gray-400 hover:scale-110'
                          }`}
                          aria-label={`Go to supplier ${dotIndex + 1}`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-4xl mx-auto border border-gray-200">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">
                  {supplierCategories.length}
                </div>
                <div className="text-sm text-muted-foreground">Categories</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">
                  {Array.from(new Set(supplierCategories.flatMap(category => category.companies.map(company => company.name)))).length}
                </div>
                <div className="text-sm text-muted-foreground">Partners</div>
              </div>
              <div className="col-span-2 md:col-span-1">
                <div className="text-3xl font-bold text-primary mb-2">30+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;