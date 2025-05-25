import React from 'react';
import { motion } from 'framer-motion';

export default function Testimonials() {
  return (
    <section className="section bg-dark-light">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-primary text-center mb-8">
            Testimonials
          </h1>
          <p className="text-light/80 text-center max-w-2xl mx-auto mb-12">
            Hear what parents and students have to say about their learning
            experience with me.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-dark p-6 rounded-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xl">
                    {testimonial.name[0]}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-light font-semibold">
                      {testimonial.name}
                    </h3>
                    <p className="text-light/60 text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p className="text-light/80 mb-4">{testimonial.content}</p>
                <p className="text-light/80 ">{testimonial.contact}</p>
                <div className="flex text-primary">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 bg-dark p-8 rounded-lg">
            <h2 className="text-2xl font-semibold text-primary text-center mb-8">
              Success Stories
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {successStories.map((story, index) => (
                <motion.div
                  key={story.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border border-primary/20 p-6 rounded-lg"
                >
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {story.title}
                  </h3>
                  <p className="text-light/80 mb-4">{story.description}</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                      {story.student[0]}
                    </div>
                    <div className="ml-3">
                      <p className="text-light font-medium">{story.student}</p>
                      <p className="text-light/60 text-sm">{story.grade}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    name: 'Zebiba',
    role: 'Parent',
    content:
    'Rebiya has been an amazing tutor for my two daughters. Her patience and ability to explain complex concepts in simple terms have made a huge difference in my children\'s academic performance.',
    contact:"+251911000539"
  },
  {
    name: 'Hayat',
    role: 'Parent',
    content:
      'The personalized attention and structured approach to learning have helped my son improve significantly in mathematics and english. Rebiya\'s teaching methods are effective and engaging.',
    contact:"+251920098504"
  },
  {
    name: 'Hadra',
    role: 'Parent',
    content:
      'We\'ve seen remarkable progress in our child\'s Amharic skills since starting tutoring sessions with Rebiya. Her dedication and expertise are truly commendable.',
    contact:"+97335387135"
  },
  {
    name: 'Tesnim and Hanifa',
    role: 'Student',
    content:
      'I love how Rebiya makes learning fun! She explains things in a way that\'s easy to understand, and I\'ve improved a lot in my studies.',
    contact:"+251911000539"
  },
  {
    name: 'Afifa and Adnan',
    role: 'Student',
    content:
      'The tutoring sessions are always interesting, and I feel more confident in my abilities. Rebiya is a great teacher!',
    contact:"+251920098504"
  },
  {
    name: 'Munir',
    role: 'Student',
    content:
      'I used to struggle with Amharic and science, but now I enjoy it! Rebiya\'s teaching style makes everything clear and easy to remember.',
    contact:"+97335387135"
  },
];

const successStories = [
  {
    title: 'From Struggling to Excelling in Math',
    description:
      'A student who was struggling with basic arithmetic concepts improved their grades.',
    student: 'Hanifa and Tesnim',
    grade: 'Grade 7 and 9',
  },
  {
    title: 'English Language Breakthrough',
    description:
      'A student who had difficulty with English grammar and mathematics achieved top marks in their final exams.',
    student: 'Adnan and Afifa',
    grade: 'Grade 4 and 8',
  },
]; 