import Navbar from '@/components/sections/navbar';
import Hero from '@/components/sections/hero';
import ServicesGrid from '@/components/sections/services-grid';
import ContactForm from '@/components/sections/contact-form';
import Footer from '@/components/sections/footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <ServicesGrid />
        <ContactForm />
        <Footer />
      </main>
    </>
  );
}
