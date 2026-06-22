import SectionTitle from '../components/SectionTitle.jsx';
import { testimonials } from '../data/testimonials.js';

export default function Testimonials() {
  return (
    <>
      <section className="bg-gradient-to-br from-sky-500 via-cyan-500 to-blue-900 py-16 text-white sm:py-20">
        <div className="container-custom">
          <SectionTitle
            eyebrow="Témoignages"
            title="Nos clients témoignent"
            description="Des clients satisfaits à travers l'Afrique."
          />
        </div>
      </section>

      <section className="bg-sky-50 py-16">
        <div className="container-custom">

          <div className="mb-10 text-center">
            <h2 className="text-4xl font-black text-sky-700">
              ⭐ Plus de 500 véhicules livrés
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            {testimonials.map((item) => (
              <div
                key={item.id}
                className="rounded-3xl border border-sky-100 bg-white p-6 shadow-xl transition hover:-translate-y-2"
              >
                <div className="flex items-center gap-4">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-16 w-16 rounded-full object-cover"
                  />

                  <div>
                    <h3 className="font-black text-slate-900">
                      {item.name}
                    </h3>

                    <p className="text-sm text-slate-500">
                      {item.city}
                    </p>
                  </div>

                </div>

                <p className="mt-4 text-sm font-bold text-sky-600">
                  {item.phone}
                </p>

                <p className="mt-2 font-bold">
                  🚗 {item.vehicle}
                </p>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  "{item.message}"
                </p>

                <div className="mt-4 text-yellow-500 text-lg">
                  ⭐⭐⭐⭐⭐
                </div>
              </div>
            ))}

          </div>

        </div>
      </section>
    </>
  );
}