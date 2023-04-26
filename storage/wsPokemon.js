import getPokemon from "../api.js";

let wsPokemon ={
    showQueryPokemon: async ()=>{
        let data = await getPokemon();   
        let html = "";

        data.forEach(element => {
            
                html += `
                <tr>
                    <td>
                        <p id="idPokemon" data-pokemon="${element.url}">${element.name.toUpperCase()}<p/>
                    </td>
                </tr>
                `;
            
        });
        return html;    
    },


 /*    showListPokemon: async () =>{
        let data = await getPokemon();   
        let html = "";

        data.forEach(element => {            
                html += `
                <tr>
                    <td><a href="${element.url}">${element.name.toUpperCase()}</a></td>
                </tr>
                `;            
        });
        return html;  
    } */

    
};

self.addEventListener("message", async(e) =>{

    postMessage(await wsPokemon[`${e.data.module}`](e.data.data))
})