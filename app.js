let cheese = 1000000

let clickUpgrades = {
  shovels: {
    price: 100,
    quantity: 0,
    multiplier: 2,
  },
  bulldozer: {
    price: 1000,
    quantity: 0,
    multiplier: 5,
  },
}

let automaticUpgrades = {
  robots: {
    price: 5000,
    quantity: 0,
    multiplier: 50,
  },
  meteors: {
    price: 500,
    quantity: 0,
    multiplier: 10,
  },
}

update()

startInterval()

function buyShovel() {
  if (cheese >= clickUpgrades.shovels.price) {
    document.getElementById("shovelButton"); btn.disabled = false;
    cheese -= clickUpgrades.shovels.price
    clickUpgrades.shovels.quantity++
  }
  update()
}

function buyBulldozer() {
  if (cheese >= clickUpgrades.bulldozer.price) {
    cheese -= clickUpgrades.bulldozer.price
    clickUpgrades.bulldozer.quantity++
  }
  update()
}
function buyRobot() {
  if (cheese >= automaticUpgrades.robots.price) {
    cheese -= automaticUpgrades.robots.price
    automaticUpgrades.robots.quantity++
  }
  update()
}
function buyMeteor() {
  if (cheese >= automaticUpgrades.meteors.price) {
    cheese -= automaticUpgrades.meteors.price
    automaticUpgrades.meteors.quantity++
  }
  update()
}

function mine() {
  cheese++
  if (clickUpgrades.shovels.quantity) {
    cheese += clickUpgrades.shovels.multiplier * clickUpgrades.shovels.quantity
  } if (clickUpgrades.bulldozer.quantity) {
    cheese += clickUpgrades.bulldozer.multiplier * clickUpgrades.bulldozer.quantity
  } 
  update()
}


function collectAutoUpgrades() {
  if (automaticUpgrades.robots.quantity) {
    cheese += automaticUpgrades.robots.multiplier * automaticUpgrades.robots.quantity
  } if (automaticUpgrades.meteors.quantity) {
    cheese += automaticUpgrades.meteors.multiplier * automaticUpgrades.meteors.quantity
}
update()
}


function startInterval() {
 setInterval(collectAutoUpgrades, 3000);
}



function update() {

  document.getElementById("currentCheese").innerText = cheese.toString()

  document.getElementById("currentShovels").innerText = clickUpgrades.shovels.quantity.toString()
  document.getElementById("currentMoondozers").innerText = clickUpgrades.bulldozer.quantity.toString()
  document.getElementById("currentRobots").innerText = automaticUpgrades.robots.quantity.toString()
  document.getElementById("currentMeteorStrikes").innerText = automaticUpgrades.meteors.quantity.toString()

  document.getElementById("shovelsMultiplier").innerText = clickUpgrades.shovels.multiplier.toString() * clickUpgrades.shovels.quantity.toString()
  document.getElementById("moondozersMultiplier").innerText = clickUpgrades.bulldozer.multiplier.toString() * clickUpgrades.bulldozer.quantity.toString()
  document.getElementById("robotsMultiplier").innerText = automaticUpgrades.robots.multiplier.toString() * automaticUpgrades.robots.quantity.toString()
  document.getElementById("meteorStrikesMultiplier").innerText = automaticUpgrades.meteors.multiplier.toString() * automaticUpgrades.meteors.quantity.toString()
  
  document.getElementById("shovelButton").innerText = "Buy Shovel:   $" + clickUpgrades.shovels.price
  document.getElementById("moondozerButton").innerText = "Buy Moondozer:   $" + clickUpgrades.bulldozer.price
  document.getElementById("robotButton").innerText = "Buy Robot:   $" + automaticUpgrades.robots.price
  document.getElementById("meteorButton").innerText = "Buy Meteor Strike:   $" + automaticUpgrades.meteors.price

}


