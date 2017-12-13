# Usage

```
npm i --save @zcomp/maps-yandex
```

```html
<script src="https://api-maps.yandex.ru/2.1/?lang=ru_RU" type="text/javascript" />
```

```js
const MapFactory = require('@zcomp/maps').MapFactory;
const YandexMap = require('@zcomp/maps-yandex').YandexMap;

MapFactory.init(YandexMap);
```
