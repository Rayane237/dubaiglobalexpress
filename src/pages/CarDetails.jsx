import { useParams, useNavigate } from "react-router-dom";
import { cars } from "../data/cars.js";
import { formatPrice, saveSelectedCar } from "../utils/cart.js";


export default function CarDetails(){


const { id } = useParams();

const navigate = useNavigate();



const car = cars.find(
(item)=> String(item.id) === String(id)
);



if(!car){

return (

<div className="min-h-screen flex items-center justify-center font-black text-2xl">

Voiture introuvable

</div>

);

}




const addCart = ()=>{

saveSelectedCar(car);

navigate("/panier");

};




return (


<section className="min-h-screen bg-gradient-to-br from-emerald-950 via-emerald-700 to-cyan-400 py-12">



<div className="container-custom">



<div className="overflow-hidden rounded-[3rem] bg-white shadow-2xl">





{/* HEADER */}

<div className="bg-gradient-to-r from-emerald-500 to-cyan-400 p-8 text-white">


<p className="font-black uppercase tracking-widest">

{car.brand}

</p>


<h1 className="mt-2 text-4xl font-black">

{car.name}

</h1>



<p className="mt-3 text-lg font-bold">

🚗 Véhicule import Dubai 🇦🇪

</p>


</div>







<div className="grid gap-8 p-6 lg:grid-cols-2 sm:p-10">






{/* PHOTOS */}

<div>



<h2 className="mb-4 text-xl font-black text-slate-900">

Photos du véhicule

</h2>




<div className="grid grid-cols-2 gap-4">


{(car.images || [car.image]).slice(0,2).map((img,index)=>(


<img

key={index}

src={img}

alt={car.name}

className="h-72 w-full rounded-3xl object-cover shadow-lg"

/>


))}



</div>



</div>







{/* DETAILS */}

<div>



<p className="text-slate-600 leading-7">

{car.description}

</p>







<div className="mt-6 grid grid-cols-2 gap-4">



<Info

label="Année"

value={car.year}

/>



<Info

label="Kilométrage"

value={car.mileage}

/>



<Info

label="Carburant"

value={car.fuel}

/>



<Info

label="Boîte"

value={car.transmission}

/>



<Info

label="Lieu"

value={car.location}

/>



<Info

label="Catégorie"

value={car.category}

/>



</div>







{/* PRIX */}


<div className="mt-6 rounded-3xl bg-gradient-to-r from-emerald-100 to-cyan-100 p-6">


<p className="text-sm font-black text-emerald-700">

PRIX TRANSPORT + DOUANE

</p>



<p className="mt-2 text-4xl font-black text-slate-950">

{formatPrice(car.price)}

</p>



<p className="text-2xl font-black text-emerald-700">

{car.priceFcfa}

</p>




<div className="mt-3 rounded-xl bg-white p-3 font-black text-orange-600">

Avance : {car.depositFcfa}

</div>



</div>







{/* OPTIONS */}

<div className="mt-6">


<h2 className="text-2xl font-black">

Équipements

</h2>


<div className="mt-3 grid gap-2">


{car.features?.map((item)=>(


<div

key={item}

className="rounded-xl bg-emerald-50 p-3 font-bold text-emerald-900"

>

✓ {item}

</div>


))}


</div>


</div>







<button

onClick={addCart}

className="mt-8 w-full rounded-2xl bg-gradient-to-r from-emerald-500 to-cyan-400 py-4 font-black text-white shadow-xl hover:scale-[1.02]"

>

Ajouter au panier

</button>





</div>






</div>





</div>



</div>


</section>


);

}







function Info({label,value}){


return (


<div className="rounded-2xl bg-slate-100 p-4">


<p className="text-xs font-black uppercase text-slate-500">

{label}

</p>


<p className="mt-1 font-black text-slate-900">

{value}

</p>


</div>


)

}