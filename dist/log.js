!function(a,b){"function"==typeof define&&define.amd?define(function(){return b()}):a.Log=b()}(this,function(){function a(c,d){return this instanceof a?(c&&c.nodeType&&1===c.nodeType?this.el=c:(d=c,c=null),this._opts=b({id:"",className:"",maxCount:0,enableStyled:!0,containerStyle:"position:fixed;right:0;bottom:0;width:300px;height:200px;background-color:#fff;border:1px solid #aaa;overflow:auto;",itemStyle:"margin:0;padding:0 4px;min-height:16px;font-size:12px;line-height:16px;color:#333;border-bottom:1px solid #e8e8e8;"},d),void this.init()):new a(c,d)}function b(a,b){if("[object Object]"==={}.toString.call(b))for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);return a}function c(a,b){a.style.cssText=b}var d=a.prototype;return d.init=function(){var a=this._opts,b=this.el;return b||(b=this.el=document.createElement("div"),b.id=a.id,b.className=a.className,(document.body||document.documentElement).appendChild(b)),a.enableStyled&&c(b,a.containerStyle),this.count=0,this.lastItem=null,this},d.s=d.send=function(a,b){var d,e=this._opts;return e.maxCount&&this.count>=e.maxCount&&this.clear(),d=this.lastItem=document.createElement("p"),e.enableStyled&&c(d,e.itemStyle),b&&(d.className=b),null===a&&(a="null"),d.innerHTML=a,this.el.appendChild(d),this.count++,this},d.clear=function(){return this.el.innerHTML="",this.count=0,this},a});