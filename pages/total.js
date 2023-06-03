import { useEffect, useCallback } from "react"
import Layout from '../layout/Layout'
import useQuiosco from "../hooks/useQuiosco"
import { formatearCantidad } from "../helpers"

export default function Total() {

  const { pedido, nombre, setNombre, colocarOrden, total } = useQuiosco()

  const comprobarPedido = useCallback (() => {
    return pedido.length === 0 || nombre === '' || nombre.length < 3
  },[pedido, nombre])

  useEffect(()=>{
    comprobarPedido()
  },[pedido, comprobarPedido])

  return (
    <Layout pagina='Total y Confirmar Pedido'>
    <h1 className=" text-4xl font-black">Total y Confirmar Pedido</h1>
    <p className=" text-2xl my-10">Confirma tu pedido a continuación</p>
    <form
    onSubmit={colocarOrden}
    >
      <div>
        <label 
        htmlFor="nombre"
        className=" block uppercase text-slate-700 font-bold text-xl">
          Nombre:
        </label>
        <input
        id="nombre"
        type="text"
        className=" bg-gray-300  w-full lg:w-1/3 mt-3 p-2 rounded-md"
        value={nombre}
        onChange={e=> setNombre(e.target.value)}
        >
        </input>
      </div>
      <div className=" mt-10">
      <p className=" text-2xl">
        Total a pagar: <span className=" font-bold">{formatearCantidad(total)}</span>
      </p>
      </div>
      <div className=" mt-5">
        <input 
        type="submit"
        className={`${comprobarPedido() ? 'bg-indigo-100' : 'bg-indigo-600 hover:bg-indigo-800'} w-full lg:w-auto px-5 py-2 rounded uppercase text-white text-center`}
        value='Confirmar Pedido'
        disabled={comprobarPedido()}
        >
        </input>
      </div>
    </form>
    </Layout>
  )
}
