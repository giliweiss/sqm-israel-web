import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to discuss your power solution requirements? Contact our engineering team today.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-primary">
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Phone</h4>
                <a 
                  href="tel:+972507240010" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +972-50-724-0010
                </a>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-2">Email</h4>
                <a 
                  href="mailto:ziv@sqmtech.com" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  ziv@sqmtech.com
                </a>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-2">Address</h4>
                <p className="text-muted-foreground">
                  Dvora 14<br />
                  Hod HaSharon, Israel
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-primary">
                Business Hours
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex justify-between">
                  <span>Sunday - Thursday</span>
                  <span>8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Friday</span>
                  <span>8:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>Closed</span>
                </div>
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-sm font-medium text-accent">
                    24/7 Emergency Support Available
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;