/**
 * log.js -  Print the info in an element.
 * https://github.com/Alex1990/log
 *
 * Alex Chao
 * 2015-01-20
 */
(function(global, factory) {

  // Define an AMD module.
  if (typeof define === 'function' && define.amd) {
    define(function() {
      return factory();
    });
  } else {
    // Assign to the global object.
    global.Log = factory();
  }
})(this, function() {

  // The log constructor.
  function Log(el, opts) {
    if (!(this instanceof Log)) {
      return new Log(el, opts);
    }

    // If the first argument is an element, it will be as the log's container.
    if (el && el.nodeType && el.nodeType === 1) {
      this.el = el;
    } else {
      opts = el;
      el = null;
    }

    // Merge the custom options to defaults.
    this._opts = extend({
      id: '',
      className: '',
      maxCount: 0,
      enableStyled: true,
      containerStyle: {
        position: 'fixed',
        right: '0',
        bottom: '0',
        width: '300px',
        height: '200px',
        backgroundColor: '#fff',
        border: '1px solid #aaa',
        overflow: 'auto'
      },
      itemStyle: {
        margin: '0',
        padding: '0 4px',
        minHeight: '16px',
        fontSize: '12px',
        lineHeight: '16px',
        color: '#333',
        borderBottom: '1px solid #e8e8e8'
      }
    }, opts);

    this.init();
  }
      
  var LogFn = Log.prototype;

  // Initialize
  LogFn.init = function() {
    var opts = this._opts;
    var el = this.el;

    if (!el) {
      el = this.el = document.createElement('div');
      el.id = opts.id;
      el.className = opts.className;
      (document.body || document.documentElement).appendChild(el);
    }

    opts.enableStyled && setStyle(el, opts.containerStyle);

    this.count = 0;
    this.lastItem = null;

    return this;
  };

  // Print the object.
  LogFn.s = LogFn.send = function(obj, className) {

    var opts = this._opts;
    var lastItem;

    if (opts.maxCount && this.count >= opts.maxCount) {
      this.clear();
    }

    lastItem = this.lastItem = document.createElement('p');
    opts.enableStyled && setStyle(lastItem, opts.itemStyle);
    className && (lastItem.className = className);

    if (obj === null) obj = 'null';

    lastItem.innerHTML = obj;

    this.el.appendChild(lastItem);
    this.count++;

    return this;
  };

  // Clear the current infomation in the log container.
  LogFn.clear = function() {
    this.el.innerHTML = '';
    this.count = 0;
    return this;
  };

  // Merge two objects (shadow).
  function extend(to, from) {
    if (({}).toString.call(from) === '[object Object]') {
      for (var p in from) {
        if (from.hasOwnProperty(p)) {
          to[p] = from[p];
        }
      }
    }
    return to;
  }

  // Set the inline style for an element.
  function setStyle(el, props) {
    for (var p in props) {
      if (props.hasOwnProperty(p)) {
        el.style[p] = props[p];
      }
    }
  }

  return Log;

});
