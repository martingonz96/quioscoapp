import Image from "next/image"
import useQuiosco from "../hooks/useQuiosco"
import { formatearCantidad } from "../helpers"
import { useState, useEffect } from "react"

export default function ModalProducto() {

    const [cantidad, setCantidad] = useState(1)

    const [edicion, setEdicion] = useState(false)

    const { producto, handleChangeModal, handleAgregarPedido, pedido } = useQuiosco()


      
    ///Comprobar si el Modal actual esta en el pedido

    useEffect(()=>{

        if(pedido.some(pedidoState => pedidoState.id === producto.id)) {
            const productoEdicion = pedido.find((pedidoState) => pedidoState.id === producto.id)
            setEdicion(true)
            setCantidad(productoEdicion.cantidad)
        }

    },[producto, pedido])

    

    return (
        <div className='md:flex gap-10'>
            <div className='md:w-1/3'>
                <Image
                    width={300}
                    height={400}
                    alt={'Imagen Producto'}
                    src={`/assets/img/${producto.imagen}.jpg`}
                />
            </div>
            <div className='md:w-2/3'>
                <div className=" flex justify-end">
                    <button
                        onClick={handleChangeModal}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <h1 className=" text-3xl font-bold mt-5">{producto.nombre}</h1>
                <p className=" text-amber-500 mt-5 font-black text-5xl">
                    {formatearCantidad(producto.precio)}
                </p>

                <div className=" flex gap-4 mt-5">
                    <button
                    type="button"
                    onClick={()=> {
                        if(cantidad <= 1) return
                        setCantidad(cantidad-1)
                    }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>

                    <p className=" text-3xl">{cantidad}</p>
                    
                    <button
                    type="button"
                    onClick={()=> {
                        if(cantidad >= 5) return
                        setCantidad(cantidad+1)}
                    }
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    </button>
                </div>

                <button 
                type="button"
                className=" bg-indigo-500 hover:bg-indigo-700 rounded text-white font-bold uppercase px-5 py-2 mt-5"
                onClick={()=> handleAgregarPedido({ ...producto, cantidad })}
                >
                    {edicion ? 'Guardar Cambios' : 'Agregar Pedido'}
                </button>
            </div>
        </div>
    )
}
