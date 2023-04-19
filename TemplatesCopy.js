
GreetingEng1 = document.getElementById("greetingEng1");
HoldStatement = document.getElementById("HoldStatement");
MandClosing = document.getElementById("MandClosing");
EmpDisc = document.getElementById("EmpDisc");


RemoteDeskBtn = document.getElementById("RemoteDeskBtn");
RemoteDeskBtn.addEventListener("click", ()=>{
    SecundaryWindow("https://rdweb.wvd.microsoft.com/arm/webclient/index.html");
});
LivepBtn = document.getElementById("LivepBtn");
LivepBtn.addEventListener("click", ()=>{
    SecundaryWindow("https://authentication.liveperson.net/login.html");
});

function SecundaryWindow (URL){
    //window.open(URL,"ventana1","width=300,height=300,scrollbars=NO")
    //var myWindow = window.open("", "myWindow", "width=600,height=600","incognito: true");   // Opens a new window
    //windows.create({"url": URL, "incognito": true});
    window.open(URL, "_blank", "popup");
}

GreetingEng1 = document.getElementById("greetingEng1");
GreetingEng1.addEventListener("click", ()=>{
    clipboard(GreetingEng1, GreetingEng1)
});

acknow1 = document.getElementById("acknow1");
acknow1.addEventListener("click", ()=>{
    clipboard(acknow1, acknow1)
});
acknow2 = document.getElementById("acknow2");
acknow2.addEventListener("click", ()=>{
    clipboard(acknow2, acknow2)
});

closing1 = document.getElementById("closing1");
closing1.addEventListener("click", ()=>{
    clipboard(closing1, closing1)
});
closing2 = document.getElementById("closing2");
closing2.addEventListener("click", ()=>{
    clipboard(closing2, closing2)
});

closingEsp1 = document.getElementById("closingEsp1");
closingEsp1.addEventListener("click", ()=>{
    clipboard(closingEsp1, closingEsp1)
});

closingEsp2 = document.getElementById("closingEsp2");
closingEsp2.addEventListener("click", ()=>{
    clipboard(closingEsp2, closingEsp2)
});


//HOLDING & CHECK UNRESPONSIVE
Phold1 = document.getElementById("Phold1");
Phold1.addEventListener("click", ()=>{
    clipboard(Phold1, Phold1)
});
Phold2 = document.getElementById("Phold2");
Phold2.addEventListener("click", ()=>{
    clipboard(Phold2, Phold2)
});
Phold3 = document.getElementById("Phold3");
Phold3.addEventListener("click", ()=>{
    clipboard(Phold3, Phold3)
});
warning1 = document.getElementById("warning1");
warning1.addEventListener("click", ()=>{
    clipboard(warning1, warning1)
});
warning2 = document.getElementById("warning2");
warning2.addEventListener("click", ()=>{
    clipboard(warning2, warning2)
});
cunresp1 = document.getElementById("cunresp1");
cunresp1.addEventListener("click", ()=>{
    clipboard(cunresp1, cunresp1)
});
cunresp2 = document.getElementById("cunresp2");
cunresp2.addEventListener("click", ()=>{
    clipboard(cunresp2, cunresp2)
});
//REFRESH CONVERSATION SECTION
Refre1 = document.getElementById("Refre1");
Refre1.addEventListener("click", ()=>{
    clipboard(Refre1, Refre1)
});
Refre2 = document.getElementById("Refre2");
Refre2.addEventListener("click", ()=>{
    clipboard(Refre2, Refre2)
});
Refre3 = document.getElementById("Refre3");
Refre3.addEventListener("click", ()=>{
    clipboard(Refre3, Refre3)
});

//ORDERS & TRANSFERS SECTION
tranorder1 = document.getElementById("tranorder1");
tranorder1.addEventListener("click", ()=>{
    clipboard(tranorder1, tranorder1)
});

//MORE HELP SECTION
morehelp1 = document.getElementById("morehelp1");
morehelp1.addEventListener("click", ()=>{
    clipboard(morehelp1, morehelp1)
});
morehelp2 = document.getElementById("morehelp2");
morehelp2.addEventListener("click", ()=>{
    clipboard(morehelp2, morehelp2)
});

//ASKING FOR INFORMATION SECTION
askinfo1 = document.getElementById("askinfo1");
askinfo1.addEventListener("click", ()=>{
    clipboard(askinfo1, askinfo1)
});
askinfo2 = document.getElementById("askinfo2");
askinfo2.addEventListener("click", ()=>{
    clipboard(askinfo2, askinfo2)
});
askinfo3 = document.getElementById("askinfo3");
askinfo3.addEventListener("click", ()=>{
    clipboard(askinfo3, askinfo3)
});
askinfo4 = document.getElementById("askinfo4");
askinfo4.addEventListener("click", ()=>{
    clipboard(askinfo4, askinfo4)
});
askinfo5 = document.getElementById("askinfo5");
askinfo5.addEventListener("click", ()=>{
    clipboard(askinfo5, askinfo5)
});
askinfo6 = document.getElementById("askinfo6");
askinfo6.addEventListener("click", ()=>{
    clipboard(askinfo6, askinfo6)
});
askinfo7 = document.getElementById("askinfo7");
askinfo7.addEventListener("click", ()=>{
    clipboard(askinfo7, askinfo7)
});

//EMPATHY SECTION
empathy1 = document.getElementById("empathy1");
empathy1.addEventListener("click", ()=>{
    clipboard(empathy1, empathy1)
});
empathy2 = document.getElementById("empathy2");
empathy2.addEventListener("click", ()=>{
    clipboard(empathy2, empathy2)
});
empathy3 = document.getElementById("empathy3");
empathy3.addEventListener("click", ()=>{
    clipboard(empathy3, empathy3)
});
empathy4 = document.getElementById("empathy4");
empathy4.addEventListener("click", ()=>{
    clipboard(empathy4, empathy4)
});
empathy5 = document.getElementById("empathy5");
empathy5.addEventListener("click", ()=>{
    clipboard(empathy5, empathy5)
});


//IN-STORE REFER TO STORE
instore1 = document.getElementById("instore1");
instore1.addEventListener("click", ()=>{
    clipboard(instore1, instore1)
});

instore3 = document.getElementById("instore3");
instore3.addEventListener("click", ()=>{
    clipboard(instore3, instore3)
});

//AVAILABILITY SECTION
Avail1 = document.getElementById("Avail1");
Avail1.addEventListener("click", ()=>{
    clipboard(Avail1, Avail1)
});
//ABUSIVE CUSTOMER SECTION
abusive1 = document.getElementById("abusive1");
abusive1.addEventListener("click", ()=>{
    clipboard(abusive1, abusive1)
});

mapDetailInfo = document.getElementById("mapDetailInfo");
mapDetailInfo.addEventListener("click", ()=>{
    clipboard(mapDetailInfo, mapDetailInfo)
});




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

//CODING THE FUNCTION TO FOCUSE THE SEARCH BAR TO FILTER THE TEMPLATES
document.addEventListener("keydown", function(event) {
    // Check for the key combination Ctrl + Shift + F
    if (event.ctrlKey && event.shiftKey && event.keyCode === 70) {
      // Give focus to the search input
    document.getElementById("buscador").focus();
    }
});





