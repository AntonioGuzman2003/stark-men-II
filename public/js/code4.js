const modalInsumo = new bootstrap.Modal(document.getElementById('modalInsumo'));

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
    id_proveedor_editar.value = fila.children[1].innerHTML; // Suponiendo que id_cliente_editar es el campo oculto para el ID del cliente
    nombre_insumo_editar.value = fila.children[2].innerHTML;
    pre_uni_editar.value = fila.children[3].innerHTML;
    stock_editar.value = fila.children[4].innerHTML;
    modalInsumo.show();
});
