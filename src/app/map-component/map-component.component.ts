import { Component, OnInit } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import Icon from 'ol/style/Icon';
import OSM from 'ol/source/OSM';
import * as olProj from 'ol/proj';
import TileLayer from 'ol/layer/Tile';
import { Fill, Stroke, Circle, Style } from 'ol/style';
@Component({
  selector: 'app-map-component',
  templateUrl: './map-component.component.html',
  styleUrls: ['./map-component.component.css'],
})
export class MapComponentComponent implements OnInit {
  constructor() {}
  map;

  ngOnInit(): void {
    var fill = new Fill({
      color: 'rgba(224,61,170,0.7)',
    });
    var stroke = new Stroke({
      color: '#FD8928',
      width: 1.25,
    });
    var stil = new Style({
      image: new Circle({
        fill: fill,
        stroke: stroke,
        radius: 10,
      }),
      fill: fill,
      stroke: stroke,
    });

    this.map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: olProj.fromLonLat([19.8335, 45.2671]),
        zoom: 12,
      }),
    });
    var layer = new VectorLayer({
      source: new VectorSource({
        features: [
          new Feature({
            geometry: new Point(olProj.fromLonLat([19.8295, 45.2631])),
          }),
          new Feature({
            geometry: new Point(olProj.fromLonLat([19.8319, 45.2621])),
          }),
          new Feature({
            geometry: new Point(olProj.fromLonLat([19.8395, 45.2661])),
          }),
          new Feature({
            geometry: new Point(olProj.fromLonLat([19.8320, 45.2600])),
          }),
        ],
      }),
      style: stil,
    });

    this.map.addLayer(layer);
  }
}
