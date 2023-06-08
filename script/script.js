let add = document.querySelector("#add")
add.addEventListener("click", adicionar)
let resposta = document.querySelector("#resp_box")
let lista = document.querySelector("#txt")


function adicionar(){
    let checkTxt = lista.value

    //validação
    if(!checkTxt){
        alert('Digite algo em sua lista!')
    }//else if(){}
    else{
        let newItem = 
        `<div id="resp">
            <p>${checkTxt}</p>
            <div id="icons">
            <span onclick="marcar()" id="done" class="material-symbols-outlined">
                done
                </span>
            <span id="delete" class="material-symbols-outlined">
                close
            </span>
            </div>
        </div>`

        resposta.innerHTML += newItem
        lista.value = ''
        lista.focus()
    }
}




    
    



lista.addEventListener('keyup',function(event){
    //tecla 13 equivale a 'enter'
    if(event.keyCode === 13){
        //cancela outra possivel açao de enter
        event.preventDefault()
        add.click()
    }
})