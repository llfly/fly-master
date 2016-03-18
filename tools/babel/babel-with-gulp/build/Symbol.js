'use strict';
//--------------------------Symbol-------------------------------------
//新的原始数据类型Symbol，表示独一无二的值。
//是Js的第七种数据类型，前六种是：Undefined、Null、Boolean、String、Number、Object

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var log = function log(obj) {
	return console.log(obj);
};

//1. typeof
{
	//函数前不能使用new命令,即Symbol值不是对象，所以不能添加属性
	var s = Symbol();

	log(typeof s === 'undefined' ? 'undefined' : _typeof(s)); //Symbol
}

//2.toString ==

{
	//可以接受一个字符串作为参数，表示对Symbol实例的描述，主要是为了在控制台显示，或者转为字符串时，比较容易区分。
	//函数的参数只是表示对当前Symbol值的描述，因此相同参数的Symbol函数的返回值是不相等的。
	var s1 = Symbol('foo');
	var s2 = Symbol('bar');
	var s3 = Symbol('foo');

	log(s1); // Symbol(foo)
	log(s2); // Symbol(bar)
	log(s1 == s3); //false
	log(s1 === s3); //false

	log(s1.toString()); // Symbol(foo)
	log(s2.toString()); // Symbol(bar)
}

//3. Operation,turn
{
	var sym = Symbol('My symbol');

	//log("your symbol is " + sym);// TypeError: can't convert symbol to string
	//log(`your symbol is ${sym}`);// TypeError: can't convert symbol to string
	log(String(sym)); // Symbol(My symbol)
	log(sym.toString()); // Symbol(My symbol)
	log(Boolean(sym)); // true
	log(!sym); // false

	if (sym) {
		log('i am come in'); // i am come in
	}

	//log(Number(sym)); // TypeError
	//log(sym + 2); // TypeError
}

//4. attribute
{
	(function () {
		var _obj;

		var mySymbol = Symbol();
		// 第一种写法
		var a = {};
		a[mySymbol] = 'Hello!';
		// 第二种写法
		var b = _defineProperty({}, mySymbol, 'Hello!');
		// 第三种写法
		var c = {};
		Object.defineProperty(c, mySymbol, {
			value: 'Hello!'
		});
		// 以上写法都得到同样结果

		log(a[mySymbol]); // Hello!
		log(b[mySymbol]); // Hello!
		log(c[mySymbol]); // Hello!

		//Symbol值作为对象属性名时，不能用点运算符
		var d = {};

		d.mySymbol = 'Hello!';
		log(d[mySymbol]); // undefined
		log(d['mySymbol']); // Hello! 通过点运算符变成了字符串'mySymbol'属性的值，而Symbol属性上没有值

		//在对象的内部，使用Symbol值定义属性时，Symbol值必须放在方括号之中

		var mySymbol2 = Symbol();
		var obj = (_obj = {}, _defineProperty(_obj, mySymbol, function (arg) {
			return log(arg);
		}), _defineProperty(_obj, mySymbol2, function (arg) {
			console.log(arg);
		}), _obj);

		obj[mySymbol](123);
		obj[mySymbol2](456);
	})();
}

//5. example
{
	//定义常量
	var LOG = {
		DEBUG: Symbol('debug'),
		INFO: Symbol('info'),
		WARN: Symbol('warn')
	};
	log(LOG.DEBUG); // Symbol(debug)
	log(LOG.INFO); // Symbol(info)
	log(LOG.WARN); // Symbol(warn)
}

//6. ergodic
//Symbol作为属性名，属性不会出现在for...in、for...of循环中，也不会被Object.keys()、Object.getOwnPropertyNames()返回。
//但是，它也不是私有属性，有一个Object.getOwnPropertySymbols方法，可以获取指定对象的所有Symbol属性名。
//Object.getOwnPropertySymbols方法返回一个数组，成员是当前对象的所有用作属性名的Symbol值。

{
	var _obj3;

	var _obj2 = {};
	var _a = Symbol('a');
	var _b2 = Symbol.for('b');

	_obj2[_a] = 'Hello';
	_obj2[_b2] = 'World';

	var objectSymbols = Object.getOwnPropertySymbols(_obj2);

	log(objectSymbols); // [Symbol(a), Symbol(b)]

	for (var i in _obj2) {
		log(i); // 无输出
	}

	log(Object.getOwnPropertyNames(_obj2)); // []

	var obj2 = (_obj3 = {}, _defineProperty(_obj3, Symbol('my_key'), 1), _defineProperty(_obj3, 'a', 2), _defineProperty(_obj3, 'b', 3), _obj3);

	log(Reflect.ownKeys(obj2)); // ["a", "b", Symbol(my_key)]
}

//7. Symbol.for()，Symbol.keyFor()
//我们希望重新使用同一个Symbol值，Symbol.for方法可以做到这一点。它接受一个字符串作为参数，然后搜索有没有以该参数作为名称的Symbol值。如果有，就返回这个Symbol值，否则就新建并返回一个以该字符串为名称的Symbol值。
//Symbol.keyFor方法返回一个已登记的Symbol类型值的key。
{
	var _obj4 = Symbol('foo');
	var _s = Symbol.for('foo');
	var _s2 = Symbol.for('foo');

	log(_s === _s2); // true
	//Symbol.for()与Symbol()这两种写法，都会生成新的Symbol。
	//它们的区别是，前者会被登记在全局环境中供搜索，后者不会。
	//Symbol.for()不会每次调用就返回一个新的Symbol类型的值，而是会先检查给定的key是否已经存在，如果不存在才会新建一个值。
	//比如，如果你调用Symbol.for("cat")30次，每次都会返回同一个Symbol值，但是调用Symbol("cat")30次，会返回30个不同的Symbol值。

	log(Symbol.keyFor(_obj4)); // undefined
	log(Symbol.keyFor(_s)); // foo
	//Symbol.for为Symbol值登记的名字，是全局环境的，可以在不同的iframe或service worker中取到同一个值,而Symbol()写法没有登记机制，所以每次调用都会返回一个不同的值，且用keyFor查不到

	var iframe = document.createElement('iframe');
	iframe.src = String(window.location);
	document.body.appendChild(iframe);
	log(iframe.contentWindow.Symbol.for('foo') === Symbol.for('foo'));
}