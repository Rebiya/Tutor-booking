import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import img1 from '../assets/tutor1.jpg'; // Update with your image path
export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section bg-dark-light">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                Expert Tutoring Services
              </h1>
              <p className="text-lg text-light/80 mb-8">
                Personalized tutoring for grades 1-12 in Math,Physics,Chemistry English, Amharic, and Science.
                Making learning fun and effective!
              </p>
              <div className="flex gap-4">
                <Link to="/contact" className="btn btn-primary">
                  Book a Free Trial
                </Link>
                <Link to="/services" className="btn btn-outline">
                  Learn More
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-lg bg-primary/10 flex items-center justify-center">

           
                <div className="text-primary text-lg">  
               <img
                src={img1}
                alt="Tutoring"
                className="w-full h-full object-cover rounded-lg"
              /></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-dark">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">
            Why Choose My Tutoring Services?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-dark-light p-6 rounded-lg"
              >
                <div className="text-primary text-2xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {feature.title}
                </h3>
                <p className="text-light/80">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const features = [
  {
    icon: '🎓',
    title: 'Experienced Tutor',
    description: '3 years of tutoring experience with proven results.',
  },
  {
    icon: '📚',
    title: 'Comprehensive Subjects',
    description: 'Expert in Math, English, Amharic, and Science for grades 1-12.',
  },
  {
    icon: '💡',
    title: 'Interactive Learning',
    description: 'Engaging lessons with visual aids and practical examples.',
  },
]; 