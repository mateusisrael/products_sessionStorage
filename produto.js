window.onload = ativarSessionStorage;



function getProduto() {
    let produto_uri =  window.location.href;
    let produto_img_uri = document.querySelector(".produto-img").src;
    let produto_nome = document.querySelector(".produto-name").innerHTML;


    addProdutoVizualizados(produto_nome, produto_uri, produto_img_uri);
}


function addProdutoVizualizados(nome, uri, img) {
    let vizualizados_recentemente = JSON.parse(sessionStorage.getItem("vizualizados_recentemente"));
    let produto = {nome: nome, uri: uri, img: img};

    console.log('3 vizualizados:', vizualizados_recentemente.length);

    
    if(vizualizados_recentemente.length !== 0) {

        for(let i = 0; i < 11; i++) {
            console.log(i);

            console.log(vizualizados_recentemente[i].nome);
            
            if(vizualizados_recentemente[i].nome === produto.nome) {
                console.log("Esse produto já está na lista");

            } else if(vizualizados_recentemente[i].nome !== produto.nome) {
                vizualizados_recentemente.push(produto);
                vizualizados_recentemente = JSON.stringify(vizualizados_recentemente);
                sessionStorage.setItem("vizualizados_recentemente", vizualizados_recentemente);
                console.log("Novo produto adicionado");
                break;
            }
        }


            


            
        
    } else {
        vizualizados_recentemente.push(produto);
        vizualizados_recentemente = JSON.stringify(vizualizados_recentemente);
        sessionStorage.setItem("vizualizados_recentemente", vizualizados_recentemente);
        console.log("Novo produto adicionado 2");
    }
}



function ativarSessionStorage() {

    if(sessionStorage.getItem("vizualizados_recentemente")) {
        getProduto();
    } else {
        sessionStorage.setItem("vizualizados_recentemente", "[]");
        console.log("vizualizados_recentement ativo agora.");
    }
}
