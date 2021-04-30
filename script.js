function contar(){
    let inicio = document.getElementById('inicio').value
    let fim = document.getElementById('fim').value
    let passo = document.getElementById('passo').value
    let res = document.getElementById('res')
    res.innerHTML = ' ' 
    res.style.color = 'black'
    res.style.fontSize = '20px'

    if(inicio.length === 0 || passo.length == 0 || fim.length == 0){
        res.style.fontSize = '15px'
        res.style.color = 'red'
        res.innerHTML = 'Você esqueceu de digitar algum valor. Verifique e tente novamente.'
    }
    else if(passo <= 0){
        res.style.fontSize = '15px'
        res.style.color = 'red'
        res.innerHTML = 'O passo não pode ser menor ou igual a 0. Tente novamente'
    }
    else{
        let i = Number(inicio)
        let f = Number(fim)
        let p = Number(passo)

        if(i < f){
            //crescente
            for(i; i <= f; i+=p){
                res.innerHTML += ` \u{1F449} ${i} `
            }
        }
        else{
            //decrescente
            for (i; i >= f; i-=p){
                res.innerHTML += ` \u{1F449} ${i} `
            }
        }
    }
}