let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{

        if(e.target.innerHTML == '='){
            try{
                string = eval(string);
                input.value = string;
            } catch {
                input.value = "Error";
                string = "";
            }
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
            e.preventDefault();
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else if(e.target.innerHTML == '%'){
            try{
                string += e.target.innerHTML;
                input.value = string;
            } catch {
                input.value = "Error";
                string = "";
            }
        }

        }
    )
})

//keyboard support//

document.addEventListener('keydown', (e) => {

    let key = e.key;

    if (
        (key >= '0' && key <= '9') ||
        key === '+' ||
        key === '-' ||
        key === '*' ||
        key === '/' ||
        key === '.'
    ) {
        e.preventDefault();
        string += key;
        input.value = string;
    }

    else if (key === 'Enter' || key === '=') {
        e.preventDefault();

        try {
            string = eval(string);
            input.value = string;
        } catch {
            input.value = "Error";
            string = "";
        }
    }

    else if (key === 'Backspace') {
        e.preventDefault();
        string = string.substring(0, string.length - 1);
        input.value = string;
    }

    else if (key === 'Escape' || key === 'Delete' ) {
        e.preventDefault();
        string = "";
        input.value = "";
    }  

    else if (key === '%') {
        e.preventDefault();
        try{
            string = string / 100;
            input.value = string;
        } catch {
            input.value = "Error";
            string = "";
        }
    }
});