



const a = document.getElementById("1")
const b = document.getElementById("2")
const c = document.getElementById("3")
const d = document.getElementById("4")
const e = document.getElementById("-1")
const f = document.getElementById("-2")
const g = document.getElementById("-3")
const h = document.getElementById("C1")
const r = document.getElementById("6")
const p = document.getElementById("b2")
const s = document.getElementById("b3")
let btn = document.getElementById("btn")
let P1 = document.getElementById("p1")
let P2 = document.getElementById("p2")
let P = document.getElementById("p*")
let TA = document.getElementById("TA")
let R = document.getElementById("Re")

let timerclear
let timerclear2
let again = 0
let again2 = 0

function change() {
  setTimeout(() => {
    a.src = "2jj.png"
  }, 150);
  setTimeout(() => {
    a.src = "3jj.png"
  }, 300);
  setTimeout(() => {
    a.src = "1jjj.png"
  }, 450)
}

function change2() {
  setTimeout(() => {
    e.src = "2jj.png"
  }, 150);
  setTimeout(() => {
    e.src = "3jj.png"
  }, 300);
  setTimeout(() => {
    e.src = "1jjj.png"
  }, 450)
}
function change_1() {
  setTimeout(() => {
    a.src = "2jj.png"
  }, 150);
  setTimeout(() => {
    a.src = "3jj.png"
  }, 300);
  setTimeout(() => {
    a.src = "1jjj.png"
  }, 450)
}

function change2_1() {
  setTimeout(() => {
    f.src = "2jj.png"
  }, 150);
  setTimeout(() => {
    f.src = "3jj.png"
  }, 300);
  setTimeout(() => {
    f.src = "1jjj.png"
  }, 450)
}

R.onclick= function(){
  P1.innerHTML= 0
  P2.innerHTML= 0
  
}

d.onclick = function () {
  timerclear = setInterval(change, 450)
  timerclear2 = setInterval(change2, 450)
  setTimeout(() => {
    btn.style.visibility = "visible"
  }, 3000)
  setTimeout(() => {
    P.style.display = "flex"
  }, 1000)
  d.style.display = "none"
  setTimeout(() => {
    R.style.display = "flex"
  }, 3000)
  
}
const Udata = [];
r.onclick = function () {
  clearInterval(timerclear)
  clearInterval(timerclear2)
  e.style.display = "none"
  setTimeout(() => {
    f.style.display = "flex"
  }, 1000)
  Udata.push("rock")
  gamelogic()
  btn.style.display = "none"
  document.getElementById("txt").style.display = "flex"
  again += 1
  console.log(again)
}


