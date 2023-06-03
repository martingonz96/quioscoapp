import { PrismaClient } from "@prisma/client";
 
export default async function handler(req, res){
    const prisma = new PrismaClient()

    //Obtener Ordenes
    if(req.method === 'GET') {
        const obtenerOrdenes = await prisma.order.findMany({
            where: {
                estado: false
            }
        })

        res.status(200).json(obtenerOrdenes)
    }


    //Crear Ordenes 
    if(req.method === 'POST')
    {
        const orden = await prisma.order.create({
            data: {
                nombre : req.body.nombre,
                total : parseFloat(req.body.total),
                pedido : req.body.pedido,
                fecha : req.body.fecha,
            }
        })
        res.json({ orden })
    }
}