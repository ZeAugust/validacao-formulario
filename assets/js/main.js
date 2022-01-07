class Form{
    constructor(){
        this.form = document.querySelector('.form');
        this.name = document.querySelector('#name');
        this.sirname = document.querySelector('#sirname');
        this.cpf = document.querySelector('#cpf');
        this.user = document.querySelector('#user');
        this.password = document.querySelector('#password');
        this.confirmpassword = document.querySelector('#confirmpassword');
        this.submitbtn = document.querySelector('#submitbtn');

        this.validationEventBySubmit();

    }

    validationEventBySubmit(){
        this.form.addEventListener('submit', e => {this.handleSubmit(e);});
    }

    handleSubmit(e){
        e.preventDefault();
        this.validationProcess();
    }

    validationProcess(){
        
        const el = document.querySelectorAll(".errorMensage")
        for(let element of el){
            element.remove();
        }
        
        this.emptyFildValidation();
        this.cpfFildValidation();
        this.userValidation();
        this.passwordValidation();
        

        

       if(this.passwordValidation() && this.userValidation() && this.cpfFildValidation() && this.emptyFildValidation()){
           alert('Formulário enviado!')
       }
    }


    emptyFildValidation(){
        const fildVet = [[this.name, "Name"], [this.sirname, "Sobrenome"], [this.cpf, "CPF"], [this.user, "Usuário"], [this.password, "Senha"], [ this.confirmpassword, "Confirmar senha"]]

        for (let i = 0; i <= fildVet.length - 1; i++){
            if(fildVet[i][0].value === ''){  
                const emptyFildErrorFrase = document.createElement('p');
                emptyFildErrorFrase.setAttribute("class", "errorMensage");
                emptyFildErrorFrase.innerText = `Campo "${fildVet[i][1]}" não pode estar vazio`;
                emptyFildErrorFrase.style.color = "red";
                emptyFildErrorFrase.style.fontSize = "0.8rem"
                fildVet[i][0].insertAdjacentElement('afterend', emptyFildErrorFrase);

                return false;
            }       
        }
        return true
    }

    cpfFildValidation(){
        const cpfValidationResult = new CPF(this.cpf.value);
        
        if(cpfValidationResult.validationProcess() === false){

            const ErrorMensage = document.createElement('p');
            ErrorMensage.setAttribute("class", "errorMensage");
            ErrorMensage.innerText = `O CPF inderido é inválido`;
            ErrorMensage.style.color = "red";
            ErrorMensage.style.fontSize = "0.8rem"
            this.cpf.insertAdjacentElement('afterend', ErrorMensage);

            return false;
        }
        return true
    }

    userValidation(){
        if(this.user.value.length < 3 || this.user.value.length > 12){

            const ErrorMensage = document.createElement('p');
            ErrorMensage.setAttribute("class", "errorMensage");
            ErrorMensage.innerText = `O nome de usuário deve conter entre 3 e 12 caracteres`;
            ErrorMensage.style.color = "red";
            ErrorMensage.style.fontSize = "0.8rem"
            this.user.insertAdjacentElement('afterend', ErrorMensage);

            return false;
        }

        if(!this.user.value.match(/^[a-zA-Z0-9]+$/g)){

            const ErrorMensage = document.createElement('p');
            ErrorMensage.setAttribute("class", "errorMensage");
            ErrorMensage.innerText = `O nome de usuário deve conter apenas letras e/ou números`;
            ErrorMensage.style.color = "red";
            ErrorMensage.style.fontSize = "0.8rem"
            this.user.insertAdjacentElement('afterend', ErrorMensage);

            return false;
        }
        return true
    }

    passwordValidation(){
        if(this.password.value != this.confirmpassword.value){
            const ErrorMensage = document.createElement('p');
            ErrorMensage.setAttribute("class", "errorMensage");
            ErrorMensage.innerText = `As senhas precisam ser iguais`;
            ErrorMensage.style.color = "red";
            ErrorMensage.style.fontSize = "0.8rem"
            this.confirmpassword.insertAdjacentElement('afterend', ErrorMensage);

            return false;
        }

        if(this.password.value.length < 6 || this.password.value.length > 12){
            const ErrorMensage = document.createElement('p');
            ErrorMensage.setAttribute("class", "errorMensage");
            ErrorMensage.innerText = `A senha precisa conter entre 3 e 12 caracteres`;
            ErrorMensage.style.color = "red";
            ErrorMensage.style.fontSize = "0.8rem"
            this.password.insertAdjacentElement('afterend', ErrorMensage);

            return false
        }
        return true
    } 
}

const formulario = new Form();
