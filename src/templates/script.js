$(function() {
    $("#startChatButton").on("click", function(evt) {
        $("#startChatButton").hide();
        $("#chatFrame").show();
    })
});

function alegerea(el) {
    var choice = el.dataset.choice;
    $.post("/chat", {choice: choice}, function(result) {
        $(result).appendTo($("#conversatie"));
    });
}

know = {
    "Nu gasesc masina" : "Daca nu ati gasit ce cautati in lista noastra,puteti cere o oferta.",
    "Nu am primit niciun raspuns la mesaj" : "Din cauza cererii mare de oferte acesta posibil s-a pierdut.",
    "Am gasit masina,dar nu stiu ce optiuni are" : "Pentru informatii suplimentare despre masina accesati cere oferta,iar in mesaj introduceti datele masinii.",
    "Buna" : "Hei.",
    "Salut" : "Hei.",
    "Am nevoie de ajutor" : "Sunt aici pentru ajutor!",
    "Am probleme cu masina" : "Mergi la un service partener din orasul tau pentru o verificare amanuntita gratuita.",
    "Masina are probleme" : "Mergi la un service partener din orasul tau pentru o verificare amanuntita gratuita.",
    "nu gasesc masina" : "Daca nu ati gasit ce cautati in lista noastra,puteti cere o oferta.",
    "nu am primit niciun raspuns la mesaj" : "Din cauza cererii mare de oferte acesta posibil s-a pierdut.",
    "am gasit masina,dar nu stiu ce optiuni are" : "Pentru informatii suplimentare despre masina accesati cere oferta,iar in mesaj introduceti datele masinii.",
    "buna" : "Hei.",
    "salut" : "Hei.",
    "am nevoie de ajutor" : "Sunt aici pentru ajutor!",
    "am probleme cu masina" : "Mergi la un service partener din orasul tau pentru o verificare amanuntita gratuita.",
    "masina are probleme" : "Mergi la un service partener din orasul tau pentru o verificare amanuntita gratuita.",
    "Nu gasesc masina." : "Daca nu ati gasit ce cautati in lista noastra,puteti cere o oferta.",
    "Nu am primit niciun raspuns la mesaj." : "Din cauza cererii mare de oferte acesta posibil s-a pierdut.",
    "Am gasit masina,dar nu stiu ce optiuni are." : "Pentru informatii suplimentare despre masina accesati cere oferta,iar in mesaj introduceti datele masinii.",
    "Buna." : "Hei.",
    "Salut." : "Hei.",
    "Am nevoie de ajutor." : "Sunt aici pentru ajutor!",
    "Am probleme cu masina." : "Mergi la un service partener din orasul tau pentru o verificare amanuntita gratuita.",
    "Masina are probleme." : "Mergi la un service partener din orasul tau pentru o verificare amanuntita gratuita.",
    "Vreau sa vorbescu cu un om." : "Pentru a lua legatura cu cineva din echipa noastra, va rugam selectati una dintre optiunile boldate cu galben.",
    "vreau sa vorbescu cu un om" : "Pentru a lua legatura cu cineva din echipa noastra, va rugam selectati una dintre optiunile boldate cu galben.",
    "Ce inseamna tva deductibil?" : "Daca masina este achizitionata pe firma, tva-ul nu trebuie platit."

};
function talk() {
    var user  = document.getElementById("userBox").value;
    document.getElementById("userBox").value = "";
    document.getElementById("chatLog").innerHTML += user+"<br>";
    if (user in know) {
        document.getElementById("chatLog").innerHTML += know[user]+"<br>";
    } else {
        document.getElementById("chatLog").innerHTML += "Nu am un raspuns pentru asta, puteti incerca alta intrebare..<br>";
    }
}




function marca(el) {
    var choice = el.dataset.choice;
    $.post("/chat", {choice: choice}, function(result) {
        $(result).appendTo($("#marca"));
    });
}

<!-- VW MASINI -->

function vw(el) {
    var choice = el.dataset.choice;
    $.post("/chat", {choice: choice}, function(result) {
        $(result).appendTo($("#vw"));
    });
}


function golf6gti2009(el) {
    var choice = el.dataset.choice;
    $.post("/chat", {choice: choice}, function(result) {
        $(result).appendTo($("#golf6gti2009"));
    });
}

function golf6gti2013(el) {
    var choice = el.dataset.choice;
    $.post("/chat", {choice: choice}, function(result) {
        $(result).appendTo($("#golf6gti2013"));
    });
}


