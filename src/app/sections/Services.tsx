import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Services() {
  return (
    <section className="w-full py-20 bg-background mt-10">
      
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="flex gap-4 flex-col items-center">
            <div>
              <Badge>Services</Badge>
            </div>
            <div className="flex gap-2 flex-col text-center">
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-center">
                What we Offer!
              </h2>
              <p className="text-md max-w-xl lg:max-w-lg text-center leading-relaxed tracking-tight text-muted-foreground">
             Get what you deserve, only the best.
              </p>
            </div>
          </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {[
            {
              title: "Website design",
              description: "We design unique and modern ui websites tailored for your business",
            },
            {
                title: "Web development",
                description: "Kick start or grow your online business with amazing website to attract attention.",
              },
            {
              title: "WorkFlow tools",
              description: "Facilitate your work flow with easy to use tools and systems",
            },

            {
              title: "Mobile development",
              description: "We develop stunning and fully functional mobile applications",
            },
           
          
          ].map((feature, index) => (
            <div key={index} className="flex items-start gap-4">
              <Check className="w-6 h-6 mt-1 text-primary" />
              <div>
                <p className="text-md font-medium">{feature.title}</p>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

