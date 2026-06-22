# Guide de modification rapide

## 1. Changer le numéro WhatsApp

Fichier :

```text
src/config/company.js
```

Remplace :

```js
whatsappNumber: '237675990733'
```

Par ton numéro au format international sans `+`, sans espace.

Exemple Cameroun :

```js
whatsappNumber: '2376XXXXXXXX'
```

## 2. Changer l'adresse mail

Toujours dans :

```text
src/config/company.js
```

Modifie :

```js
email: 'contact@dubaiglobalexpress.com'
```

## 3. Ajouter une voiture

Fichier :

```text
src/data/cars.js
```

Copie un bloc voiture et change les informations.

## 4. Changer les images des voitures

Dossier :

```text
public/images/cars/
```

Tu peux mettre tes vraies images en `.webp`, `.jpg` ou `.png`.

Conseil :

- Format idéal : `.webp`
- Largeur : 900 à 1400 px
- Poids conseillé : moins de 400 Ko par image
- Nom sans espace et sans accent

Exemple correct :

```text
toyota-vitz-2012.webp
```

## 5. Modifier le texte WhatsApp

Fichier :

```text
src/pages/Cart.jsx
```

Cherche la fonction :

```js
buildWhatsAppMessage
```

Tu peux changer le texte envoyé sur WhatsApp.

## 6. Déployer sur Netlify

1. Mets le projet sur GitHub
2. Connecte GitHub à Netlify
3. Paramètres :

```text
Build command : npm run build
Publish directory : dist
```

4. Quand tu modifies les images ou les voitures, fais un nouveau push GitHub.
