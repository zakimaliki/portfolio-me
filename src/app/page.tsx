import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Posts from './components/Posts';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Posts />
      <Contact />
      <Footer />
    </main>
  );
}
