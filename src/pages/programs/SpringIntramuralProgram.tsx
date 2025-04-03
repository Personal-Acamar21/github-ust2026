import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, Users, DollarSign, ArrowLeft, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';

export default function SpringIntramuralProgram() {
  return (
    <>
      <Helmet>
        <title>UST FC Spring Intramural Program - UST Soccer Academy</title>
        <meta name="description" content="Join our Spring Intramural Program for boys and girls born 2021-2016" />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-wrap gap-4 mb-8">
          <Link 
            to="/events"
            className="inline-flex items-center text-[#8ED204] hover:text-[#8ED204]/80 group"
          >
            <ArrowLeft className="h-5 w-5 mr-2 transition-transform group-hover:-translate-x-1" />
            Back to Events
          </Link>
          <Link 
            to="/cozy-feet"
            className="inline-flex items-center text-[#8ED204] hover:text-[#8ED204]/80 group"
          >
            <ArrowLeft className="h-5 w-5 mr-2 transition-transform group-hover:-translate-x-1" />
            Cozy Feet Program
          </Link>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src="https://storage.googleapis.com/msgsndr/AKZP7FbfcOPsLo93Ayuw/media/67bfa5a6981fdc5e14a6ec7a.png"
              alt="UST FC Spring Intramural Program"
              className="w-full h-auto"
            />

            <div className="p-8">
              <h1 className="text-3xl font-bold mb-6">UST FC Spring Intramural Program</h1>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-[#8ED204] mr-3" />
                    <span>April 11 - May 30</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-[#8ED204] mr-3" />
                    <div>
                      <p>2021-2019: 5:00-5:45PM</p>
                      <p>2018-2016: 5:00-6:00PM</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-[#8ED204] mr-3" />
                    <span>Christ Lutheran Church, 189 Burr Rd, East Northport, NY</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-[#8ED204] mr-3" />
                    <span>Ages: 2021-2016</span>
                  </div>
                  <div className="flex items-center">
                    <DollarSign className="h-5 w-5 text-[#8ED204] mr-3" />
                    <span>$175</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h2 className="text-xl font-bold mb-4">About This Program</h2>
                <p className="text-gray-700 mb-4">
                  The UST FC Spring Intramural Program is part of our Cozy Feet initiative, designed specifically for our youngest players. This program provides a fun and engaging introduction to soccer fundamentals in a supportive environment.
                </p>
                <p className="text-gray-700">
                  Players will develop basic motor skills, coordination, and teamwork through age-appropriate activities and games led by our experienced coaching staff.
                </p>
                <div className="mt-4">
                  <Link 
                    to="/cozy-feet" 
                    className="text-[#8ED204] hover:text-[#8ED204]/80 font-semibold"
                  >
                    Learn more about our Cozy Feet Program →
                  </Link>
                </div>
              </div>

              <div className="mt-6">
                <h2 className="text-xl font-bold mb-2">Program Features</h2>
                <ul className="space-y-2">
                  {[
                    "Age-appropriate training",
                    "Fun learning environment",
                    "Basic skill development",
                    "Introduction to soccer fundamentals"
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