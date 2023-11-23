let lista_mail =["a@gmail.com","b@gmail.com","c@gmail.com","d@gmail.com","e@gmail.com","f@gmail.com"];
let mail_utente = prompt("INSERISCI EMAIL, SE LA TUA EMAIL E' COMPOSTA DA UNA SOLA LETTERA AVRAI PIU' POSSIBILITA' CHE SIA PRESENTE NELLA LISTA");
let flag=0;
for(let i=0;i<lista_mail.length;i++){
    if(mail_utente==lista_mail[i]){
        flag=1;
    }
}
if(flag==1){
    console.log("EMAIL PRESENTE NELLA LISTA")
}
else{
    console.log("EMAIL NON PRESENTE NELLA LISTA")
}