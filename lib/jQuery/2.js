//extend

$.extend()
$.fn.extend()

//当只写一个对象自变量的时候，JQ中扩展插件的形式



//扩展工具方法
$.extend({
    aaa:function(){
        alert(1);
    }
});
//扩展jQuery实例方法
$.fn.extend({
    aaa:function(){
        alert(2);
    }
});
$.aaa();
$().aaa();


//当只写多个对象自变量的时候，后面的对象都是扩展到第一个对象身上

var a = {};
$.extend(a,{name:'hello'},{age:30});

//浅拷贝

//深拷贝
$.extend(true,xxx,xxx)


//浅拷贝
function copy(obj){
    var newOBj = {};
    for(avr attr in obj){
        newObj[attr] = obj[attr];
    }
}


function deepCopy(obj){
    if(typeof obj !='object'){
        return obj;
    }
    var newObj = {};
    for(var attr in obj){
        newObj[attr] = deepCopy(obj[attr]);
    }
    return newObj;
}

jQuery.extend = jQuery.fn.extend = function(){
    //定义变量
    if(){} //看是不是深拷贝情况
    if(){} //判断参数是否正确
    if(){} //判断是不是插件情况
    for(){ //可能有多个对象情况
        if(){} //防止循环引用
        if(){} //深拷贝
        else if(){} //浅拷贝
    }
}



jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[0] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;
		target = arguments[1] || {};
		// skip the boolean and the target
		i = 2;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction(target) ) {
		target = {};
	}

	// extend jQuery itself if only one argument is passed
	if ( length === i ) {
		target = this;
		--i;
	}

	for ( ; i < length; i++ ) {
		// Only deal with non-null/undefined values
		if ( (options = arguments[ i ]) != null ) {
			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)) ) ) {
					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && jQuery.isArray(src) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject(src) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};



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

jQuery.ready.promise = function(){};
监测DOM的异步操作（内部）
function isArraylike(){}
检测DOM的异步操作（内部）



DOM 加载 
DOMContentLoaded onload

1. $(function(){})
2. $(document).ready(function(){})
3. $(document).on('ready',function(){})


推迟
内部实现通过readyWait参数的自增自减实现，因此加载多个模块，多次调用

```
$.holdReady(true)//推迟
$.holdReady(false)//释放
$(function(){alert(1)});


//使用

$.holdReady(true);
$.getScript('a.js',function(){
    $.holdReady(false);
});
    
$(function(){alert(2)});
```

$(function(){}) -> $(document).ready(function(){}) ->$().ready() -> jQuery.ready.promise().done(fn){


} -> $.ready() {readyList.resolveWith(document,[jQuery]);}

$().ready();
$.ready()


```
jQuery.ready.promise = function( obj ) {
	if ( !readyList ) {

		readyList = jQuery.Deferred();

		// Catch cases where $(document).ready() is called after the browser event has already occurred.
		// we once tried to use readyState "interactive" here, but it caused issues like the one
		// discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15
		//DOM已经记载好
		if ( document.readyState === "complete" ) {
			// Handle it asynchronously to allow scripts the opportunity to delay ready
			//IE 会提前触发
			setTimeout( jQuery.ready );

		} else {

			// Use the handy event callback
			document.addEventListener( "DOMContentLoaded", completed, false );

			// A fallback to window.onload, that will always work
			//有些浏览器会缓存load事件，例如火狐，这么写不论哪一个先加载完都执行completed回调
			window.addEventListener( "load", completed, false );
		}
	}
	return readyList.promise( obj );
};




completed = function() {
		document.removeEventListener( "DOMContentLoaded", completed, false );
		window.removeEventListener( "load", completed, false );
		jQuery.ready();
	};
	
	
// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );

		// Trigger any bound ready events
		if ( jQuery.fn.trigger ) {
			jQuery( document ).trigger("ready").off("ready");
		}
	}
```



