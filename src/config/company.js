export const company = {
  name: 'Dubai Global Express',
  shortName: 'Dubai Export',
  tagline: 'Commande sécurisée de voitures de Dubai vers l’Afrique',
  whatsappNumber: '971562236640', // Remplace par ton numéro WhatsApp au format international sans +
  email: 'dubaiglobalexpress@gmail.com',
  address: 'Dubai Auto Market, Ras Al Khor, Dubai, UAE',
  countries: ['Cameroun', 'Côte d’Ivoire', 'Sénégal', 'Gabon', 'Congo-Brazzaville','Congo-Kinshasa', 'Mali', 'Bénin'],
  workingHours: 'Lundi - Samedi : 08h00 - 18h00',
};

export const getWhatsAppUrl = (message = '') => {
  const encodedMessage = encodeURIComponent(message || `Bonjour ${company.name}, je souhaite avoir plus d’informations.`);
  return `https://wa.me/${company.whatsappNumber}?text=${encodedMessage}`;
};

export const getMailUrl = () => `mailto:${company.email}`;
