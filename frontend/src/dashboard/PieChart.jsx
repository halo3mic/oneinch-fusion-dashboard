import React, { useLayoutEffect, useRef } from 'react';
import * as am5 from "@amcharts/amcharts5";
import * as am5percent from "@amcharts/amcharts5/percent";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

const PieChart = () => {
  
  const chartRef = useRef(null);

  useLayoutEffect(() => {
    const chartDiv = chartRef.current;
    const root = am5.Root.new(chartDiv);

    root.setThemes([
        am5themes_Animated.new(root)
      ]);

    const chart = root.container.children.push(
      am5percent.PieChart.new(root, {
        innerRadius: am5.percent(50)
      })
    );
  

    const data = [
      { country: "France", sales: 100000 },
      { country: "Spain", sales: 160000 },
      { country: "United Kingdom", sales: 80000 }
    ];

    const series = chart.series.push(
      am5percent.PieSeries.new(root, {
        name: "Series",
        valueField: "sales",
        categoryField: "country"
      })
    );
    series.data.setAll(data);

    const legend = chart.children.push(
      am5.Legend.new(root, {
        centerX: am5.percent(50),
        x: am5.percent(50),
        layout: root.horizontalLayout
      })
    );
    legend.data.setAll(series.dataItems, am5.color("#00ff00"));

    //Styling
    series.animate({
        key: "startAngle",
        to: 180,
        duration: 2000,
        easing: am5.ease.yoyo(am5.ease.cubic)
      });

      series.slices.template.set("fillGradient", am5.RadialGradient.new(root, {
        stops: [{
          brighten: -0.8
        }, {
          brighten: -0.8
        }, {
          brighten: -0.5
        }, {
          brighten: 0
        }, {
          brighten: -0.5
        }]
      }));

      series.slices.template.set("fillGradient", am5.LinearGradient.new(root, {
        stops: [{
          color: am5.color(0xFffff)
        }, {
          color: am5.color(0xff0000)
        }],
        rotation: 90
      }));

    // Return function to dispose the chart when unmounted
    return () => {
      root.dispose();
    }
  }, []);

  return <div ref={chartRef} style={{ width: "100%", height: "500px" }}></div>;
}

export default PieChart;
