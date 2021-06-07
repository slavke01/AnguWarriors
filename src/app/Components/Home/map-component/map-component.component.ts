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
import { CRUDService } from 'src/app/Services/crud.service';
import { Elementi } from '../../../app.module';
@Component({
  selector: 'app-map-component',
  templateUrl: './map-component.component.html',
  styleUrls: ['./map-component.component.css'],
})
export class MapComponentComponent implements OnInit {
  constructor(private cs: CRUDService) {}
  map;
  iglice: Elementi[] = [];
  ficuri: Feature[] = [];

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

    this.cs.getElements().subscribe((podatak: Elementi[]) => {
      this.iglice = this.iglice.concat(podatak);

      for (var igla of this.iglice) {
        let x = parseFloat(igla.longitude);
        let y = parseFloat(igla.latitude);

        let ff = new Feature({
          geometry: new Point(olProj.fromLonLat([x, y])),
        });

        this.ficuri.push(ff);
      }

      var layer = new VectorLayer({
        source: new VectorSource({
          features: this.ficuri,
        }),
        style: stil,
      });

      this.map.addLayer(layer);
    });
  }
}
