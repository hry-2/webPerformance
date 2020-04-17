export function postData (url, headers, data, callback) {
  let xhr = new XMLHttpRequest()
  xhr.open('POST', url, true)
  xhr.setRequestHeader('content-Type', 'application/json')
  if (headers) {
    for (let x in headers) {
      headers[x] && xhr.setRequestHeader(x, headers[x])
    }
  }
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // 从服务器获得数据
      callback && callback.call(this, xhr.responseText)
    }
  }
  xhr.send(data)
}