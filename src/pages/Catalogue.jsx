import { useMemo, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle.jsx';
import CarCard from '../components/CarCard.jsx';
import { cars } from '../data/cars.js';
import { formatPrice, saveSelectedCar } from '../utils/cart.js';


const categories = [
  'Toutes',
  ...Array.from(new Set(cars.map((car) => car.category)))
];


const brands = [
  'Toutes',
  ...Array.from(new Set(cars.map((car) => car.brand)))
];



export default function Catalogue() {


const [searchParams] = useSearchParams();
const navigate = useNavigate();


const [query,setQuery] = useState('');
const [category,setCategory] = useState('Toutes');
const [brand,setBrand] = useState('Toutes');
const [maxPrice,setMaxPrice] = useState('15000');



const highlightedCar = cars.find(
(car)=>car.id===searchParams.get('car')
);



const filteredCars = useMemo(()=>{

return cars.filter((car)=>{


const text =
`${car.name} ${car.brand} ${car.category}`
.toLowerCase();


return (

text.includes(query.toLowerCase()) &&

(category==="Toutes" || car.category===category) &&

(brand==="Toutes" || car.brand===brand) &&

car.price <= Number(maxPrice)

);


});


},[query,category,brand,maxPrice]);





function addHighlighted(){

if(!highlightedCar)return;


if(window.confirm(`Ajouter ${highlightedCar.name} ?`)){

saveSelectedCar(highlightedCar);

navigate('/panier');

}

}




return (

<>


<section className="
bg-gradient-to-br 
from-sky-600 
via-sky-500 
to-blue-700 
py-10 sm:py-16
text-white
">

<div className="container-custom px-4">

<SectionTitle

eyebrow="Catalogue"

title="Véhicules disponibles"

description="Choisissez votre voiture Dubai Export"

/>

</div>

</section>





{highlightedCar && (

<section className="bg-sky-50 py-8">

<div className="container-custom px-4">


<div className="
grid 
gap-5 
overflow-hidden
rounded-3xl
bg-white
shadow-xl
lg:grid-cols-2
">


<img

src={highlightedCar.image}

className="
h-64
w-full
object-cover
sm:h-80
"

alt="car"/>



<div className="p-5 sm:p-8">


<p className="font-black text-sky-600">
Véhicule sélectionné
</p>


<h2 className="
mt-3
text-2xl
sm:text-4xl
font-black
">

{highlightedCar.name}

</h2>


<p className="mt-4 text-slate-600">

{highlightedCar.description}

</p>



<div className="
mt-5
grid
grid-cols-1
sm:grid-cols-2
gap-3
">


<Mini 
label="Prix"
value={`$${highlightedCar.price}`}
/>


<Mini 
label="Km"
value={highlightedCar.mileage}
/>


<Mini
label="Boîte"
value={highlightedCar.transmission}
/>


<Mini
label="Lieu"
value={highlightedCar.location}
/>


</div>




<button

onClick={addHighlighted}

className="
mt-6
w-full
rounded-2xl
bg-sky-500
py-3
font-black
text-white
hover:bg-sky-700
"

>

Ajouter au panier

</button>



</div>

</div>


</div>


</section>

)}






<section className="
bg-gradient-to-br 
from-blue-800 
to-sky-500 
py-10
">


<div className="container-custom px-4">



<div className="
rounded-3xl
bg-white/20
p-4
backdrop-blur-xl
">


<div className="
grid
gap-3
grid-cols-1
md:grid-cols-2
xl:grid-cols-4
">


<input

className="
rounded-xl
px-4
py-3
"

placeholder="Rechercher..."

value={query}

onChange={(e)=>setQuery(e.target.value)}

/>




<select

className="rounded-xl px-4 py-3"

value={category}

onChange={(e)=>setCategory(e.target.value)}

>

{categories.map(x=>

<option key={x}>{x}</option>

)}

</select>




<select

className="rounded-xl px-4 py-3"

value={brand}

onChange={(e)=>setBrand(e.target.value)}

>

{brands.map(x=>

<option key={x}>{x}</option>

)}

</select>




<select

className="rounded-xl px-4 py-3"

value={maxPrice}

onChange={(e)=>setMaxPrice(e.target.value)}

>


<option value="1000">
Max $1000
</option>


<option value="5000">
Max $5000
</option>


<option value="10000">
Max $10000
</option>


<option value="15000">
Max $15000
</option>


</select>


</div>


</div>






<div className="
mt-6
flex
flex-col
gap-3
sm:flex-row
sm:justify-between
text-white
">


</div>






<div className="
mt-8
grid
gap-5
grid-cols-1
sm:grid-cols-2
xl:grid-cols-3
">


{filteredCars.map(car=>(


<div key={car.id}>


<CarCard car={car}/>



<button

onClick={()=>navigate(`/voiture/${car.id}`)}

className="
mt-3
w-full
rounded-2xl
bg-slate-950
py-3
font-black
text-white
"

>

Voir détails

</button>


</div>


))}


</div>




</div>

</section>


</>

);

}






function Mini({label,value}){


return (

<div className="
rounded-2xl
bg-sky-50
p-4
">

<p className="
text-xs
font-black
uppercase
text-sky-600
">

{label}

</p>


<p className="
mt-1
font-black
text-slate-900
">

{value}

</p>


</div>

);


}