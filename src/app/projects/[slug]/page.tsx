import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const projects = [
  {
    title: "Auracity",
    description: "A social media app created for students of SOS Technical Highschool.",
    image: "/auracity.png",
    url: "https://auracity.space",
    slug: "auracity",
    tools: ["Next.js", "Prisma", "Clerk", "PostgreSQL"],
    inspiration: "A need for a dedicated student network",
    budget: "$1,500",
  },
  {
    title: "Ben Real Estate",
    description: "A real estate listing platform for Ben Real Estate Kigali.",
    image: "/ben.png",
    url: "https://benkigaliproperties.com",
    slug: "ben_estate",
    tools: ["React", "Firebase", "Tailwind CSS"],
    inspiration: "Modern property listing UX",
    budget: "$2,000",
  },
  {
    title: "Jersey Ecommerce",
    description: "An online eCommerce created to sell jerseys online.",
    image: "/jersey.png",
    url: "https://jerseystore.com",
    slug: "ecommerce",
    tools: ["Shopify", "React", "Stripe"],
    inspiration: "Premium sportswear shopping experience",
    budget: "$3,000",
  },
];

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return notFound(); // 404 if project not found

  return (
    <div className="w-full min-h-screen flex items-center justify-center px-4 py-10">
      <div className="container mx-auto max-w-5xl shadow-xl rounded-xl p-6 md:p-10 flex flex-col lg:flex-row gap-10 items-center border border-gray-800">
        
        {/* Left Side - Details */}
        <div className="flex-1 space-y-6">
          <Badge className="text-sm bg-white text-black px-3 py-1.5 rounded-md">
            {project.title}
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold">{project.title}</h1>
          <p className="text-gray-400 leading-relaxed">{project.description}</p>

          {/* Extra Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <h3 className="text-lg font-semibold text-white">Tools Used</h3>
              <ul className="text-gray-400 text-sm list-disc list-inside">
                {project.tools.map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Budget</h3>
              <p className="text-gray-400 text-sm">{project.budget}</p>
            </div>
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-lg font-semibold text-white">Inspiration</h3>
              <p className="text-gray-400 text-sm">{project.inspiration}</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href={project.url} target="_blank" rel="noopener noreferrer">
              <Button className="bg-white text-black hover:bg-gray-200 px-5 py-2.5 rounded-lg text-sm w-full sm:w-auto">
                Visit Site
              </Button>
            </Link>
            <Link href="/projects">
              <Button variant="outline" className="border-gray-500 text-gray-400 hover:text-white hover:border-white px-5 py-2.5 rounded-lg text-sm w-full sm:w-auto">
                Back to Projects
              </Button>
            </Link>
          </div>
        </div>

        {/* Right Side - Iframe Preview */}
        <div className="flex-1 flex justify-center w-full">
          <div className="w-full max-w-[700px] aspect-[16/9] rounded-lg shadow-md border border-gray-700 overflow-hidden">
            <iframe
              src={project.url}
              className="w-full h-full border-none grayscale"
              allowFullScreen
            />
          </div>
        </div>

      </div>
    </div>
  );
}
