function converterImagem(){ //função convertaer imagem

    //imprime o tamanho do arquivo
    let receberArquivo =  document.querySelector("#imagem").files;
    console.log(receberArquivo); 

    //imprime os dados sobre o arquivos
    if(receberArquivo.length > 0){ 
        let carregarImagem = receberArquivo[0];
        console.log(carregarImagem);  
        
        let lerArquivo = new FileReader();

        
    };

};