p.onclick = function () {
  console.log("p")
  clearInterval(timerclear)
  clearInterval(timerclear2)
  e.style.display = "none"
  setTimeout(() => {
    h.style.display = "flex"
  }, 1000)
  Udata.push("paper")
  gamelogic()
  btn.style.display = "none"
  document.getElementById("txt").style.display = "flex"
  again += 2
  console.log(again)
  console.log(Udata)

}
s.onclick = function () {
  clearInterval(timerclear)
  clearInterval(timerclear2)
  e.style.display = "none"
  setTimeout(() => {
    g.style.display = "flex"
  }, 1000)
  Udata.push("scissor")
  gamelogic()
  btn.style.display = "none"
  document.getElementById("txt").style.display = "flex"
  again += 3
  console.log(again)
}
TA.onclick = function () {

  if (again = 1, again2 = 1) {
    f.style.display = "none"
    setTimeout(() => {
      e.style.display = "flex"
    }, 1000)
    b.style.display = "none"
    setTimeout(() => {
      a.style.display = "flex"
    }, 1000)

    document.getElementById("h-3").innerHTML =
      document.getElementById("h-2").innerText = ""
  }
  if (again = 2, again2 = 2) {
    h.style.display = "none"
    setTimeout(() => {
      e.style.display = "flex"
    }, 1000)
    a.style.display = "none"
    setTimeout(() => {
      a.style.display = "flex"
    }, 1000)

    document.getElementById("h-3").innerHTML =
      document.getElementById("h-2").innerText = ""
  }
  if (again = 3, again = 3) {
    g.style.display = "none"
    setTimeout(() => {
      e.style.display = "flex"
    }, 1000)
    c.style.display = "none"
    setTimeout(() => {
      a.style.display = "flex"
    }, 1000)
    document.getElementById("h-3").innerHTML =
      document.getElementById("h-2").innerText = ""


  }
  else {

  }
  timerclear = setInterval(change, 450)
  timerclear2 = setInterval(change2, 450)
  setTimeout(() => {
    btn.style.display = "flex"
  }, 3000)
  TA.style.display = "none"


  Udata.splice(0, Udata.length)
}
let point=0
let point2=0
function gamelogic() {

  const random_item = items => items[Math.floor(Math.random() * items.length)];
  let items = ["rock", "paper", "scissor"]
  let user = Udata

  let comp = random_item(items)

  if (user == comp) {
    if (comp == "rock") {
      again2 += 1
      a.style.display = "none"
      setTimeout(() => {
        b.style.display = "flex"
      }, 1000)
    }
    else if (comp == "paper") {
      again2 += 2
      a.style.display = "none"
      setTimeout(() => {
        a.style.display = "flex"
      }, 1000)
    }
    else if (comp == "scissor") {
      again2 += 3
      a.style.display = "none"
      setTimeout(() => {
        c.style.display = "flex"
      }, 1000)
    }
    setTimeout(() => {
      TA.style.display = "flex"
    }, 3000)
    setTimeout(() => {
      document.getElementById("h-3").innerHTML = "\"MATCH TIED\""
    }, 1000)
    setTimeout(() => {
      document.getElementById("h-2").innerText = ("Match tied because the computer also choose " + comp)
    }, 1000)
    
   
  }
  else if (user == "rock" && comp == "paper") {
    again2 += 2
    setTimeout(() => {
      TA.style.display = "flex"
    }, 3000)
    a.style.display = "none"
    setTimeout(() => {
      a.style.display = "flex"
    }, 1000)
    setTimeout(() => {
      document.getElementById("h-3").innerHTML = "\"YOU LOSE\"!"
    }, 1000)
    setTimeout(() => {
      document.getElementById("h-2").innerText = ("You lose because the computer choose " + comp)
    }, 1000)
    P2.innerHTML= ++point2
  }
  else if (user == "rock" && comp == "scissor") {
    again2 += 3
    setTimeout(() => {
      TA.style.display = "flex"
    }, 3000)
    a.style.display = "none"
    setTimeout(() => {
      c.style.display = "flex"
    }, 1000)
    setTimeout(() => {
      document.getElementById("h-3").innerHTML = "\"YOU WON!\""
    }, 1000)
    setTimeout(() => {
      document.getElementById("h-2").innerText = ("You won because the computer choose " + comp)
    }, 1000)
    P1.innerHTML= ++point
  }
  else if (user == "scissor" && comp == "rock") {
    again2 += 1
    setTimeout(() => {
      TA.style.display = "flex"
    }, 3000)
    a.style.display = "none"
    setTimeout(() => {
      b.style.display = "flex"
    }, 1000)
    setTimeout(() => {
      document.getElementById("h-3").innerHTML = "\"YOU LOSE\"!"
    }, 1000)
    setTimeout(() => {
      document.getElementById("h-2").innerText = ("You lose because the computer choose " + comp)
    }, 1000)
    P2.innerHTML= ++point2
  } 
  else if (user == "scissor" && comp == "paper") {
    again2 += 2
    setTimeout(() => {
      TA.style.display = "flex"
    }, 3000)
    a.style.display = "none"
    setTimeout(() => {
      a.style.display = "flex"
    }, 1000)
    setTimeout(() => {
      document.getElementById("h-3").innerHTML = "\"YOU WON!\""
    }, 1000)
    setTimeout(() => {
      document.getElementById("h-2").innerText = ("You won because the computer choose " + comp)
    }, 1000)
    P1.innerHTML= ++point
  }
  else if (user == "paper" && comp == "scissor") {
    again2 += 3
    setTimeout(() => {
      TA.style.display = "flex"
    }, 3000)
    a.style.display = "none"
    setTimeout(() => {
      c.style.display = "flex"
    }, 1000)
    setTimeout(() => {
      document.getElementById("h-3").innerHTML = "\"YOU LOSE\"!"
    }, 1000)
    setTimeout(() => {
      document.getElementById("h-2").innerText = ("You lose because the computer choose " + comp)
    }, 1000)
    P2.innerHTML= ++point2
  }
  else if (user == "paper" && comp == "rock") {
    again2 += 1
    setTimeout(() => {
      TA.style.display = "flex"
    }, 3000)
    a.style.display = "none"
    setTimeout(() => {
      b.style.display = "flex"
    }, 1000)
    setTimeout(() => {
      document.getElementById("h-3").innerHTML = "\"YOU WON!\""
    }, 1000)
    setTimeout(() => {
      document.getElementById("h-2").innerText = ("You won because the computer choose " + comp)
    }, 1000)
    P1.innerHTML= ++point2
  }
  else {

  }
}



