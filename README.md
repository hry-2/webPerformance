# webPerformance
collecting web performace data
- install：
  npm install web-performance-hry --save

- usage：
  - es module:
    import Performancemonitor from 'web-performance-hry/dist/js/webPerformance.min.js'
  - common js:
    var Performancemonitor = require ('web-performance-hry/dist/js/webPerformance.min.js')

  - window.monitor = Performancemonitor;
    monitor.setHeaders(headers)  // set header
    monitor.init(url) // data report api url