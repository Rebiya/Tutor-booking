



# RebiyaMusema Tutoring Website

**🔗 [Click here to view the live website](https://eduglow.netlify.app/)**


A professional tutoring website built with React, Vite, and Tailwind CSS. The website features a modern design with a gold, black, and white color scheme, and includes sections for services, testimonials, and contact information.

## Features

- Responsive design that works on all devices
- Modern UI with animations using Framer Motion
- Contact form with email functionality using EmailJS
- Dark theme with gold accents
- MVC folder structure
- SEO optimized

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd tutor-booking
````

2. Install dependencies:

```bash
npm install
```

3. Set up EmailJS:

   * Create an account at [EmailJS](https://www.emailjs.com/)
   * Create an email service and template
   * Replace the following in `src/pages/Contact.jsx`:

     * `YOUR_SERVICE_ID`
     * `YOUR_TEMPLATE_ID`
     * `YOUR_PUBLIC_KEY`

4. Start the development server:

```bash
npm run dev
```

5. Build for production:

```bash
npm run build
```

## Project Structure

```
src/
├── components/     # Reusable components
├── pages/         # Page components
├── layouts/       # Layout components
├── assets/        # Static assets
├── styles/        # CSS styles
├── utils/         # Utility functions
└── context/       # React context
```

## Customization

1. Replace placeholder images in the components with your own images
2. Update the content in each component to match your information
3. Modify the color scheme in `tailwind.config.js` if needed
4. Update the contact information in the Contact and Footer components

## Technologies Used

* React
* Vite
* Tailwind CSS
* Framer Motion
* EmailJS
* React Router
* Heroicons

## License

This project is licensed under the MIT License.

## Contact

For any questions or concerns, please contact:

* Email: [rebum.19@gmail.com](mailto:rebum.19@gmail.com)
* Phone: +251993044432

```
