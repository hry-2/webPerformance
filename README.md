# webPerformance
collecting web performace data

- install：
```javascript
  npm install web-performance-hry --save
```

- usage：
  - es module:
  ```javascript
    import Performancemonitor from 'web-performance-hry/dist/js/webPerformance.min.js'
  ```
  - common js:
  ```javascript
    var Performancemonitor = require ('web-performance-hry/dist/js/webPerformance.min.js')
  ```
  ```javascript
    window.monitor = Performancemonitor;
    monitor.setHeaders(headers)  // set header
    monitor.init(url) // data report api url
  ```