import * as d3 from '../assets/d3/d3.min.js';

var svg, size, loader, loaderContainer;


export default {
    test: function() {
        console.log(d3.select("#graph"));
    },
    initGraph: function(selector, sizeObj) {
        console.log(d3.select(selector));
        size = sizeObj;
        svg = d3.select(selector).append("svg")
            .attr("width", size.width + size.margins.left + size.margins.right)
            .attr("height", size.height + size.margins.top + size.margins.bottom);

        // loader by Sam Herbert (@sherb), for everyone. More @ http://goo.gl/7AJzbL
        loaderContainer = svg.append("g")
            .attr("transform", "translate(100, 100)");
        loader = loaderContainer.append("g")
            .attr("width", "38")
            .attr("height", "38")
            .attr("fill", "none")
            .attr("stroke", "black")
            .attr("fill-rule", "evenodd");
        var loaderInner = loader.append("g")
            .attr("transform", "translate(1 1)")
            .attr("stroke-width", "3");
        loaderInner.append("circle")
            .attr("stroke-opacity", ".25")
            .attr("cx", "18")
            .attr("cy", "18")
            .attr("r", "18");
        loaderInner.append("path")
            .attr("d", "M36 18c0-9.94-8.06-18-18-18")
            .attr("transform", "rotate(-45, 18, 18)");

        rotate();

    }
};

function rotTween() {
    var i = d3.interpolate(0, 360);
    return function (t) {
        return "rotate(" + i(t) + ",19,19)";
    };
}

function rotate() {
    loader.transition().duration(1000)
        .attrTween("transform", rotTween)
        .on("end", rotate);
}