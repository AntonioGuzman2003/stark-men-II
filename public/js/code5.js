const modalProveedor = new bootstrap.Modal(document.getElementById('modalProveedor'))
const on = (element, event, selector, handler) => {
element.addEventListener (event, e => {
    if(e.target.closest(selector)){
        handler(e)
}
})
}
on(document, 'click', '.btnEditar', e => {
const fila = e.target.parentNode.parentNode
id_editar.value = fila.children[0].innerHTML
nombrecia_editar.value = fila.children[1].innerHTML
modalProveedor.show()
})