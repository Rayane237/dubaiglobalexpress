import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { company, getWhatsAppUrl, getMailUrl } from '../config/company.js';

const links = [
  { label: 'Accueil', to: '/' },
  { label: 'À propos', to: '/a-propos' },
  { label: 'Catalogue', to: '/catalogue' },
  { label: 'Panier', to: '/panier' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {

  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `rounded-full px-4 py-2 text-sm font-bold transition ${
      isActive
        ? 'bg-emerald-500 text-white shadow-lg'
        : 'text-slate-700 hover:bg-emerald-50 hover:text-emerald-700'
    }`;


  return (

    <header className="sticky top-0 z-50 border-b border-emerald-100 bg-white/85 backdrop-blur-xl">

      <div className="container-custom">


        <div className="flex min-h-20 items-center justify-between gap-4">


          {/* LOGO */}

          <Link
            to="/"
            className="flex items-center gap-3"
            onClick={() => setOpen(false)}
          >


            <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl border border-emerald-200 bg-white shadow-xl">

              <img

                src="/images/cars/logo.png"

                alt="Dubai Export"

                className="h-full w-full object-contain p-1"

              />

            </div>



            <div>

              <p className="text-base font-black leading-tight text-slate-950 sm:text-lg">

                {company.name}

              </p>


              <p className="hidden text-xs font-bold text-emerald-600 sm:block">

                Dubai Export • Afrique

              </p>


            </div>


          </Link>





          {/* MENU */}

          <nav className="hidden items-center gap-1 lg:flex">

            {links.map((item) => (

              <NavLink

                key={item.to}

                to={item.to}

                className={linkClass}

              >

                {item.label}

              </NavLink>

            ))}

          </nav>

<Link
  to="/temoignages"
   className="text-sm font-bold text-slate-600 hover:text-emerald-600"
>
  Témoignages
</Link>



          {/* CONTACT */}

          <div className="hidden items-center gap-3 lg:flex">


            <a

              href={getMailUrl()}

              className="text-sm font-bold text-slate-600 hover:text-emerald-600"

            >

              {company.email}

            </a>


            <a

              href={getWhatsAppUrl()}

              target="_blank"

              rel="noreferrer"

              className="rounded-2xl bg-emerald-500 px-5 py-3 font-black text-white shadow-lg transition hover:bg-emerald-600"

            >

              WhatsApp

            </a>


          </div>





          <button

            type="button"

            onClick={() => setOpen((value)=>!value)}

            className="rounded-2xl border border-emerald-200 bg-white px-4 py-3 text-sm font-black text-emerald-700 lg:hidden"

          >

            {open ? 'Fermer' : 'Menu'}

          </button>


        </div>





        {open && (

          <div className="border-t border-emerald-100 py-4 lg:hidden">


            <div className="grid gap-2">


              {links.map((item)=>(


                <NavLink

                  key={item.to}

                  to={item.to}

                  className={linkClass}

                  onClick={()=>setOpen(false)}

                >

                  {item.label}

                </NavLink>


              ))}



              <a

                href={getWhatsAppUrl()}

                target="_blank"

                rel="noreferrer"

                className="mt-2 rounded-2xl bg-emerald-500 px-5 py-3 text-center font-black text-white"

              >

                Contacter sur WhatsApp

              </a>


              <a

                href={getMailUrl()}

                className="rounded-2xl bg-emerald-50 px-5 py-3 text-center font-black text-emerald-700"

              >

                Envoyer un email

              </a>


            </div>


          </div>

        )}


      </div>


    </header>

  );

}

