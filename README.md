# Nethsalee Samarawickrama - Portfolio

A modern, distinctive one-page portfolio website built with Next.js 14+, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom theme
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Space Grotesk (display) & Inter (body) via next/font/google

## 📦 Installation & Setup

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Features

- **Asymmetric Layout**: Non-templated design with intentional layout decisions
- **Dark Mode First**: Custom color palette optimized for dark backgrounds
- **Scroll Animations**: Smooth reveal animations using Framer Motion
- **Typewriter Effect**: Dynamic role cycling in the hero section
- **Responsive Design**: Fully responsive across mobile, tablet, and desktop
- **Sticky Navigation**: Active section indicator with smooth scrolling
- **Contact Form**: Client-side form with mailto integration
- **Performance Optimized**: Next.js 14 with App Router for optimal performance

## 📁 Project Structure

```
MyPort/
├── app/
│   ├── layout.tsx       # Root layout with font configuration
│   ├── page.tsx         # Main page composition
│   └── globals.css      # Global styles and Tailwind imports
├── components/
│   ├── Navigation.tsx   # Sticky navigation with scroll spy
│   ├── Hero.tsx         # Hero section with typewriter effect
│   ├── About.tsx        # About section
│   ├── Education.tsx    # Timeline-based education section
│   ├── Project.tsx      # Featured project showcase
│   ├── Skills.tsx       # Skills constellation layout
│   ├── Contact.tsx      # Contact form and details
│   └── Footer.tsx       # Footer component
├── public/              # Static assets
├── tailwind.config.ts   # Tailwind configuration with custom theme
├── tsconfig.json        # TypeScript configuration
└── next.config.ts       # Next.js configuration
```

## 🎨 Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| background | #0F172A | Main background |
| surface | #1E293B | Secondary background |
| accent | #3B82F6 | Primary accent color |
| accent-hover | #60A5FA | Hover state |
| text-primary | #F8FAFC | Primary text |
| text-secondary | #94A3B8 | Secondary text |
| border-subtle | #334155 | Borders |

## 📝 Customization

To customize the portfolio for your own use:

1. Update personal information in `components/Hero.tsx`
2. Modify the about section in `components/About.tsx`
3. Update education history in `components/Education.tsx`
4. Replace project details in `components/Project.tsx`
5. Update skills in `components/Skills.tsx`
6. Change contact information in `components/Contact.tsx`
7. Update metadata in `app/layout.tsx`

## 🌐 Deployment

Deploy easily to Vercel:

```bash
npm run build
```

Or use Vercel CLI:

```bash
vercel
```

## 📄 License

All rights reserved © 2026 Nethsalee Samarawickrama
