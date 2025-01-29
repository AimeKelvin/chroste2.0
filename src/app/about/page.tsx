import Image from "next/image";
import { Linkedin, Twitter, Globe } from "lucide-react";

const teamMembers = [
  {
    name: "Shimwa Aime Kelvin",
    role: "Founder & CEO",
    image: "/ceo.jpg",
    socials: {
      linkedin: "#",
      twitter: "#",
      website: "https://shimwa.me",
    },
  },
  {
    name: "Gishinge Elie",
    role: "Marketing Director",
    image: "/marketting.jpg",
    socials: {
      linkedin: "#",
      twitter: "#",
      website: "#",
    },
  },
  {
    name: "Kwizera Caleb",
    role: "Lead Developer",
    image: "/backend.jpeg",
    socials: {
      linkedin: "#",
      twitter: "#",
      website: "#",
    },
  },
];

export default function About() {
  return (
    <section className="py-16 px-6 md:px-12 bg-gray-50">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900">
          Our <span className="text-gray-800">Mission</span>
        </h2>
        <p className="mt-3 text-gray-600 text-sm md:text-base">
          At Apollo Studios, we craft visionary websites that fuse creativity with cutting-edge technology, delivering unparalleled digital experiences.
        </p>
      </div>

      <div className="mt-10 text-center">
        <h3 className="text-xl font-semibold text-gray-800">Our Team</h3>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden p-5">
            <div className="relative w-full h-60 md:h-72 rounded-md overflow-hidden">
              <Image src={member.image} alt={member.name} layout="fill" objectFit="cover" />
            </div>
            <div className="mt-4 text-center">
              <h4 className="text-lg font-medium text-gray-900">{member.name}</h4>
              <p className="text-sm text-gray-600">{member.role}</p>
              <div className="flex justify-center gap-4 mt-3">
                <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 text-gray-700 hover:text-gray-900" />
                </a>
                <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer">
                  <Twitter className="w-5 h-5 text-gray-700 hover:text-gray-900" />
                </a>
                <a href={member.socials.website} target="_blank" rel="noopener noreferrer">
                  <Globe className="w-5 h-5 text-gray-700 hover:text-gray-900" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
