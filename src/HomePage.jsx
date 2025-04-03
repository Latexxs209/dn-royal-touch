import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
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

      {/* Hero Section */}
      <div
        className="min-h-screen bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1618170843565-94d4fd5d1e43?auto=format&fit=crop&w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4 sm:px-6 py-24 sm:py-32">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 sm:mb-6">D&N Royal Touch</h1>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 max-w-md sm:max-w-xl">
            Luxe et soin, à domicile. Car detailing premium & coiffure directement chez vous.
          </p>
          <Button
            onClick={scrollToReservation}
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 text-base sm:text-lg rounded-full"
          >
            Prendre rendez-vous
          </Button>
        </div>
      </div>

      {/* À propos */}
      <section className="bg-gray-50 py-16 px-4 sm:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">À propos de nous</h2>
        <div className="max-w-3xl mx-auto text-gray-700 text-base sm:text-lg leading-relaxed">
          <p className="mb-4">
            D&N Royal Touch, c’est l’idée de deux passionnés — Danny & Naeem — qui ont voulu réunir deux services haut de gamme à domicile : le detailing automobile et la coiffure.
          </p>
          <p>
            Notre objectif est simple : offrir une expérience de luxe accessible sans bouger de chez soi. Nous venons à vous avec le sourire, le matériel pro, et le souci du détail.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-16 px-4 sm:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10">Nos Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition text-center">
            <Car className="mx-auto mb-4" size={40} />
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">Car Detailing</h3>
            <p className="text-gray-700 text-sm sm:text-base">
              Nettoyage intérieur & extérieur, traitement des surfaces, brillance premium. On vient à vous avec du matos pro.
            </p>
          </div>
          <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition text-center">
            <Scissors className="mx-auto mb-4" size={40} />
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">Coiffure à domicile</h3>
            <p className="text-gray-700 text-sm sm:text-base">
              Coupe homme, barbe, soins capillaires — dans le confort de votre salon.
            </p>
          </div>
        </div>
      </section>

      {/* Tarifs */}
      <section className="bg-gray-100 py-16 px-4 sm:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10">Nos Tarifs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h3 className="text-xl font-semibold mb-2">Car Detailing</h3>
            <p className="text-gray-700 mb-4">À partir de 60€</p>
            <Button onClick={scrollToReservation}>Réserver</Button>
          </div>
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h3 className="text-xl font-semibold mb-2">Coiffure à domicile</h3>
            <p className="text-gray-700 mb-4">À partir de 30€</p>
            <Button onClick={scrollToReservation}>Réserver</Button>
          </div>
          <div className="bg-yellow-100 p-6 rounded-xl shadow border-2 border-yellow-500 text-center">
            <h3 className="text-xl font-semibold mb-2">Pack Royal (les deux)</h3>
            <p className="text-gray-800 mb-4">À partir de 80€</p>
            <Button onClick={scrollToReservation}>Réserver</Button>
          </div>
        </div>
      </section>

      {/* Réservation rapide */}
      <section ref={reservationRef} className="bg-white py-16 px-4 sm:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10">Réservation rapide</h2>
        <form ref={formRef} onSubmit={sendEmail} className="max-w-xl mx-auto grid gap-4 text-left">
          <input name="name" required placeholder="Nom complet" className="p-3 border rounded-md" />
          <input name="phone" required placeholder="Téléphone" className="p-3 border rounded-md" />
          <input type="email" name="email" required placeholder="Email" className="p-3 border rounded-md" />
          <select name="service" required className="p-3 border rounded-md">
            <option value="">Choisir un service</option>
            <option value="car">Car Detailing</option>
            <option value="hair">Coiffure à domicile</option>
            <option value="both">Les deux (Car Detailing + Coiffure)</option>
          </select>
          <input type="date" name="date" required className="p-3 border rounded-md" />
          <input type="time" name="time" required className="p-3 border rounded-md" />
          <Button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-3 rounded-full">
            Réserver maintenant
          </Button>
        </form>
      </section>

      {/* Avis clients */}
      <section className="bg-gray-50 py-16 px-4 sm:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10">Ce que disent nos clients</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
          {[
            {
              name: "Sarah L.",
              comment: "Service au top ! Ma voiture brille comme jamais et la coupe était nickel.",
            },
            {
              name: "Karim D.",
              comment: "Ponctuels, pros, et super sympas. Le pack complet vaut largement le coup.",
            },
            {
              name: "Julien R.",
              comment: "Concept génial ! Plus besoin de me déplacer, ils gèrent tout à la maison.",
            },
          ].map((avis, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow">
              <Quote className="mb-2 text-yellow-500" />
              <p className="text-gray-700 mb-2 italic">"{avis.comment}"</p>
              <p className="mt-2 font-semibold">— {avis.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
