let menuUL = document.getElementById("menuUL")
let startersUL = document.getElementById("startersUL")

menuUL.innerHTML = ""
    let result = dishes.map(function (dish) {
        return `
            <li>
                <p><b>${dish.title} </b><i>$${dish.price}</i></p>
                <p><img src = ${dish.imageURL}></img>${dish.description}</p>
            </li>
            `
    })
let output = `<h3>Menu</h3> ${result.join("")}`
menuUL.insertAdjacentHTML('beforeend', output)

addButton3.addEventListener("click", function() {
    menuUL.innerHTML = ""
    let result = dishes.map(function (dish) {
        return `
            <li>
                <p><b>${dish.title} </b><i>$${dish.price}</i></p>
                <p><img src = ${dish.imageURL}></img>${dish.description}</p>
            </li>
            `
    })
let output = `<h3>Full Menu</h3> ${result.join("")}`
menuUL.insertAdjacentHTML('beforeend', output)
})

addButton.addEventListener("click", function() {
    menuUL.innerHTML = ""
    let starters = dishes.filter(function(dish) {
        return dish.course == "Starters"
    })
    let result = starters.map(function (dish) {
        return `
            <li>
                <p><b>${dish.title} </b><i>$${dish.price}</i></p>
                <p><img src = ${dish.imageURL}></img>${dish.description}</p>
            </li>
            `
    })
let output = `<h3>Starters</h3> ${result.join("")}`
menuUL.insertAdjacentHTML('beforeend', output)
})

addButton1.addEventListener("click", function() {
    menuUL.innerHTML = ""
    let entrees = dishes.filter(function(dish) {
        return dish.course == "Entrees"
    })
    let result = entrees.map(function (dish) {
        return `
            <li>
                <p><b>${dish.title} </b><i>$${dish.price}</i></p>
                <p><img src = ${dish.imageURL}></img>${dish.description}</p>
            </li>
            `
    })

let output = `<h3>Entrees</h3> ${result.join("")}`
menuUL.insertAdjacentHTML('beforeend', output)
})

addButton2.addEventListener("click", function() {
    menuUL.innerHTML = ""
    let desserts = dishes.filter(function(dish) {
        return dish.course == "Desserts"
    })
    let result = desserts.map(function (dish) {
        return `
            <li>
                <p><b>${dish.title} </b><i>$${dish.price}</i></p>
                <p><img src = ${dish.imageURL}></img>${dish.description}</p>
            </li>
            `
    })

let output = `<h3>Desserts</h3> ${result.join("")}`
menuUL.insertAdjacentHTML('beforeend', output)
})