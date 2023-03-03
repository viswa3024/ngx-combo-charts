import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';


import { Color } from '@swimlane/ngx-charts/utils/color-sets';

import { barChart, lineChartSeries } from './combo-chart-data';
import { LegendPosition } from '@swimlane/ngx-charts/common/types/legend.model';
import { ScaleType } from '@swimlane/ngx-charts/common/types/scale-type.enum';
import { CustomLinerChartServiceService } from './service/custom-liner-chart-service.service';
import {CustomLinerChartServiceServiceOne } from './service/custom-liner-chart-1-service.service';


@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['../../node_modules/@swimlane/ngx-ui/index.css', './app.component.scss'],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  theme = 'dark';
  view: [700, 300];
  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  legendTitle = 'Legend';
  legendPosition = LegendPosition.Right;
  showXAxisLabel = true;
  tooltipDisabled = false;
  showText = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'GDP Per Capita';
  showGridLines = true;
  innerPadding = '10%';
  barPadding = 8;
  groupPadding = 16;
  roundDomains = false;
  maxRadius = 10;
  minRadius = 3;
  showSeriesOnHover = true;
  roundEdges: boolean = true;
  animations: boolean = true;
  xScaleMin: any;
  xScaleMax: any;
  yScaleMin: number;
  yScaleMax: number;
  showDataLabel: boolean = false;
  noBarWhenZero: boolean = true;
  barWidth: number = 30;
  trimXAxisTicks: boolean = true;
  trimYAxisTicks: boolean = true;
  rotateXAxisTicks: boolean = true;
  maxXAxisTickLength: number = 16;
  maxYAxisTickLength: number = 16;
  strokeColor: string = '#FFFFFF';
  strokeWidth: number = 2;
  activeEntries: any = [
    {
        "name": "Cell Phones"
    },
    {
        "name": "Tablets"
    }
]
  lineCustomColors = [{name:"Tablets",value: 'red'}, {name:"Cell Phones",value: 'blue'}, {name:"GDP Per Capita",value: 'yellow'}]

  // Combo Chart
  barChart: any[] = barChart;
  lineChartSeries: any[] = lineChartSeries;
  lineChartScheme: Color = {
    name: 'coolthree',
    selectable: true,
    group: ScaleType.Ordinal,
    //domain: ['red', 'green', 'blue'] - 1
    //domain: ['blue', 'red', 'green'] - 2
    //domain: ['#01579b', '#7aa3e5', '#a8385d', '#00bfa5']
    domain: ['green', 'blue', 'red']
  };

  comboBarScheme: Color = {
    name: 'singleLightBlue',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['white']
  };

  showRightYAxisLabel: boolean = true;
  yAxisLabelRight: string = 'Utilization';

  @ViewChild('chart') chart: any;




  constructor(private customLinerChartService: CustomLinerChartServiceService, private CustomLinerChartServiceServiceOne: CustomLinerChartServiceServiceOne) {
  }


  
	ngAfterViewInit() {
    console.log("this.chart: ", this.chart)
		this.customLinerChartService.showDots(this.chart);
    
	}

  ngOnInit() {

  }

  /*
  **
  Combo Chart
  **
  [yLeftAxisScaleFactor]="yLeftAxisScale" and [yRightAxisScaleFactor]="yRightAxisScale"
  exposes the left and right min and max axis values for custom scaling, it is probably best to
  scale one axis in relation to the other axis but for flexibility to scale either the left or
  right axis both were exposed.
  **
  */

  yLeftAxisScale(min, max) {
    return { min: `${min}`, max: `${max}` };
  }

  yRightAxisScale(min, max) {
    return { min: `${min}`, max: `${max}` };
  }

  yLeftTickFormat(data) {
    return `${data.toLocaleString()}`;
  }

  yRightTickFormat(data) {
    return `${data}%`;
  }
  /*
  **
  End of Combo Chart
  **
  */

  onSelect(event) {
    console.log(event);
  }
}
