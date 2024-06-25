function contato(){
    let nome = document.getElementById('txtNome')
    let email = document.getElementById('txtEmail')
    let num = document.getElementById('txtTel')

    if(isNaN(num.value)){
        alert('Erro! Só são permitidos números no campo "Telefone"!')
        nome.value = ''
        email.value = ''
        num.value = ''
        return
    }
    if(nome.value === ''){
        alert('Erro! Um ou mais campos não estão preenchidos')
    }else if(email.value === ''){
        alert('Erro! Um ou mais campos não estão preenchidos')
    }else if(num.value === ''){
        alert('Erro! Um ou mais campos não estão preenchidos')
    }else{
        alert(`Obrigado por entrar em contato conosco! Em breve nossa equipe retornara o contato via email cadastrado!`)
        nome.value = ''
        email.value = ''
        num.value = ''
    }
   
} 

function avaliacao(){
    let nome = document.getElementById('txtNome')
    let email = document.getElementById('txtEmail')
    let num = document.getElementById('txtTel')
    let avaliacao = document.getElementById('star')

    if(isNaN(num.value)){
        alert('Erro! Só são permitidos números no campo "Telefone"!')
        nome.value = ''
        email.value = ''
        num.value = ''
        return
    }
    if(nome.value === ''){
        alert('Erro! Um ou mais campos não estão preenchidos')
    }else if(email.value === ''){
        alert('Erro! Um ou mais campos não estão preenchidos')
    }else if(num.value === ''){
        alert('Erro! Um ou mais campos não estão preenchidos')
    }else{
        alert('Agradecemos sua avaliação! Estamos sempre em busca de trazer o melhor para nossos clientes!')
        nome.value = ''
        email.value = ''
        num.value = ''
        avaliacao.value = 'star01'
    }
}

function menu(){
    let nav = document.getElementById('navbar')

    if (!nav.style.left) {
        nav.style.left = '-100px';
    }
    
    if (nav.style.left === '-100px') {
        nav.style.left = '0px';
    } else {
        nav.style.left = '-100px';
    }
   
}
