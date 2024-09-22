document.addEventListener('DOMContentLoaded',()=>{
    const fullName = document.getElementById("full-name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const dateAndTime = document.getElementById("date-and-time");
    const sendForms = document.getElementById("send-forms");

    sendForms.addEventListener('click',(e)=>{
        e.preventDefault();

        //validation name
        if(fullName.value === ""){
            fullName.style.border="3px solid #ff0000";
            fullName.value="Campo vazio";

            setTimeout(() => {
                fullName.style.border="0";
                fullName.value="";
            }, 3000);
        }else{
            let fullNameValue = fullName.value;

            if(fullName.value.length < 4){
                fullName.style.border="3px solid #ff0000";
                fullName.value="Deve ter no mínimo 4 caracteres";

                setTimeout(() => {
                    fullName.style.border="0";
                    fullName.value=fullNameValue;
                }, 3000);
            }else if(fullName.value.length > 30){
                fullName.style.border="3px solid #ff0000";
                fullName.value="Deve ter no máximo 30 caracteres";

                setTimeout(() => {
                    fullName.style.border="0";
                    fullName.value=fullNameValue;
                }, 3000);
            }
        }

        //validation email
        if(!email.value.includes("@")){
            email.style.border="3px solid #ff0000";
            email.value="Não contém '@'";

            setTimeout(() => {
                email.style.border="0";
                email.value="";
            }, 3000);
        }else{
            let emailValue=email.value;

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
                console.log("Email válido");
            }else{
                email.style.border="3px solid #ff0000";
                email.value="Email inválido";

                setTimeout(() => {
                    email.style.border="0";
                    email.value=emailValue;
                }, 3000);
            }
        }

        //validation phone
        if(phone.value === ""){
            phone.style.border="3px solid #ff0000";
            phone.value="Campo vazio";

            setTimeout(() => {
                phone.style.border="0";
                phone.value="";
            }, 3000);
        }else if(phone.value.length !== 11){
            let phoneValue = phone.value;

            phone.style.border="3px solid #ff0000";
            phone.value="Formato deve ser 75992889592";

            setTimeout(() => {
                phone.style.border="0";
                phone.value=phoneValue;
            }, 3000);
        }

        //validation date and time
        if(dateAndTime.value === ""){
            dateAndTime.style.border="3px solid #ff0000";

            setTimeout(() => {
                dateAndTime.style.border="0";
            }, 3000);
        }else{
            formatterHourAndTime(dateAndTime.value);   
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

        ///validations

        return dayMarcation+"/"+mounthMarcation+"/"+yearMarcation+" às "+hourMarcation+":"+minutesMarcation;
    }
});