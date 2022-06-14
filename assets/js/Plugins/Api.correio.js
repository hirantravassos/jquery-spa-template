function GetCorreioAdress(cep){  
    console.log(cep.length);
    if (cep.length == 9) {
        $.getJSON("https://viacep.com.br/ws/"+ cep.replace("-","") +"/json/", function(address) {
            
            if (address.erro) {
                $("#cep").animate({left:'10px'},"fast");
                $("#cep").animate({left:'10px'},"fast");
            } else {
                $("#street").val(address.logradouro);
                $("#district").val(address.bairro);
                $("#city").val(address.localidade);
                $("#uf").val(address.uf);
            };
        });
    } else {
        $("#street").val("");
        $("#district").val("");
        $("#city").val("");
        $("#uf").val("");
    };
}