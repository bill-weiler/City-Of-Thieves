//Burglar constructor function. This syntax works too
var Burglar = function(name) {
    this.name = name
    this.dead = false
    this.stuff = ['rat', 'knife', 'lockpick', 'eye-patch', 'smoke bomb', 'diploma from burglar school']
  }
  //prototype function placed outside of function scope, so that its attached to global space, not the indicidual burglar
Burglar.prototype.steal = function(victim) {
  if (victim.stuff.length != 0) {
    this.stuff.push(victim.stuff.pop()) //removes item from one array and adds it to another array
    // console.log(this.name + ' now has a ' + this.stuff.join(', ') + '.')
    // console.log(victim.name + ' now has a ' + victim.stuff.join(', ') + '.')
    // console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=');
  } else {
    victim.dead = true
    console.log('hasta la vista, ' + victim.name)
    console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=');
  }
}

//empty array of burglars that we're pushing our 'steves' into
var cityOfThieves = []
for (var i = 0; i < 10; i++) {
  cityOfThieves.push(new Burglar('steve' + i))
}

//fuction whereby we choose a random burglar and a random victim, making sure that the thief is NOT the victim
var randomTheft = function() {
  var burglar = cityOfThieves[Math.floor(Math.random() * cityOfThieves.length)]
  var victim = cityOfThieves[Math.floor(Math.random() * cityOfThieves.length)]
  if (burglar !== victim) {
    burglar.steal(victim)
  }
}

//Set interval for randomTheft, making sure to check if the victim is dead or not. If the city has more than one burglar, then the interval continues.
var burgleInterval = setInterval(function() {
  cityOfThieves = cityOfThieves.filter(function(thief) {
    if (thief.dead === false) {
      return true
    } else if (thief.dead === true) {
      return false
    }
  })
  if (cityOfThieves.length > 1) {
    randomTheft()
  } else {
    console.log(cityOfThieves[0].name + ' says: THERE CAN ONLY BE ONE!')
    clearInterval(burgleInterval)
  }
}, 10)
