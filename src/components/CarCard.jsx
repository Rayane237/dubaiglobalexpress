import { useNavigate } from 'react-router-dom';
import { saveSelectedCar, formatPrice } from '../utils/cart.js';

export default function CarCard({ car }) {

  const navigate = useNavigate();

  const addCart = () => {
    saveSelectedCar(car);
    navigate('/panier');
  };


  return (

    <div className="overflow-hidden rounded-[2rem] bg-white shadow-xl border border-emerald-100">


      <div className="grid grid-cols-2 gap-1 h-56">

        {car.images?.map((img,index)=>(

          <img
            key={index}
            src={img}
            alt={car.name}
            className="h-full w-full object-cover"
          />

        ))}


      </div>



      <div className="p-5">


        <h3 className="text-xl font-black text-slate-950">
          {car.name}
        </h3>


        <p className="mt-2 text-sm text-slate-500">
          {car.year} • {car.mileage}
        </p>



        <div className="mt-4 rounded-2xl bg-emerald-50 p-3">


          <p className="font-black text-emerald-700">
            {formatPrice(car.price)}
          </p>


          {car.priceFcfa && (

            <p className="font-bold text-slate-700">
              {car.priceFcfa}
            </p>

          )}


          {car.depositFcfa && (

            <p className="mt-1 text-sm font-bold text-orange-600">
              Avance : {car.depositFcfa}
            </p>

          )}


        </div>



        <button

          onClick={addCart}

          className="mt-5 w-full rounded-2xl bg-emerald-500 py-3 font-black text-white hover:bg-emerald-600"

        >

          Ajouter au panier

        </button>


      </div>


    </div>

  );

}