import {
  ArrowRight,
  Shield,
  Zap,
  Users,
  Trophy,
  CheckCircle,
  Star,
} from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Shield className="text-[#E50914]" size={40} />,
      title: "Secure & Reliable",
      description:
        "Industry-leading security practices and 99.9% uptime guarantee",
    },
    {
      icon: <Zap className="text-[#E50914]" size={40} />,
      title: "Fast Delivery",
      description: "Agile methodology ensures rapid development and deployment",
    },
    {
      icon: <Users className="text-[#E50914]" size={40} />,
      title: "Expert Team",
      description: "Certified professionals with years of industry experience",
    },
    {
      icon: <Trophy className="text-[#E50914]" size={40} />,
      title: "Proven Results",
      description: "Track record of successful projects and satisfied clients",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-black mb-4">
            Why Choose <span className="text-[#E50914]">CoreSec</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We stand out from the competition with our commitment to excellence
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-50 rounded-2xl mb-4">
                {item.icon}
              </div>
              <h3 className="text-black mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
