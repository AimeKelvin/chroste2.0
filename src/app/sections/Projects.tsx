import { Badge } from "@/components/ui/badge";
import Link from 'next/link'

const projects = [
  {
    title: "Auracity",
    description: "A social media app created for students of SOS Technical Highschool.",
    image: "/auracity.png",
    slug: "auracity" // Replace with actual image URL
  },
  {
    title: "Ben Real Estate",
    description: "A real estate listing platform for Ben Real Estate Kigali.",
    image: "/ben.png",
    slug: "ben_estate"
  },
  {
    title: "Arserve Multiservice",
    description: "A stunning event website for Arserve Multiservice and catering business based in Kigali.",
    image: "/Arserve.png",
    slug: "arserve"
  },
  {
    title: "Chroste",
    description: "A digital marketting agency.",
    image: "/chorste.png",
    slug: "chroste"
  },
  {
    title: "Virtual Tailor",
    description: "A 3D Tshirt customizer app for an immersive customization experience.",
    image: "/virtual.png",
    slug: "tailor" // Replace with actual image URL
  },
  {
    title: "Umurava EdTech",
    description: "Skills Challenge Platform for Umurava to facilitate challenges and hackathon accessibility.",
    image: "/umurava.png",
    slug: "umurava"
  },
];

export default function Projects() {
  return (
    <div className="w-full py-20 px-4" id="Projects">
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
            <Link href={`/projects/${project.slug}`}>
            <div
                  className="bg-muted rounded-md aspect-video mb-2"
                  style={{ backgroundImage: `url(${project.image})`, backgroundSize: "cover", backgroundPosition: "center" }}
                ></div>
            </Link>
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
