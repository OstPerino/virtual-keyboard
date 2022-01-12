
const buttons   = document.querySelectorAll(".btn");
const display   = document.querySelector(".display");
const shift     = document.querySelector(".shift");
const backspace = document.querySelector(".backspace");
const clear     = document.querySelector(".clear");


function shiftController(shift, buttons) {
    shift.addEventListener("click", () => {

        if (!shift.classList.contains("clicked")) {
            shift.classList.add("clicked");

            for (let button of buttons) {
                
                if (button == shift || button == backspace || button == clear) 
                    continue;
                
                button.textContent = button.textContent.toUpperCase();
            }

        } else {
            shift.classList.remove("clicked");

            for (let button of buttons) {

                if (button == shift || button == backspace || button == clear) 
                    continue;

                button.textContent = button.textContent.toLowerCase();
            }
            
        }
    });
}

function writeContent(buttons, display) {
    for (let button of buttons) {
        button.addEventListener("click", () => {
            display.textContent += button.textContent;
        });
    }
}

shiftController(shift, buttons);
writeContent(buttons, display);