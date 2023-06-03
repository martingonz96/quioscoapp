import Image from "next/image"
import { formatearCantidad } from "../helpers"
import axios from "axios"
import { toast } from "react-toastify"



function Orden({orden}) {

  const {id, fecha, nombre, pedido} = orden

  const completarOrden = async ()=> {
    try {
       await axios.post(`/api/ordenes/${id}`)
       toast.success('Orden Lista')
    } catch (error) {
        toast.error('Hubo un error')
    }
  }

  return (
    <div className=" border p-10 space-y-5">
    <h3 className=" text-2xl font-bold">Orden: {orden.id}</h3>
    <p className=" text-lg  font-bold">Cliente: {orden.nombre}</p>
    <div>
        {pedido.map(plato=>(
            <div className=" py-3 flex border-b last-of-type:border-0 items-center"
            key={plato.id}
            >
                <div className=" w-32">
                <Image 
                width={400}
                height={300}
                src={`/assets/img/${plato.imagen}.jpg`}
                alt={`Imagen de plato ${plato.nombre}`}
                />
                </div>
                <div className=" p-5 space-y-2">
                    <h3 className=" text-xl text-amber-500 font-bold">{plato.nombre}</h3>
                    <p className=" text-lg font-bold">Cantidad:{plato.cantidad}</p>
                </div>
            </div>
        ))}
    </div>
    <div className="md: flex md: items-center md:justify-between my-10">
           <p className=" mt-5 font-black text-4xl text-amber-500">
            Total a pagar: {formatearCantidad(orden.total)}
           </p>

           <button
           className=" bg-indigo-600 hover:bg-indigo-800 text-white uppercase mt-5 md:mt-0 py-3 px-10 font-bold rounded-lg"
           type="button"
           onClick={completarOrden}
           >
            Completar Orden
           </button>
    </div>
    </div>
  )
}

export default Orden