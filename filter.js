
refreshTemplates = document.getElementById("refreshTemplates")
refreshTemplates.addEventListener("click", ()=>{
        document.getElementById("buscador").value = ""
        //Removing the card tittle
        document.querySelectorAll(".col-xl-4").forEach(template =>{
                template.classList.remove("filtro")
        })
        //Removing the text of the card
        document.querySelectorAll(".card-title").forEach(template =>{
                template.classList.remove("filtro")
        })
    })

    //CODING THE FUNCTION TO FOCUSE THE SEARCH BAR TO FILTER THE TEMPLATES
document.addEventListener("keydown", function(event) {
    // Check for the key combination Ctrl + Shift + F
    if (event.ctrlKey && event.shiftKey && event.keyCode === 70) {
      // Give focus to the search input
    document.getElementById("buscador").focus();
    }
});

//CODING THE FILTER - EACH WORD/PHRASE INSERTED IN THE SEARCHING INPUT WILL BE DISPLAYED AND FILTERED HERE
document.addEventListener("keyup", e=>{
    if (e.target.matches("#buscador")){
        if (e.key ==="Escape")e.target.value = ""

        //Removing the card tittle
        document.querySelectorAll(".card-title").forEach(template =>{
            template.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                ?template.classList.remove("filtro")
                :template.classList.add("filtro")
        })
        //Removing the text of the card
        document.querySelectorAll(".col-xl-4").forEach(template =>{
            template.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                ?template.classList.remove("filtro")
                :template.classList.add("filtro")
        })
    }
})
ItemDeleteSearched = document.getElementById("ItemDeleteSearched");
ItemDeleteSearched.addEventListener("click", ()=>{

    //alert("Eliminado!")
    ItemReturned.value = "";
    ItemReturned.setAttribute("rows", 10)

    HeightCard = document.getElementById("Card1")
    HeightCard.style.height = `${3}vh`
});

ItemCopySearched = document.getElementById("ItemCopySearched");
ItemCopySearched.addEventListener("click", ()=>{
    //alert("Copiado!")
    ItemReturned.select();
    document.execCommand('copy');
});