import { MapOptions, Map, Coords } from '@zcomp/maps';
import * as maps from '@zcomp/maps';
import {ComponentFactory} from "@zcomp/base";
import * as base from '@zcomp/base';

export const DefaultOptions: MapOptions = base.assign({ }, maps.DefaultOptions);

const DEF_INITIAL_ZOOM = 15;
const DEF_CENTER_LAT = 55.753742,
    DEF_CENTER_LONG = 37.620032;

export interface YandexMapPointData extends maps.PointData {
  placemark: ymaps.Placemark|null;
}

export class YandexMap extends Map {
  constructor(root: Element, options: MapOptions) {
    super(root, options);

    if (!(window as any).ymaps) {
      throw new Error('Yandex maps api is not detected, make sure you have plugged the scripts in');
    }

    if (this.mapContainer) {
      ymaps.ready(() => {
        let center = this.initialCenter || { lat: DEF_CENTER_LAT, long: DEF_CENTER_LONG } as Coords;
        this._ymap = new ymaps.Map(this.mapContainer as HTMLElement, {
          center: [ center.lat, center.long ],
          zoom: this.initialZoom
        });

        if (this._options.disableScrollZoom) {
          this._ymap.behaviors.disable('scrollZoom');
        }

        for (let q = 0; q < this._points.length; ++q) {
          let point = this._points[q] as YandexMapPointData;
          this._addPlacemark(point);
        }
      });
    }
  }

  /** Protected area **/

  protected _addPlacemark(point: YandexMapPointData): void {
    let layout: any = undefined;
    if (point.template) {
      let templ = this.getPointTemplate(point.template);
      if (templ && templ.imageUrl && templ.imageHeight && templ.imageWidth) {
        layout = {
          iconLayout: 'default#image',
          iconImageHref: templ.imageUrl,
          iconImageSize: [ templ.imageWidth, templ.imageHeight ],
          iconImageOffset: [ -(templ.imageAnchorX || 0), -(templ.imageAnchorY || 0) ]
        }
      }
    }

    let placemark = new ymaps.Placemark([ point.lat, point.long ], {
      balloonContent: point.balloonContent || point.title,
      hintContent: point.title || ''
    }, layout);
    point.placemark = placemark;
    this._ymap.geoObjects.add(placemark);
  }

  protected _parsePoint(elem: Element): YandexMapPointData {
    let point = super._parsePoint(elem) as YandexMapPointData;
    point.placemark = null;
    return point;
  }

  protected _panToPoint(point: YandexMapPointData): void {
    if (point) {
      this._ymap.panTo([point.lat, point.long]);
    }
  }

  protected _ymap: ymaps.Map;
}

export const YandexMapFactory = new ComponentFactory<YandexMap, MapOptions>('map', DefaultOptions, YandexMap);
