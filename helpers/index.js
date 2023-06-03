export const formatearCantidad = cantidad => {
    return cantidad.toLocaleString("en-Us", {
        style: "currency",
        currency: "USD"
    })
}