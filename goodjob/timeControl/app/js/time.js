/**
 *
 * @authors ll (you@example.org)
 * @date    2015-08-30 10:13:35
 * @version $Id$
 */
//timeControl ->
//
//1. 计时功能
//2. 倒计时功能－>根据不同类别倒计时，EG:1.年2.月3.日4.小时5.分钟6.秒
/**
 * [timeControl 时间控制器]
 * @param  {[type]} time [description]
 * @param  {[type]} obj  [description]
 * @return {[type]}      [description]
 */
var timeControl = function(time,obj){
	var f = {
		var timeType;
		zero:function(n){
			var n = parseInt(n,10);
			if(n>0){
				if(n<=9){
					n = '0' + n;
				}
				return String(n);
			}else{
				return '00';
			}
		},
		dv:function(){
			var pms = {
				sec:'00',
				mini:'00',
				hour:'00',
				day:'00',
				month:'00',
				year:'00'
			},dur;
			if(dur>0){
				pms.sec = f.zero(dur%60);
				pms.mini = Math.floor((dur/60))>0?f.zero(Math.floor(dur/60)%60):'00';
				pms.hour = Math.floor((dur/3600))>0?f.zero(Math.floor(dur/3600)%24):'00';
				pms.day =  Math.floor((dur/86400))>0?f.zero(Math.floor(dur/86400)%30):'00';
				//月份,以实际平均每月秒数计算
				pms.month = Math.floor((dur/2629744))>0?f.zero(Math.floor(dur/2629744)%12):'00';
				//年份，按按回归年365天5时48分46秒算
				pms.year = Math.floor((dur / 31556926)) > 0? Math.floor((dur / 31556926)) : "0";
			}
			return pms;
		},
		type:function(){
			var len = time.length//get the time length
			,timeTypeArr = ['second','mini','hour','day','month','year'];//the value of time type
			switch(len){
				case '6': timeType = timeTypeArr[5];//20150830
				case '4': timeType = timeTypeArr[4]//0830
				//d
				case 'd' : timeType = 
				//h
				//m
				//s
			}
		},
		ui:function(){
			if(o.sec){
				o.sec.innerHTML = f.dv().sec;
			}
			if(o.mini){
				o.mini.innerHTML = f.dv().mini;
			}
			if(o.hour){
				o.hour.innerHTML = f.dv().hour;
			}
			if(o.day){
				o.day.innerHTML = f.dv().day;
			}
			if(o.month){
				o.month.innerHTML = f.dv().month;
			}
			if(o.year){
				o.year.innerHTML = f.dv().year;
			}
			setTimeout(f.ui, 1000);
		}
	}
	f.ui();
}
