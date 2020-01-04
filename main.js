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

}