import Image from "next/image"
import { formatearCantidad } from "../helpers"
import useQuiosco from "../hooks/useQuiosco"

export default function Producto({producto}) {

    const { nombre, id, imagen, precio } = producto

    const { handleSetProducto, handleChangeModal } = useQuiosco()

  return (
    <div className=' border p-3'>
    <Image 
    src={`/assets/img/${imagen}.jpg`} 
    alt={`Imagen Platillo ${nombre}`}
    width={400}
    height={500}
    />
    <div className=" p-5">
        <h3 className=" font-bold text-2xl">{nombre}</h3>
        <p className=" mt-5 font-balck text-4xl text-amber-500">
        {formatearCantidad(precio)}
        </p>

        <button
        type="button"
        className=" bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold"
        onClick={()=> {
            handleChangeModal()
            handleSetProducto(producto)
        }}
        >
            Agregar
        </button>
    </div>
    </div>
  )
}
