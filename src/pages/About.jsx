import React from 'react';
import { motion } from 'framer-motion';
import me from '../assets/me.jpg'; // Update with your image path

export default function About() {
  return (
    <section className="section bg-dark-light">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-primary text-center mb-8">
            About Me
          </h1>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div className="relative">
              <div className="aspect-square rounded-lg  flex items-center justify-center">
                <div className="text-primary text-lg">
                  <img
                    src={me}
                    alt="Rebiya Musema"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Rebiya Musema
              </h2>
              <p className="text-light/80 mb-4">
                I am a passionate tutor with 3 years of experience in teaching
                students from grades 1 to 8. Currently pursuing my degree in
                Information Systems at Addis Ababa University, I combine academic
                knowledge with practical teaching experience.
              </p>
              <p className="text-light/80">
                As an Evangadi Full Stack Graduate and an AWS course student, I
                bring a modern perspective to education, making learning engaging
                and relevant for today's students.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-dark p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-primary mb-4">
                Education
              </h3>
              <ul className="space-y-4">
                <li>
                  <h4 className="text-light font-medium">
                    Information Systems (3rd Year)
                  </h4>
                  <p className="text-light/80">Addis Ababa University</p>
                </li>
                <li>
                  <h4 className="text-light font-medium">
                    Full Stack Development
                  </h4>
                  <p className="text-light/80">Evangadi</p>
                </li>
                <li>
                  <h4 className="text-light font-medium">AWS Certification</h4>
                  <p className="text-light/80">In Progress</p>
                </li>
              </ul>
            </div>

            <div className="bg-dark p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-primary mb-4">
                Teaching Experience
              </h3>
              <ul className="space-y-4">
                <li>
                  <h4 className="text-light font-medium">Private Tutor</h4>
                  <p className="text-light/80">3 years of experience</p>
                </li>
                <li>
                  <h4 className="text-light font-medium">Subjects</h4>
                  <p className="text-light/80">
                    Math, English, Amharic, Science
                  </p>
                </li>
                <li>
                  <h4 className="text-light font-medium">Grade Levels</h4>
                  <p className="text-light/80">Grades 1-12</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-dark p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-primary mb-4">
              Teaching Philosophy
            </h3>
            <p className="text-light/80 mb-4">
              I believe in creating a supportive and engaging learning environment
              where students feel comfortable asking questions and making
              mistakes. My teaching approach combines:
            </p>
            <ul className="list-disc list-inside space-y-2 text-light/80">
              <li>Interactive and hands-on learning experiences</li>
              <li>Personalized attention to each student's needs</li>
              <li>Clear explanations using simple language</li>
              <li>Visual aids and practical examples</li>
              <li>Regular progress tracking and feedback</li>
            </ul>
          </div>

          {/* Why Choose Us Section */}
          <div className="mt-12 bg-dark p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-primary mb-4">
              Why Choose Me
            </h3>
            <ul className="list-disc list-inside space-y-2 text-light/80">
              <li>Experienced tutor with a strong academic background</li>
              <li>Flexible scheduling to fit your family's routine</li>
              <li>Multilingual support in English, Amharic</li>
              <li>Interactive learning using modern technology tools</li>
              <li>Affordable, high-quality instruction tailored to each student</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
