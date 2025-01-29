import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Services() {
  const services = [
    { title: "Website Design", description: "Modern, user-friendly, and custom-tailored designs." },
    { title: "Web Development", description: "Fast, scalable, and high-performing web solutions." },
    { title: "E-Commerce Solutions", description: "Custom online stores to scale your business." },
    { title: "Mobile App Development", description: "High-performance apps for iOS and Android." },
    { title: "SEO & Performance Optimization", description: "Improve rankings and website speed." },
    { title: "Workflow Automation", description: "Custom tools to streamline your business operations." },
    { title: "UI/UX Consulting", description: "Enhancing usability with intuitive user experiences." },
    { title: "Custom Software Solutions", description: "Tailored software to meet unique business needs." },
  ];

  return (
    <section className="w-full py-20 bg-background mt-10" id="Services">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center">
          <Badge className="mb-4">Services</Badge>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
            What We Offer
          </h2>
          <p className="text-md max-w-xl mx-auto text-muted-foreground leading-relaxed mt-2">
            Get top-tier digital solutions designed for growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <div key={index} className="flex items-start gap-4">
              <Check className="w-6 h-6 mt-1 text-primary" />
              <div>
                <p className="text-lg font-medium">{service.title}</p>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
