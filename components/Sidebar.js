import Image from "next/image"
import useQuiosco from '../hooks/useQuiosco'
import Categoria from "./Categoria"

export default function Sidebar() {

const { categorias } = useQuiosco()

  return (
    <>
    <div className="mx-auto" style={{ maxWidth: "100px" }}>
        <Image
          src="/assets/img/logo.svg"
          alt="Imagen logotipo"
          layout="responsive"
          width={100}
          height={100}
        />
      </div>
    <nav className=" mt-10">
      {categorias.map(categoria =>(
        <Categoria
        key={categoria.id}
        categoria={categoria}
        >
        </Categoria>
      ))}
    </nav>
    </>
  )
}
