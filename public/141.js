(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[141],{

/***/ "./node_modules/vuebars/dist/vue-bars.esm.js":
/*!***************************************************!*\
  !*** ./node_modules/vuebars/dist/vue-bars.esm.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function transitionColor(from, to, count) {
  count = count + 1;
  var int = parseInt(from, 16); // 100
  var intTo = parseInt(to, 16); // 50
  var list = []; // 5
  var diff = int - intTo; // 50
  var isNegative = diff < 0; // false
  var one = diff / count; // 10
 
  list.push(from);
  for (var i = 1; i <= count; i++) {
    list.push(Math.floor(int - (one * i)).toString(16));
  }
 
  return list
}
 
function transition(from, to, count) {
  count = count || 3;
  var r = from.slice(0, 2), g = from.slice(2, 4), b = from.slice(4, 6);
  var rt = to.slice(0, 2), gt = to.slice(2, 4), bt = to.slice(4, 6);
  var allR = transitionColor(r, rt, count);
  var allG = transitionColor(g, gt, count);
  var allB = transitionColor(b, bt, count);
  var list = [];
 
  allR.forEach(function(_, i) {
    list.push('' + allR[i] + allG[i] + allB[i]);
  });
 
  return list
}
 
function generateGradientStepsCss(from, to, count) {
  from = from.replace('#', '');
  to = to.replace('#', '');
  var values = transition(from, to, count);
  var total = 100 / (count + 1);
  var obj = [];
  for (var i = 0; i <= count + 1; i++) {
    obj.push({percentage: Math.floor(total * i), value: values[i]});
  }
  return obj.map(function(value) {
    return '#' + value.value
  })
}

/**
 *  Calculate the coordinate
 * @param  {number[]|object[]}  arr
 * @param  {object}             boundary
 * @return {object[]}
 */
function genPoints (inArr, ref, ref$1) {
  var minX = ref.minX;
  var minY = ref.minY;
  var maxX = ref.maxX;
  var maxY = ref.maxY;
  var max = ref$1.max;
  var min = ref$1.min;

  var arr = inArr.map(function (item) { return (typeof item === 'number' ? item : item.value); });
  var minValue = Math.min.apply(Math, arr.concat( [min] )) - 0.001;
  var gridX = (maxX - minX) / (arr.length - 1);
  var gridY = (maxY - minY) / (Math.max.apply(Math, arr.concat( [max] )) + 0.001 - minValue);

  return arr.map(function (value, index) {
    var title = typeof inArr[index] === 'number' ? inArr[index] : inArr[index].title;
    return {
      x: index * gridX + minX,
      y:
        maxY -
        (value - minValue) * gridY +
        +(index === arr.length - 1) * 0.00001 -
        +(index === 0) * 0.00001,
      v: title
    }
  })
}

function genBars (_this, arr, h) {
  var ref = _this.boundary;
  var minX = ref.minX;
  var minY = ref.minY;
  var maxX = ref.maxX;
  var maxY = ref.maxY;
  var totalWidth = (maxX) / (arr.length-1);
  if (!_this.barWidth) {
    _this.barWidth = totalWidth - (_this.padding || 5);
  }
  if (!_this.rounding) {
    _this.rounding = 2;
  }

  var gradients = 0;
  if (_this.gradient && _this.gradient.length > 1) {
    gradients = generateGradientStepsCss(_this.gradient[0], _this.gradient[1], (arr.length-1));
  }
  var offsetX = (totalWidth - _this.barWidth) / 2;

  return arr.map(function (item, index) {
    return h('rect', {
      attrs: {
        id: ("bar-id-" + index),
        fill: (gradients ? gradients[index] : (_this.gradient[0] ? _this.gradient[0] : '#000')),
        x: item.x - offsetX,
        y: 0,
        width: _this.barWidth,
        height: (maxY - item.y),
        rx: _this.rounding,
        ry: _this.rounding
      }
    }, [
      h('animate', {
        attrs: {
          attributeName: 'height',
          from: 0,
          to: (maxY - item.y),
          dur: ((_this.growDuration) + "s"),
          fill: 'freeze'
        }
      }),
      h('title', {}, [item.v])
    ])
  })
}

var Path = {
  props: ['data', 'boundary', 'barWidth', 'id', 'gradient', 'growDuration', 'max', 'min'],

  render: function render (h) {
    var ref = this;
    var data = ref.data;
    var boundary = ref.boundary;
    var max = ref.max;
    var min = ref.min;
    var points = genPoints(data, boundary, { max: max, min: min } );
    var bars = genBars(this, points, h);

    return h('g', {
      attrs: {
        transform: ("scale(1,-1) translate(0,-" + (this.boundary.maxY) + ")")
      }
    }, bars)
  }
};

var Bars$1 = {
  name: 'Bars',

  props: {
    data: {
      type: Array,
      required: true
    },
    autoDraw: Boolean,
    barWidth: {
      type: Number,
      default: 8
    },
    growDuration: {
      type: Number,
      default: 0.5
    },
    gradient: {
      type: Array,
      default: function () { return ['#000']; }
    },
    max: {
      type: Number,
      default: -Infinity
    },
    min: {
      type: Number,
      default: Infinity
    },
    height: Number,
    width: Number,
    padding: {
      type: Number,
      default: 8
    }
  },

  render: function render (h) {
    if (!this.data || this.data.length < 2) { return }
    var ref = this;
    var width = ref.width;
    var height = ref.height;
    var padding = ref.padding;
    var viewWidth = width || 300;
    var viewHeight = height || 75;
    var boundary = {
      minX: padding,
      minY: padding,
      maxX: viewWidth - padding,
      maxY: viewHeight - padding
    };
    var props = this.$props;

    props.boundary = boundary;
    props.id = 'vue-bars-' + this._uid;

    return h('svg', {
      attrs: {
        width: width || '100%',
        height: height || '25%',
        viewBox: ("0 0 " + viewWidth + " " + viewHeight)
      }
    }, [
      h(Path, {
        props: props,
        ref: 'path'
      })
    ])
  }
};

Bars$1.install = function (Vue) {
  Vue.component(Bars$1.name, Bars$1);
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Bars$1);
}

/* harmony default export */ __webpack_exports__["default"] = (Bars$1);


/***/ }),

