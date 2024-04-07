const modalProducto = new bootstrap.Modal(document.getElementById('modalProducto'))
const on = (element, event, selector, handler) => {
element.addEventListener (event, e => {
    if(e.target.closest(selector)){
        handler(e)
}
})
}
on(document, 'click', '.btnEditar', e => {
const fila = e.target.parentNode.parentNode
id_editarp.value = fila.children[0].innerHTML
nombrep_editar.value = fila.children[1].innerHTML
stock_editar.value = fila.children[2].innerHTML
precio_editar.value = fila.children[3].innerHTML
categoria_editar.value = fila.children[3].innerHTML
modalProducto.show()
})