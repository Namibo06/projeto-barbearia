document.addEventListener('DOMContentLoaded',()=>{
    const commentTitle = document.getElementById("comment-title");
    const row1 = document.getElementById("row1");
    const row2 = document.getElementById("row2");
    const row3 = document.getElementById("row3");
    const buttonLeft = document.getElementById("button-left");
    const buttonRight = document.getElementById("button-right");
    const commentName = document.getElementById("comment-name");

    row1Active();
    
    row1.addEventListener('click',()=>{
        row1Active();
    });

    row2.addEventListener('click',()=>{
        row2Active();
    });

    row3.addEventListener('click',()=>{
        row3Active();
    });

    buttonLeft.addEventListener('click',()=>{
        if(row1.style.width === "36px"){
            row3Active();
        }

        else if(row2.style.width === "36px"){
            row1Active();
        }

        else if(row3.style.width === "36px"){
            row2Active();
        }
    });

    buttonRight.addEventListener('click',()=>{
        if(row1.style.width === "36px"){
            row2Active();
        }

        else if(row2.style.width === "36px"){
            row3Active();
        }

        else if(row3.style.width === "36px"){
            row1Active();
        }
    });

    function row1Active(){
        row2.style.backgroundColor="#e6e6e6";
        row2.style.width="26px";
        row3.style.backgroundColor="#e6e6e6";
        row3.style.width="26px";

        row1.style.backgroundColor="#000000dc";
        row1.style.width="36px";
        commentTitle.textContent="Corto meu cabelo na BarbX desde a inauguração do estabelecimento e não me arrependo, já trouxe toda a família pra cortar aqui, e se puder espalho pra todos que conseguir, pois e uma experiência totalmente diferente e única, vão aproveitem.";
        commentName.textContent="Joca";
    }

    function row2Active(){
        row1.style.backgroundColor="#e6e6e6";
        row1.style.width="26px";
        row3.style.backgroundColor="#e6e6e6";
        row3.style.width="26px";

        row2.style.backgroundColor="#000000dc";
        row2.style.width="36px";
        commentTitle.textContent="Gostei muito de quando cortei cabelo aí, primeiramente fui muito bem recebido, me ofereceram doces e salgados na recepção, e o cabeleleiro foi muito paciente ao me escutar, de como eu queria que fosse feito o corte, pode ter certeza de que irei retornar😉";
        commentName.textContent="Brunão";
    }

    function row3Active(){
        row1.style.backgroundColor="#e6e6e6";
        row1.style.width="26px";
        row2.style.backgroundColor="#e6e6e6";
        row2.style.width="26px";

        row3.style.backgroundColor="#000000dc";
        row3.style.width="36px";
        commentTitle.textContent="Primeiro de tudo, recomendo demais, corte muito detalhado e bem feito, pessoal é muito organizado, local totalmente higienizado e com bom astral, tem tv pra quem quer curtir um futebolzinho ou assistir algo diferente, e os produtos de alta qualidade e cheirosos.";
        commentName.textContent="Gui Silva";
    }
});