import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-dark-light border-t border-primary/20">
      <div className="container py-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="text-primary font-bold text-2xl">
              EduGlow
            </Link>
            <p className="text-light/80 mt-4">
              Making learning fun and effective for students in grades 1-12.
            </p>
          </div>

          <div>
            <h3 className="text-primary font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-light/80 hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-light/80 hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-light/80 hover:text-primary">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-light/80 hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-primary font-semibold mb-4">Subjects</h3>
            <ul className="space-y-2">
              <li className="text-light/80">Mathematics</li>
              <li className="text-light/80">English</li>
              <li className="text-light/80">Amharic</li>
              <li className="text-light/80">Science</li>
            </ul>
          </div>

          <div>
            <h3 className="text-primary font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="text-light/80">Email: EduGlowR.gmail.com</li>
              <li className="text-light/80">Phone: +251 902 471 446</li>
              <li className="text-light/80">Location: Addis Ababa, Ethiopia</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary/20 mt-8 pt-8 text-center">
          <p className="text-light/60">
            © {new Date().getFullYear()} EduGlow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 