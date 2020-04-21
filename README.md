# webPerformance
collecting web performace data
- install：
  npm install web-performance-hry --save

- usage：
  - es module:
    import Performancemonitor from 'web-performance-hry/dist/webPerformance.min.js'
  - common js:
    var Performancemonitor = require ('web-performance-hry/dist/webPerformance.min.js')

  - window.Performancemonitor = Performancemonitor;
    Performancemonitor.setHeaders(headers)  // set header
    Performancemonitor.init(url) // data report api url