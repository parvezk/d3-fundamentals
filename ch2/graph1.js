const w = 300, h = 300;
const padding = 2;
const dataset = [50, 10, 14, 20, 25];
var svg = d3.select('body').append('svg').attr('width', w).attr('height', h);

svg.selectAll('rect')
.data(dataset)
.enter()
.append('rect')
.attr('x', (d, i) => {
	return i * (w/dataset.length)
})
.attr('y', (d) => h - (d*4))
.attr('width', w/dataset.length - padding)
.attr('height', (d) => d*4);

svg.selectAll('rect')
.data(dataset)
.enter()
.append('rect')
.attr({
	x: (d, i) => i * (w / dataset.length),
	y:  (d) => h - (d*4),
	width : w / dataset.length - padding,
	height: (d) => d*4,
	fill: (d) => 'rgb(' + (d*10) + ', 0, 0)'
});
