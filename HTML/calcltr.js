let display = document.querySelector('#display');
        let string = "";
        
        let buttons = document.querySelectorAll('button');
        
        buttons.forEach(button => {
            button.addEventListener('click', (e) => {
                let value = e.target.innerHTML;
                
                switch(value) {
                    case '=':
                        try {
                            string = eval(string);
                            display.value = string;
                            
                        } catch(error) {
                            display.value = 'Error';
                            string = "";
                        }
                        break;
                        
                    case 'AC':
                        string = "";
                        display.value = string;
                        break;


                        case 'DEL':
                        string=length - 1;
                        display.value = string;
                        break;
                        
                    default:
                        string += value;
                        display.value = string;
                        break;
                }
            });
        });