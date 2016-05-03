//jQuery工具方法


// expando: 生成唯一JQ字符串（内部）(数据缓存，事件操作，ajax)
// noConflict() : 防止冲突
// isReady: DOM是否加载完（内部）
// readyWait:等待多少文件的计数器（内部）
// holdReady():推迟DOM触发
// ready():准备DOM触发
// isFunction():是否为函数
// isArray():是否为数组
// isWindow():是否为window
// isNumberic():是否为数字
// type():判断数据类型
// isPlainObject():是否为对象自变量
// isEmptyObject():是否为空的对象
// error():抛出异常
// parseHTML():解析节点
// parseJSON():解析JSON
// parseXML():解析XML
// noop():空函数
// globalEval():全局解析JS
// camelCase():转驼峰
// nodeName():是否为指定节点名（内部）
// each():遍历集合
// trim():去前后空格
// makeArray():类数组转真数组
// isArray():数组版indexOf
// merge():合并数组
// grep():过滤新数组
// map():映射新数组
// guid:唯一标识符（内部）
// proxy():改this指向
// access():多功能值操作（内部）
// now():当前时间
// swap():css交换（内部）


//demo



// console.log($.expando);

// var _ = $.noConflict();
// var $ = 123;

// _(function(){
// 	alert($);//123
// })




// jQuery.ready.promise = function(){};
// 监测DOM的异步操作（内部）
// function isArraylike(){}
// 检测DOM的异步操作（内部）



// DOM 加载
// DOMContentLoaded onload

// 1. $(function(){})
// 2. $(document).ready(function(){})
// 3. $(document).on('ready',function(){})


// 推迟
// 内部实现通过readyWait参数的自增自减实现，因此加载多个模块，多次调用


// $.holdReady(true)//推迟
// $.holdReady(false)//释放
// $(function(){alert(1)});


// //使用

// $.holdReady(true);
// $.getScript('a.js',function(){
//     $.holdReady(false);
// });

// $(function(){alert(2)});


// $(function(){}) -> $(document).ready(function(){}) ->$().ready() -> jQuery.ready.promise().done(fn){


// } -> $.ready() {readyList.resolveWith(document,[jQuery]);}

// $().ready();
// $.ready()



// jQuery.ready.promise = function( obj ) {
// 	if ( !readyList ) {

// 		readyList = jQuery.Deferred();

// 		// Catch cases where $(document).ready() is called after the browser event has already occurred.
// 		// we once tried to use readyState "interactive" here, but it caused issues like the one
// 		// discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15
// 		//DOM已经记载好
// 		if ( document.readyState === "complete" ) {
// 			// Handle it asynchronously to allow scripts the opportunity to delay ready
// 			//IE 会提前触发
// 			setTimeout( jQuery.ready );

// 		} else {

// 			// Use the handy event callback
// 			document.addEventListener( "DOMContentLoaded", completed, false );

// 			// A fallback to window.onload, that will always work
// 			//有些浏览器会缓存load事件，例如火狐，这么写不论哪一个先加载完都执行completed回调
// 			window.addEventListener( "load", completed, false );
// 		}
// 	}
// 	return readyList.promise( obj );
// };




// completed = function() {
// 		document.removeEventListener( "DOMContentLoaded", completed, false );
// 		window.removeEventListener( "load", completed, false );
// 		jQuery.ready();
// 	};

// // Handle when the DOM is ready
// 	ready: function( wait ) {

// 		// Abort if there are pending holds or we're already ready
// 		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
// 			return;
// 		}

// 		// Remember that the DOM is ready
// 		jQuery.isReady = true;

// 		// If a normal DOM Ready event fired, decrement, and wait if need be
// 		if ( wait !== true && --jQuery.readyWait > 0 ) {
// 			return;
// 		}

// 		// If there are functions bound, to execute
// 		readyList.resolveWith( document, [ jQuery ] );

// 		// Trigger any bound ready events
// 		if ( jQuery.fn.trigger ) {
// 			jQuery( document ).trigger("ready").off("ready");
// 		}
// 	}







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