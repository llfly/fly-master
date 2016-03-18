document.write('hello,webpack');
//require('!style!css!./style.css');
//'!style-loader!css-loader!./style.css' 从右向左，先调用css-loader进行处理，再调用style-loader
//require('jQuery');// 通过别名 require('../../lib/jQuery/jquery-2.0.3.js');
//require('expose?$!jQuery');
require('./people.js');