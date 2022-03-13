const item = document.querySelector('.items') 

item.addEventListener('click', e=>{
    if(e.target.classList.contains('plus')){
        let counter = Math.floor(e.target.nextElementSibling.textContent++)
        let price = Math.floor(e.target.nextElementSibling.nextElementSibling.nextElementSibling.textContent)
        total = price*(counter+1)
        let text = `${total}`
        e.target.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML=text
        
    }
    if(e.target.classList.contains('minus')){
        if(e.target.previousElementSibling.textContent>1){
            let counter = Math.floor(e.target.previousElementSibling.textContent--)
            let price = Math.floor(e.target.nextElementSibling.textContent)
            total = price*(counter-1)
            let text = `${total}`
            e.target.nextElementSibling.nextElementSibling.innerHTML=text
        }
    }

    if(e.target.classList.contains('exx')){
       e.target.parentNode.parentNode.setAttribute('class', 'noshow')
    }
})


