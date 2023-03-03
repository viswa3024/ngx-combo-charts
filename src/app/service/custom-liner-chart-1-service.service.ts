import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomLinerChartServiceServiceOne {

  constructor() { }

  showDots(chart) {
		const paths = chart.chartElement.nativeElement.getElementsByClassName(
			'line-series'
		);

    console.log("paths: ", paths)
		const color = chart.chartElement.nativeElement.getElementsByClassName(
			'line-highlight'
		);


    const chrtColor = color[1].getAttribute('ng-reflect-fill');

    console.log("chrtColor: ", chrtColor)


    const pathElement = paths[1].getElementsByTagName('path')[0];
    const pathAttributes = {
      'marker-start': `url(#dot${1})`,
      'marker-mid': `url(#dot${1})`,
      'marker-end': `url(#dot${1})`
    };
    this.createMarker(chart, chrtColor, 0);
    this.setAttributes(pathElement, pathAttributes);

	}

	/**
	 * create marker
	 *
	 */

	createMarker(chart, color, index) {
		const svg = chart.chartElement.nativeElement.getElementsByTagName('svg');
		var marker = document.createElementNS(
			'http://www.w3.org/2000/svg',
			'marker'
		);
		var circle = document.createElementNS(
			'http://www.w3.org/2000/svg',
			'circle'
		);
		svg[0].getElementsByTagName('defs')[0].append(marker);
		marker.append(circle);
		const m = svg[0].getElementsByTagName('marker')[0];
		const c = svg[0].getElementsByTagName('circle')[0];

		const markerAttributes = {
			id: `dot${index}`,
			viewBox: '0 0 10 10',
			refX: 5,
			refY: 5,
			markerWidth: 5,
			markerHeight: 5
		};

		const circleAttributes = {
			cx: 5,
			cy: 5,
			r: 5,
			fill: color
		};
		m.append(circle);

		this.setAttributes(m, markerAttributes);
		this.setAttributes(c, circleAttributes);
	}

	/**
	 * set multiple attributes
	 */
	setAttributes(element, attributes) {
		for (const key in attributes) {
			element.setAttribute(key, attributes[key]);
		}
	}
}
