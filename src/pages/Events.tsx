import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const events = [
  {
    id: 'tryouts-2024',
    title: 'UST Academy Tryouts',
    image: 'https://storage.googleapis.com/msgsndr/AKZP7FbfcOPsLo93Ayuw/media/67eaaf232c105a1a9b5461e7.jpeg',
    path: 'https://ustsoccer.demosphere-secure.com/_registration_login?to=https%3A%2F%2Fustsoccer.demosphere-secure.com%2F_registration%23registrant',
    external: true
  },
  {
    id: 'winter-skill-clinic',
    title: 'Winter Skill Clinic',
    image: 'https://storage.googleapis.com/msgsndr/AKZP7FbfcOPsLo93Ayuw/media/67521955fc9c33b3d4f43995.png',
    path: '/winter-skill-clinic'
  },
  {
    id: 'winter-intramural',
    title: 'Winter Intramural Training',
    image: 'https://storage.googleapis.com/msgsndr/AKZP7FbfcOPsLo93Ayuw/media/67521955fc9c3327f8f43994.png',
    path: '/winter-intramural-training'
  },
  {
    id: 'residential-camp',
    title: '2025 UST Summer Residential Camp',
    image: 'https://storage.googleapis.com/msgsndr/AKZP7FbfcOPsLo93Ayuw/media/6797d61807196a3c586b03a9.png',
    path: '/camps/residential-camp-2025'
  },
  {
    id: 'intense-summer',
    title: '2025 Intense Summer Camp Series',
    image: 'https://storage.googleapis.com/msgsndr/AKZP7FbfcOPsLo93Ayuw/media/6797e87abebf1264ad8556fd.png',
    path: '/camps/intense-summer-2025'
  },
  {
    id: 'fall-intramural-program',
    title: 'UST FC Fall Intramural Program',
    image: 'https://storage.googleapis.com/msgsndr/AKZP7FbfcOPsLo93Ayuw/media/6894823febb67c02968da335.png',
    path: '/programs/spring-intramural-program'
  }
];

export default function Events() {
  return (
    <>
      <Helmet>
        <title>Events - UST Soccer Academy</title>
        <meta name="description" content="Join our upcoming soccer events, tournaments, camps, and clinics at UST Soccer Academy." />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Upcoming Events</h1>
          <p className="text-xl text-gray-600">
            Join us for exciting soccer events and activities
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
            >
              {event.external ? (
                <a
                  href={event.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="relative aspect-[3/4] w-full">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-contain hover:opacity-90 transition-opacity"
                    />
                  </div>
                  <div className="p-6 mt-auto">
                    <h2 className="text-xl font-bold mb-4">{event.title}</h2>
                    <div className="w-full bg-[#8ED204] text-black px-6 py-3 rounded-lg hover:bg-[#8ED204]/90 text-center">
                      Register Now
                    </div>
                  </div>
                </a>
              ) : (
                <Link to={event.path} className="block">
                  <div className="relative aspect-[3/4] w-full">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="p-6 mt-auto">
                    <h2 className="text-xl font-bold mb-4">{event.title}</h2>
                    <div className="w-full bg-[#8ED204] text-black px-6 py-3 rounded-lg hover:bg-[#8ED204]/90 text-center">
                      Learn More & Register
                    </div>
                  </div>
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
