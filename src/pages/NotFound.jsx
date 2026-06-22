import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="card mx-auto max-w-xl p-8 text-center">
          <p className="text-7xl font-black text-sky-500">404</p>
          <h1 className="mt-4 text-3xl font-black text-slate-950">Page introuvable</h1>
          <p className="mt-4 text-slate-600">La page demandée n’existe pas ou a été déplacée.</p>
          <Link to="/" className="btn-primary mt-6">Retour à l’accueil</Link>
        </div>
      </div>
    </section>
  );
}
