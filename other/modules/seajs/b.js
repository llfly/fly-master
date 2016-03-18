define(function(require,exprots,module){
	function Dialog(){
		alert(1);
	};
	//回调函数的方式
	require.async('./b.js',function(a){
		a.Dialog();
	});
	Dialog();
	exprots.Dialog = Dialog;
});