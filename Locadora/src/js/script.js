function validationForm(){
    let validationCod = document.forms['register']['cod'].value;
    let validationTitle = document.forms['register']['title'].value;
    let validationDirector = document.forms['register']['director'].value;
    let validationDate = document.forms['register']['date'].value;
    let validationActor = document.forms['register']['actor'].value;
    let validationNote = document.forms['register']['note'].value;
    let validationRadio = document.forms['register']['radio'].value;

    if(validationCod == ""){
       alert("O Códico deve ser preenchindo");
       return false;
    }
    if(validationTitle == ""){
       alert("O titulo deve ser preenchindo");
       return false;
    }
    if(validationDirector == ""){
       alert("O Nome do deve ser preenchindo");
       return false;
    }
    if(validationDate == ""){
       alert("O data deve ser preenchindo");
       return false;
    }
    if(validationActor == ""){
       alert("O data deve ser preenchindo");
       return false;
    }
    if(validationNote == ""){
       alert("O data deve ser preenchindo");
       return false;
    }
    if(validationRadio == ""){
       alert("O Genero deve ser preenchindo");
       return false;
    } 

    alert("A validação ocorreu de forma correta");
}

function insert() {
    let cod = document.forms["register"]["cod"].value;
    let title = document.forms["register"]["title"].value;
    let director = document.forms["register"]["director"].value;
    let date = document.forms["register"]["date"].value;
    let actor = document.forms["register"]["actor"].value;
    let note = document.forms["register"]["note"].value;
    let radio = document.forms["register"]["radio"].value;

    let insert = window.document.getElementById("insertRow");

    insert.innerHTML = `
     <th scope= 'row'>${cod}</th>
     <td>${title}</td>
     <td>${director}</td>
     <td>${date}</td>
     <td>${radio}</td>
     <td>${actor}</td>
     <td>${note}</td>
    `;
}

