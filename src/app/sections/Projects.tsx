import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Auracity",
    description: "A social media app created for students of SOS Technical Highschool.",
    image: "/auracity.png", // Replace with actual image URL
  },
  {
    title: "Ben Real Estate",
    description: "A real estate listing platform for Ben Real Estate Kigali.",
    image: "/ben.png",
  },
  {
    title: "Arserve Multiservice",
    description: "A stunning event website for Arserve Multiservice and catering business based in Kigali.",
    image: "/Arserve.png",
  },
  {
    title: "Jersey Ecommerce",
    description: "An online eCommerce created to sell jerseys online.",
    image: "/jersey.png",
  },
  {
    title: "HomeScout",
    description: "Real Estate listing mobile application for Android and iOS.",
    image: "/HomeScout",
  },
  {
    title: "Umurava EdTech",
    description: "Skills Challenge Platform for Umurava to facilitate challenges and hackathon accessibility.",
    image: "/umurava.png",
  },
];

export default function Projects() {
  return (
    <div className="w-full py-20 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <div className="flex gap-4 flex-col items-center">
            <Badge>Projects</Badge>
            <div className="flex gap-2 flex-col text-center">
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-center">
                Our Work!
              </h2>
              <p className="text-lg max-w-xl lg:max-w-lg text-center leading-relaxed tracking-tight text-muted-foreground">
                Get noticed with impactful websites
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="flex flex-col gap-2">
                <div
                  className="bg-muted rounded-md aspect-video mb-2"
                  style={{ backgroundImage: `url(${project.image})`, backgroundSize: "cover", backgroundPosition: "center" }}
                ></div>
                <h3 className="text-xl tracking-tight">{project.title}</h3>
                <p className="text-muted-foreground text-base">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