function golf7(el) {
    var choice = el.dataset.choice;
    $.post("/chat", {choice: choice}, function(result) {
        $(result).appendTo($("#golf7"));
    });
}


function passatb8(el) {
    var choice = el.dataset.choice;
    $.post("/chat", {choice: choice}, function(result) {
        $(result).appendTo($("#passatb8"));
    });
}


function jettagli(el) {
    var choice = el.dataset.choice;
    $.post("/chat", {choice: choice}, function(result) {
        $(result).appendTo($("#jettagli"));
    });
}


function arteon(el) {
    var choice = el.dataset.choice;
    $.post("/chat", {choice: choice}, function(result) {
        $(result).appendTo($("#arteon"));
    });
}
                                               <!-- audi masini -->
function audi(el) {
    var choice = el.dataset.choice;
    $.post("/chat", {choice: choice}, function(result) {
        $(result).appendTo($("#audi"));
    });
}
function a4(el) {
    var choice = el.dataset.choice;
    $.post("/chat", {choice: choice}, function(result) {
        $(result).appendTo($("#a4"));
    });
}
function a5(el) {
    var choice = el.dataset.choice;
    $.post("/chat", {choice: choice}, function(result) {
        $(result).appendTo($("#a5"));
    });
}
function a6(el) {
    var choice = el.dataset.choice;
    $.post("/chat", {choice: choice}, function(result) {
        $(result).appendTo($("#a6"));
    });
}
function a7(el) {
    var choice = el.dataset.choice;
    $.post("/chat", {choice: choice}, function(result) {
        $(result).appendTo($("#a7"));
    });
}
function q5(el) {
    var choice = el.dataset.choice;
    $.post("/chat", {choice: choice}, function(result) {
        $(result).appendTo($("#q5"));
    });
}

<!-- BMW MASINI -->


function bmw(el) {
    var choice = el.dataset.choice;
    $.post("/chat", {choice: choice}, function(result) {
        $(result).appendTo($("#bmw"));
    });
}
function bmwseria3(el) {
    var choice = el.dataset.choice;
    $.post("/chat", {choice: choice}, function(result) {
        $(result).appendTo($("#bmwseria3"));
    });
}
function bmwx3(el) {
    var choice = el.dataset.choice;
    $.post("/chat", {choice: choice}, function(result) {
        $(result).appendTo($("#bmwx3"));
    });
}
function bmwx5(el) {
    var choice = el.dataset.choice;
    $.post("/chat", {choice: choice}, function(result) {
        $(result).appendTo($("#bmwx5"));
    });
}
function bmwi3(el) {
    var choice = el.dataset.choice;
    $.post("/chat", {choice: choice}, function(result) {
        $(result).appendTo($("#bmwi3"));
    });
}
function bmwseria5(el) {
    var choice = el.dataset.choice;
    $.post("/chat", {choice: choice}, function(result) {
        $(result).appendTo($("#bmwseria5"));
    });
}


                                              //porche masini
function porche(el) {
    var choice = el.dataset.choice;
    $.post("/chat", {choice: choice}, function(result) {
        $(result).appendTo($("#porche"));
    });
}
function cayenne(el) {
    var choice = el.dataset.choice;
    $.post("/chat",{choice: choice}, function (result) {
        $(result).appendTo($("#cayenne"));

    })
}
function panamera(el) {
    var choice = el.dataset.choice;
    $.post("/chat",{choice: choice}, function (result) {
        $(result).appendTo($("#panamera"));

    })
}

function macan(el) {
    var choice = el.dataset.choice;
    $.post("/chat",{choice: choice}, function (result) {
        $(result).appendTo($("#macan"));

    })
}



                                                 //mercedes masini
function mercedes(el) {
    var choice = el.dataset.choice;
    $.post("/chat", {choice: choice}, function(result) {
        $(result).appendTo($("#mercedes"));
    });
}
function mercedesC(el) {
    var choice = el.dataset.choice;
    $.post("/chat", {choice: choice}, function(result) {
        $(result).appendTo($("#mercedesC"));
    });
}
function mercedesE(el) {
    var choice = el.dataset.choice;
    $.post("/chat", {choice: choice}, function(result) {
        $(result).appendTo($("#mercedesE"));
    });
}
function mercedesGLC(el) {
    var choice = el.dataset.choice;
    $.post("/chat", {choice: choice}, function(result) {
        $(result).appendTo($("#mercedesGLC"));
    });
}
function mercedesGLE(el) {
    var choice = el.dataset.choice;
    $.post("/chat", {choice: choice}, function(result) {
        $(result).appendTo($("#mercedesGLE"));
    });
}
function mercedesCLS(el) {
    var choice = el.dataset.choice;
    $.post("/chat", {choice: choice}, function(result) {
        $(result).appendTo($("#mercedesCLS"));
    });
}

                                                            //MASINI TOYOTA

