const text_descripcion = document.getElementById("descripcion");

const radio_compra = document.getElementById("compra");
const radio_venta = document.getElementById("venta");

const radio_basico = document.getElementById("basico");
const radio_minimo = document.getElementById("minimo");
const radio_excento= document.getElementById("excento");

const text_subtotal = document.getElementById("subtotal");
const btn_ingresar = document.getElementById("ingresar");

const tabla_add = document.getElementById("agrego_tabla");

const p_totVentas = document.getElementById("totVentas");
const p_totCompras = document.getElementById("totCompras");

let add_TotVentas , add_totCompras;

let add_Desc, add_tipoTrans, addSubTot, add_IVA, addTotIva, iva;


btn_ingresar.addEventListener('click', () => {

    
    if(text_descripcion.value.length && text_subtotal.value.length){
        //tipo
        if(radio_compra.checked){
            add_tipoTrans = "Compra";
        }
        else if(radio_venta.checked){
            add_tipoTrans = "Venta";
        }
        else {
            alert("Error, seleccione tipo transaccion.");
        }
        //iva
        if(radio_basico.checked){

           iva = 0.22;

        }
        else if(radio_minimo.checked){
            iva = 0.1;
        }
        else if(radio_excento.checked){
            iva = 1;
        }
        //iva total y descripcion
        add_Desc = text_descripcion.value;
        add_IVA = text_subtotal.value * iva; //el iva
        addTotIva = text_subtotal.value * (1+iva); //el subtotal + iva

    }
    else{
        
    }

});