const eleNotion = document.querySelector('.n1');
const eleBottomNotion = document.querySelector('.bottom-1');
const elePBottomNotion = document.querySelector('.p-n-1');
const eleSpanBottomNotion = document.querySelector('.span-n-1');
const eleImgBottomNotion = document.querySelector('.img-n-1');


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






function notionCollaps1 (){
    if (!eleBottomNotion.classList.contains("bottom-on")){
        eleBottomNotion.classList.add('bottom-on')
        elePBottomNotion.classList.add('p-on')
        eleSpanBottomNotion.classList.add('span-on')
        eleImgBottomNotion.classList.add('img-on')
    }else{
        eleBottomNotion.classList.remove('bottom-on')
        elePBottomNotion.classList.remove('p-on')
        eleSpanBottomNotion.classList.remove('span-on')
        eleImgBottomNotion.classList.remove('img-on')

    }
}



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

eleNotion.addEventListener('click', notionCollaps1)
eleNotion2.addEventListener('click', notionCollaps2)
eleNotion3.addEventListener('click', notionCollaps3)
eleNotion4.addEventListener('click', notionCollaps4)
eleNotion5.addEventListener('click', notionCollaps5)
