console.log(123);

let menu_shown = true
let menu_elem = document.getElementById('menu')
let menu_height_px = 50

function toggle_hide_show() {
    if (menu_shown) {
        menu_elem.style.height = 0
        menu_shown = false
    }
    else {
        menu_elem.style.height = `${menu_height_px}px`
        menu_shown = true
    }
}


let input_box = document.getElementById('calculator_input')
let output_box = document.getElementById('calculator_output')
let token_cost_box = document.getElementById('token_cost')
let token_cost = 10
function display_token_cost() {
    token_cost_box.textContent = `${token_cost} руб.`
}
display_token_cost()
function calculate() {
    let val = input_box.value.trim()
    if (val === '') return
    let num = parseInt(val) * token_cost
    output_box.textContent = `${num} руб.`
}
