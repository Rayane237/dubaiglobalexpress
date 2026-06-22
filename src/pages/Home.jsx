import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle.jsx';
import { company, getWhatsAppUrl } from '../config/company.js';

const steps = [
  {
    title: 'Choisissez une voiture',
    text: 'Parcourez le catalogue et sélectionnez le véhicule qui correspond à votre budget.',
  },
  {
    title: 'Remplissez le formulaire',
    text: 'Ajoutez vos informations : pays, ville, téléphone, budget et port de livraison.',
  },
  {
    title: 'Confirmez sur WhatsApp',
    text: 'Pour plus de sécurité, toutes les informations sont envoyées sur WhatsApp.',
  },
  {
    title: 'Suivi export',
    text: 'Notre équipe vous accompagne dans les étapes de commande et d’expédition.',
  },
];


export default function Home() {

  return (

    <main
      className="
      relative min-h-screen overflow-hidden
      bg-cover bg-center bg-fixed
      "
      style={{
        backgroundImage: "url('/images/cars/background.jpg')"
      }}
    >


      {/* Overlay uniquement pour lisibilité */}
      <div className="absolute inset-0 bg-black/55" />


      <div className="relative z-10">


        {/* HERO */}

        <section className="py-20 sm:py-24 lg:py-28">


          <div className="container-custom">


            <div className="max-w-4xl">


              <div
                className="
                inline-flex rounded-full
                border border-white/30
                bg-black/30
                px-4 py-2
                text-sm font-bold
                text-white
                backdrop-blur
                "
              >

                Dubai Export • Livraison vers l’Afrique

              </div>



              <h1
                className="
                mt-6 text-4xl
                font-black
                tracking-tight
                text-white
                sm:text-5xl
                lg:text-7xl
                "
              >

                Importez votre véhicule depuis Dubai

              </h1>



              <p
                className="
                mt-6 max-w-2xl
                text-lg leading-9
                text-white/90
                "
              >

                {company.name} vous accompagne dans l’achat,
                l’exportation et la livraison de véhicules vers
                toute l’Afrique avec un suivi rapide et sécurisé.

              </p>



              <div className="mt-8 flex flex-col gap-3 sm:flex-row">


                <Link
                  to="/catalogue"
                  className="
                  rounded-2xl
                  bg-emerald-400
                  px-6 py-3
                  text-center
                  font-bold
                  text-black
                  shadow-xl
                  hover:bg-emerald-300
                  "
                >

                  Découvrir les véhicules

                </Link>



                <a
                  href={getWhatsAppUrl(
                    'Bonjour, je souhaite obtenir des informations sur l’importation de véhicules depuis Dubai.'
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="
                  rounded-2xl
                  border border-white/40
                  bg-black/30
                  px-6 py-3
                  text-center
                  font-bold
                  text-white
                  backdrop-blur
                  hover:bg-black/50
                  "
                >

                  Parler à un conseiller

                </a>


              </div>



              <div className="mt-10 grid gap-4 sm:grid-cols-3">

                <Stat value="500+" label="Véhicules" />

                <Stat value="24/7" label="Support" />

                <Stat value="Afrique" label="Livraison" />


              </div>


            </div>


          </div>


        </section>





        {/* ETAPES */}

        <section className="py-16 sm:py-20">


          <div className="container-custom">


            <SectionTitle

              eyebrow="Comment ça marche"

              title="Un processus simple et sécurisé"

              description="Quelques étapes suffisent pour trouver votre véhicule et finaliser votre demande."

              centered

            />



            <div
              className="
              mt-12 grid gap-5
              md:grid-cols-2
              lg:grid-cols-4
              "
            >


              {steps.map((step,index)=>(


                <div
                  key={step.title}
                  className="
                  rounded-3xl
                  border border-white/30
                  bg-black/35
                  p-6
                  shadow-xl
                  backdrop-blur
                  transition
                  hover:-translate-y-2
                  "
                >


                  <div
                    className="
                    flex h-12 w-12
                    items-center justify-center
                    rounded-2xl
                    bg-emerald-400
                    text-lg font-black
                    text-black
                    "
                  >

                    {index + 1}

                  </div>



                  <h3
                    className="
                    mt-5
                    text-xl
                    font-black
                    text-white
                    "
                  >

                    {step.title}

                  </h3>



                  <p
                    className="
                    mt-3
                    text-sm
                    leading-7
                    text-white/80
                    "
                  >

                    {step.text}

                  </p>



                </div>


              ))}


            </div>


          </div>


        </section>


      </div>


    </main>

  );

}





function Stat({value,label}) {

return (

<div
className="
rounded-3xl
border border-white/30
bg-black/35
p-5
shadow-xl
backdrop-blur
"
>

<p className="text-3xl font-black text-white">

{value}

</p>


<p className="mt-1 text-sm font-semibold text-white/80">

{label}

</p>


</div>

);

}