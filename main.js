let  cont_vizualizados = document.querySelector(".vizualizados");
window.onload = vizualizadosRecentemente;

function ativarSessionStorage() {

    if(sessionStorage.getItem("vizualizados_recentemente")) {
        console.log("vizualizados_recentement já ativo");
    } else {
        sessionStorage.setItem("vizualizados_recentemente", "[]");
        console.log("vizualizados_recentement ativo agora.");
    }
}

ativarSessionStorage();


function vizualizadosRecentemente() {
    if(sessionStorage.getItem("vizualizados_recentemente") !== "null") {
        let vizualizados_recentemente = JSON.parse(sessionStorage.getItem("vizualizados_recentemente"));
        let cVizualizados = document.querySelector("#cVizualizados");


        for(let i in vizualizados_recentemente) {

            cVizualizados.innerHTML = cVizualizados.innerHTML +
            `<a href="${vizualizados_recentemente[i].uri}">
            <div class="produto">
               <img src="${vizualizados_recentemente[i].img}" alt="" class="produto-img">
               <h2 class="produto-name">${vizualizados_recentemente[i].nome}</h2>
            </div>
            </a>`;
        }
    }
}