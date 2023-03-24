import React, { useLayoutEffect, useRef } from 'react';
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";

const XyChart = () => {
  const chartRef = useRef(null);

  useLayoutEffect(() => {
    const root = am5.Root.new(chartRef.current);

    const chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panY: false,
        layout: root.verticalLayout
      })
    );

    const yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {})
      })
    );

    const xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        renderer: am5xy.AxisRendererX.new(root, {}),
        categoryField: "category"
      })
    );

    const series1 = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: "Series",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value1",
        categoryXField: "category"
      })
    );

    const series2 = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: "Series",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value2",
        categoryXField: "category"
        
      })
    
      );

    const legend = chart.children.push(am5.Legend.new(root, {}));
    legend.data.setAll(chart.series.values);
    legend.set("fill", am5.color(0xffffff)); 


    chart.set("cursor", am5xy.XYCursor.new(root, {}));

    const data = [
      { category: "Research", value1: 1000, value2: 588 },
      { category: "Marketing", value1: 1200, value2: 1800 },
      { category: "Sales", value1: 850, value2: 1230 }
    ];

    xAxis.data.setAll(data);

   

    series1.data.setAll(data);
    

    series2.data.setAll(data);
    series2.set("fill", am5.color(0xff0000)); 

    //styling
    root.interfaceColors.set("grid", am5.color(0xffffff));

    return () => {
      root.dispose();
    };
  }, []);

  return <div ref={chartRef} style={{ width: "500px", height: "500px" }} />;
};

export default XyChart;

