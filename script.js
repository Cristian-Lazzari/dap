
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






let elename = document.querySelector('#name')
let elephone = document.querySelector('#phone')
let eleemail = document.querySelector('#email')
let elemethod = document.querySelector('#method')
let eletc = document.querySelector('#tc')
let error = document.querySelector('.error')
let elesubmit = document.querySelector('#submit')

let elename2 = document.querySelector('#name2')
let elephone2 = document.querySelector('#phone2')
let eleemail2 = document.querySelector('#email2')
let elemessage = document.querySelector('#message')
let elemethod2 = document.querySelector('#method2')
let eletc2 = document.querySelector('#tc2')
let error2 = document.querySelector('.error2')
let elesubmit2 = document.querySelector('#submit2')

let elebannerSuccess = document.querySelector('#bannerSuccess')
let elebannerDanger = document.querySelector('#bannerDanger')
let eleclose = document.querySelector('#closemail')


function sendFirstMail(){

    error.innerHTML = ' '
    let valid = true;
    let errors = [];
    if(!elename.value){
        valid = false
        errors.push('Inserisci il nome')
    }
    if(!elephone.value){
        valid = false
        errors.push('Inserisci il Numero di telefono')
    }
    if(!eleemail.value){
        valid = false
        errors.push('Inserisci una Email valida')
    }
    if(!elemethod.value){
        valid = false
        errors.push('Scegli come essere contattato')
    }
    if(!eletc.checked){
        valid = false
        errors.push('Accetta termini condizioni')
    }

    if(!valid){
        errors.forEach(element => {
            error.innerHTML+=`<li>${element}</li>`
            
        });
    }else{
        
        let dati = {
            'name' : elename.value,
            'phone' : elephone.value,
            'email' : eleemail.value,
            'method' : elemethod.value,
            'message' : 'none',
            'tc' : eletc.value,
        }

        axios.post('https://dashboard-ce.future-plus.it/api/contacts/mailFirst', dati, {
            method: 'POST',    

            body: dati
            
        })
        .then(response => {
            console.log(response.data);
            let success = response.data.success
            if(success == true){
                elebannerSuccess.classList.add('bannerOn')
                elename.value = ''
                elephone.value = ''
                eleemail.value = ''
                elemethod.value = ''
                eletc.value = ''
            }else{
                elebannerDanger.classList.add('bannerOn')
            }
        
        })
    }
}
function sendFirstMail2(){
    error2.innerHTML = ' '
    let valid = true;
    let errors = [];
    if(!elename2.value){
        valid = false
        errors.push('Inserisci il nome')
    }
    if(!elephone2.value){
        valid = false
        errors.push('Inserisci il Numero di telefono')
    }
    if(!eleemail2.value){
        valid = false
        errors.push('Inserisci una Email valida')
    }
    if(!elemethod2.value){
        valid = false
        errors.push('Scegli come essere contattato')
    }
    if(!eletc2.checked){
        valid = false
        errors.push('Accetta termini condizioni')
    }

    if(!valid){
        errors.forEach(element => {
            error2.innerHTML+=`<li>${element}</li>`
            
        });
    }else{
        
        let dati = {
            'name' : elename2.value,
            'phone' : elephone2.value,
            'email' : eleemail2.value,
            'method' : elemethod2.value,
            'message' : elemessage.value,
            'tc' : eletc2.value,
        }
        console.log(dati)

        axios.post('https://dashboard-ce.future-plus.it/api/contacts/mailFirst', dati, {
            method: 'POST',    

            body: dati
            
        })
        .then(response => {
            console.log(response.data);
            let success = response.data.success
            if(success == true){
                elebannerSuccess.classList.add('bannerOn')
                elename2.value = ''
                elephone2.value = ''
                eleemail2.value = ''
                elemethod2.value = ''
                elemessage.value = ''
                eletc2.value = ''
            }else{
                elebannerDanger.classList.add('bannerOn')
            }
        
        })
    } 
}
    


elesubmit.addEventListener('click', sendFirstMail);
elesubmit2.addEventListener('click', sendFirstMail2);
eleclose.addEventListener('click', function(){
    elebannerDanger.classList.remove('bannerOn')
    elebannerSuccess.classList.remove('bannerOn')
});