
const eleNotion2 = document.querySelector('.n2');
const eleBottomNotion2 = document.querySelector('.bottom-2');
const elePBottomNotion2 = document.querySelector('.p-n-2');
const eleSpanBottomNotion2 = document.querySelector('.span-n-2');
const eleImgBottomNotion2 = document.querySelector('.img-n-2');


const eleNotion3 = document.querySelector('.n3');
const eleBottomNotion3 = document.querySelector('.bottom-3');
const elePBottomNotion3 = document.querySelector('.p-n-3');
const eleSpanBottomNotion3 = document.querySelector('.span-n-3');
const eleImgBottomNotion3 = document.querySelector('.img-n-3');


const eleNotion4 = document.querySelector('.n4');
const eleBottomNotion4 = document.querySelector('.bottom-4');
const elePBottomNotion4 = document.querySelector('.p-n-4');
const eleSpanBottomNotion4 = document.querySelector('.span-n-4');
const eleImgBottomNotion4 = document.querySelector('.img-n-4');


const eleNotion5 = document.querySelector('.n5');
const eleBottomNotion5 = document.querySelector('.bottom-5');
const elePBottomNotion5 = document.querySelector('.p-n-5');
const eleSpanBottomNotion5 = document.querySelector('.span-n-5');
const eleImgBottomNotion5 = document.querySelector('.img-n-5');








function notionCollaps2 (){
    if (!eleBottomNotion2.classList.contains("bottom-on")){
        eleBottomNotion2.classList.add('bottom-on')
        elePBottomNotion2.classList.add('p-on')
        eleSpanBottomNotion2.classList.add('span-on')
        eleImgBottomNotion2.classList.add('img-on')
    }else{
        eleBottomNotion2.classList.remove('bottom-on')
        elePBottomNotion2.classList.remove('p-on')
        eleSpanBottomNotion2.classList.remove('span-on')
        eleImgBottomNotion2.classList.remove('img-on')

    }
}


function notionCollaps3 (){
    if (!eleBottomNotion3.classList.contains("bottom-on")){
        eleBottomNotion3.classList.add('bottom-on')
        elePBottomNotion3.classList.add('p-on')
        eleSpanBottomNotion3.classList.add('span-on')
        eleImgBottomNotion3.classList.add('img-on')
    }else{
        eleBottomNotion3.classList.remove('bottom-on')
        elePBottomNotion3.classList.remove('p-on')
        eleSpanBottomNotion3.classList.remove('span-on')
        eleImgBottomNotion3.classList.remove('img-on')

    }
}


function notionCollaps4 (){
    if (!eleBottomNotion4.classList.contains("bottom-on")){
        eleBottomNotion4.classList.add('bottom-on')
        elePBottomNotion4.classList.add('p-on')
        eleSpanBottomNotion4.classList.add('span-on')
        eleImgBottomNotion4.classList.add('img-on')
    }else{
        eleBottomNotion4.classList.remove('bottom-on')
        elePBottomNotion4.classList.remove('p-on')
        eleSpanBottomNotion4.classList.remove('span-on')
        eleImgBottomNotion4.classList.remove('img-on')

    }
}


function notionCollaps5 (){
    if (!eleBottomNotion5.classList.contains("bottom-on")){
        eleBottomNotion5.classList.add('bottom-on')
        elePBottomNotion5.classList.add('p-on')
        eleSpanBottomNotion5.classList.add('span-on')
        eleImgBottomNotion5.classList.add('img-on')
    }else{
        eleBottomNotion5.classList.remove('bottom-on')
        elePBottomNotion5.classList.remove('p-on')
        eleSpanBottomNotion5.classList.remove('span-on')
        eleImgBottomNotion5.classList.remove('img-on')

    }
}


eleNotion2.addEventListener('click', notionCollaps2)
eleNotion3.addEventListener('click', notionCollaps3)
eleNotion4.addEventListener('click', notionCollaps4)
eleNotion5.addEventListener('click', notionCollaps5)


// Get form values
const email = document.getElementById('email');
const name = document.getElementById('name');
const telephone = document.getElementById('telephone');
const contact = document.getElementsByName('contact');
const sendMail = document.getElementById('tc');

const submit = document.getElementById('submit');


submit.addEventListener('click', function() {
    inviaRichiesta(sendMail, email, name, telephone, contact);
});

function inviaRichiesta(sendMail, email, name, telephone, contact) {

    if(sendMail.checked){

        //Test - Dati da inviare al backend
        const dati = {
            email: email.value,
            name: name.value,
            telephone: telephone.value,
            contact: contact[0].checked ? contact[0].value : contact[1].value,
            sendMail:sendMail.checked ? true : false
            
            // Aggiungi altre chiavi e valori secondo necessitÃ 
        };

        // Esegui la richiesta POST utilizzando Axios
        axios.post('http://mailer.future-plus.it/api/mail/createMail', dati, {
            method: 'POST',    
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'X-Frontend': 'didatticaallaperto',
            },
            body: JSON.stringify(dati)
            
        })
        .then(response => {
            console.log(response.data);
       
        })
        .catch(error => {
            console.error('Errore Axios:', error);
            console.error(error.response ? error.response.data.error : 'Errore sconosciuto'); 
            
            if (error.response && error.response.data.details) {
              console.error('Dettagli dell\'errore:', error.response.data.details);
            }
            // Restituisci un messaggio di errore
            return response('Errore interno del server', 500);
        });

    }else{
       console.log('errore: devi spuntare la checkbox');
    }
    email.value= ' ' 
    name.value= ' ' 
    telephone.value= ' ' 
 

}