const w = 320, h = 200, padding = 1;
const dataset = [5, 10, 14, 20, 19, 25, 22, 11, 19, 15, 9, 3];

const colorPicker = (v) => {
	const color = (v>=20) ? '#FF0033' : '#666666';
	return color;
}

var svg = d3.select('body').append('svg')
.attrs({ width: w, height: h })

svg.selectAll('rect')
.data(dataset)
.enter()
.append('rect')
.attrs({
	x: (d, i) => (i * (w / dataset.length) + (w/dataset.length - padding)/2),
	y:  (d) => h - (d*4),
	width : w / dataset.length - padding,
	height: (d) => d*4,
	fill: (d) => { return colorPicker(d)}
	//fill: (d) => 'rgb(' + (d*10) + ', 0, 0)'
});

svg.selectAll('text')
	.data(dataset)
	.enter()
	.append('text')
.text( (d) => d)
.attrs({
	'text-anchor': 'middle',
	x: (d, i) => i * (w / dataset.length) + (w/dataset.length),
	y: (d) => h - (d*4) + 16,
	fill: '#fff',
	'font-family': 'sans-serif',
	'font-size': '13px'
})