document.addEventListener('DOMContentLoaded',()=>{
    const fullName = document.getElementById("full-name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const dateAndTime = document.getElementById("date-and-time");
    const sendForms = document.getElementById("send-forms");

    const callback = document.getElementById("callback");
    const errorCallback = document.getElementById("error-callback");
    const successCallback = document.getElementById("success-callback");

    sendForms.addEventListener('click',(e)=>{
        e.preventDefault();
        let fullNameValue = fullName.value;
        let emailValue=email.value;
        let phoneValue = phone.value;
        let exitError=0;

        //validation name
        if(fullName.value === ""){
            fullName.style.border="2px solid #ff0000";
            fullName.value="Campo vazio";
            callback.style.display="block";
            errorCallback.style.display="block";
            errorCallback.textContent="Campo vazio";
            exitError=1;

            setTimeout(() => {
                fullName.style.border="0";
                fullName.value="";
                callback.style.display="none";
                errorCallback.style.display="none";

                return;
            }, 5000);
        }else {
            if(fullName.value.length < 4){
                fullName.style.border="2px solid #ff0000";
                fullName.value="Deve ter no mínimo 4 caracteres";
                callback.style.display="block";
                errorCallback.style.display="block";
                errorCallback.textContent="Nome deve ter no mínimo 4 caracteres";
                exitError=1;

                setTimeout(() => {
                    fullName.style.border="0";
                    fullName.value=fullNameValue;
                    callback.style.display="none";
                    errorCallback.style.display="none";

                    return;
                }, 5000);
        
            } 
            
            if(fullName.value.length > 30){
                fullName.style.border="2px solid #ff0000";
                fullName.value="Deve ter no máximo 30 caracteres";
                callback.style.display="block";
                errorCallback.style.display="block";
                errorCallback.textContent="Nome deve ter no máximo 30 caracteres";
                exitError=1;

                setTimeout(() => {
                    fullName.style.border="0";
                    fullName.value=fullNameValue;
                    callback.style.display="none";
                    errorCallback.style.display="none";

                    return;
                }, 5000);
            }
        }

        //validation email
        if(!email.value.includes("@")){
            email.style.border="2px solid #ff0000";
            email.value="Não contém '@'";
            callback.style.display="block";
            errorCallback.style.display="block";
            errorCallback.textContent="Email não contém @";
            exitError=1;

            setTimeout(() => {
                email.style.border="0";
                email.value="";
                callback.style.display="none";
                errorCallback.style.display="none";

                return;
            }, 5000);
        }
        
        if(
            email.value.includes("gmail.com") || 
            email.value.includes("gmail.com.br") || 
            email.value.includes("hotmail.com") || 
            email.value.includes("email.com") || 
            email.value.includes("yahoo.com") || 
            email.value.includes("yahoo.com.br") || 
            email.value.includes("bol.com.br") || 
            email.value.includes("uol.com.br") || 
            email.value.includes("terra.com.br") || 
            email.value.includes("ig.com.br") || 
            email.value.includes("r7.com") || 
            email.value.includes("outlook.com") || 
            email.value.includes("outlook.com.br") || 
            email.value.includes("live.com") || 
            email.value.includes("live.com.br")
        ){
            exitError=0;
            console.log("Email válido");
        }else{
            email.style.border="2px solid #ff0000";
            email.value="Email inválido";
            callback.style.display="block";
            errorCallback.style.display="block";
            errorCallback.textContent="Email inválido";
            exitError=1;

            setTimeout(() => {
                email.style.border="0";
                email.value=emailValue;
                callback.style.display="none";
                errorCallback.style.display="none";

                return;
            }, 5000);
        }
        
        //validation phone
        if(phone.value.length === 0){
            console.log("phone vazio");
            phone.style.border="2px solid #ff0000";
            phone.value="Campo vazio";
            callback.style.display="block";
            errorCallback.style.display="block";
            errorCallback.textContent="Telefone vazio";
            exitError=1;

            setTimeout(() => {
                phone.style.border="0";
                phone.value="";
                callback.style.display="none";
                errorCallback.style.display="none";

                return;
            }, 5000);
        }else if(phone.value.length !== 11){
            console.log("phone diferente de 11");

            phone.style.border="2px solid #ff0000";
            phone.value="Formato deve ser 75992889592";
            callback.style.display="block";
            errorCallback.style.display="block";
            errorCallback.textContent="Formato do telefone deve ser 75992889592";
            exitError=1;

            setTimeout(() => {
                phone.style.border="0";
                phone.value=phoneValue;
                callback.style.display="none";
                errorCallback.style.display="none";

                return;
            }, 5000);
        }
        
        //validation date and time
        if(dateAndTime.value === ""){
            dateAndTime.style.border="2px solid #ff0000";
            callback.style.display="block";
            errorCallback.style.display="block";
            errorCallback.textContent="Data e Hora vazia";
            exitError=1;

            setTimeout(() => {
                dateAndTime.style.border="0";
                callback.style.display="none";
                errorCallback.style.display="none";

                return;
            }, 5000);
        }else if(dateAndTime.value !== ""){
            formatterHourAndTime(dateAndTime.value);   
        }

        if(exitError === 1){
            console.log("Error exit 1");   
        }else{
            verifyForm(fullName.value,email.value,phone.value,formatterHourAndTime(dateAndTime.value));
        }

    });

    function formatterHourAndTime(hourAndTime){
        let dateFull = hourAndTime.slice(0,-6);
        let dateFullDivide = dateFull.split("-");
        let yearMarcation = dateFullDivide[0];
        let mounthMarcation = dateFullDivide[1];
        let dayMarcation = dateFullDivide[2];

        let hourFull = hourAndTime.slice(hourAndTime.indexOf("T") + 1);
        let hourFullDivide = hourFull.split(":");
        let hourMarcation = hourFullDivide[0];
        let minutesMarcation = hourFullDivide[1];

        let yearActual = new Date().getFullYear();

        ///validations
        if(yearMarcation !== yearActual && (yearActual - yearMarcation) !== 1 && mounthMarcation !== 12){
            callback.style.display="block";
            errorCallback.style.display="block";
            errorCallback.value="Ano muito alto ou baixo para marcação";
            exitError=1;

            ///settimeout
        }

        return dayMarcation+"/"+mounthMarcation+"/"+yearMarcation+" às "+hourMarcation+":"+minutesMarcation;
    }

    function verifyForm(fullNameForm,emailForm,phoneForm,dateTimeForm){
        let message = `Olá,meu%20nome%20é%20${fullNameForm},meu%20email%20para%20contato%20é%20${emailForm},%20desejo%20marcar%20o%20horário%20a%20seguir%20na%20sua%20barbearia,%20${dateTimeForm}, ele está disponível?`;

        let phone = `55${phoneForm}`;

        callback.style.display="block";
        successCallback.style.display="block";
        successCallback.value="Marcação sendo processada..."

        setTimeout(() => {
            callback.style.display="none";
            successCallback.style.display="none";

            window.location.href=`https://api.whatsapp.com/send?phone=${phone}&text=${message}`;
        }, 3000);
    }
});