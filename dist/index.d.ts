/// <reference types="yandex-maps" />
import { PointData, MapOptions, Map } from '@zcomp/maps';
export interface YandexMapPointData extends PointData {
    placemark: ymaps.Placemark | null;
}
export declare class YandexMap extends Map {
    constructor(root: Element, options?: MapOptions);
    /** Protected area **/
    protected _addPlacemark(point: YandexMapPointData): void;
    protected _parsePoint(elem: Element): YandexMapPointData;
    protected _panToPoint(point: YandexMapPointData): void;
    protected _ymap: ymaps.Map;
}
