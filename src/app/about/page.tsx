import Image from "next/image";

const teamMembers = [
  {
    name: "Shimwa Aime Kelvin",
    role: "Founder & CEO",
    image: "/ceo.jpg",
  },
  {
    name: "Gishinge Elie",
    role: "Marketting Director",
    image: "/markettinge.jpg",
  },
  {
    name: "Kwizera Caleb",
    role: "Lead Developer",
    image: "/backend.jpeg",
  },
];

export default function About() {
  return (
    <section className="py-16 px-6 md:px-12">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900">Our <span className="text-orange-500">Mission</span></h2>
        <p className="mt-3 text-gray-600 text-sm md:text-base">
          At Apollo Studios, we craft visionary websites that fuse creativity with cutting-edge technology, delivering unparalleled digital experiences.
        </p>
      </div>

      <div className="mt-10 text-center">
        <h3 className="text-xl font-semibold text-gray-800">Our <span className="text-orange-500">Team</span></h3>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden p-4">
            <div className="relative w-full h-48 md:h-56 rounded-md overflow-hidden">
              <Image src={member.image} alt={member.name} layout="fill" objectFit="cover" />
            </div>
            <div className="mt-4 text-center">
              <h4 className="text-lg font-medium text-gray-900">{member.name}</h4>
              <p className="text-sm text-gray-600">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
