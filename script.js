document.addEventListener("DOMContentLoaded", function () {
    let panel = document.getElementById("panel");
    let buttons = document.querySelectorAll(".b");
    let expression = "";

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            let value = this.innerText;

            if (value === "C") {
                expression = expression.slice(0, -1);
            } else if (value === "AC") {
                expression = "";
            } else if (value === "=") {
                try {
                    expression = eval(expression.replace(/[^0-9+\-*/.%]/g, "")).toString();
                } catch {
                    expression = "Error";
                }
            } else {
                expression += value;
            }
            
            panel.innerText = expression;
        });
    });
});
