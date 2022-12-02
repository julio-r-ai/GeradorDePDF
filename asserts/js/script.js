const {default: jsPDF} = require("jspdf");

function converterImagem(){ //função convertaer imagem

    //imprime o tamanho do arquivo
    let receberArquivo =  document.querySelector("#imagem").files; 

    //imprime os dados sobre o arquivos
    if(receberArquivo.length > 0){ 
        let carregarImagem = receberArquivo[0]; 
        
       let arquivoLer = new FileReader();

        arquivoLer.onload = function(arquivoCarregadoEvento){
            let imagemBase64 = arquivoCarregadoEvento.target.result;

            let doc = new jsPDF();

            doc.text('pdfGerado', 15, 20);

            doc.addImage(imagemBase64, 'JPEG', 15, 40, 300, 157);

            doc.save('julio.pdf')

        }
        
        arquivoLer.readAsDataURL(carregarImagem);

    };

};