export default{
    async showFragmentQueryList(query){
        const ws = new Worker("storage/wsPokemon.js", {type:"module"});
        ws.postMessage({ module: "showQueryPokemon", data: query});

        ws.addEventListener("message", (e)=>{
            document.querySelector("#tableBody").innerHTML = e.data;
            ws.terminate();
        });        
    },
    
/* 
    async showFragmentList(){
        const ws = new Worker("storage/wsPokemon.js", {type:"module"});
        ws.postMessage({ module: "showListPokemon", data: ""});

        ws.addEventListener("message", (e)=>{
            document.querySelector("#tableBody").innerHTML = e.data;
            ws.terminate();
        });        
    }
 */



}