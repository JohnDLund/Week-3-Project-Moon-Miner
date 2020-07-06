let cheese = 100

let clickUpgrades = {
  shovels: {
    price: 25,
    quantity: 0,
    multiplier: 2,
  },
  bulldozer: {
    price: 75,
    quantity: 0,
    multiplier: 10,
  },
}

let automaticUpgrades = {
  robots: {
    price: 100,
    quantity: 0,
    multiplier: 20,
  },
  meteors: {
    price: 50,
    quantity: 0,
    multiplier: 15,
  },
}

update()

startInterval()

function buyShovel() {
  if (cheese >= clickUpgrades.shovels.price) {
    cheese -= clickUpgrades.shovels.price
    clickUpgrades.shovels.quantity++
    clickUpgrades.shovels.price += 10
  }
  update()
}

function buyBulldozer() {
  if (cheese >= clickUpgrades.bulldozer.price) {
    cheese -= clickUpgrades.bulldozer.price
    clickUpgrades.bulldozer.quantity++
    clickUpgrades.bulldozer.price += 30
  }
  update()
}
function buyRobot() {
  if (cheese >= automaticUpgrades.robots.price) {
    cheese -= automaticUpgrades.robots.price
    automaticUpgrades.robots.quantity++
    automaticUpgrades.robots.price += 40
  }
  update()
}
function buyMeteor() {
  if (cheese >= automaticUpgrades.meteors.price) {
    cheese -= automaticUpgrades.meteors.price
    automaticUpgrades.meteors.quantity++
    automaticUpgrades.meteors.price += 20
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

  document.getElementById("currentCheese").innerText = cheese

  document.getElementById("currentShovels").innerHTML = clickUpgrades.shovels.quantity
  document.getElementById("currentMoondozers").innerText = clickUpgrades.bulldozer.quantity
  document.getElementById("currentRobots").innerText = automaticUpgrades.robots.quantity
  document.getElementById("currentMeteorStrikes").innerText = automaticUpgrades.meteors.quantity

  document.getElementById("shovelsMultiplier").innerText = clickUpgrades.shovels.multiplier * clickUpgrades.shovels.quantity
  document.getElementById("moondozersMultiplier").innerText = clickUpgrades.bulldozer.multiplier * clickUpgrades.bulldozer.quantity
  document.getElementById("robotsMultiplier").innerText = automaticUpgrades.robots.multiplier * automaticUpgrades.robots.quantity
  document.getElementById("meteorStrikesMultiplier").innerText = automaticUpgrades.meteors.multiplier * automaticUpgrades.meteors.quantity

  document.getElementById("shovelButton").innerHTML = "<b>Buy Shovel:<br> $" + clickUpgrades.shovels.price + "</b><br><i>(x" + clickUpgrades.shovels.multiplier + " modifier)</i>"
  document.getElementById("moondozerButton").innerHTML = "<b>Buy Moondozer:<br> $" + clickUpgrades.bulldozer.price+ "</b><br><i>(x" + clickUpgrades.bulldozer.multiplier + " modifier)</i>"
  document.getElementById("robotButton").innerHTML = "<b>Buy Robot:<br> $" + automaticUpgrades.robots.price+ "</b><br><i>(x" + automaticUpgrades.robots.multiplier + " modifier)</i>"
  document.getElementById("meteorButton").innerHTML = "<b>Buy Meteor Strike:<br> $" + automaticUpgrades.meteors.price+ "</b><br><i>(x" + automaticUpgrades.meteors.multiplier + " modifier)</i>"

  if (cheese >= clickUpgrades.shovels.price) {
    document.getElementById("shovelButton").disabled = false
  } else {
    document.getElementById("shovelButton").disabled = true
  }

  if (cheese >= clickUpgrades.bulldozer.price) {
    document.getElementById("moondozerButton").disabled = false
  } else {
    document.getElementById("moondozerButton").disabled = true
  }

  if (cheese >= automaticUpgrades.robots.price) {
    document.getElementById("robotButton").disabled = false
  } else {
    document.getElementById("robotButton").disabled = true
  }

  if (cheese >= automaticUpgrades.meteors.price) {
    document.getElementById("meteorButton").disabled = false
  } else {
    document.getElementById("meteorButton").disabled = true
  }

}