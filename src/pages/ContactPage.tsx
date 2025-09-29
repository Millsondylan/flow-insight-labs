import Navigation from "@/components/Navigation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageCircle, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ContactPage = () => {
  const navigate = useNavigate();


  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main id="contact" className="pt-20">
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;