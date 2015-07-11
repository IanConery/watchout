// start slingin' some d3 here.


//creates the 'environment'
var box = d3.select('body').append('svg').attr('width', 500).attr('height', 500).attr('class', 'box');
//we might need to append 'g'

//creating new drag instance for our player
var drag = d3.behavior.drag()
    .on("drag", dragmove);

function dragmove(d) {
  d3.select(this).attr('cx', d3.event.x);
  d3.select(this).attr('cy', d3.event.y);
}




//creates one enemy
// box.append('circle').attr('cx', 25).attr('cy', 25).attr('r', 10).style('fill', 'black');

//we want to create 20 enemies at random locations with identical sizes and colors
var enemiesStart = [];
var randomNum = function() {
  return Math.round(Math.random() * (490 - 10) + 10);
}
for(var i = 0; i < 20; i++) {
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

var update = function(data) {
  //test changing the enemies on 'cy'
  var tempCY; 
  var tempCX; 
  data.transition().attr('cy', function(d) {
    tempCY = randomNum();
    return tempCY;
  }).attr('cx', function(d){
    tempCX = randomNum();
    return tempCX;
  }).duration(1000).each(function(d){
    d.CX = tempCX;
    d.CY = tempCY;
    return;
   });
};

var player = box.append('circle')
  .attr('cx', 250)
  .attr('cy', 250)
  .attr('r', 20)
  .style('fill', 'red')
  .call(drag);

  var currentScore = 0;
setInterval(function() {
  // for(var i = 0; i < 20; i++){
  //   currentScore += 1;
  //   d3.select('.current span').text(currentScore.toString());
  // }
  update(enemies);
}, 1000);











