/***/ "./node_modules/vuetrend/dist/vue-trend.esm.js":
/*!*****************************************************!*\
  !*** ./node_modules/vuetrend/dist/vue-trend.esm.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function int (value) {
  return parseInt(value, 10)
}

/**
 * https://en.wikipedia.org/wiki/Collinearity
 * x=(x1+x2)/2
 * y=(y1+y2)/2
 */
function checkCollinear (p0, p1, p2) {
  return (
    int(p0.x + p2.x) === int(2 * p1.x) && int(p0.y + p2.y) === int(2 * p1.y)
  )
}

function getDistance (p1, p2) {
  return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2))
}

function moveTo (to, from, radius) {
  var vector = { x: to.x - from.x, y: to.y - from.y };
  var length = Math.sqrt(vector.x * vector.x + vector.y * vector.y);
  var unitVector = { x: vector.x / length, y: vector.y / length };

  return {
    x: from.x + unitVector.x * radius,
    y: from.y + unitVector.y * radius
  }
}

/**
 *  Calculate the coordinate
 * @param  {number[]|object[]}  arr
 * @param  {object}             boundary
 * @return {object[]}
 */
function genPoints (arr, ref, ref$1) {
  var minX = ref.minX;
  var minY = ref.minY;
  var maxX = ref.maxX;
  var maxY = ref.maxY;
  var max = ref$1.max;
  var min = ref$1.min;

  arr = arr.map(function (item) { return (typeof item === 'number' ? item : item.value); });
  var minValue = Math.min.apply(Math, arr.concat( [min] )) - 0.001;
  var gridX = (maxX - minX) / (arr.length - 1);
  var gridY = (maxY - minY) / (Math.max.apply(Math, arr.concat( [max] )) + 0.001 - minValue);

  return arr.map(function (value, index) {
    return {
      x: index * gridX + minX,
      y:
        maxY -
        (value - minValue) * gridY +
        +(index === arr.length - 1) * 0.00001 -
        +(index === 0) * 0.00001
    }
  })
}

/**
 * From https://github.com/unsplash/react-trend/blob/master/src/helpers/DOM.helpers.js#L18
 */
