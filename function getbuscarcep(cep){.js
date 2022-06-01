function getbuscarcep(cep){

    let url ='http://viacep.com.br/ws/${cep}/json/';
    let xmlHttp = new xmlHttpRequest();
    xmlHttp.open("Get", url, true);

    xmlHttp.onreadystatechange = function(){
        if(xmlHttp.readyState == 4 && xmlHttp.status == 200) {

            let dados = xmlHttp.responseText;
            let dadosJSON = JSON.parse(dados);

            document.getElementById("logradouro").value = dadosJSON.logradouro;
            document.getElementById("bairro").value = dadosJSON.bairoo;
            document.getElementById("cidade").value = dadosJSON.localidade;
            document.getElementById("uf").value = dadosJSON.uf;
        }

        
    }
    xmlHttp.sen()
}