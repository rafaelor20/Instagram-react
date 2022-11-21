export{updateNome, updateFoto}

function updateNome(str ,msg){
    const newStr = prompt(msg);
    if (newStr === null || newStr.length < 1){
        return str.nome;
    } else {
        return newStr;
    }
}

function updateFoto(str ,msg){
    const newStr = prompt(msg);
    if (newStr === null || newStr.length < 1){
        return str.foto;
    } else {
        return newStr;
    }
}