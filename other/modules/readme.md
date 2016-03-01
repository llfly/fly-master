模块化发展
```
//最开始
function foo(){//...}
function bar(){//...}
//Global 被污染，很容易命名冲突
```

```
//简单封装：Namespace 模式
var MYAPP = {
    foo: function(){},
    bar: function(){}
}
MYAPP.foo();
//减少 Global 上的变量数目
//本质是对象，一点都不安全
```

```
//匿名闭包 ：IIFE 模式
var Module = (function(){
    var _private = "safe now";
    var foo = function(){
        console.log(_private)
    }

    return {
        foo: foo
    }
})()

Module.foo();
Module._private; // undefined
//函数是 JavaScript 唯一的 Local Scope
```

```
//再增强一点 ：引入依赖
var Module = (function($){
    var _$body = $("body");     // we can use jQuery now!
    var foo = function(){
        console.log(_$body);    // 特权方法
    }

    // Revelation Pattern
    return {
        foo: foo
    }
})(jQuery)

Module.foo();
```

除了封装，还有加载
大量script，导致难以维护，依赖模糊，请求过多
```
//http://labjs.com/
script(src="LAB.js" async)
$LAB.script("framework.js").wait()
    .script("plugin.framework.js")
    .script("myplugin.framework.js").wait()
    .script("init.js");

//Sugar
$LAB
.script( [ "script1.js", "script2.js", "script3.js"] )
.wait(function(){ // wait for all scripts to execute first
    script1Func();
    script2Func();
    script3Func();
});
//基于文件的依赖管理
```



```
//YUI3 Loader - Module Loader
// YUI - 编写模块
YUI.add('dom', function(Y) {
  Y.DOM = { ... }
})
// YUI - 使用模块
YUI().use('dom', function(Y) {
  Y.DOM.doSomeThing();
  // use some methods DOM attach to Y
})
//基于模块的依赖管理
```
1、从官方推荐的写法上面得出：
CMD ----- 依赖就近
Js代码  收藏代码
//CMD
define(function(require,exports,module){
        var a = require('./a');
        a.doSomthing();
});
AMD ----- 依赖前置
Js代码  收藏代码
//AMD
define(['./a','./b'],function(a,b){
       //......
       a.doSomthing();
       //......
       b.doSomthing();
})

    当然AMD也支持CMD的写法。

2、执行顺序上：

CMD是延迟执行
    推崇的是as lazy as possible

AMD是提前执行
    requireJS从2.0开始可以延迟执行


3、api设计角度：

CMD的API推崇职责单一，没有全局的require
AMD的API默认是一个当多个用：比如require有全局的和局部的