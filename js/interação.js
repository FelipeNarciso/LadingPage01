function contato(){
    let nome = document.getElementById('txtNome')
    let email = document.getElementById('txtEmail')
    let num = document.getElementById('txtTel')

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