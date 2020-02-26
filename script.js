allBoxes = document.getElementById("allBoxes")
// console.log("allBoxes",allBoxes)
// console.log(allBoxes.length)//undefined

var box = document.getElementsByClassName("box")
// console.log("box",box)
// console.log(box.length)//64
// console.log("box[0]",box[0])
// console.log("box[1]",box[1])



for (i = 0; i <= 7; i++) {
    if (i % 2 == 1) {
        box[i].style.backgroundColor = " rgb(102, 35, 10)"
    }
    else {
        box[i].style.backgroundColor = "rgb(238, 133, 64)"
    }
}
for (i = 8; i <= 15; i++) {
    if (i % 2 == 1) {
        box[i].style.backgroundColor = "rgb(238, 133, 64)"
    }
    else {
        box[i].style.backgroundColor = " rgb(102, 35, 10)"
    }
}
for (i = 16; i <= 23; i++) {
    if (i % 2 == 1) {
        box[i].style.backgroundColor = " rgb(102, 35, 10)"
    }
    else {
        box[i].style.backgroundColor = "rgb(238, 133, 64)"
    }
}
for (i = 24; i <= 31; i++) {
    if (i % 2 == 1) {
        box[i].style.backgroundColor = "rgb(238, 133, 64)"
    }
    else {
        box[i].style.backgroundColor = " rgb(102, 35, 10)"
    }
}
for (i = 32; i <= 39; i++) {
    if (i % 2 == 1) {
        box[i].style.backgroundColor = " rgb(102, 35, 10)"
    }
    else {
        box[i].style.backgroundColor = "rgb(238, 133, 64)"
    }
}
for (i = 40; i <= 47; i++) {
    if (i % 2 == 1) {
        box[i].style.backgroundColor = "rgb(238, 133, 64)"
    }
    else {
        box[i].style.backgroundColor = " rgb(102, 35, 10)"
    }
}
for (i = 48; i <= 55; i++) {
    if (i % 2 == 1) {
        box[i].style.backgroundColor = " rgb(102, 35, 10)"
    }
    else {
        box[i].style.backgroundColor = "rgb(238, 133, 64)"
    }
}
for (i = 56; i <= 63; i++) {
    if (i % 2 == 1) {
        box[i].style.backgroundColor = "rgb(238, 133, 64)"
    }
    else {
        box[i].style.backgroundColor = " rgb(102, 35, 10)"
    }
}

// ----------------------
function dragStart(event) {
    event.dataTransfer.setData("Text", event.target.id);
}

function dragging(event) {
    // document.getElementsByClassName("box").innerHTML = "The p element is being dragged";
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("Text");
    // console.log("data", data)
    event.target.appendChild(document.getElementById(data));
}





// to remove the black pieces
var b1 = document.getElementById("b1")
b1.addEventListener("dblclick", function () {
    b1.style.display = "none"
})

var b2 = document.getElementById("b2")
b2.addEventListener("dblclick", function () {
    b2.style.display = "none"
})

var b3 = document.getElementById("b3")
b3.addEventListener("dblclick", function () {
    b3.style.display = "none"
})

var b4 = document.getElementById("b4")
b4.addEventListener("dblclick", function () {
    b4.style.display = "none"
})

var b5 = document.getElementById("b5")
b5.addEventListener("dblclick", function () {
    b5.style.display = "none"
})

var b6 = document.getElementById("b6")
b6.addEventListener("dblclick", function () {
    b6.style.display = "none"
})

var b7 = document.getElementById("b7")
b7.addEventListener("dblclick", function () {
    b7.style.display = "none"
})

var b8 = document.getElementById("b8")
b8.addEventListener("dblclick", function () {
    b8.style.display = "none"
})

var b9 = document.getElementById("b9")
b9.addEventListener("dblclick", function () {
    b9.style.display = "none"
})

var b10 = document.getElementById("b10")
b10.addEventListener("dblclick", function () {
    b10.style.display = "none"
})

var b11 = document.getElementById("b11")
b11.addEventListener("dblclick", function () {
    b11.style.display = "none"
})

var b12 = document.getElementById("b12")
b12.addEventListener("dblclick", function () {
    b12.style.display = "none"
})

var b13 = document.getElementById("b13")
b13.addEventListener("dblclick", function () {
    b13.style.display = "none"
})

var b14 = document.getElementById("b14")
b14.addEventListener("dblclick", function () {
    b14.style.display = "none"
})

var b15 = document.getElementById("b15")
b15.addEventListener("dblclick", function () {
    b15.style.display = "none"
})

var b16 = document.getElementById("b16")
b16.addEventListener("dblclick", function () {
    b16.style.display = "none"
})

// to remove the white pieces

var w1 = document.getElementById("w1")
w1.addEventListener("dblclick", function () {
    w1.style.display = "none"
})

var w2 = document.getElementById("w2")
w2.addEventListener("dblclick", function () {
    w2.style.display = "none"
})

var w3 = document.getElementById("w3")
w3.addEventListener("dblclick", function () {
    w3.style.display = "none"
})

var w4 = document.getElementById("w4")
w4.addEventListener("dblclick", function () {
    w4.style.display = "none"
})

var w5 = document.getElementById("w5")
w5.addEventListener("dblclick", function () {
    w5.style.display = "none"
})

var w6 = document.getElementById("w6")
w6.addEventListener("dblclick", function () {
    w6.style.display = "none"
})

var w7 = document.getElementById("w7")
w7.addEventListener("dblclick", function () {
    w7.style.display = "none"
})

var w8 = document.getElementById("w8")
w8.addEventListener("dblclick", function () {
    w8.style.display = "none"
})

var w9 = document.getElementById("w9")
w9.addEventListener("dblclick", function () {
    w9.style.display = "none"
})

var w10 = document.getElementById("w10")
w10.addEventListener("dblclick", function () {
    w10.style.display = "none"
})

var w11 = document.getElementById("w11")
w11.addEventListener("dblclick", function () {
    w11.style.display = "none"
})

var w12 = document.getElementById("w12")
w12.addEventListener("dblclick", function () {
    w12.style.display = "none"
})

var w13 = document.getElementById("w13")
w13.addEventListener("dblclick", function () {
    w13.style.display = "none"
})

var w14 = document.getElementById("w14")
w14.addEventListener("dblclick", function () {
    w14.style.display = "none"
})

var w15 = document.getElementById("w15")
w15.addEventListener("dblclick", function () {
    w15.style.display = "none"
})

var w16 = document.getElementById("w16")
w16.addEventListener("dblclick", function () {
    w16.style.display = "none"
})





