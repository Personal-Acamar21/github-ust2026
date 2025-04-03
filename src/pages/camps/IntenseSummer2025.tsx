import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, Users, DollarSign, ArrowLeft, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';

export default function IntenseSummer2025() {
  return (
    <>
      <Helmet>
        <title>2025 UST Intense Summer Camp Series - UST Soccer Academy</title>
        <meta name="description" content="Join our intensive summer training program designed to take your game to the next level." />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <Link 
          to="/events"
          className="inline-flex items-center text-[#8ED204] hover:text-[#8ED204]/80 mb-8 group"
        >
          <ArrowLeft className="h-5 w-5 mr-2 transition-transform group-hover:-translate-x-1" />
          Back to Events
        </Link>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src="https://storage.googleapis.com/msgsndr/AKZP7FbfcOPsLo93Ayuw/media/6797e87abebf1264ad8556fd.png"
              alt="2025 UST Intense Summer Camp Series"
              className="w-full h-auto"
            />

            <div className="p-8">
              <h1 className="text-3xl font-bold mb-6">2025 UST Intense Summer Camp Series</h1>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-[#8ED204] mr-3" />
                    <div className="space-y-1">
                      <p>Camp 1: June 30 - July 3</p>
                      <p>Camp 2: July 28 - July 31</p>
                      <p>Camp 3: August 4 - August 7</p>
                      <p>Camp 4: August 25 - August 28</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-[#8ED204] mr-3" />
                    <span>9am - 12pm</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-[#8ED204] mr-3" />
                    <span>Burr Winkle Park, Harvest Ln, Commack NY 11725</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-[#8ED204] mr-3" />
                    <span>Ages: 2017-2008</span>
                  </div>
                  <div className="flex items-center">
                    <DollarSign className="h-5 w-5 text-[#8ED204] mr-3" />
                    <span>$195 per camp</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h2 className="text-xl font-bold mb-4">About This Program</h2>
                <p className="text-gray-700 mb-4">
                  An intensive summer training program designed to take your game to the next level. Professional coaching staff, advanced training methods, and comprehensive player development.
                </p>
                <ul className="space-y-2">
                  {[
                    "Professional coaching staff",
                    "Technical training focus",
                    "Tactical development",
                    "Physical conditioning",
                    "Small-sided games",
                    "Individual player evaluations"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-[#8ED204] rounded-full mr-2"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 space-y-4">
                <h2 className="text-xl font-bold">Contact Information</h2>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-[#8ED204] mr-3" />
                  <a href="mailto:INFO@USTSOCCER.COM" className="hover:text-[#8ED204]">INFO@USTSOCCER.COM</a>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-[#8ED204] mr-3" />
                  <a href="tel:631-506-6557" className="hover:text-[#8ED204]">TEL: 631-506-6557</a>
                </div>
              </div>

              <div className="mt-8">
                <Button
                  href="https://ustsoccer.demosphere-secure.com/_registration"
                  className="w-full bg-[#8ED204] text-black px-6 py-3 rounded-lg text-center hover:bg-[#8ED204]/90"
                >
                  Register Now
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}