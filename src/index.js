import * as Util from './utils'
let PerformanceMonitor = {
  headers: null,
  paintData: {},
  getPaint: false,
  getNav: false,
  url: '',
  setHeaders (headers) {
    this.headers = headers
  },
  setUrl (url) {
    this.url = url
  },
  init (url) {
    this.url = url
    if (window.PerformanceObserver) {
      const observer = new window.PerformanceObserver(list => {
        list.getEntries().forEach((data) => {
          if (data.entryType === 'paint') {
            this.paintData[data.name] = parseInt(data.startTime)
            this.getPaint = true
          } else if (data.entryType === 'navigation') {
            this.handleData(data)
            this.getNav = true
          }
        })
        if (this.getPaint && this.getNav) {
          if (!this.paintData['first-paint']) {
            window.performance && window.performance.getEntries().forEach((en) => {
              if (en.name === 'first-paint') {
                this.paintData['first-paint'] = parseInt(en.startTime)
              }
              if (en.name === 'first-contentful-paint') {
                this.paintData['first-contentful-paint'] = parseInt(en.startTime)
              }
            })
          }
          this.paintData.timestamp = (new Date()).getTime()
          this.sendData(this.paintData)
        }
      })
      try {
        observer.observe({
          entryTypes: ['navigation', 'paint']
        })
      } catch (err) {
        console.error(err)
      }
    }
  },
  handleData (data) {
    try {
      this.paintData.dns = data.domainLookupEnd ? parseInt(data.domainLookupEnd - data.domainLookupStart) : null
      this.paintData.fetchStart = data.fetchStart ? data.fetchStart : null
      this.paintData.connectStart = data.connectStart ? parseInt(data.connectStart - data.fetchStart) : null
      this.paintData.connectEnd = data.connectEnd ? parseInt(data.connectEnd - data.fetchStart) : null
      this.paintData.requestStart = data.requestStart ? parseInt(data.requestStart - data.fetchStart) : null
      this.paintData.responseStart = data.responseStart ? parseInt(data.responseStart - data.fetchStart) : null
      this.paintData.responseEnd = data.responseEnd ? parseInt(data.responseEnd - data.fetchStart) : null
      this.paintData.dom = data.domComplete ? parseInt(data.domComplete - data.fetchStart) : null
      this.paintData.interactive = data.domInteractive ? parseInt(data.domInteractive - data.fetchStart) : null
      this.paintData.domready = data.domContentLoadedEventEnd ? parseInt(data.domContentLoadedEventEnd - data.fetchStart) : null
      this.paintData.onload = data.loadEventEnd ? parseInt(data.loadEventEnd - data.fetchStart) : null
    } catch (err) {
      console.error(err)
    }
  },
  sendData (data) {
    try {
      let encode = JSON.stringify(data)
      Util.postData(this.url, this.headers, encode)
    } catch (err) {
      console.error(err)
    }
  }
}
export default PerformanceMonitor