function toyota(el) {
    var choice = el.dataset.choice;
    $.post("/chat", {choice: choice}, function(result) {
        $(result).appendTo($("#toyota"));
    });
}
function yaris(el) {
    var choice = el.dataset.choice;
    $.post("/chat", {choice: choice}, function(result) {
        $(result).appendTo($("#yaris"));
    });
}
function rav4(el) {
    var choice = el.dataset.choice;
    $.post("/chat", {choice: choice}, function(result) {
        $(result).appendTo($("#rav4"));
    });
}
function corolla(el) {
    var choice = el.dataset.choice;
    $.post("/chat", {choice: choice}, function(result) {
        $(result).appendTo($("#corolla"));
    });
}
function land(el) {
    var choice = el.dataset.choice;
    $.post("/chat", {choice: choice}, function(result) {
        $(result).appendTo($("#land"));
    });
}
function prius(el) {
    var choice = el.dataset.choice;
    $.post("/chat", {choice: choice}, function(result) {
        $(result).appendTo($("#prius"));
    });
}


                                                                //MASINI SKODA
function skoda(el) {
    var choice = el.dataset.choice;
    $.post("/chat", {choice: choice}, function(result) {
        $(result).appendTo($("#skoda"));
    });
}
function skodaOctavia(el) {
    var choice = el.dataset.choice;
    $.post("/chat", {choice: choice}, function(result) {
        $(result).appendTo($("#skodaOctavia"));
    });
}
function skodaSuperb(el) {
    var choice = el.dataset.choice;
    $.post("/chat", {choice: choice}, function(result) {
        $(result).appendTo($("#skodaSuperb"));
    });
}
function skodaYeti(el) {
    var choice = el.dataset.choice;
    $.post("/chat", {choice: choice}, function(result) {
        $(result).appendTo($("#skodaYeti"));
    });
}
function skodaFabia(el) {
    var choice = el.dataset.choice;
    $.post("/chat", {choice: choice}, function(result) {
        $(result).appendTo($("#skodaFabia"));
    });
}
                                                                 //MASINI SEAT
function seat(el) {
    var choice = el.dataset.choice;
    $.post("/chat", {choice: choice}, function(result) {
        $(result).appendTo($("#seat"));
    });
}



function toledo(el) {
    var choice = el.dataset.choice;
    $.post("/chat", {choice: choice}, function(result) {
        $(result).appendTo($("#toledo"));
    });
}
function ibiza(el) {
    var choice = el.dataset.choice;
    $.post("/chat", {choice: choice}, function(result) {
        $(result).appendTo($("#ibiza"));
    });
}
function leon(el) {
    var choice = el.dataset.choice;
    $.post("/chat", {choice: choice}, function(result) {
        $(result).appendTo($("#leon"));
    });
}
                                                 //masini ford
function ford(el) {
    var choice = el.dataset.choice;
    $.post("/chat", {choice: choice}, function(result) {
        $(result).appendTo($("#ford"));
    });
} function ranger(el) {
    var choice = el.dataset.choice;
    $.post("/chat", {choice: choice}, function(result) {
        $(result).appendTo($("#ranger"));
    });
}
function mondeo(el) {
    var choice = el.dataset.choice;
    $.post("/chat", {choice: choice}, function(result) {
        $(result).appendTo($("#mondeo"));
    });
}
function focus(el) {
    var choice = el.dataset.choice;
    $.post("/chat", {choice: choice}, function(result) {
        $(result).appendTo($("#focus"));
    });
}
function fiesta(el) {
    var choice = el.dataset.choice;
    $.post("/chat", {choice: choice}, function(result) {
        $(result).appendTo($("#fiesta"));
    });
}




function oferta(el) {
    var choice = el.dataset.choice;
    $.post("/chat", {choice: choice}, function(result) {
        $(result).appendTo($("#oferta"));
    });
}


function nelamuriri(el) {
    var choice = el.dataset.choice;
    $.post("/chat", {choice: choice}, function(result) {
        $(result).appendTo($("#nelamuriri"));
    });
}


