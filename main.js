let input = document.querySelector("input");
let btn = document.querySelector("button");
let boxs = document.querySelectorAll(".box");
let drag = null

btn.onclick = function () {
    if (input.value != "") {
        boxs[0].innerHTML += `<p class="item" draggable="true">${input.value}</p>`
        input.value = ""
    }   
    dragitem();
}

function dragitem () {
    let items = document.querySelectorAll(".item")
    items.forEach(item => {
        item.addEventListener("dragstart", function() {
            drag = item
            item.style.opacity = "0.5"
            item.style.cursor = "move"

        })

        item.addEventListener("dragend", function() {
            drag = null
            item.style.opacity = "1"
        })
        boxs.forEach (box => {
            box.addEventListener("dragover", function (e) {
                e.preventDefault()
                box.style.backgroundColor = "green"
                box.style.color = "#fff"
            })
            box.addEventListener ("dragleave", function () {
                box.style.backgroundColor = "#fff"
                box.style.color = "#000"
            })
            box.addEventListener("drop",function () {
                box.append(drag)
                box.style.backgroundColor = "#fff"
                box.style.color = "#000"
            })
        })
    })
}