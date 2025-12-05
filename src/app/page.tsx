import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Posts from './components/Posts';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { jsonLdSchema, organizationSchema, breadcrumbSchema } from '../config/schema';

export default function Home() {
  return (
    <>
      {/* JSON-LD Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      <main className="min-h-screen">
        <Header />
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Posts />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
