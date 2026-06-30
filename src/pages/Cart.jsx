import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle.jsx';
import { company } from '../config/company.js';
import { clearSelectedCar, formatPrice, getSelectedCar } from '../utils/cart.js';


const defaultForm = {
  fullName: '',
  phone: '',
  email: '',
  country: '',
  city: '',
  paymentMode: '',
  note: '',
};



function formatFcfa(price) {
  return new Intl.NumberFormat('fr-FR').format(price * 600) + ' FCFA';
}



export default function Cart() {


const [car,setCar] = useState(null);
const [form,setForm] = useState(defaultForm);



useEffect(()=>{

const saved = getSelectedCar();

if(saved){

setCar({
...saved,
image:
saved.images?.[0] ||
saved.image ||
"/images/cars/logo.png"
});

}

},[]);





const updateField=(event)=>{

const {name,value}=event.target;

setForm(current=>({
...current,
[name]:value
}));

};






const removeCar=()=>{

clearSelectedCar();

setCar(null);

};






const buildWhatsAppMessage=()=>{

if(!car) return '';

return `Bonjour ${company.name}, je souhaite continuer ma commande.


--- VOITURE ---

Voiture :
${car.name}

Marque :
${car.brand}

Année :
${car.year}

Prix USD :
${formatPrice(car.price)}

Prix FCFA :
${car.priceFcfa || formatFcfa(car.price)}


Avance :
$${car.deposit || '500'}


Kilométrage :
${car.mileage}


Boîte :
${car.transmission}


Carburant :
${car.fuel}



--- CLIENT ---


Nom :
${form.fullName}


Téléphone :
${form.phone}


Email :
${form.email}


Votre pays :
${form.country}


Ville :
${form.city}


Vous payez :
${form.paymentMode}


Message :
${form.note || 'Aucun'}


Merci de confirmer la disponibilité.`;

};






const handleSubmit=(e)=>{

e.preventDefault();


const message = buildWhatsAppMessage();


window.open(
`https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(message)}`,
'_blank'
);


};








return (

<>


<section className="
bg-gradient-to-br 
from-sky-600 
to-blue-800 
py-12
text-white
">


<div className="container-custom px-4">


<SectionTitle

eyebrow="Panier"

title="Finalisez votre commande"

description="Votre véhicule sélectionné"

/>


</div>


</section>








<section className="
bg-slate-950
py-10
">


<div className="container-custom px-4">



{!car ? (


<div className="
rounded-3xl
bg-white/10
p-8
text-center
text-blue-100
">


<h2 className="text-3xl font-black">
Panier vide
</h2>



<Link

to="/catalogue"

className="
mt-5
inline-flex
rounded-xl
black-sky-400
px-6
py-3
font-black
"

>

Voir catalogue

</Link>


</div>



) : (




<div className="
grid
gap-6
lg:grid-cols-2
">






<aside className="
overflow-hidden
rounded-3xl
bg-white/10
backdrop-blur-xl
">



<img

src={
car.images?.[0] ||
car.image ||
"/images/cars/logo.png"
}

alt={car.name}

className="
h-64
w-full
object-cover
sm:h-80
"

/>





<div className="p-5 sm:p-8">



<p className="
font-black
text-red-300
">

Véhicule sélectionné

</p>




<h2 className="
mt-3
text-2xl
font-black
text-red-300  
">

{car.name}

</h2>





<div className="mt-5 grid gap-4">



<div className="rounded-2xl bg-white/10 p-4">

<p className="text-sky-300 text-xs font-black">
PRIX USD
</p>

<p className="text-white text-xl font-black">
{formatPrice(car.price)}
</p>

</div>





<div className="rounded-2xl bg-white/10 p-4">

<p className="text-sky-300 text-xs font-black">
PRIX FCFA
</p>

<p className="text-white text-xl font-black">
{car.priceFcfa || formatFcfa(car.price)}
</p>

</div>



</div>





<div className="
mt-5
grid
grid-cols-2
gap-3
">


<Info label="Année" value={car.year}/>

<Info label="Km" value={car.mileage}/>

<Info label="Boîte" value={car.transmission}/>

<Info label="Carburant" value={car.fuel}/>


</div>





<button

onClick={removeCar}

className="
mt-6
w-full
rounded-xl
bg-red-500
py-3
font-black
text-white
"

>

Retirer

</button>



</div>



</aside>









<form

onSubmit={handleSubmit}

className="
rounded-3xl
bg-white/10
p-5
backdrop-blur-xl
"

>




<div className="
grid
gap-4
sm:grid-cols-2
">



{

[
['fullName','Votre Nom'],
['phone','Votre numéro de Téléphone'],
['email','Votre Email'],
['country','Votre pays'],
['city','Votre Ville'],
['paymentMode','Vous payez l’avance ou la totalité']

].map(([name,label])=>(


<div key={name}>


<label className="text-white font-bold">

{label}

</label>



<input

name={name}

value={form[name]}

onChange={updateField}

className="
mt-2
w-full
rounded-xl
p-3
"

/>


</div>


))

}



</div>


<button

className="
mt-6
w-full
rounded-xl
bg-green-500
py-4
font-black
text-white
shadow-lg
hover:bg-green-600
transition
"

>

Cliquez ici pour Continuer sur WhatsApp et terminer votre commande en sécuritée

</button>


</form>






</div>


)}



</div>


</section>


</>


);

}







function Info({label,value}){


return (

<div className="
rounded-xl
bg-white/10
p-3
">


<p className="
text-xs
font-black
text-sky-300
">

{label}

</p>


<p className="
font-black
text-white
">

{value}

</p>


</div>


);


}