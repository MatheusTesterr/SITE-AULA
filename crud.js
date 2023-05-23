document.querySelector("#salvar").addEventListener("click", cadastrar)
document.querySelector("#cancelar").addEventListener("click", cancelar)

let lista_tarefas = []

window.addEventListener("load", () => {
    const tarefas = JSON.parse(localStorage.getItem("lista_tarefas"))
    tarefas.forEach((tarefa) => {
        document.querySelector("#tarefas").innerHTML += gerarCard(tarefa)
    })
})

function cancelar(){
    document.querySelector("#titulo").value = ""
    document.querySelector("#descricao").value = ""
    document.querySelector("#categoria").value = "Categoria"
}

function cadastrar(){
    const modal = bootstrap.Modal.getInstance(document.querySelector("#exampleModal"))
    let titulo = document.querySelector("#titulo").value
    let descricao = document.querySelector("#descricao").value
    let categoria = document.querySelector("#categoria").value

    const tarefa = {
        titulo,
        descricao,
        categoria,
    }

    if (tarefa.titulo.length == 0){
        document.querySelector("#titulo").classList.add("is-invalid")
        return
    }

    lista_tarefas.push(tarefa)

    document.querySelector("#tarefas").innerHTML += gerarCard(tarefa)

    document.querySelector("#titulo").value = ""
    document.querySelector("#descricao").value = ""
    document.querySelector("#categoria").value = "Categoria"

    localStorage.setItem("lista_tarefas", JSON.stringify(lista_tarefas))

    modal.hide()

}

function apagar(id){
lista_tarefas.filter(() => {
    return tarefa.id != id 
})
salvar()
}

function gerarCard(tarefa){
    return `<div class="col-12 col-md-6 col-lg-3">
    <div class="card">
        <div class="card-header">
            ${tarefa.titulo}
        </div>
        <div class="card-body">
            <p class="card-text">${tarefa.descricao}</p>
            <p>
                <span class="badge text-bg-warning">${tarefa.categoria}</span>
            </p>
            <a href="#" class="btn btn-success">
                <i class="bi bi-check-lg"></i>
            </a>
            </a>
            <a href="#" onClick="apagar(${tarefa.id})" class="btn btn-danger" title="apagar tarefa">
                <i class="bi bi-trash3"></i>
            </a>
        </div>
    </div> <!-- card -->
</div> <!-- col -->
`
}