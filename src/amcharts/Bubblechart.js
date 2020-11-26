import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import axios from 'axios'
import React, { Component } from 'react'

am4core.useTheme(am4themes_animated);

export default class Bubblechart extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sows: [],
    }
  }


  componentDidMount() {
    this.get();

  }


  componentDidUpdate() {
    // Create chart instance
    let chart = am4core.create("chartdiv1", am4charts.XYChart);
    chart.colors.step = 4;

    // Add data
    chart.data = [...this.state.sows]


    // Create xaxes
    let xAxis = chart.xAxes.push(new am4charts.ValueAxis());
    xAxis.renderer.minGridDistance = 50;
    xAxis.min = 0;
    xAxis.max = 200;
    xAxis.strictMinMax = true;

    //set up axis title
    xAxis.title.text = "Activity (in metres)"
    xAxis.title.rotation = 0;
    xAxis.title.align = "center";
    xAxis.title.valign = "middle";
    xAxis.title.fontWeight = 600;


    // Create yaxes
    let yAxis = chart.yAxes.push(new am4charts.ValueAxis());
    yAxis.renderer.minGridDistance = 50;
    yAxis.min = 0;
    yAxis.max = 6;
    yAxis.strictMinMax = true;

    // Set up axis title
    yAxis.title.text = "Wellness Score";
    yAxis.title.rotation = 270;
    yAxis.title.align = "center";
    yAxis.title.valign = "middle";
    yAxis.title.fontWeight = 600;


    // Create series #1
    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueX = "activity_mts";
    series.dataFields.valueY = "wellness_score";
    series.dataFields.categoryX = "weight_lbs"
    series.dataFields.value="wellness_score_size"
    series.dataFields.id = "pig"
    series.dataFields.categoryY = "temperature_f"
    series.strokeOpacity = 0;
    series.name = "Series 1";

    let bullet = series.bullets.push(new am4charts.CircleBullet());
    bullet.strokeOpacity = 0.2;
    bullet.stroke = am4core.color("#ffffff");
    bullet.nonScalingStroke = true;
    bullet.tooltipText = ` {id} | Wellness score : {valueY} 
                            Activity : {valueX} | Wellness score size:{value}
                            Weight : {categoryX} lbs
                            Temperature : {categoryY} F`

    series.heatRules.push({
      target: bullet.circle,
      min: 10,
      max: 20,
      property: "radius"
    });

    // chart.scrollbarX = new am4core.Scrollbar();
    // chart.scrollbarY = new am4core.Scrollbar();

    chart.legend = new am4charts.Legend();

  }




  get = () => {
    axios.get('http://localhost:5000/sows').then((results) => {
      this.setState({ sows: results.data });
    })

  }

  render() {

    return (
      <div>
        <div id="chartdiv1" style={{ width: "60%", height: "500px" }}></div>
      </div>
    )
  }
}



