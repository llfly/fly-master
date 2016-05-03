//jQuery2.0.3
//http://olex.openlogic.com/packages/jquery/2.0.3#package_detail_tabs

//总体架构

//自执行匿名函数
(function() {
	//(21,94)定义变量和函数
	jQuery = function(selector, context) {
		return new jQuery.fn.init(selector, context, rootjQuery);
	};

	//(96,283) 给jQuery对象添加方法和属性

	//(285,347) extend:jQ的继承方法

	//(349,817) jQuery.extend():扩展一些工具方法

	//(877,2856) Sizzle :复杂选择器实现（是一款纯js实现的Css选择器引擎）

	//(2880,3042) Callbacks:回调对象：对函数统一管理

	//(3043,3183) Deferred:延迟对象：对异步统一管理

	//(3184,3295) support: 功能检测

	//(3308,3652) data(): 数据缓存(避免大数据量的元素挂载、预防内存泄露)

	//(3653,3797) queue :队列管理 dequeue

	//(3803,4299) attr() prop() val() addClass() 对元素属性的操作

	//(4300,5128) 事件操作相关方法(on、trigger等)

	//(5140,6057) DOM操作方法

	//(6058,6620) CSS样式操作方法

	//(6621,7854) 提交数据和ajax():跨域、请求script、ajax

	//(7855,8584) animate方法

	//(8585,8792) 位置，尺寸方法

	//(8804,8821) jQuery支持模块化模式

	//(8826) 对外提供接口
	window.jQuery = window.$ = jQuery;
})();

//--------------------------------------------------------------------------------------------------------------------------

//匿名函数自执行

(function(window, undefined) {
	// 对外提供接口，将局部变量jQuery绑到window对象上
	window.jQuery = window.$ = jQuery;
})(window);


//匿名函数
//形成闭包，封装局部变量，防止污染全局作用域。

//参数
//传入window
//减少作用域链的查找距离
//便于压缩


//传入undefined
//undefined是window的一个属性，不是关键字，也不是保留字，可被修改，防greenie修改。


//--------------------------------------------------------------------------------------------------------------------------

//参数说明(21-94)

(function(window, undefined) {

	//"use strict";
	var
	// 在866行 rootjQuery = jQuery(document);
	// 便于对根目录操作的压缩，将document变量提出，便于维护
		rootjQuery,

		// dom 加载相关(扩展工具方法和Sizzle中间部分)
		readyList,


		// 字符串形式的undefined
		// window.a == undefined; 不兼容ie9中xmlNode类型
		// typeof window.a == 'undefined'; 全兼容
		core_strundefined = typeof undefined,

		// 变量存储，便于压缩
		location = window.location,
		document = window.document,
		docElem = document.documentElement,

		// 防止冲突(详见扩展工具方法)
		_jQuery = window.jQuery,
		_$ = window.$,

		// 存放类型，用于$.type()类型判断
		// {['Object String']:'string',['Object Array']:'array'}
		class2type = {},

		// 老版本和数据缓存有关，进行id删除，新版本就是一个空数组
		core_deletedIds = [],

		// 版本号
		core_version = "2.0.3",

		// 数组，对象，字符串方法，便于压缩
		core_concat = core_deletedIds.concat,
		core_push = core_deletedIds.push,
		core_slice = core_deletedIds.slice,
		core_indexOf = core_deletedIds.indexOf,
		core_toString = class2type.toString,
		core_hasOwn = class2type.hasOwnProperty,
		core_trim = core_version.trim,

		// 入口函数
		jQuery = function(selector, context) {
			// 通过运算符new来创建并返回一个构造函数的实例，省去了构造函数jQuery()前面的运算符new，即我们创建jQuery对象时，可以省略运算符new直接写jQuery()
			return new jQuery.fn.init(selector, context, rootjQuery);
		},

		// 匹配数字(正数，负数，小数，科学计数法),css方法中使用
		core_pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,

		// 匹配单词（方法：元素间不存在空格即为单词)
		core_rnotwhite = /\S+/g,

		// 正则匹配标签 | 匹配# id
		// 通过location.hash防止xss注入
		// <p>...</p>或者#div
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

		// 正则匹配空标签 <p></p> <div></div>
		rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,

		// ms IE前缀处理
		// -webkit-margin-left : webkitMarginLeft
		// -ms-margin-left : MsMarginLeft
		rmsPrefix = /^-ms-/,
		// 正则匹配转换大写、数字
		rdashAlpha = /-([\da-z])/gi,

		// 转换成驼峰方法的回调函数
		fcamelCase = function(all, letter) {
			return letter.toUpperCase();
		},

		// dom加载成功触发的回调函数
		completed = function() {
			document.removeEventListener("DOMContentLoaded", completed, false);
			window.removeEventListener("load", completed, false);
			jQuery.ready();
		};
})(window);


