window.onload = ativarSessionStorage();
function ativarSessionStorage() {

    if(sessionStorage.getItem("vizualizados_recentemente")) {
        getProduto();
    } else {
        sessionStorage.setItem("vizualizados_recentemente", "[]");
        getProduto();
        console.log("vizualizados_recentement ativo agora.");
    }
}


function getProduto() {
    let produto_uri =  window.location.href;
    let produto_img_uri = document.querySelector(".cloudzoom").src;
    let produto_nome = document.querySelector(".name").innerHTML;
    addProdutoVizualizados(produto_nome, produto_uri, produto_img_uri);
}


function addProdutoVizualizados(nome, uri, img) {
    let vizualizados_recentemente = JSON.parse(sessionStorage.getItem("vizualizados_recentemente"));
    let produto = { nome: nome, uri: uri, img: img };
    let produto_na_lista = false;
    if(vizualizados_recentemente.length !== 0) {

        for(let i in vizualizados_recentemente) {
            
            if(vizualizados_recentemente[i].nome === produto.nome) {
                produto_na_lista = true;
                console.log("checando disponibilidade");
                break;

            } else if(vizualizados_recentemente[i].nome !== produto.nome) {
                produto_na_lista = false;
                console.log("checando disponibilidade");

                
            }
        }

        if(produto_na_lista) {
            console.log("Esse produto já está na lista");
        } else if(!produto_na_lista) {
            vizualizados_recentemente.push(produto);
            vizualizados_recentemente = JSON.stringify(vizualizados_recentemente);
            sessionStorage.setItem("vizualizados_recentemente", vizualizados_recentemente);
            console.log("Novo produto adicionado");
        }
            

    } else {
        vizualizados_recentemente.push(produto);
        vizualizados_recentemente = JSON.stringify(vizualizados_recentemente);
        sessionStorage.setItem("vizualizados_recentemente", vizualizados_recentemente);
        console.log("Novo produto adicionado 2");
    }
}

if(sessionStorage.getItem("vizualizados_recentemente") !== "null") {
    let vizualizados_recentemente = JSON.parse(sessionStorage.getItem("vizualizados_recentemente"));
    let bgGeral = document.querySelector(".bgGeral");
    let cVizualizados = document.createElement("div");
        cVizualizados.setAttribute("id", "cVizualizados");
        cVizualizados.setAttribute("class", "cVizualizados");
        /*
        vizualizados_recentemente.length <= 5 ? cVizualizados.setAttribute("class", "cVizualizados") :
                                                cVizualizados.setAttribute("class", "caroselcVizualizados");
        */

    bgGeral.appendChild(cVizualizados);


    for(let i in vizualizados_recentemente) {

        cVizualizados.innerHTML = cVizualizados.innerHTML +
        `<a href="${vizualizados_recentemente[i].uri}">
        <div class="produto-vizualizado">
           <img src="${vizualizados_recentemente[i].img}" alt="" class="produto-vizualizado-img">
           <p class="produto-vizualizado-nome">${vizualizados_recentemente[i].nome}</p>
        </div>
        </a>`;
    }
}
