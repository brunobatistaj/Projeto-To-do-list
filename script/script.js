let add = document.querySelector("#add")
let lista = document.querySelector("#txt")
let resposta = document.querySelector("#resp_box")
add.addEventListener("click", adicionar)

let myList = []

//funçoes
function adicionar(){
    //validação se tem algo digitado
    if(!lista.value){
        alert('Digite algo em sua lista!')
    }else{
        //array objeto
        myList.push({
            tarefa: lista.value,
            concluido: false
        })

        lista.value ="" //limpa input de txt
        showTask()//chama função que exibe lista
    }
}

//funão que exibe lista
function showTask(){
    let newItem = ''

    //vai em um item por vez e seleciona oq esta no vetor mylist
    myList.forEach((task, position) =>{
        newItem = newItem + `
        <div class="resp ${task.concluido && "check"}"> 
        <p>${task.tarefa}</p>
        <div id="icons">
            <span onclick="markCheck(${position})" id="done" class="material-symbols-outlined">
                done
                </span>
            <span onclick="clearBox(${position})" id="delete" class="material-symbols-outlined">
                close
            </span>
        </div>
        </div>`//classe de div resp tem estrutura de if  //add check se concluido for false e remove se true    
    })

    resposta.innerHTML = newItem
    //local storege armazena dados listados//json.stringfy transforma objeto mylist em string
    localStorage.setItem('itens', JSON.stringify(myList))
}

//função para criar classe check
function markCheck(position){
    myList[position].concluido = !myList[position].concluido//varia objeto concluido entre false or true

    showTask()//chama função que exibe lista
}


//função para deletar atividade
function clearBox(position){
    myList.splice(position, 1)//splice deleta de acordo com a posição e quantos itens a partir dessa posição
    
    showTask()//chama função que exibe lista
}

//função busca em local storage as tarefas
function chargeTask(){
    let localStorageitems = localStorage.getItem('itens')//pega item de localstorage
    
    //texta se te algo no banco
    if(localStorageitems){
    myList = JSON.parse(localStorageitems)//retoma o que era string para objeto e armazena no array
    showTask()//chama função que exibe lista
    }
}

//quando abrir lista ja carrega a função
chargeTask()


//função para enter ser clicavel
lista.addEventListener('keyup',function(event){
    //tecla 13 equivale a 'enter'
    if(event.keyCode === 13){
        //cancela outra possivel açao de enter
        event.preventDefault()
        add.click()
    }
})