function genPath (points, radius) {
  var start = points.shift();

  return (
    "M" + (start.x) + " " + (start.y) +
    points
      .map(function (point, index) {
        var next = points[index + 1];
        var prev = points[index - 1] || start;
        var isCollinear = next && checkCollinear(next, point, prev);

        if (!next || isCollinear) {
          return ("L" + (point.x) + " " + (point.y))
        }

        var threshold = Math.min(
          getDistance(prev, point),
          getDistance(next, point)
        );
        var isTooCloseForRadius = threshold / 2 < radius;
        var radiusForPoint = isTooCloseForRadius ? threshold / 2 : radius;

        var before = moveTo(prev, point, radiusForPoint);
        var after = moveTo(next, point, radiusForPoint);

        return ("L" + (before.x) + " " + (before.y) + "S" + (point.x) + " " + (point.y) + " " + (after.x) + " " + (after.y))
      })
      .join('')
  )
}

var Path = {
  props: ['smooth', 'data', 'boundary', 'radius', 'id', 'max', 'min'],

  render: function render (h) {
    var ref = this;
    var data = ref.data;
    var smooth = ref.smooth;
    var boundary = ref.boundary;
    var radius = ref.radius;
    var id = ref.id;
    var max = ref.max;
    var min = ref.min;
    var points = genPoints(data, boundary, { max: max, min: min });
    var d = genPath(points, smooth ? radius : 0);

    return h('path', {
      attrs: { d: d, fill: 'none', stroke: ("url(#" + id + ")") }
    })
  }
};

var Gradient = {
  props: ['gradient', 'id'],

  render: function render (h) {
    var ref = this;
    var gradient = ref.gradient;
    var id = ref.id;
    var len = gradient.length - 1 || 1;
    var stops = gradient
      .slice()
      .reverse()
      .map(function (color, index) { return h('stop', {
          attrs: {
            offset: index / len,
            'stop-color': color
          }
        }); }
      );

    return h('defs', [
      h(
        'linearGradient',
        {
          attrs: {
            id: id,
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1
          }
        },
        stops
      )
    ])
  }
};

var Trend$1 = {
  name: 'Trend',

  props: {
    data: {
      type: Array,
      required: true
    },
    autoDraw: Boolean,
    autoDrawDuration: {
      type: Number,
      default: 2000
    },
    autoDrawEasing: {
      type: String,
      default: 'ease'
    },
    gradient: {
      type: Array,
      default: function () { return ['#000']; }
    },
    max: {
      type: Number,
      default: -Infinity
    },
    min: {
      type: Number,
      default: Infinity
    },
    height: Number,
    width: Number,
    padding: {
      type: Number,
      default: 8
    },
    radius: {
      type: Number,
      default: 10
    },
    smooth: Boolean
  },

  watch: {
    data: {
      immediate: true,
      handler: function handler (val) {
        var this$1 = this;

        this.$nextTick(function () {
          if (this$1.$isServer || !this$1.$refs.path || !this$1.autoDraw) {
            return
          }

          var path = this$1.$refs.path.$el;
          var length = path.getTotalLength();

          path.style.transition = 'none';
          path.style.strokeDasharray = length + ' ' + length;
          path.style.strokeDashoffset = Math.abs(
            length - (this$1.lastLength || 0)
          );
          path.getBoundingClientRect();
          path.style.transition = "stroke-dashoffset " + (this$1.autoDrawDuration) + "ms " + (this$1.autoDrawEasing);
          path.style.strokeDashoffset = 0;
          this$1.lastLength = length;
        });
      }
    }
  },

  render: function render (h) {
    if (!this.data || this.data.length < 2) { return }
    var ref = this;
    var width = ref.width;
    var height = ref.height;
    var padding = ref.padding;
    var viewWidth = width || 300;
    var viewHeight = height || 75;
    var boundary = {
      minX: padding,
      minY: padding,
      maxX: viewWidth - padding,
      maxY: viewHeight - padding
    };
    var props = this.$props;

    props.boundary = boundary;
    props.id = 'vue-trend-' + this._uid;
    return h(
      'svg',
      {
        attrs: {
          width: width || '100%',
          height: height || '25%',
          viewBox: ("0 0 " + viewWidth + " " + viewHeight)
        }
      },
      [
        h(Gradient, { props: props }),
        h(Path, {
          props: props,
          ref: 'path'
        })
      ]
    )
  }
};

Trend$1.install = function (Vue) {
  Vue.component(Trend$1.name, Trend$1);
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Trend$1);
}

/* harmony default export */ __webpack_exports__["default"] = (Trend$1);


/***/ })

}]);