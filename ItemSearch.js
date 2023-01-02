/*document.addEventListener("keyup", e=>{
    //e.target.matches("#buscador")
    //console.log(e.target.value)
})
*/


btnBuscar = document.getElementById("BUS");
ItemReturned = document.getElementById("textArea");
ItemCopySearched = document.getElementById("ItemCopySearched");
ItemDeleteSearched = document.getElementById("ItemDeleteSearched");
var URLItem = document.getElementById('URLBuscar')


function Loaded(){
    filas = parseInt(ItemReturned.getAttribute("rows"));
    total = filas + 4;
    HeightCard = document.getElementById("Card1")
    HeightCard.style.height = `${total * 10}vh`
    HeightCard.style.backgroundColor="rgb(32, 41, 64)";
}

URLItem.addEventListener('click', ()=>{
    URLItem.select();
})

window.onload=Loaded;

var Holdingchecked = false;
var HoldCheck = document.getElementById('HoldCheked');
HoldCheck.addEventListener("change", validaCheckbox, false);
function validaCheckbox(){
Holdingchecked = HoldCheck.checked;
}

var StoreCheked = false;
var StoreCheck = document.getElementById('StoreCheked');
StoreCheck.addEventListener("change", validaCheckboxSearch, false);
function validaCheckboxSearch(){
    StoreCheked = StoreCheck.checked;
}

btnBuscar.addEventListener("click", ()=>{
    buscarDatos();
});
ItemCopySearched.addEventListener("click", ()=>{
    //alert("Copiado!")
    ItemReturned.select();
    document.execCommand('copy');
});
ItemDeleteSearched.addEventListener("click", ()=>{

    //alert("Eliminado!")
    ItemReturned.value = "";
    ItemReturned.setAttribute("rows", 10)

    HeightCard = document.getElementById("Card1")
    HeightCard.style.height = `${3}vh`
});

function buscarDatos(){
    var URLItem = document.getElementById('URLBuscar')
    //console.log(URLItem.value,StoreCheck)
    eel.desdePython(URLItem.value,StoreCheked)(callback);
}
function callback(resultado,storeIf){
    filas = parseInt(ItemReturned.getAttribute("rows"));
    //if (filas == 3) {
        if (Holdingchecked) {
            ItemReturned.value = ItemReturned.value  + `Thanks for holding! I do apologize about that wait, I was carefully checking the information. 
            \n`+ `${resultado}\n`;
            AddRows();
            console.log("Holding checkeado")
        }else{
            ItemReturned.value = ItemReturned.value + `${resultado}\n`;
            AddRows();
            //console.log("Holding no checkeado")
        }

    HeightCard = document.getElementById("Card1")
    HeightCard.style.backgroundColor="rgb(32,41,64)";
        HeightCard.style.height = `${total * 20}vh`

}

ItemReturned.addEventListener("keyup", e =>{
    //console.log(ItemReturned.getAttribute("rows"))
    filas = parseInt(ItemReturned.getAttribute("rows"));
    total = filas + 1;
    //console.log(total)

    //console.log(HeightCard.getAttribute("height"))

    tecla = (document.all) ? e.keyCode : e.which;
    if (tecla==13){
    //alert ('Has pulsado enter');
    AddRows2();

}
})

function AddRows() {
    filas = parseInt(ItemReturned.getAttribute("rows"));
    total = filas + 7;
    ItemReturned.setAttribute("rows", total)
    //alert("Filas " + total)
    HeightCard = document.getElementById("Card1")
    HeightCard.style.height = `${filas * 10}vh`
    HeightCard.style.backgroundColor="rgb(32, 41, 64)";

}
function AddRows2() {
    filas = parseInt(ItemReturned.getAttribute("rows"));
    total = filas + 1;
    ItemReturned.setAttribute("rows", total)
    //alert("Filas " + total)
    HeightCard = document.getElementById("Card1")
    HeightCard.style.height = `${filas * 10}vh`
    HeightCard.style.backgroundColor="rgb(32, 41, 64)";

}



function clipboard(ElementTag, elementID) {
    //Creating the hidden input
    //ItemReturned.value = ItemReturned.value + elementID

    const Hiddeninput = document.createElement('textarea')
    Hiddeninput.value = elementID.innerText;
    console.log(Hiddeninput.value)
    document.body.appendChild(Hiddeninput);
    //Copying the content
    Hiddeninput.select();
    document.execCommand('copy')
    document.body.removeChild(Hiddeninput);


    //Adding animation
    ElementTag.classList.add("seleccionado");
    setTimeout(function(){
        ElementTag.classList.remove("seleccionado");
    }, 500);
}