//jQuery函数
/*
$(),jQuery() 都调用jQuery函数，返回一个对象new jQuery.fn.init(selector, context, rootjQuery);
而下面jQuery.fn引用jQuery.prototype，也就是返回一个jQuery原型上的init方法
*/


//通常情况下面向对象的方法
function Aaa() {}
Aaa.prototype.init = function() {};
Aaa.prototype.css = function() {};
var a1 = new Aaa();
a1.init();
a1.css();

//jQuery中面向对象的方法
function jQuery() {
	return new jQuery.prototype.init();
}
jQuery.prototype.init = function() {};
jQuery.prototype.css = function() {};
//283
jQuery.prototype.init.prototype = jQuery.prototype;
jQuery().css();


//jQuery对象是一个类数组的对象，含有连续的整形属性，length属性和大量的jQuery方法。jQuery对象由构造函数jQuery()创建，$()是jQuery()的简写。

this = {
	0: li,
	1: li,
	2: li,
	length: 3
}






//extend:jQ的继承方法(285,347)

//将extend方法扩展到jQuery函数下，扩展静态方法
//再将extend方法扩展到jQuery的原型下面，扩展实例方法


jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[0] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if (typeof target === "boolean") {
		deep = target;
		target = arguments[1] || {};
		// skip the boolean and the target
		i = 2;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if (typeof target !== "object" && !jQuery.isFunction(target)) {
		target = {};
	}

	// extend jQuery itself if only one argument is passed
	if (length === i) {
		target = this;
		--i;
	}

	for (; i < length; i++) {
		// Only deal with non-null/undefined values
		if ((options = arguments[i]) != null) {
			// Extend the base object
			for (name in options) {
				src = target[name];
				copy = options[name];

				// Prevent never-ending loop
				if (target === copy) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))) {
					if (copyIsArray) {
						copyIsArray = false;
						clone = src && jQuery.isArray(src) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject(src) ? src : {};
					}

					// Never move original objects, clone them
					target[name] = jQuery.extend(deep, clone, copy);

					// Don't bring in undefined values
				} else if (copy !== undefined) {
					target[name] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};


//jQuery.extend():扩展工具方法(349,817)

//原型属性和方法


//静态属性和方法

//实例方法
//只能给jQuery对象用，不能给原生js用
$().html
$().css

//静态方法
//在函数下的扩展方法，静态方法，给jQuery扩展静态方法时，就叫做扩展工具方法
//既可以给jQuery对象来用，也可以给原生js用
$.trim()
$.proxy()


//通常在实例方法里调用工具方法


jQuery.extend({
	// Unique for each copy of jQuery on the page
	expando: "jQuery" + (core_version + Math.random()).replace(/\D/g, ""),

	noConflict: function(deep) {
		if (window.$ === jQuery) {
			window.$ = _$;
		}

		if (deep && window.jQuery === jQuery) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	},

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Hold (or release) the ready event
	holdReady: function(hold) {
		if (hold) {
			jQuery.readyWait++;
		} else {
			jQuery.ready(true);
		}
	},

	// Handle when the DOM is ready
	ready: function(wait) {

		// Abort if there are pending holds or we're already ready
		if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if (wait !== true && --jQuery.readyWait > 0) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith(document, [jQuery]);

		// Trigger any bound ready events
		if (jQuery.fn.trigger) {
			jQuery(document).trigger("ready").off("ready");
		}
	},

	// See test/unit/core.js for details concerning isFunction.
	// Since version 1.3, DOM methods and functions like alert
	// aren't supported. They return false on IE (#2968).
	isFunction: function(obj) {
		return jQuery.type(obj) === "function";
	},

	isArray: Array.isArray,

	isWindow: function(obj) {
		return obj != null && obj === obj.window;
	},

	isNumeric: function(obj) {
		return !isNaN(parseFloat(obj)) && isFinite(obj);
	},

	type: function(obj) {
		if (obj == null) {
			return String(obj);
		}
		// Support: Safari <= 5.1 (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[core_toString.call(obj)] || "object" :
			typeof obj;
	},

	isPlainObject: function(obj) {
		// Not plain objects:
		// - Any object or value whose internal [[Class]] property is not "[object Object]"
		// - DOM nodes
		// - window
		if (jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow(obj)) {
			return false;
		}

		// Support: Firefox <20
		// The try/catch suppresses exceptions thrown when attempting to access
		// the "constructor" property of certain host objects, ie. |window.location|
		// https://bugzilla.mozilla.org/show_bug.cgi?id=814622
		try {
			if (obj.constructor &&
				!core_hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
				return false;
			}
		} catch (e) {
			return false;
		}

		// If the function hasn't returned already, we're confident that
		// |obj| is a plain object, created by {} or constructed with new Object
		return true;
	},

	isEmptyObject: function(obj) {
		var name;
		for (name in obj) {
			return false;
		}
		return true;
	},

	error: function(msg) {
		throw new Error(msg);
	},

	// data: string of html
	// context (optional): If specified, the fragment will be created in this context, defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	parseHTML: function(data, context, keepScripts) {
		if (!data || typeof data !== "string") {
			return null;
		}
		if (typeof context === "boolean") {
			keepScripts = context;
			context = false;
		}
		context = context || document;

		var parsed = rsingleTag.exec(data),
			scripts = !keepScripts && [];

		// Single tag
		if (parsed) {
			return [context.createElement(parsed[1])];
		}

		parsed = jQuery.buildFragment([data], context, scripts);

		if (scripts) {
			jQuery(scripts).remove();
		}

		return jQuery.merge([], parsed.childNodes);
	},

	parseJSON: JSON.parse,

	// Cross-browser xml parsing
	parseXML: function(data) {
		var xml, tmp;
		if (!data || typeof data !== "string") {
			return null;
		}

		// Support: IE9
		try {
			tmp = new DOMParser();
			xml = tmp.parseFromString(data, "text/xml");
		} catch (e) {
			xml = undefined;
		}

		if (!xml || xml.getElementsByTagName("parsererror").length) {
			jQuery.error("Invalid XML: " + data);
		}
		return xml;
	},

	noop: function() {},

	// Evaluates a script in a global context
	globalEval: function(code) {
		var script,
			indirect = eval;

		code = jQuery.trim(code);

		if (code) {
			// If the code includes a valid, prologue position
			// strict mode pragma, execute code by injecting a
			// script tag into the document.
			if (code.indexOf("use strict") === 1) {
				script = document.createElement("script");
				script.text = code;
				document.head.appendChild(script).parentNode.removeChild(script);
			} else {
				// Otherwise, avoid the DOM node creation, insertion
				// and removal by using an indirect global eval
				indirect(code);
			}
		}
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function(string) {
		return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
	},

	nodeName: function(elem, name) {
		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
	},

	// args is for internal usage only
	each: function(obj, callback, args) {
		var value,
			i = 0,
			length = obj.length,
			isArray = isArraylike(obj);

		if (args) {
			if (isArray) {
				for (; i < length; i++) {
					value = callback.apply(obj[i], args);

					if (value === false) {
						break;
					}
				}
			} else {
				for (i in obj) {
					value = callback.apply(obj[i], args);

					if (value === false) {
						break;
					}
				}
			}

			// A special, fast, case for the most common use of each
		} else {
			if (isArray) {
				for (; i < length; i++) {
					value = callback.call(obj[i], i, obj[i]);

					if (value === false) {
						break;
					}
				}
			} else {
				for (i in obj) {
					value = callback.call(obj[i], i, obj[i]);

					if (value === false) {
						break;
					}
				}
			}
		}

		return obj;
	},

	trim: function(text) {
		return text == null ? "" : core_trim.call(text);
	},

	// results is for internal usage only
	makeArray: function(arr, results) {
		var ret = results || [];

		if (arr != null) {
			if (isArraylike(Object(arr))) {
				jQuery.merge(ret,
					typeof arr === "string" ?
					[arr] : arr
				);
			} else {
				core_push.call(ret, arr);
			}
		}

		return ret;
	},

	inArray: function(elem, arr, i) {
		return arr == null ? -1 : core_indexOf.call(arr, elem, i);
	},

	merge: function(first, second) {
		var l = second.length,
			i = first.length,
			j = 0;

		if (typeof l === "number") {
			for (; j < l; j++) {
				first[i++] = second[j];
			}
		} else {
			while (second[j] !== undefined) {
				first[i++] = second[j++];
			}
		}

		first.length = i;

		return first;
	},

	grep: function(elems, callback, inv) {
		var retVal,
			ret = [],
			i = 0,
			length = elems.length;
		inv = !!inv;

		// Go through the array, only saving the items
		// that pass the validator function
		for (; i < length; i++) {
			retVal = !!callback(elems[i], i);
			if (inv !== retVal) {
				ret.push(elems[i]);
			}
		}

		return ret;
	},

	// arg is for internal usage only
	map: function(elems, callback, arg) {
		var value,
			i = 0,
			length = elems.length,
			isArray = isArraylike(elems),
			ret = [];

		// Go through the array, translating each of the items to their
		if (isArray) {
			for (; i < length; i++) {
				value = callback(elems[i], i, arg);

				if (value != null) {
					ret[ret.length] = value;
				}
			}

			// Go through every key on the object,
		} else {
			for (i in elems) {
				value = callback(elems[i], i, arg);

				if (value != null) {
					ret[ret.length] = value;
				}
			}
		}

		// Flatten any nested arrays
		return core_concat.apply([], ret);
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function(fn, context) {
		var tmp, args, proxy;

		if (typeof context === "string") {
			tmp = fn[context];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if (!jQuery.isFunction(fn)) {
			return undefined;
		}

		// Simulated bind
		args = core_slice.call(arguments, 2);
		proxy = function() {
			return fn.apply(context || this, args.concat(core_slice.call(arguments)));
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	access: function(elems, fn, key, value, chainable, emptyGet, raw) {
		var i = 0,
			length = elems.length,
			bulk = key == null;

		// Sets many values
		if (jQuery.type(key) === "object") {
			chainable = true;
			for (i in key) {
				jQuery.access(elems, fn, i, key[i], true, emptyGet, raw);
			}

			// Sets one value
		} else if (value !== undefined) {
			chainable = true;

			if (!jQuery.isFunction(value)) {
				raw = true;
			}

			if (bulk) {
				// Bulk operations run against the entire set
				if (raw) {
					fn.call(elems, value);
					fn = null;

					// ...except when executing function values
				} else {
					bulk = fn;
					fn = function(elem, key, value) {
						return bulk.call(jQuery(elem), value);
					};
				}
			}

			if (fn) {
				for (; i < length; i++) {
					fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
				}
			}
		}

		return chainable ?
			elems :

			// Gets
			bulk ?
			fn.call(elems) :
			length ? fn(elems[0], key) : emptyGet;
	},

	now: Date.now,

	// A method for quickly swapping in/out CSS properties to get correct calculations.
	// Note: this method belongs to the css module but it's needed here for the support module.
	// If support gets modularized, this method should be moved back to the css module.
	swap: function(elem, options, callback, args) {
		var ret, name,
			old = {};

		// Remember the old values, and insert the new ones
		for (name in options) {
			old[name] = elem.style[name];
			elem.style[name] = options[name];
		}

		ret = callback.apply(elem, args || []);

		// Revert the old values
		for (name in options) {
			elem.style[name] = old[name];
		}

		return ret;
	}
});


jQuery = function(selector, context) {
	return new jQuery.fn.init(selector, context, rootjQuery); //返回jQuery的原型下面的init方法
}
jQuery.fn = jQuery.prototype;


//传统面向对象


function A() {}
A.prototype.init = function() {};
A.prototype.css = function() {};

var a1 = new A();
a1.init();
a1.css();


//jQuery面向对象


function jQuery() {
	return new jQuery.prototype.init();
}
jQuery.fn = jQuery.prototype = {
		constructor: jQuery,
		//真正的构造函数
		init: function() {},
		css: function() {}
	}
	//283
	//使init的原型有jQuery的原型
jQuery.fn.init.prototype = jQuery.prototype;

//扩展静态方法，扩展实例方法 用同一套代码实现
jQuery.extend = jQuery.fn.extend = function() {}







// jQuery源码框架组成
// 匿名函数自执行的优点
// 匿名函数对外接口设置
// window下挂载$()与jQuery()
// jQuery.prototype 原型、jQuery 基于面向对象的程序
// jQuery函数调用与jQuery对象调用方法
// jQuery中继承方法：extend
// jQuery扩展工具方法：$.trim()、$.proxy()……
// 静态方法和实例方法的关系和区别简要说明



//1. 防止代码冲突


//--------------------------------------------------------------------------------------------------------------------------

function fn1() {
	alert(1)
};

function fn2() {
	alert(2)
};

var cb = $.callback();
cb.add(fn1);
cb.add(fn2);
cb.fire(); //1,2

var dfd = $.Deferred();

setTimeout(function() {
	alert(1);
	dfd.resolve();
}, 1000);

dfd.done(function() {
	alert(2);
})

//没有挂载到元素身上
$('#div').data('name','hello');
$('#div').data('name');