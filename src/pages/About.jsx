import SectionTitle from '../components/SectionTitle.jsx';
import { company } from '../config/company.js';


const values = [
  {
    title:'Transparence',
    icon:'🔎',
    text:'Prix, informations du véhicule et détails de commande sont affichés clairement avant confirmation.'
  },
  {
    title:'Simplicité',
    icon:'⚡',
    text:'Sélectionnez votre voiture, remplissez vos informations et continuez directement avec WhatsApp.'
  },
  {
    title:'Accompagnement',
    icon:'🤝',
    text:'Notre équipe vous guide pendant la validation et l’expédition du véhicule.'
  }
];



export default function About(){

return (

<>

<section className="
relative
overflow-hidden
bg-gradient-to-br
from-emerald-700
via-teal-800
to-emerald-950
py-16
sm:py-24
text-white
">


<div className="container-custom px-4">


<div className="
grid
gap-10
lg:grid-cols-2
items-center
">


<div>


<p className="
uppercase
tracking-[0.25em]
text-sm
font-black
text-emerald-200
">

À propos

</p>



<h1 className="
mt-4
text-4xl
sm:text-5xl
lg:text-7xl
font-black
leading-tight
">

{company.name}

</h1>




<p className="
mt-6
text-lg
leading-8
text-white/90
">

Votre plateforme premium pour commander des véhicules depuis Dubai vers l’Afrique.

</p>




<div className="
mt-8
flex
flex-wrap
gap-3
">


<span className="
rounded-full
bg-emerald-400/30
px-5
py-3
font-black
">

🚗 Import Auto

</span>



<span className="
rounded-full
bg-emerald-400/30
px-5
py-3
font-black
">

🌍 Afrique

</span>


</div>


</div>






<div
  className="
  flex
  items-center
  justify-center
  min-h-[380px]
  "
>

<img
  src="/images/cars/logo.png"
  alt="Dubai Export"
  className="
  w-full
  h-[360px]
  object-contain
  object-center
  "
/>

</div>


</div>


</div>


</section>






<section className="
py-16
sm:py-20
bg-emerald-950
">


<div className="
container-custom
px-4
">



<div className="
grid
gap-8
lg:grid-cols-2
items-center
">





<div className="text-white">


<SectionTitle

eyebrow="Notre mission"

title="Importer une voiture devient simple et rapide"

description="Nous présentons les véhicules disponibles, facilitons votre demande et vous accompagnons jusqu'à la livraison."

/>


</div>









<div className="
rounded-[2rem]
bg-white
p-6
shadow-2xl
">


<div className="
grid
grid-cols-1
sm:grid-cols-2
gap-4
">


<Info title="Base" value="Dubai 🇦🇪"/>

<Info title="Destination" value="Afrique 🌍"/>

<Info title="Service" value="Import Auto"/>

<Info title="Contact" value="WhatsApp"/>


</div>


</div>



</div>








<div className="
mt-14
grid
gap-6
md:grid-cols-3
">


{values.map(item=>(


<div

key={item.title}

className="
rounded-[2rem]
bg-white
p-7
shadow-xl
hover:-translate-y-2
transition
"


>


<div className="text-5xl">

{item.icon}

</div>


<h3 className="
mt-5
text-2xl
font-black
text-emerald-900
">

{item.title}

</h3>


<p className="
mt-3
leading-7
text-slate-600
">

{item.text}

</p>


</div>


))}


</div>



</div>


</section>










<section className="
bg-gradient-to-b
from-emerald-50
to-white
py-16
sm:py-20
">


<div className="
container-custom
px-4
">


<SectionTitle

eyebrow="Pays cibles"

title="Une solution pensée pour l’Afrique"

description="Choisissez votre véhicule et recevez un accompagnement personnalisé."

centered

/>





<div className="
mt-10
flex
flex-wrap
justify-center
gap-3
">


{company.countries.map(country=>(


<span

key={country}

className="
rounded-full
border
border-emerald-300
bg-emerald-100
px-5
py-3
font-black
text-emerald-900
"

>

{country}

</span>


))}


</div>


</div>


</section>








{/* LICENCES */}

<section className="
bg-white
py-20
">


<div className="
container-custom
px-4
">


<SectionTitle

eyebrow="Documents officiels"

title="Nos licences et autorisations"

description="Dubai Export travaille avec des documents officiels pour garantir un service fiable."

centered

/>





<div className="
mt-12
grid
gap-8
md:grid-cols-2
">





<div className="
rounded-[2.5rem]
bg-white
p-6
shadow-2xl
border
border-emerald-100
overflow-hidden
">


<img

src="/images/cars/licence1.png"

alt="Licence Dubai Export"

className="
w-full
h-[650px]
object-contain
rounded-[2rem]
bg-slate-50
"

/>


</div>







<div className="
rounded-[2.5rem]
bg-white
p-6
shadow-2xl
border
border-emerald-100
overflow-hidden
">


<img

src="/images/cars/licence2.png"

alt="Licence Dubai Export"

className="
w-full
h-[650px]
object-contain
rounded-[2rem]
bg-slate-50
"

/>


</div>





</div>



</div>


</section>





</>

);

}






function Info({title,value}){


return (

<div className="
rounded-2xl
bg-emerald-100
p-5
">


<p className="
text-xs
font-black
uppercase
tracking-widest
text-emerald-700
">

{title}

</p>


<p className="
mt-2
text-xl
font-black
text-emerald-950
">

{value}

</p>


</div>

);


}