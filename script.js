
const buttons   = document.querySelectorAll(".btn");
const display   = document.querySelector(".display");
const shift     = document.querySelector(".shift");
const backspace = document.querySelector(".backspace");
const clear     = document.querySelector(".clear");
const space     = document.querySelector(".space");


function checkSpecialButton(button) {
    if (button == shift || button == backspace || button == clear)
        return true;
    else
        return false;
}

function shiftController(shift, buttons) {
    shift.addEventListener("click", () => {

        if (!shift.classList.contains("clicked")) {
            shift.classList.add("clicked");

            for (let button of buttons) {
                
                if (checkSpecialButton(button)) 
                    continue;
                
                button.textContent = button.textContent.toUpperCase();
            }

        } else {
            shift.classList.remove("clicked");

            for (let button of buttons) {

                if (checkSpecialButton(button)) 
                    continue;

                button.textContent = button.textContent.toLowerCase();
            }
            
        }
    });
}

function writeContent(buttons, display) {
    for (let button of buttons) {
        button.addEventListener("click", () => {
            if (!checkSpecialButton(button))
                if (button.textContent.toLowerCase() == "space")
                    display.textContent += " ";
                else
                    display.textContent += button.textContent;
        });
    }
}

function clearContent(clear, display) {
    clear.addEventListener("click", () => {
        display.textContent = "";
    })
}

shiftController(shift, buttons);
writeContent(buttons, display);
clearContent(clear, display);