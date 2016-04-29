//jQuery对象添加的方法和属性(96,283)

//主要内容
//通过fn简写prototype,可以少写7个字符
// jQuery.fn = jQuery.prototype = { //添加实例方法和属性
// 	jquery: 版本
// 	constructor: 修正指向问题
// 	init(): 初始化和参数管理
// 	selector: 存储选择字符串
// 	length: this对象的长度
// 	toArray(): 转数组方法
// 	get(): 转原生集合
// 	pushStack(): jQ对象的入栈
// 	each(): 遍历集合
// 	ready(): DOM加载的接口
// 	slice(): 集合的截取
// 	first(): 集合的第一项
// 	last(): 集合的最后一项
// 	eq(): 集合的指定项
// 	map(): 返回新集合
// 	end(): 返回集合前一个状态
// 	push(): （内部使用）
// 	sort(): （内部使用）
// 	splice(): （内部使用）
// }

//源码分析


jQuery.fn = jQuery.prototype = {
	// 版本
	jquery: core_version,
	// 修正指向问题（以对象字面量方式给prototype属性赋值，会改变constructor属性，指向Object的构造函数）
	constructor: jQuery,
	// 初始化和参数管理
	init: function(selector, context, rootjQuery) {
		var match, elem;

		// 处理: $(""), $(null), $(undefined), $(false)
		if (!selector) {
			return this;
		}

		// Handle HTML strings
		if (typeof selector === "string") {
			if (selector.charAt(0) === "<" && selector.charAt(selector.length - 1) === ">" && selector.length >= 3) {
				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [null, selector, null];

			} else {
				match = rquickExpr.exec(selector);
			}

			// Match html or make sure no context is specified for #id
			if (match && (match[1] || !context)) {

				// HANDLE: $(html) -> $(array)
				if (match[1]) {
					context = context instanceof jQuery ? context[0] : context;

					// scripts is true for back-compat
					jQuery.merge(this, jQuery.parseHTML(
						match[1],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					));

					// HANDLE: $(html, props)
					if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
						for (match in context) {
							// Properties of context are called as methods if possible
							if (jQuery.isFunction(this[match])) {
								this[match](context[match]);

								// ...and otherwise set as attributes
							} else {
								this.attr(match, context[match]);
							}
						}
					}

					return this;

					// HANDLE: $(#id)
				} else {
					elem = document.getElementById(match[2]);

					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document #6963
					if (elem && elem.parentNode) {
						// Inject the element directly into the jQuery object
						this.length = 1;
						this[0] = elem;
					}

					this.context = document;
					this.selector = selector;
					return this;
				}

				// HANDLE: $(expr, $(...))
			} else if (!context || context.jquery) {
				return (context || rootjQuery).find(selector);

				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor(context).find(selector);
			}

			// HANDLE: $(DOMElement)
		} else if (selector.nodeType) {
			this.context = this[0] = selector;
			this.length = 1;
			return this;

			// HANDLE: $(function)
			// Shortcut for document ready
		} else if (jQuery.isFunction(selector)) {
			return rootjQuery.ready(selector);
		}

		if (selector.selector !== undefined) {
			this.selector = selector.selector;
			this.context = selector.context;
		}

		return jQuery.makeArray(selector, this);
	},

	// 存储选择字符串
	selector: "",

	// this对象的长度
	length: 0,
	// 转数组方法
	toArray: function() {
		return core_slice.call(this);
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	// 转原生集合
	get: function(num) {
		return num == null ?

			// Return a 'clean' array
			this.toArray() :

			// Return just the object
			(num < 0 ? this[this.length + num] : this[num]);
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	// jQuery对象的入栈
	pushStack: function(elems) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge(this.constructor(), elems);

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;
		ret.context = this.context;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	// (You can seed the arguments with an array of args, but this is
	// only used internally.)
	// 遍历集合
	each: function(callback, args) {
		return jQuery.each(this, callback, args);
	},
	// DOM加载的接口
	ready: function(fn) {
		// Add the callback
		jQuery.ready.promise().done(fn);

		return this;
	},
	// 集合的截取
	slice: function() {
		return this.pushStack(core_slice.apply(this, arguments));
	},
	// 集合的第一项
	first: function() {
		return this.eq(0);
	},
	// 集合的最后一项
	last: function() {
		return this.eq(-1);
	},
	// 集合的指定项
	eq: function(i) {
		var len = this.length,
			j = +i + (i < 0 ? len : 0);
		return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
	},
	// 返回新集合
	map: function(callback) {
		return this.pushStack(jQuery.map(this, function(elem, i) {
			return callback.call(elem, i, elem);
		}));
	},
	// 返回集合前一个状态
	end: function() {
		return this.prevObject || this.constructor(null);
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	//(内部使用)
	push: core_push,
	//(内部使用)
	sort: [].sort,
	//(内部使用)
	splice: [].splice
};

