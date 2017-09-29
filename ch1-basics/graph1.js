const w = 100, h = 200, padding = 2;
const dataset = [5, 10, 15, 20, 25];

const svg = d3.select("body")
	.append("svg").attr("width", w).attr("height", h);

svg.selectAll('rect')
	.data(dataset)
	.enter()
	.append('rect') 
	.attr('x', (d, i) => (i * (w / dataset.length)))
	.attr('y', (d) => ( 100 - (d * 4)))

	.attr('width', w / dataset.length - padding)
    .attr('height', (d) => d * 4)
    