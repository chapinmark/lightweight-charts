import{T as l}from"./lightweight-charts.production-d55df4ee.js";import{B as a}from"./brushable-area-series-640297c0.js";import{D as s}from"./delta-tooltip-8828e28f.js";import{g as n}from"./sample-data-c7d89ab8.js";import"./delegate-be319f8b.js";import"./time-849ac0d9.js";import"./positions-0a54307c.js";const r=window.chart=l("chart",{autoSize:!0,grid:{vertLines:{visible:!1},horzLines:{visible:!1}},timeScale:{borderVisible:!1},rightPriceScale:{borderVisible:!1},handleScale:!1,handleScroll:!1}),b={lineColor:"rgb(4,153,129)",topColor:"rgba(4,153,129, 0.4)",bottomColor:"rgba(4,153,129, 0)",lineWidth:3},m={lineColor:"rgb(239,83,80)",topColor:"rgba(239,83,80, 0.4)",bottomColor:"rgba(239,83,80, 0)",lineWidth:3},c={lineColor:"rgb(40,98,255, 0.2)",topColor:"rgba(40,98,255, 0.05)",bottomColor:"rgba(40,98,255, 0)"},t={lineColor:"rgb(40,98,255)",topColor:"rgba(40,98,255, 0.4)",bottomColor:"rgba(40,98,255, 0)"},p=new a,o=r.addCustomSeries(p,{...t,priceLineVisible:!1}),g=n();o.setData(g);const i=new s({lineColor:"rgba(0, 0, 0, 0.2)"});o.attachPrimitive(i);r.timeScale().fitContent();i.activeRange().subscribe(e=>{if(e===null){o.applyOptions({brushRanges:[],...t});return}o.applyOptions({brushRanges:[{range:{from:e.from,to:e.to},style:e.positive?b:m}],...c})});window.addEventListener("resize",()=>{requestAnimationFrame(()=>{r.timeScale().fitContent()})});