import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <section className="section bg-dark-light">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-primary text-center mb-8">
            Tutoring Services
          </h1>
          <p className="text-light/80 text-center max-w-2xl mx-auto mb-12">
            I offer personalized tutoring services for students in grades 1-12,
            focusing on building strong foundations and fostering a love for
            learning.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {subjects.map((subject, index) => (
              <motion.div
                key={subject.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-dark p-6 rounded-lg"
              >
                <div className="text-primary text-3xl mb-4">{subject.icon}</div>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {subject.name}
                </h3>
                <p className="text-light/80">{subject.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-dark p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Teaching Methods
              </h2>
              <ul className="space-y-4">
                {teachingMethods.map((method, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-light/80">{method}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-dark p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Learning Tools
              </h2>
              <ul className="space-y-4">
                {learningTools.map((tool, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-light/80">{tool}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        <div className="bg-dark p-8 rounded-lg max-w-3xl mx-auto">
  <h2 className="text-2xl font-semibold text-primary text-center mb-8">
    Pricing Plans
  </h2>
  <div className="grid md:grid-cols-2 gap-8">
    {pricingPlans.map((plan, index) => (
      <motion.div
        key={plan.name}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="border border-primary/20 p-6 rounded-lg flex flex-col justify-between"
      >
        <div>
          <h3 className="text-xl font-semibold text-primary mb-2">
            {plan.name}
          </h3>
          <p className="text-3xl font-bold text-light mb-4">
            {plan.price}
            <span className="text-light/60 text-lg">/hour</span>
          </p>
          <ul className="space-y-2 mb-6">
            {plan.features.map((feature, i) => (
              <li key={i} className="flex items-center text-light/80">
                <span className="text-primary mr-2">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <Link
          to="/contact"
          className="btn btn-primary w-full text-center hover:bg-primary/90 transition-colors mt-auto"
        >
          Book Now
        </Link>
      </motion.div>
    ))}
  </div>
</div>

        </motion.div>
      </div>
    </section>
  );
}

const subjects = [
  {
    icon: '🔢',
    name: 'Mathematics',
    description:
      'Building strong foundations in arithmetic, algebra, and problem-solving skills.',
  },
  {
    icon: '📝',
    name: 'English',
    description:
      'Improving reading comprehension, writing skills, and grammar fundamentals.',
  },
  {
    icon: '📚',
    name: 'Amharic',
    description:
      'Developing language proficiency in reading, writing, and communication.',
  },
  {
    icon: '🔬',
    name: 'Science',
    description:
      'Exploring scientific concepts through hands-on experiments and interactive learning.',
  },
];

const teachingMethods = [
  'One-on-one personalized attention',
  'Interactive and engaging lessons',
  'Visual aids and practical examples',
  'Regular progress assessments',
  'Homework assistance and review',
  'Test preparation strategies',
];

const learningTools = [
  'Digital whiteboard and presentations',
  'Educational apps and games',
  'Practice worksheets and exercises',
  'Online resources and materials',
  'Video lessons and tutorials',
  'Progress tracking tools',
];

const pricingPlans = [
  {
    name: 'Standard',
    price: 'ETB 500',
    features: [
      'One-on-one tutoring',
      'Basic study materials',
      'Email support',
      'Monthly progress report',
    ],
  },
  {
    name: 'Premium',
    price: 'ETB 700',
    features: [
      'One-on-one tutoring',
      'Comprehensive study materials',
      'Priority support',
      'Weekly progress reports',
      'Test preparation',
      'Parent-teacher meetings',
    ],
  },
]; 