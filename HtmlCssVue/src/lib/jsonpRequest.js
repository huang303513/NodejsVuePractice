let container = document.getElementsByTagName("head")[0];

function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}

function jsonpRequest(url, options) {
  return new Promise((resolve, reject) => {
    try {
      if (!url) {
        reject({
          err: new Error("url不能为空"),
          result: null
        });
      }
      if (!document || !global) {
        reject({
          err: new Error("系统环境有问题"),
          result: null
        });
      }
      let scriptNode = document.createElement("script");
      let data = options || {},
        fnName = "jsonp" + makeid();
      // 添加回调函数
      data["callback"] = fnName;
      // 拼接url
      var params = [];
      for (let [key, value] of Object.entries(data)) {
        params.push(encodeURIComponent(key) + "=" + encodeURIComponent(data[key]));
      }
      url = (url.indexOf("?")) > 0 ? (url + "&") : (url + "?");
      url += params.join("&");
      scriptNode.src = url;
      // 传递的是一个匿名的回调函数，要执行的话，暴露为一个全局方法
      global[fnName] = function (ret) {
        resolve({
          err: null,
          result: ret
        })
        container.removeChild(scriptNode);
        delete global[fnName];
      }
      // 出错处理
      scriptNode.onerror = function (err) {
        reject({
          err: err,
          result: null
        })
        container.removeChild(scriptNode);
        global[fnName] && delete global[fnName];
      }
      scriptNode.type = "text/javascript";
      container.appendChild(scriptNode)
    } catch (error) {
      reject({
        err: error,
        result: null
      });
    }
  });
}




export default jsonpRequest;

