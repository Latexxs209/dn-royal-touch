import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "../components/ui/button";
import { Car, Scissors, Quote, Instagram, Facebook } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

export default function HomePage() {
  const formRef = useRef();
  const reservationRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_c2b7dyr", "template_geveiqa", formRef.current, "sfklO3TcNb-OaVFe4")
      .then(() => {
        toast.success("Réservation envoyée avec succès !");
        e.target.reset();
      })
      .catch(() => {
        toast.error("Erreur lors de l'envoi.");
      });
  };

  const scrollToReservation = () => {
    reservationRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="text-sm sm:text-base">
      <Toaster position="bottom-center" reverseOrder={false} />
      {/* Toutes les sections ici comme dans le code précédent */}
    </div>
  );
}
