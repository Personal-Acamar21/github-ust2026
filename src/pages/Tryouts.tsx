import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, Users, Star } from 'lucide-react';
import Button from '../components/Button';

const registrationUrl = "https://ustsoccer.demosphere-secure.com/_registration_login?to=https%3A%2F%2Fustsoccer.demosphere-secure.com%2F_registration%23registrant";

const tryoutInfo = {
  dates: [
    { date: "Season 2025/2026", time: "Please see the attached flyer" }
  ],
  location: "William T. Rodger Middle School 
            97 Old Dock Rd, Kings Park NY, 11754",
  requirements: [
    "Soccer cleats",
    "Shin guards",
    "Water bottle",
    "Athletic wear",
    "Recent photo"
  ],
  features: [
    "Professional coaching evaluation",
    "Technical skills assessment",
    "Tactical understanding",
    "Physical capabilities test",
    "Team play observation"
  ]
};

export default function Tryouts() {
  return (
    <>
      <Helmet>
        <title>Tryouts - UST Soccer Academy</title>
        <meta name="description" content="Join UST Soccer Academy's elite programs. Register for our upcoming tryouts and showcase your skills." />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold mb-4">UST Academy Tryouts</h1>
              <p className="text-lg text-gray-600">
                Join one of Long Island's premier youth soccer academies. Our tryouts are designed to evaluate players' technical skills, tactical understanding, and potential for development.
              </p>

              <div className="bg-white rounded-lg shadow-lg p-6 space-y-4">
                <h2 className="text-xl font-bold">Upcoming Tryout Sessions</h2>
                {tryoutInfo.dates.map((session, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-[#8ED204]" />
                    <div>
                      <p className="font-semibold">{session.date}</p>
                      <p className="text-gray-600">{session.time}</p>
                    </div>
                  </div>
                ))}
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-[#8ED204]" />
                  <p>{tryoutInfo.location}</p>
                </div>
              </div>

              <div className="bg-black text-white rounded-lg p-6">
                <h2 className="text-xl font-bold mb-4">What to Bring</h2>
                <ul className="space-y-2">
                  {tryoutInfo.requirements.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <Star className="h-4 w-4 text-[#8ED204] mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <a 
                href={registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative aspect-[3/4] w-full mb-6"
              >
                <img
                  src="https://storage.googleapis.com/msgsndr/AKZP7FbfcOPsLo93Ayuw/media/67eaaf232c105a1a9b5461e7.jpeg"
                  alt="UST Soccer Academy Tryouts"
                  className="w-full h-full object-contain bg-gray-100 rounded-lg hover:opacity-90 transition-opacity"
                />
              </a>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-xl font-bold mb-4">Evaluation Process</h2>
                <ul className="space-y-3">
                  {tryoutInfo.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-[#8ED204] rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <Button
                  href={registrationUrl}
                  className="w-full bg-[#8ED204] text-black px-8 py-4 rounded-lg text-lg font-bold hover:bg-[#8ED204]/90 transition duration-300"
                >
                  Register for Tryouts
                </Button>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 mt-12">
            <h2 className="text-2xl font-bold mb-4">After the Tryout</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-bold text-lg mb-2">Evaluation</h3>
                <p className="text-gray-600">
                  Players will be evaluated by our professional coaching staff on technical ability, tactical awareness, and overall potential.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-bold text-lg mb-2">Notification</h3>
                <p className="text-gray-600">
                  Results will be communicated within 48 hours of the tryout session via email.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-bold text-lg mb-2">Next Steps</h3>
                <p className="text-gray-600">
                  Selected players will receive information about team placement and registration procedures.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
