# Portfolio Juan Rafael Calzada González

A modern, responsive professional portfolio developed with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modular Architecture**: Reusable and well-organized components
- **TypeScript**: Static typing for enhanced robustness
- **Tailwind CSS**: Modern and responsive styling
- **Dynamic Themes**: Multiple color themes (light, dark, blue, green, purple)
- **Responsive Design**: Optimized for all devices
- **Smooth Navigation**: Automatic scrolling between sections
- **Contact Form**: Functional contact interface
- **SEO Optimized**: Meta tags and semantic structure

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Main layout
│   └── page.tsx            # Main page
├── components/
│   ├── Header/
│   │   ├── Header.tsx      # Header component
│   │   ├── Navigation.tsx  # Navigation
│   │   ├── ThemeSelector.tsx # Theme selector
│   │   └── index.ts        # Exports
│   └── sections/
│       ├── HeroSection.tsx     # Hero section
│       ├── CVSection.tsx       # CV section
│       ├── AboutSection.tsx    # About section
│       ├── ProjectsSection.tsx # Projects section
│       ├── TestimonialsSection.tsx # Testimonials
│       ├── ExperienceSection.tsx   # Experience
│       ├── SkillsSection.tsx       # Skills
│       ├── ServicesSection.tsx     # Services
│       ├── ContactSection.tsx      # Contact
│       ├── Footer.tsx              # Footer
│       └── index.ts                # Exports
├── hooks/
│   ├── useTheme.ts         # Theme management hook
│   └── useActiveSection.ts # Navigation hook
├── types/
│   └── index.ts            # TypeScript type definitions
├── data/
│   └── constants.ts        # Data and constants
└── styles/
    └── globals.css         # Global styles and CSS variables
```

## 🛠️ Technologies Used

- **React 18** - UI library
- **Next.js 14** - React framework
- **TypeScript** - Static typing
- **Tailwind CSS v4** - CSS framework
- **Lucide React** - Icons
- **ESLint** - Code linter

## 🎨 Design System

### Available Themes
- **Light**: Default theme with light colors
- **Dark**: Dark theme for better night experience
- **Blue**: Theme with blue color palette
- **Green**: Theme with green color palette
- **Purple**: Theme with purple color palette

### Reusable Components
- **Buttons**: `btn-primary`, `btn-secondary`
- **Cards**: `card`
- **Inputs**: `input`
- **Badges**: `badge-primary`, `badge-secondary`
- **Social Links**: `social-link`

## 🚀 Installation and Usage

1. **Clone the repository**
   ```bash
   git clone https://github.com/rafael5678/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run in development mode**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Start production server**
   ```bash
   npm start
   ```

## 📱 Responsive Design

The portfolio is optimized for:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🎯 Features

### Navigation
- Responsive menu with mobile hamburger
- Smooth scrolling between sections
- Active section indicator
- Keyboard navigation

### Themes
- Dynamic theme switching
- Selected theme persistence
- Smooth transitions between themes

### Contact Form
- Required field validation
- Loading and success states
- Social media integration

### Projects
- Interactive cards
- Filtering by status and type
- Links to code and demo

## 🔧 Configuration

### Environment Variables
Create `.env.local` file:
```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_EMAIL=your-email@example.com
```

### Customization
1. **Personal Data**: Edit `src/data/constants.ts`
2. **Colors**: Modify CSS variables in `src/styles/globals.css`
3. **Themes**: Adjust colors in `tailwind.config.js`

## 📈 Future Improvements

- [ ] CMS integration (Strapi/Sanity)
- [ ] Personal blog
- [ ] Animations with Framer Motion
- [ ] Offline mode with PWA
- [ ] Unit tests with Jest
- [ ] Analytics and metrics
- [ ] Internationalization (i18n)

## 🤝 Contributions

Contributions are welcome. Please:

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License. See `LICENSE` for more details.

## 👨‍💻 Author

**Juan Rafael Calzada González**
- GitHub: [@rafael5678](https://github.com/rafael5678)
- LinkedIn: [Juan Rafael Calzada](https://www.linkedin.com/in/juan-rafael-calzada-65566a387)
- Email: juanrafaelcalzada1087@gmail.com

---

⭐ If you like this project, give it a star!