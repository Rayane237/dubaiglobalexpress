# Dubai Global Express - Site React + TailwindCSS

Projet front-end complet pour un site de commande de voitures de Dubai vers l'Afrique.

## Pages incluses

- Accueil
- À propos
- Catalogue
- Panier / formulaire de commande
- Contact

## Fonctionnalités

- Design moderne et responsive
- Catalogue de plus de 20 voitures
- Prix entre 500 $ et 3000 $
- Images locales dans `public/images/cars/`
- Bouton d'ajout au panier
- Panier avec prix de la voiture sélectionnée
- Formulaire client complet
- Redirection WhatsApp avec toutes les informations du formulaire
- Configuration facile du numéro WhatsApp, email et adresse
- Prêt pour Netlify

## Lancer le projet en local

```bash
npm install
npm run dev
```

## Build pour Netlify

```bash
npm run build
```

Paramètres Netlify :

```text
Build command : npm run build
Publish directory : dist
```

## Modifier les informations de l'entreprise

Ouvre :

```text
src/config/company.js
```

Tu peux modifier :

- Nom de l'entreprise
- Numéro WhatsApp
- Email
- Adresse
- Pays couverts

## Modifier les voitures

Ouvre :

```text
src/data/cars.js
```

Chaque voiture a cette structure :

```js
{
  id: 'toyota-vitz-2012',
  name: 'Toyota Vitz 2012',
  brand: 'Toyota',
  price: 850,
  image: '/images/cars/toyota-vitz-2012.svg',
  category: 'Citadine',
  fuel: 'Essence',
  transmission: 'Automatique',
  mileage: '86 000 km',
  year: 2012,
  location: 'Dubai Auto Market',
  features: ['Climatisation', 'Bluetooth', 'Caméra de recul']
}
```

## Modifier les images

Les images sont ici :

```text
public/images/cars/
```

Pour remplacer une image, garde le même nom de fichier ou modifie le chemin dans `src/data/cars.js`.

Exemple :

```text
public/images/cars/toyota-vitz-2012.svg
```

Tu peux remplacer par :

```text
public/images/cars/toyota-vitz-2012.webp
```

Puis dans `src/data/cars.js` :

```js
image: '/images/cars/toyota-vitz-2012.webp'
```

## Important

Ce projet est uniquement front-end. Il ne prélève pas d'argent directement.
Le client remplit le formulaire, puis WhatsApp s'ouvre avec le message déjà rédigé.
Le client doit appuyer sur envoyer dans WhatsApp.
