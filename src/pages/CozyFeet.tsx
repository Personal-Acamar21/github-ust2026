import React from 'react';
import { Users, Star, Shield } from 'lucide-react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: <Users className="h-8 w-8 text-[#8ED204]" />,
    title: "Age-Appropriate Training",
    description: "Specially designed programs for children ages 2-7"
  },
  {
    icon: <Star className="h-8 w-8 text-[#8ED204]" />,
    title: "Fun Learning Environment",
    description: "Games and activities that make learning soccer enjoyable"
  },
  {
    icon: <Shield className="h-8 w-8 text-[#8ED204]" />,
    title: "Safe Development",
    description: "Focus on proper technique and gradual skill building"
  }
];

export default function CozyFeet() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Cozy Feet Intramural Program</h1>
      
      {/* Hero Image */}
      <div className="relative h-[500px] mb-12 rounded-xl overflow-hidden">
        <img 
          src="https://storage.googleapis.com/msgsndr/AKZP7FbfcOPsLo93Ayuw/media/67981b1e4f0aeb178d5e554a.jpeg"
          alt="Kids playing soccer"
          className="w-full h-full object-contain bg-gray-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
          <div className="absolute bottom-0 left-0 p-8">
            <h2 className="text-3xl font-bold text-white mb-2">Start Their Journey Early</h2>
            <p className="text-[#8ED204] text-lg">Ages 2-7 | Building Future Stars</p>
          </div>
        </div>
      </div>

      {/* Current Program Alert */}
      <div className="bg-[#8ED204]/10 border-l-4 border-[#8ED204] p-4 mb-12 rounded-r-lg">
        <div className="flex">
          <div className="flex-shrink-0">
            <Star className="h-5 w-5 text-[#8ED204]" />
          </div>
          <div className="ml-3">
            <h3 className="text-lg font-medium text-gray-900">Current Program: UST FC Spring Intramural Program</h3>
            <div className="mt-2 text-gray-700">
              <p>Registration is now open for our Spring Intramural Program for boys and girls born 2021-2016.</p>
              <p className="mt-1">Sessions run April 11 - May 30 at Christ Lutheran Church.</p>
              <Link 
                to="/programs/spring-intramural-program" 
                className="mt-3 inline-block text-[#8ED204] hover:text-[#8ED204]/80 font-semibold"
              >
                View Program Details →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {features.map((feature) => (
          <div key={feature.title} className="bg-white rounded-lg shadow-lg p-6">
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Program Details */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Program Details</h2>
          <div className="prose max-w-none">
            <p className="mb-4">
              Our Cozy Feet program is designed to introduce young children to the beautiful game of soccer
              in a fun, safe, and nurturing environment. Through age-appropriate activities and games,
              children develop basic motor skills, coordination, and a love for the sport.
            </p>
            <ul className="list-none pl-0 mb-6 space-y-2">
              {[
                "Professional coaches specialized in early childhood development",
                "Small group sizes for personalized attention",
                "Indoor and outdoor facilities",
                "Seasonal programs and flexible schedules",
                "Parent involvement opportunities"
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-[#8ED204] rounded-full mr-2"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                to="/programs/spring-intramural-program"
                className="bg-[#8ED204] text-black px-8 py-3 rounded-lg font-semibold hover:bg-[#8ED204]/90 transition duration-300"
              >
                Spring Intramural Program
              </Button>
              <Button
                to="/contact"
                className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-black/80 transition duration-300"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Training Schedule</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-[#8ED204]">Spring 2025 Session</h3>
              <p>April 11 - May 30</p>
              <p>Ages 2021-2019: 5:00-5:45PM</p>
              <p>Ages 2018-2016: 5:00-6:00PM</p>
            </div>
            <div>
              <h3 className="font-semibold text-[#8ED204]">Location</h3>
              <p>Christ Lutheran Church</p>
              <p>189 Burr Rd, East Northport, NY</p>
            </div>
            <div>
              <h3 className="font-semibold text-[#8ED204]">Program Fee</h3>
              <p>$175 per player</p>
              <p className="text-sm text-gray-600">Includes training shirt</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="bg-black text-white rounded-lg p-8">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Parent Testimonial</h3>
          <p className="text-lg italic mb-4">
            "The Cozy Feet program has been amazing for my child's development. Not only have their soccer
            skills improved, but their confidence and social skills have grown tremendously!"
          </p>
          <p className="text-[#8ED204]">- Sarah M., Parent</p>
        </div>
      </div>
    </div>
  );
}
