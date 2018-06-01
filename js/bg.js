function scAnim() {
    let bg = document.getElementById('bg');
    let bB = document.getElementById('bc_b');
    let sB = document.getElementById('sc_b');
    let divS = document.querySelectorAll('div.sc__button');

    for(let i = 0; i < bg.classList.length; i++){

        bg.classList.remove('bg_bc');
        bg.classList.remove('bg_bc_backdef');
    }

    if(bg.classList[1] == "bg_sc"){

        bg.classList.toggle('bg_sc_backdef');
        bB.classList.toggle('bc__button_disp');
        console.log('back');
    }

    else{

        bg.classList.toggle('bg_sc');
        bB.classList.toggle('bc__button_disp');

        console.log('switch')
    }

    console.log(bg.classList);
    // window.setInterval(function() {
    //     bg.classlist.toggle
    // })

    // bg.classList.toggle('bg_def');

    // if (bg.classList == 'bg_def'){
        
    //     bg.classList.remove('bg_def');
    //     // bg.classList.add('bg_sc');
    // }


}

function bcAnim() {
    let bc = document.getElementById('bg');
    let bB = document.getElementById('bc_b');
    let sB = document.getElementById('sc_b');
    let sB_C = sB.classList.item(0);
    let divS = document.querySelector('div.sc__button');


    // if(bc.classList[1] == "bg_sc"){
    //     bc.classList.remove("bc_sc");
    //     bc.classList.remove('bg_sc_backdef');
    // }

    // if(divS.style.display == 'initial'){
    //     divS.style.display = 'block';
    // }

    for(let i = 0; i < bc.classList.length; i++){

        bc.classList.remove('bg_sc');
        bc.classList.remove('bg_sc_backdef');
        // divS.style.display = 'initial';
    }

    if(bc.classList[1] == "bg_bc"){

        bc.classList.toggle('bg_bc_backdef');
        sB.classList.toggle('sc__button_disp');
        // divS.style.display = 'none;'
        // sB.classList.toggle('sc__button');

    }

    else{

        bc.classList.toggle('bg_bc');
        sB.classList.toggle('sc__button_disp');
        // divS.style.display = 'none';
        // sB.classList.toggle('sc__button');
    }



    // if(sB.style.display == 'block'){
    //     sB.style.display = 'none';
    // }
    // else{
    //     sB.style.display = 'block';
    // }


    // console.log(sB_C);

    // if(sB_C.style.display !== 'none'){
    //     sB_C.style.display === 'none';
    // }
    // else{
    //     sB_C.style.display === 'block';
    // }

    // console.log(bc.classList);
    // window.setInterval(function() {
    //     bg.classlist.toggle
    // })

    // bg.classList.toggle('bg_def');

    // if (bg.classList == 'bg_def'){
        
    //     bg.classList.remove('bg_def');
    //     // bg.classList.add('bg_sc');
    // }




}

// function buttonDisp() {
//     let bB = document.getElementById('bc_b');
//     let sB = document.getElementById('sc_b');
//     let bG = document.getElementById('bg');

//     for(let i = 0; i < bG.classList.length; i++){
//         if(bg.classList == 'bg_bc'){
//             sB.toggle().style.display = 'none';
//         }

//         if(bG.classList = 'bg_sc'){
//             bB.style.display = 'none'
//         }
//     }
    
// }