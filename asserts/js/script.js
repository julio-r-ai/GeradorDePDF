const {default: jsPDF} = require("jspdf");

function converterImagem(){ //função convertaer imagem

    //imprime o tamanho do arquivo
    let receberArquivo =  document.querySelector("#imagem").files;
    console.log(receberArquivo); 

    //imprime os dados sobre o arquivos
    if(receberArquivo.length > 0){ 
        let carregarImagem = receberArquivo[0];
        console.log(carregarImagem);  
        
       let arquivoLer = new FileReader();

        arquivoLer.onload = function(arquivoCarregadoEvento){
            let srcDados = arquivoCarregadoEvento.target.result;
            console.log(srcDados);  
        }
        let doc = new jsPDF();

        doc.text('arquivoEmPDF');
        doc.addImage();

    };

};