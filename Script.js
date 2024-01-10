// select buttons

const buttons = document.querySelectorAll('.button')

const body = document.querySelector('body')

buttons.forEach( button =>{
    //console.log(button)
    button.addEventListener('click', bg_ch=>{
        console.log(bg_ch.target);
        if (bg_ch.target.id === 'grey'){
            body.style.background = 'grey';
        }

        if (bg_ch.target.id === 'white'){
            body.style.backgroundColor = bg_ch.target.id;
        }

        if (bg_ch.target.id === 'blue'){
            body.style.backgroundColor = bg_ch.target.id;
        }

        if (bg_ch.target.id === 'yellow'){
            body.style.backgroundColor = bg_ch.target.id;
        }
    });
}
);