// start slingin' some d3 here.

// draw the enemies in an svg element


//creates the 'environment'
var box = d3.select('body').append('svg').attr('width', 500).attr('height', 500).attr('class', 'box');
//we might need to append 'g'

//creates one enemy
// box.append('circle').attr('cx', 25).attr('cy', 25).attr('r', 10).style('fill', 'black');

//we want to create 20 enemies at random locations with identical sizes and colors
var enemiesStart = [];
var randomNum = function() {
  return Math.floor(Math.random() * 500);
}
for(var i = 0; i < 10; i++) {
  //create random x and y
  var obj = {};
  obj.CX = randomNum();
  obj.CY = randomNum();
  obj.r = 10;
  enemiesStart.push(obj);
}

var enemies = box.selectAll('circle').data(enemiesStart).enter().append('circle').attr('class', 'enemy')
.attr('r', function(d) {
  return d.r;
})
.attr('cx', function(d) {
  return d.CX;
})
.attr('cy', function(d) {
  return d.CY;
});

var update = function(enemies) {
  //
}

setInterval(function() {
  update();
}, 1500);