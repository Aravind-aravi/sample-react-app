import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import axios from 'axios';
import React, { Component } from 'react'
import Bubblechart from "./Bubblechart";

class SampleChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }



  componentDidMount() {
    this.get();

  }

  componentDidUpdate() {
    // Create chart instance
    let chart = am4core.create("chartdiv", am4charts.PieChart);

    // Add data
    chart.data = [...this.state.users];
    console.log("pie",chart.data);

    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.id = "id";
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "country";


    const eventHandler = (ev) => {
      const id = ev.target.dataItem.dataContext.id;
      const country = ev.target.dataItem.dataContext.country;
      console.log("clicked on ", id,country);
      pieSeries.slices.template.events.off("hit", eventHandler, this);
    }

    pieSeries.slices.template.events.on("hit", eventHandler, this);

  }


  get = () => {
    axios.get('http://localhost:5000/chartentities').then((result) => {
      this.setState({ users: result.data });
    })

  }



  render() {
    return (
      <div>
        <div id="chartdiv" style={{ width: "50%", height: "250px" }}></div>

      </div>
    )
  }
}

export default SampleChart;