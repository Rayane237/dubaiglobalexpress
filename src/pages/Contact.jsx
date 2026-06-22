import SectionTitle from '../components/SectionTitle.jsx';
import { company, getMailUrl, getWhatsAppUrl } from '../config/company.js';

export default function Contact() {
  return (
    <>
      {/* HERO */}

      <section className="bg-gradient-to-br from-sky-500 via-cyan-500 to-blue-900 py-16 text-white sm:py-20">
        <div className="container-custom px-4">
          <SectionTitle
            eyebrow="Contact"
            title="Contactez Dubai Global Express"
            description="Besoin d’informations sur un véhicule, l’expédition ou la procédure de commande ? Notre équipe est disponible pour vous accompagner."
          />
        </div>
      </section>

      {/* CONTACT CARDS */}

      <section className="bg-gradient-to-b from-sky-50 to-white py-16 sm:py-20">
        <div className="container-custom px-4">

          <div className="grid gap-6 lg:grid-cols-3">

            <ContactCard
              icon="💬"
              title="WhatsApp"
              value={`+${company.whatsappNumber}`}
              href={getWhatsAppUrl()}
              button="Écrire sur WhatsApp"
            />

            <ContactCard
              icon="📧"
              title="Email"
              value={company.email}
              href={getMailUrl()}
              button="Envoyer un email"
            />

            <div className="rounded-[2rem] bg-white p-7 shadow-xl border border-sky-100">

              <div className="text-5xl">
                📍
              </div>

              <p className="mt-4 text-sm font-black uppercase tracking-[0.2em] text-sky-600">
                Adresse
              </p>

              <h2 className="mt-3 text-2xl font-black text-slate-950">
                Dubai Office
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {company.address}
              </p>

              <div className="mt-5 rounded-2xl bg-sky-50 p-4">
                <p className="text-sm font-bold text-sky-700">
                  {company.workingHours}
                </p>
              </div>

            </div>

          </div>

          {/* CONSEIL */}

          <div className="mt-12 overflow-hidden rounded-[2rem] bg-gradient-to-r from-sky-600 to-blue-700 p-8 text-white shadow-2xl">

            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">

              <div>

                <p className="text-sm font-black uppercase tracking-[0.2em] text-sky-200">
                  Conseil rapide
                </p>

                <h2 className="mt-3 text-3xl font-black">
                  Commencez par le catalogue
                </h2>

                <p className="mt-4 max-w-2xl leading-8 text-sky-100">
                  Choisissez une voiture, ajoutez-la au panier puis remplissez le formulaire.
                  Le site préparera automatiquement un message WhatsApp complet pour accélérer votre commande.
                </p>

              </div>

              <a
                href={getWhatsAppUrl(
                  'Bonjour Dubai Global Express, je souhaite discuter avec un conseiller pour une commande de voiture.'
                )}
                target="_blank"
                rel="noreferrer"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-2xl
                  bg-white
                  px-8
                  py-4
                  font-black
                  text-sky-700
                  transition
                  hover:scale-105
                "
              >
                🚗 Parler à un conseiller
              </a>

            </div>

          </div>

        </div>
      </section>
    </>
  );
}



function ContactCard({ icon, title, value, href, button }) {
  return (
    <div className="rounded-[2rem] border border-sky-100 bg-white p-7 shadow-xl transition hover:-translate-y-2">

      <div className="text-5xl">
        {icon}
      </div>

      <p className="mt-4 text-sm font-black uppercase tracking-[0.2em] text-sky-600">
        {title}
      </p>

      <h2 className="mt-3 break-words text-xl sm:text-2xl font-black text-slate-950">
        {value}
      </h2>

      <a
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel="noreferrer"
        className="
          mt-6
          flex
          w-full
          items-center
          justify-center
          rounded-2xl
          bg-sky-600
          px-5
          py-3
          font-black
          text-white
          transition
          hover:bg-sky-700
        "
      >
        {button}
      </a>

    </div>
  );
}