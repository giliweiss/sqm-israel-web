import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8 text-center">
                About SQM Israel (2001) Ltd
              </h1>
              
              <div className="prose prose-lg max-w-none text-foreground">
                <div className="bg-muted p-8 rounded-lg mb-8">
                  <h2 className="text-2xl font-semibold text-primary mb-4">Company Profile</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong>SQM Israel (2001) Ltd</strong> is operating in the Power Energy and Electric market.
                    The company is specializing in power quality and energy storage applications, 
                    switching & protection in Transmission & Distribution network.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold text-primary mb-3">Founded</h3>
                    <p className="text-muted-foreground">
                      <strong>SQM Israel (2001) Ltd</strong> established in 1990 by Noam and Ziv Weissberg 
                      to support foreign companies in the local Israeli market.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold text-primary mb-3">Mission</h3>
                    <p className="text-muted-foreground">
                      Since 1990 <strong>SQM Israel (2001) Ltd</strong> is focusing on developing and improving 
                      its expertise and quality in Business Initiation, Business Regulation, Technical 
                      Support, Service and Marketing.
                    </p>
                  </div>
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-semibold text-primary mb-4">Business Expertise</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      In the business area, <strong>SQM Israel (2001) Ltd</strong> established a team of business 
                      initiators, funding experts and regulators experts. This team is assembling consortiums 
                      that establishing IPP's projects (GT, WFT, Bio Gas and PV).
                    </p>
                    <div className="bg-accent/10 p-4 rounded-lg">
                      <p className="text-primary font-semibold">
                        SQM Israel (2001) Ltd has proven managing experience of large projects.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-primary mb-4">Technical Excellence</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      In the technical area, <strong>SQM Israel (2001) Ltd</strong> established a team of 
                      electrical/mechanical engineers, technicians and experts. The team is superior 
                      trained by the manufacturers enable to support their equipments on-time and control 
                      projects. As well, they are familiar with customer problems and often give them good solutions.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-primary mb-4">Market Relations</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      In the marketing area <strong>SQM Israel (2001) Ltd</strong> build deep business relationship 
                      with the utilities companies and the energy consumers that are based on faith, loyalty 
                      and reliability. SQM has been achieving expertise and professionally in big tenders 
                      applying and processing. SQM gain expertise in assemble offset trades and industrial cooperation.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-primary mb-4">Industry Recognition</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      <strong>SQM Israel (2001) Ltd</strong> is well known in Israel through the relation with 
                      electrical engineering companies, the participating in all the electricity conferences 
                      and exhibitions and organization of new device launching seminars.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;