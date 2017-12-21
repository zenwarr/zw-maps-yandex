/// <reference types="yandex-maps" />
import { MapOptions, Map } from '@zcomp/maps';
import * as maps from '@zcomp/maps';
import { ComponentFactory } from "@zcomp/base";
export declare const DefaultOptions: MapOptions;
export interface YandexMapPointData extends maps.PointData {
    placemark: ymaps.Placemark | null;
}
export declare class YandexMap extends Map {
    constructor(root: Element, options: MapOptions);
    /** Protected area **/
    protected _addPlacemark(point: YandexMapPointData): void;
    protected _parsePoint(elem: Element): YandexMapPointData;
    protected _panToPoint(point: YandexMapPointData): void;
    protected _ymap: ymaps.Map;
}
export declare const YandexMapFactory: ComponentFactory<YandexMap, MapOptions>;
