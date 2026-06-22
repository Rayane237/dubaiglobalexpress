import { Link } from 'react-router-dom';
import { company, getWhatsAppUrl, getMailUrl } from '../config/company.js';

export default function Footer() {
  return (
    <footer className="border-t border-sky-200 bg-sky-50">

      <div className="container-custom py-10">

        <div className="grid gap-8 lg:grid-cols-[1.2fr_.8fr_.8fr]">


          {/* LOGO + PRESENTATION */}
          <div>

            <div className="flex items-center gap-3">

              <img
                src="/images/cars/logo.png"
                alt="Dubai Export"
                className="h-14 w-auto object-contain"
              />


              <div>

                <p className="text-lg font-black text-sky-700">
                  {company.name}
                </p>

                <p className="text-sm font-semibold text-sky-500">
                  {company.tagline}
                </p>

              </div>

            </div>


            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600">

              Nous aidons les clients africains à commander des voitures depuis Dubai 
              avec une expérience simple : sélection du véhicule, formulaire sécurisé,
              puis confirmation sur WhatsApp avec un conseiller.

            </p>

          </div>




          {/* NAVIGATION */}
          <div>

            <h3 className="font-black text-sky-700">
              Navigation
            </h3>


            <div className="mt-4 grid gap-3 text-sm font-semibold text-slate-600">

              <Link to="/" className="hover:text-sky-600">
                Accueil
              </Link>

              <Link to="/a-propos" className="hover:text-sky-600">
                À propos
              </Link>

              <Link to="/catalogue" className="hover:text-sky-600">
                Catalogue
              </Link>

              <Link to="/panier" className="hover:text-sky-600">
                Panier
              </Link>

              <Link to="/contact" className="hover:text-sky-600">
                Contact
              </Link>

            </div>

          </div>





          {/* CONTACT */}
          <div>

            <h3 className="font-black text-sky-700">
              Contact
            </h3>


            <div className="mt-4 grid gap-3 text-sm font-semibold text-slate-600">


              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                className="hover:text-sky-600"
              >
                WhatsApp : +{company.whatsappNumber}
              </a>


              <a
                href={getMailUrl()}
                className="hover:text-sky-600"
              >
                {company.email}
              </a>


              <span>
                {company.address}
              </span>


            </div>

          </div>


        </div>


        <div className="mt-10 border-t border-sky-200 pt-5 text-center text-sm font-semibold text-sky-700">

          Dubai Export © 2026 🚗

        </div>


      </div>

    </footer>
  );
}