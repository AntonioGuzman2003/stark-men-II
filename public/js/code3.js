const modalOrdenCompra = new bootstrap.Modal(document.getElementById('modalOrdenCompra'));

const on = (element, event, selector, handler) => {
    element.addEventListener(event, e => {
        if (e.target.closest(selector)) {
            handler(e);
        }
    });
};

on(document, 'click', '.btnEditar', e => {
    const fila = e.target.parentNode.parentNode;
    id_editar.value = fila.children[0].innerHTML; // Suponiendo que id_editar es el campo oculto para el ID de la orden de compra
    id_cliente_editar.value = fila.children[1].innerHTML; // Suponiendo que id_cliente_editar es el campo oculto para el ID del cliente
    id_producto_editar.value = fila.children[2].innerHTML; // Suponiendo que id_producto_editar es el campo oculto para el ID del producto
    nombre_cliente_editar.value = fila.children[3].innerHTML;
    nombre_producto_editar.value = fila.children[4].innerHTML;
    cantidad_editar.value = fila.children[5].innerHTML;
    estado_editar.value = fila.children[8].innerHTML;
    modalOrdenCompra.show();
});
