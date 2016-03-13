/*! //hello,world */
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			modules[moduleId] = moreModules[moduleId];
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);

/******/ 	};

/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		2:0,
/******/ 		0:0,
/******/ 		1:0
/******/ 	};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}

/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);

/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;

/******/ 			script.src = __webpack_require__.p + "" + chunkId + "." + ({"0":"bundle1","1":"bundle2"}[chunkId]||chunkId) + ".js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};

/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	document.write('hello,webpack');
	__webpack_require__(1);
	//'!style-loader!css-loader!./style.css' 从右向左，先调用css-loader进行处理，再调用style-loader
	__webpack_require__(6);// 通过别名 require('../../lib/jQuery/jquery-2.0.3.js');
	//require('expose?$!jQuery');
	//require('./people.js');



/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./node_modules/css-loader/index.js!./style.css", function() {
				var newContent = require("!!./node_modules/css-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "body{\n\tcolor: red;\n}\n#branch{\n\theight: 200px;\n\tbackground: url(" + __webpack_require__(4) + ") no-repeat;\n}", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAGcA+MDAREAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD+6L4F/wDJIfAf/YDi/wDSi8oA9WoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoA8s+B6NH8I/AaOMN/YUBxkHhprplOQSOVZT1zzg4INAHqdABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQB5v4c+Mvwc8Y6xL4e8IfFn4b+Kdeg1LU9Gn0Pw5488K61rEOs6PA9zrGky6Zpmr3V5HqWk28b3Gp2Dwi7sYFea7ijjVpCAfI+l/8FHvgVbL8CrX4naP4x+D2uftB+NPHvgv4e6L42/4Q25Uv4EuoLfUPEmv634Y8Y69oeheGNSExOl6peahuNzbajpt7b2uoWskFAHvf7T37SHgz9lf9nb4hftJ+LdL1rxV4O+H2kaLrV9p3g46Tdazq1lrXiHRfD9k+jNqWqaZpc6mfWrW7Mk2oxQvZiV4ZJJPLRwDvvDPxg+FXjGw8SX/AId+IvgrU08FwQTeO4LLxd4bvbrwE81rdXZtfHMVjq10PCl3BDY3rXEGsvbGL7JfEsyW87gAbrfxm+DfhnQ7rxN4k+LXw20Dw7ZXOk2d74g1vx54U0vQ7S81ywXU9CtLrVb/AFiCxt7nW9OZdR0mCW4WXULBlvLJZrYiUgGlp/xN+GereHNE8X6V8RPBGpeFfEl9BpfhzxRp/i7w/eeHNf1O5knittO0TW7fUpdO1W+uZbaeOCzsbme5lkhnSONnikFAEvhz4jfDvxjoereJvCHj3wb4p8O6Feanp2ueIPDninQta0PRtR0eGO41iw1bVdM1C7sdOvNJgkjn1O1vLiKexheOW7jjjZXIB83/ABe/bi+Avwp8JfDjxtpniTTvi3oHxE+Pfw0/Z5tb/wCEnibwX4tt9B8ZfEm/1Cx0q+8QXdv4mhs7TTNMbT5ZtVijuZdVSJkNtp07B6APpjwh468DfELTrzV/APjPwr420vT9UvNDv9T8IeItH8R6dZa5p4hbUNGvL3Rr69t7XVLFZ4DeadNKt5bCaEzwqJELAG1q11fWOk6ne6bpcut6haWN3c2OjW91Z2dxq13BBJLb6bb3moTQWNrPfSIttBPfTwWUUsqPd3MNusswAPz38Rft7f8ACN/tA6b8Mr/4fwW/w8j8F+Mb/wATfFWbxHpf/CDaL418P+MvAHhk6bc+PftiaDY6FoF34ri8NeNNYuLGbRdJ+IGs+HPB9z4ms/EWn+MtDtQD334t/tDy/CL4ZeFvGWuaP4HTxP4jeER+EL/4l30Ng8JtJ5ri+0LxB4f+HnivVPEmm2sraYkuoWfhGK3jt9Ttbq7e2cw20oB8i/Bb/gpDB8WvEXw11TxRa/DL4P8Aw48Vz+IRqNzrfinxFr+oS6bLaaqPh5rU3i7xFonwm8OeCLbxhcQ6PcW1jcaZ4u1aRtX0jw5cWel6te397pwB91eNvi1daF8WfhR8H/CegWvivxP41k1rxJ4yik1k6dD8PfhHoOnXtvfePdVa3sNVuGudU8W3Hh7wp4N0Se0tovFOo3XiDyNXsrLw94g1O2ALPwi+KifETwnqX9oRWEfxI8C3d34V+KngfR7mJbvw9490fzoL6ztbXVL2K4t9D8TmBPEHgHU9Xngt9c8HanoWupetaXT3KgHk3jf9o/x34V+J3wa8IL8C/Gdpovj+L4kXWuza5q3wit9ZhsvB3hKLXYJ9Emh+NH9k2It5pBJrp8SzWqppocWG6+R0AB9KeEde1fxJpMuoa14H8S+AbtNS1KxTQvFd54KvdUmtLO7lgtNZjm8DeMPGejrp+sQol9YQy6tHq8NvKkWr6VY3qy2oAOnoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgDzP4Mf8kp8B/wDYv2f/ALUoA9MoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgCjql/Hpel6lqkqNJHptjd38kanDPHaW9xO6KSDhmWDAODgsODg5APDPiV4I8XeP/ANnz4w+H7LxzPoXjH4mfBvxx4e0fX7q9m0zw/wCBte8T+Cdd0/StWsH0e2Go6fZ+Hr7UobuXVI5LzW/ItFuknkukjUgH8zn/AATzs9HuP24f+CY3gHwb8H/gj4f1T4DfAT9oc/Ff4ifAX4o/DP4tr8Q7bXPhxc+H9I+KHxM1n4a2E6eFZPEPia4nh0HSPGviG/8AFAvNduIZNL0e0k05LwA9+8Of8E2v2jPDfwZ/4J36h4r/AGcPDPxP8Tfs4ftF/tEeJvjP8HbnxJ8GLzUfFPwo+Jvj7xN4i8OG31vxV4mh8DeIbfTIZ479PCmpa38t/rUgZLOZNUnUA/WP/goX8EfiX+0R/wAE7vjN8EPhF4BtYviJ438D+A9N8MfDo614U0az0q603xp4K1m88OLrNxqNh4WtYdA03TLy3jlgv49LlWzWHS5JVktEYA/N6b9hL9oTxdqH7bHi/wAH/sk+Cv2Y9I+If/BPPU/2VfAfwo0T4gfC+41D4s/F291W91aH4g6kngbV38B+G7e3s7e38PSah4gv9P1eUXNrfXEl4J9ZltgD1j4q/sS/FD4bfsf/ALK3w0/Zx/Zo+GF9r994s+Bt/wDtkaFZ+FvgB4o+JV4+nfDq88MeOPG3gO9+Oy6v8Jrz4g6fe6zrekv411B7zWLbS763i8PXj+F01JFAPAfDn/BOf9o64/ZLsvgnrXwQhtbd/wDgrN4e/aLufAPiPxj8DLtD+y5FBocGpapqw8Bz+Hvh887afFfWOqeDPDOiaRPPdfbU0fwimlzWjMAdJ8XP+CZ3x7vvB3/BU/4d/AjwF4S+GngT46/FP9mTx/8ABDwHomu+EvCvgr4leGfh5oo1D4peBhpug3bQfDuDxN4hVwF13S9M0vUL4WcdxGNAku7uIA7343/sm/ED9on4beBPCvgb/gnD4L/Zm0rSP2sf2SPGnxE8LReKv2eLcfET4b/DnUfijB8T7/WNH+H2sJ4dvtD8H2uupp3hp728uPFvjnQ9flng8PWVpbJpyAH19+xL+yn4i/Zq/aa/4KD67YfDXw78NPgn8YPiB8GPEfwQ0jwnN4Vs/DtzZ6J8OtR0/wAd3OneEPDl4x8IA+KLyWSS0v8ATNLN40y3FhBLaxhkAP0G8ZRaDN4T8QJ4o0/UNV8PLpl1NrelaXpXiDXL/VNLt4zPeabD4f8ADNrf654jXUIYXtZ/DmnWN9NrttNNor6ZfW95NZSgH8/mofBjUdW/Zu+L3w4j+CPiqz1/xTqH7RWm+FrTUf2XfiSLi38JeNvi18Q9Y8DaeJk/4J8+Jta0/SY/CmraFHb6PD8YYptL0+O30q0utBjtLfw9aAH6V/H/AMC3PjH9hzx74d/Z/wDDOp/BbwXefAT4t31v8PPDHwx1L4ffE/dN4G8Q3ulfC3w14Ih0bSp/ANz4l8SFIPFk+n6XPr99Yx3GjeDYrbVtd0/4gaeAeN/Arw98X9E+PP7N9pLa/F+28F6f4P8AiHZ+K7TUdf8A2qb7wXpYt/AulW3h3T/EWlfFbwP4U8Hae0eop5Ogw6dPf+RfwmCxWNUtJZAD3/44fCnw38RfiDoejaF8J5dQbSvHPhP4mfHD4pXvhSK91a78L+BPs3jDw98IvB2u+Jo/t3i+b4i6xpeieHNc8J+Fbm58F6J8N5/HmieJZdM1XXdD8PaqAZH7GvwY+HXhfw34w/aE1T4Pad4C8ceNPiN+0F4g0TV/Enw1s/BfxM8N/BbWfiprcngbwvqWmy6BpniDw3pDeDfDnhzWrPwnfq1xpsd5K0lva6he6tY0AeC/tCfCDV/i7421LxB8L/2Z7zX/AILeLH0Zv2kU1b4ceEfh58X/AB3/AGB4nk1S+h+Auk/Eu58CeJF17xzY3V94W+OWv+PI/Dlr4l+H0GhL8G/EGpeNVvbwgH6V/Cnx/pHxJ8IQa9ong7x74GsLS5fRY/DfxG+HniP4b+ILJtPtrUNFD4b8R6dp9y2lweatpZanp8c+hXrQTnR7+6s4hcMAekUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQB5n8GP8AklPgP/sX7P8A9qUAemUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQBznjD/kT/ABZ/2Lmuf+mvUKALugf8gHRP+wTpn/pHHQBS0Dwd4P8ACb6nL4V8KeHPDUms3C3esSaBoWlaO+q3aNMyXWpvp1pbNf3CtPOyzXRllVppiHzJIzAHR0AFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFAFa0vbLUInnsLy1vYI7q+spJrS4huYkvdNvrnTdSs3khkdFutPv7S6sL63ZvOtb63ubS4RLiGVKALAIYBlIZWAKsCCCCMgggkEEcggkEdz1oAhW5tnuJrRLiB7q3igmuLZZY2uIIblrhLWaaEOZIorlrW4WCR1CStBcLGzNFLQBMSAQCQCxwoJALEAtgAnk7VJwMnAJ5AJIBFb3Fvd28F3aTw3NtcwxXFtc28qTW9xbzIskM8E0bvHLDNGVkiljZkdGV0dlO5gBkl5Zw3VtZTXdtFeXi3D2dpJPEl1dpaiNrp7aBpBLOtsssRuGiVxCJIzKQGUsAWaACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgDzP4Mf8kp8B/8AYv2f/tSgD0ygAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKAOc8Yf8if4s/7FzXP/TXqFAHm3iH4weF/h78F/H3xOvLbWNW0P4SfDDX/AB3r407S7yNdSsPBnhTVNd1bT9A1K/htNK1a/MOjXFsv2W9ktYrxkhubiJlmKgH5zfs8f8FGPj18S/i3+xV4J+KfwC+G3g7wr+3D4I+LnxW+GWt+Evir4i8ReJvB/gLwL4LfxdoWn+NdC1DwDpel3XiPXbGXS5ri50bX2sIbbUiklja6lY3Vi4B8F/Dz9sz9qqTTP+CZb/BDxP4kn0j9or9of9qrwv4w0L9oD43XnxJ1XxleeBPFMnhvS/CXiLx9c/A+91vwv4EsbfTY9Z0S68LWFxrWnXeo6jo76bPa21pqsgB+rn/BVP4gfEn4Zf8ABNn9o74heDPFGr/Dr4kaB4Q8EXll4j8BeJdXsNT8O6xdfEfwPY6qvh3xPawaHqptzDdXunpffZdOuL7TpXF1YQLPPZgA8Suf+Chnx7+DurftH+Bvjp8CPAS658Hv2Kbn9sn4a3ngf4t6x4is/GXhDRbs+H7vwf491XV/BWl3+ieLjrLQJe6jYaJcaa6Q395ZLeWk+m3koB0+vft8/HTQv2bvBnxv8b/Cj4HfAu9+LXib4bWnwX034lfGTxv45i8deEvG3gTUfEwvbLwz8GvhH4s8e3/jS4vrSwt9K8C6F4d1OeHRNZi1jWtXtrjSNU02QA840n/gq38QLr9mXR/i/J+zxo2p/ERv26NG/Ye1HwNH468W+DtD1PxDqa2jReNNOvfG/wAMdP8AFfhaG5e/s7QeGfF/hODVNMm+1S6rOphe2oAZef8ABV3x98Kfh1+2Ze/tEfs/eHtI+LP7K/xY+DvwttPBfw2+JN7r/hDx3qHxvt4r3wQYfGOseEtPutIi0zTVu9W17UrvQVE1lHDbWukW2sSNpgAMP9uD43ft7eAvgz8Db/x34S8G/C/x3e/tvfsmeHNBl+AHx18Wv4e+KfhbxjN4xPin4U+K9S1nwf4X1nw9apqWm6foniOe9sdZ8K65ZalY6lZW8y6be2xAPtD9i/8Aav8Aix8fPiB+1X8Gvjn8KPCXwx+J37MfjvwX4b1uLwF43v8Axv4P13R/H3hWfxT4bu9O1bVNA8Pag13b2FsWvpJ9OtVnW6tD/Z9jdR3lkoBzf7Vn/BQWz+AHxe8Mfs5eEPhquu/F7x1pdnqHhXxH8X/G+g/Av9nsJqI1OGFW+LHitbp/Fms6dPYiS98GeBtB1jXbpC+mWs8WstHbUAaPxg/aO/aK/Zf+DH7O+ofEbwp8KvjT8bPjb+0h4M+Bs+k/D/WfEfw2+GdhN8Trrx3f+FE0LWvEVl421meDRbPRNG0G51rVrGP+0pp73xBLp1ska6bIAeK+C/8Agox8S2+C/wC2Xrnxp8FfA34M/Ff9k/4v6D8JdSfXvil4vvvgprdz4ll8Ny6ZqieIdL8A33ji8uI9P1a9msvDmh+EL/xB4lvrbTdM06wsb7ULm3tADzjSP+Csvj3Tv2fP26Pid4y+CPhi/wDGH7G0XwU1AWXh/Wfix4P8K/EvSfjLexxaRPa6d8W/hH4P+IPhD+x7VZblrjVfC9zBrkclndaasNlL5xAOc+IX/BUv9rrwH4o/ab8AX/7Jvwct/F/wI+AujftUlT8fvEmpaLF8EpjbSatpup3EHwq0+fXPiLFb3doLSw0tdL8OCd9QD6xPFY2TagAei/F3/gqj4s0/WfhB4F+CXwasdd8f/ET9krwT+1zq1h4os/jb4s0zR9D8dW4Xw38MtNh+Cfwe8faxdeJL/UGFtJ4y8QWXh/wNYRG2+3Xq315HYxgH0bqP7SH7S/iz9mz4L/tVfDf4cfDb4c6dP4Z1XxB8ePgX+1P4j8Q/B/xLpipqGm6b/Zvhz4mX+jnSfBeraXqOl65b6VqHxB8LReHvEul6zoOp3x0JlGQD0H9ir9tbwT+234H8UeLvB/gTx14Kl8Fa5D4Z8Qr4kttI1TwdqutFLk3Fx8M/iZ4X1XWfB/xP8OQtavjXfD9+sqQT6bPqWl2A1CxRwD6X+JGp+K9F+H/jDVfA9ppV74ssdC1Cbw/Hrk00OiQ6kIZVg1DV/s4+0z6bpWDqd9Y2jJfaha20unWU8V5cQzKAfi9+zD8TE0nw3pmqfBvWz4Wvho//AAT5k+Img+Gvi1afFnw9448bftS/tS+AY/jz4y8eeHNY8A6Vb+F/jlY+FtTvofiLrPh9LG4z8SYtT8Q2RvNO+HGr2gB33iHWZvCf/BPX4O+IYNR8Q6bZ2mu/El9ft/CPxZ8Y/DPxT4j8MaJrvxV+JfiTwR4Sh8O6nYaZ4h8UfEWy+HU3gi2udbWe+8M6Lr/iXxJ4YC61E3mAHi3g+b4l67+3c8tl8Yta+HkT+I/2c7nxlrP/AAs34/XWmeI9EktP2qbTRvAd3pnxH+HHh3wr4gtvFPi6+8O6PpXhbxAbTTbfUdSs7T4YSajqdxd3FuAfov8AtB33iSz+MPwb8deNvB82r/DLwH8R/DHhv4V+DNO1zSF8Q+O/2gPiPfQ+A9F+IWt6bdTPYxeDfhf4b8R+IdS0K2M76/DcJ44+IWo6XZJ4U8Cf2oAQ/sgeMPivq0/xO+HMvgDS9J+CHw7+IHxU+H3w08cQ+L1bxV4ej8GeK00OT4Yy+Fn8OGx1jR/BOoT6v4d8EeM9N1NbNPC/huy8NeItKuPEWlSeJdZAPnf9pDV/iV4C+MPgvW2t7HxF4i+E41d/hj4M1P8AaC12y+Jfxym+L8cvw08Hx/Dy3H7P50nSfEEOuWMkXxK02yvtUs/B2h3tvrWuala+ErzTtanAP1P8G+Gj4U0Qaa+q6/qs9ze3+rXc/iPxPqviu7t77Vbl76+sbLWNWSG6Oj2l1LLHo9gtvaWOnWHk2GmadYabDa6fEAdVQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQB5n8GP+SU+A/+xfs//alAHplABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAcj8QGZPh/wCOXUkMnhHxMysMghl0TUyCOeCCMjv7kgGgDO0rQdM8QfCnTvC+o6dpmo6TrfgCz0G/0nV7IX+jX+m6l4bGn3Wn6rp5kiF9pt3bTyW99ZmRBc2kksBkXcWoA/IH9kb/AIJXeN/gt+1P8MP2g/HN58EPBPh74H+E/iL4e+HXw2+A+ofH/XtN1nVPiDp1zoOoa34gu/jh468Vf8Ijpml6HeXUem+EfBUSWDajJDe3upXEsM7zgH26/wDwTp/ZMX4YfC74TWHgnxPoXh34M+P/ABH8UPhbqnhv4o/E3w7438FeO/FOuapr+v67oXjrRfFdj4ntZdQv9Wu2e3/tM2kVuYbaCBIoYwAD3z4wfAP4YfHr4KeI/wBn74p6RqfiX4a+KtH0bQdf0uXxL4jttX1HT9D1LS9U0/7T4ottUj8RS3gvtIsbm61GTUm1C+kSRr66maa6aQA8E8Of8E6f2R/DGl/GzTrbwH4k1m5+P3gO9+FnxM8R+M/it8WPHHjLUfhneW8luPAmj+L/ABj401zX/DHhy0VxJaWGgX9ltmhsZJpJjY6d5QB23xO/Yw+APxb+HHwX+GPifQfEVjo/7PupeCdW+DGu+E/G/i3wp478Aah4F0q30TQLrQPHOhatZ+I4Jv7JtorG/mk1B57wJBfSyjV7Ww1GIA5nTP8Agn7+yvpXgy28A2/grxDc+G7X9pLTv2tYoNX+JPxH1vVH+O+lyWcll4svfEes+KL/AMQ6pAjWMBm0bU9UutLuiHe8t5pXkdgDpPEf7Ev7MXjB/wBo9vFfw1t/EMX7VF94E1T42Wuq654jubXxFq3w50uDS/BGraVC2q/8Ujqfh2O2trzT7/ws2m3UOqwW2qJKL6GOegDhtJ/4J2fsyWOj6dpGt2XxP8fPpPxM+E/xX07WfiR8bviz428Q2fiX4KNrI+Ethbaxr3i26uYPDHgiLXtWg0/w3Cyabfpe3E/iCPUr4/ayAfQngL4DfC74ZfEv41fFvwZoNxpnjf4/ar4P1r4papLrOtX8Gu6l4I8ON4X8N3Frpt/f3NhogtNIZoJodHt7WG6kY3F1HJOA4AO28a+BPA/xJ8OX3g/4ieDvDPjnwtqQT+0PDfi7QdL8Q6FeGNi0T3GlavaXlnLJC58yCVoTJDJiSJ1kAegDwuL9jj9nW08B/CD4ZaZ4HudL8EfAz4v6J8dPhd4etPFvjGS28M/EjQNX8Q63pWoQXF9r17e3GkWuo+JdXni8LXVzJ4ahiuUs7fS4rGC1tkAOU8d/sCfsrfEfwx8fvCnin4f3lzYftIeOdC+JvxQurfxb4st9VuPiF4atdPtvDvi3wxqA1d5fB2qaONOgltR4d+x2bs11DeWs9nc3NqwBkyf8E7v2WLzwZ+0D4F1rw5468T6R+05Z/Dm0+N974v8AjD8V/FnifxofhkS/hG6n8W+I/F+p+IdNuraYvcXb6VqVrHdu7QyRC0WO2AB13i79iH9mjxz4v+LXjnxJ4FvbvxD8a/gaP2cfiNeReMPGNpFrPwiVYUj8P29pba5Hb6Rdxpb26rrulx22tkRIZL53ed2AMLxn+wN+zj4xj+Dt5a6d488AeMPgT8O9J+Efwu+J/wAK/il4/wDh78T/AA/8MNJ0+HTIPA914w8Na7Z3viLQZrSJlltfEo1Nori51DULCW11K9v7uQA6vUv2LP2YfEfh74OeFvHHwssPiTonwLt9Zi+HGn/E/W/FHxDs7K516bTLnWNY8R2XjHWtZsvHeu3d3pVnfQa542ttb1TS70XFzod1YSXN6ZAD6btLS00+0tbCwtbeysbK3gtLKytIIra0tLS2iWG2tbW2hVIre3t4UWKCCJFiiiVY41CKAQBLyzttQs7vT7yPzrS+tp7O6i3yR+bbXMUkM8fmROkib45HXfG6yLu3I6uA1AHyz8Pv2TtM+Gx8KNofxq+Md03gH4W6v8Ivh6dQj+Csf/CHeF9VtPhzY/bLddG+Cujr4r1zTrL4XeDLTTr74hjxVbJb6YFvLC6ae6ZwAb9kD4e33wR+GvwB8Q+JfG+v+Cfh4bTVTdyavZ6J4t8S+ONL1Ia/oPjzU/EnhbTNDudG1rQvFUlz4xsLfwjFoelf2/8A2fFNZSeHbNvD8wBwuj/sV674d8ear490T9qb4tQaprtv4K03W7i7+Gn7Jt7qWoaL4IvNbvND04XZ/ZzhsLCaB/EeuR/2xpukWus3EV5C+q31/fWNjeqAfSuufCy28TeOLLx1rfinxFLfeGLLVYPhtpln/ZEGifD7Wdb8O33hzWPHWm6bc6Vf2/iHx3c6bqmq6XZax4uTWNH0Tw/e3mh6B4bsU1bxxd6yAVPhH8Jh8G/hm/gfRPFmp+J9futW8d+L9Z8eeM9P0u41DxF8QviB4r8QeNvE/ijW9F8L2/hLSktLvxNr93cQeHtBTRrOy0ZLTQ7C6t1gjv6APOPFX7Jfgj4ia1a+MviP43+KXin4haHHep8PviBZeM5vBGu/CNtSVl1U/Cm2+H1l4X0rw+dXj22GvXms2Ova14r8Ox2/hHx7rHiLwtG2kuAe0fDbwd4h8C+Gv7B8S/FLxv8AFu+S+ubiDxV8QLL4d2XiGLT2SCGy0dl+HPgLwBo11b2UcHmm/vNHm1q8vbm9uL3U5bdrKztwDvqACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKAPM/gx/ySnwH/2L9n/7UoA9MoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgDj/iF/yT3x5/2J/if/ANMeqUAXPBn/ACJvhP8A7FvQP/TXb0AdJQB8n+Gv20/gTrZ+E1n4hufHXww8Q/G/xt4t+H3wp8GfFb4Z+OvBni/xh4l8GtZjXY7LR73RZTZaaiXttPY6zqs1npWo2ztcWF3NFHM6gH1hQB4j8ff2g/ht+zR4K0nx98UbrVrXw/rPjjwZ8PLGXRtJm1a7bxL441mPQ/D0UlrDLG0dpNfyIlzdltltG3nSKUDUAe3UAFAHiP7Q/wC0H8Nf2XPhTrHxk+LF3qtp4O0XVvCuiXcuiaTPrGpvqXi7xPpXhTRIYLCGSNnWXVdWtFuJXlSK3tzLPI5CbWAPbqACgDA8V+KNA8DeFfE3jbxXqMekeGfB+gaz4o8SatLDdTxaZoGg6bd6rrGoyQWcFxdzx2NhZXFy8NrBNdSLGUggkmdEIBhfC/4neAvjT8PfCnxU+GHiGDxV4D8a6XHrPhbxHbWep2Nvq+lSTTwR3kNpq1lYahDHJJbyhFu7SGQhQ4QxskjAHbXFxb2lvPd3U8NtbW0Mtxc3NxKkNvb28KPJNPPNI6xwwxRxvJLLIwREV3dwqsxAKOia5onibR9O8QeG9Y0vxBoWr2kN/pOt6JqFnqmj6pYXCB7e907UrCe4s760nTDw3NtPLDIhDJIw5IBqUAFABQAUAY0PiTw5c6/f+FLbX9Fn8TaXp1lq+p+G4dVsJdf07SNRmubfTtUv9HS5a/s9O1CezuoLK+uLdLW6mt7mK3mkkhmFAGzQB558XvHyfCf4R/FP4qSaU2up8Nvh5438fPoiXo059ZTwh4Y1bxC2lLqLWl8NPbURpn2Rb02d0LUzfaDaTiPyWAPnDxZ+3T8JPCR1BV0Lxd4xXSvCXxE8Y6lefD2++GninTbPTvhT4H8JeOvidaXtynxHsbjRdV8G6P4z8Ord6R4ls9G1XUb/AFG1tNCsb+SRCQDe+In7YXw1+GkP7P8Aq3iWG70vw18bom1S61nVhfRTeAPC8nww8V/EK18Q+IbPRNK8RW1zBGfDg0fXDDqkOm+Hobi88T6nrA8O6XeXjgHU/AT4/XfxnHiDTfEPwu8V/CrxR4eg0nULzQfEt7oeowzad4iSfV9CtLfUNMvPtEfizTfCF74N8R/EbwhqGl2d/wCAbzxr4Y0G9udRa6ttUmANXxn8arrRfiTcfCXwR4F1L4ieM7H4SeLvipq9rYavY6Npfh5bK5j0r4a+HPEeq38E0WnXvxi1208S6V4VmgivLi1i8K+J9YvtMfS7KSegDtNK+KHg7XPhrpHxY0W61TXvCGtaNpWu6dceF/DPifxZrFzZaq8EUCW/hfwvo2r+JLm8tZphDqlhb6TJfaTJFff2tb2q2WoNGAeH2/7W/hS4+NPiD4VDwN8Ul07QPhf4T+Ic3iRfg18fZtanvfFHi3xz4cg0JfAkHwdk1WDT7aDwVc6h/wAJVc3kdjf3d0uiaXY3N3Y6vPCAfS/hnXrbxV4d0TxJZ2Ot6Zba3ptnqcGneJtB1fw14isY7yBJls9b8O65Z2OraLqVtu8q807UbWG6tpw8ckYI3EA26ACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgDzP4Mf8kp8B/9i/Z/+1KAPTKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoA434isE+Hfj5z0Xwb4oY464XQtUP6/wCfWgDxvxTovxR1b9l34iw+BPFsth8RfEfwG8SWfwykim0zw/p/hLxne/DvVofBt/b648DXlrdWGr3GmT3uuajqElnBNbHUbaxsYVe3AB/N9+wbpmi+F/24/wDglx4N034P/EP4YfErT/hB+01qf7RuteLfFGkeIovi543n+FV/axfE6zudE+IXjBtV8MajqYvToHijVLHRrHUZNQTTNFfUX066uFALtl+xr8W/+FEf8E1fHnxk/Zg+L3xDs/hF+0f+03bftA/D6x8H+Itd+KS/C3xr8RvGGs+BbuXwV9usdevdACLcX1veWSKba21PT2Fwsd1ZROAfuZ+3f4K+NHj3/gn38S/B37K+meKPD3j3U/AfgyLw14S0y5n8MeOx4KtdV8O3PizwJpc761plxo3ie78Dwap4fWyOqpdyXTT6JHNNd3CrIAflb8ZPgL4B8ffsweJPBX7Jf7CP7UnwSaf47/sS6l440Txz4H+JXhrWPFdh4Z8a+MrnxDq/hvSLrxLrd8Jvh1o0sknjb4iaA9kNRuNW0WQ6vey6Zp96ADqfH37HP7QHwz8I/wDBYL4Rfsc+C/iR4G8N+N4f2TNZ+BtlH4m8dPb+NYG8LXOpftFaf8NfF3ivxja3V9rmuRNqOieI1s/E8U91cTWnhae4BlsLOgDxvwD+zL+0rH8EP26If2WIP2nPhr8QPiT+z14C0fSPh14o/Zmh/ZK8ATeLdB8ZaENUX4eX158WPFz6j8U734d2fjLwvqus6Jb2GkaxJr1hqN540bWZIr9QDpfjN8CfDvjP9gP44+AP2Rf2E/2nPhF8Sr25/ZDfxVZfEr4f/EbT5PiDr3hf4v2Gq6nc6P4Y1fxVqk3i678G29vq2teMvGWh6VZNeaVqFotzrMsUFrBAAWfF/wCz7+21D+zb/wAFJfhdL4L+JHiP9qLxR8b/AAr478SfHXw/Z+INMtv2pv2bZ9Z0HVJvA3wU1yCSLSfB174W8MR3nh25+EOha/Y3Z0+W78N2Ml5eXWpafAAUG/Zt+N3ifwV/wU7H7LH7Pnxr+CP7O3xD/Zs8GeHPg98C/iJpPiXwP4u8V/HnQzZax4j8WeAvAXijXLzUdEddLt9S0O7vBLa3PirWX0eHSlv/ALPZ7QD1jwl4E+NX7VvxH8axax+zP8e/hZ4W1X/gkPqP7OunRfHPwovgvStV+Pdh8Q7O/wBNtbRk8Q3sVlcwagbe80+bxCdF1i70/Tp9ZOmL4faC+lAPr7/gj78OrP4UfsjeFvAmq/AD4kfA/wCKXh7StB0v4xN8Q/BWr+FR438ZWS6rAmueHbnUb65g8R6dbWAghfU9Lit7MNNEjxvcGVqAOF/ar/Y7/aa8dfHHVvif4mGnftyfs7Xt3a3um/sY+LPidrvwF0/wReWtlNaWd3o0ekXUvww+M5tJTJeGL4w22nTE395bC+meKzvYwC98f/gBbftIfGb/AIJeaXefs/fETwX+z9Y+Dv2movir8MtPj1z4eaf8KdK1n4KeEofAvgDx/N8JPEVjpnhm3/tzTz4es9BsNdfw5qsttc6Lbfb9LkmtpAD89bf4KftIeEv2F/gl8Dde/ZV8cePvB2k/tkfHXS9Un8bfDv4q/F/xt8EPg9Lr2uSfDrxf4O+Ctj458Hax4+07WdK1TWY9M1jXtRv/AAnoM0o1HULCbV9U0+8jANX4P/st/tE6j+xt8Cvgf4/+GPx2TR9D/wCCvGhajf8AhzUbHx34O8S6D+yk0GswXfiJT4d8T32reCPh8kWq3ksuoeH/ABbc6Po97eXP9n+J7mVU1SQA8J8ffsH/ABs8HeAv2tZfhT8Dvj9Z+IPhN/wUE8H6n+x5ZaTqPxm1KHw58FLrxO134m8S/DPRrvXb3Tb/AESeDR9Ll1XxZ9jvL54LbT1n1YxGAMAe0/to/sxftHeNf2vP2pdc+LOkftDat4T8XT/CjWP2XviZ8A/2a0/aI1Xwj4a8NWtvM/hTwVrcHxM8ESfs+eKNI8TWDXOuNqFtBpvi+a71TxHqGsQQ3Ftf6gAfox+1t8BPH/xv8U+A/C/gP9lyHxJ8bPCfw+8H/Zv29vE/xTn/AGf7n4da1cS35lj0rUvg/qF/8V/Hmq6bcaVd6/efD/TlHw503Vtb0uG61h7W71ByAfdn7L/w0+Mfwh+CfhLwF8d/jtf/ALQ/xE0eKVdX+J2peFtL8LXWoRSsr2ulmy06a5k1KPRox9ij8QavcTa/raj+0tZkF7JJEABn7Vvwuj+Mn7Nnxw+H9v4O0Xxt4j1z4W/Eaz8CaLrVlodwn/Cf3vgXxLpfhK70258QFNO0fWItTv4otP1yW5szpkk7XDahbQmWegD8yPi54j8Y+IPhb8WPHnj7wncaX4f8M/sm/Gj9mD4EaL8Ofh58RvFejeNPjP8AHXTPC+j6lpeneKdE0HUIdX0Wy1jwN8PvA3hH4o3mgeEvAHjPxf418X6J4OOp6N4cs/G+tAHpH7cfw8h8WePP2Vfhv4p+KGoeGvDtvZeKftukz+APEGpfD/w5c6Z8EPi94ff4hjxJ4ak8F+IfE+vXPiLVPB3gzw/8Pbbx9a2h1zV/C0Or+Cdem8VaJpFwAee/spfADx78Hvjl8Gtb8fJ4d8D3+pL8VJvhu1l+zT4k+1eNPAfjG08Iabc+CfiH4t0T4i31l8HPiloPhX4SeG/Gum6F4ljvNKsLTxZ4s8PWN34o1zR/GcdiAfRPj3w58NNI+MWoePNE8T/FLw98O/AN14x+If7YXxb8MfEH422uk+MfEGneEtV8D+Evh3q0nw+8SWkGo3fgn7bdeL/F8nhbSk034S6B8PvB3hDXpdB0PUrLQiAdd+xB8NfBHwF/Zj8H/Fjxnf6v4H8SfEvwX4a+Inxi1X4h/EXxtb6EnirxbJJrs+r63onjvxfe6F4Y8UXMuvWmk65rMtpYeLNYnt9Os/F15davb+WAD5k1hdN0T48aT4y1T4bfFGy/Za8J+MrP4j2/7S2h+Cvitr3jLxJqHhqJPE/g74IeJNA0u31D4lX/AMA/CvjnW/EHxS0n4ySeHL34X6rYx+GPhraTJ4etfEfjbVAD9dPB3i/w58QPCuheNfCOoHVvDXiTT4NV0LVTZajYJqWl3IZrTUILbU7SzvBaXkai4s55LdI7u0kgvLZpLSeCdwDpKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgDzP4Mf8kp8B/9i/Z/+1KAPTKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoA4r4k/wDJNviF/wBiV4r/APTDqlAEvgeGG5+Hng+3uYop7efwd4dhngmjSWGaGXRII5YpYpAySRSoSkkbhkdCVYFScgHA/C39mf8AZy+Busa74g+DHwJ+E/wt1vxItxFrur+APh94V8K6lqdvc3dte3Flc3miaVZTnT5ruztLp9OWRbA3FtZy/ZxJbwMAD26gAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgDzP4Mf8kp8B/8AYv2f/tSgD0ygAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKAOK+JP/JNviF/2JXiv/0w6pQBwdn8VvA/gP4Iap471zVJX0D4U/ChvGXjWfTLK61CTT9F8J+D7nWddWAQR+VfajaWmmXYOmW0zXgukNrJEk2RQB8Kfs+f8FOtY+NXxU/Zi+Hvir9lTxz8JNH/AGuvD/xO8dfAvxprnxG8A+I4dd+Hfw+8KXHikeIte8O6BI+r+GdR16yWxNtod6JYYrfU7G9tNa1CIXSxgHwz4S/4KN/tSWOjf8E9ZfhzH4u+OWnftJfG39o7wl4ri+JFv8GPDXjjxanw+8W3Og2Pw+8O6lov/CPeHPCyaG+my6jZ+KdVgi+26Pq9np95Pc6pY3EiAH7aftHftL+EP2Vv2cPF37R3xZ0XW7bSfB2h6De6n4O0OTSdV8UXfiTxFqek6DpHg3R3/tG10vU9VufEGr2ulLcw3wsdguNSSV7KJ3oA/OX9r79s39sLwX+zT/wndx8APGf7K3jSy+Pv7MOg6MH8Z/CP4qSfEXwL8RPHmpWHiPw9pk8UEmlaB4gW10dNL8QaNr0On3umtrOjyW+tC2uJrtQD1tv+Cofh7wR4B/bM8V/tBfAbxx8FfEX7HWpfDKz8WeAbjxl8PfGGqeK7f4xow+Ff9ha9o+tWnhuDU9fk8k6xZPqdzpmh2U8OpRa/qlotyyAHDeBP+CyHwV1Dw7+0jrXxS8E3Hg5/2dfh54Y+KGqy/Dj4geFfjf4X8Y+GfE+vaX4Us9N8L+MvC8ejaR/wl2n+Ktd0Dw7rWg3xgs7K61e0vY9cuNLhv7yMA5D9r/8AbZ/a78PfsQ/FH4uf8KG8X/sgeKtJ8Rfs233gLxdqnjr4SfE+HxD4R+I/xc0DRfEGm3NvYQagnhXxNYaGz2/iPRNX0iYWFrrFnJpuvy3qXCxAHtt9/wAFWPg5D+z/APH39qbSvAni/X/gZ8LPiHY/CX4Y+MtNvtC+2/tFfEK61Sw8PzQfDjQ7m7hl07wnaa/fxWo8XeIbu2hvtJh1LWNL0y6lsbzS1AM+f/gqDD4H0T9qrSvj1+zr4r+Enxl/ZZ+GOg/GbxF8JLf4g+C/HkHjP4ZeIbmxsbDXvCPj3w+sOjvc2mo3kNhrWmajY2slhcXFgIbm8Et2YADtvjR+3ZqHh+1+JHgf4c/D7Up/iFYf8E+9d/bZ8Ka1faroZ0bTrQ6tc+GrLQtRsL0RJe3fh24I8Tai3nfZ9T06xn0iyt5NQuIFcA7P/gnF+0L8Z/2n/wBlL4ZfFv41+Ak8L6/4l8M6Pqlt4os9U8LS6L8RI703xu/EOieHNB1G+vfCFlbTQLYjSPEAg1GRlN0kbQvuoAy/ir+3d8B9b8LftcfC/wCCvxht7r9oP4H/AAa/aB8QXmh2vhbxXFdeE/E3wu8Pa5ZX94upeIPCsfhTVJvDfiiOyheCC+1C2u5VJjgu7FLh6APn39iD/goL8UPHUf7E3we/aE+C3jvSdf8A2lv2ex4z+Hv7QWoa74AvtI+LXjDwH8P9C8UfES51Lwf4PIXwJb31lc3ms6K95OupX1vJpTXfhXSf7QkS3APt/wDak/bH+B/7H2ieEtS+Lmpa/Jq/xA1S90H4c+CvCegXGt+LPHev2CWL3WjaBHLPp2h213El/aP5viLXdHsGEyhb1nV1oA85t/2o/jb4P+AX7QH7T3x//ZzX4SeAvhn8Np/iH4G+G0XxE0Hxh8YPEen+HtG8U674mm8ZzaGjeCfCMuqWUXhm28OaFYa1rWoadd/8JI/iO+DDTrNQDzr4Kf8ABRXUfit8YF+EPib9mrxn8LtS8Ufsu2n7V/wh1LXviH8OdbtviR8O5pbGzeO4fQdTudO8C3M9/f28em/8JJqy3RsC9/4j0/QJENiwBxv7Ov8AwVP0b41ftBXX7PPiv4N6f4L8RzfDzxj8RfD+veAP2gvg58fPDF9ZeCngbXNB17VPhtqclr4Z19bWeO5tLVptRtbgkxreiPFyQDhfBH/BXfXPH4/ZzuNA/Yn+K93p/wC1p4e+Is37ON1D8U/gqLjx943+HEkp8SeGNRtL7xRYDwRoenWsMtxf+L/FFxazq0NzHo/hfV4BZ3c4Bpwf8Fkfg/L+zB8GPjtc/DnVNE8b/Gv4meNfhH4a+FHibx14W8P6To3i/wCH+oXEPjTU/FnxY1GOPw/pHgnQ7BbC+l8TRaXd3c1xq2labDoDOdQuoAD274MftwePv2qv2evGXxS/Zn+DPhzxD8Tvhh8Wrz4beOfhJ4v+Kmn6f4b15NCmsLrWLv4YfGbQtD1nw34ks9b0DV9M1bwb4ovdJs9CvZzqGn6lBbG3iupAD0X9nv8Abq+FXx4+KnjH9nm/8PeNfhR+0X8O9H/tvx58GfHWlQT3+l6ZHdWdjc6to/jPwxea74L8R6Ot5e2iWlza63Bqd5bXEF8NFitjI6gH2vQB+PHhL4lfEDVv2hvEvi6DVvGPw/8AiR41+M3xQ8H+IPDZ8R+F/GPgKw+EH7Pnw5n1LR/h7rvgW61S6ttN1DUC41+f4h+CNRi8Q6f8VPGfiewtNR8UfCXT202QA7T4H/GH4r/Eb4RftOfE6whvtW+I3iv/AIZY8S+DPCGgeKbXwx4dtPiB8Sf2R/2YdatfDuiXXjXxOtj4Z8H6n4y8Uka7brq8viG50O51BNHl1XxtJpa3AB8R+P8A4xftLeLdc+CWofBv4y/F7VPEFz+z78ctE+HPiTxV8L/ghpWp61qVzF8ANMsfGWqNY/ErxLFeQeKZ5bfxLd+J9W021OjWUseveFdJm0K+luowD9S/23vFOv8AhX9lT4rw3HjvwXZ+LNJ+BXxJ8WanGvgnxlFeeINf8H+DLrWLHW/h5caJ8TrLVPhXf2PijT7fUfDeu32q+Kr3wxqb6HewahdahpUl9cgHl3wb+IfjG0/ab+KWleI/jD4c8SQrrXwG8IS31j8EPi1dax4u0Of4a+KBonhi2mi+KPiDw/8AC3TdK8W6prHi7VfGGpeHZINV1/XdVs9Y1SHSJ/DenWQBi+OvHvxL8IfHz9rzX/Evi/wf8KfA3gj4U/A3x3rdxZ+PNe1nUtV0rStL/arnt4fCVnquheB9G0fxp4r0zwxp954g89tZt7W18LaZoUaeILeSLXtMAOk/Zx8ffFbw9c/FW4+NXxR1Jb3wn+x5+xh4/wDE994+s7jVNF8H/EfxHov7QN98Wtfl8J6JN4dMMWp6joennUNJ0m7s7qRNLstLtpoobOwiAB+XHwo+Ofj7XdW+EfgLWPiNonhr+ypbHSvg/wCMLr4pW3wlvPDFl8TPGPxd134panrGkzeFPipfDVbrw98F9Q8E+GLzx4uh6l8PLDxMdWHhbXtK8UaBYuAfpF8ef2l4fiV+wL8O/wBobwz4i0fwXqXjzwBZeN9dl8GftMXfgvWfh5bR/D6/8VfErRPA+saZLoFv8Ufid4RubCb4f+H/AAlr+jC10zx9fWOveJfCs9nouseFrsA+XLv4u+O72wtfAtv4jsbjwrqfiDwB4u1TVvDvx01H46QeNNe0v9sL/gnjpvh3VdS8YeJNb8S+KfBfiTwl4T+I+q/Dbx14BsdW0zwlqHiTTtW8XaP4ch8Naz4btLcA/Rz456r42sfij4ik+Huh/F5fG9n8A/Emo+HYvhb45+GEDfER9J8f+AP7F0C48I/Fnwh4q8EaVqul6pr+tWtv461KCO90Twtq3jJIdP1m6vtDjswD56/YK8beJ7a71bwF43+Kfxc1S88A+F/F3idvCGp6H8Frzw344vLrxpqUvxS8WeD/AA38Ivhr4t1Pw58P/CHxA1O68BfBjStG+N+sWfiy70f4h+FvAnge38L+AU0m1AKXxM+J3jXQ5f2p/FXxI8MfFzQ/iCvw2h+Ovwv8HWGtfD/U/Anwt+C/7NWvp4u8A+JvF2nQfFPTdPvvEXiz4iQ3viT4m6Qxi8Uaz4burr4XeErzUtE8H6h4tnAPuTwV4y+J3xa+Ev8AwkuvfDz4mfADxlZSSz3XhCw1j4KeLdd1/wCy6Kt9FB4K8RanceJPCN/oOv3N5FZ6Tq3iuw8I6yb2zmTWdM0GxZ7xwD4e+EeteOtT+PXjnRE8aftH+Hb39p7W9R8VeGtesV/ZJ1LXfh74N+Dfwm8GfDXxtqfxR0X/AIRLxpaeDdd8N/FjS5vh/aaJpvh6axfxBqlnBrlvJ4gsvF0cQB+scSNHFHG8rzsiIjTyiISzMqgNLIIYoYQ8hG5xFFHEGJEcSKNtAD6ACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoA8z+DH/JKfAf/AGL9n/7UoA9MoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgDiPiXx8NPiJ7eCPFmP/AAn9X9/9kf4nnIBzmmeEdB8bfASy8B+INGstb8OeMPhRb+Fde0G9nu7PT9a0XxF4OOlavpV9dWBF7bW2q2l5PbXd1Zn7bHHPLPbsblVYgH4zfsaf8E3v2hPhr+1T+z38XfiG+qeBvhb+y58PviV4T8CeBPE/7S+s/tEXt/qnxC8O3PhI6R8Ooz8K/hpo3w0+GPhzSDHd2tpd2dx4w1G9i0631iW+t1ifTgD7Ptf+CW/7Puk/DH4CfDfwx43+M/hS7/Zu+KXjj4vfCP4k6F4m8Ej4j6D4q8fa1q+ueKLWe91T4b6n4a1LQL+91P59Ju/CzLJb2WmW93cXEcdz5wB9X/Gr9nX4bftEfAbxF+zx8YI9a8W+C/E+g6Po+q6nNqpsfF7aloNzp+paH4xttb0y2tEtPFmla7pdh4ktr6GxXTX1e3CXmkXGjzXmlSAHzVrH/BO/wv458C6n4C+MH7Sv7UHxj0+58b/B/wAa6TqPj3xv4EutS8OTfBfxB4i17wXp2kJp3wxsNLxqVzr2zx5rl3pk/ifxkumaFNqetR3FmZHAOy+If7Af7P8A8WL39rq4+IC+MfEFr+2LY/B22+JWlSa7YWFl4Zv/AII6E+kfDvxB8NrnS9CstX0DW9LultPEVxc6zqniC1uddsrQGyj0J9Q0S4AMX/hgjw14p+G3xU+Efx4/aE/aN/aQ8A/E/wAGQ+Abjw18WfGPg8WHhrQdP1ex1vQtW0IeBvh/4MluvHWjanpthex+OvEcmsa3ez2tuL8zWxuLZwDk9W/4JseD/G3wc8b/AAL+L/7TX7VPxk8DeLJfhhHp1t4/8eeAry78G6V8KvFUHivwvYeHDp/wt0+wnvNRvra1tfF/iPxBp+r+I/Eel2mn2dzqcL2yTkAu+Iv+CYX7MviLwt+0x8P2n+IOjfDn9prxZonxF8SfDjw/4g0HTPB/w5+KWjSWF0vxM+DFqvhGXUPAfivVdSsItW1onUtT0G/vGNu+hJpMNlpsQBV0X/gmV8FZdB/aKt/iv8RPjJ8dPG/7TXw6034UfEz4s/EbxL4ai8dweAdESVfD+h+ED4Q8GeF/D/h6PS5l0/VJpH0K/Os61p1lfeIEv7fz7BwC/wDB3/gm78KPhT4n1Xxhr3xa+Pfxr1nXP2abj9lDV4vjH408NeINEk+EF1qdjqU2laZpmk+BtAk0WVGs3s7eOxvRpxsrzUJdQ0++1q4k1mgD3b9lj9mHw3+yR8M7H4ReCPiN8U/G3gfQre10/wAHaT8Tta8Kay3grRbWfUbldD8O3Xh3wT4SnbT5bjUZ5pH11tX1FVW0tINQi0+1t7QAHsnxG8DaN8UPh349+GfiKa/t9B+IXg3xT4G1y40qaC31WDRvFWhajoGpzaZcXVre29vfx2eoTSWU1xZ3UEVyIXmtZ41kicA+KvgN/wAE2/gv8BPiF8I/iPbfEj47/FHVPgJ8PdX+GXwM0f4s+PdD1nwt8KPDWu6Tp+g603g/RPDPgrwfEmo6poWnpot5c6xLqcT6fIdtqt5baXd24B9u+NfAngf4k+HL7wf8RPB3hnxz4W1IJ/aHhvxdoOl+IdCvDGxaJ7jStXtLyzlkhc+ZBK0JkhkxJE6yAPQB8p6b+wN8CfD/AMI/j98B/CuqfFPw78JPj94OPgrWvh7H8TfEPiLw18P7C50nxDpGt3/wfsvHTeLB4CvfE1trok1y0tmu/Ds1zpWgzWWg2htrkTgFW6/4J+/Aa/8AEHhzX9Sv/H9+/h39jrU/2G4tNm8QaTDpupfBPVreO11G61I2Xhq11D/hNrmCMR/29p2oWOnxbme30COTa4AOB+B//BMn4Q/Azxf8MfGdh8W/jv44vvg78KvGfwS+GmmeNte+Gz+H/DHwv8Xu/n6Bbab4W+FXheS7u9NUrJb6/f3c+tX14DPrt3qEC21pEAdJ8Pf+CcfwF+GVt+xdaeHfEHxOmg/Ydm+LU/weTU/EHhi4/teT4uxTw+J2+IDQeCbR9aFlFcTpoS6G3h4WokLaiNRkSOQAHEab/wAEp/2btA+Dnw9+EnhnxX8Y/D158JfjB4m+OXwq+K+leL/D9r8VvAfj3xXOZvEB0fWIPBUWhXOg6oAkF5o2reG75JYEt2+1Le21jeRAHvafslW+rfCLVPhH8Rf2h/2lPiVa+I/G9l418W+LtZ+JVj4Y8Ya9bw6PpGk6h8O4dQ+G3hbwTb+GfhdrSaWbvUfB/hWz0qR73UNYuE1hZr24kIB6r8GP2fPgb+zr4bbwn8DvhX4M+Gmiyt5t9F4X0S1s7/WbnzJZPt3iLW2STWfEuolpXLanr+oX+oMpVGuSiIKAPYaAPiS9/YzspfiFrvjDT/G2j2Vl4g+LmkfFe/e4+FXhLUfiRFFb+N/h/wCP/EPw6034o3F0l/Y+APF3iLwDpf8AbGiLoskk2jyPp9zd3V5DDqoAOg0T9lq90/wl+0V4T1T4iwalD+0J4isF1a903wJpfhtvCHw60/4U+B/hHaeGvCum6bq0mlweLrPwv4QF1pnjT7JFoGm+Jbu11W2+HJ0vTU8OzgHzvH/wTq1TQNa8BP4S8bfs8an4V+Gvgrxb8OfC/h74u/sb6P46vdT8HeKIvBVsbT4g6n4M+NPwj0nxvq2i2fgrT7LStcn8MafdvBea3Lq8d/fX9zeMAfYXib4K6v44+Hngn4UeKvFegR+ArHSNC0r4naB4Q8CHwtbfESx0NNOMfhPR7dfFeq2fw9+HGsvYf2f4l8H29rr1/qnhG4m8I2XijS7Nr69ugDqvCHwxPhX4p/GT4lHXBfD4qn4ebdGGmm2OhDwR4budCJbUTfz/ANpnVTcG6CiysxZBBBuuixmAB5b8Tf2Q/hV8VfiVJ8RfENoRda7p/hfR/iBBsub++8aeG/BWo32qeGfBKahq2oX9p4L8EXt/qd5dfEHSPBekaTrXxCig0jQvEPiYeET4u8N60Abfwv8AgT4j+H3iX48eO9a+K+peN/Hfxh1LRIrDxRqPg/wtpJ8IeD/BmhXukfD7w2+l6Jb2Vh4ju9Dn1XW9a1jVpItMtda1HVrpLTQ9IgT94AeZ+E/2L9Oi8BeCfAfxN+Iuq+M7H4b6Trq/D6XwxpDeA/8AhF/HfiK5vL6++MFiP7c8U3X/AAsjw/e6lqqfDjVhepp/gjRtRvLBdM1jWZb/AMUXIB3Xjz4EfEz4o/CPT/hJ40/aI12Ky1jQvF3hD4u+JPCXw4+Hmja98TvCHiawvdJfT4otc07xdo/gTVBpV0bPUtZ8PaWyXjTajd6Tpmi3MulvZAGH8Qv2StO8ZaD4E0fTvHuqQah4b8RfDq58SeMfGekReOfGHiTwV4J+Jnwz+JV14N0PUP7U8N6f8O18Rav8LfDH2uXwxpSeFkuLf+1tQ8DapqUcM4AOk+Nf7Nek/GPxXoXjS58S3NpqWg+FdW8H2vhzW7TUta+HF7p+ua/oWsanqev+ENE8R+DLjxXqyQ6KNN02w8V69rHgKK3u7qXVvAeqzE7gCb4W/s16J8G/HEvjDwZ4z8TzL4j8Nto/xPsfEUej6nL8RNY0k6Rb/D3xI01lp2j6b4Aj+HWjQa94b0HwX8N9E8OfDpNA1yPT7fwlZxaJoHkgHF/ET9lfxH8RPBfxk0i9+Mc9n4y+Pmj2/gD4oeMD4Fsb/TI/gsllrujyfC34deFbrxGH8EWttpPinxdd6P4ivfEHiPVbfxn4s8TeK9dj122Phzw7poB9ReK7fxldaT5HgbWfDWha09zCf7U8V+GtW8VaTBZqJGuF/sLSPF3gu7u7mYiKGF/+EgtIrYPJdSJcmJbOQA+PLL9jPXPAXi3xl8Wfgj8fPEngn4zfEy40y4+LPivxj4C8CeP/AAR8Sm0q+1a60ldb+HljZeBJvDC6DFrF/YaN/wAKz8W+DWvIJ5NU8fN4v8VST+InAPt2xiu4LGyh1C7jvr6K1tor2+itRZxXl3HCi3N3HZia4FpHcyhpUtRPMIFZYRNJtMhALVABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAeZ/Bj/klPgP8A7F+z/wDalAHplABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAcR8TP+SafET/sSPFn/AKj+sUATfDr/AJJ54D/7E7wt/wCmOzoA7GgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgDzQ/Gf4Pr4k+IHg+X4n+BbfxN8LLbwvefErQbvxVotpqfgWz8Y24ufCN34rtbq9ik0O28SwFZNFnvxDFfhkFtJI7qpAPRbe4t7u3gu7SeG5trmGK4trm3lSa3uLeZFkhngmjd45YZoyskUsbMjoyujsp3MAcj8PviP8Pviz4WtPG/ww8aeG/HvhK+u9VsLPxL4T1mw1vRLi+0XVLzRtYs4tQ0+e4t2udM1Swu9PvYRJ5lvdwTQyqHU5AO0oAKACgDK13XNF8L6HrPibxHqljomgeHtK1HXNd1rU7mKz0zSNF0qznv8AVNU1G8ndIbSx0+ztp7u8uZnWKC3jkmldUVjQBV8KeK/C/jzwv4f8a+CvEGkeKvCfinSNP17w14l0DULbU9E1zRNTto7vTdV0rUbOWa2vbG9tpI57e4gkeOSN1YMc5IBv0AeReJv2g/2f/BPih/BHjP45/CHwl4xiewjk8I+Jvib4I0LxRHJqkME+lxvoGq69aaoj6lDcW81gjWu67hmgkthIkiOwB62jpKiSRuskbqrpIjBkdGG5HRlJVlZeVYEgjkEjmgB1ABQAUAFABQAUAFABQBznijxVpfg/TY9U1a18R3dtJdxWSxeF/BnjLxrqQmliuJUeTR/Beg+INVitAltIJdQls1sIZWt4J7pLi5tI3APnKx/bY/Z61Tw+fFOl634z1PQBffBqxOs6f8J/ileaVG3xy0f4ba78NJ7rU7fwjJYacut6X8UfCV1LaaldWuq2TXklpc6cL6NLaQA9v8T/ABN8LeEvFvgzwRqA1q+8R+NovE99pmm6BoGra/PY6F4T0SfVdd8Ta7FpNrdS6VoNvcHSfDdtfTRs1/4u8ReFvDmnwT3+pIqgB4d+JnhvxTrw8O6ZpfxBtr46Te6z9q8RfCL4s+EdBFpY3ul2M0B8TeLfBWieH/7Wll1W3kstBGpnXNQsotU1Gw0+fT9K1m6hAPCf+G6P2W2+I7/CaL4ga3ceOo/E0/g+TRbb4VfGGeFddtvi6/wPuEGtReAm0N9Lh+KEU3gyTxHHqTeG11SGZzq/2JVuXAOui/an+DM1j8StZh1y/vvD/wAMvHnwx+Gur+IfD+k3XjDT9c8X/FVfh7F4M07wda+Cj4k1nxG15qfxJ8MaBdC10pZrXXJ7y1aB4LO5u6AM7Qv2u/gh4o8S/CDw14f1nW75/jRpHinXfCGq3fhrVvD+m2mmeHte/wCEa0+58Uw+KYdD1jw2vxA1yK90z4Ym/wBJC+OLnT9QGgNPHHDJIAev/ET4ofDb4Q+HovFfxS8d+FvAHh641fS/D9rrPi3XNO0SwvNf1m4Nro+h2M+oXEAvtX1SdWjsNMtfNvbkpK0MDpHK4AOU8dfH34Z/DbxNfeE/Ft54lg1XTvAlz8Sr0aH4A8e+L7a18F2Wo32malrF7N4M8N+IDp0OnXNkftI1FLbfHNA9o1wVuhGAReBf2gvhn8SfF1j4M8JXHiufVdR+H9t8T7CXXPh54+8I6fe+C7zVLLSrHVLK78Y+HNBF79uub2JraO1SYvAtxKXXyZVoAreJv2jvhV4O8T6N4O8RP8RbLxB4i1/WfDHhqxi+Bnx11CLxLruhaPrevarZeGdQ0z4b3mneIhbaH4e1jW1u9Gu7yxudFsbrVrO5m09RckA9I0Txlpmu+C7PxzDpnizT9Mu9IbWTpOt+CfF+j+NLWCOKSSayvPAt/osXiuHV4zE8a6OukPqN1L5Y0+3ulmtpJADxu1/am+G+r+Oz8NvDXhv4y+IvF9le+FIvEumQfAj4u+H4PB2jeLtX1XR9E8XeKdW8ceEPCmk2fhm4uND1idL2zvr68urDTNUv9L0+9trS5kAB6P49+MHww+GVvqTeNPHng3QNQ07QLnxINC13xp4N8N6xfaXAmomKe0j8VeIdCs4oL2fS72ztdR1G9stGF1BcLeanbw293OgBy/w0/aQ+C3xasfAc/gzxxpl3qfxC8PJ4k0TwrcypD4usrUaTb6vd2HiXQkknufDes6fazH7XperGC5aSC/FkLqK0u5kAPcaACgDxnT/j18OdT+OfiH9ny0vb5vHXhrwvpPibUZXtETw402pq923hG01g3OLjxrpehS6P4v1fw0LcXdp4P8Q+HPECyTWd1OYgDr/HnxD8LfDTTtG1nxjdXenaNrHirw74P/tmPTb690zSNW8U366R4en8RXNlDOND0bUdcm0/QTrt+I9JsdV1TSl1W8tbKaW8QA868GftNfB74g/EQfC7wpqniu+8UOPi2beW6+GPxP0nwnqA+Cvj7SPht8Tm0bx7rHhCx8F6/H4Y8Y61p2hXM2ia/fQy3lwkdvLIxAYApfFX9q34AfB7TL+78U/Evwjdapp3ibwz4RufB+h+LfCF541TXPEni7SPCUVu3h258R2N1Cmi3eqDVPEr3JiOieHbHWtZvVFtYXAoA7Xw18c/gt408R6n4S8HfFbwF4q8QaP4cTxdqum+HPFei6zJp/hlr+XTDrN3Ppt7c20NnDewmC6Z5g9q0lq92sUV1ZvKAcRrH7Ufwp0D4X6r8UdVudStLLRtY1zQNQ8KT/2Hb+N11Tw5440/wLryWmkXOvw2eqWWn6lqmmamms6Xql3omp+FtT0PxRoOpaho2s6BdXQB7vo+uaH4htHv/D+s6XrljHd3unyXuj6jZ6laJf6ddS2Wo2L3NlPPEl3YXcE1pe2zP59rdRy29wiTRupAPOPhb8cPhz8ZL74hWHgLVptRk+HPi288Ia1LPavaQ6lcWUk9jN4g8NNLJv13wfJr+meJfCFj4stY/wCxdS8XeEPHWiaZdXMug6hLQBv/ABD+Ivh34XaJp/iXxYupRaDd+J/C3hW81bT7B9Qg0O88Xa5aeGtA1HWbe3kN7Fo1x4h1HSdGvNRsrW8XSpNSt9W1iK08NWmua7agEvhD4g+HvG934qtdEGoKvhbxZr3g57vUbCWwtNf1HwvFo0Pii/8ACklwwfXtD8Oa7qkvg3V9YtoxaWvjLSPEGhFnkslnlAJPBfxB8IfEKLxPJ4S1U6i3g3xj4h8AeKbeWx1HT7vRvGHhm4ih1jR7u11K0tJiUSe1v7G/gSXS9X0e90zXNFvb3R76wvpQDC8DfGP4e+PvhV4S+Men69Z6N4M8W+FvBXi21u/E19pWkT6RYeO9B8PeIPDNj4jEmpTWmjaxfaf4m0Nhp0160jTajYRQPN9ptZJADhvCX7UXwm8awfBl9GvtU+1/GnSNa1zRNImtLNtV8Iad4e8B6V4+16T4nW9lqd6ngSTRtI1/wzZ6pBq03m2OveJvCuj3ixXOq2bMAekeP/in4E+GXw61b4q+LNbWLwXpNhp1+2qaTaXuvy6mus3tjpvh+08P6focGoX3iDUfEmpalpml+HtP0iC6utX1HUNPtLCOWW4jBANXw14z0XxXqPjbStL+1pfeAfFEXhHxFBeW/wBneHVp/CnhfxhatADI5mtLvQfFmi3sE7BGJuJIXiWWGVaAPMviN+018C/hdYT3XiP4keEZry18YeD/AANd6BpfizwlP4jstf8AF3j/AEH4e2qX+lXPiCylsLbRNZ12C68U3F20X9haLaavqV5GVspoiAdVF8bfgxcaJ4z8SWfxZ+HeoaH8PdKTXPHuraX408OanZeDdFkttQu4dV8UTafqdyuhWM9rpeo3Nvc6iYIp4LK/lhd0trlgAdr4b8SeHvGPh7RPFnhPW9M8R+GvEemWOtaBr+i31vqOj6xo+o28d1Yanpt/ayy295ZXlvJHPb3EEjxSROjq7BhQBtUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAed/CJVX4W+AwoCj/hGdIOAABlrYsxwO7Hlj1JJJJOSQD0SgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKAOI+Jn/JNPiJ/wBiR4s/9R/WKAJvh1/yTzwH/wBid4W/9MdnQB2NABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAfyT/tjfteftBeBfGH7fOseJf2qf2ifhF8dfhz+0T4O8Afs5fAjwzpOr6H8Ib39mW68aeErCz+Il9D/wguq6Jd6h4t0TVri9i8Yah4p0nVLu/WytdLubi01KLw+AD6O/b9tfH/xT8Pf8F1vAml3mv6nB8O/DH7CXiTw54b8PWumxzT6Z/wAK/bxH4ytNSaHTX1LWNJW2sp/E1zaPdG5judIszZSraxT2EwB+wv7BGq+CdX/ZX+GNz4D+MniL416UmgaFDe+KfE+uaZrmo6Prn/CM6HNqngiK60vQdAhs7PwlLMmmwaPPZvqOkMZ9N1K7kvoJ1UA/nP8A2Dvil4u8Gab+wL4P+Cv7Rnxl1T4sa/8AtifEDwp8Xv2U9L01dT+Fuifs1a18Tfirqvjvx54i8P23hezSyurPT3i8TR+Mtf1fWtWs01AT6RJpmmaFbeSAfoB8EfiV+0FqXwY/4KDftVfFH9oH9o3xZ4c+BPxg/bh+HXhX4I/Dmy8D2F4nhTQUMXh7xJ4Y1q+8I6lqltr/AIKtbqwvvB2p339p+FfCdjpepa1P4U1qS5v45AD5q/ZL/ai+Nuo+Jv2pNN8N/tF+PvH3gjUv+CZXxD/aY8E6b4j+PF9+0F4h+GnxStb6Gy0C0k+IOp/Br4YHRfG3hjTr9IfE/hHw4Nd0Gz1p7e4u9TbUlTT7YA9a/Zw+Jv7W/hf4zf8ABN7xTf8A7Qnxk+Nc37XH7GHxd8a/Ef4XfEi68MHwHB8QvAfwo0jxj4Lg8M2Gj+FtAXwpfalrl3aabqmt3lxc+JdSS3vW1PXJ4b7UbUgHn/wR+N0XxW/Zj+J+v/Gz9tj4767+2N40+B37Z2lfF39kDXnt7T4f+HL/AED4Y/GrZo5+E0Pw50+b4YWHhzSdK0jVtC8TJrdtZ65rlpd+HIb3Vby4vdMgAOz/AGEbv44fBz4tf8Ek/C9t8efi34s+Gf7Sf7GPjOXx58JPGD+HJvh14Iufhr8LvDWveDbfwPo+l+GNIfw1dW01zbWN1ql/cX3ijVksLtdU1y6jv9StiAftb+0K/wC2KqeEB+ybb/s3zOW17/hPG/aFvPirbIiAaL/wjA8IJ8OLC7MrSE66debWXiEQXRV01JTJfsgB+Dfxa8a/sZeA/wDgqz+3zP8At5+F/B3iLwl4m/Z6+AmkeGtN134X698Q21PxOvwy0QeIdP8Ah8+m+GNZ1PQvEFxYTS2ml6vZ3WjarHJParBq1teBJVAP04/4I7+FvjN4O/YA+E2j/Guw8V6Nqran43v/AAP4d8dRzw+MvDvwpvvFmpT+ANJ1+2u0F7Zz/wBkMb+wsr+a4u7XRbzTLZpYoo47GAA8G/aT1L9sv/hdfjPTv2otS+OHhH9iiXWr4eDNe/YF0q3v9Wm8HxS3otpP2k/E8Mt38f8AwkBo13LJ4wk+EWgx+E5J4Es9O1VikeoSAGn8XdQ8V/ET9rr9jX9mj4FftA/F34O/s6fEr9jTx54m02++FGrRWGt3mm6DD4cX4balFrvjrw74j16wvRoD24OoXBtPGUtkt4rataas11fIAfEVz+1h8UPFP7Fv/BN6z+IHxo+Nmg+PvjKv7ROnaz8crP8AaFT9nrwB5Hww+Jl34c064+M3xF0X4LfFbX/EPiSTw9ptlZ+FNG0nRbC41/VptZv9avrzUJ7eRADd+EX7Rn7V3xb/AGa/+CV+la98fvih4X8S/Gz9pn45/CD4seP/AAtPoS+Odd8CeGtQ8f6R4flvtT8QeDb3Tp9UtbXTtKFn4jv/AAxHPNem01WSxS/kCEA878H/ABk/ay8KeEPhb8SLv9rD4/8Ai69+F/8AwWDP7D9r4P8AFOt+H7rwr41+A82u3N/f3vxNhsfCen+JfH3ia9065eOLxD4h8SXVvpOjpatoFlp4tre5ABqfG79p79rG4/am/af0PXv2sfC37Lvjb4O/tA6dafAbwX8UfiN8UPB3hPxn8C9P1Cxn8PvpXwE8H/AXx9p/7QVr8SdJnuZNa8QjxNN4o0qW7s7m10Ww0rT7f7SAff8A+1zqniuz/aE8ZP8AsSaz+13e/taW+n+Dbbx54U+Hej2Wv/slNc3fh23/AOEO/wCF7t8bpbH4S+Fb7UPCjWk0esfDPWLfx9Bplnb3Fzp02pyq8oB+nnwNn+N1z8JPBNx+0dY/D3TfjLNps8njvT/hVda9e+ALPUH1PUDp9voV14jRNVlePRf7MGsmbzLVdf8A7Uj0m5uNIWyunAPNP2t9O1yb4Y6b4h0j4mad8MrXwB4qj+IPiXU9S1vxloKeIPDXhfwl4zvL7whDqvgfxV4U8QwHWLg2U19DZak73ejWmp2a2ck8kMqgH4JfEbRZ/h9ffDL4ieJvCPwc+GfjDRP2e/EutfCCyntv2ftci8IR+AvhB+xNofw2/wCEhvfH+g+PvGet3vwq8a2virQNEvviP4k1Txhb6JoaXWjXtokPiXU9RAP2E+O/hK9+JX7VX7LNprWraLD8KNbHjrxHpsfgy/v7PxP4w1/wP8NNc1bwT4w8R+N9MbTbm3074f6l431bVvhjoGi3d5p2na5daj49u9XutVv9H0vSQDvf2c7fQ/F3xH/aO13TPH/jXxhofw2+OGmeEPhrOPjV8SPFfhO28L6t+yt+zp4t1SylsLnxvqvhzxkq+LPHni/Vba+8TWutXul6jeLFpt3axaVo9vbAH4IeAPCuo+Jf20dVl0f9oPxVdiPxPp+vp4s05fgjea5HbfEj/grhY6r4It5YoPhdeeGoNZ8QaJ4t0v4y6bp13oUclzdTiSC0m+HKr4QcA+9fB+h654U+Cv7RfhvX9B1e91/w7+2T/wAE2NG1Pw7pGteGxr+palpfiv8AYPs59N0rXNO8Sad4fs9W1SS38qxuj4h0m2068nhGpX+jTQXfkAHhy6Lr013pHgbxt4O8VQ2MWj694a+Mum2XinXda0HxbonwS8Nya/8AD/w1rPhf4deOtI0zUNS/Zz8PQadN8Q/A3wVmt/C6+LLfxR4S+HN/4l+Kf/CZaQgB9Z/GCx8JeJv23v8AgkL4MvNXuvE3wntfA/7QXxW+Hk+o674s8W6R4t+Jng/4WeBJPh54ivfEni7VtX1jxHqeh6D4i1bxT4X1rxPf3/iNL5oLv+0Gu7q880A9I/af8PeIvGPxs+PWoeHNJXU9M+HX7E82neJ78fFjx98OktNV8ceI/itrGnaYg8EaPqieK76w0jwNNquqeFfEM1rYR2Gs+Gbq7222q2lxIAYn7ISq3x48JaamoadHfW37DvgC2u10j4x+K/itf6RczeLdKkiGoW3jXS4U8CagkcsdzH4Ts7a50eFWjcLNAQGANn47eCNfj/aa/Ye8Ht+1z8VtS8UTfFv4maiumT2X7LI8T+HdMf8AZT/aJ8rxJZaNYfs82jfZ9RaxutBN5rumalo7wXOoLZQRa5FZalbgH2iPBXiHwL8OvGFpqPxv1LxIlzea34k8QeOvjtpnhbVLDQfC8uln+29LWD4dR/BDStD8O6da2txfwXck6DSEl1OWe4ktfIWAA/LbwzrHw6u/GnxS+L3jv4pfs9eCPC3xF1z4LfDz4WQ/Ej4f+Nr+41K48B3/AIs1vwX8XfEvw6l/aD03XPhj4b13xr4ptn8G3/jnXYZ76z0vwZ4vZvBtxr2kxzAH1F/wUD0fxt4h+CfhbwlbanrQ8T6p4z+FujaGnhK+8K6d4a+LPxE1vxENLn+H+t/CzxhB4zl8V+DvscN/441TQLu/mt9A0LS5/E+seJ20Twv4m1hAA/Z38O+Pov2oPj/4pXTvE6aR4Y8c6T8E/EemX3xP01fDFp4Zj/Zu/Z5+KPhfxPfeC9O8KTW3jb4j6J4j8TXvhnS/EsOo+G3sfhn4rutB1G51mLwf4Q0NAD6lvvhL8QLu9vLq3/ak+OOmQXN1cXEOm2Ph79l+Sy0+GaaSSOxs5NS/Zs1DUHtbRGWC3e/v7y+aFIzd3txcmW4YAu6H8NfH/h6x8XRD9oL4jeLtT8TDRYLDVfH/AId+D94vge1sVvINSn8FaV4C+Gnw204atq0F39oF54xg8VaZa6vZ6Rdy6FeaVDqug3wB8KJ8AfBd5+1/4u+AR1nx5beFh+y54T+Mdtr9j431y08cWHx/1n49/FS11L9oTTvEEMypZfF65tnOlP4nhsVtT4MJ+FjaS3wiMngFgD0D9prwhd2mm/s0fCjVvGnxY8T+NPib4x1f4HS/F+fVvAOiWOs+FvF3hTxJ4g+KWifFHwj4WsvC2keJG1b4ceEvE0nw/TS/h5c6VoXjvSPCmrazq9jdyXsmqAHgnwu0Lwr4m/am8E/AuL4j3q/8M06h8fNR8QeI9J8d6z4H1/4oXvxL8beF/G7eHdE8S/Dz4neG9W+Iurav4vW28dftQaRqOkXPhzw/8SPDGneGNW8HWHh/xh4fiAB1/wC11on7QPib9qb9nPTdKlutY8Pw6J8ffFPgr4b+Bvt8lzYar4Rtvhb4dt/ir4j1pv2j/wBli6n8VNpPxG1/w9pOnab43k07wnoesazappPim91291vSgD1v9iXV/iN4h8A/tQ6Z45l1HxXruh/HvxT4b0Pw78QfE2p3+mW2kv8AA/4K6rp3hSTUrr4r/tMPo3hfUL3W729u4tP8deN7a3bWNW1NNOW8ubrw1GAfjRoOieJvD7eP/EvxYW0k8B6d4l/aEu/Fy/DHwx4MXUNV0n4nftYfDH4eeHtO+FHgR9Btrix8d22v/sr+KL+38N6h4g8QTan8GfAkuk+F7HT9Wlv72UA/XebRbzwn/wAE4fE/i/UvFun6Vd2XwU+KXxy+JV/+y/qPgTwjb+OvEF14Y8U+PfEOleGPiLYeHvGukQDUZnm0zUPiVoGly654g1e2sfFttf29lNqfh+6APFJPB/h3V/jD+yp4G0/4z3dlqEc/jX4b/DnXP2df2hPgyNY+G3h3R/hnrnxDlstT8LeE/wBkbwVZ+K/BN7/wrLTdEPhPxXeah4OW/u7TVbzQL6+tbYUAfRv7ZXgZfFyfCbwy/g34XeMfFPiX4xfs66R4SvfFHh+31j4havo/gj40+EfiZ8VVumg0GK203wVZeAPCnia/8XxWsq6Te6Te6xoslnBcavpmnXABzv7HXwp/sHxz8Y/Eui+Bvgb4dtNF/aC+O3hjWNR0L4fNaePINPu4vC09voXgnxRZz6avhzwvHqdrb3Wo6PcWV9FqUawtGthd2sVw4B4do1r8AfHvijxv8RfjR8R9A+J8Hwc+NHi658ETfEP4d+FPjF4w+Lv7Lep/CPwTZ32n+DfC1l4VfWvFvgfT/jBD4m8UeFPiD8OPDOsi21Lwp400TwzNdaNq/jGKYArp4S+GPw//AOCWvwx0TwZpHwq+HfjPT/Dn/BPQ/F4Q+G/DVo+i+OLb4m/s8R3eo/GbRNGvfDeo3l7p88N9Lrdt4j1XTNVubWLU7dtXsmaa9UA8osvB/gm3sP23vj34v8b/ALOvjXw9H4y+PXhHxLfz+HNKsPCt5Z2H7Ivwg8UeGNc/Z00i78R+PTovjRPEdhaaX42sYfFeqSeL9Itobw3MOqeFfCejRgH2f8V/Ch0X9ln4D+K7rxJq2ieI/hT8Ovhs/wACPhNpGm+HIovGX7TMngRfD/wy0TXNK8Q6L4ig8TTWesT2Ft4U8P2uk6db+DbxfEPxF1K7uNR0Twrr3hwAh+Evg3xh4r/bH+JPiOL9pDxtqZ+HXwf/AGXrTxifCCfCJ/AvxN1vWtV/aA1nxP4f8T6VZfDNoLe1srWHwlP4bv7O+i+JGgeHNSvLaLxeum69ZNGAaH7ePi6P4b6b4M1nUvEHjzxF4YuNVTxEvwM+Gi/DGDxlqHjz4YeINF+M/wAP/iro/wDbngDxB4jn8LeCvGfgWym+Ks73Vz4b0nRtWsfGPiS0fw3o3ibQtVAPpv8AZ01e38TfBHwXZa58bPBv7RniE+G4I/HnxG8Kal4N1jwx4q13UxcXOttpkHhK1tdEj8NJcXVxpegWn2GOY+Hrexi1P7RqP2+6lAPjL/gkgbHTv2fvjb4H8J6nJq/wn+GP7Yv7Tnw++BN75jTWR+EekeOYr3RoNHuDBCk+jWuuap4kt9LeDzbZbWNYLeZoolQAH6k0AFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAeefCP/kl3gP8A7FjR/wD0loA9DoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgDiPiZ/yTT4if8AYkeLP/Uf1igCb4df8k88B/8AYneFv/THZ0AZHhz4y/BzxjrEvh7wh8Wfhv4p16DUtT0afQ/DnjzwrrWsQ6zo8D3OsaTLpmmavdXkepaTbxvcanYPCLuxgV5ruKONWkIB8j6X/wAFHvgVbL8CrX4naP4x+D2uftB+NPHvgv4e6L42/wCENuVL+BLqC31DxJr+t+GPGOvaHoXhjUhMTpeqXmobjc22o6be29rqFrJBQB73+09+0h4M/ZX/AGdviF+0n4t0vWvFXg74faRoutX2neDjpN1rOrWWteIdF8P2T6M2pappmlzqZ9atbsyTajFC9mJXhkkk8tHAO+8M/GD4VeMbDxJf+HfiL4K1NPBcEE3juCy8XeG7268BPNa3V2bXxzFY6tdDwpdwQ2N61xBrL2xi+yXxLMlvO4AG638Zvg34Z0O68TeJPi18NtA8O2VzpNne+INb8eeFNL0O0vNcsF1PQrS61W/1iCxt7nW9OZdR0mCW4WXULBlvLJZrYiUgGlp/xN+GereHNE8X6V8RPBGpeFfEl9BpfhzxRp/i7w/eeHNf1O5knittO0TW7fUpdO1W+uZbaeOCzsbme5lkhnSONnikFAEvhz4jfDvxjoereJvCHj3wb4p8O6Feanp2ueIPDninQta0PRtR0eGO41iw1bVdM1C7sdOvNJgkjn1O1vLiKexheOW7jjjZXIB83/F79uL4C/Cnwl8OPG2meJNO+LegfET49/DT9nm1v/hJ4m8F+LbfQfGXxJv9QsdKvvEF3b+JobO00zTG0+WbVYo7mXVUiZDbadOwegD6Y8IeOvA3xC0681fwD4z8K+NtL0/VLzQ7/U/CHiLR/EenWWuaeIW1DRry90a+vbe11SxWeA3mnTSreWwmhM8KiRCwB1VAHxh8Z/27vgN8GPiv8EfgzPrMXjvx18ZvjLpHwSXRPAXiDwXrOofDrxPqyI1refEvSn8T22r+HLAlwqxjTrjUZSk/l2JMeGAPs+gDy6H43fBy6+J//ClrL4neCtQ+KqaLrHiO7+Hem+ItM1Dxdpmg6FcaPa6rquuaLY3Nxd6DZ29xremQxy6zHZi7luClj57Q3flgGho3xb+E3iPxBY+FPD3xQ+H2u+JtS0q417TfDejeNvDOp+INQ0K1uZLS61qx0ey1WfULvSra6iktbjUoLeSyhuY5IJZ1mR1oAraT8aPgzr/ja++Gug/Fz4aa18QtNkv4tS8A6T498J6j420+XTATqcd94Vs9Yn1q0k04DN+k9ijWgz9pCYLEAtP8WfhRHr+n+FZPif8AD9PEuq63qfhnS/Dj+NfDS6/qXiXR40l1jw7p+jtqv2+81vSY3STU9It7eTULGNke7t41YMQC74e+JHw58X6DrHinwl4/8GeJ/DegXeqWGveIvD3irQdZ0HRL/RYEudastY1fTdRurDTLvR7d47jVLa9uIp7CB0lvEjjYOwBy6fH34GT/AA68WfFzTvi78Pdc+Gvgex1HUvGHjvw14u0PxN4Y8O2Ok2hvtUuNW1bw9fanbWi6fZqbu8SSTzILb9/KixfOQDt/CPjPwb8QfD9h4s8A+LfDfjbwxqau+meJfCOvaV4j8P6ikcjRSPYazo15e6feKkiNG7W9zIFkVkY71bIB0lAH5d/H3/got4i+Cvx28Q/BnTfgZo3i6LSb7XdNsPEd78Wr/wAMyaheaD8OPgB49vxd6RB8KPEy6XbNF8cLDT7S4h1LUpZ5NHvZ57O1W5gAAPSdY/bP1Oy8Q/HeOx8EW8ukfA79mnxl8YdV0zULo21/r/jjwpo+l+I5tF0bxLaX9/CPCF1p2rW2kJqWpeErDxAuswahqB0s6WljFcAHC3/7fHii3tdGW68DfDHw/qs3jfxnq2o6dL8YbHVkuv2ePhYo0L4g+MtKuvEukfCs2vxF8UfEqw8Q/DL4PeC9Sh/s3xZdaLqXjefWovBVjrWo2oB9gWf7S3wP1b4I6z+0N4f8e6X4h+GGh6Vqeo3uuaUZftq3emEwTeF20O/Sx1e08bT6ibfQrTwVqVpZ+J5vEd5p+gf2YurXMFswBgeD/jV4tg1v4UaF8cPCmg/CvVvi78PNH1Pw9pC+IZtWSw+LVpPf3fjH4VX/AIgurLSLC58Qr4e1Hw3qfhjSLK0N1qdzpPxPh0681jTtAh1SQAt/tA/Gjxd8H/hh8Y/G3h34SeK/FMvw5+G3jXxpYa0b34fW/g66v/Dng3UvEcKahDqHxJ0LxZLpVvNaxwaw2m6I160aXsekC6uVhyAdP8OfiV4r8ZHRLTWvhN4w8N/aPDVvqet+KbrV/hPceFbHXmsdBu00BLDQPiv4n8YQXWr2+rPquji58PtaRaTbs2s6nZ3lzpcN0AdtqevamdSm0Pwzpdrqup2kNvcancajqMmmaNpUV15v2WG5urew1S7udSuUia4h061smVLXZcaje2UdxprXAAaZr2qLqUOieJ9LtNK1G7inn0u503UpdT0fVUtQjXUENzc6fpd1a6nBG4uZNOuLMrJaCa4sL29S21I24BmLq/i7xJJPL4TPh/SdHtr++sBrev2mpazc6lNpt1eadffYdA0/UtBEFmuoWskVvqV1rvmzpBNLFpDWs1pesAfHHxN/4J++EfjN8Sx8RPil4517xrYf8Jd4b8fyfCPXdf8AjVd/Aifxx4U0y20zw94kl+EzfHf/AIRkz6fHZ29ydLS3Tw9d3yz3Oo6Ncve6qJwD7N/s/wCJ3/Q3+Bv/AA3HiL/57FAB/Z/xO/6G/wADf+G48Rf/AD2KAD+z/id/0N/gb/w3HiL/AOexQAf2f8Tv+hv8Df8AhuPEX/z2KAGRaV8SYIo4IPFfgOGGFEiiii+G3iCOKKKNQkcccafFcKiIoCoigKq4UDAyQB/9n/E7/ob/AAN/4bjxF/8APYoAjGk/EhZpLhfFPgETyxQwyzj4a6+JpIYHneCKSUfFbe8UD3Nw8MbMUjeedkAaSVmAJP7P+J3/AEN/gb/w3HiL/wCexQAf2f8AE7/ob/A3/huPEX/z2KAD+z/id/0N/gb/AMNx4i/+exQAf2f8Tv8Aob/A3/huPEX/AM9igA/s/wCJ3/Q3+Bv/AA3HiL/57FAB/Z/xO/6G/wADf+G48Rf/AD2KAI5NJ+JE3l+d4p8Ay+VKk0XmfDXX38uZM+XNHv8Ais2yVMnZIuHXJwwycgEn9n/E7/ob/A3/AIbjxF/89igA/s/4nf8AQ3+Bv/DceIv/AJ7FAFeTRPiHNPbXU3iX4fS3NmZjZ3Enwy1157Vp4zDObaV/is0kBni/dTGJlMkZMbllzkAsf2f8Tv8Aob/A3/huPEX/AM9igA/s/wCJ3/Q3+Bv/AA3HiL/57FAGF4l8DeJvGmh3vhnxld/CnxZ4d1FrRtQ8P+JfhBqOuaHfNY31tqNi17pWqfE+7srprLULS1v7QzwObe+t7a7hK3MMc1AGFpnweGiXXiO90XR/gZpN54vu9Vv/ABbd6Z8CfsF14ov9blvptbvvEc9r8Ropdcu9Zl1G/l1W51N7me/lvb6S8kme4uGcA208CeJY7jw5dx3fwpS58I2dzp/hO4T4Q6kk3hmwvLO20+7svD0i/E8NotrdWNpbWM9vpxgilsoYbN1NugSgCp4X+Guq+B7DVtL8Fp8HvCWna7rWr+JNc0/w18GLvRLLWPEeuyibXNf1W10z4mWsOoaxrMiq+qandpLfXzKn2q4l2KaAMeX4J2txcaZdXGgfAmefRZ/Bd3oss/wHEraPefD37f8A8K/vdIEnxGYaZeeBhqV+vhG7shDc+H0urhNHmtUkZaALsPwlntrPVtPtbD4K2llrvjTTviPrlpafBKe1tta+IulazoWv6X481eG3+JUSal4vsNa8NeH9XtPEt6s2tQ6no+jXqXwubCzlQAs3Hwy1S78Y6T8QrtPg/c+OdC0i/wBA0TxpP8Gr2XxXpGhalJFJqOj6Zr8nxNbU7HTb54I2urG2uo7aYg+ZGwaTcAeY/HT9l5P2hdO+H9t458SeHdP1f4V+OtC+JHwz8Y+D/B3iXw54y8D+MNB82O0v/D+t23xRleCzvLaWSx1nRbmG40XWLEx22qafcLDbFAD2T/hEPGGzXov7U+GHl+KJnuPE0f8AwqbVdniK4fR7DQHn15P+Fo7dYmfRNL07RXl1ATyNo9jYaWztY2tvCADO034c6zouv6h4q0f/AIU/pXibVtJ0fQNV8Sab8Gbux1/UtA0D7T/YGiahrFr8TIr+90nQ/td1/Y+mXNxJZab9oufsMEPnTbgC3deCPFF/r+j+K769+FV54m8P2mq6foHiS6+EWo3Gv6Jp+t/Yv7bsdH1ib4nvf6Zaaz/Z9j/atrZ3EUF/9ksvtiS/Z4MAFvWPC/jbxFo+q+H/ABBrXw11zQtc06+0fW9E1j4VaxqWj6xo+pWs1lqWlarpt78U57PUdO1GznmtL6xu4ZbW6tZZre4ikheRWAOJ0/4GaZpHh298IaT4X/Z/0zwrqWn3Wkaj4Y0/9n63s/Dt/pN7py6Ve6Xe6JbfEKPTrvT7zTEXTbqxnt3tZ9OVbGaJ7VRGQDqJfAniafxNa+M5774XT+K7HS5NEsPEs/wn1abXLDR5p5Li50yw1OX4pPd2NldzuZb23tZYorx1gN2kpgt9oBcsPCnjTSbvXL/StX+Gem3viXU4db8SXth8KdWs7vxBrUGiaN4cg1jXLi3+KUcuranBoHh/QtBh1C/ee8j0TSNG0lJxp+n2NugBp/2f8Tv+hv8AA3/huPEX/wA9igA/s/4nf9Df4G/8Nx4i/wDnsUAYSeB/FEfii48bJf8AwtXxdd6FZeF7nxSvwm1UeIp/DOn6jqGrWPh+XWP+Fo/bm0a11PU7/UYNMNwbNL67ubsQi4keSgCr4r+HWuePNNh0fxtN8KPFel292L+DT/EPwj1TVrOK8Fpe6e88dvffFGeNWuNO1HUdKvAF23mj6hqmj3izaXfX9pKAYOr/AAPsPEGh+GfDGveG/gHrPh3wbfWGp+D/AA/qvwCiv9E8Kalpkyz6bqHhnSrv4iTWWg3lhKiyWdzpcFtNbuAYpFIyQDr7jwj4xu9b0vxJdat8MrnxBothq+laNrs/wp1eXWNK0vXZtHuNd07TdSk+KTXdjZa1PoGizara200cF/LpmlPeJK9nasoBm+EfhvrPw/0680fwIfhF4O0vUNY1XxDf6b4X+Dl9oVhe6/rV297rOtXdppnxOtYbjVNVuna4v7+VGurmTaZpX2JQBieH/glaeEvEF74r8K6D8CfDniXUJ9Sub3xDofwJOl63cXOryRS6xPJqdj8R4Lwy6xNDHcas4mDajcqtzfma4zJQBc074RPo/hzxN4P0jSvgfpfhTxlPr1z4x8L6d8CzZeHPFdz4mtjZ+JrnxNolt8R4tO16fxHa/wCi69NqltcyatbE2+ovcRZUgHS3nhbxrqN9pGp6hrPw0vtR0C5ur3QdQvPhTq9zfaLe3mnXek3l3pF3P8UpJ9MubvTL68026uLOSKafTrq7sZpHtZ543AKsfgjxTF4juPGEd98LE8V3WlRaDceKF+EmpjxFNoMF0b2HQ5Na/wCFof2i2kRXha9j0s3JsUvWe7W3Fy7ykAm0jwh4w8PjUxoWq/DHRv7Z1e+1/WP7L+FGrWJ1XXtRaM6jrWpG1+KURvtVvzFF9r1C68y7nWOFZZnWOOgDnvE/whbxvoVl4X8aaV8DvF3hzToFttO8PeJ/gWdd0Kwtkgjtkt7LSdV+I95Y2sCW8UdusMECRrAkcIXy0VSAUPDvwO07wf4an8G+EfDHwA8L+ErnWrDxLc+FfDv7P8Gi+GrjxJpl7pWo6Z4gn0PTfiFbabLrWnX+iaPfWGrSWzahaXumaVd29ylxZWcqAG34g+GWpeLdG1Tw54rh+DXiXQNa1C11bWdC8QfBW41jRtW1ayuLG7stU1TS9R+Jd1Z6hqFnc6bp9za3t3DLdW9xZ2M8Mqy20DgA07jwd4uvNb03xLd6n8MLrxBo1rf2Oj67c/CfVp9Y0my1Mwf2paaXqUvxSe70631T7Lbf2lDaTRR3wt7QXiyi3t9oBW0DwD4g8KS6/P4Wm+EvhubxTrt54o8UTaB8Hb7SJfEfifUI4ItQ8R6/Jp3xOtn1nXb6O2t47zWNQafUbmOGBJ7p1ijoAraH8NdX8M6xr3iHw7/wqLRdf8UzJceJ9f0z4O39nrviOeOWeaKbX9Yg+JyahrMkMlxM0Dajc3BgErrCUQlaAOSv/gHK+n/EmHwxd/DL4b658VtLuNK8cePPhn8IZPB3xD1hJ7e9tl1CfxfpfxBXU5dZsotQvTpOtXMk+p6Rc3El/pF1a6isd2ACx8F/gbe/s+/CnwR8GPhbq3gjQ/A3gLR00bQdPl8B+Kb67ZGubm/1DUtT1C5+LTXGpaxreqXt9rOt6lcMZ9Q1e9vb6YiSZ6APoigAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgDzv4RHPwt8An18L6Mf/ACUB/wA/UehyAeiUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQBxHxN4+GfxFP/Uj+Lf08P6t/j/nNAHiuu/D/AMQ+Mv2UPHXhXQvHF9onif4ifs9694X8P+JNU1O6sNH8F6r4h+GupaXoer239jW8dzpdt4eub+3u5tTtI59a8m0+1iea+UswB/N5/wAE87PR7j9uH/gmN4B8G/B/4I+H9U+A3wE/aHPxX+InwF+KPwz+La/EO21z4cXPh/SPih8TNZ+GthOnhWTxD4muJ4dB0jxr4hv/ABQLzXbiGTS9HtJNOS8APfvDn/BNr9ozw38Gf+Cd+oeK/wBnDwz8T/E37OH7Rf7RHib4z/B258SfBi81HxT8KPib4+8TeIvDht9b8VeJofA3iG30yGeO/TwpqWt/Lf61IGSzmTVJ1AP1j/4KF/BH4l/tEf8ABO74zfBD4ReAbWL4ieN/A/gPTfDHw6OteFNGs9KutN8aeCtZvPDi6zcajYeFrWHQNN0y8t45YL+PS5Vs1h0uSVZLRGAPzem/YS/aE8Xah+2x4v8AB/7JPgr9mPSPiH/wTz1P9lXwH8KNE+IHwvuNQ+LPxdvdVvdWh+IOpJ4G1d/Afhu3t7O3t/D0moeIL/T9XlFza31xJeCfWZbYA9Y+Kv7EvxQ+G37H/wCyt8NP2cf2aPhhfa/feLPgbf8A7ZGhWfhb4AeKPiVePp3w6vPDHjjxt4Dvfjsur/Ca8+IOn3us63pL+NdQe81i20u+t4vD14/hdNSRQDwHw5/wTn/aOuP2S7L4J618EIbW3f8A4KzeHv2i7nwD4j8Y/Ay7Q/suRQaHBqWqasPAc/h74fPO2nxX1jqngzwzomkTz3X21NH8Ippc1ozAHSfFz/gmd8e77wd/wVP+HfwI8BeEvhp4E+OvxT/Zk8f/AAQ8B6JrvhLwr4K+JXhn4eaKNQ+KXgYaboN20Hw7g8TeIVcBdd0vTNL1C+FnHcRjQJLu7iAO9+N/7JvxA/aJ+G3gTwr4G/4Jw+C/2ZtK0j9rH9kjxp8RPC0Xir9ni3HxE+G/w51H4owfE+/1jR/h9rCeHb7Q/B9rrqad4ae9vLjxb450PX5Z4PD1laWyacgB9ffsS/sp+Iv2av2mv+Cg+u2Hw18O/DT4J/GD4gfBjxH8ENI8JzeFbPw7c2eifDrUdP8AHdzp3hDw5eMfCAPii8lkktL/AEzSzeNMtxYQS2sYZAD6L1X9ma91H4+y/Hy1/aU/aZ0qXbEbX4MWfxJ0s/s828sPgweE42f4azeEXlu4nlUeLLqG48QN9o8XtJqhkS2ZLBQD8D/gp/wT3/av8M6z+wb4Y1n9j3QPD3if9mP9sDUPib8ef2o4/iR8F73Vfjd4U1Tx5qfiePxhbQw66PH1/Y6fpWpWStoGqiS8tLu2az03SHvUv4oQD+hP9pv4G337R3wY8VfCTTvi78S/gtdeIlttnjv4U642h+KLZbeSR5NKurqMJdXfhzWUc2XiPSrG+0q+1LS3msrbW7GSQ3QAPkP9kz9nP40/swWXjD4GXnwR/ZsuPh7qHgvxN/Yf7Q/wQhvPh/498Y63BPNFpOnfG/4deKk13VNT8WeI49UudSfxbpXxJ8Q6HZ3VrdwXFrYQXdjDEAfD/wCyx/wTi+MnwYn/AOCRvi24+B3g/wAH/EH4C3/7Scf7WvizQNV+Gtv4mfSfF+h+I9K+HMPiXX9D1f7b8TYfLu9PtdPhsLrX30GyxbzJZQRvEADzvSf2J/23fGn7TnwH+LfxD/Z68PeFvE/wt/bqX4ieOfGXw5h/ZF8BfCS++Ba61qWpW+v+D7bwjpun/Hbx1rWoQ6q974quviT4hudWvpJjZS+GdS8Qx391ZAGj8cf+CYfxb+I3gT41alafs4eBtX+K3jH/AIKza/8AHjTfE2o33wh/4SzWv2Sb28W8+1f8JZea79qtdB1OWa7ll+Hl/qdr4glnkMmoeGFIjcAE/wAQv+CZP7S2o/Df/gqz8M/hB4J8L/C7wj8dvjf8D/iL8AvBOi654B0Hwb8QPBngG+1TVvF/hC30bSZdR0j4fJr11Fpj21v4p0Ky0m9vodMtdZsW0T+03jAPrf8AY0/Z7+IPwQ1n9qX4vaZ+zJ8ctG8bePfhx4P0qf4d/GL40fslWvg74v8AjXwbaeINK0/QtG0P4BfD/RfCHhK00qzjh0i1+JXiTTz/AG34c1+SZ/DC3MOo21AHQ/s9/wDBPn4l+HP2iNM/aq8eeMfAf7O+rf6RJrH7Nf7F+m694P8Ag54yE1pZRWjfG/WdeuUsvirqtr5TLfXGi/D3wZHNfWthqUF/NIsrsAfrbQB/Od+1f+yPN45/av8AGPxQX9lHxNrXgnVLz9pbxdqvibS/hb4e16fVzo/wn/Z48GeElsPCGmWeqeM9d1rxT8bPhz451VIX0NZvEHg7xpbfFHwvcarDfeKHQA+mtZ/Z817wGf20vD/gb4fa5F4d1H9hbx9o3h3SPDnwt1Hwz4YtPFni7wLFa6X8M/AbaeLnSvHmsxzeFr25vYfCNtDPpl3qWn6HqmhW19LpeoamAcf8Qf2ffj9pPiDw7oFxHqF/o3xH/aG+BPj7z/Cfwd8SP4QsPHP/AAlfwJXW9aTwxoXi3xbeeAvC/gT4f+ANZ8T/ABS8W/EnxXoo+JfxN1PxFF4ci8KWejaf/bQB+h9ppKQfAPwfF8avgjrnjHxd4d1fxFpWl/CcapN8W4PEXi6w1/xTp3hvU4NV1VYPDr6D4mstOg8SeEPE/wAT00iy+H+gaxpcfizUfD2s2WpmMA+SPCP7JvhjxD8Wfgb8Lfi58EtK8W2Pg34WfH34k/HbW9Z+Fmm3Xwf174jfF/xv4I1PwZ4G8L+LdQ8PSWXiey+G0msfETR/h7oUM1nqvgrwj4Y8O3z2WjqPDdvOAfUX7UGhaf430XS/BPw9+EVv4/8AjF4J1HQtV+GUniL4ZNdfCjwjLJPYrqdt4y8beI9P07wdaeB9Y8PIND8d+GPC+sap8Sk8OX9vrPgfwXe+LdL8N3luAcn+xaknwq0if4KeLvgb8SPh58Wdf1LxD8UPit4qh+Hlmfgj4t8e69NDJr+qeBPiJ4HvNb8D2Hhazht9K8MfDfwbrl7onxAsPAWk+GdO17wrHrFhrlzQB6t8afhR4a8f2eu+G/Hfjn4wfDvw7rPizRfHFh40+DHxa+JPwg12PU9O8JxeE7jwzr/jL4ba5oerx6G8FqurLperXg8P6jdyWkxRtT0i2IAKPwn+DfhTwnouleC/A/xD+Nnj3w3pvi7VPHWpePPin8afin8UfFC6jeeFpPC9r4Z8NfEHx74g1jW10dop21OTSdE1E6Fp7rqLypHfa3P5wB9PaLo9j4f0u10jTVlSztFkEQnuJ7qdmmnmuJpZrm4lkmmlmnmklkkkdmLu3IBNAGnQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAedfCD/klngD/sVtG/9I6APRaACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoA4f4nf8ky+Iv/AGI/i3/1H9UoAf8ADT/km3w+/wCxK8J/+mGzoA0tA8HeD/Cb6nL4V8KeHPDUms3C3esSaBoWlaO+q3aNMyXWpvp1pbNf3CtPOyzXRllVppiHzJIzAHR0AFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAeefCNCnwt+H4JBz4T0JxjPSTT0kXqOu1xkdAcgMw5oA9DoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgDh/id/yTL4i/wDYj+Lf/Uf1SgB/w0/5Jt8Pv+xK8J/+mGzoA7WgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgDl/FnjjwR4B0+DVvHfjHwv4M0y6vE0+11LxZ4h0jw9p9xqEkFxcx2MF5rF7Z28149va3NwlrHI07QQXEoQxxSuAC74d8TeGvGGj2viHwj4h0TxRoN8bhbLXPDurafrWj3jWtzNZ3QtdT025urO4NtdQTWtwIp3MNzFNbykTRyLQBt0ARRTwTtMsE8UzW0pguFikSRoJxHHKYZgjsYpRHJHIY3w/lvG+3aysQDjPGfxO+Gfw3k8Mw/EX4i+B/AcvjPX7Hwn4Oi8Z+LvD3hiTxX4r1KaO303wz4ZTXNSsW17X9RnligsdF0sXOp3U0kcVvbSSMoYA7igAoAKACgAoA8k0b4/8AwD8R3nh7T/Dvxw+Emu33iweGG8K2OjfEvwVqd54lXxloXiTxL4Nbw9bWWuzza0PF3h7wj4p8QeGDpyXA13QvD3iTWNIN1p2katdRAEvi741fDvwPYfGHUNe1S9SL4G/D5Pif8R47TRdXu5tL8ISaP4w1uG6sFitCmuXs2neCddmXTNJkur5HitYJoknu7RHAPSvt9sbOa9UzvFBB580UdneSX0a/ZluhC2mRwNqAvGgZHXT/ALN9vZnjiW2MzohAPHtV/aO+CWjaF4d8TXfjq2n0DxX8MvE/xk8OazpGj+JNe07Vvhn4RuvAFl4h8T2t1oWjalF5dnc/ErwbFBpcjJrupHVWbSNMvE0/XHtgD0nxT4s0Xwbp9jqmvS3UNlqHiTwj4Tt5bXT77UCNa8aeKNJ8IeHIp4rCC4lt7W713WdOs7jUJkWx0+O4+26jPBYxXFyoB47Y/tW/s86n8SIfhVYfFHwzdeLLmTV7e2hi1G2Ol3V5pNt8HriSystZM39n39xqA+NXga20YWU88Wq6pc6zotjNJrOia3ZRAH0NQB5b8LPjT8MvjTomma/8OfEg1m01XwX8PPiJaW13pWtaDrH/AAg/xP8AD7eI/AHiWbQ/EGnaZqsGleJtOhvksLuWzEI1fSvEfh6eSPxBoXiHTLYAueAfjD8IPiwL0/Cv4rfDn4kjTtO0fWNQPgHxz4W8Xix0fX7vX7DQNVvf+Ed1bUvsuna7e+GPEdno99PstdSu9D1+2sZpp9M1JIwD0agDzbxp8Zvg38Nb+HSviN8Wvht4C1K4sBqlvp3jTx54U8MX8+ltPdWy6lDZ65rFhPLYNPZ3cAvEja2M9tdQiYyQzAAHKfCv9pv9nj42xeFP+FWfGX4feMNR8Y+EIPHeh+GdL8U6O/jNvC8tpot3LqGpeDZLxPEmhy6cmvaTDrOn6xpdnqOj3t5FYata216ssCgGj4x/aB+DXw70L4leJfHvjzSvCOifCnV5tA8Zahr6XtgsWtw/DjQfii2k+HraS2+2eNNSl8GeIdN1S003whb6vqF/dNd6Jp9rca9ZX+nRgHV+EviZ8OviDpeq6x8PfHHhfx5YaJP9k1ebwVr2leJ203UTp1tqqaVfxaLd3slnq0un3dnex6VcrHqD213Zyi2KXELMAcCv7T/7OcemeH9S1b42/DXwx/wk3h7w/wCKdI0rxl408PeEPEk2ieJfDieKtDuZ/DPiXUtL1yylvtBY6mtnd2Ed5HbxXRmhV7a6CgHsWha5o3ifQ9G8S+HdTsta0HxBpWna5oWs6bcR3Wnato2q2cN/pmp2F1EzRXNlf2c0N1a3EbNHNBJHKjMrAkA1KACgCKaeC3VGnnihWSWGCNppEjV555FighQu4DSzylY4YwS8kjKiKznDAEtABQB4p/w0X8EY5o473x/p2jwNZfHHUptW8RWOt+HPDmn6d+zz8TdD+Evxlvta8T6/pmm6BoNr4P8AHniDStCjuNZ1Ozi8SRXEmveDH1nw1a6hrEQB6fofibw/4l0Pw34k0PVrPUNE8W6bp2r+GdRil2Q61p2q6Uda06509ZxHLMLvSlbUY4xH5wtFlmkjVI5SACl4b8Z+HfFfh2y8V6TeSpoWo3tzYabf6rYX+iLqDxa/ceHrO6sYdZtrGe607Xr+COTwtqcMb2HibTL3SNY8PXN9pWpaZeTAHF+N/j58Ffhpr2l+HPH/AMTfB/hLUtUlvYEXXte07T7XT57LQLvxK0fiG+uLlLTwyt3oen3+p6bca/NYWmow2k8Fjcy3rW9vKAdVpnxB8I654mn8J6HqVxrWo2tjrN7e32kaLr2p+FLCXQPER8La1oepeObHTLjwdpvi7TtbjuLG48D32vQ+NALPVrxdAaw0zVrqEAzNY+LPw/0HxLqfg/Udbm/4SLR4Phlc6tplnouv6k+m23xb8eX3w6+HU97c6dpd1Z26+I/FWmajZIslyJNOsbDUPEGsJZ+Hba41QAHo1AHC2PxL8D39z8Trddegsk+EGtweHviLf6xDdaLo/h3UpvAHhH4k5m1rVobPS7qxt/CHjXw9rF9qlldz6bYi7ls767hv7PULaMA1Ne8X+H/DOo+EtK1m7ngvfGviGXwv4dig03U75bnWYfCvivxhLFezWFndQ6NZpoPg3X7xtW1iSz0nzrWLTvt39p3en2coBX8LeOvDHjW98a2Hhu9uL6XwD4sn8EeJZX0zVLSyh8TWuh6Drt7Y6ZqF7aQWevRafa+ILG01C/0We90+y1yPVfDl3dR69pWs2EABm698U/h/4b1PTNG1PxJayarqnjjQ/hvFpekQXuv6jZeNfEOgT+JtG0XXLHQbbUrrw6154fgOvNe67FZaba6JJb6xfXkGmTRXbAHR+G/FHhnxjpX9ueEvEGj+JdH/ALQ1nShq2halZ6ppp1PQNYv9A12wW9spp7drrSNZ02/0nUYBIZLXUbW6tJ1WeKRAAcVD8aPhrc6hDpFrrt7dapL8TdR+DzaXa+FvF9zqVp8Q9L0G68T3+k6nYwaDJc6RpkPhu2HiRfFuqRWvg2fw7d6Nrtt4gl0rWNDvbgA6LUvHnhXS38ArLqTXkfxK1yPw94Lu9Gsr/XNP1a/l8H+JfG8M5v8AR7a+tLHSZvDnhXV9Ri12/mg0VvLtbb7ebq90+OUA53w18Z/hz4w1PTdK8O6prF/NrF74p03Srt/BXjqx0PUL7wdf3+m+J4LTxHqPhu00KdtKvtNvLR2TUjHcTwuli9wWTIBa8ZfGD4X/AA/02fVfFnjTR9PtbXW9A8O3UdtJPrGoW2r+IvE+l+EtLgudI0OHUtUggXW9Vs4dW1CWzXTvD9h9t13xHd6foFhquqQgHR6L408GeJNT1bRPDni7w1r2saDa6Tfa5pOi6/pOp6no1jrkmqxaHe6tYWN5cXWm2utSaJq8ek3F5FFDqEmmaqllJM9le7QDpaACgDz74cfFTwD8XNO8R6t8PdeHiDTvCvjTxR8PtavU03V7C2i8WeEdQOm6/ZWM2qWFnHrNlbXO0W2u6O17oGpRss2l6pdRB3ABt+JfGPhrwe/htfEupjSx4r8TaZ4N0KaS0v5rW58S6vDfS6Rplzd2trPbaWdUewlsrC71WW0sLrWJtN0KC6k1vU9IsLgATwl4w8PeOdNvtX8M3dxe6fp/iHxT4Wnup9M1TTo5Na8IeI9U8L+II7L+07K0Oo2VprWkX9pb6vYC40jUBC1xpl/c2pWYgHkPib9rP9mLwboOneI/Enx2+Gmm6bqmr6BoNiJPFukS6nJq3iHx7bfDaxtJNEgu5dYtns/Gk7+HfELXNjEnhfULLXE8UPpsej67JbgHodn8XPhLqPhS48d6f8Ufh7feCrTWLXw9deMrPxt4YufClt4gvNX0/QbPQrjxDDqsmlQaxd61qmm6La6XJdi+n1e+0/TIoHvrq2hcA5WD9o34HS634v0Kf4k+GNPuPBlho2rapf6lq1lZ6BeaTrVpqVxaX+g+I5bj+xde+zSaPqtprGnaZfz6zoVzaRPrumWVjqnhq8vgD0Hxt438L/DnwZ4i+IHjDUZNO8K+FtJudc1zUrbTNW1qa20y1jMk09vpWhWOp6tqcm1f3Nnpdjd31w5WO2tpZGVSAO8KeM/Dfje31y68M38l/D4d8U+I/BervJYalYi38SeFtUn0jXbGL+0LS2+2x2V9byQC/svP064ZX+y3cuyU0AYGs/Fz4d+HvE0/hHWfEBsNctYvDdxd28+la2LO2svFMvi630TUp9WGmnSl0yW58FeILTUNSF61lol3awW/iCewkvdME4BqyfEDwrD8O5/ipcXl/Z+DLbwjceOrm/1HQPEOmalbeGLXRpdcuL278Nanpdp4jsrqLTYXuJNHvNKh1qOQG0k09b0G3IBXHxJ8Ht4o8H+EBqM39r+OPAni74k+HBJp+oQ2dx4P8F6l8OdL8Q6jd3txbxQaZNbXPxO8J+Tp+otb6hcxXd7NBbsmnamYgDu6ACgAoAKACgAoA4D4Uf8AJLvh5/2J3hv/ANNNvQB39ABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAcP8Tv+SZfEX/sR/Fv/AKj+qUAP+Gn/ACTb4ff9iV4T/wDTDZ0AdrQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQB+b/7ePgnxD8RPiv+wJ4T8MXHwuttVvv2gvijLFL8ZPhPffGP4f8AlWX7IX7RN5Ouq/D3T/iR8L7nVblkhzpd0vi6zXS9REGpPbXyw/Y3APkv9tT4u+M/gFpei/BHw38Y/AXwb+JPwv8A2dvH3x31HxH4U+I/gv8AYl/Z31qbV/Gmv6N4QHw9+GPib4dftYeKPiz4/wBL1nQLn+2fhTdeJ7LwFKdY06+8U+If7c8deD9OsQDJ8f8A7V/xZitv2afjj46+NWoQeDPFH7L/AOyh8Rtc+E37O/xn+BnhX43+FviV8TZ7i68YeM9c/Z3+JvgDWtV+Ovg/4iNrmg+H/A3hvQ/F0l1APCvivSfB/wAO7vxnfRa/OAetfsYWXi7wV8av+Ck2n+EfirH47+NA/ax+K2veHv2Yvin8UPA3w88I33hXxB4c/Z016z+L2pt4L+BvjX4oaHFHo+v2fhrQ/FFvoWu+D7vSjoeh3ehr4gvbrxjQB674u+H/AMSPHv7fX7FXjD4g+MNb+FPi3QP2Yf2u/EGt/Dr4R+NPC3j74azXHhf49/sQQy6OnjH4g/s/eF/GGp6T4/0PxTbWPju503RfB2s/ZtK0fRvDd/p0Vvrms6wAfNX7P/7RvxG1rWP2VPE+k/tRaz8X/ib8ePhz8ZvEf7WXwKvp/AV9pX7POp+EvhF4g8UTX2j+B9F0Cx174Qj4KfGfT/DX7O1xY+Irie38Yy+JXu/GNvrXjmKPxEgBd0r40/tB/AP9iH9kP9ujx58c/jF8erbxn4a/Z/8AG/x3+H2o+H/g/aaRc6N8W/2evG2geFvDngHSvBXwn8O69bXeofHj4kfBxry5vvEGp6trE2kwIt3BFf6lYzADPCP7UX7Rfw90z9pnwh+0T8QfGHiHV/2CP2YviTqH7Rviz4beEvBel678UPHnxn1DS/H37OnxB+HR1PwnP4X0m6+HHwm8IeLNN1G4lsJvBum+LNWvtU+JFlcaXpBjIB86XX7X/wC0X4F+EP8AwUI0Lwh+0V4V8V6l8JP2XP2dvi78OPFfhT9oXwD+1vqnw28e/Eb4sfGbwj4pt9V+IUf7PPwfsTe6roHhXwxqT+BNa0XxbpGhS/8AE18I+JotI1lNOgAPtn4vavf/AAm+Ofw/+Cnx4/4KB/Fb4WfC/Wfhd8SfjBYfFzxr4l/Z7+Fev+PvipZeNPh34Yj+H9j48T4ReFfAyeG/hrouoXHiyx+Fml6GdY1278ZPf+KrnXPB+g6VodsAT/sAfsz/AAc+KX7E/wCwB8WvEmmXWoeM/D37Nn7LEumeKNP1T7LLfn4WavpfxM+HeoXH2OIWjz6Hq+oeLtPtrnT47Vbnwh8Q/iZ4WuPO0XxFPAgByX7R3wV0jxPr37b9j4vWH4qeNfFHwX0P4XfDLT/Fc0sOkS+Lv2gvEfx30z4UaTa+DbbTNX0HV/Efw6m1vSPBng7xxqtta6j4S8JDxhr95r+jaPrHjbUQAfUH7OHhbR9D039pPxh4b174afBvwl4s8eJrfjjQfh1p3hvT9e+AXxK+HPwz+GPw7+Ivg3X9a8ReG18FXui2A+Hd74pg1m/8C6fZ32i+Jz410We98O6zofimUA+KvGnhXUvjN8BvB3xl1bT/AAP4n8Q+HP2CNZ0f41eKr34a+Gl1ab44/EVv2Z57nwzqlxoFzo2nw+PPCa/CDxdYa94Zt9B029+G+maj4X0W+0uK31rTLagD6c/bH/Z5uvGHwc+CHgBNF+DNhZeEfir4Btpdag+Cnha88DWOgax8UfCvg/w18L9H+DviHVfE73Hh7V/+Ep0jX/GGlafri6Z4g0/4e6npJg0dvEWhjTgDyP4Y6JrunftEaJ4MfUJx4y+HPxy8e+MNW1nQfGfxZsU134VfETxN4n1yD4NaB4C1D4Z6Hpml2Hwp+GXiP9lPU/HPgW78Zz6No3gfT/h7FZwa3a+HvBkN0Ae5ftKQ+EX+Pfw48Ikfsq3Wu/E6+1W21yHxp+z3YfFH41aZpfhj4favrdlqUSQfEmx1PX4tXvNH03w3pMD+D5TbWt7bWFg93fGyagCz+xr4J/Z/8O/D+y+Dug+DfBnw++Ovwv8ABXjD9nnxjqnhfwfpHgz4xt4Q+G954V8P2HjG71yz0LT/ABDptn8SfDGqfCv4y6Gb6WIXieLPC2tpY/2hZXEdsAeh6r4G+GH7DPwW8f8Ai/4MeHvhZ4RE978EdGmk+L/xJl+G3w/i0rw9pnwq/Z+8E+H9U+JEnhjxbe6Dp2h+D9F0208IaTJpWoQ6x4+vp4ZpbTVPFeta8QD7NoA+WP2n5b6OX4E2tmmtXUGu/FnXfDeuaTpF/wCMbaHXPD1/+z/8c7690rV7Pwj4P8c3eqabJd6Tp129rdeG7y0Se1t5nuLUoZiAZPwDkuYPjD8WLK6j1jTLa2+F/wAArDR9E1a/8ZtZ2FrbeIv2iY4oNC0zxh4B+HMun25trQI0eleH5bOSK0VTrFwbQ6dZgHwP8QfDHxZ8ORftC+L9K+GXwX+HPieT9pT4cwat4s8D6rfNonwc0vwr8Ff2bvil/wAJ949+IUn7O0up6n8NfCGn+EJfF2vG5tfh14Wg8UyXPhbxHH4x0nxFDgA+sf2a08W/EL9mjSNV8F+DfhfrHgbxaNC1f4Xaf4/+IOk+PNEGj3/ibX5PF/jrxNZ+E/2e/Bd3c+K76WabxrNoPiLV7/xr4o8WahqWkfEjxF8NvGq+K2QA8x/Zx/Z8vvE/w6+H1rpHjqz8EQ+Gfh18GPGFpp/hT4d+FrLRJfFXjL9nLxn4N1vUptOd5J5EvNL+I+uahfCe/m1LUPEzDXL3WJBJJY0Acn4zk8c+IPjh8If2bvhr+0p8VfAfwZ8P/wDBObVfjDouq/CoeANC1zxn4j8FeOfhx4Q8F+JdR1zxP8PfFes2GnXOh6mmoz6Lo9xpdveSiKw1YXOjT6zpF2Acb8HP2hPix8NtG/ZZ+OHxY+NXxh+LWi/tG/8ABN/4zftY/GPwi+h/DC7XQPGXwo8DfssePNPl+BHhDw14B8JW+iXi6T8VvG3hu18L3F9d6f4rmPhe98WT6h4ms5/EM4B4V8Cf2qfj7q3jj48/DXw1+1d8I4rPXP8Agn94r/aE8F+PfiD+1X8OP2h9E+BvxVTxL4c0Twz40+LPj/R/2b/hl4V+FkP9meNrbWvFfgePSPiR8MtLOjWGveGbe98MzXmkaiAcj8T/AB7qvxT+DXhLQPEPxp+OfhOX4Hft8/sLav8AEr4iax8aP2bPjT4B8E6R478TS2cHjDwL+0Jofwvh0a6stEv9WsPEF/ovxA0bTrvwX4g/4Q28v/CVp4E8Q6fot6Ae2/FD45/G2T4x/FrRfB37anwj8B6X8HNM/Z3u/gPr/wAbP2lfBnwz8OfFH4b+I/hH8MvEuq/G/wAVeDdN/Zb8X6J+0X4a+MPjHXPGfgG68ReFfH/hvRtP1bQJNN+G+h+BvFSWni3UQD7E+GKfGT4ufF39uLXda+KXifxv4V+DPx28TfCb4d/sw6nb/CjQPgv400q7/ZJ+B/iYeH/iR4kuPg94s8eT6ZqfiX4lXl7HPb6y9npN5H9tv9F13T59R0ScA+Tfg34A8M+BPEvwivP+EZb4c/E/VvFn/BUfVLzxF+zb8KdE1/T9GTw5+3J4G8P6n4f/ALFf9mH4065r9rFLLoFn4W8e6lpnhS50PQdBTQILe1g1xdDjAPfl0+y+I/wJ/YD1HxFpl38Qp/Hfxu+KfxJutN+Jum+G/Fd3qPivxh+yt+3F8QVgv9HHgTwjojw6Z4h1Yw+HtGHg3TToun22kaS9tJeWUl9KAeaw/DLVLDRPDOveOfgfYeDZbLWf+CUviXQ9Y1n4NfAnwjqtj8XvFH7a+lWnxos9A1j4aeF9P1DTjp+m6f4Etrrw7rV5Dq+jW2pOlxYIuozEgHTftqeJfiFa/tAeCrPwvpY1HRLLXtBsvE2tTeMoLPSLXTLb4PfHD47+HfD0uh6Z+yh8VryfxR8OfHn7OmgfGjT7mSX4heNPCNpd6W3h7QdH0P4mNYsAfQn7JmoePNY8ReKGvvG/iI+GNT8Cw/Gjwj4U1LTvBz6Rs/aD/aD/AGpvE2ma9qM1h4K8N+J7vzfC/hnwhqOnafcalpctm+o67bX+m29xcJZWgBw/xSvvFHwz8HftoaToVz4Y8dWnhz9mz4nfGD49+NPEPh3U/wC2PF3xi134fahb+C/Adnc6T4rj0TQdK8P/AA38A3MN94Nk0+bW/CvgHWPghfz3erXOu6t4p1cA+xfh/wDCvxJ4e+HUXgT4k/E/VPjFqOm3c76B498VeEvBtv4s02xFhHZ6Ub1E0q90LXNf0YSX6w+J7/Rv7Q1K1uY08QxalqK6lq96AfBv7OF/4U8UftRfEbwF4d+IWnanq3h7Udc8a/tNaLrOi/BO4sPiT8RbHwv4d+AnhCy+E1vo3gaHVD8PNH0P4YxeN/iHf6DrtyfBHxBuPCXwh8Ra1c+PI/jj4K0YA1v2wNL0rVviP+0LBrGm/DPUrEfsM3n2mH4g2dteXgtpfEXxthn/AOETjuo5YRqcqMYn8weW9w2mRuSCcgHcaZ8KbXwD8e/2dfD954W8HNrej/FX9oPxloXjexs9OPjfxz4J1P4P6pN4j+Ifjy7GmWbw+Nbr4h/Fa70HxUunTPaa1d3Ufi3TdP0rStYn8N6cAeqePvgta698Q7rxlPpHxh1PXoNY8PatZeLvCKfs0aHO0PhvSvH1p4R0OLXL6z0Lxrqeh+BU+KXjuPw7Z+KJ7ufTtU1zW9Stby5luv7RlAPHUk1TVf2ev+CgvgDxTaX8vhf4SXOu+C/hp4Q8UeHfhPYJ4H8JaH+xh8BPiD4f0XStP+GOk2fhiOz0Txd4i1TxF4bmBudS0Z5bC1s7q0t9M0iytwD5H+N/wz0PQLD4/aPofwr8JaTY6N4v8Y6NqT6b8NfCP2/w14RX/gmZ8c/iJYyWmvxyeL9W8GLF8WdJ8H+IrLxFo3iqw1aLxXHpFnb6tGl7Lp9yAfc37S/w98PJq37O2g3Xg74IaB8IfDfiHxhb6rr/AI08P6fr8Wg6Npn7O3x/vLzw8PBGpaBZeGLHwZbaNYz61e6/qXie6trXUbS3iuvAl5arJqqgHkX7MccWseNPD3/Cu/Cn9j33hey8H+OvHFxq3hXwLe+JvCt3+0Je/EPx18Ufh58SktvFvw+8UaJ4s8Batotx4JjXPi/U/D/iO/tH8R/D+8g0nUWQA9O/aRu/CP7P2vzftI+M9P0v4kahNp3irwd4c+Fyv4Y8KWkOnX2mTeJn1vStO1Ga5PirxHNr3hrw/b/E34g+I5L3Svh78MH174lC38HeBPDXxLuNUAPY/wBmH4Vv8Lvh5b31x8SLb4lSeK9C8G67e6noVlos/hC21uHwhpdt4sm+Gd7pllJrU3gDxR4it9S8V+F/DOp6rrVr4Wh1V/DvhCSx8LQaRoUAB6X8F/irovxy+FPgb4ueHdB8X+GdF8d6HBr2m6B4+8PyeGfGemWs8s8SW/iDQJbm7bTL3MDSeSLmeN4HhnhnkhkR2AOP/aWvLnR/g/4z8SXHjHxp4U8M+HNA1PVvE/8AwrQaXYfETWLOB7UJpXh7xTqtysfhiG8g+22uo3ukrpvi0C5srvwr458LalYnUZgDyLxL8KY7r4yfCHRfBXi74yfA7WdM+GfiWDTNR+HEX7PumeE7n4dfDfxV8MrO1+H/AIr8GXnw/wDFej+ItEsLbxzeaX4BS50xz8Nk1rxbfeBIdJ1HXdX1agDR/aAHjO/+K37P/h7RfCfgnUJtZ+La3kb3PjjXodX1nwB4K+EfxI8Q6/ceMdBtPhpq0ei+ENN8Wajo+im/F/rei/8ACXav8ModTks9Z8QaTZWoBg/sjeHNebwv4k1m48HfDrwqlv8AEP8AbB+HsXjjw7qQ1P4haPonhb9rv4uaP4D8F6I+q/DfTtOtvh/4C0uxv9O8OaLe3d1o2nWemeFYNP8ACtnpq3mlRAHwD8X9R+NHxR+HPwr8S/CX4n6d4w0W0/a9t/D3jG2+w3mk+BP+EZ1n/gpv4Mvvgb8TY9S+Dvj/AOE3hrXPF/ifw/Y+D9d0tF0PVNX8a+EfG2ofFo+M/Df9q+HvF98Afb8nhbxZrf7Jvwx8B+Irj4l6x44u/wBpP4OPrMfjmx17wx8RJpPCf7a/hn4jeNlsvtfxK8faj/Yvg/wZ4W8Sat4a8SeHviV4o065+HPh+z8V+DPFGoaONKmYA8PsvhfpTftMeCvgRJ4w8SanrehfHP4y/tF+JPCmgeOfjl4c8W+Gfhp48+F/xi8LWfje+8dWvxLgtE0aTW/izpHhPQvEXhy3tPHviXxXFqWkLHBo+g/E3VNPAPpH9vDw/JqHwT+IGsW1v4L3aX4Ivvt1zrvwf13xh4ke3/tGNrWLw3490/xLpFj4IkgdruRptQ0zWY7aW4TUpLeGASCUAwf2dfDRf4keOvE9x4Z8Fa1FD+07+0jbWOrp8ErmTx34Su31z4gQS6/L8ZdR8cQWFtpl5bed4VNvoHhO81d49et/DVwF0t9d1mAA4HU/A/hPTfit8WbDwf4F0S68E+HPH3gL4O+INL8ZeGbPW5F+KfjPSNd/aJ+JnxcTxjc/GTw34g15PGOlfHvwZp2tQ+J4/tVvrfhTU20y5t9He3nmADw/4U8Ka3/wTu+MN58O78+HdeXwj8QvDHxG+KOi6V4VttY+M/iT9mW81j4QeLfF2onQda8Qab/ZPxfg+DuoWcyJq9/cWXhrxHfPHcSazNPqcoB86/Fj4AfB/UZ7DwTL4B+HMfhV/wBmv4o/Bb4h/G34gSnxndfDXxp+2Rf+E7r4Oax4h13XvCV3fXUvw9vfh5aeFvD3hKbxPFP8PvBXj/4U2MOsaD4FuNDv7oA/XbXfiRafDbSPA9p8QDHc+IddXTtN1CTwnp0lvoK38T6XYa1q9jBrOqia20e3v9TtprPw/FqGseMJbCd10jTdbOn6xeIAerUAFABQAUAFAHAfCj/kl3w8/wCxO8N/+mm3oA7+gAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKAOH+J3/JMviL/wBiP4t/9R/VKAH/AA0/5Jt8Pv8AsSvCf/phs6AO1oAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoA8n+Lvxc8C/BrSPCuv+O7q1tLTxB478OeC9Iury/0HS7Wy1LXBqD6jrd5q/iLVNI0vTNM8L+FbDxJ4q1+5kv0vX8O6Tq1no9rqOt3Gn6NcgHn9j8eP2ePiD8XrX4eHVfAuv+I/DXhH4c/EPwZ4n1HVfAN9Z3Vz8V9Q+KPh7SNF8CyXWtTeIR4waw+HOrXmsWmn6VCf7B1bRVF9cPdXNmgB3nxd1nwB8Kvh540+OPibwXa65F8EPh5428dwnStB0S88W2uheEPC2r69qmk+DptQNmtlf6hp+lTWdjapqNhZzXEsMFzcw25klAB1elax4Y1PxVqlvZaJq1v4hstG025vta1HwB4r0S1udK1G8voLWws/GGr+HLDSNauYZ9Ikm1Dw/pur3eqaTCdLv9X060tNR0a5nAPmD4pftvfA/wCE198dV8UW11JrH7PNtfw+KbP/AISn4K6R4i1eI/CfwV8YprTwNofi34seHPEutxanoXiTQ7G3QaVaRan4qs7nSrX7SLKC9cA+ttM0DQNNv9W1zTfD2laTrHiRrG48RahaaZptrq2sz2Nu8Fiddv7KPzdVn06CR7a1kubm5FvE8kVrL5LMSAeQ/Cf42+Afixqfi7wv4c0u50yx8JazdWXg2fVLOytNI+JPhLwtc6Vo9/8AEb4aQJK/9qeCdA8dRap4Lh1OOGIi+0bSvFNhE3gvxR8OvEWqAHquvajp2h213ezaJqeqzXdv5M1ronh+71a+1GGAsiWsxtrdodii7lMMeo3MMBSS6MbkC4NAHi/7Pvj3wl8UfBlpqfg74Ha78Mvh1rHg/wAHeJfA13r9j8HdP0bxz4I8Zw6x4h0W/wBC8L/D/wCIPi7WND0xoryXVpdP8daF4Xvvtet3KQ6ZLqieIooACv8AEb44fCnSfFXws8H+I/BnirxZ4h8TePLpPCmlS/CvxLcanot94U0PW9T1P4j6HYeItAsrrVbLwiI7e1vtY8Ex6rrenQ+INP1C0tpNLuJ7qgD2fwh4m0PxJaahFoGmeItKs/Dt/HoBtvEHgTxj4HQtDpWl38R0Kz8WeHtAfV9GhtdSt7aLVtEhutDS/h1LRY73+09M1SyiAPHfBnjz4QeOPF+jeOtI8GSQal4u8T/EH4feF/iRq2k6HBH4p1z4S3PifRJovDt2uq3WqXllrGmWfxJvvA2uR2MVtrPgzQvGGrW11F4d1fw7PqoB2mq+AvgPaeLPFXiHXfB3wtg8Y/ELTPDkPjPVdX0PwkniHxppPg66VvC3/CR3F9bC88QWnhm6EI0eXUGuU02WCwjtZI2tLIIAfPY8D/sRftc6H4I+J3jv4CfCfxrrXxTW1XS7vxv8NfAniXx+39laTrc9hD4i8Q6PbeIrrSbO30nQrqKym1TXotNjMum+HXli1y+07RJADrtZ1n4CfDOMfs+6X8K203w58MfBfhT4g6DpHhPw1pmjeBfD+qXGv+KR8PPDug3thf6dJpHj3VdT8EeIde0q6tbSG00hdP8A7d8ReJNLvNR0FrwA2fh3b/s5/HHwL4dstM+FulXGiabceEfjFD4P+IHwql03UPCfjjxPJrOvWPiDVrHxLobW9t8VLbUzrs3i29t7288W2GtXeoz+Ir8yayl3eAHPL+01+z/4X0/42/FGLTJtG8NeE7XxVqvxH8f6f4MuINT8U+LfhFr3xB+GfxA8OXum2mnR+Kte8RfDn/hVcekQajqVlJpWp6Pe+H7HwjrF7ZWtzHCAe/N8MPhw3xJg+MQ8EeGo/ijB4Vu/Ag+IkGj2Vv4yn8D3mp2OsT+D7/xBbwx6jqfhr+1tNstXt9C1C4uNMtNWgj1OztYb7dcEA6+9sLDU7c2epWVpqFqZrW4Nre20N1bm4srqG9spzBOkkZms7y3gu7WUqZILqKG4hdZ40koA+dfj1+1x8B/2bInX4o+NNL0vVBY6bqEPh0a14XsfEF5b6zrcPhzQjY2HiLxFoK3f9t65KNLsJIZ2gW4ivJb2e2s7S+u4wDzr4f6j+zH+1tJ448dah+zt8MfF3ijwZeWNhdS+JT+yT8W/GOpMdAlfSFGufDn4nfFWw0KW5szc6bpNp4v8RaHcNZsZESLSXuJlAMGyb4D/AAy+LHw7i0L9gO48JfFzxFaeMZ/h9q3hT4c/slWni+30nw9o6Q+M9Rg8T+HPix9p8KaHaWHia10TU9W1PU9M0i6vfEuleFBdz6v4h0zSbsA9i0nwv8GrDwf4g8aeNv2frL4SaZ/wn1x4017w34w8OfDfVY73xyuv6fDYfGS+0T4Y+JviJ4UufFOqXcenXdl48vLgfEDTtMt7Ua9PpNtY/ZogCvcX/wCznrK/tGeD/FHw58OWXhyb4vfD74XfGT/hJfB/hq68KfFX4n/FDwZ8Eh4T+36daPqs/ii41Ky+JXw08Hz6z4p0mzmXU4oLTzJdH0mLVgAZfxnsf2TPAWo+Gbj4i/B34beJvGGtaPo3hzwtolt8LPBXiTxxd+APCfifw14bupNKtb3TFuj4E+E7fEex1jWLS2uPs3h7RtTvG0PTLnVr620q6ALn7P3xr/Zz8YyWXw2+Clh4e8NaP4b0PVIvhXovh/w/ougeGfEvwm8M2Hwze/8AGHww0zQkW0sPhtZ6p8QfDWh6Wk9pox1X/QPE/h7R73wFqnhDxZqAB22h/Gb4b6hfeL7HTbZLD/hXGo+MPDUF3f3Hg3QbPVvD3gK18KxfEvxP4JfVPElhNd/D34c+J9Ssvh3451x4bDTtF+IWjajoFzC0NjZ6jKAR+CPGPwpT4GR/GOx8Fr8Nfh3deC/EHxEv9N17whpXhXUtO8JXdteeJdb1XXfD9l5sdi2tWNs3iHULW4c3lyk0U2sRJqRnhUA5Pwh8XvhudIg8D23wl1jwTfz+MvBXgQ/CS60f4b6dqb654z+H3w9+KXiW4tvDml+LZtNvtI+GmgeP1vfidfW5ea0u/D/i99AsvEEcGiXeogHfeLvE/wAJNEm+F2q+J9J0S40K4k1S78CfEJ9C0rU/BPgiTTvBuoeIotTm8WpHPZ+ANN1bwrpGrNo/iyaWw8L3X2OHw3Jr8Ouax4S0fUQDibD9pn9mfxb8StQ+Cdj8Q/hnr+r+JvDWk6u6QeMfh5qmheM5fEt5rvhdPB8FvF4iuLzxH4mksfDcpvND/su53+HnsVaWSE/ZgAZPjxv2dv2Z9B+EWj2HwY0RoLC81TwF8N/CHw88CeGJr3wX4L1m5sfFfxZ8VWWlsdOTRPAfhnTPDMXjz4m6hYl73VrvTNF06ysNe+Ies+ENBvwD3XSvB/w3fRfh9NoGgeFh4e8DyReI/hq2h2mmxaD4dN34U1/wzBq/hUaaqafawXPhTxXrulwXNiPs0ukaverEzRT7yAeBfEH4g/s7+KfFXh9viD8PNI8ZeLvhP8avB+i/C+78ReHvBmqXFl4t8SeGdF1p/in8Mtf13UlsbLRfBnhnWdZ1HxX4giv9N1rSr3wd4m03TNNv/Elr4Mg1IA9o/wCEQ+C3xVi8N/ERPDXw2+IcNzpOo3PhHx3DpPhbxQtz4f8AF2kLpusS+HPFMUF95+ieMNCcaZrP9m37ab4i0CRtM1IXmlSvbsAdrB4d0K18Rar4tt9Ls4vEet6NoHh3VtaSIDUNQ0Lwxf8AifUvDul3U+d0lno994v8S3djEeIZ9Y1JwSZ2oA4/xJ8HPhP4z8L2/gvxj8PPCnirwxbeItK8XpoviTRbLW7ObxbpGrRa1ZeKL0anFdSajr51OM3t/rN+9xqOqzTX39r3N2l7qCSgHXa/4b0PxVp76R4i0+PVtJnEqXukXctw2k6pbTQTW9xYa3pizLZa7pdzDNIlzpOrwXemXAZTPZyOiMADiPG3wN+CXxL8M6J4M+Inwg+Gvjfwp4aigh8MeG/FfgTwvruieGUtrJNPtP8AhGtN1PSrq28PPZ2UcdpZS6RHaTWlvHBFayRpFEAAdTe+BfA+pJqsWpeDvDGoRa54WXwLrUN9oGk3cGreB1GpKPB2pw3FnJHfeGNuq6kp0C5WTSWS+vkazK3E+4ArxfDr4eQ+Pp/irD4E8IRfEq58Nt4NufiLH4Z0VPHc/g99QsdUk8Ky+LFsRrj+HpdR0zTtQl0Rr86ZLfWGm3ctq1xZ2cqAFa7+F3ww1C7ur+/+HHgW9vr64nu729u/B/h25u7y7uJXmubq6uZtNkmuLi4md5p55XeWWV3kkdnZmYArQfCP4WWnhvx74Psvh/4UsPDHxOOpH4heH9O0Ow0/SPFzat4T0rwRqj65Y2UEEF7JqHhTRdL8PXUjpvl0qys7V3ZIkoApa98EPgt4q0vxXonif4S/DnxFo/jjxNY+NPGmk654J8N6rpfizxhp9jpWmWPifxJYX+mXFrreuW2n6LpWnx6pqMU959hsrSzaY28aoADa8WfDX4d+Pb7w3qfjbwP4X8Val4Qu9QvvCmo6/oWm6pqHh261XTptJ1iTRL28tprjTV1rS5ptK1qG1ljg1bSpZdN1SO5sXeAgHLa/+z38AfFXxA0v4r+Jvgl8Kte+JmjX+k6ppfxF1b4e+Er/AMdWeoaFbT2mhXcXiu50eTWjJocMz/2NvvmXTJlt7rTxDdW9rMgB3lh4Q8LaXr+qeKrHQdMi8Tazbx2Wq+JmtY5/EV/p0FzPd2mk3Ot3Cy6lJo9hcXE0um6Mbr+ytNMki6fZwIxBAOO8HfAr4IfDrXfFnif4f/B74Z+CPEHjmFLfxrrXhHwH4W8O6l4tiS5vrsDxLd6PpVlLrbSXOoXc88movPLcSTFrl5SkZAB6ZZ2dpp9pa6fp9rb2NjY28FnZWVnBFbWlpaW0Sw21ra20KpDb29vCixQQRIsUUSrHGoRQCAU9b0PRPEukaj4f8SaNpev6Hq1tJZaromt6dZ6ppGp2UoIltNR02+huLS9tpRxJb3MMkTgkOjc5AM+Hwb4OttXsfEFt4T8Nwa5pltqFlpmtw6DpUWr6fZaobM6paWOpJaC7s7bUzp9idQt7eZIrw2lmbpJDbwEAFuHw7oNvr174oi0mxHiLULG20q7157eOTWJNHs5HmtNFTUZVe6g0a3upJ7+HR4JY9MTU7rUdUW0GpX2oXcoBXsPCPhXS9E1Pw3YeHtIt9A1m+8V6lq+iLYWzaVqd/wCNdc1nxF4xudQsZI3t7t/E+t69rGq62J43S/vdRv5rlZGnl3AHC+NvgF8DviRJpk/jv4S+AfE93o2m2mjaPqGqeFdHl1XS9Esp5Lmz0TTtVW0XULLRba5ka6h0e2uY9NS5K3AtfPVZQAW/CHwT+Efw90H/AIRrwD8PfDXgrSP7c1DxP9n8J6dH4enPijVLWWw1LxMdQ0g2eoHxDfadLLpVzrpujq0uiyzaK96dKkks2AM/Xf2evgH4o0Oz8N+I/gv8Mdb0TT9cn8T6fp2p+BfDN5BYeKbpYUu/FFiZ9MeSz8SXq28K3viC3dNYu1RFur6QCgD0DX/CfhfxX4Z1PwZ4m8PaPr3hTWdNk0bVvDOq6daXuhalo8sXkS6Xe6XcRSWlzp8sP7mSzlha3eH900Zj+WgC7pWiaLoMV5Bomk6dpEOoapqet38Wm2VtZR3utaxezahq+rXa28UYudR1S9nmvL+9m33N1cyPNcSvISxAM+88IeFb+9tNRu/D+lTX1l4jh8XwXRsoFmPiq38Oy+FrbxBcMiL9s1W18PuNHtb2886e3sIbGGCRBZWBjAHN4R8Kt4Zv/Bg8OaNF4V1Ox1fTNQ8N22m2drol3p+ufbDrVpLpttDFbGHVmvryTUFEY+1S3NxLOXlkkcgFP/hAfAp8K614Hl8HeGrnwh4jsNT0vxL4XvND0280DxJp2s2D6Zrdn4k0q7tp7TX4Nc093sdaTV4roaraSSwakbiOSRSAXNF8I+FPDegaB4V8PeGtD0bw54WttPs/DOgaZpVjZ6PoFrpcAt9Mg0bT4IEttNj0+BRFZraRx+RH8sRUZyAdDQAUAFABQAUAcB8KP+SXfDz/ALE7w3/6abegDv6ACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoA4f4nf8ky+Iv/AGI/i3/1H9UoAf8ADT/km3w+/wCxK8J/+mGzoA7WgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgD4q/bo0/wAa638KNJ8I+APC+veJdd+IWs+IPh/Mvh7wXe+Jb3TNO1T4afEHX7W5udYh0u+034f6bqPirwt4U0C/8ZeKbnTvCkEGrHRb/U7XVNT0W+iAPjz4Yat4w1TWtJ/aB+NHjnx38OvA/jyw+Dvwp1nxi2j6DBdeDvjpoPj/AOOXjzw/eahqXj3RvGek6P8ACaz8QfHa4+BlreXrX9pY/GKz0PwBbW+meGrOIAA+vPjfrmj+IfjVpmhXGr+FvEvgLwv8NNf+Enxs+Hev+O/F+i+HL3xh+1F8Rvgh4Z+B+i+KdD8LeFvFuna3eeILbwt410A2Pimytv7I0Xxvpc7uuheLZJpQDpfgb41sLzxT8V/7Z8UW9lc+Pb3UfHHgy0PjT4ha9Ho/hH4b6V4W+EHxIsEt/iV4R8NWeg678OfiXoeo/wDCe6XZ6dPNpF14n8Kr4wWN7rS7dgD4P8eeNNNj1XW7bx/441LwL8Kf2qfil8RbbxFrvxT8R6R8Mfh/8SvgtYfs7ad8NdC8a6l8S1+H+p+BtI1b4lXfw9trTw94etbXR/EGo/C+fwRfXHha3v8AVJPG2pgH3ZpfiP4efEX9mPXPEfjH9ofwv4t8C7PE158SviF4X+K/g/xH4FstNjudQl8SeA3+J3wu8L/B9pvDPhyK6XR47vTrHwr4zntLWxsvE17fG51mzvgD4rsfEf7O3x+8PfDLQdd+IPgr4c+M9R8X6l4e/Z+s4vjv8ZfFN/4Fkm1N7H4eHWdL+Gn7UHgPWvgv8U/iB4H0wW3h7w0Nd0y+8O3WuH4Sw+Lb/wAVazq/w3vgD7D/AGqfif8ADn4ReHvCPh/xN4h+BX/CceM11Dwv8B/DXx+nsxp2q+JNN022bW9d8R+M/FXiyGe28IeFbJtP13x9ripN4iurNLPw9oUfiP4meIfA/hXUQDkP2XrD4HeDdX+FvwZ+FXxL+HGs+Ifhb8FNF0LVL7wF4K8EO/xd8FeD9F8LeELjVb/4g6Pda889x4Q8SahoWp+JPDunarpms6XqniPQNS8S6EfD/ibwfqV2AePfHHwx46Pxv+OXxs+HsWrWd78P/wBmP4sxfEPXdE/af+Ny+ELH4h2en+E9Q+CWjWXhS30UeDtK8SeAvDnh74ieLvEPwx0fTLfRDc/EPw947+Itvc6z4m8Ga/OAfUvwL+F9z4M/Z6l+Hmu3cfgXwG2nprumax4W+KHiW88QWnhjxIE8W+OrC+8Sa14Z8ON8PbGTUL3X9O0mXwFNpn/CG+C7+zt/Aeo+FNf0PSfEoAPmHxN9n+IVh8JPgprXxA1Hwv4W+MX7RmlRfAn4SeHLnwt8LfiR4W/Zq+CXwz1TV9O8T+GD4S0Tw54u8O6Tqvir4Qah8RfC3i7SZ9M1Xwz4M8a+BfCNhfaJ40g0qwQA+2fi1Hovgr4MW9hrHxI1bSdU8P6dpWneD/E3iDxn4p0vX/GvjrSNGuY/D2i67J4DbT/E/jzU/HVxZSW+teE/COmXXifxNLdXp8GaIniuPQJ4QD5M/Y1+K3wu0PVdZ8L+LfEet/s/+NfGd34c8LfCX9jr42+PvE+neN/BXgXwra6tDpUvhnw78SdfuZPHnibx9rN74n8T674o+GNxq/htPDB8BeALmVvEPgvXNRuwDUvNLt/Af7QP7T0+lX8x1X4ja1+y1da9qmt654c0+xudV1qy+Lvh2yW7uPEvgD4gaRpejaJouhaBo2kafpnhqO9nXSNMkvdVn1q78Q6zfAHqvwX8baV4Tuv2p9Q8UHT7XTPhlreg674r8SaBL4S8Tx39hb/Bvwz4m1C/t7X4bfAz4Z6zqs+laLHBarZ6laeMfFF1NbnTtFvoNLj0bw9EAfn/AKl4z+F9z4Y+PX7NPxK+N3g34SQfELWP2n9M8Y3Pjb4y6t4U+JfgfxP+0d4k0n4oeENLtv2d0+OltF4ksbmy/aG8R6MW0zOnG++HjXl3bapF4uW2sgD9OfEnx38SWfhn4N+IvCHwS8d+I7j4lfGbQvhX4n8K67PpXgvxf8MdEl1jxPovjP4h6zo+oy6gvifR/Ak/hue/urfwjdala6/4Znj8aeGtcvPBoXX3APo2gD87f2wZtctPib+y3f6vf2mg/Di5/aDfTdS0zxD4w17S7bxV4s0X9nn48/EHwj4lW50qLxdpXhnRvAuvfD/Q9S8PWd34XvNT13x3KuvT2nhu78M+HfEOrAHpv7MHjO5+Iuv/ALRmu6lqMHiyf4Y/F7/hW3ge+0/xHeeI1s/COr/s9/s1fErWNDstZ1XRPCEV7NqPi/xBf3lzdXWlWzxyLY6VNqMtjptvKADzrXvhRE37ZnwR+IHxS1i31jx/45+Hn7QHhzR4tI1HUdI0v4d+E9NtPhfeWPgT4ZajbzaVrv8AaCm613XfFfxBi/s3xh4x1Sa4vpLXQfBei+CPAehgHpPxJvfH/wAPv2f72z+M3iXR/GM7/Gf4ReBk8c6W8HhO+vPht48/aN+G/gvSvF3jC3h0e28PaP4x8L+HfEzXni1NGsY/A2taho0+q2mm6HoWrz+GdPAPmbxB4o8EW8n7V2o33xHh8RpL+3B+yV4w8L+HoPFXgHTv+Ezm8L+EP2BptKvNOu7Xw1eXuoaZB4q8OS2GpSaLG8c0uh6noqzQX8OqSgA9E/by0/wtpfiv9lPx54h+IOufD2Sb4neIvhXDrun618G9G02wgv8Aws37SWm6veXHxi07+wJNU07x5+yX4Ag0q3TX9GS6sL/xBp2oW+t211/YzgHn37BfgH4e6X8U/F0HgX4k698QtC+BPwp8KfDnwlql7rf7P+upd2XxLh8Iw62PE+u/BnQ7mTxHr3hvw7+zh8KfCnhq+8SeN9T1LSfB1hD4fOj2ulW2gFADxXUrj4P/AA0/Z6+J/ju6174b6ZqeleD/ABVr/hz4TfGPxD8fPHHg74ufDj4X2niTxJ8K/hh4M8RfHu++DHj/AOI2gare3El/qVnp9t8QvhxffEDxR4q1jUtI1u3v/h14e0YA+ifF2gfC3Xv2IP21PCei/HX4dfFjQn8G/Fnxf4k0/wCEviEp4F8BaZN8M31Gz+HOn+Hp/il8U5PBHgvV/wDhGrjV9W8Jpr1p4Z1KDXfFlvovh7SfD1+2mxgHzj8cDLrsXx/mm0jxHrHizX/Gnx7vdA0tfgR4t0+20TUVvfGf7ImpfEPSvE6+DJovHXhT4WfAy9T4teJorKTX9O1jxDayJZo/ivXvCVgoB93/ABB8RfDG2+If7MHiXwN4y8R3Og+GgvjHW7f4ZeOviPqPwstP2drv4SfFzwx4T8Z+K/CHgbXrj4ear4Mu/HWv+D/7A8R65o1881ppdz4rsb1vB3gLxTr2jgHknwK+O/wDk/an1LwTo37Rngzx01t8EfhZ8MvAniTxT8cvgz4r8YfFfW18c/GLxLbaX4dm8MeMLvWvHGuaF4ca0TV7jU9Ih8aXdqlj4g8TLqV9qcviK7APb7I+HNH/AGnPifoF2qX3iiz+Dnwb8WXPj7xf8VNe0LW77TvGvjz4+aIPCOhaLpVhFoeheHNCHww0++ubLw1aaVYahqmoR6xrmn3viWa/8QXIAz9lj4f+EPDvw28Z+I/hQw8JTa14p+K3hG00lviZ8U/iv8JNG1P4bfFv4m+BrbxVonhjxX46itLK+8TTaLFrvxFbw1c+G7vxR4hN/earqI1qW91uQA+bdT034m6paeMfiLb+JvBz+F/in+37+z54j8D6q3w71+GPxLpPhfRv2dvg+PGGmwv8U5H/AOEU1XxH8MNcuPDU++eDxj4VXSfHfh3XD4Y8R6FcAA+9/GHjPxh8MPBFhqmqaDffFTxBJqmqxX6eCPD19okP2CGw8U+J4ktNGN/4vvIr2XTdGtvBfhSwlv7k+KviJqXhTRLvU9Hg1yfVbMA9hoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKAOE+FiBPhh8OwCTnwT4Ufn1l0O0kI+gJIHfGMkkEkA7ugAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKAOH+J3/JMviL/2I/i3/wBR/VKAH/DT/km3w+/7Erwn/wCmGzoA7WgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKAOT1zV9VGq2Hhvw//Z8WrX1jfapLqGq29zeadpmm2NxZWrSyafaXun3GoXV5c3sMVpaDULGPyo7+6kvc2yW0wBnvpfxLkjeGXxb4EljkRo5Uk+G2vskqMrK6yIfivsZXViHQrtIJUjBbIAR6X8Soo0ii8WeA4440WOOOP4beIEjjjRQqIiL8VwqIqgKqqAqrgAYHIALpfxKQyMnizwGjSuJJWX4beIFMsgjSIPIR8V8u4jjjjDMSwjRE3bVFACSaV8SZVZJfFXgKVXjkhdZPhrr7q8UgAkiZW+K5DRyAASIcqwwGDY5AJP7P+J3/AEN/gb/w3HiL/wCexQBUl0Dx/NZ3WnzeIvh3LY3qXcd5ZS/DDW3s7uO+aZr9Lq2f4qtDcJfNPO12sqMtw00xnEjSSFgAm0Dx/cW8VnceIvh3PawTWNxBazfC/W5LeG4026t73TZ4oH+KrRxzadeWttd2MqKJLS6gt7i3dJ4o5KALB0v4lGRZT4s8BmREeNJD8NvEHmLHI0bSIrn4rllSRoomdQdrNHGWDMimgAOl/EoyLKfFngMyIjxpIfht4g8xY5GjaRFc/FcsqSNFEzqDtZo4ywZkU0AV00Dx/HaPp8fiL4dpYyJPHJZJ8MNbW0eO5aRrlHtl+KohZLhpZGnVkKytJIZA7M7MASXGjfEW7jWK78T/AA/uYkntblI7j4Z69NGtzZXUN5ZXCpJ8VnVZ7O7ghu7WYDzILqKG4hdZo0koAG0b4ivcxXreJ/h+13BBcWsF23wz143MNtdSWst1bxTn4rGWOC6lsrOW4hRxHNJbWryq7wRPQBF/wj3j0aidXHiD4df2o1munNqf/Crtb/tE6cs73K2Bvf8Ahan2g2a3DvcLamUwCdnmEfms0hAJ5NH+I8z28k3ijwDLJaytPaySfDTXne2na3ntWnt2b4rloZWtrm4t2kjIc2888JYxyShgAXSPiOk0twninwCk86RRzzr8NNfWaaOAymBJZR8Vt8iQmWUxK7MsZkl2AF3ZgCQab8TFLFfFvgUFzucj4b+IQWYKqBmI+LGWO1FXJydqquSFBIAv9n/E7/ob/A3/AIbjxF/89igA/s/4nf8AQ3+Bv/DceIv/AJ7FAB/Z/wATv+hv8Df+G48Rf/PYoArT6F8QbqayubnxH8PLi406eS606ef4Y65LNYXUtpc2MtzZSyfFVntZ5bO7urOSaBkke0uLm2d2hllVgB0WjfEW3kupYPE/w/hlvZ1ub2SL4Z69HJd3KWttZpcXTp8Vg1xOtpZ2tqs0peRbW3trcP5MMS0ATf2b8TNwb/hLfAu4AqG/4Vv4h3BWKlgD/wALYJAYqpIzgkLkkjdQAv8AZ/xO/wChv8Df+G48Rf8Az2KAEOm/ExhhvFvgVhlWAPw38QkblYMrYPxYPKsoZT1DAEHcNxAI5NH+I8z28k3ijwDLJaytPaySfDTXne2na3ntWnt2b4rloZWtrm4t2kjIc2888JYxyShgCX+z/id/0N/gb/w3HiL/AOexQAf2f8Tv+hv8Df8AhuPEX/z2KAKt9oPxB1OyvNN1LxH8PNQ0/ULW4sb+wvvhhrl1ZX1ldQyQXVneWs/xVkgubW6hkkhuLeZHhmheSKVHRnBAJV0f4jrPLdL4o8ArczRQW81wvw014TywWz3MltBLMPiv5kkVvJd3UkETsUie4uXjAaWVmAJF034mIoRPFvgVVUBVVfhv4hCqqghQFHxYwAB0A4AJAJ5JAF/s/wCJ3/Q3+Bv/AA3HiL/57FADBpfxKEjSjxZ4DEjpHG8g+G3iASPHE0rRIz/8LX3MkbSytGpJVGklKgM7lgCO50b4i3lvNaXnif4f3VrcRvDcW1z8M9ent54XBV4poZfis8csbqSHjdWVgSGBBJIA+TSviTKFEvirwFKEkjlQSfDXX3CSxMGilUN8VztkjYBo3Hzo2CrBhuIBJ/Z/xO/6G/wN/wCG48Rf/PYoAP7P+J3/AEN/gb/w3HiL/wCexQAf2f8AE7/ob/A3/huPEX/z2KAD+z/id/0N/gb/AMNx4i/+exQAf2f8Tv8Aob/A3/huPEX/AM9igA/s/wCJ3/Q3+Bv/AA3HiL/57FAB/Z/xO/6G/wADf+G48Rf/AD2KAD+z/id/0N/gb/w3HiL/AOexQAf2f8Tv+hv8Df8AhuPEX/z2KAD+z/id/wBDf4G/8Nx4i/8AnsUAH9n/ABO/6G/wN/4bjxF/89igA/s/4nf9Df4G/wDDceIv/nsUAH9n/E7/AKG/wN/4bjxF/wDPYoAP7P8Aid/0N/gb/wANx4i/+exQAf2f8Tv+hv8AA3/huPEX/wA9igA/s/4nf9Df4G/8Nx4i/wDnsUAH9n/E7/ob/A3/AIbjxF/89igA/s/4nf8AQ3+Bv/DceIv/AJ7FAB/Z/wATv+hv8Df+G48Rf/PYoAP7P+J3/Q3+Bv8Aw3HiL/57FAB/Z/xO/wChv8Df+G48Rf8Az2KAD+z/AInf9Df4G/8ADceIv/nsUAH9n/E7/ob/AAN/4bjxF/8APYoAP7P+J3/Q3+Bv/DceIv8A57FAB/Z/xO/6G/wN/wCG48Rf/PYoAP7P+J3/AEN/gb/w3HiL/wCexQAf2f8AE7/ob/A3/huPEX/z2KAD+z/id/0N/gb/AMNx4i/+exQAf2f8Tv8Aob/A3/huPEX/AM9igA/s/wCJ3/Q3+Bv/AA3HiL/57FAG7otv4ng+1f8ACR6xoWqbvJ+x/wBi+HNR0HyNvnfaPtX27xZ4l+1+bmHyfK+yeRsm8z7R5qeWAblABQBw3wu/5Jj8Ov8AsRvB/wD6j9nQB3NABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAcP8AE7/kmXxF/wCxH8W/+o/qlAD/AIaf8k2+H3/YleE//TDZ0AdrQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFAHDP8A8lOtf+xGv/8A1ItPoAo/FP4w/CX4G+F18a/GX4k+Cvhh4Vk1Sy0ODxD468S6R4a0q71zUEuZLDRbG71a8tI77Vr2Kzu57XTLQzX09va3lxFbtBbXMgAPIvF37YnwG8MeEPD/AMStN8f+BvHPww8QeBvjN4/sfiL4K+K/wd1Hw7faN8F7BLvxfH4ba9+Iem3PjeWG5iv9FvLnwbFrOmeF9cs2svHuoeHobi1u3AO0/Z1/aN+DX7Vnwl8LfGf4HeOfDvjbwj4k0vQ7y4OheJPC+v6h4S1nV/DOg+KZfA/jdPC2u+ILDw5460DTfEWlf8JL4Xn1GS+0me6gWXfBNa3MoBy99+2n+xvpmvaz4Y1D9qv9ny01/wAPW+u3GvaPP8Zfh2l/o6+GtSuNJ8SQalAfEm+yvtA1K1nsNZ02cJqOnXcUsF7axSKwoA6q4/aX/ZxtPhNo/wAd7v47/Ce2+DviAtHoHxSuPiF4Uh8B63dJNqds+m6P4lk1ZdM1PV1u9H1WwbRbK5m1ddS07U9MNl/aFnd26gFbWf2pf2X/AA34U8K+OvEn7R3wN8O+DfG+maxrXgzxb4g+Lnw/0Xw34r0fQNQ0rS/EGqeHNa1TxHaWGtWPh/U9a0fTNcutPuJ4dJ1PU9L0/U3t728tIZACPV/2qf2X/D/xL0z4Na9+0T8F9F+KeszeGbTSPh3q3xQ8Fad4y1TUPGLWS+DdJ07QLzXIdQvdZ8YLqFjL4W0S3gk1fX7a6trvRrK7tZUmIBraf+0Z+z5q3xXu/gXpXxv+FmpfGCwN2l78LbDx94Wu/Htpc2NhLql/YXPhe31WTVYdUsNKgk1i/wBJktRqdnoo/tm6tI9LK3bAHstABQB4N8Nf2p/2YPjP4sv/AAJ8H/2ifgt8UfGGmaHD4mvfDPw8+KPgjxhrcXhuZ7KNdeWw8Pa7qM82kxvqOmx3OowJJaWkmpaQl5NE+o6cJQDZ+G/7QvwC+MmteJfDfwk+NXwv+JWv+D2QeKdD8DePfC/ifV9Bjed7WK61TTtG1a9urWxmuoprKDUZIhYTX8F5Yw3L3lrdwqAeUftfftffD79kHwj4E1bxbf8AghPEvxT8eWvw5+HelfEH4q+D/hD4PutdOha94m1XWPF/j/xbJcQeFvCHh7QvDt9caxrdjofiG/TU7nw9oVnoV1qGsWQIBgfs7/tm+Hf2jvjP8ZfhX4Vsvh5Ha/Ba6vfDPie70345eDPFPxBfx5od3omneKID8KdCsZtW0v4eWOr6hqWgaJ8R9Y1ezk17XtC1exPhDTozZXMwB9ozzwWkE91dTxW1tbRST3NzPIkMEEEKNJNPPNIyxxRRRozySSMERFZnYKrMQD5Vb9vL9hxbPXNQX9sD9m+ex8OWOm6nrN7a/Gz4cXdraadqwJ0y9We18SzR3VtfbSsE1m0yNJ+63eb8hAPpvQtd0PxRoejeJvDGs6V4i8O+IdK07XfD/iDQtRs9W0PXND1azhv9J1nRtWsJ7ix1TStUsZ4L3TtRsriazvLOaG6tZ5YJElYA+KvgJ+3BofxM8BeI/iZ8aPCGj/sxeCdF8N/s9a9Z+Kvib8UvCkXhvU7n46fCzwn4/stDk17ULbw5pmk6n4f1DxXp/g8Wd7c/2hrOqyWs0On2cl3bWDAHp2g/tq/sc+KtR8F6R4a/am+Amuar8Qtefwr4G0rS/i34EvNT8UeJ0vDp6+HtGsIdee6vNZnv9mn2emJEby91Ga10+yhmvbm2hcA7jWf2iP2fvDnxM0r4Ma/8bfhZo3xX1qazttL+GmpeP/Ctn47vLrUYrWbSrSLwvPqyauLzWYby3l0S0ktFudYjk36TFcqkrAApj9pv9mc634q8Mj9oj4IHxD4H07xbrHjbw+Pi38Pv7b8H6R4G1i40HxzqvirSv+Ej+3eHdO8Fa3a3Gi+Lb7VoLW18PaxBcaXrU1rfRSw0AUvCX7Vn7Lnj3wf4x+IHgz9ov4K+I/Bfw8tbS++IfirS/ij4JuNC8AWV8t21hdePNRXXfI8GQX8djdzWUviR9PS6gt557ZpIY3loA7f4X/F74U/G7ww3jP4O/Ebwb8TPC0eo3Ojz6/4I8R6T4i0u11i0htLi60i9udLu7pLLVLe2vbK7m067MV7HZ3lhdvALa6tZpACxF8VfhZPcW1pB8S/AU11eePdR+FVnbReMvDclxdfFPStL1TWtV+GltCmqNJP490zSNG1bV9R8GxK3iSz0vTdU1C60xLOyvLhQDxr4qftf/BD4ReGPGPjvX/GHhjVfBHgX4S/G/wCLfiPxD4f+IfwuuphZfA3xXofgrxt4W0fQb7xzp2sax4htfF2pz+C7y4gtU8MeHPH1raeAPGfiPRfGGs+HtHugDxi6/wCCmv7JVtf/AAI1R/i98K7X4WfGj4f/ABb8YTfFnU/i78P7fw74C8S/DF/gIZvhb4new1nVdK/4T/UofjbYte+HofEC6rotxpE9u1hfx30N1EAfd/hzxJ4c8ZeHtE8W+D/EGi+KfC/iTS7DXPDnibw5qthrfh7X9D1O1ivNL1nRNZ0y5utP1bS9StJYruw1GxuZ7O7tZIri2nkhdZGAPH/AP7VH7L/xX8Zy/Dv4W/tE/BX4j+N4NNutYl8KeA/il4I8W66mm2UsEV/dHT/D+u6jOV05rm0bUUCGaxiu9PnvY4YLyzlkANjwB+0R+z/8WPFXibwN8Lvjb8LfiH4v8HC6Pinwx4K8f+FfEuu6EllfQaZqEupaZo2rXt1bw6bqlxDpGpztH5Ona040a/kg1UNZ0AedftdftWeCf2RfhtofjbxXN4VfU/GPjjw58OPBGmeNPiR4V+FvhW+8UeIXu5Fu/FHj7xU8tl4V8K6Bpmn6hrnibXYNL1u+0/S7WV7TQb+5eK3IB8w+FP8Agpn4a+IHjP4l+D/h34U+GPj+9+FHjD4C/DDxdp3gv9pr4eeJPGM3xJ+LPxM/Z4+H3iR/D3gzRtGvdQv/AIVfDK5+OMkGo/FnV7jRLPWvGHg/XfBUXhvTnuI9dhAPuL9nz4pav8bvgt8P/itrvgS9+G2qeNNIl1W68D6jrFvrt5oG3Ur+zggl1m1sdPttSW6t7SHUIbq2tI7eSC5j8lpYwJ3APDof27PgX4k/ae+FH7Mnws8aeAPi14g8dWHxnufGGreA/iV4a16T4XXvwo0zwveHS/Eei6KNWkmuvEd1rl9pUYlv9OOk6loWs2VzHc6hb3llCAeq6B+1h+yx4qk8ax+Gv2kPghrv/Cu7A6r48l0v4reBby28JaStza2UmreILuDX5LbTNLt7+7ttNutSupksbXVZo9KuriLUibUgHsA8V+FD4rbwKPE2gHxougJ4rbwcNa03/hK18KPqT6OniZvD32s6qNAfVY30tNaNp/Zrakj2Auzdq0dAE3iPXdO8LeHdf8T6vdW1lpXh3RtU13U728knjs7TTtJsLq/vbq7lt7a8uI7a3t7WSaeSC0uZ0iWRoraaRVjYA+J779rrxbpHjrX7DXvhrqmnfDXTfGtz4G034h6D4R8e+MIdR1zXNC/Y1/4VRYPZS6b4RkguPiV4t/aJ8W+G9JlCvbyyeCFlsTdWra9qNqAaPxP/AGpvH3wo/Zg+GXxW8RfC1I/ir4z+FjeLvFngG/1nQfC0Hw58Q2PwU1fxz4jfV7Lxp4q8OSatp3hjxvbaJ4G1HwnY+Io/Gc7a5HNpjXU9hfGgDN179tfTZLXwj4e8K6Abf4ga78QPBnhXVLbWtT+GPivQdE0g/tKfskfB3xtcas3wm+NvjeLSNc1zw3+07oXjD4caNNrt3d21rC9346tLF4LLQdUALf7QX7XfiD4M/Hr4NfCHRfh4vinTvGt/LJ428Qxz6lcweFdCvtJ1iLw1Nqb6LbaheeFJ9W1zS9Su7fUtR0TWNAPhnwz4v1LxHfeF9CtLvxjaAEf7MX7Y1z8e/iP8SfAuu+GdD8HDRfFXi6D4eC98QQ2PiDxz4H0LSfh5c6d4p8L6Fdz3UnjvQ9QbxJqWsan4q0SbTG8O6HffDka74NtYPFei69cgGxov7TXibUrn4bW9zo1lG3xF/ag/aS/Z+jNp4L8d3UOhaX8F9Q/amGl+JftcFxNbeIb/AFyy+ANjb3+nWslhBFdeIdQ1WzmNnpB06UAj8QftN+JPD37G3x5/aDvIvC0PjP4bp+1/Y+DtNutF1+00LxBrvwM+Inxq8H+A7S/8MXPiGHxFLceILX4daXe+JtFt9csb8Tz619lu9Itog9uAcfdftw6hB8Sb9rP4LfEvWPgynw9+HmvaV4ls9M+GOm+JNQ1nx78Yte+GWk67Npfir45eG/EGg+GXu7C0s7rwv4j8D6d8R9J1N75vEmiaQ9jPpcgB9W+JfiWNF+Jvg/wHpk/g/W59Z0vxBd694Zj8Z6JY/E/TRbJp0uga3ovgy/vIJvEHhu4K6paeIbtZbSXRnfSNSRrrTv7WaAA+ff2X/wBpf4k/GvU/CFh4u+HkemWviP8AZU/Za+PF5rWhRaLaaZo/ib41j45z69Y3UV78TNd1aXw0I/h3oNh4QgsNLvtct7+XXLvxVdJYXWnfZQDzvV/21vHlx8QPiN8OvBHw+s9T1nw/+0P8OPhN4dOv6L4qthHpN98OPg58UviH4c1Sx8I3njXWNa8fWPgG7+N3jjStVg0rw94W0vw74U0axj07xd4ystQ8MaoAfQn7PXxl8ffEL4Var4k+JnhDTdP8c+ENUPhrxj4V8DweLn1Ky8TwadpOrajo03h/xfoOhy2d9p9lrumOBpWueJNJ1O2ddQs9YguJZtDtwDgvir+0r8UPDvxH8BeDvht8I9V16TxF4A+MXiSfw74t0HWdG1vXPFHgw/D6bwToml69p2p6ha+GPD+vjVvEml+JvE194b8R3Gi3UvhzVdO0LUYbTVtIuQD7A8OatPr/AIe0LXbnQ9Z8M3OsaRpup3PhvxHFp0XiHw/cX1nDcz6HrselanrGlrq+kySNY6kNK1XUtLN5FMdN1W9svIvZADZoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKAOG+F3/ACTH4df9iN4P/wDUfs6AO5oAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgDh/id/wAky+Iv/Yj+Lf8A1H9UoAf8NP8Akm3w+/7Erwn/AOmGzoA7WgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKAOGf/AJKda/8AYjX/AP6kWn0AfD37dPit/gn8Qf2Yf2mv+El+A1snw51P4s/DyPwd+0J8btL+AfhbXrz4teGNAdPE/hX4na74f8UaHp3jbwXp/wAP9Sgj0fUNG+0a14H8SePbTSNUh1WODSNQAPj39nX9mb4x/Gz4W/sgePtS0rR/C2jyaD/wVjn8ZXYvdZaDTLT9sH4yeKde+E2v+FLLxL4d8KeI/E3hfXdEv08RaTqt94f0O9vPDdxo+q3Wk2bX62ygH6efsZeG/if4C/Zl+D3ws+LfgW18D+K/hD8PPh38J5Y9P8XaT4u0zxTB4C+HfhLw9N4z0q/0uC2ax0vW9UtNSTT9K1W2t9agtLWK61C1ge6S3UA+WfBH7IXxL0PwX+yRoOqaF4V/tH4S/wDBQv8AaV/aX8fSJqFhNC3gHx5q/wC3PeeBtctJvsu/VvEDw/F/4Wj7CUXUNLdSs0sQ0N2QA8uuv2Nf2gtCQeOrXSr3xHe+Cf26f2yPjxo/w28F/F+4+HHi7xD8KP2g7jxZbaNrXgHx7BcW2jeG/H+kHX5tRuvCviS70TRta0TX/Helah4w0nU7xftgB7H8G/2VvEei/F/9k/4mXXwhtfh5oHwv8Mft36v4o8O+Lfisvxh8a6H8TP2jfi38EvGel+JH8WXtpKt14l8YroPxC1vxK/h68udI8NPqdz4ftNf1GG+aeYA+K/iV4h8V+HPjiP2OfC17+z/8RdR8R/8ABTb4H/tJaxdeGPjfdX37Sem+G7/9on4f/tB+JNM8Zfs4ab8Pta1uxtfhN4N0f7Hd/E3XfGmlfD2D4SaR4VnttQg8RNbeCVAPpb4R/sofE7wJ8WtN8OeOfg/4j8feHPD/AO1L8W/2ifC/xlj/AGptX0r4W2X/AAsH4ifE34gad4ovvgq0Fx4jX4saHZfEO68HX/h2HRr3wR4ovE1TXNQ+JGn6Vqc2lAA/SD4sfCXQ/jFoOn+H9d8VfFLwnb6dq0esQ6h8J/i18RvhNr080dlfWX2PUNd+HfiTw9qWpaS6XrTyaRfXE+ntew2N75AurWCWgCq/wZ8Pt8VtK+Li+L/i5HrOlaX/AGTF4UT4z/FE/Cm8hGkX2ji71X4USeKpPAup6oLe8Nz/AGreaHJqDavBY649w2s26XpAPz6+F37FHxQ0L4Jf8E/PhtrCaD4U1v4F/s4fF/4T/E3xBoV7aXt14T8S/En4J6X4PfUPDTWzafJrzJ4ogfUtQlsby0S8u7aHUJLwuYrygDW+BP7O/wActY8W/s5x/FX4aaX8B/D37L/7J/xD/ZhvdV+HfxP0++vvixqHjfTfgjoFrqnwr1DwlY6f4m8BfDPwlp3wouvEOgX3iS68KfEmx8X6p4dh03wtZ2mh32v3gB7r4o/Zi1LR7r9ljTfAHiHx34t0f4W/tRN8ZPGer/F/4ueOviV4ptfDj/s//HD4fyxaX4j+IOueI9duYF1zxd4bisvDlteR2Fr9r1TVIoYt2pzuAekfs5fDPxX8M/8Ahfn/AAlUNnD/AMJ/+0d8U/iZ4c+x3sd353hTxT/YH9kT3flqPsl5J9guPPsnzJBhNzNuFAG1r3wM0m+8aeM/iZZ+L/ipL4l8S+E9U8OweFL/AOMnxNk+D1nJdeGotAgurT4SHxJJ4A0+7aO2iuZ9Sg8ONeHU7jUda3Nq9zNdkA+SfgF+yn8Qvh3qP/BMu78QaD4Zs0/Zc/Yn+I/wZ+Jxs77T7iTTfir4r8Nfsk6XGPD/ANnt/wDiaxX158NfiHJqGvWrRRvHI0s8zyauEkAPdf2D/hF49+AP7HfwD+DPxNis4PGvw98GDw7rltp+qR6vp9obbWNVk06ysdQiAims7LS5bG1tUhAgtoIo7SFVihRKANL9rf4Q+JvjX8Pfh14W8MWOlalJoH7Sv7KfxL8QWGs3EEFlc+B/hj+0V8N/HnjpQtzFLBe3CeFtA1aa30uUAanKg06NmnnjjYA+Svjn+yH8YvG3hr/goNF4P0zw9H4g/aD/AGkv2Pfid8MLxtbtNOvJ/DPwU8P/ALIEXiDUNU1AQiTRr3SNZ+FXjm60C1lla7kuooL6zEMmowSsAZer/spfEzTPjh8TbPW/hR4q+Mnw5+K37T/gT9orSfFmh/tP6t8MfAvhabQtY+F2u2ifFf4XvJJqmseJvhh4h+HOm33g658Gaf4o07xp4a0jwdo2t3XhGezubRAC14x/Z+1j4WfsXftMw+Lbz4P+BtV1L9s34h/taXOq/ETWoNH+GXifwppv7elr+0L4M0H4u+LLHSb99J0r4geBfD2heAvEeqX2n60vhfStY+z6jpmo2emT6OwB8oeCfB3xi/bqu/29Piv4Z0T4ZWy+LPGv/BO3WfBum/Dn4+6v4z+GPj/U/wBmPxDN8WvGXw+0n9onw18OtD0aXWbiC/0rR18WeDtH8TeGPB3jufTku7+/fSdSmUA/U/8AZL+HGueEJPi14y8UfB3xf8KvEfxG8QeF7vWJviJ8fT8bPH/jCTwx4VtvDtpq+u3On3GseHPDdjpllBb6N4dj0vxPq+ravpFtFceIrLRJLXTtLIB8rfGf9iX4x+Kvjj+0N8UPB9z4Ul0azHhr9pf9mbQry4S03ftraPoXwQ0GCbxJ+7SPR/DcGlfsweHNB1XVf3i6roXxz+KaOJbyLUWoAit/2D/iS/gr4b/D77X4f0+Nv+CZn7VH7LvxD8UvqLThf2hP2gdd+AfiLXPFUlnFbSXWpaX4g8TeH/iH4p1XVbZZZFumVJbdp7+1yAeo/B/4NfG/Ufih+xJ49+JXww0jwDD+zd+zx8fPg54ltpPG/h3xfc3HiPxbpX7Ith4Z8Q+GbjR7cH+z9aHw5+IVozTpZ6jY6bZW51SCB9agsAAfRf7H/wAK/EfwQ/Zu+G3ws8WWWm6drnhSHxRb3Vjo9xBc6Za2+oeOPFGs6bBZTW0ccHkppmpWYEUSKkDb7cAeXyAfGX7P/wCxp8WPh98Fv+CbPg3xDYeHtE8Vfs1ax8aJPiVqWkarZXN54esviJ8Ev2gfCMF54X1C2jhbVZbjxT428JXepQ2VzBJJMianMZG09plAJv2fP2a/jrDq/wCx74M+J/w50f4VeFf2KfgN43+Dl1498GfETS9Ql+OeueJ/h74H+GaX/wANrbw5aaZ4t8A+Br+w8OXXxH1zUPFUvhbx3pvxAtPB2jaVoWsWljd+OwAfQPjb9mDUtL8NfA7wv8OvEXj/AMZWngv9qb4bfGbxLqXxi+L3jn4leJbTw3oFnfWetQ6V4m+Imu+IdaNnbotnNp3hm2vUsUvLnU7y1gjubu+kYA9M+AXwx8VfDrxh+1frHiSKySy+LP7R0/xN8HSWd4l09x4Um+A/wG8DiW/jCI9hepr/AIF163eylBfyIra7SR4LiJyAe/atZz6jpOqada30um3N9p97Z22pQBzPp89zbTQw30Ajngk821eRZ4wk8T70ULOjYkAB+K/ww/ZW/ax1jXf2Nvhv46+Efg/4N+BP2T/2Y/2hf2bdW+LPhT4raH4qfxv4h8c/CT4ZfDfQfih4A8BaXoegavpHh7WL3wdqHi1LbxRqekeMbO8vUsNY0i3uEk1mUA9M/Z1/ZB1/7NoPwx/aE/Z/8QJpPg79mHx3+zJq/wAQb/8Aao1fx98M9d8G+N9K+Hvhfxl4Z+DPwyMUWs6H4O8e6V4I0m/kHjPSfB+p+C7bSdN0DSNO1ZwNVAB9B/sSfAb41/CzTvHnjP8AaZ8SaZ4z+M+v23w9+Etp4q0zVLrVI7/4K/Abw3P4T+HupXcl3bQPZ658SfE+q/Ej45+KLBTI2n6/8TbrQZ5C+kiFQD7D8a+GdE8a+CvF/gzxLpdzrfh7xZ4Z1/wz4g0Wy1C60q91fRNc0m+0rVdLtNVstT0i70y51CyvLi1g1C01XTrqzlmjubfU7SaJLtAD8gfGfwN+KfxXk03xRqfwd/aS1DxNefF/wZ400Xw14w1v4GeJ9F8CfBTS/wBqj4P+Jl0nUdb+NHxN8TT2fi2TwL8BLnxhF4G8J3t5a2Wq+PYNG8V2a2uqeIIQAe0eMfgH8StT/Y50T4c6B4Z8e/DlfBmvftNa74z8BWHxCW18V+P/AA9rvw0/amtPDFlp0nwKfStN8R2XjL4k+PPh/wCOLP4cTR21ja2tvFpGrwaxrGi2smoAEPjj9m34paZdeC/GN9B4w8a61B+0f4Ji0bw5pfj7X/ipZ+BvhFrf7Wf7Dvj/AFLXvEXjf4papovjG4svDWg/syXWv3mlaHpGrQaPc+K9VswLjTNKn8TTAHfftofDH4heItO1HxT4OsfifrVl4b8K/EDX7qx8B69bWGpXWt6r8PL7wpofhvwr4O8H2Wl+KvHV7qmrWGiXfjW98V6vqT6f4FbVvCXgPSdYu/Ed5BooB3PwD+D/AI0+Evjrxzf69ffEi50PUfDnh/xHca5qfxB0n4h6b438Q39ndRa3pet6Dq/h7UfiL4d8ZfD+XTFtrG58K+JdQ8KeONC1jS7u/uLrXbC28M6WAcvZ/APxloGh/staq2heItb8QeE/j58Zvj38WtF0Tx2tn/Yuq/F74Rftc694i0bQft3jDQdE1P7J8UfjJpHgnR7nTpLOGe3u4dbuYtK8LjXrq2AOPk+FvinxZ/wTw+PHh/Xfg/4h034h+JdL/b08a/Dv4d+M7Lw94h+JXh/Wfi742/aV1T4fwrLo+ueMbO38d6x4Q+I9tpVxNoviLUb/AG6/qeiT6rObrUo2AI/ir8D/ABRe+J/iD+0G3w/+IPxJ8Pt/wrrwgfgHB8TvHVr4x8X/AAc8Ia34k8X61498OQX3xC0qx034nweOPE9r4v8ABHw81jULaA+DfAdh4aFv4c+J/jm8t9DAPVPif4d+KaeKvh74t+Gnwp17UtI+EPwr8QaJptlq3jTSIfE/iDUPiMvhGxtLDQY5/Htnqmt6l8MIvA1rqfxBh8ZeNPBjeJ7LVbex8G+MPEWt/wBsJEAeGfs0eG7Lwd8f9K8Ow/s//tH6f4d8I/s+/s4/CPwH4z+J2gW/9l+H9W+DFp+0hp2t+IdS1tPG2oeF7ZdY8I/FnRdH0qLwk19cPf3fivTINA0y0ieSYA4f4i/snarqet/GG0+HngjUdO+Kd9+0BqWvfDz4rXfhvxRp5bUviL+zH8M/C/jL47az410Hxn4J0GXw94K8UeOPi14lh8ByW+sm98dwXXhv4feF9LsGvbcgH058IfDXiPwj8KvjV4f8Y/s5XviPUbvxkX8SfDDRrTw7e6H8VNb1a20HRtd8WeEfEfxk+PviDQvFXgXV9JtdJ1xIvFl94K1jS9NstW0XUvBcvjuOfw4QDyjwR+yv43+EPg/RPiP4I+B/wc0L4ueAfj18TPjJbeE/hpf6Pa6x8U/ht8QfF/xwRPg7r3i698K/DLSNO1v4efDL4y3Ol/Dqy1fVtT+H1v8AEDwt4Us38Q6H4D+3ahQB9+fC/wAX6r4/8A+HvGGt+EfEHgPU9bhvbi78G+KtNn0vxJ4ckh1S/tF0rWbSYshvraK2jE17YzXGjamSNU0C+u9DutOvpQDvaACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgDx3wf4pt9C+G/wy0+CxvNZ1m78A+E57bSNP8AISVbWPQtPje9vru8mt7LTrMSP5aSXU6zXMiyxafb3U8U8a6UqVSs2qcXK276Ldau/l5vbW7u4nUhTV5SS/N6taK/lf0vq7O+p/wmHjY8r4G0kD+EP422vjJxvVPC8iK4GNypI6hiQsjBdx6lgK3VxXyl5/3fJff5Mw+t0u/4+v8AwPvavpdn/CX+N/8AoR9H/wDC3b/5k6PqFX+aP3T/APkQ+t0v6Yf8Jf43/wChH0f/AMLdv/mTo+oVf5o/dP8A+RD63S/ph/wl/jf/AKEfR/8Awt2/+ZOj6hV/mj90/wD5EPrdL+mH/CX+N/8AoR9H/wDC3b/5k6PqFX+aP3T/APkQ+t0v6Yf8Jf43/wChH0f/AMLdv/mTo+oVf5o/dP8A+RD63S/ph/wl/jf/AKEfR/8Awt2/+ZOj6hV/mj90/wD5EPrdL+mH/CX+N/8AoR9H/wDC3b/5k6PqFX+aP3T/APkQ+t0v6Yf8Jf43/wChH0f/AMLdv/mTo+oVf5o/dP8A+RD63S/ph/wl/jf/AKEfR/8Awt2/+ZOj6hV/mj90/wD5EPrdL+mH/CX+N/8AoR9H/wDC3b/5k6PqFX+aP3T/APkQ+t0v6Yf8Jf43/wChH0f/AMLdv/mTo+oVf5o/dP8A+RD63S/ph/wl/jf/AKEfR/8Awt2/+ZOj6hV/mj90/wD5EPrdL+maWleNpJb2203xFoVx4eub2VbfT7r7ba6po17dkMVso9QthDNa3UoRjbR6nZWaXbbbezlmvGFucKmGq0k3KN4r7Svbdrqrra/36u13pTr06t1GSuraPfVyWmv938erR3lYGwUAFABQBw/xO/5Jl8Rf+xH8W/8AqP6pQA/4af8AJNvh9/2JXhP/ANMNnQB2tABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAcM//ACU61/7Ea/8A/Ui0+gDxn9ob4/8AiL4WeIvg78Kfhf4F0n4j/Gv47a54o03wD4Y8TeL7vwJ4M0rw54G0Bdf+IPxC8beL7Lwp4zvrHw/4Ps7vRbVdJ0Tw5q3iPxDr+vaDo2mWcFnLq/iCxAOcl+NHx7+FvgnxL4j/AGlfBfwP8FQaX4z+BXhbwv4z8DfEz4n+LfB/jF/iv8YNG+F93puoaC3wRt/GXgXxTp11rehJoln9h8VeDtS1bxJoSa3480PQNP8AGOvWABj/AAD/AG4/AHxw8Y/tLeDLzwh4++H9z+zr8W/Hnw11PxB4k+Hfxfs/AfiPS/Blv4BB1+2+I+v/AAt8M+A7LxNrV/42t7XTvhTa+JtX8dXOnWy+J9Ks9T8OXSaigBXtvjf8YvDfiPVPi1418D/EjUvg94y1XRPC3g34S+Evgr8Qtd+Kvw48MabY6jff8Lj8ZaTo3hO/13UNQ8a3U2rTeKfAMDS6v4T8H6d8L9K0Lw5cfF+88e+DrsA9C+Mv7Quq+BvhHoXxV+G3hXw341i8W28Fp4L8N+P/ABZ4v+EHibxh4v8AEMcafD/wj4d0LWPhT4g1E6l4puBcy6lL4ph8LWHhPQbW68XeI7638I2fiLXtPAPMvgL8d/i1rOq6f8IvH2qfBLXPGXw48Z+H/hF8R/HMvxghh174u+NIvgJ4P+MHiXXvhL4A0T4ReG7BzHpXjC31m60OSSzfSrbQfGWktayaXYweO2ANfxJ/wUL/AGUvCnizxZ4R1fxb49M/gT4hXHwk8beIdN+Anx/1jwH4a+K6WOl32n/De+8f6V8MrzwleeMvEaavplr4V0DR9Y1C/wDEOrajo2haPDca3q+g6fdgHZad+2V8AtQ+G/iT4myax430fTfCnxF074Qa54S8RfCD4u6F8W4fitrFr4Z1DQPh7Y/BvVPBNt8Stb8U+I9I8X+GfEGg6Xonhe+l1Lw1q9p4jti2iRX9/EAYF7+3r+y7pXhfwr4n1rxf4z0aTxh8TNU+CuieC7/4I/HU/FZ/jHo/gu+8f3/wxu/hHafDe6+Ilj4vPhGwk8Q6Vpdz4ZT/AISLS7jR7vwrLq0Gs6A90AQeL/2+v2ZPAl9cWfijWvifp9vpUfw8XxjrS/s5/tGXXh/4bar8UrHwlqHw78K/FjWLX4VzWnwu8beJbTxt4XnbwL44k0fxh4fXWtGXxnomiPqOlrOAdj4h/a9+A3hf4iTfDXVNd8Wtqlh438MfDLxB4o034VfFbVvhV4T+JPjKXwfb+DvAXi/4waX4Mu/ht4b8V+Jbnxz4UsrDRNU8Uw3sF/ruh2GrR2V5qekw3AB5Bon7aEc/xquPhnqlv4PvbXT5v2k7XX7LRfE/hHS/FHhWb4U/G74H/Cz4cz+Im8Z/EPw/YWkPxJPxRmjtLaSCK91DX4dIs/D8VxFPdR0AeufBz4qeJ7nwb8TvFvxU0/xPpHhzwn4v+OOpHxj4nk+HJtbDwz4O+MPxV0L/AIRWz0j4e3d3qH2bwB4T8J6NE+qaraX2qa5NLeSPrWq3kP22cA8u8E/Gr9oi5+KvwJ0P4kfDPxLot147+A3x/wDHni74daBD8KYNN0/XvDvxP/Z0g8C+TqOs/Ei91/8AtXwT4U+JGp+FPGEkuu6fpPiPxFdN4g07wbY2yW9jpwB7z8RPjS/wy8M/CnW/E/hP+y9Q+I/jXwn4H1DSdX8WeHdNtfBGpeIPD+va1f3Wu+IxPd6NeWfhwaDd297JplxOdQO1tGF3cPbWcwB8y6R+0V8RNT+LnimPSPiN8H9V8EJ+0F8N/A/g7Q5vEV1qml+NfAHxA+C+i2dxo3gbxP4N+G+o6kvjXwx8WfCHxK8UW+u6nJ4g8KX+maH8QPhj4mHhs2lp8QfCoB9g+IfjZ8FfCGs3nh3xZ8X/AIZeGNe0/wCz/wBoaF4h+IHhLRtZsftVpBe2v2zTNS1m2vLX7VZ3NveW/nwp51pPBcRb4ZI5WAIfDPxx+DPjXxHL4T8F/FDwV4u1yDQrzxNcWnhfxFpmvw2uh2F7Y6feXt5qOk3N5p1oYbnULRWtbm7jvWilF0ls9qk04APl/wAXftD/ABCu/jP4evPh3pPibVvhjofhvx5NpvhCw8K2cuq/tO32hHwndeNtc+HGu6pGh0TQvhToep2l38NdZmudP8O/HvxlqmueEtN1rS/C1l4Q+IGqgHrmv/H7R/FvwQ1H4n/AybxD498y61nQ4NO8LeBPFF/8QLHW9Ii1aHX/AA+/gjW9Dsrrwh8QtBm0+aG28P8AxYsfDeiw+Jo9M8N+MrzSE1aC7AB80eHf2q/HOteFvBS+I/iBbaFpnjTw3461rSfin4U/Zf8AjlqN94k8O2fiX4C+F/g/4o8C6Bq1tqGnanrPxksvid/wltpY2GheK9F0LxB4k8LfCCOy1fxV4d1q/wBZAPb/AIsfGz4haN8QtV0bwHpGjf2J8I/Avwy+MPjlfEniG68OS+PtD+LN1+0B8PNA8BtDP8M/FuoeEoPDPiDwDYePtX1+3Nvr09xY6Z4W/s9dLn8RRXAAnwm+MXxIu/FXhDQfHVjZ6wvxp8V/tA+KPC7QatpVldfCj4efDfXNK0Pwx4E17Q7HwvbT3PjFLW50s+P9L1bXL7XPCfxFv/G3hm61OfTtC0zTowC3o37cX7Nmuab418SW/ifxjZeAvA3hXxj421T4t658HPjNoXwW1Twp4EuhZeLtZ8H/ABf1jwFZ/D/xrBpl3+5sovDHiLUbrxKqzXfg2DWrCC5u1AK7/t1/sz6f4I+KHjzxX4o8a/D/AE34OL4Kn+JOifEf4K/GzwN4+8Oab8RPEr+E/h7ra/DfxN8PtO8b65oPjfXYpdL8Pa74c0DVNKutQttV02W8h1PSPEFnagHK3n/BRz9lPS7jxHZ6xrPxa0K98E6lpNn8R7LxD+zP+0r4fu/hZpOveU3hrxt8VoNc+E+nv8NvAPiiGaO58P8AjTxgNL0DUrePWmt70yeG/G6aaAdN8S/28v2XPhD4x8feCPHfjTxXp+pfCi88F2nxc1nTfg18bPEXgP4Up4+0ey1nwZqPxJ+JXh34ear4D8H6VrtnqWnPFqWr+I4LSzF352qyWlnZa1d2wBmax+3L8G5Phx8VvG3hvVb7Q9Q+EOu/CvSvGeg/G34d/Hb4QX+l2XxV8a6R4Y8E61c+HtZ+EWo+PZNG8brd3kfgnW9L8E6jpGo63azabrF5pVtZeI76xANr4EftfeFvjn8Yv2j/AIMWngT4k+Gtd+AXxe1/4XNrmqfC74zw+BfFlp4f8B/CzxTfeIE+I+tfCvw98O9F1O51L4gXGmaL4Kj8YavrfiHwxpWm/E7w3NqXgjxJo98oB9dUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFAHzB8MZwdNeSXLSQeH/hppsLckrZQfDHwlqMUAyThEu9Yvpwo+XfcyELv8x39zKqXNQqyW/tOVvq0k2t35/n1bb87FytUSauuRNX781RPp1sn+F3bX077Snoa9L2Mv6t/8kcfMv5V+H+QfaU9DR7GX9W/+SDmX8q/D/IPtKeho9jL+rf8AyQcy/lX4f5B9pT0NHsZf1b/5IOZfyr8P8ipqGs6ZpOn32q6re2um6Zplpc6hqWpahcw2en6fp9nBJcXl9fXlzJHb2lpaW8Uk9zczyJBBBHJLNIsaO9DotJttJJXbdkklfVty0Wn56uzbOZPaCf8ATS6eX56tpt0dO8WeGtYvb/TdI13SdT1DS7fSrzUrHT9Tsry8sLPW7eW60S8vba3nkmtrXWLaCa40u5mRYL+GKeS0klSKVqSpXbSkm42uk1dJ7O3Ns+j/ABe4XX8i+7tp2/X5t6mz9pT0NP2Mv6t/8kHMv5V+H+Rj+HvFnhrxdoel+J/Ceu6R4n8O63Zw6hoviHw9qljrOh6vp867oL7S9W02e6sdQs51+aG6tLiWCReUkYfNSVJySlGSlFq6aaaa7pqTTXz+bG2k2nCzWjTVmmtNU1df1u9SE+M/Cg8Ur4IPiLRB4xfQX8Up4SOrWA8TP4Xj1KPSJfEaaEbj+0n0OLVJItNl1dbY6fHqEsFlJcrcyxRE9l73LzLmtzct1flu43tzXtdWv3tfV3ZdWvyaXte2l9bK9t9Nr331dm2uheMvC3iiPU5fDXiDR9ej0bXdY8L6u+j6nZaiul+JtBu5LLXPD+om0mm+xazo91E8GpaZc+Xe2kqlbiBCaFS5r8sk7NxdmtJJtNP3t1yu6383uy6W8Fsn8nez22dvz10d9efUrO0jWW6nitommtrZZJ5Uhja5vLmKzs7dXkZVM13dzQ2ttECZJ7mWK3iV5nVS/Yy7/l3svtd/x0u3qLmX8i/Dz8n2/PV2d0OqWS3Udi1xCt5NBPdQ2hmjF1La28lvDcXMduW814LeW6top5lUxxSXFvHI4eWPeexd7X17aXtte3N/Xe+ocy/kX4edunl+ers7z/aU9DR7GX9W/wDkg5l/Kvw/yOS8eXQTwX4luI8iax0u41K0fnMV9pmdQsZweoaC7tYJlIIIZRhgRk4Yii/q2Ib1SpTfTeKm117xT69NbuTNaErVYcsUnzxV9NnKon07a/Na3Tv79XzB7AUAFABQBw/xO/5Jl8Rf+xH8W/8AqP6pQBF8P7u00/4V+CL+/ureysbLwF4au729u54ra0tLS28OWs1zdXVzM6RW9vbwxvLPPK6xRRK8kjhFZyAfPHwk/wCCgX7F3x48d6V8NPhD+0H4M8ceNtdvfE1joHh7So9eiutffwnp97qfiK88Pz6hpFpZ65pGnWWnXtwNf0u5utCuxbXEen6lcTRulAHx/B/wV4+GvhDTf2abj4y6B4R0Y/tD+Ovin4ah8RfDf4mjx74H8C+Gvh9rcuiReLfEWsS+EtBvrl9T1Cy1bSbzQbHTXv8ATNY0q8gEt1ayQ3dAH6c+OfjH8Lfhn8Lr/wCNXj7xrpHhf4YaZpOj67qHjbVHuItFtNH12606z0fUJ3SCSeO3vrjVLCKJjDlWuYzKEUSNQB8qXv8AwVG/4J5WFj4x1Gf9q/4ZPb+BdY03Q/EiWd3rOoXkV7qkVzNZXOk6bp+k3V/4n0RobSee58TeGbbVPDVjAhn1DV4IirsAetfFL9s39ln4L6d4O1T4i/GfwxpVt4+8Mnxv4Ni0qLWvFupa/wCBVs4b5/HVlo/g3S/EGq/8IXHaTwzzeL57OPw3EkiebqqscEApeN/24v2PPhto/g/xD47/AGi/hj4Z0Px/4HX4k+CNZ1PxJbx6X4q8CvcWNpF4i0G/TzLbU7We51GytreG2kkvbi5uYbeC2eZtlAGB8Tv+ChP7EvwY8c6n8OPif+0b4B8J+L9F0XSvEGt6Tez6rcx6LpetG3GjtrWq6bpl7pGk3uqR3Ntc2Okahfwaxc2Nxa6hDYPYzw3LAG98V/24P2Sfgb4mj8IfFP45eE/C2v8A9l6NruoWLJrWrx+G9B1+dLfQdd8bX+gaVqun+A9G1qR0/svVvGV3o+nX0R+0WtzJbhpSAfUlvcW93bwXdpPDc21zDFcW1zbypNb3FvMiyQzwTRu8csM0ZWSKWNmR0ZXR2U7mAPl7Wv20P2cdP+L3h34CaB47X4k/FzXtbsNGufAfwn0vUfiLqvg2C51KfT7/AMQfEu88Kw6jo/w10Dw8ba4vNevfGepaVc2tlE8lrZXc7QW8gBg+Of8AgoL+xP8ADPxpe/Dvx5+0d8PvDnjLTPGdr8PtY8O3t5qL6hofiy8S0e2sfEK22nzxeH7Jxe2gbX9Zls/DsUlxDDPqyTOEIBY+Kn7fH7HfwP8AiRcfCb4s/HLw/wCCfHFnNocGo6Xq+keLzp2kzeIbTT73RE1vxPaeHrnwxoh1G11PT7iE6rrNqFhvLV5mQSozAFv4xft2fse/s/eINV8KfGP4+eCvBHiXRrDw/qupeHtQl1W81u30nxL9oOiasNM0jTdQvJ9Luo7WeebUreGWysLWN7vVLi2tR51AG38Mf2yv2VPjV488bfDX4T/HbwF488W/D7w8PFviyx8Oas19p1h4V+1Q2UviO08SLCPDmu6LZ3c8FrqOqaDq2oWWm3M9vBqU9vLLErAFf4Wfto/sr/G34gXPwu+Fvxn8NeLPG0Wmalrdlottb67YR+ItE0i/bTdV1nwTq+r6Tp+jePtK027Ux3upeC9R1qyt0BnmuFtv39AEfwb/AGzP2c/jj4k1TwB4V8eJ4f8AipoN3c2HiD4LfEjTNS+HPxi0e7tJbyK5WT4f+MINL1vVbOL7DPIdZ8PQaroDwhZYtWdWUkA+o6APm39o39o7wp8CPDf2KPVfC978VfFEBsPhl4G17xDYaHaaprd61zaWGu+MNVu7q3h8IfDjRbmF73xd4z1OW3s7axtbjRdBOq+Ob/wz4WvgDy74C/te+BNZ8Q2H7P8A8Tvit4G8Q/GzRv7L0KDxn4Tu9Ok+HXxoup9GbVLLXvBmqaRNdaFofivV7C1u7nXfhTfXtt4k0fVrLXV8M2eu+C7bTPFlyAQfHL9oz4v/AAv+Ksuj+GPhR4o8QaGnwF/aD+IP9j6pN8KILHU774P6h8N4tL8a+G9ah+KllrNr4fuLr4jWGl+NNB8TWMPiC60248O6p4M0W11HTPF9teAHt/wb8efEXxv8INE8QXfgzVv+Ei/4RrwZLpGr/EO/8EeELf4nrqHhLw9qV/45bT/hnrvxbh8BWuq3t3qbL4buIru9sLmBLWKFtOlhvwAfn1Y/to/HrUNZ0PwGsvwyg8av+2z40+Et3b/8J3Z+dd+AtH+Lfj/w1Y+C59Lb4Svew6amk6Tp2nx+O7W1h8TXUdtBqsunJfXV5EwB9ufHz42+Ivgp8E9OvNSuvAsPxv8AGcOl+CPA+my6leW3gGf4n6zElnN4ivr3VUtbvTvhv4MZ5/GPiq+1eW2e18Mae+jLqUviTUNFiugDktF/a7+FXhv4xz/Cn4j/AB1+E99L45svCurfCjxHpPiHwzpvhvUdXk0ux8NeKvhwWj8Sa0dK8QzeKNLfxZ4S0/xFrM+peI9O8Yr4X8M3+tXvhbVvLAKH7WHx/wDiP8JvBnjSz8I3Xwd0LxnHa6RqHgi31j4sLJ8QdW0SbxToml32vWPwvvvhjeLqFnDHcX1neumrXVrY+Vd3gvJHt0UgHtPw++KHib4i6N4o8Tae/wAHpfBthYa5YaL41+HnxM8R/FuP/hNfDura5o/iTS9W8OW/w28BRT2Hh+602EMuj+K59X1W8W/0qOysEWy1eYA/PLTP+Ch/jmyuNV13xHdeEdW0mz1vWNK8J+D9M+DHxV8D3XjBpLDRtR8M6F438feI/Gniuy+DnxC1rwld3nxn0DwXceFfFKax8Jo4Ddaxp/i2a90axAPsXQ/jT8RB+zr8RvibBb+G/FHjjwx8aP2lfCHhfw9rt4vhbSvFen/Dj9qv4r/DbwX4Dj1qxtJ4dC1zXvCvhTSfCmkeJ76xvrSDxJcWfiDxFZX9uNUikAPJ9D/a48b2HivxS/jq30Lwd8P7D4529lf+KfiNpmt+HrDwz8GdT+FHwqttB0bw3qmk2E9h428b678a/Fet6JZa2J5vCdlo2ieJrbWtXt7seDW1AA3f2pP2pPiL8GfFlronhnwppa2Phi++HHjXxFrWo2/xK8QaR4g+GPiXxDeeDPEGkavH4J+D3ilPA+rtqP8AaJ8K6rN4iRY/Eel+Fr7WLa98J3/iLQXAND9nT9ob4tfED4t+Nvhh438P+Cb9dMufiD4tutf8K+LNXuLfwV4c034teOvhD4Z8A21lc/DTRbfxXqmj+KPhT480fxj4gvdd0+7OuWhu/D+kal4amSazAKviD9qW78QeLvj7p3gH4kfB/wAO+G/hX4ah8OeDm8Z+IPDuja78SPjtpV5ca74s0vTtS8QeK7HT9O+G+k6ZBpPw6uPE0mh3Uc/jjVvGF3Yaqkfgee0vgD2b4f8A7Tfw0+N/wrm+KPwF8W+APHFjp9rY3/iaw8QeOovCEngW1ntpry+i+IRttE8V6h4M1HS7O3uL6Wz1jSYobqwgn1GxvZtMa0vZgD548FftXfETxH8Yfif4RsNX/Zu8Q2mpv8PdM+Buiv8AtA3NlonijxBqPw/8S+KNbsvCvi/RPgZrmoeNIbo6O9zrM8WlTN4bW1ktbG2vpZo4WAPvDVNcu9I0nTZbrT7eXXtTlsdNtNGs7+Wazm166glmltIdVn061lbTbJLa8u7jU5dMhuP7LtLi8GlfagunEAx5X+IulQzardXXhrX4II3uLnw/pmiappWoeRGrvJFpOr3XiLVIb29jjRlhgvdMtIdSuPLQ3WlRyFlAILO+tNU8f6RqdhOtzZah8O5r6yuEDbJ7S61zS57adAwDBZYpEkUMA21hkZBoA8S/aS+Afjn4k+Lfgf8AGf4N+MvDPg340fAHXPGNz4Tl8d+HtT8SfD7xb4N+Inh6Dw78Q/AHiyw0bWNG1nSotch0zw7q+keK9Fu5dT0DW9BsmOlalpd3qmnSAHxr4V/4Jw+KIbH9obXZLD9n34LeIP2gPiL+xH4w1P4efAzw34kf4e+H1/Zb/aYufjl4j8Q33ifU9P8AC+oeNPGnxQtNZ1HRJbgeB/C9hpl1pWhTTy3sF3ePagH158E/gV8Rvgn8Tv2n7201Twf4h+FPxz+Jnir46aVaJN4j0j4naP8AEPxP4L+FvhbUPC9zexh9APhYSeCta1Ox120lg122k1XR7I2ZGn3mozgHlWneCf2tU8J+OvF1x4As/EniDx5r0/iXxN8H/if+0v4uudItfBiaXa6D/wAKO+GuleHtD13wX4dVvDNmsi+PNZ8WvbeNPihqHijxD428PaL4N1jRND0EA95+LnwLtvEur/s8614O8L+Hrq9+DHjuz1HSrfX9VvrPS9F8HWnw2+IXhqbTdIBsdeXTrjVbjVtC0e9vrHSJtTutLCQ6hNcaZaGAAEngTwb8a/Bvjj4s+If7F+GM2m/F74zeGfH+rj/hPPF01/4b8Mad8FPg78KtUsdNtv8AhV9pBrmutL8MpNc083N5penNHqcem3Msb2z30gB8/r+xN4sGifFrTD448P8Am+P/APgov8Jv22dOkGn6mY7Hwn4C+If7Pvi2/wDA97kBj4gv7P4S6pbWeoQCTTFutS03zysKXcqgGT8Zf2C9b+KGt/HXxfB4q8Eza74v/al+D37Tfw20Dxl4Y1PX/ArXfw1/Zg8C/s+an4I+J2n2l/pmpXem+LdO03xhNbat4avYr/wxdaj4Y8RwR6rc6Ve+HLkA3vh1+yL4z0rxJ+z5421rw98AfhZe/Cr9or4jfGvxF4J+CGmeMZtB1rTPF/7J3jb9n6wt77xX4mt9Lv8Axh45sb3X9Lu77xZdeGfC+nT+CtI0Xw1a+HoL3R01C+APjH9rn4X/AB1134jfHj9nL4Pvr2ueC/2lf2hf2bvi14u0/V/2Rf2gL9fDWs6TrX7NMHi/WPDf7VFl4i0P9nu08A6B4S+D8fi7WbDxIl38QLbxHb658PNG0bVb7VtE1CwAPqe//Ye8S6R8ePGXjTw94R/Zm+Ingj4j/G7QPjjqOvfGjwl4w1D4o/DXWbe+8Kaj4g0Xwtp+gTR+GfiBEuteGv8AhK/h1reuaj4Tv/AutX0Vpqlt4utdKsbyQA9z039k+zg8VeJfE/ibXbHx7pGvaJ+1voN58Mtd0Wzs/CesaV+0n8SfhZ44m0vU9Zig1HU4LXSbb4Zx6Jqkkmn6qNQHiG+1CztLRdLtrC7APXvgpoHjjw58N7qy8caDoOk+Lr34g/GnxVNoek+JrnX9Bt7bxf8AGv4heMvDgg8SS+GtHurkTaJrmlXVxJJ4etrizvJJrN7RpbdpWAPPvGHwLk8afGjwh481z4dfCPWfCGm/Bz45fDPxZ4d1yZtTk8S3HxS8YfATXLX7bp138N7nTNS0WHTvhj4gs9Yi1KdpJ5NZtIY7Ke3l1GVADe8TeA/iN48tvgjNqGm+BPAeq/Dvxj4i8cahp+katrfjzwhZXum/Dz4keBfh5pens+gfCnV9Zs0vvGeh+M9Yt47Xw1Hbx+HtQ8FQXtza39t4hIB8XT/shftI+BfGfgr42eA9Z+FHjHx58OPhld/DKz8G60/ivwppHizxLeW3xMv7n9pWzvopfEPhfwx8TtJ8TfFz4mxeDfAGp+DNc02P4cePPiH4P8Q/GBtV8Vf2/o4B+rNAEcsMNxDLbzxRzQTxvDNDKiyQzQyKySRSxuGSSORGZXRwysrMrBgWyAeLeMPBvifVfjz8EPG+m2NtP4b8IeGPjLpPie9l1CG3uLC48WQ/Dw6ALSxZHn1F7ufw9exzCMRw2sKvPcXIkNrbTAD/AI+fDvUvih4Aj8NaZpnhjV5LXxP4X8TXGl+KbLRbuz1iz8K6tHr83hq2m1/wp4y0vSX8ZmwTwZq2uT6BeXek+Fdf8RX2itb6/Fpl3GAfDHwT/Yh8b/Bv4aeCdHFl4Fudb8Ij9jPw9pug+D9H8O+FLOzs/h98Rv2c/En7Q3jHWNc0nStAt/HV5rB+FVtN4SvPEGiJ42bwr4O8PaJe6rdanqzWNoAe/fFb9nTVvHfxm+JfxJh8C/C7xLc6r8H/ANn/AMI/D7XfG9wsGs+GfFvw3+Knx+8Y+IZdNvovA3izUNBtruw8f+Gmg1TTSlxJf27obaQWwnUA6Sz+EXiaL9qK18XWXgbwj4V+FOjeCvi1qk3iLQ/GupyeLPHHxb+LWqfB60vNRvvCcfhTTI/Cx0PQfhz4gOq6nZeKb5NXvdd8OataR/2yniBbYA+dtA/ZB/aTm/Zevv2K/GfxQ+D5+EfhH4MWvwp+E/xO0Hwb4un+KtzdeBp9Cg+CWt+PPCOo63beDILXwhpfhzR4fiBpukalqMnxFuoLp9JvfA6Xb7ADG+Kf7E/x5/aL0T42+KPi/wCMvhT4W+KXxL8Kfsx/DHw7o/w5/wCE81X4c+HfA3wD/aNuvjrqevatqXiKDTNY17xZ8RL/AFbUbO209fD9rp/gaws9I0W01nX5LvxF4muQDuvjL+xN4s+KEn/BR17Dxx4f0sftofAr4YfCfwl9r0/U5j4N1bwJ4G+KXhm51XxH5IH23T9SuvG9lcQJppe6gtrW88yJ5TCjAGP8bP2FfGPxU0P/AIKNaVp3jzw3pcn7Z/8AwpT/AIROW9sNVlj8G/8ACs/hz4L8Hah/wkQgQte/2rdeGZ7yz/s3f5NtcQpP++SQEA2P2kP2JvFnxv1j9qXUtH8ceH9FT4+eEP2HvDmkR6lp+pyv4fuv2Yf2gPiP8V/EdxqRtQ4u4PFWl+L7LTNE+zYktdSt7ttQRbUQzOAe6/CL4OfEP4UfHH9o/wARwa14M1b4TfHj4g2vxljtHtdftfiR4Y+II+EvwY+FOo6BJL5tx4c1jwjdWfwrfxJa6iosNas77VxocljdWtn/AGxKAfUVABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQB8kfDO/gudNv5LZJ4oltvA1sEuLW7tZA9n8MPA9pJsS6ihea3MkDfZbyMPaXtv5d7YXFxZTQXDfS5JFSw1a7f8dr7oQf6/l1Tb8fMG41Y2Tf7tdbf8vKnaSPSfPP97/0L/GvY5F3f4f5HBzv+V/e//kz8If8AgqV/wUO+IHw90T4s/DT9lb4veCPh74y+BOmeE/Evxd8aanqfg698VX2ueJPEWh6V4d+Cfwt8I+JUvm8R+JZNP1t/G3xE16x0y7tPB/h3S7TQLiZdd1W7tYPJx2KlTVaGHqxjKgoSqSk4OTc5tRpU4ST5pWXPOVmoxTi3zNnfhKKlyyqwnJTbUEueyS571JSUmkrrlim7t2eyu/2N+CPj21+I3wc+F/je28TaX4rfxL4H8Nale+INHvNNvbDUtYOlW8Wvywz6Q508Swayt3a31vaBIrK+jmsWhhkhaEelRUalKE+bm5oRblFqzdpqWya3ik10ba31OKbcZzjyySUmldtO16iW877KG/fu2z1Hzz/e/wDQv8a05F3f4f5E87/lf3v/AOTPkH9rK0+I/j3wtcfCvQPCWpzfDHWNOt9U+Ofi+38TeHfD9zqnw0j1C6XxD8KvCL6prmnOmqeNdOsbqy8d6/qclhpPh74b3mrR6PPqvizV9OtbTmr05yi6cYt02k6suaMbw5qqcI3as5K/PKXuxhzWcpu62ozUbyb95O1OL5pe83K05ayVl9lL3nK2yTt8x2Xx2+K978R/2efiJ+zh+zXeppHxh/Z4v9bufhn4i8XfD/wlYeLPgt8PbnwJf+AL3wre6NqWr6b4A8W+Bp/jUkGjadr8Fp4W17w54i1HwzezWeoWXhjXNPwUpudKdCg7VaKlyOdOPNSg1yOLTahOPtNE/dcZOLaaUjVKPLVjUqawqJc0VUdpydRS5ryvKMvZtu13dNq6cj6o+PV3r3hHTtM+I1v4dvtR0/U77w7p3jn+2/2o/jD8JdB+Hi6rdaL4e03VlsfAGgeKtFuNCtdQvQfGmthNPt9FtIpfFFwbzTP7c1C26KsXFc6i2rxU+bEVKajd8qdowmuW93J6WSu7pNrKlO/NHXS/LalCo5W5tnOomm7aLrqr3ifO37EvgvWYLEfBbxpo96U/ZGt/hh4LHxK+HX7UH7QOseA/GXxa0nw7dzeKfDdv4IuNO+H/AId/svwjo95oK+KvC13b6z4Xi1fXZ/COo6RcXelaiIscJSdnSmn/ALMqcfaU69ZwnUSfNFRcYq0U1zR96KlLkaupN6VaunPHX2vM+WVOmpRhzNJuXPJ3lq4ta2TlfRHjH7UPhK8f46X9x8StL07T/EXxS1L4vP8ACjXG074S+LdRj+Ffw7+GvgTwPp9r4xu/i38bfhJ4CstF07xx8V9V+KHw78CaTaXWtWXivTNI8QeLLrV7m68ZWtxnWp2qy57JzdR05Wpyfs4RjD33Uq0oJKVV1IQV5KVm3J87Lo1P3b5ea0FT51zTS5pTqvTkjUldKPLKTdmm+W1js/2UPCd3rfxguPEnw38J/Cqz0r4V+JPDPhD4lar4q8E+F9V16K9X4U6vrV74y+EXirwP+0D8Y7bSfij8Tj8XLdPiz4muNfurLxDpuk3v9uRv4y1fxRJcPDUuapJwVPlpyjCblGLl8EpOVNwrVbVKntI+0k5NNJ3Tm6jJqTSptS525JuKjOSXxyVpKUafurkXLFK6ure6jzH9o7wJ8QPHvxN/aH8LR/AUeMdO0C4/Y61ywsoPGeqfEvX9C0zVv2p/EOqeMNc8L+ANY8PTadqmm/Ezwz4VkuvHGj3WsaTp+g+HvDmjQ61Dd6TbyDT5rUpynXj7JzUXhZL3udpPEz5pKDjZqcad5K65UoKSaV3VKolCD53G/tU21yptU7LmkqjtytpRdm25OyTi3LuP2FfAY0f4/P4u0j4R3ng3RYdC/br8Mah4oX4b+C/CWmzakP25dL/4R7wpLqvhS/vGvr7Q9H0TUNLtdDvSln4btdHvdE8NPceHrS0upKwdK1VtU3GNsVFyUIRV1jJqMbxcrtRg7Rv7qTUW4pylNap+7a5uZ3otLnk3b2Um5WlJWTb3vq5NyTk23+wvnn+9/wChf416PIu7/D/I5Od/yv73/wDJnKeOp/8AiiPF2SSP+Ee1jorknFjddFGST0wACTk4yc1zYqCWExTu/wCBV7dI1P6/U2w8m69JWf8AEh1f88unO/6a3fM3mfFT9pW58EeJvDHhzw34c8J+Vq3g/wAeeNNd8UfHDxt4x+AXhDw/pvhDxN8KPClrax63rfwd8Wrq994g1j4oaZbQosNnbaebdUurp57+whfgyLIsLmuDx+MxOLzGisJjMtwVLD5Xk8M3xWJq4/D5ziXP2M81y32dPD0cnqym4yqzl7SmowTUm+nMszq4GvhqFKjhJ+2oYuvOrjMfLA0aUMNWwFFR9osHi+adapjYKKahGKUnKTR4V8QP26PF/gjwF4j8d6T4W/ZZ+JS6EbK2svCXwy/bG8SeL/G/inXNVvEsNC8L+F9A0n9lSd7/AMQ67eTQQafYzz20ADz3F5eQWtlqU8WXEOByLhzKcXmmNxXFVNUKcvYUsVwjg8JDE4qSlHD4ZVp8V1HH21ZKE6lOlWdGm54iVOVGKlLs4bqYviLPMtyn2uQYOhjMZh6OLzF57Wr0cuwU60I4vMa9NZPSTpYKg3iJwqVqXtPdoKrGs5W9A/Y7/bk8Hftc/CC6+J1l4D8aeEbjSPGvinwDrOnad4d8a+PPDF1rXheezS81Lwb420bwRp6+JfDs630MMV/qOheHtVj1W31bT7jQUgtbXULn4zKMzhm+BhjadGpQjKU4clRxbvCco80ZRfvQly3i2otpv3Wkm/0Dj/g58CcT4vh3+2cvz6nRw+CxdDM8td8PiKGNw0cRSUoqpVhTrwi1GtTpV8RThLRYiUlJF74sftLfBH4aQ6Brvxv1L4uWun+NL/xdb+BtF8A/Bf8AaW8fWlvp/g3WIdF1G88Rx/BT4deKJ9H1q9uJ7fUILbxq2n3UEFytjounm603XrxvTPiy9c/GnwHrPwivNY0HXfFl14G+Kfw88aS/DqXxx4O+JXhvxbDqdl/aHh+80fVdA8f+GdG8daVZ3t1PDc6Vc+NdLtJkhFzdR6hPod1ozxgHV6j8INJ+IP7LXi/4cXeoaxpE3xZ+Aer+Atb17y9R1/VdJt/F3w61DQZZ9N0S5uwsraKmrSyadoVn9ljmeKGyyJGMoAPwN/YL8LfHzxh+2F/wTz8OT6Lovij4V/sQ/BH45eEtX+IHhD4JftA/CrTtAsfGngKTwb4c0n4j3nxu8LeD4tT+KmvatZwXmp+G/B2jGDT4jq+rXOq6sx1OSyAPqrwf/wAEv/2jPhv8Kv2EI/DPjH4Ma58Vv2PP2hvjn8WrrStd1/x5pfw48aeFfi54s1vXZNIg8SWHw51TxHpev6bayaVbpNJ4Xl02O4fU5Wa8ihtVlAP0Q/bl/Z5+I37Wn7Enxa/Z50HVPBnhv4jfEzwt4R046lq17r3/AAg2m65pni7wp4k1rF/Z6DqGuSaXjR7630ub+xGvJy9kby1tg9w6AHxx8Xv+Cbvxa+IPxh/bE8faL4o+F2naF+0D+wNYfsn+DdNvbvxPHe6L47srfQ4ofEXiG3tPBk9na+FLc6awtp9LudR1qNI7MposZLLEAcP8Q/8Agmf8cE8Q/s4fEjwzdfD74raj8Pv2Jfhv+yF8V/g54m+Ov7RHwP8ACuqSeDI9Olm8VeAviX8HbSPW9S0XVb+41RNY8J+N/CaaRqGk2trfHTzr9/ENOAPaPhT/AME8/EHgr44fsa/ELUPDXwL8P/D39nj4A/Fr4X6/8L/CmqfEfxXo9h4q8e+MrjxPpl14Am+Jek61q2qaHpTyFp9S8U69ZaxHeXFz/ZmmQ6fFaWYAPyX/AG7/AIRfHPwV41/4KHfsw/AuKx+KP/DcXxV+FHjWTwW3wM+P138VrHWZrzwt45x4X+Jem6NF8FX+GXh+WC+g1LX9d8UPeeHks9U0OLw62pJeTQgH6AfG7/gmX8Xtc+PXx3+JHh3SPhT8e/AP7SXhP4QaH4u+Hnxd+P8A+1D8FrHwPr/w58Dp4JM0lj8Fnv8ARPi34BubXT7TVk8P+KdP0/XbK9vJNK0O70+ytbvUr0A/XvSPhX4dm+BWl/A7xTomn/8ACLS/Cmx+FfiLw74d1fxXbaT/AMI6/g2Pwjq+iaDr1zq48Y22n/2cZrHS9Xn1keK4rXyL6bVxrKm9IB8Y/Af9iT4lfsZ65ovhz9lf4veHpv2eb3xNpM3iz4IfGHwHo9/rmgaBNfW6+IdS+H3xk8E2Hh7xdqeuWemRSR+GtH+J9r4rsftEkkd/4hijkNyoB4J8Vv8Agm/8ZPHXwy/4KYeEdK8TfCpdb/bE+OHwt+KPwuvNW1PxXDZeGNJ8F654GudTtfGt3b+BNQu9M1a403w7qkWnjw9aa7ayS6iLO5vba2ku7qgDi/25/wDgnd+2X+1b4z/af03Tvi94T1f4W/FnQfh5YfBjR/GHxv8Aj54H0D4KN4et/DMvjG0u/g98PPDuo+AviRd+MdX0Sa7XX/GP9ozafZ3QeG1W+igijAPXPi5/wT5+LPxF8e/tv+KdP8T/AA2t7H9pT9iXwh+zN4Ki1K+8TG90Lxt4f0rVLW417xMkPg+5htvDMl3fRT2txpNxqWr4to5ZNHjmZVQAzNK/4Ju/Eu9+Ivw01fxN448EaT4U0T/glN/wwD4xuvDN14hv/FMPxF1OBrHWfHHhixv/AAvo+naj4VsbYtPpV1qmq6Zr19dbI7zw/ZRKZmAOZ/Yl/wCCeXxj/Z++I37Puo/FbwD8BvEP/DOfhvxT4S8N/HPSf2gv2svFvjrVND17wPrHhS2h8F/BbxnNbfC34YSXcEthaeNbCCbU/DtzagXHhLRbDUbLS72AA9o8Wf8ABPbxd+1X4j8MeMf2+Pi5pXj+18J6vNrXhX4KfAvwlF8MPh54anW8kFpaX3xUme++OPjWA2SRTXgi8W+D9Ml1a4vZotAjtktkAB+pFAHzb+0T4P8Aih4p/wCFOp8K4L51s/jHpurfE+3034la78Kxqvw6tvhl8U9Oa11rxX4VLeJLjTYvFmo+DrgaXpFlqd5NdwWM76d9gtb28gAKnwd8D/Ffwx8Yfipq3i6HUNP+H+q/Dj4M6d4J0l/jl8Qvi/pUXjXSvFfx5ufiPqNs3xCtdL1fQNQvtF1b4ZW18sOlLpd9a2Ommx1O6vbbWLS2APIPHH7OOo/EbxN8WPHs3gS80CLR/gn8Y/hX8KvDeqeKl1HxN428U/Em/wBF1/xL451i7g8Vatpmh6Hd3vgfwZpfgHRr3V4dSht7jxVeeMNI0WM6JpcQB634F+D2lfDb4F2Gmab8NtWPjrWPAnwx0vx1pvgfxofB3i3XPEnhnQ9J0qMXXxA0/wAX6BLZ2+gSrLHeajpfiB5G8PQXthpFpq8T2uiXIB8N2H7Ffx58P/tA+MPifpup6rrL3/w78EeIbXw7efHb4v6J8KbjxWvxA+LV94q+D2j+NtO8YS/FvStT0+z8QaZ410j4xaz4Y1zT7zxt4g+IGs33giys/FUng3TgD7Tk8NfE6x+CHhPwf8Ovhqnw/wDif4h8C3XgqHxD4l+IcnxJi+BukXBG+fxB8RNevLrxn8RdQ8PwXf27w14e0uPUtL1nxXYWei6n4i0Xwkj+NIgDm/gh8EtV8IfHLxRfXXw9uvCfwv8AhX8AfgP+zj8FZNY8T6J4mPirR/h94h8eeJNR8U2Nnp9/Lc6LDZ21z8PNMEviTS7DxBd+INFv7i1hj0yw0/UrwA2P2hPDfx0+MFta+EvgpaXnwc8VeE/EUWt+G/2jPFtz4av9I0KVbTVdB1tPCXwzsdQ17VviG+u6JqWs+GrzSviHp/gnwzYwajZfEHw/rGta3ofhyzlAKnwVtPiv4D+FurfBPUv2ZrnwlZfDn4dahp3hTW/CPx20HW/DHxQ1iOzcfZNC8bznwh8UvD/jDxfqFzfaxrfjLxj4N0Saz1+6uNbfxTqOqSyanQB4D4U/Y4+JfiE/HnWfiPbnwhp3xb8XaX47tPBej/tFfG/4s+KoIdK+F3wW8Hx+ENW1fxve6F8PF1i+1f4O6fqz+LNY8MeOzpllqkfhrSLmG00TSNdAB9NfAnwx8SfDfwDv7DxJ4H1fwz4w8VfFv9orx/ceEI/GHhmDxD4b0b4p/tKfFv4oeHoJ/EmhX2v+Hn1a18P+K9H/ALSh03UL21S5lu7IXUrROGAPGP2pfg98afil8ENf8EeE/DHjbWNa1LxT8Jr+Cw1j4seFbrTHsvDvxh8C+JtYuLq2v4tJt5lsNI0e+v0Q30cxlgi+yx3N2ILOQAx/2zv2dPiB8aPGWr6r4W8DX2vm28D/AAW0Hwzqcf8Awpc2X9tJ8cde1zxbNdXfj6yvvFWgWfg7w7babrmrXvgm50LWdUtNSgsdEutd1S0n0eEA779nD4F/EX4b/tA/H3xD4r0O3i8Fa3pmtWfhPxE2p6Ncp4wn8dftWftZ/tC6klpodnf32paXZeEtI+N/h7wlqU3iODTZ9V1+z1W50awudDWHUXAIvir4G+L2uReN/iV4R+Eckt74X+C3jT4D/s+/CfTvFfgnwx4jsoPiRNo0XjL4javqEl3H4T8M2wu/Bfw7tPCnh2y8Ry6r4d+Huj+Kdclf/hMPEf8Awq6yAPo3wf4fb4FfBrwJ4P8AD/gvVfGl/wCDvB/gjweNF8CxeHLPUdbuPC3hDS/DSXqXnjLxL4V0aKKLTdBtoorvxF4htJPsdvp+mR3E161nZuAfGml/Cf8Aaf8Ahx8Wp/jxc/Djw98YfDFvdeNZvhl+zzofxR0vSvFnwB/4WPqmn6r8Qtc8J+KfGfhrw/4P+J/iPx1fxXt3eab4i8SeENP+FGkX+s/Dn4YeKfEHg3Ub+ecA+9tTtdZ13RPCXiH+xJdN8QaRcaf4kl8KX97pk9xDc3mg6jpWt+GrnUbK7u9Ilvrax1zULWC8trybSJtUgt5Fvzp8hvgAfIXw0/ZB/ZP+EvjrTviH8FfgF4k8P/FPSE1dND1bWdQ+NA0jRrrWdK1LR7+5vp/GHiS98J3VqLHUrpJTpyancrG7f2RC98LRwAe3eH/g58PfDvjLTtF/4R2w1SP/AIQR5NQfV0m1OHUdRttX021fUJLLUp7y1geceY7W9vElsnmsiRhFFAHqP/Cr/hj/ANE58Df+Eh4e/wDlbQAf8Kv+GP8A0TnwN/4SHh7/AOVtAB/wq/4Y/wDROfA3/hIeHv8A5W0AH/Cr/hj/ANE58Df+Eh4e/wDlbQAf8Kv+GP8A0TnwN/4SHh7/AOVtAB/wq/4Y/wDROfA3/hIeHv8A5W0AH/Cr/hj/ANE58Df+Eh4e/wDlbQAf8Kv+GP8A0TnwN/4SHh7/AOVtAB/wq/4Y/wDROfA3/hIeHv8A5W0AH/Cr/hj/ANE58Df+Eh4e/wDlbQAf8Kv+GP8A0TnwN/4SHh7/AOVtAB/wq/4Y/wDROfA3/hIeHv8A5W0AH/Cr/hj/ANE58Df+Eh4e/wDlbQAf8Kv+GP8A0TnwN/4SHh7/AOVtAB/wq/4Y/wDROfA3/hIeHv8A5W0AH/Cr/hj/ANE58Df+Eh4e/wDlbQAf8Kv+GP8A0TnwN/4SHh7/AOVtAB/wq/4Y/wDROfA3/hIeHv8A5W0AH/Cr/hj/ANE58Df+Eh4e/wDlbQAf8Kv+GP8A0TnwN/4SHh7/AOVtAB/wq/4Y/wDROfA3/hIeHv8A5W0AH/Cr/hj/ANE58Df+Eh4e/wDlbQAf8Kv+GP8A0TnwN/4SHh7/AOVtAB/wq/4Y/wDROfA3/hIeHv8A5W0AH/Cr/hj/ANE58Df+Eh4e/wDlbQAf8Kv+GP8A0TnwN/4SHh7/AOVtAB/wq/4Y/wDROfA3/hIeHv8A5W0AH/Cr/hj/ANE58Df+Eh4e/wDlbQAf8Kv+GP8A0TnwN/4SHh7/AOVtAB/wq/4Y/wDROfA3/hIeHv8A5W0AH/Cr/hj/ANE58Df+Eh4e/wDlbQAf8Kv+GP8A0TnwN/4SHh7/AOVtAB/wq/4Y/wDROfA3/hIeHv8A5W0AH/Cr/hj/ANE58Df+Eh4e/wDlbQAf8Kv+GP8A0TnwN/4SHh7/AOVtAB/wq/4Y/wDROfA3/hIeHv8A5W0AH/Cr/hj/ANE58Df+Eh4e/wDlbQAf8Kv+GP8A0TnwN/4SHh7/AOVtAB/wq/4Y/wDROfA3/hIeHv8A5W0AH/Cr/hj/ANE58Df+Eh4e/wDlbQAf8Kv+GP8A0TnwN/4SHh7/AOVtAB/wq/4Y/wDROfA3/hIeHv8A5W0AH/Cr/hj/ANE58Df+Eh4e/wDlbQAf8Kv+GP8A0TnwN/4SHh7/AOVtAB/wq/4Y/wDROfA3/hIeHv8A5W0AH/Cr/hj/ANE58Df+Eh4e/wDlbQAf8Kv+GP8A0TnwN/4SHh7/AOVtAB/wq/4Y/wDROfA3/hIeHv8A5W0AH/Cr/hj/ANE58Df+Eh4e/wDlbQAf8Kv+GP8A0TnwN/4SHh7/AOVtAE9r8Ofh3Y3Vte2PgLwbZ3lnPDdWl3a+FtCt7q1ureRZbe5tp4rBJYJ4JVWWGaN1kikCujhxuoA7KgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgD54aGG38Z/EO3t4o4YINb0CGGGFFjhhhj8A+EUjiijQBI440VVREAVVCqoAFfT5H/utb/r+/wD03TPHzH+LD/r2v/TlQv17J558Y/tL/sD/ALMn7UHgH4h+EvFXwz8FeFfEvxFk0y41f4v+EPh78PbX4t2t7Ya/pOtS6jYeMtR8K6jfjUNSXSxpWoXd01xNPpV3e2rMRJuHLXweHrwqRlThGVS16sIQVW6kpXU3Fu7tZt3dm9Xc2pV6lKUWpSaje0HKXJtJapPbVO3dLVnbeMv2Uvhb4o/Z80z9nzSraXwPpPhbRbO2+HPjHwXZ6RoHjP4beLtMR5dL+I/grUNK0+xh0LxhFqkk+ralf6Zb2ia1Lfa3ZarHNpuq6nayXLD03QVBXgopKnOKUZ05Rc2qkGlpO7u2rXfMm2pMmNWUZub97mfvKV3GUbyvGSb1TTVr3tZNXep9JW0Jt7a3t2nmuTBDFCbm5ZGubgxIEM9w8aRo00xG+VkjRC5JVFUba3/H+n/X3eZn/X5/193W55H8X/h14g+LWjSfDuXxFH4b+HHiOxu9P+JD6V9s/wCE18UaBdZt77wRompI9vb+ENL8Q2Uk9l4i8T27X/iI6RPeaV4bg0TVp7fxfbZ1IOonT5rQkrTtfnkru8U7+6pJ2lLWVm1G0rTLhJQvK3NJW5b/AAppy95rq1dWW1/ibSOM8JfBTxlpn7QeofFzxN4x8KXnhLw18M9U+E/wa8B+EvAs3hZ/CvhTxL4r8M+KfEZ8ValJ4k1i016+tX8FeEdB8NjQ9L8PaXZaJp11LcaTJqN7NMsQpSVZ1JSi4xpunRhCDjyxlNSlzvnlzP3YqPKopLmuryY3OPs+RRd3JSlJyvdxU0rKytfmbd23dvWyRt/FX4f/ABO+LVj4j+H0nirwv4E+F3iPTrjw94muNJ0VvF/xF8W+F9XsJrTxDpVlceI7az8IfD439tc3OkT3F14d+Ictxpk093Yvo+qvbTQVUhOopQ5oxpyXLK0eacovm5knJqMLptaxno5O6lZtQlGFpWcpJpx15Ypptpu13K26V46tpuSV35T8O/2bPix+z+2j+Ef2f/jP4dsvgnZ6292vwp+K3wyl8aah4Y0zV9cv9c8Vx+C/iN4a8beAvEFxPqN7qF7eWf8Awn8Hi6+TUrqS8vteuoEeylyp0KlG0KNWPsr/AMOpT5nFOUpS5JxnCV223+853du8nu7dSE7upBubXxQlyp20XNFxkui+G3o7XfUfHH4E+O/id8Wvg58QvBvjnQ/BkPw58H/GPw7qjanZ/Ea8vtTm+IWpfCC602Owj+HnxO+FGpQ21rH4C1GTULi68WvbLJJp0A8Pag07ahYVVoznUpzjNR5IVYu6qXfPKi1bkqU2rey195p3S5W1zipzjCFSLi5czg18OnK6l/ijPe6tZX3u7RSlq/BT4KeN/hp4++KPjXxl8R7bxv8A8J3oPw10XTLCxtPiTZ2mgjwTc/EGe9uDH8Q/i/8AFy/muNZPi+2Ek9prVnbiLT4YG05TGtw7pUpU51JSnz88aaWlTTkdVv8AiVaj151s1sk02lIUpxlGMVG1nLX3dbuP8sI7cq3u9XqcT4i/Y38F3ur6v4m0y28CeM/FvijUZLrxV4o/aZ8D+Jf2h7+XTLPWL7WPCvhrwjban8UfBWn+BPDnhKfU9Qt9P0jRrVrO6tZYHv4pdUGo6pdy8NC7klCcpP3pV4SruylJxjFOpFQjHmdlHTW75pXk6VWSVryilsqclTXS7doycnK2rbvur2bvn/AD9ka7+Anii11zRr79n+K2k1v4r6rr134K/ZetPAvj/VtP+JnjjxD4/fwjbfEBfi14juNJ8I+Fte1ezt9D0OPR7mI+HdD0HR72WW4tIdUVUMN7CV06OrqNuNDkm1Oc6nLz+0laEZSVo2ekYK943ZOrzxaftNoJc1VyinBKPNy8iu5Jau+jvq7u/wBs11GJy3jf/kS/Fn/YA1f/ANIbiubF/wC54v8A68Vf/Sahthv49L/r5D/0o8Q/bT8Tf8Ij498D62dZ/sH7J+z58fyurnxRB4RW0km/aA/YUtELeIbv48/s6WmneabjyVaf4teGnuXkXT7c6xPcr4Vv9uE6Pt8ozWn7NVk8/wCHG6bo+35lHJuObr2P9mZt7Tu19Rq2XM3KEVOqsc9qeyxmEmpuD/s7M1Gam6bT/tHILPnWMwTjsnd4iK2VpNRv+W/jr4m6r8Z/iFa/Afwd4rg8WeKptT8P+B/Bs2veK/FHivwV8LfEnibTNM1HxL8cfEGqeKvjh8a9P/4SLTrHxnaeFfhfo3h/4m6lc6rNp/iDRvBlzPqfi7W/I/lfxs4U498V/EXIOAsqqyyfgbIMVl3EXGWMy+g8NjsxwuGksVQy6pXwOVZOsNSr4nBOGKU6U8RLDxlRjClQrYitH9Z4GzDhrhTg7F8SY+pHE5xmf1rAZbha9WdRKfPVpQhRhiMwxynCMavt5zjUjB1J0ebmnRbl+2v7D+laLo/7F/7KkGhafFp9nffAP4SeIbhUgtIri/1vxR4H0bxN4l8Qau9nb20V/wCIfFHiDVtS8ReJ9ZeIXmt+I9R1XXNRlm1G8up3/e81yvB5Jm2a5Nl9KNHBZVmWOy7B0o89qeGweMxeHoxvOdSbtToxvKpUnUk7ynUnOU5P4TA4uvmGBwWOxU+fEYzCYXE1pWik6taiqk2owjCEY80vdjCMYRjaMYRjFI9rfRvEmh3N9L4Sl0a40/Ur261K40XXGvrWOy1K+ma41G60zUrCC8eODUbt5dRu7G5sJ/8AiZXF5c295FHObdfPOo5/xRol/D4M+Imva/eW17rd14E8RaegsIJbfTNL02PSdVuBY6fHPLNcSPcTnz9Qv7iQS3skdoBb21ta21qoB2ngz/kTfCf/AGLegf8Aprt6AOkoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgDhn/5Kda/9iNf/APqRafQBzXx0tfEV78MfEFt4W8ZWnw81mT7J/Z/xAvPF0HhKLwZqC3IbSPEAudQ8J+MNE137LrA02Kfwf4n0afwx4ptJrnQ9bMlncPaygHwxpmv6p8HNb0nxdceNfhTrun+Iv2oPtafD/wCGPx9msH8S6/8AtRfHjwl8LtL8TeOLa3+GcV98RJfhV4b8bm40jwbcXNn4bvbyyk1bVHutZ0v4f6zoIAzxn428afEzxl+15408bftE/Hf4HfBb9l/4reC/gj4d8G/s0fDjT/F3jrxB4guvhl8F/iLrPxJ8WQ2nwb+N3xC8Zvfaz8atE8O6J4R8GeH9O8J6F4U8O6h4h8c6Zrllf6xf2QB4f8Tf22/HOnfBfx9qv7PXxb8QfGjxFpn/AATA/aH/AGoPhx8a/Gdl4U+GXhnxBrPw88c2fhqLx3r/AMKZf2dLnULb4ieHraSXVdL064s9J+G/iG+0ubwpq/w20TT9fbxjpwB+i/hjxN+0frfwt8J+IvHHw3+DGla7JpP9reIv7L/ac+JVnoNppy6da3NlrB8SWv7MfheeWW/t3vLzW9MudCsdK0CSKCOy1PV4Xe7hAPmD9ifxn8WvjL8MvhD45174UeH9b1Xwh4ihk1/xj8VP2g/iRf8AxA8NP8QfA1h401nXPCnhS9+DPiCyl1Gx8J/E2x8Lad4X1bxP4enttOF/4evvEFlFZJLcgHv1j4vudH+Lfx/1vWru20HS/Beh6TqPjvxN4V8Y6Tc+HJPBWk2eu6x4G8S694e8XXT+Hfh/4y0bT5fiH4Y+LDwtdeIde0DwT8HfF91q9j4Tv9D8DaQARfsR6Z4x8N/s5/s3aB4k0f4k2KR/szfBO1u7HxZZ/C3TdC8I+ItA8FaHbanpK6doX2Dx7D4m8Rvq8jahB4htNS0mytfCyxTzeH/E0+owauAfG0+r/GC78A/GT9pm2+L3jmz+JOmeD/jp4V0TW7XVf2RY9O8P+Fvhr8SPi3d+GtF0fwz4l/Z/1nxBZ2H2iz06XxFaT6vNqvi2TRvD8mu315Np2hvAAfoD468eeL/B/wAGvAfiDTvDd18VfFOrWngfSoNDi8aTeA/FnjLxZ4gtLCxtV0t/DfhhtIea5uLq717xO0yaB4T8MeG7LW/F2ovY+HdGvJLYA+UPGPi/4paR4v0v4n/DPVfAmuT/AAq/Zu+Nl1p/h1rr4ifF2G4i+Kvxm+D0Xgex8Q+Mdd8deEPGF54g16++DHjSytbC98P2i6DdaL4i8KW099JprrbAH0D+0ff23jGaD4H/ABA/s3wj8IPHtpqVn471bUPiH4J8O+Kfil4XsLXTLrxD8N/Bul6j4q0m7sfCPiaHVk8M/FHxVNcL4ng8My634S8MeF7SXxPovxi0UAs/ADxv8RNQ1/xH4Iif4cePvhL4Iu9U0LSPiT4f+J+n6x8RvDEthpXhDVvDHw2+JHgfQNG1vRr7xDJ4a8T2msaf4x03xrBd6n4dS0k8T+DtP1mXT9d10A+Sf2g/iTNPrH7W4EGpSW9p+y98AtW1W0uPgt8f9Fs/Gmkaz8VP2lI9T8IeNNGudXtYdM0XUvD3hRvCmpa7Fb6N4h1XRfEXijR7TxFBLpmmxaaAfe8Xjbxg3w68R3XgDRPEfxB8bWfiPWtB0W08Z+B9e+EGmQ6jf3cuq6ZLeweL9G8MXN58PPBunatY6efE3hy31y91nT9Mm02xvdd8dR6wzAHxFp/xH8TfDvTP2f3+Efwt+KfxY8eaL8U/jl+zxq2o/ELxJ8NPDNh8XvFN1oXjz4wftC6tZ+Ik+JHiG28P+I7n4g/AvWJvDN1Hpl14GsvF+nax8HJT4T8J6lL8QfD4B9y/EnVta0TwzF8QpvFXivwNpdvY+HI9f0KW5+Gdtp/haPUdVitb/X/EusX3gT4gw2Vv4dGrRTeNtWtvEE/hPRvDmi3uvWcrwW1/fXYB4F+xXoXjDSPhz4T+GureLPE15pX7M2i+C/gTPqek3fgu4+GPxG8Y/Dz4ZaT4P8fxeFZV+E3hPxbdeFfh74rF34VS7udQhlfxx4e1vRtSEt5oGqQSgHhPwW+PHxmuviHqMeqTeNpNGa30rwu1x4g0G3+Imm3l94q/bB+OPwl8NeONJ0Hw18W9J1TRfDekQ6f4S8NeKdUv9Mh1TTdGs28T6rocXhvS9e8SgA+zP2aNJv8AwT8G7Ua5rPgu18LWX9t6ho1n4f8AB/8AwhGleFdLh1jXLjXDqM8/izWrG8t575LzWnvhb6Utktzdpdm7VUugAfRVnd2moWlrf6fdW99Y3tvBd2V7ZzxXNpd2lzEs1tdWtzC7w3FvcQsssE8TvFLEyyRuyEOQD5E/as8T6fpF98L9B8Y+JdW8IfDjX9Vk1HWfE2meHx4gay8f+EPGfw2174S2lvYWnhzWtZbVbjxSh1bTZNMlt0tv7Eur7UoptMt7yeIA+Xf2W9U+MnjX43yat4w1c+GPGmuaf4M+JXj60mF7dxrqNh+z3+ywPG3wg8W+H9B1DwToeoXtjpXxs0m88O6/eaHBf+DvEuhaJraaVrOk6p4j0i/APU/2gPjX4b8TeNNU8BXvjzxV8N/B3w3vPivD4r8ceCUtx40tfiD8P/AX7OnxC8IX/wAO759E1a61PV4rj4vv4Hm8GaRa6rB491ifV/hR4g0bW7XVdY8HSgHrfwS8X+KdDtPF/gb4lTeLIPjJqvhnUf2h9bttUi8RfETw54OsPiJ4h8TnTfhL4bbQ72W21G4+B8GkaV4IvPCHhCTT18X2EeheP/D6Sa74y8Rx2YB8A/FBdLuPH3hb4ZeKtG+G2sa/rfjafxnr9j4vvfDfjr9oDSb/AF/9qb9g/wAD/C5vjF4mtrPXLbwLbeMZ/jZ4l8U6p8JfC/hix+Hdx8Jf+EV+Dem2tv4RsddvJgD688C6vd+Hf2L7rxHp2maRpVv4c8QfGSDUPB3w38FeDfCXhfxBpn/C9fH2hanax+D7D4WfEm3WfUbR7rVr6w0Hwlf6z4s8R3F6b4XeqaxeXTAHj/wN8P8Ai9fHXw98Iaj44+OMPiweB7/wFYfFjxD4W8V6T4l0b4V/DvxZe+LPDHhiDUP2gf2I9E07xV4j8WafdeHNA+MGvWviS08SfEK40S18a6hp8Umi+G7PTAD0T9tk+KdTtvEdmmo/EXS/D978LvG3wX8M+FPD/hW617wj8WfiX8e7fTPCui2Piy3GqQ6XJa6RJBp3hjw3eatbT6fpN14s8ea5rsFja6VomvUAfQHwd+JieOPJ1PwVYfFjXfB3ibwPDrfg3WPGnhjwJ4Q+GmktoU0GnWWiaZcaHoOl+NLbUfGSap9uc6hoev6DYaZ4evDp7aJeG20fVgD8dPhv8YvG13pvj7Qb6fxxr0fxD1Twz4p+JVp4XSw8Ta9/wkGrXPwS+KnxT8X/AAn0T4aeNPFHiTwR5/hf9onx7oerXvjK2tNV8K/CT4dfDez8LxXPxB8K6p4DjAP0Q+HPjrRP+GLdZ+KvxC8ceJPBt5421ib4kJceEtI1n4J+IbTxN4i17SfFPwy+GXw20jxxcXh1W81m3PhDwPotjL/augfFa9vbuzudHvbHxHqfh8gHj/iL4n/EbwN+074/1fR/Ffi3xZ4uPwp/YEsvEPhvS/2bvH2q63rXw+sP2p/jVo/7QGpaN4f0nwlL4lh07wt4K8b3niOHUrHTp3E2paNBax6he2kNqwB9AftWfFHXPBnh/wARePfgz488QQfFXQ/2c/jP4/tPhhNbXeq2T+F/AvhvTPiPpvjbxJ8GtX08a8dfh8Taf4a+EMdlpsXh/wAYT6X8W9bhvbfUNZ8P+F5tHAPEPgX8UfiFP+1D8RNC8Na38Sde0Hxl+2Mln8TE8Q/sxfEzwNpdr4KsP+Cafw+1jT9W1bxX4m8EaNp/gq+HxA8L+A9KtNL1C8tNW1W3udPktbKbTvEFpcygHG/HLxbqHhr4ofDfR/iP8Sfjpq2leI/2g/GPhvwta6P8J/2jvD8vhbxfPpnxm8feCPHHg7xzZfAzX9J12PRbrSdA+CPhL4c+F9B8V6Nqvg3XNX8UeJvGXjjSdRk0y0APtX9jLXvH3iL4c+J9V+Jd/wDEy58U6j4yGqS6f8S/h18Rvh1deG9Lv/B3hB9I8M6NoHxA0WOaM6TaRKnjI+GfGPxD8HP8S38b3vhvxwdJu7Xw1pwB9b288F3BBdWs8VzbXMUU9vc28iTQTwTIJIZ4Jo2eOWKWMh4pEZkdCGVmU7iAfmT/AMFFPEfiKx1H4G+H4tV1nRPDl3rV1q1rqfg7xF4J0DxnZfEDU/H3wn+C/h7xJaX/AMQPFHhHw5BB8P8ARfjb4l8ZeH7cahqd7cfEax8EeIbuy0XQvCmq+JFAPJvgv8WfFfxa+Pnw1Piez17w/J40vvDHxV1q80z4S/FK+8D6ponhX4eeCrfTNE+HfiaW5fS/C2k3nxm+KXiRPiJ481WK5j1bUPDVp4BlQeFoPC3i68APWf2wfFNtf/Db9vPwz4H+KHjG/MP7OXjiz8beH7HSrj4meEfDfxE1z4VeJdJ0fwdpZ0zTdVf4UatP4Y0S01nxn4c1fUNN0y4fxl4P8c6fp1vqOqeJNSvgD3v4IfFm58ap8cdB8ea14ll8F6brOj3vww+JF18NPiD8IPCev/BLxD8F/hFfrrug/EWXStB8OzXsPjzX/Hmn6feeH/Edt4ls7Kxs760toLWztNYkAPgr4rfGb4gvoWg+D7/4kfEbxL8OoNR/4Jn/ABB+GHjWz+BXij4par420rVv23T4SXxt4j8d/D7wNJoU+r+PfDPwi8EfGGy8N3mn6Tr134h8fal4W0rTri2m8P6JCAfWL+LvjN4w/Z/8IeK9Y8X/ABJ8JeJo/jh8eNK+3aZ8BfjDF4l1jwLpXxD+PPgf4Uah4q+Ffg3wJqPjex0K08IweC/Hk2k39n4OPjDUtL8O2l58QPDq6yZroA+Q/gb8R/EOu674Ug8AeKP2j49EH7RHj7T/AI5ala/CL9onU9F1vxB8OvjzY+E4tSeWD4Nrp/wo1744adDofxF+JHg+80jxL8PovBl78TdM1/xN8KvF32HxtrAB9w/HHxpp+n/tF+BvCXiPxB41g8LX/wANbi1Ph/wd4u+Mvhu5vPiH4l8d2Vz4CbyPg9a3ev6lcX2i/D34hr5txCdGs9M07VbbWrmGDULWC5APQfgxb+C9P+JXjvTfBvh230PU08H+DNT+IF54j0T4zT/E7xEdR1zxpbfD2/1X4gfFXQdHuvFeg2Q0j4hW8Gni71vUNH1Oaeea502DUUhugD6RsNS03VoJLrStQstStor3U9NluLC7t7yCPUtH1K80fWNPkmt5ZY0vdJ1WwvdL1O0ZhcWOpWt5YXccd3bzx0AeBftc+LoPAH7Lf7QPjgvoo1Twd8IviT4v8Lw6/N5Wm3fi/wAJeCfEXinw1azRrqujTXqvqmi2ry6fb6laS3tqtxbG5ihklloA/LltS07wr4s+NU/xA8QRf8IJpf7YHwO8H6yfiVqvw2Pg7w18NNa+C/7MuseKEaeD4x6sfDWnW9xqniTxINQ0izu9B0zVbnVPEWoX1tq39v8AlAH3x8c/HHhGz+OXwcurnUfHGlt4C0TxT471zxpo3gLR7jwj4a8CXVna3Gs6hL8QPGPgjVdHudM8QaVol/pvjLTfAesXvi/TfCcd1rRt9Bkj07xXCAeT/sh2Gv8Ah3Wvgz4e1/xFa+Ndf+GHwi/4Z/8AiPqmjzXV2kPxFuPhl8Bfin/wkE+q6x8F/hJdeIfD2oeHdKsL6LXP7X8c61cX3jbwsxWKOfxprUIBW+O9p420DW/E/iX4w/GL4naT4L8A2eofEf8AZ48PaPonwE1P4o+Lvi34GuptIh/4R/UrL4WWOkW+reNX8a6T4K+Fvwfkm1bxR8QtL1TWv+Et1m2jvfEXw/sgD6o+Adn8VPCPg/x5rP7QniLWv7Zi8Q3Wo3mteKfFfgG98LN4X0jwxoqw+MNDtvC3hfwvYfDTS73T7Y/8JZ4Fv7nV9P8ADXi7S/FF/pvi7xPpl+3xG1oA+jYZYbiGKe3ljngmjSWGaF1khmhkUPHLFIjMkkciEOjqxVlIZWIO4gHh3x48ceLvBvhKRvDUmh+FYdQvvDeiaj8VPF/iPwTo3h3wTH4r8TWPhC0utH0/xTrVja+KfHf9qazpK+FPC2uNpXhjWr65jtTrupa+mmfD7WAD57+C1xqnwm8TeEPgd+z6fhz8QfgrYaZpN7qui+J/jrot58cvAS6jrOqJ47+IOnx6Na+NT8TPC2q63JY+I9bg8WapofiYfELxb4nk03xde+HJfDvgrSADb+NfjO/j+OnwDstPudb0+dPGPxV0y31nTfgt8YrrW9I0n/hSviu3v7MahYz/ANheP9BvvE9ppevS2T6Nf+FpdR0zwFrjWE1/4d07X5gDM/ZO8Vaz4w/Zc8HHQtc13wlrviL9mb4YeMdEYfAz4jL4O8D+J/F/gPUNSvvEGh6t4ngN98aNeuvEt2/iHxJpknjnWPE+uzRWerXt3DN4nGsXIB5xZa3Y3/xN0e7uv2gvjZafF7Q7m++C9/Ja/DOLUrj7Nd6N4E+MviXwnPYD9hbw3p+v6yvgVdC8Z6BdavA8nhn+19QXRryKy1jxhZX4B7t4t8X/ABK8AfDH9l2x0LxT448W6/4y+Inw/wDCXi3XfGnhDwTpPxN8TaDf+BvG3iTXINV8N3Vr4H8L+FPFly2g29vMHtbFdEnjlFzbandRXMF2AfH/AIS8daP4k/acmtdN1H4vaV8RPip8b/h38WfAOhxax8MvDvijSvhrF8I/GvwO+KniHxxZ2XhrxXpHiT4SXEP7Letwaj4evG1XQpfE3iX4G+J/D+seGPi5rPwz8SacAfr8ZYVlS3MsYnkjlljhLqJZIYXhjmlSMtvaOF54EldQVjeaFXYNIhYAkoAKACgAoA8E8RwHQvG+uTXzCC08WSaXqGl3chC282oWWj2mjXuliZiFW9jg0q2vobZiHubaeeW2Mv2W+EX0GSV6cYVqEpKM3NVIXdudNRhJK+7XKny72bdmlKR5eYUptxqRTcVFRk0r296bTfk777J2V7sfX0B5YUAFABQAUAFABQAUAFABQAUAFABQBz+u251y2l8I2TCbVPEMf9nrbRkNLb6fcyeRqWq3KglreysLR5JpLmQBDN5FpD5t7cWtu/n5jXp0cJXjKS56kHThC/vPn503beyWrb0Tsm7tX6sHSnOtBpPlhJSlK2iSk7avS7tte++9tbvxh+EXxL8ZfED4dfEn4W/EvwX4C17wT4Q+J/gm8t/HXwp134maRrWjfEXXPhLrtxNbWuhfGD4T3ej6jpN58LNPSGeTUNTtrq11G9jeyhmihuK4slzrAZdgcyy/MMtxOPo47FZbi4ywuZU8vqUauX0c1opSdXLMxjVhWhmc20o05QlCL5pJtGuZ5XXx1bC18PjKeFnh6WLov2mFeJjUhiamEqOyWKw7g4Swqs7yuptWTjd+VeH/ANnv9pPwlc+Ir3wp8Xv2U/DV54t1qfxL4svPD/7FXjnR7rxR4kuY7eK58ReJbjTv20babXtcuYrWCG41fVXudRnhjjhmuniXae6Od8LQdRx4bzWLqy5qjXEmBTnLl5FJ24U3UbJPdJRs/di1wyyXNpKEZZ1QlGnFQgpZZXajFS5uVXzd2XNdtdW5X+KTPpT4KfDr/hTvwX+EXwi/tn/hIv8AhV3wz8AfDr/hIf7O/sn+3f8AhCvCek+Gv7Z/sn7fqf8AZf8Aan9mfbf7O/tG++xed9l+33Xl/aG+ezbH/wBqZtmmZ+y9h/aOYY3H+w9p7X2P1rFYjEey9ryU/aez9tye05Ic/LzckeblXu4LDfU8Fg8Hz+0+q4XD4b2nLye09hSjS5+Tmlyc/LzcvNLlvbmla56ZXnnUcf8AEL/knvjz/sT/ABP/AOmPVKALngz/AJE3wn/2Legf+mu3oA6SgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKAOGf8A5Kda/wDYjX//AKkWn0AX/GEtrDpdu9546n8AxNqVlAmtW8/hK3e6uboy2dpo/meL9F1vTWbULmeHyIYLVNSmu4raC1uNj3MEoB4V8QfB3hrxtpfhvQtd/aQ1Jba0+K3wR8V2tlqF38Ghb634g+H3xk8B/Ebw54VK6d4M0TUXuPFWseF9P0K3h07UYtRZ7+NrOG6m2WUoBT+IP7IngXxl8Sde+L3hL4g/GL4HfELxppuhaL8SfEXwU8dR+GovibpPhu1k0/w6njnw7ruieKvC99rWg6TPdaFo3jrTNE0z4jaboU0Ok2PjGGz03w9HaAGH4d/YI/Zf8LaXp/hvSfBWqf8ACJWH7Nfjn9ks+Er7xf4o1LSb74I/ELxHbeJfGWhajfX+p3HiK51TWtRgfzNf/txNTtrW6ureylg/0eSMA73TP2ddPtfh1afB7XviL8QvHXw3WGG11zS/G+tQ6z4l8ZaPFALJvBPi7xWlraS3/wAPbyxhtLbWPDFhp2n33iKGO/0vxZ4i1jwtrXinw1egGDffsz6vP4z8Ra5pXx6+Jfhvwl4r+Lngz4z+Ifh/oujfC37Ff+JfB974B1GHRV8Tap8P9U8S2vhXX7r4faLD4j02DUV1O60e51vS9O1vT2vI7yEAt+Mf2XdF8Uj4gppfxO+I3geH4ofGrw18bfHdt4Zs/hNf2euaj4a+E3w/+F1n4IudP8b/AAr8YadceBdQi+G3hXxhrVjqVlf+IdQ8WW97E/iWPwhdDwnGAemeD/hf/wAIh4w8ReMz8QfH3iS+8VaD4c0jxDpfiC88Lr4av9V8N/bYLPxtFoPh/wAJaBY6T4xv9MuYNB17U9ESwstb0PSvDFlqul3D6BoM8AB5dH+zVe2/wc8Z/B2z+M/juz0nxdYfFaxeaHQvhpJaacnxO1rxdrN+kFpd+CLnU57XTJ/FVzDBHNr/ANtuIIUB1KGZxMgB6nrvwb+HHjHSvAOk+O/C+meM4Ph1PZ33hqLX4GurGDVrTQrjQF1O60hpDpmoymxuZ/Lg1O1u7W2uHS8toUvobe6UA8LP7G/g7T9DsPDfhDxTqHgXQL/4m6N8RPiL4e8K+FfAdloXjTT9F8fp8TtP+HWk2svhue8+HPgfT/Gwv9U0zTvCGo215HH4o+JGqarf6p8RPFmofEWIA9v8Z/C5PF/jrwF49g8YeIvC2qeAtI8c6Rp//CP23hmc30fjV/CX243x8S+HvEVsIrWPwvGIY7eziuHmuBIb1I4Xt5QC74A+HX/CBXvxI1E+LPEHivUPiP41tfG+o3viS38NRS6de2nw6+H/AMPYNNsIfDHh/wANWjaaun+AbDUD9otpNQbUL3UQ9+1r9jt4gDgfEX7PekeKfBvxj0LWfEmpXfij43WVlp/jLxvJZWjXVnpmmWYstC8NeFtLLmPRfBvhiObVLjw54bkvL02+ra34m8SaxqereKtd8S65egHqZ1ey8daDrcXw/wDHWkpNa6zq/hPUfEegNo3iWfw5reg6vPovi3SoYJJ7rSrPxh4fuba905bbXrTUbPQvEUETeI/C+rWlveaBcAHht/8ABfwH8Mr34c/EDWfibP4P+EP7OukeOfG39g+K73wvY+FbDxhqfhjxRo3iP41eO/iTrdvba/PqH/CN+M/iVf8AjXU/FGv3FprWveJ7/wAb6zfwajaXb3QB6j8Rfh5qPxR0jVfCOq+NtR0TwD4g06TTde0rwfY2um+JvEOj6haXWn634e1Dxpfz6zLpvh7X9NvLu2ubjwbpXhvx5YS/ZL3w58QNMuIJTKAedfCz9m+T4H6p4e0j4XfF74haP8FvD8GoW9h8Atch8G+LPCWjQT2sos7Twr4413wtcfFjStMt9TubrWZtK1vx74is45fsOjeG00DwzaHRZQDsvCnwR+GXgdda1D4dWkng/XNa0q98N3vi7Rr6PUtYVZfG3i7xddssfiSLxBoMmpL4w8X+Jb+Q3ujXKx3N4NHa3Gl2Gl6ZAAUz8OfB2i/Aq0+BfxK8XWfiLSfF/hS9+E+ua14vtPBdnN8QNT8Z6Rqmma5B/wAI5f6VL4TvdQ8VG+1WeDwiNDv9Imhkl0x9Gv8ATY57dwD0zwj4V8L/AA58F+F/A3hLTbbw/wCDvAvhnRPCvhrSIp53s9E8L+GdJttI0XTY7i9uJ7hrbTNLsILZJ7u4lnaKESXNxJKJJGAPnfxv4f8AgL+1D4lg8P6F8Z/Dms+MPhHrvhPVPEugfD7xd8OPE2u6NpFr468P+L7vwn4y0iS08Rax4V0fx7qvgLRbPVdR09vDvi5rbQzY+G/E2nQyeI4LsAyrP9lvwN8ObP4Uv4Y+JGrfC+y8D6tFYX50W28EabZeO5/EvxF+CmsaX4QvJdf0TU5NM0+4uPhL4I+FPhLRNGuk1C2+G80Hw90m6kv4PDOq2gBr/Ev4AeEfjb8QdC8Tt8b/AB1pPj34LeJLrVPDS+EX+B2rXPw0uvFnhrTVudIufDPjH4SeN9Mb+2rO10fxPpGoeNNJ1Txdpd1DZ6p4O8Q6Zp1zeQTgHf8Awz8I6P4H03xP4Qh+N3jH4h+MPFfiLxR4j1bxT408SeA9W8dR6xa6f4Y0XVItI0LQfCmg+EdB0zwhaN4atk8PaR4KtNC0qe+sbjVdMkv9XlnuQDDuP2ZvhzfyaRp+oWSy+FNA14eKrPQo/wC0Z9b8R+J5LzR9Zn134mfEDXNW17xn48v7fxP4b8L+LtKnfV9LkTxJ4a8J6r4jk8QX3h3wpc2IA/QPhnovif8AZ9Hw20j4q3XxB8Na22rppfxGvZ/D/jO+vvCl5461HWrHTJdWiE2meL7vQtEeLwdH4p186vqmvT6cnibx5J4i8RXPiCS8AKi/CX4b/CrxF4b+KGq+OdP8LWnh27fQWuda0X4M+DdD1G68d3Nh4R0TRb3WdB8B+D7r7dq3iPUdE0/w/YnVGbVPEFzp2j2tlc315bxMAejaz8OIvFHjzwv4x8U6zPqdh4A1O5174f8AhO0tRpuk6V4ovfDOo+F7nxZ4huEurm98V63Z6Tr3ifTdAt5ZbDwrpdlrs17c+F9Q8Y6Z4c8X2gB4t4C+Ful/Ce00WPTP2hpJfDvwv0vxL8IfDmmeIIfAH9maPrnxF8Q+CH8JaD43urG30ifWPEmk6inhLSPC2kQ3Ph/XNafV7OzuJLy81tPOAOevP2avgL8NLu0n8R+JvC+jeDb7wndfDfwX4a+Iw8Mz2Vh4luPhd8KvA8V5oGreI7m3OoapYfDv9nvw/Jp+kRQPrEQg8fa7Nq8+mXgsLAAtWfgz9l+x+B/hn4E6P8TPhlo+nef8HNNstV8PeJ/Behah4s8eeDde8Aw+AL7UrbQ9WsH8Qar4p8R+FfC2j3Wjx3JvvE1tNH4Qtboi7tlAB3+s/s9rcaHeXnhr4ieJvDHxZuPG7/EiP4wrZ6Rq+qnxXNolp4Vu9O1DwrqNsfDeoeALvwXZWngaTwL9lt7W30O00vxJp2qWvxY03TPiZEAd9L8LNHl+NVh8cDquqrr1j8MdX+Fi6IsHh8aFNo+qeLtD8Wtqs1yNC/4SVtVtrzRktLeBvELeH47O5upE0JdTeTUWALngr4fWvgvxL8YfElvqc99L8WviFpfxBvbWa3jhj0a6034RfCr4VpptrIkjtdwTWfwytdYa4mEci3Wp3NoI2ht4pXAOdk+CnhrXfE3ibxb8RLu7+IWp+I/Cms+AIdL1yK1i8H+FvAHiA2J8TeE/Cfhm1iEVrbeL5dM0+98X61rd5rfivXLm00+wl1+HwtpXhnwzYgC+Fvg//Y/w68X/AAs8XfETx58VPC3iWDXdEs5/iDfaNfeKtE8Da3oMOiv4Lk8WaToej6v4sh0+JtQNn4t8Zza18QL6K8RvFXizXNWgl1mYA7bwN4L0X4e+GbXwtoAl+wW9/r+rSSzx2EM13q3ibxFq3ijX9Rlt9LsdN0y1k1PXNZ1HUHtNM0+y0y1a4Ntp9jb2ccNuoBw3xK+DOlfEvWNO8QX+pyafrXhjTdLh8E39vZmb+xdVsPij8OfitPc6pbvepDr2k6p4n+EXw3F7pCrpt6mlaVrlnZa9b3Gti+swDhPBf7Jfwo8G+I/hr4kTQPDeqXnw5+Fll8ObRrzwX4aE2q6pZa14M1yD4g310LN5U8VRah4PtbyC8izcwXt1dXqXpuVjcAHT3/7P/hvUvHXibxZea5r0mk+MPGngX4j+KfCAvJF03W/Gnw70Tw7ovgx7q8MjXNt4W0ZvCfh3xF/wiWlixtdU8W2D6j4ivdT0S+1Tw3MAXNF+DDaPpnxc8Ht451u9+HPxHg1VPD3gy50rw1O3wvfxRb+IB44tPCesX2lX7at4e1vUtZOuaH4Z8YWGt6b4Quvtnh7RC3w9Og+CdNAIrr4F6RL8F/hj8FoPEOqrpXwy1L9ne+03Xbu10ybV9Vj+AXxC+G3jnR49TgsbXStMjn8TS/Dy00/VptOsrO0s11C7utN06NIbezAB6D458Lan4y0Kfw7ZeMtf8F2eogwaxq3hFrWy8XSaczKbiw0LxBdwXo8MyajCJbG81rTrA+JrKyuJLrwjrfh/xNBpviS3APOJ/wBn/wAO6Vqvw41j4YeJPE3whn+HuleF/Bx07wS+iTeG/Gnwu8NXizWPw18ceHvFGi+IbDU9LsoJNQTw34o09dN+IfhG51TXJfDPjC00/XfGOlamAT+IvgRoXizxnafEDWde1i38Vab4w8H+I9K1bQ7fR7JrbRfAmi/EPSvCXgy5ttS07W7W/wBIsbj4n+Otevb+aJdevdZ8QXiRanaaHZ6DolmAd1onga30bxr4n8dSa/r2sar4o8NeC/Ct1bamPD6abYaZ4L1Xx7q2mSabDpPh/SrkXd7dePtW/tSW/u72KSG30qOxgs2ivZLgAyfhF8H/AAD8DPB8/gb4caLbaHoF14t8e+N7mztLLS7CCXxL8RPG+vePPFd8ljo+naXplml74g8QahcRW1hYW1tBA8UKxsyGVgCz8Xvh1ZfF74TfE74U6hqEuk2vxI+H/jfwDPrVvaw3d3o0PjLwrrfhe51aztp3SOa6srbWJpooXljSYqbeSVYpJGIBjfFD4V3nxN1j4W3D+ONW8P8Ah/wH8QNF8ea74WsNJ0C7tfG1x4ZeTVvC9nc6rf2Eur+H5NI8U2mjarJd6Vd+RqOiw654dvtNa61LTPEWmgGR8WvgbbfGPV9GTxH4x1q38CxeH/E3hrxd8O7Ow0Mab4y0vxJLpUeqW13rr2B17TbXWNGtNT8I+JbG3vZbPVfCmt6nb2EOk6+ln4jjAOC+H/7L2pfDL4veJ/iL4b+NfjLUPDvjbxdd+NfFngnxh4X+HXiXUrjU0+HPgf4aaBpOjfE248K2vjuw8PaH4a8B6BavDrGq694m1hrYTar4sluptRubgA6fx9+zjoXxifTbv4u+LfFWv33hnW7LxT8PF8I6pqPw90n4aeNNLimg0rxz4RtdB1GbVL/xZZxysUvfHmueLdLgWfWNM0rRdP8ADWueJtAvACUfAfUvFHwq+LHwd+N/xX8SfHTwp8UND17wbdyeNPBXwf0zULPwP4g8OzaHqmk6hY+FPh3ovhPxJqd8b7Ubi71DUfCqaLLA2l2MPhWD7JqV3fgHuOg6HpPhjQtF8NaBZRabonh/StN0PRdOhMjQ2Gk6VZw2GnWULTSSStFaWkEUEZlkeQoimSRnyxAOK+LHw2t/iv4Pt/CNxr+q+Gha+OfhP47tta0WDSrjUrfUfhZ8WPBXxS0qCCHWbDUtNaPUtR8G2um3bXdjcpHZXVxKkDzJHQBJofw9uNJ8ZP40v/Hni7xPev4ak8Liw1y28DQabFaNq1vqyXkS+G/BPh28+2xTRSQqZr2W0a3uJQ9o06QToAOtPh7bP8RX+J3iDUn1vxBp2h6z4S8GQpajT9K8H+FNf1PRNV8Q2tlaLdXcuo634nu/DXhs+Ide1G6kV4NB0e18OaXoVtJ4gi1AAofDP4c3vwo+Cfw0+EfhrxBa3dz8NPhz4E+HumeJdb0Oa6t9Rh8GeHNH8Orqt/oNhr2lyLJqVtpjTtZ2+tRraXE64ubiKEpIAefy/s3abbz+Edf0Px74q07x54c+I/iT4pav47vbTwzrOpeO/FPinwDqfw51ZfGNhdaJFYPplr4VudI0bw3ZeHY9Dbw5pPhbwboOl3C+HdOuNHuADfsfgZZy6R4F03xh458Z+NLrwT4n+J3jW31671KPw9r154q+JFn8RNGu76LVPCEOg3ehWnhfw38TvF3hrwfZaDNZS6Np02h3iX0mt6Jp2qUAeHa9+wX8Orqy0658G/EX4s/D7xl4c8Cz/CXwd4z0TxadVfQfgvc6VHpd/wDCK88MeJrPWPDXinwvr7Q2+veKfEXiPTr34s6141t9O8bN8TLbxLpHhbULAA+o7v4Y+Fr74k6d8UruO4n8R6TpMOlacHXT/s1r5EXiO1hvYbkaeNaR1sfFWvWUmkjVx4YuDf8A9q3egTeIbTS9agAPQqACgAoAKAKl9p9hqlpNYanY2mo2VwoW4sr62gu7SdQwYLNbXCSRSqGAYK6sA2DywyQDj/8AhV/w57eCvDyjsqaZbIijnCpGiBEUdFRAFUYVQAKrmktFKVvV9L26/wBXer1urLsvuQf8Kv8Ah1/0Jmgf+C6D/wCJo55/zy/8Cf8A8kFl2X3IP+FX/Dr/AKEzQP8AwXQf/E0c8/55f+BP/wCSCy7L7kH/AAq/4df9CZoH/gug/wDiaOef88v/AAJ//JBZdl9yD/hV/wAOv+hM0D/wXQf/ABNHPP8Anl/4E/8A5ILLsvuQf8Kv+HX/AEJmgf8Agug/+Jo55/zy/wDAn/8AJBZdl9yD/hV/w6/6EzQP/BdB/wDE0c8/55f+BP8A+SCy7L7kH/Cr/h1/0Jmgf+C6D/4mjnn/ADy/8Cf/AMkFl2X3IP8AhV/w6/6EzQP/AAXQf/E0c8/55f8AgT/+SCy7L7kH/Cr/AIdf9CZoH/gug/8AiaOef88v/An/APJBZdl9yD/hV/w6/wChM0D/AMF0H/xNHPP+eX/gT/8Akgsuy+5B/wAKv+HX/QmaB/4LoP8A4mjnn/PL/wACf/yQWXZfcg/4Vf8ADr/oTNA/8F0H/wATRzz/AJ5f+BP/AOSCy7L7kdDo3hzw94cjmi0DQ9K0ZLgq1yNM0+0szcum4LJcvbxI9zINzYkmZ5PmPzEkmp/r8/N/m93q3dt7bf1v5/1d9bt7VABQAUAFAHH/ABC/5J748/7E/wAT/wDpj1SgC54M/wCRN8J/9i3oH/prt6AOkoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgDhn/AOSnWv8A2I1//wCpFp9AHjX7Uvn3Gg/BvSdPW+m1fVv2jvgj/ZNppiWL6ldN4f8AFh8Z601mNSB05W03wz4X13W7h79ltlstPuiWaUJGwB8mTf2z9t8cfav+Et8j/h5D8HftH9pf8K/+xbv+LGeX9v8A7I/0/f8A6nyP7M/d/wDHl9r/AOYnQBk/tE/tcftNeCbP9qT4q/DHWPgppvw5/Zg+PHwW+Ak/w68afC/xr4q8a/EHUfiHF+zZc+J/Ft/440X42+C9P8E22lRfHZIvBujW3g7XHu4tCm1fXtQnTWbbSNOAPN/it8VP2j/Evx00Dw18HPiR4R+E50j/AIKuXvwU1abW/Dfxj+IWmeN9B/4dk2/xR0ePxpoNr+0j4BtLnw1ZanPqJ1H4eeH5NB8G6lr2n/DrxxZ6dpXizw94s1HxMAfTv/BTiTWbD9gj4gG/1KCbW4fF37MEGp6no1pd6LZXd8/7UHwSt9TuNO06bVtYu9LsL52uDDptxrGpTW1nMLG51S+ZJbuUA4vxt+1j+0Douo/F74waLcfCn/hSXwW/az+HP7Lut/CS68DeL9Y+LPi3TvFnjj4HfDvWfH2m/EfSviPa6Z4c8VW3iX4rSan4S+H8nww1211rwlpmmW11raa54ntL/TADA8T/ALW37SthrPgj4paL4g+ByfCHxf8A8FAI/wBiMfCW8+HXjHVviLYaLon7Rfi34C+JvH978U7T4yaNpeneMdW1DwXq/i7QfDLfDW/0TTvCOo+G4L5tQ1L+0dUcA/R34p+P9Y+G3hiLxDonwo+JHxgu5NVtNNbwp8LIvAcvieGC4gvpn1mVPH/j/wCH2i/2VZtaR292Ytbk1IT3tj9n02eA3s8IBzc/xe8Sw+L/AId+Fo/2e/jbdWfjjw/o2uat40gh+ES+EPhlc6mt81z4b+Ik1z8X7fXU8QaALNf7Zi8FaD4t0ktd2KaNrGpvJKEAPhD4PftXftJ+OPGH7E/j7XfEfwSl+Dv7a/jj4n6XpHwq0n4Z+LYviT8K/CXhb4GfHD4qeFEuPi43xuvdE8V+Lorj4c6Jo/xKhn+FGn6Za6rf6xo+hQaZJYQ6hcgHJ/DH9sP9qbxr+x78Nf2jvHHi74KeF/E/7RF9pPg34EfDD4W/sz/FX4p+Mb3x5da54lmbSkh1b9qXwTpniTUNV8F+DvFWveVqVz4O8J/D6DSr3xX4r8aeIPDun6hpcgBV8CftuftW/EDwD8PPCyaB8N/h98adU/4KA+L/ANizxrrfxC+Gup3Wkaf4c0H9nr4kfHC18cR/DDwN+0d4itdI8aCw0Tw3pd9oEHxq8TeGpdRj15o76xh1Gyg00A8p8V/FD9pb4tftLfsbeBT46+EejfGf4Q/tX/tp/ArUfizpXw68Wap8KfF9h4d/ZEj8ZQeMYfhEvxetNUsteh0Lxfb+G9Z8K3HxUv8ASdB+J2ja5fG9utJt08K0Afamk/HP46eLf2VdE1nWtS8M6V8VNU+O/wAVv2YvEniv4d6DPa2U/ifwR+058Sv2bNO8X+BvD3i7xNfQeGR4jvPB1v4tnk1/XtfXwwlxcada6XrcrW13bgHz9+zh4g+Kl7efCTVvgf4p8DfDDwv45T4DaHqvw1f4Uald+Abmy8a/s5av+0Zf+KNf0a4+Mus+KdT+KieEH/4Q69+Imk/EvR5Ne8RWmma78SNF+IFppuj28QB9yftIeD/iB8StPh8LWHhqDUfDul3MHinw3o00/hvUNI8ffFLwrJb+Jfh7YfFHS9Y8a+C52+E3h7xFp1v4j17wh4burzxR47vdNsmvNe8JeG9A1PQvFYBzP7LniL4p+MdO8TeH9f8ABenyfAjTEuvCfhTUvGd7jxdJcWFlY2niDwr4atbK08SaB8aPgfYXt3qnhr4ffF/W9W8G+Kda8O6Lb2Wr+EvHcMkfxn1oA+aPBsf/AAl3i3Vob3R4tV8P3mr/APBQbQ9f0G5+Afw70jwLoNj8FPjn4l+Gnwqh0Dxpa/B7SdRurldBtVbUJG8caxdalrFvLPM0QjubMgHpHiqw8B+Bf+Cbnw+v57Lwn4P8Lnwt+yp4o8X3kttougeHi1346+DF54k8R+Jbh0tNPLXUaTXWuavqj5mjWWfUbl1V5CAWPiBefDu48bfs8XkXi/xLdaF8af2xtD+KXg/RfiLdjSdA0Gz8LfAvXtOfWvh5pGpWVl4h8PeCfFfxKh8IppsGvpFa+IPjh8TNIk0CIWfj/wANT6gAcl/wUX8EeHviDYeFPDOqabca/N4u8S+EPhZrGoeDtG8e3niz4b+CfiJrUHhnXdV1NvCvxj8IW2qX3iyDWb3wt4P0dtAuvEZh1rxHr+g29zo/h/xhdxgHsP7Ocs9h8YfG3w38P3HjTR9K8AfDr4ReINY0vx5p3x3FnqfhzxnqXxx8OeFNH8B6V8U/j/46sPBw8Oah8Nru41rVNI8LRHWtOk0nw8bkw6dbyWwB5fd+GfiZD+1/4vGkat4Bn8STz/CDxuniC2/Z18VDUYPhC3xy8ceHdR+FGoXms/Ei60g2thoB1vxzcfFXQU0PV9Y+KM8fi7+z9R8HaVo/w7gAH/sKal8RNX+Dvi3VdEv7LWviNrHww/Y8u/7b+I+p+IdQt7nxDqf7IPwQfVfEni28hN34g8R3sElxd63fWUl9Z6l4o1KJ9KvfFGiy6hP4otQDmrfVPid4Y8G+GvBPwf8AC/gnRfG/gv8AanuPhn4a+Mfij4g+IfE2i/Fv4l+IPB9145/aB8deONH0P4Y+F38RaN4l8Tav8T/CHjXw9p+s6JFoXxe8KNd+G4tO/wCET8L6VAAfd3jjSvE914CsvF+safqEHjLQPD1tqXinwt8PvHPxYvtOuBa2Zv8AxTo3gm28Lal8Pr3xprSyRXEPgy51fQNN1DXpksNKu7XRl1GSS1APmr9jHwtoep+HLWHw94nn+I/wp+EB8N+GvhF8XdJ8a/E610X4meLdN0nxTY/EjxLonhiX4meLPCGp+BNDj1/TfAelX8M86XnjvR/inaz6YthpnhzVrgA6v4nwWHjv4vjwN8YtM0Txj4b8KaJH498H/CbQNA+K/iCFZ9U1PxV4R0X4mfEHVvD3w21uz1jVraztNWXwV4XjbS9M8B+I7jUvFEg8Y+LdP+GPjzw6AdP+zzrHxZvvBXivVdb8fWvxX8HaVL4s8N+Amtvh54g8EfGuLxH4H8ceO/Bvi3wz4w1P4j63ofh/xbd6HqXhy20bwv4vvfCXg1fEAWW98VrfG3k8bawAfIev+IfGR8c/FXV/+EX8fte6J+3l+zT4dtrt9M/Zx331vcfAr9nDTLi38RJbagLPxF4liPjfxA+hazfJeQeG7oeF7jTdU0jW/C+kHTwD6C+MsniFrT9iW0tdA+J/h7XIvjt408P2emaxq3w+8Q/Fm3XT/wBjL9sfR7bV5PEM3jXxH4EvvEuo6fZpr+la14i8UahaSXV3p1x4vtJtabVfDZAPgv4W6Z4g8H+C/EHh+10TxZ4l8DaT+1V+w18LPBGseFPj3efE/wCC/wAJfAvw6/a3/Z21Lwp4EuLDx38Q1vNR8az2XjNF1r4g/CfQfEnh3W3tYfCXitPAninwlqvglQD9vbjxd4VtPE1h4MuvEejW/irU7GTUtO8OTalaR63eafH9szd2+nNMLmWF107UXhZYz58WnaxNB5kWm6m8YB0NABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQBx/wAQv+Se+PP+xP8AE/8A6Y9UoAueDP8AkTfCf/Yt6B/6a7egDpKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoA4vXLTU7DX9P8V6Zps+tLb6TqGialpFnNZQalLa3d7Y3trf6c2o3VlYzS2U1lLHc2Vxe2rT2t41xbzvdWcFhdAHNalPPrWs+GNf1P4ReOLu88JXOpal4dW4vvhW8GmazqmkXmgza5bRSfEYvBrEOhajrehW17E8csOj694gsGDxX8wIB5brvwh8G+IPEmheJ7r4Q/GKzvNF+KSfGWbT9I+KWl6V4b8R/EGDRdL0ix1Xxf4XsvjZHoXiW20o6D4e1XR9M1LT5LDTNa0azvbCCFbzxFBfAHyR8f8A9haH9ov9oG3+LnjL4Z+AodBHiH4Ta5ftB+zx8KLn9oG/svhfr3hXxPbeF5PjzdftStoh0TxDq3he303Ub68+D174x0/wFf614C8P+LbDTLyS7AB9deKvgz8J/G+meLdJ8Ufswazqdr42+IulfF3xFL/aHw9stSn+KejeGfDfg/TPiBp2s6f8VrXVvD3im18L+FtF8OjWfD97p17LokF1ptxLLaajrMVwAdd4u8L+GvH3gAfC3xn8AvFXiPwIB4WU+GtT1T4dT2L/APCHa1o2v+F2lkPxTF3M+jaxoGk6lbyS3DyPdWcL3LygyhgDg9X+BHwb174uwfHPWP2Xdev/AIkw6loevSa3NrPgf+zNQ8VeGdNtdH8J+N9c8Hp8XV8H+IPHvg/SrGy0rwf8QNb0G+8beFtLtLHTvDev2Fla20CgHyn4h/YVt/G37Vml/tI+L/hh4BVNB+LPhz4waWPBf7PXwp8MfGjVdf8ABtjqKeD7Dxt8aNR/al8VaVrdppurXVnrOs6v4c+FfhPxh4mGjeHdH1rxRJpOnw25AP0p/wCEt8Qf9Es8c/8Agx+F3/zyqAD/AIS3xB/0Szxz/wCDH4Xf/PKoA/N34c/sOxeEf2rrP9qPW/hj4Dt9Y8N+MPit458KQfB/9nv4VfCrxtqXiH4maL4i8J3Nz8VviLqn7UvxKbxnFpvhTxTr0d5ZeB/DHwz0/wAWeOL4fETxjaanq9taWSgH0/rXwA+C3iD4M+Hf2ftR/Zb8QD4VeELvTtR8G+GNN13wZolz4M1fSr29v9M13wX4o0T4v6f4r8Ia/Yz6hqAtvEHh3XNP1uK11DVNPXUBp99f20oB4d41/YZ+C2u+GvhF4B8E/ADXfhv8O/h/+0mf2lfFng3QT4IaH4ieK5Pgz8R/hVci51m1+Omk6t4d1u7bxfoniW48XW1xf30t74YiglsHvtVudchAPojwr8G/hN4Hi+FkPg/9lrUPD0fwYvvF+q/DEaVJ8MrVvCuseO9M1TSvHGtW0ifFDzL/AFrxjaaxqh8S6zq7Xuqaze39/qmpXk+q3E96wBf1j4YfDjxD4Lk+HOvfsz6vrPgeb4gar8U7rwlqc/wzvdAvvH+tfEjV/ivrHiLUtNufihJb6nLqfxA1vVPFl7YX6XGk3Gp3cwlsGtAltQBi+D/gr8M/AOtaFrnhT9njxfpNx4TuNAl8E2lprXw6ttI8GW/hv4RWnwU0TTPDmlWvxQt7K30uw+Hts+hW1lexXiQLdXdxbtHN9maMA9I8eadpnxQ8I614F8f/AAM8V+JfC+vWwttS0q+1D4aKCUkWe0v7C9tfifb3+j6xpd2kOo6Hr+kXVnrmh6vBZazomo2erWtpexgB8PodR+G/gLwX8PNJ+H/xV1jSvBHhjQfCWlan4m8Q/C7VvEd7pfh7TLbSdOn1zVv+Fh276tqjWlrCL7U54hd39wJLy9eW8luJ3AGfEKzufiX4J8SeAte+Hnxg0vSvE2mz6Xe6j4M8f+E/BPii0imB/f6R4o8K/F3StZ0y4RgC32e8FvdReZY6lb3emz3lnIANfS7H/hALX4ZQ/BTxYnhDTvD+l+GdK0m7k+EGu2unaZolpbWug7LXxP8AEDXbLUZ9F+xWVzYvrdrqKG8tLa4vYrl1kLgHG678K/Ani7Q/iFoXjb4B+OPG0fxS8Kaj4G+IGqeKvEngTVNf17whqsVyuoeGrTWX+K8d74R8PPc3d3q2n+G/BEugeHdB125udc8MaTpequbugDoPiZ4Y0/4uaFpnhrxr8I/iDeaLpvi7wp40awt9V+FMMWpar4R1a21nR7fUy/xBmebT/t9nay3UELQXE8cMdv8Aa0gMqOAZvgb4feFvhr408ZeO/BHwO8b6Fq/jnw14F8K+IYLTVvhj/Zk2m+ANV+Ieq+Hpbe0k+JLNb3guPiN4gW9mWZoriH+z1WCKWGeaYAzNE+Efw80TxPe+NH+AfxE8U+Kru8tL2HxF8SvH+jfFXWNFksdRu9V0+38I33xO+N3i+bwTpum6je3V9puj+EX0nSbC6nlmsrGF2LEA0PCvggeCrn4pX/h7wb8cIdS+LHjCz8ZeI9W1Pxx8N/EOqafc2fh7w14bj0Tw5feI/iHq02k+Hhpvh1Y7bTy1xcaU+pap/YF9p8UeiRWQBmJ8J/Clv4j+Eev6f8Jfizplv8F5vEmo+C/Cth478Gx+DZPEniTR/EGh33jTxP4fl+K80Hivxmlh4t8YsPFGuPdavqGqeKde8ReIbnVfEi6Pq9oAdf430e8+IdvJpXibwR8ZT4ZubaK31HwnofjP4deF9M1Yxzzys2qat4Z+JOk+Lbu0vIpTY6roDeJR4V1jTQbDWtAvLaW8SYA828OfAf4f+BfF2jeKvhn8HvjD8K7TSr57+5+Hfwx+Jnh/wV8F9dnOnyWavrHwX0L4xWnw3S5af7Jql9qujeGdM13W7+wsofEuq6ppDahpU4B32r+E9O1zxxc/EK9+F3xeg8S3PhbSPBsl3onxH8P+GIf7B0fWNf1u1t3t/DHxm0dbqRr/AMQXkkk18blkRbeO18gC5MoBo+EtLk8BeEbvwd4P+G3xV0mwudY8b+IE1C68VfDvxLrttrvjzxh4i8b+ItTXVfGHxN8QzXksniLxLql7ZQasL+ys4ZLfTYrU6bbwWqgGCfAXh5PC/hzwfZ/Bv4i2OjeG/H2m/E60SLxL8PbnUL/xtYeMZvHUuua7q+p/FDUNT1u91nxRcXGs69d6hdzX2q3dxcPdXbGR8gGp498PW/xIvPh/feI/hj8V4p/hv4yufHfhqXw/408EeGrhNeuvh/48+HUxvNQ0L4rWGpS2TeH/AIga8ps4b23WS8aymneSGCS2kAOH1b4KfD/WNRn1m5+C3xbTWr3xR8KPF+r60nxP0ybUvEGr/BvxxpHj34cJ4mmvvjdeL4k07w5r2kQvZabrSXlpb2dxqNpaJAt1PIQD1aRI5vFMPjOX4NeOJPEFvZxWMF4+t/D1reJIU1KGC8j0pviodKXWLe11bVdNt9fFl/bsGj6nq2iQ6kukX1/ZSgHS/wDCW+IP+iWeOf8AwY/C7/55VAB/wlviD/olnjn/AMGPwu/+eVQAf8Jb4g/6JZ45/wDBj8Lv/nlUAH/CW+IP+iWeOf8AwY/C7/55VAB/wlviD/olnjn/AMGPwu/+eVQAf8Jb4g/6JZ45/wDBj8Lv/nlUAH/CW+IP+iWeOf8AwY/C7/55VAB/wlviD/olnjn/AMGPwu/+eVQAf8Jb4g/6JZ45/wDBj8Lv/nlUAH/CW+IP+iWeOf8AwY/C7/55VAB/wlviD/olnjn/AMGPwu/+eVQAf8Jb4g/6JZ45/wDBj8Lv/nlUAH/CW+IP+iWeOf8AwY/C7/55VAB/wlviD/olnjn/AMGPwu/+eVQAf8Jb4g/6JZ45/wDBj8Lv/nlUAH/CW+IP+iWeOf8AwY/C7/55VAB/wlviD/olnjn/AMGPwu/+eVQAf8Jb4g/6JZ45/wDBj8Lv/nlUAH/CW+IP+iWeOf8AwY/C7/55VAB/wlviD/olnjn/AMGPwu/+eVQAf8Jb4g/6JZ45/wDBj8Lv/nlUAH/CW+IP+iWeOf8AwY/C7/55VAB/wlviD/olnjn/AMGPwu/+eVQAf8Jb4g/6JZ45/wDBj8Lv/nlUAH/CW+IP+iWeOf8AwY/C7/55VAB/wlviD/olnjn/AMGPwu/+eVQAf8Jb4g/6JZ45/wDBj8Lv/nlUAH/CW+IP+iWeOf8AwY/C7/55VAB/wlviD/olnjn/AMGPwu/+eVQAf8Jb4g/6JZ45/wDBj8Lv/nlUAH/CW+IP+iWeOf8AwY/C7/55VAB/wlviD/olnjn/AMGPwu/+eVQB0mj6jeanayXF7oGq+HpUnaFbLWJtBmupY1jicXUb6Brmu2YgdnaJVlu47oSRSl7VYTBLIAatABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQBx/xC/5J748/wCxP8T/APpj1SgC54M/5E3wn/2Legf+mu3oA6SgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKAOP+IX/JPfHn/Yn+J/8A0x6pQBc8Gf8AIm+E/wDsW9A/9NdvQB0lABQAUAFABQAUAFABQAUAZ+r6rpugaTqmu6xeRWGk6Lp97quq385YQWWm6fazXd9eTFQzCK2treWaQqrMEU4BJGQD4hh/4Kef8E+LibUIIf2r/hZI+neFF8aSMup6h5N7oLTWkO3Qrg6d5HiXXle8tml8H+H5NQ8YRQyfaJtCW3SWUAHbeIf28f2QvC3wg+HPx51n42aGnws+K73sXw68W6fovjDWo/FM2mzXNvqkFho+ieHdR16K40m4s7q21a3vdLgn026guLbUI4LiKWOgB+pft3/sc6V8FfC/7Q13+0D4Gb4S+M9Wm8P+EvFljcalqcniLxDbPdpe+HtH8OaZp954ovtd00WN3NquiwaK+qaZa29xealaW9pHJOADwP4if8FYP2R/APjb9mPQIfGVv4k8I/tH2vxF1G1+Itg99YaX4C0nwLDqFuupeKdB1XSrXX9mteINI1fwwLGKzj1bSdUsWfVdPS2uLOWQA+iPH37b/wCyT8LviBbfC/x78c/CHh7xhNceGbS8sZ/7Xu9L8O3Xi+SCPwpbeN/FOnabeeGPAFx4hFxaz6TD411jRZbyzurK/hVrG6trlwDode/a1/Zm8L/FT/hR/iL41eCNH+LB8VeCfBMPw7v9UaDxXd+KfiBpK614O0nT9KeLz9Sk1jTGhvTc2Kz2OnxXNgusXVpLeWSSgHB6n+2h4I0rxK/heT4efEK9uz8afEHwHs76y1L4PW2nXvjbQfD3iHxPPMqeIfi3oGrWOhz6N4evXj1fVtJsrX+0jDpaNJNLbzSAHrXw7+Mo+JnwtvPiZ4c8A+KryS18Z/EvwWvgm11LwJJ4nub/AOG3xf8AF/wo1meDUbvxlp/gySKS98I32uo6eLHtH0lhHp99f332aCcAx/hb8e7n4talcR6H8Gfifo3h/TfFfxE8C6/4w8R3/wAHodI0Hxb8Otf1Lwzr2mXWnaJ8W9e8SX0Mmv6PqWj2eo6Pol/Zy3UdrdmQaHcPrEYB514x/ba+EHhL4vQ/BmXVNCtPEVt8Rj8OvEOqeLPHHhLwp4f0ecfAfxR8ZJNeSaXUdV1afR9OnsPCPgLVrvUNH0m0i8WeMbSy0e81fUNG1zSVAPRvhj+0l8PPih8P28b6WNTS70zUpdC8XeC9Ahtvib4s8Ia9FfalYraatZ/CC7+IFvcabqQ0yXVdA8Radc3Oh614fuNN1qzvRBdogAOL+H37ZHwz+IFp4y1C18N/FWCy8N+K9V0PSDpfwY+M3i/UPFXhvTtdvPCdv49sdI8IfDzWdQsPD2seLNC8W6Fpn22EXDjwzrGoXIgt4blIgD61oApanfw6Vpmo6pcLK9vptjd386QqjTPDZ281xKsKvJGjSskDCNXkRC5UNIo3NQB8maT+12uqeBfhl8Tpf2d/jlovw/8AinqvwT07w54u1i+/Z6aytoPjn4y8E+DPAOq6vpOh/tAa54ntrOfU/HWhyajDa6DealYW0s73FiDBPgA6X44/tTeCvgfrVh4WuvD3jLxz4svNMh1abwv4E8MeINf1XSdM1TTfH8/hbWtY+waVc2ttoniHVvh3r/hyOW2ubvXrfUxa3UXhy70SPWdVtACT4O/tTeAfjNreueE9I0nxdoPjLSLLWdXt/CniXwr4j0LU9a8PaB/wien6t4h06XX9I0e0s7BvEfiaLQtItden0rW9VghXxHHpEOgXC3qgHI6p+2RpOjah4m0rUPgR8bor/wAJfEj4Z/CPXrZZfgPKbT4g/Fa18GXXgTQ0lj+O7QXSatH478MCfVbaWXR9Ne/ZdTv4Baak8QBpfH/9r3wJ+zf4L0bXviJouoaT4o8Q/DX4pfETS/A+qa94M065tT8L/AaeK9b8Pa3rkfiPUNNa/vdZv/Dvw/0w+Dv+EuudQ8X+ItHGlaffaIt/q8QB0vw6/ae+GnxC+JGufC2217wnB4ks9L8O6x4Ym0n4j/D7xVpPxBtNU0XUb/X7bwc2g+I7nWLrV/AV7o2qWni/SdQ0SxuLPSm0DxRZvd6Lq4ltwDl9Z/bJ+GOi/EnRPAVzoXxLgsrvw7Bq/iDxJqfwe+NOkf8ACM6x4k8U6V4T+FHhOfw5f/DWPXNQ1f4u6qvjC28IPBbx2k174L13SVln1mfT7BwDpviT+1x+z18F/hrofxY+Mvjyb4U+EvEuvS+GPDq/EPwj448K+Ldb15LzUbSHTNN+Hmr+HLXx3dXl4mm3Go2dqnhz7TLo5g1cwrYTRzkA+Zf2cv8Agph8Gvi98C/jH+0P8TdT8LfCH4b/AA//AGmPH/7P3g/W7jxFqGvf8LFg8PJ4en8Iax4f01PD9hruqeJfHVnrL3mn+B9B0fVNaWC2ne2S7SK7kjAPo/wr+2Z+y3438NeDPF3hf4x+HNS0Hx58UF+CXhi8Nrr1jNc/GJpYoU+Gep6dqWk2mo+GvGcjTQvH4e8SWmmak9vJHdJbm1cT0Aep+B/i/wDDD4ma/wDEXwv4B8Z6R4p1z4UeJR4N+I2n6U88z+E/FfkNcP4f1WZoVt11SGFfNubSCaWW1VovtSxmWLeAQfDj4m2nxF1f4u6Pb6TcaXP8JvifdfDLUZZrqK5h1e7h8C+AvHEWr2RSKJ7e3l07x1YWslrOhlhv7W9VZZrcwXLgHp9AGD4p8UeHvBPhrXfF/ivVbbRfDvhvTLzWNb1a78wwWOnWMLz3M7JCks8zhEIhtraKW7uZjHbWsEtzJFEwB8D+Bv8AgpN8J/GHg7w34gk8Ha5F4g8SLocdj4K0P4jfs/6zrE2q+KL+2svCXh62/tL4weGp28QeIH1DSbaDSNQsdPuYdYvho7h5YjcuAfWPx4+MukfAr4dXnjO80x/EeuXuo6b4W8A+CbbVNO0jUPHfj/XpJrfw94Ws9T1N1s9Kt5WgudX8SeIbtZdP8J+C9M8UeN9Zi/sPQdUkoA7TwD498LfE3wrYeMPCGoNfaVevd2s0VxbzWWq6PrGm3c+na34c8Q6TdLHfaD4k8O6na3WkeIdB1KGDU9I1e2u9Ov7eK5hkUAHEwfGrRJv2jdV/ZwOlXieINO+C/h/41JrYu7FtPn0TWfHvijwLJpTWJlTUIby0vfD8V4l2kU9jcQXkkEstrc20SXIBmfH/APaD8I/s6+GtH8U+MdP1650m/wBd0nT9Q1DTfD3iu/0jQdEn1zRtM1zX9a1vRfDetaXpT6PZ6r/alho2r3Wn3/iZLW/ttBaZrLVLiAA84+Gf7ZnhH4p+L9N8IaR8I/jjok97p3iHU7vUfEnhPwnbQaJbeGfh18K/iHrUes6Fpfj7WfGcN5a2Pxh+H+gR6fZ+Fry9ufF2trolpBKtlqt7CAbkn7WXgY/FD/hXlp4R+KdxYaT8Orr4geOPFk3wf+MFjD4HS91q00zwLo2t+Hbr4eprySeObXTvHuq2uqzWltpel2/gnU7a+ne7vbdIwD0+++MvgvQ/Aul/EHxZD4q8H6PrHiLTPCmn6d4i8FeKofFk/iDXPFQ8I+GtMXwjp+lajr7XXifV5LOPQoFsGmu4r/TnaON5jEADlPhT+0JoXxEbwP4e8ReE/G/wy+JvjPwbr/jmP4aeM/A3xB0vUNN0Pw1qPhjT/EJn8Rax4M0Tw9eXGgXHjLwna6xFZX0q2+pa3aWFrLdgC6cA7rU/HHijT9RvLK0+DHxH1u2tp3hg1fTNV+DUWnahGhwt1Zxaz8XdI1SOCUfMi6hptndAcS20bcUAeYXP7UPglv2cfDX7ROm6Rrj2Hj7wvaax8NfBGsLZaf4q8XeJdb0TUdU8H+BDJpd14i0vStb8Uy2SWEF1JfXWl2Es4nvrtYopaAMTw7+2X8FvFHje68OaRraXfheLTfhVBZ/EW3W9l8PX/wAQfir8Rtc+Hfhz4Yiy/s9NVsfEq6pZaDd3L6ja29lDp/ivw1dXctvbXUVxIAejePPjRB4R8Z/8K58P+C/EvxA8an4WePfio+j+Gm0pYNL0rwq1lY+HtP8AEF3fX8M2nXvxN1+4ufDfgSGxsdUvtU1LSvEl0unHRtC8R6naAHb2fxC8Jap4G0v4j6Hf3niTwjrWmaVrOj6l4V0HxF4putT0vVxbnT7uw0Tw7pWqa5dLItxG9xHFprzWMQnl1GO3jt7t1APD/DP7V/grxD4s+MXhuXwf8V7SL4UeJ/DnhqS9sfgr8cdfvtbfXfh34N8dG7fw9o3wwudW0BrRPFkWnR6fqMTX19FanXLaMaTdWkrAH1JQAUAfF1j+2ZHd/Cr4e/Gmf9nH47ab8OfiNF8ILrQvFF5f/s7yW0enfGTX/Bvh/wAFane6Vp/7QV/4khtri78aaNJdwLoT6lZwySteWETRXCqAdt8cf2pvBXwP1qw8LXXh7xl458WXmmQ6tN4X8CeGPEGv6rpOmappvj+fwtrWsfYNKubW20TxDq3w71/w5HLbXN3r1vqYtbqLw5d6JHrOq2gAz4TftY/DL4raj4l0JLbxP4P8QeGtL1/xHc6L4v8ACfizRLm78H+F4/Ctt4h8XW7apoNgLbSbbXPEa6Tp1nqq2PiTVrS2PiK00EaLcRXAAPHdZ/4KI/C3Q9Os7iT4e/FTXr670X4x6+bHwl4ZTUYLPTPhH4q0nw5qt1e32tXnhstaaymv6HqWm6lpttf6VD9p1LSL2/i1nSNRs6APpfx18efAnw58L6X4n8WL4l0i11vTNAu9Nml8CfELWtFg1HxRfWWj+GtC1/xN4G8JeM9G0XVNW17UtN0OC0NzdXs9/e2qaXZ6gZrJZwDB+E37SPhL4qyaBoa+E/id4S8cXmkWl14t8HeJfhX8SrJfhzr03h+08QS+FfG3iy48I2/hbRdTayuPN0h7/VbWHXYxD/Zhe7u7CylAK+t/tGQ6VdfHeLT/AITfEjxNYfALVm0bxlruiXfwtt9LuL2P4PeAfjFcDS4fEnxM8P61cJa+G/H2jwTOdHCtqSXkFo1wsYkIBv8Ai7466D4N/Zx1b9pHUdB1yXw9pHwrj+K1z4bthYSeIzpT+GovEX9kII7uSwk1VIJBav5V3JatchvIuJYikhAOf+Hf7REXj34sXvwmuPh54x8KanZfD5viE2peJtH8QaFbz6f/AMJPbeG4bK1sfEvh3w/qN3NJcPPPJd2tvLYwxwrC9wbmXy1APOfGn7c3wz8D+I/EPhy58LeOPE13o3xn0T4MW0XgvRn1a51TUtY+CVt8X11y1GpNoemvZ2kLXPh+50201a81fzoYNbjtW0m6icAHrvgf9oXwj4z+Elj8Yp/D3j3w/oF74k8deGzpE3gbxP4l8VabP4I8ceMvBmoXetaB4F0zxVeaXZzT+D72/e7nU2FhBcWVrf3sd7LHE4B5x4F/bR+GfjWSaJPDnxLQ6pqdjd/Di40L4R/GPxPY/FH4W61F4Tn0H4xeEJ7H4cW8z+DDH4qt7XxHc3ltCmhanputNb3WreG38NeKNTAOm8fftM2fgH4i23wzl+EPxQ8QaxeLo0tnrGkXvwbsfCMsXiDXYPD3huK88Q+KfjB4ct9A1XxfrH9oaT4F8PeJo9J8QeNdW0jXNO8J6bqE1hdMADZ0r9pT4YX9h8RfFeo63Y+G/ht8O/AnhL4iar8SPEl2+haF/wAI14ij8YyXF7e2+s2un3ejwaNH4TmkmnvRtvUvLZrNWABcA+TPgp/wU8+CX7Qf7VPjn4L/AAv1bwxrfwf8CfsyS/tB6z8errXNX8P6baXFj49s/DWtaFqmh+K/DegJo2h6Pod5b+KZ/Ft3qhsJdOliuo0GmuL+gD3fwL+3x+x18S7Xx3eeCPjn4d1qD4c+Cp/iV4uP9leLNPls/hrb3jWNx8RdMttW8P2Nx4m8CwXKiObxl4Zj1Tw3EHhkk1QQzQyuAesaR+0L8Edf8W/DjwJonxI8Pan4t+LHw+j+K/w58P2ctzNqPir4aSWsV3F420+JbciPQZoZYjFe3jQJJLJFbx7rl1iYA9loA8T/AGgPjj4b/Z2+HZ+Jfi+BZPD0Hibwl4c1K4a+SxTTv+Er1228PWWpSyPbXHmW9rqF5aG7hRPtBtXme1We7SGylAPKv2fP2yvh9+0n8SPG/gH4fW0Oo2ngbwV4T8Xar4psdYe805rnxVr/AIs0ay8PraXGkadcreW8fhW51G4uFaSAQXNnFtErEkA9Hb49Q6lrfjvw94E+FfxP+JOo/DnxXJ4K8Xf8IvF8ONJsrDxDH4e8KeJjZw6l8Q/iV4GsNQLaL4v0W/H2G5nkVJpo5YknheMgHa+FviFDqPw3f4i+OtOs/hnb6ZZeJb/xhYa/4t8Iara+CLfwtqOs2evjxJ4r8Oa1qfhWBtCj0a6m8QyW2sT2ehzw31hf3i3FjeEAHI/BT47aL8ZbG+D+HPEHgDxNap/bkHgbxrbppviq++HWs312/wAPviPbaczLI+geNtDjtb2REV5/C3ij/hIPhx4lNv4y8N6/YRgHIfFT9rn4PfCHxfdeEfEviPQbq6sPBPxE8W6qmk+LvCk+raBqHw/0nw/rlx4U8ReHbjV7XVNK1fxVpXiLTpvBuYp01S8L6feJYS3Xh+W/AOpb9oDwwnwdu/jBbadJ4n07QNNtrrxvpngXxR4B8Qr4WvY/D1nruv2CeJb7xb4f8L+JB4eS7gs5p/D2r3k2p3UtvFo1ldzSNEoB53Y/tg+Gb/Qr3UJ/h3458Na4Lm0i0Xwb4tn8GQeI9Sgi8SfCnwv4qGs23hPxZ40X4e6z4K1f4teErXW/CvxDPh7xNMdQtLjStMu7B7q9iALvxl/bp/ZB/Z58R6v4Q+M/x68GeBPFOhWWg6lq3hrU31a61600zxGbkaPqbaTpWmX97Lp1wtncTXGoQQSWenW0Ul1qs9rbKZiAX/h9+2t+yZ8WPF/xB8C/DP48+A/HHiP4YeFZ/HPja18NajPqlhpng21kjhvPE1jr1tbSaH4j0awnlht9Qv8Aw1qWqQWN1NbWt68VxPBGwBj/AAa/b0/Y7/aC8Wav4G+Efx38K+JvFmi6BeeK77QLq08R+F9RbwtYTCG/8RafF4w0XQBrOi2LENe6ppDXllbQn7TcTpb5loA8z1b/AIKg/sUnwJ8afGPgT4z+HviHc/Bn4d+JviJqmi6NB4i06HxFp2gzQabbweFvE2r6DbeH9ft9X1+/0bQ4NZ0K+1PSrR9WsNVvLhdHZ7ygDoPhf/wUS/ZY+In7NXhL9pvU/iJpXgjwn4h/4RfSNQ0TWZLvUPE2jfELxH4e03xDH8NLXRtGsbzVPF3i21stQSY6f4S0/VJrq0gvr+3hNrZ6g8YB6PZftpfsn3/wy8N/GOP46+B7b4b+KfH3/CrNL8W6rfXOi6fbfEcDU2m8GeJIdZtbC98Ga7ZQ6Rf3epWXi610iTTbCEajqX2ewmt7pwD2P4ZfE74ffGfwJoHxN+FfivSvG3gTxRFez+HfFWiSyTaTq8Fhqd9pF5PYzSRxtLFDqOnXlqZNux3hdoneIpIwB3dABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQBx/xC/wCSe+PP+xP8T/8Apj1SgC54M/5E3wn/ANi3oH/prt6AOkoAKACgAoAKACgAoAKACgDifiX4bv8Axn8NfiF4O0ua0g1LxV4J8WeG9Onv5J4rCG/1vQNS0u0mvZbe3u547SOe6je5kgtridIRI0VvLIFjIB+VHwL/AOCdPxc+Fnjf/glz4l1zxP8ADC/sv2KvhH8efh18UotLvvFD3fijUfiX4VvNH8P33gZLvwXaRajY2N/Ilzqy+Ip9CnginuprGK9uIxFMAeX+Bf8AgnZ+2v8ACb9lr9k/4HeDPi74Dlj+FHxT+NPir49fD7w38YfjR8I/Cvxl8J/EjxjqWv8AhXSYPi74C8Ax/EbR4/A7ancX+qaRa6LYWmvzSPH9s8+002WgDj4/+CVvx30L9lj4a/CG80P4K/EPxt4A+PPxv+M2l+JdA+Pnx9+DnjTwVd/EPVdLuPC978Kvi5pPgDxLqtnqmn2z6onjKw8ceF9dttVW18P3en6ydctjqNAHrlr+wX+3DpelfsAeP9b+OPww+Nvx3/ZG8f8Ax98UeKLr4q+IPiFY+H/Fvhz4w6SmiWXh20+IOn+B/EfjDXdR8I6dbxxQeJfFPh1NQ1GS4Ju4za2FtZygHBfEv/glt8X9R+MX7VPiDTvDnwT+OPw4/ap8Z2fxF1Hw/wDF34/ftWfDGy8A+KTYx3WpaT4i8GfBpofD3xi8I2OtWVq3hJdXfSdesIDp8aXWlQ6ZJJdAH6IfBv8AZUv/AIf/ALXn7YH7QHiW18B6x4Z+NUH7NVt8KIY1vtW8aeFIfhF8NZPCviZdcfWfD0MGjtqWs2ui6jo8mia9q8t/Dp1nf6w9lqVnaQ0AfOWsfALxtqd38LfieyfEW0h8ZfttfFL4wap4b0TwJ4F1m+8I/DO/+Gn7QmmeDvFWpWmu/DPXfENlfeJNKs/B13LoPiy5lstJ17xdZ+Frvw9b+LYLUoAfTf7L3gS1uf2c7ePxh4X8ayLH8Yf2qfHegaP4n0XV/AXjLU9D8W/tMfHHxR4Q1TV/B32PwQNKv/FHhTX9L1q00PUdF0exs21K0eHSNMWOCOMAwv2Svg74Sv8A4f6/4l8WfDDWtGvbn9pL49/ETwbpvxB8P+J9A8QadpzfHzxtr3w88QyeF/E62l/pd2mm/wBm6ro93e2KXUsD2mpwTTQzxXbgHA/tHaX8SviT8WLfxP4D8J/EjU/EHwh0q+8M/BnwbpN94++Gul+PvEXijxLpafF7xV8RPiHpGueDF8C/Dy08OeEIfCfw71TUPEFtr3iDWh4v8beDvBHj7wp/wgdjr4B6z8CtP8SeL/gBa/CKbxX8dvCnjnw+50n4yeKvir4X8d2HxBbU/E19reueMbT4ceP/ABDqWt+HNSgluryfT/BXiXwF43+IWleAfBk3h+xstbl1u10XUlAPij4cfs7/ABV8Cv8As8+C9A8C/Fy08Z+GvhH/AMEs4vihd2HxV1qDwT4Ri+HHxT+NniP42aTr51X4o2fhrxNpVhY6HfaavgvwPY+KrayvNb08WPh2w0bxKuq3IB+qGneIfinc/HLxT4XuvCujwfB3Svhx4S1XR/Ge7VIvEOo/EzU/EfiiDXvDnlXDx6fd6Npfhyw0PURc6fBI1tf6gba61KaeV7C1AO68VwzXPhTxPbW8Us9xP4f1qGCCGN5ZpppdNvo4ooYkDPJLI7KkcaBnd2VVDMQSAflb4W+Gvjm1/Za/ZL8IyfAj9pbS/FfhbxH/AME/H8SSeIPia+ueFdETwN8cP2fdW8cX+qfDaL4+eItQsNI0LS9D1m/ms7n4dRjwjbWp1TVNM0C10i6vrMA9s/bi+Cuv/GG30fS9B0WwsrHw54F+LPxg1Dxhb+DL7XNavPiX8NtA0vwv8IvBz3ul+JdBkl/tTSPit8Ub/SdM1K31uCW80ySS0sESLUba7AK37IPwy8UfCLRv2gfhx4r8Hap4X+GcNt4e8QWPjK20jXvB/jDxj4s8VaL4rvPinqWlah4f+JnjHxCbDRtKh8FjwpqehTeHPEGkavdazpkGl2PijTbu0tgDzbxR+zXq+peGdX8eJ4f+Lkep/FT9tr9mn4hWfhhviP8AGHUPFHhv4SeDvGfwG8DJrfi+KLxpeXVrfnw58OdS+J1zqWtN/wAJN8OtL8QQaBf3uj6j4aeytgD6D/aO8L6bN8N/Cv7OWjaP490/4ca5feHx8Rde8OaZ8QfFOq2Pws0LWpNdvfAHhO+0w6x4r8SeMfiXc6Kng2az0Rr+88GfDW98aePNbv8ARItL8HR6iAec/stTfFXwX4/8ZaJ8b9J+Pui+M/HmneH9E+F6+KZ/iX8Wfg8PCvhDRdavR4v13xHpPj/4neEvhx8UPGeqXurap8QfCviTxV4VsbWGz8L+BfhxqHiKw01/G+rgHjE3wf8AifqGlePINR0T4zeKfHTft0/Dvx1rnjRNHt9Bi8WfDT4f/FX4caqPEWnteGxt7jS/CPhrRtWX4faZpL3Nlp8Fvb6ZozXt4LqWYA7H9pH9lr40fFzWv2Jvjb8AW0+Hx1+yR8TviVqNn4H/AGr9e8T3MfjPw141g/4Q+88Q634t8Or49186rpFrpdn4q8EzXqzaq2k3cH9rDTvEdm2hMAfJF1/wSY/aI1j4K3Gm6x8SPhTF8XNG/wCChnxA/bY8O6Xoniz4y6D8LfEeh+PLHw9aal4K1/xV4W0zwx8S/BOuWZtdVGk+IPCUl9faZbNFFb6vJNqN3c2oB7Jef8E1vE3jT9kv9oH4cHwB8G/gZ8a/iJ8VPBfxw+G+veFvjH+0H8Y7bRPiv4CfRNS8OeN/H/xF+KcMniW98U3V9F4h0DV9W8MaBHDJ4U1SKeW1vdZWRUAPsD9jb4Ja/wDsefs83Wl/GPXZPHvxc+IPxQ+I/wAX/jf4v+Hnhzx74x0/xP8AFH4l+Kr7Vb7U9E0bS/C8/iODR7LQ7TQdEjebRbe2txpqvM0ZuELAHCfDzTPhtovj39o34lfED9nnxf4r8R6x+0ba/En4U6vc/sz+M9b8XyaLY/B34K+F9K8Q+HdZ1rwJE/hi90rxBoHilLKPUNV0bV7P7PeX1nAIr+wluQD7F8OeIPipqHxl+Jnh/WvDGg2fwi0Lwp8N7vwD4ugfXYfE2veNNZl8ZP4/0PVLLUbaCwfT/DVhYeELux1HRxNZyS69Pps2pXGtWOuaVpwB1vjjw+3ibwrqelQmZb1WsNV0p7eW0gnXWtC1K21zRjFdXdpeR2ROpafaK19HELy0jeS50+5tdQit71AD8UdS/Z4+Ofwr8LfBH4eQeFPFOreLPFmifsSeBEh8Pa74nj08at+zT4lPjvx1b+Nfih4O8I614c8EeFl/s1da+HHiTXLGLxnp3iC+8WT2moa/o9lpWg2IB+h37Vnwqstb/Ze/aR16Lw7rfij4kyfsp/G3wf4Utrm91XxdrOmXGs/CDX9Ou9C8HWCCWEa34ov7a0g1jU9G05PEXi27+x2WoXV3ZW2j6dAAe6af8MvhZ4J8W+MfjZoPhK40TxT4m8OWy+NLzw1beLFl8VWOh2qTWF5qvw80Nns/E3jGysbOHS9N1X/hGL3x++nRWnhWxvHshbaTQB8gah8O/jNbeOfFn7b+l+Br+8+JyalovhnQPgrLfaXH4u1X9kbw7p+r2+ofDk3sk8Wlab8SfFnizWtT+Pul6LcXws4PEFj4H+E2uarY3EfiXxEADy79sP4TX37S/iL9mrx7o3wX1fX9H1fw142v9e8PeLf2f9CuPHOhT+HNJl8SeC7D4jS+NPEPgnU9JsbHxFeTR6T4C1LxHbaBe6xdaxPc+HPGNxe6dZ24BjfsSfCj46+F/FnhvVtK+GOifCjQNO0bStJ+LOq+ILGbw9qOv+ILv9jP9k20v9Lg+FWn+FdCtNRuYfjRo15r0fjbTfFsNuh0v4y+FdTs9N13VrC7nAPPPjv+zj4xj0f/AIKOa7NbeNPF39uLFpvhXUNX+EVh8TvHfxF17W/2VPh5pzT+Erm3+Cvi/WLHTG8VT3Ph+D/hA7jw54K8E3ltLp9lF4dttNaWEA+5v2rvDOv3f7Ofws0bSND1K6vNF+MX7Jl1qdlpfg7xN4zl0nSNB+Mvw8n16/uvCng2W31/UtM0Owtbm61O30e6tLlLKCYxX9sVFwoBy/w20TUl/a/+GusxWl9daRZfs5/tIaZfatH8C/jb8KtMsdT1T4qfsh3Wk6dd33xT8R+IrbWb7VbbRdXudOtNHls7i3t9M1Wa9ju4ngkgAOkspNA8NePPjZa/EP4T/GHXJ774oXWseF9W8OeBviB4l8O3vhTUfBXgieCXR9Q8Lvc6ZFD/AGz/AG4t7ZnyLyHWBqLXlsJnM7gHlXinSPGOtfCP4U+Evhv8FPin4E8KfCP9qv4V6H8MdE0fw5aQeNl+EHhPwpbyw+NFtPiXqutWthaWOqahqujyav8AEVNLsybCKS8tnjmtNVuwDyj4f/CPxl4F+DH7PfhGLwx8V7XxL8VvjN+zt4m8Z+ArjwHqUvh3w7efCD9qyX4weLPiZ4/8QaZpMuk+CPFeteBtJ8O2F0uqahpdhrWneDvDPh3RLa8mhs7BAD6Q+JXw+8OWHxtm+JGj2nxq0Hwn4XbW/HP7R3jjwR4h/aFa9+Jc9h4U8R+Fvht8KPDnhb4eazJqfj/T/Ctx461LxdqUngnw7fWXg658HeHPC8+ppfSeIdHiAN39kz4UeDv2c/2V/AC+LtI8V+HfFPj34feA9X+L/hvVta+IXi7V9R+LGueDre68b22neChqfiCRfGeqatc6t/wlC+B9Eg1zxZqltc65r0eo6pDJfIAfPXwy07Vvhf8AHN/il8RvgZ8Z9C+GFjH4ni+EnjLwf8P/ABp448Y+M7zxK8umW3in9o34f/DrW/HXxNsdb8H/AA/0fRPh18N5vFnhHUDN4cuNR8YfFKXwv8QprDwdoAB+g+jeJ/ihqfxr8RaDL4T0y2+DNl8MvB2uaH4xuIdcsPFN/wDEnWfEHiePXPDU+n6mlrAdM0rw1Y6FqEhgsvtVhqV+9lqN6928um2gB6/QB+N2i/DDx+v7E37Mvgg/AL9pux8aeH9O/Yag15NY+JM9/wCGtJufB3xJ+BN94wudQ+Fg+PWrappek6LZ6Lq15Not38NbaTwpa2xn1TQNCi0q7a0APoz9uL4K6/8AGG30fS9B0WwsrHw54F+LPxg1Dxhb+DL7XNavPiX8NtA0vwv8IvBz3ul+JdBkl/tTSPit8Ub/AEnTNSt9bglvNMkktLBEi1G2uwDP/ZK+GXxC+Efh79oj4cz+H9d8A+E4LHQfEXhT4i6T4IsYPHniD4i+KdD8V3vxA1/QNG1fxb8WdP8AE9v4ctYPAsvg+y1HQre2/tq41fw3rPg59SttX0SIA+FIfhHr95oNh4w134QfFv4h+ADqln4Xt/EXjz4QeJfH/jqyHi34x+KfFnxfv7n4XT+BdU+JOmeBfGXw6uvATMvg3wDFLo3xM0vx1oT6F4ba3021uAD9FfEOg+Gdf+Bvwvuh4f8Ai147+JOj+Hpbn4QI3w8+LthqHhb4t2q3lrpnxEvfBPxdk8M2vw/utF1dpn8Kah8dtV0f7D4Lj1LwrofiG40bVvEUWogGL+zVaW+ifFLWdc+N/wAMPipon7Vvji78aW/iTxtP4G+IHiT4SN4R1W70nXdK8DeA/iz4Wh8S/DLTvht4T0bwV4fsfBmmePdb8M+Nm15fEmsv4R0Txn478YaReAGfefAfxt8WdZ/a28YeGbrxJ4J8LfGaPTV8IaP4u8VfFnwrdeKvHOjfD/wz8L/E3i678N+EvFXhO28JfDvxP4S8CeHvDHh2HxX4X8T+M7vVY9Y+Jd5Dc+Bm8JeALwA1/iRpnjj4lfscfDv4X+DPhR4y8KeNPHvhrwl4Hl+HHjuHT77TfBnh3R4rLSPiFY/FfW5tI1XwpqOj2Xhaz1eDQDqGntD478Qy+FobTRorHUNU+zAHzv8As2eC/wDhF/jKbrxn4O+Kvwl8Ux/F/wAd6bpnhvRP2Tfi9pj6n8N4/GHip/hBofjP9ov4FNe/APWvB9roWr6beeJrHxJea94XfULcXGt38PiLTtK8XQgHm/xm+FXxM8R+IP2jtR8PeCPjh8a7zw38QviH8RE1bx94D0y1mn1O0/ZM+G/wy+Ed58Mvh3r/AMP/AAP8OvHOp6R8Sn8SwXWq+DvD1/d638NfBWrHxC/jTxHffCRroA+1fhHoXwcvvgT4u8I+IfDnj6T4dj4l3V3d/DwfA79p/wCHsOojVoNO1qTwrb/CjxZ4E0DxP4o8K6rdvd+IfG2ieFPC7/DfxJc3XiTUfF+kTxah41imAPI/C+lXmkfELw/4i/ar+EHxtu/DvhG98Lab+ykfDfgXxl8TdH8A6L4T8V69q3hbxL4+0j4I6n4+13wf8bdT03WND8EeLdc17RI/B2qeBvD2l6cfFU154q+Kvg2IArfHD4DWnxf/AGtdN1/QvgDrfiHw1ZaP490P4xeL7z4L/CbRLDWfEepW/wAFLHwZM+v/ABavvDN38WNPs9A8I69pEXjfwpaeI9R8CadK9h4K1G21yZ7iIA5Txz+yj4j/AGlf2bf2xv2TdH1rUvCmsX/w2+BXwpsPHviXwT468N+Eb74gfDrWNc8d3UWly+IPD2mX/iPwfPNPoOnX/ijw5Z6lp8ularLfaO2oOkdvIAedr/wTk/ak+NXjn40eMv2h/FHwL+HVv8XP+CfEf7G9vpvwK1Xx/rEvhPXrHxtpPiXSdaex8UeEPD1lqHhxrW2urTWrGy1W2YwGPQbCzmspZteAB3H7Iv8AwTy8afDjxX4Xl/aF+EnwH12Lwh8Atc+A2ofEzQf2hP2s/if4t8eeHta0bR9EvNHsPAXxWu7fwb8PPBGtaTJrsXibwzZPqMMGtCyuvCEOm6ZMYYADpv8AgnJ/wT3+LP7I/jvx34x+N3xM8L/EuTQfhv4d/Z6/Zwk8NXfiaS48Gfs96F4+8aeO30PxTBrmjaZCPEGrarrOgyTjTZtQs7OHSFsba+e2WJ2AP0U+BWv/ABY8U/Crw3r/AMbfDGg+EPiJqNz4mk1bQPDJ1caLb6PH4v8AEFv4LvLeHXpG1uyuNZ8GW/h/WtT03W4rPWtM1W/vNN1bRtJ1G3udGgAPjb/goR8GfG/xkHwSsfh18KtW8Saz4a8YeJfFHif4gWenfDHUdN0DwTbfCf4peHo/Depab4y+IHhTVNcutT8aeK/COsaVpul2Gpvp0Wm6t4p0vd4g0mz0q6APln9gD4LeIPC/xQ+Dnj74pfBvxj4WMfwe0mD4f+LpPBXjHWW1j4lax8O/Cen/ABCHxH1G98HaNrXw1vvB/k+OLfwr4g8Y6Lo3hbxrH8RPE3hvwz4w8Snw7pfifxCAeqaN8HvHPiP48+PvF+sfCzxjeeEPjHF4t+La3fhr4Xfs6anqVveDxXpXw8+HMGv+Iv2h/DN+dK1DWPhR4L8P+KbzwJpl9Z6xol7q9xHrvh+11KLUpCAe0eJ/AnieD9hvwtd3fwzvvEHxQ8PeH/DGvRfD5vC9/okV14y1XxXocmoXmvfC74LXfgHRr7xBoaO+r2Emj2tjfeGtbtP+Eh8Oalpeswtq9AGb4O+Dtxr/AO1V4B1X4hfDq+8WaX4T+GPivxd4f+J/ijwv8Y7TV/CHxD0Hx/8ADiHwnoOj+LvHnxv+KgtY9U0nWvGGpXPhuxudLi1aGzmn1Gy1G0tZQgBn/HX4XfFLx54z+L3izw98afjVD4L8Cfs8ftG+F55/+ES+CSWt54w8f3/gnWIvhj8OY774BS6r4l8L+HtM+HUln4u1+e41zWH1e88H+HPDXj1vFOl/FKzoA9X8SfD+z0H4DWGjfFTUPiv+0PZeKNT+H93a+EvGXwM+HXxPvND1bTNCs7jTNJi8CeE/hL4L0vQtJttR0WC+udc8eW6waB4jdJNT8Ract3LEQD4m8Cfs+eKvgv8ABv4F6l4r+GHijw18Qp/Cnwu+D/jjQtG+HXh/xNrmrePtQ+In7FcD+INS174CReOtCl8GaYfg34t1bVfib8WPEGm+ILi51kXGs3UdkILK0APUvj5+wR8U/i18XP2+vHuj+Jfh3aaV+1L+x5oX7O3gO31i98SDU9A8YaXb64j634ritfCV7bWvh5rjU4ZoZtGvNV1UNapI2lrIUAAMTwt+wJ8fvCvxZ+EPxM0D4j/DvwrqXw2/4JaWf7FFrrulS+INW1jSPjvaMlxY/EjR9K1HwfZabq/gjRb+1s7+0l1W8s9d1F0MF74Xt4lO8A8U+Cf/AATh/a90L4t+CvjD8aPE/wAHvHniXwx+zR8cvgl4tuvGPxv/AGjfjHL8XfG/j3Tbiy0rxl4otfG3hPRbfwd4K12VIIfEvgHwLcaaul6HNdy2F5qOtzkQgB+zv/wTS/ao+H1p8b/h9qHxK0P4T/s/eOf2cvjF8EvD3wD0P44/Fr9oHwRa+OPiFo0ujWXxE8LL8TvAnhK8+FXhXSoJzcW/hrTbrxB4puXju7TWtfvLW+kZQC14o/4Js/tSeNv2Z/2I/AHiLxH8FLb4mfsN6/pdp4S03w18Sfjlovw/+LngC38F6P4WvX8R+MvDfhXwb8Qfhn46RNLSXSdR8JpqcFvuvVj1WxTVJltAD0Kw/wCCdXj3U/hp8KtBl+HvwF+Geoab/wAFBvhZ+118U/CmlfFn49fF/SfFvgPw14R/sjxhbeIPGvxd0DWda8b/ABY8QXd3e2l5HNpXh7wNrGjw6cL7UYtQOpXtwAfsfYafp+lWqWOl2Npp1nE0zx2dhawWlrG9xPLc3Dpb26RxI09xNNcTMq7pJ5ZZpGaV3kIBboAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKAOW8cw/aPA3jO3zt87wr4ih3enmaPqSZ6ds579uDg5AMPwT4jtk8GWEV7Za1a3vhvwvpb6xZjw9r1zM32TSx5jaItpp1wfEouRbO9hDoH2+8ut8FslqNQY2pAPzb+JnxO8a6HL+1P4q+JHhj4uaH8QV+G0Px1+F/g6w1r4f6n4E+FvwX/Zq19PF3gHxN4u06D4p6bp994i8WfESG98SfE3SGMXijWfDd1dfC7wlealong/UPFs4B9u+EfGfxS+LPwmg8Uaz8PPij8AvGNheGe/8F6Xq/wADPFuveJYodE8+ODwb4k1u68Q+ELzw5q93qMB07V/E1n4Q8QvdaXPb6npOjWcrySgHxt8DPE3jDxF8ZPGehWvjf9onQ5/2kdWu/jV4Z8RW0f7Iep3ngr4beAfg38DfhbqEnxZ0pfC3jGTwV4sk+Juga94L0vwjpugGzkmivZb20j8XaN8U57MA9A/bHPjhvir8FTp/jW48L2ekjVPE/wAObLQrr4nG/wBV8ZaMbiL4rT+KtK+H3ww8f3eoab/wp3UdW8J+FL6W50Gy8K3Xi3xh4tvJtX1qx8IwWYB4h+wD4t8feJPFfw+vda13xJqn/C0/gx4b/aM8U6T4j8bfF61Gm614y0q40/xH4g0ez134HaB4Y+Iuia/f6j4M0fw94cuPGl+vgOy8P6l4h0P4heNTftaRAHw54A/aj/aS+P8AYeN/ht8TPjnfG3tvB3wW8Z+DPC+r+FPhLp/ib4h/EW08A/Ar4weFvCHheTwn4NiuJLfxZ8SdXsD4h1LxC0mgeH/gpf67qPjFLOaw1jW9PAP2n/Ys+Kur/Ev4U6hH438ZeLPFXxU8M+ItWg+LGm+KPB9noCfDrxZq97eav/wqzQdc0Hwh4a8J+P8AR/AdjNb6NZeNvDE+s2via0itfFK3ljpus6PoVsAcr8Tv2p/gF8MLzw4vxx1741wa1408NWfjbw5pXw3+DX7Vnjvw/pHhbVLzUINIjfWfgN8OPE2iQa6qWTtejXNU/wCElhuTJdWdtY6LdafEQD2rTPijE3huY+H7jxDr39ueDfDPjP4bXur+EvFsGuXOi+MbW/8A7EtvFOkahodhrOk6hplxZPJc23imy0rXRYy29jrcDa7Z6zdMAejL8PNEb95c6r41uLpwpurtPiJ4905rubLF7iW00jxJp9hCznG2G0tILW3iEdtawRWscMIAF/4V34f/AOgj45/8On8Uf/mxoAP+Fd+H/wDoI+Of/Dp/FH/5saAD/hXfh/8A6CPjn/w6fxR/+bGgA/4V34f/AOgj45/8On8Uf/mxoAP+Fd+H/wDoI+Of/Dp/FH/5saAD/hXfh/8A6CPjn/w6fxR/+bGgA/4V34f/AOgj45/8On8Uf/mxoAP+Fd+H/wDoI+Of/Dp/FH/5saAD/hXfh/8A6CPjn/w6fxR/+bGgA/4V34f/AOgj45/8On8Uf/mxoAP+Fd+H/wDoI+Of/Dp/FH/5saAD/hXfh/8A6CPjn/w6fxR/+bGgA/4V34f/AOgj45/8On8Uf/mxoAP+Fd+H/wDoI+Of/Dp/FH/5saAD/hXfh/8A6CPjn/w6fxR/+bGgA/4V34f/AOgj45/8On8Uf/mxoAP+Fd+H/wDoI+Of/Dp/FH/5saAD/hXfh/8A6CPjn/w6fxR/+bGgA/4V34f/AOgj45/8On8Uf/mxoAP+Fd+H/wDoI+Of/Dp/FH/5saAD/hXfh/8A6CPjn/w6fxR/+bGgA/4V34f/AOgj45/8On8Uf/mxoAP+Fd+H/wDoI+Of/Dp/FH/5saAD/hXfh/8A6CPjn/w6fxR/+bGgA/4V34f/AOgj45/8On8Uf/mxoAP+Fd+H/wDoI+Of/Dp/FH/5saAD/hXfh/8A6CPjn/w6fxR/+bGgA/4V34f/AOgj45/8On8Uf/mxoAP+Fd+H/wDoI+Of/Dp/FH/5saAD/hXfh/8A6CPjn/w6fxR/+bGgA/4V34f/AOgj45/8On8Uf/mxoAP+Fd+H/wDoI+Of/Dp/FH/5saAD/hXfh/8A6CPjn/w6fxR/+bGgA/4V34f/AOgj45/8On8Uf/mxoAP+Fd+H/wDoI+Of/Dp/FH/5saAD/hXfh/8A6CPjn/w6fxR/+bGgA/4V34f/AOgj45/8On8Uf/mxoAP+Fd+H/wDoI+Of/Dp/FH/5saAD/hXfh/8A6CPjn/w6fxR/+bGgA/4V34f/AOgj45/8On8Uf/mxoAP+Fd+H/wDoI+Of/Dp/FH/5saAD/hXfh/8A6CPjn/w6fxR/+bGgA/4V34f/AOgj45/8On8Uf/mxoAP+Fd+H/wDoI+Of/Dp/FH/5saAD/hXfh/8A6CPjn/w6fxR/+bGgA/4V34f/AOgj45/8On8Uf/mxoAP+Fd+H/wDoI+Of/Dp/FH/5saAD/hXfh/8A6CPjn/w6fxR/+bGgA/4V34f/AOgj45/8On8Uf/mxoAP+Fd+H/wDoI+Of/Dp/FH/5saAD/hXfh/8A6CPjn/w6fxR/+bGgA/4V34f/AOgj45/8On8Uf/mxoAP+Fd+H/wDoI+Of/Dp/FH/5saAD/hXfh/8A6CPjn/w6fxR/+bGgA/4V34f/AOgj45/8On8Uf/mxoAP+Fd+H/wDoI+Of/Dp/FH/5saAD/hXfh/8A6CPjn/w6fxR/+bGgA/4V34f/AOgj45/8On8Uf/mxoAP+Fd+H/wDoI+Of/Dp/FH/5saAD/hXfh/8A6CPjn/w6fxR/+bGgA/4V34f/AOgj45/8On8Uf/mxoAP+Fd+H/wDoI+Of/Dp/FH/5saAD/hXfh/8A6CPjn/w6fxR/+bGgA/4V34f/AOgj45/8On8Uf/mxoAP+Fd+H/wDoI+Of/Dp/FH/5saAD/hXfh/8A6CPjn/w6fxR/+bGgA/4V34f/AOgj45/8On8Uf/mxoAP+Fd+H/wDoI+Of/Dp/FH/5saAD/hXfh/8A6CPjn/w6fxR/+bGgA/4V34f/AOgj45/8On8Uf/mxoAP+Fd+H/wDoI+Of/Dp/FH/5saAD/hXfh/8A6CPjn/w6fxR/+bGgA/4V34f/AOgj45/8On8Uf/mxoAP+Fd+H/wDoI+Of/Dp/FH/5saAD/hXfh/8A6CPjn/w6fxR/+bGgA/4V34f/AOgj45/8On8Uf/mxoAP+Fd+H/wDoI+Of/Dp/FH/5saAL2meDNH0m+g1C1vPFcs8Hm+XHqfj7x7rNi3mwyQN5+max4mv9PucJIzRfaLWTyZvLuIdlzFFMADq6ACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgDnPGH/In+LP+xc1z/wBNeoUAXdA/5AOif9gnTP8A0jjoA+T/AIifsr+I/iJ4L+MmkXvxjns/GXx80e38AfFDxgfAtjf6ZH8Fkstd0eT4W/DrwrdeIw/gi1ttJ8U+LrvR/EV74g8R6rb+M/FnibxXrseu2x8OeHdNAPp3xfaeNr7SPs3gPXvDXhzWXnTdq/inwtqni7T7ezEcwlWLQdM8X+C5p7yRzD5NxLriW1sBI0tjd5EVAHyRpX7HfiH4a+IfFPj/AOA3x98Q+BviL8R9RttX+MGseN/AHgX4i+E/ijq9tqviLVLfV9Z8JWNp4AvvCV9YN4l1W2060+Gvinwl4aaO5udT8QeHNa8U3Wo+I5gD2D4l/ADQ/jVrGif8LYvrDxJ4M8PRXAs/BWn+HbfSBrz6tpiWHiTT/G/iWbUdW1rV/CesNDbtceDPDc3hXQtc0z7Z4X+JsXjnwtdS6QADxj9nr9h3w/8As06n8PdX+HPj+80240v4X/D/AOHPxcs7bwR4LNh8WrnwB4VtNE03xPaahrFhrvjH4bNqupwTa9rnhbw/4vvPCV5c3d9eppMPjG91nxtdgFB/+CePwK8OR+Bbr4T2T+BPEHhPxD8N9S1HxJq1x4j8eXHijRPh3YRafp2j6rpPiHxQui/bLy007QrFtZWxZrLStH0zRrawOjWtlpsQB9H/AAS+ETfBzSfHWnP4ii8RS+NfiZ4u+I8txB4ftvDtvpz+Jjpo/seDT7S/vbd47BdPUC7iNtHO0pK2FuqBCAdRb6V4v8MxnTPDEHh7VtDWSQ6ba63qep6Nd6HbyyySiwhnsdE12LVrCyaRk06CSHTp4LPyrCW8lEKXZANzQdFuNPl1HVdVuYb3XdZa1OoXFtDJBZW9tZJKlhpWnQyyyyrY2AmuJVknka4ub671C9cQxzxWMQB0dABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAc54w/5E/xZ/wBi5rn/AKa9QoAu6B/yAdE/7BOmf+kcdAGtQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFAHOeMP+RP8AFn/Yua5/6a9QoAu6B/yAdE/7BOmf+kcdAGtQAUAFABQAUAFABQAUAFABQB8mfE79p7S/h5+0j8L/AIGvBPeDxV4B8ceLtbhsPCXiPW9cutXtbvSrT4eeGPDmoWd7Y6HZ3viFbHxxfaol9/aV/bjSfDdo2nWVjr6eIoQDiP2Vf2pPiD8Z/HPjb4U+PvCXw+s/FPww0rUZ/iNr3gf4hXOp2OleMbjxxquk6V4E0vwrqvhfTr3WbLS9IsLttT8f6JruteFheWmn6RcX0XjW88U+EtCAL3hf9qPxtrnxu+PvgCT4ayLoXw0l+Gdr4ZsdQ1nwb4T8S3WneKfCt74ik8Ya5N4k8cwsIfFEkotdE8If2Fp2veFtL0WG/wDGM6eI/EV54Q0QAy/Hf7cfh74Zfs3fs6ftL+LvD2naf4J+PvxE+CGgG817xZpnhSx+Hvw8+OOpi40Dx54n1WRfEWlTP4P8LXmnap4jsV1Kz0+/nS/li1fSYStrGAe++Cv2mv2ePiL4Y8M+MPBfxj8Ca14f8XePH+Fnh2+TX7Szl1D4oJY32pH4c/2fqUlpqNn44OnaddamnhO+tLfX5NMWPUY9PayntriQA2PGPx7+CXw98NeNPF/jT4p+C/D/AIe+H3iSz8F+M9SvtfsdmheN9Q03QtW0zwTdW8M0t1L4x1aw8SaBcaR4TtYJ/EWqf2xpEOm6ZcXF7axSAHi+u/tpfCO98IeBvGfwb8UeAvi3o3jH4n+JvhPcatafEC30LQvC/izwt8D/AImfGjV9H8SahHoXiG70vxFbaT4Aj0i48LX2l22sWOo67pzalFbeTPCwBpyftH6hqXhT9mrxx4c8K6peWXxfvbV/EvhOx8KeItd12Ky1D4H/ABD+IEWkeEvEdzceEdCGsaR4j8NabYX19q1vcWt/oqa4sWmafd7NStQD6woARiFVmOSFBJ2qzNgA52qoLMeOFUFicAAk8gH5m+Mv23PH2ieONe0+38JT6VofhfxJ+yx4cv8ARJf2d/2pvFWvaunxz/aE8LeAfEWsReJJPCXw+Hhg+G/BC+Jm8O6HqngPUJvE3jHUPD95pWrX1romp+D9XAPYvEP7V1z4R/ZC+L/7RXi3wy/hfX/hda/EvSm0fWPC3xVsdC1bxP4Z8Sat4W8C6lFp+u+BvDvjJvDfjq5PhjVNVi07Rr+TwbLq+t+D73XNS1vwvruo0AP1b9oj4leGfhN+0b8Wh4P8IeOdA+BHhvxheJIdU1r4YXnirxP8I9D8dQ/F7R49KeD4uSaRp8viDwbp+o+BdSub6WWbQfFjaLrdnHqvhCfXNdAPYPjP8Z7D4O+CbW/vk0G5+IPiZJNG+Hvgi78S22lWHifxy1hJNHYTeItStrMaX4S0iULe+K/GV3p0cOh+HI7jUn0ybVJdM0O4APMfg9+1T8O9U1fRfgf8Tvi18MpPj/p1vpmh6gmhazpen+FvitrqaPaXs2v/AAqV9b1S3uLjWrWVde1D4WLq9/8AEHwLa3MK63YXnha48LeONYAOF+M/7YMvww8MfGHV9P174RaxqPwvT4r+IrS103xNp2v2+u+EPhv8P/ht431HRfE7f8Jt4Yl+HXxLiPxCtdIsvByf8Jff+JdPttJ8a2lpo+j6/Lp2mAHofwk+P9z4o+HHxh1/4h+N/hZ4d1n4XeM5PB2u+KovsGlfCfwxrGteBPh/438LaXfeIJfit4lh8Vrpth8RvDNp4g16HWfCsGqa7c3fh/R9FsZbRNSuADhvGX7XPizT/hBpHjPwd8MIPFniG90L4AeJbnVfBHxF+CnxA+F8ui/Fzxd4d0GPWvC+qR/GLwb4w8S+Dtalk8UaP8PfGt54S0Cw8S6ho8uqizi0u11VYgD0L42fHzV/A/g/4XafpK+F/hl8XPjN400zwt4K8N/HDU/DEml6FbaQt54u+JGq+Ll8F/Eaayv4NA+HXh3xBcacPCvi2/huPGN/4K0K7vbddVmmiAOevP2p9TvPBGj6xo3hPSbTxDceOP2a9Lv7m38U+HfiF8N9R8D/ABs/a3svgBB4l8E+M/CXiDT7jxHB4j8O6b4m8a+B9QvNI0qawtZ/DEvjjw1Zaz/bPgZADq9c/aG1LQPiP428E6h4e8B2mjeDNHtLq98Y3vxO1qK0HiXWNSsbjQPBF7pdr8K7+4tPEX/CE3EfjfxXbWtxqA8LW2vfDCxlGoWnjnR9diAPLv2PP2wdU/aL+Edx4r8UeH/C+ja54V+Fnwp8X+KfFemeIdSs/hffeIPGPwZ8IfEfXYLnUdY0JbzwFb6Lc+IpINQ066fxNJo2l2895JrGpCAvIAc14N/be1m71jxtZ+LdJ+EEGm6P4r8FaNpdzbfGOPT9Z0u58ZfFzwV8L77wl4j0i68J3S3198P11288f6r430y4t/B/if4e698F9U8FHWLHxdrvijSgD2fX/jj4gsfhX4FfwT4g8C/GP4m/F/xT40+G3wz8VfDjSrFfhTH43svA3xb+Iej6lrumar8YJZ7zwz4V8PfDm6tfEi6Z4/XVPFer2ofRI/DttrcEWmgHJH9rDxCdU8Q+OYvhb4qm+CfhfR/CnhjVBbWPgKb4ht8bfFvxKfwvbeH2vLj406f4dttB0Tw9deDtcuv7Ns9fXUj4+01LvxP4f1vwh4w8ISAGcf8AgoP8AfDv7SPxy/Zx+LHi/wAGfCjXPhV4m+EXhrw7qninxtao/j6X4o/D3w94wtdRk0yXSrKHwVpmnal4gsfCFrqWs6tcaZrWuyW9tb39tqVzBpJAPq+8+Kvwx06Px3NqPxA8I6fF8MtX0fQPiLNf+IdKs4vBOt69o3hvX9C0vxTJc3USaJeazo/izw3qemQX7Qve2es6VNbCRbqEsAebePP2tf2Yvhb49h+GPxE+OXw98H+NpDoqT6DrviC1spNMn8RSCPwzZ6/fSN/Z3hu/8TsV/wCEa07X7ywv9fVlfRba8Rg5AOi1X4ia5ffGfwv8LfA1to2o2mi6dqPiz4261fLfXA8JeHbrSruw8A+E9LNlc20Fv478d+IrmLxFZLfm9s9N+HvhLxhLq2m2+o+Ifh/qEwBj/BT456B8UvDmsaS+t+GdT+MfwzVvDXxs+HHhXUrFNV8K/EbSEmsdcsLbRdV1p76w8O67q1ldXXgLV9bvUsda8PT6dqB1ZgbyWMA848Y/tXeG/CPxy8EeCNU13wXoXgif4V/Hbxf8QtR1/wAY/DWzvvDfiT4e+LPgFpPh+yvdbn+KFppPhy2XT/HvjGfW7HVba4vruSwsbixltLPTNamkAPV/HXxQv/Bnh3wvdazqHwv8CeK/EnxC8P8AhvSfDPxG+IdjpNp4i0HUfiZpXhWWLQdZSKGS48aah4b1fT9X0XQLDTNYhbxlfaX4Ce4uY72LxPQB852P7VfxcuPjnd/DiT4Mao2hx/tCSfChbWEeAV8V2fhhf2R/hh8a5ru/1CX45nQJtd0jxR4y1HUtXvLCKbTpfhxbWeiaFpGp+P1lmnAPcviZ8ZNS8B/E/wCH3hDHhrT9C8S6X42uLzUPE01zaNfano3h6XUNOkGqW9+E8DeAdD1J9B0Px38T9a0PXtJtvGXjv4RfDXw1oup+KfFWpXWkAHdeGPiJpvijxRe6Jp3iPwHqyWFtqVve2fhPxLN4n1LTde0m40VtRsNau7XT7XTtFngstd0yddGvzHrc6XAvraCSwivJIwD4j1j9tbxLrngn4weJ/hrb+HLgeBviP4Y8RWGqeLNO1rQPCOj/ALM+kfGDxf8ACbxb4s1nX0fWrnxvrHxL1/4BfGOX4Vp8PND1DX9S0Hxr8Irjw54L8T39hr8lyAfSHwn+P/iD4r/s9Wvxy0b4bW+pXviO31O9+H3gjwd47sPFTeLbB7qe18H3d54muNB8OWfgv/hK1S21PULTxTY2eo+BdKvIofH1npPimz17wvaAHi3w0/bJ8S+MPgT8APiJe+CrC71X46aP8HINA8RabrHg6z8PjxD8XrXRP7A1a+8AH4laz4w0nQLGbW7e81zRjqt/4k07ToL2LEupRG1IB+gVABQB+cviH9vTTPDPxf8AjP4Rn0e81vwh4G1RvC2l6t4Z8GeMdfk8PS+DfhV468b/ABQ+Jfja80dL6TUPBmleNLfwj8JL/RtA0eO/8B38lp8QvHWu2/gTxz4G1OgD6i/Z6+KHin4r+DL7XfFOh2+ny22oaXFomu6doHjjw3o3jbw/qvg7wv4kt/E2maD430iz1HRPs2pazq3hS+0mHWPE1vFf+HrjUl8REagNKtQDzXwL8Z/jL8a/g18Pvib4P0bwR8KR8Rfh14M+IWk3HiDwn8Yvjc2nW/i/wnZ+I4dLvvC+haJ8Djezaab61tnuNO8YSLqP+kPbQQMsHmgHtXib4w+DvAfw40P4geLtQvYYdesdDXQdHk8Na14a8Y+LPEWt6cLzS/C2hfD3xS1l4m07xVqm2Rj4Q11LfWPDqRagfFsun2ula7qEAB4X8Nv2ptN0PU9B+F/7UXjL4U+APjL4mWy1jw9a6H4jtYPAOvWvi/V9R/4RnwFoPiHU9bvYLzx94beG58ET6ZfXlhqvxLv/AA5q/wARPh/4bj0C51jw3ooB638SfiT4l8G+PPgvoWk6NHe6V48+IPiDwLq9teQxR6jrBtvgp8Tfidp7eB73+2Le0i1myuvh+Ib+PxVHpvhu50GXxJ9n11PFFl4d0jUABfgD8TvEfxY+H/h/xd4g8MS6X/b3h7SfFVnrljHpUHhK/i8R6h4gmi8KaHA/jDW/Fl3qfgHTrLTNK8UeIvEegeF9K8U393a+JPCelWtveat4S0YA9woA8e+PXxMPwn+EXxB8YabqHhe38X6b4O8U3Xw80rxZdyw6X4l8e2uiX8nhLw69nZ3dpquqprGvLpmnz6fosg1a4iumisXS6eJ6APjqD9rr4kaH4/8AhFH8QPGv7KNl8K9f8b+JNB+J3i7wv4y8cs/hDRbD4XfE/U9Iv7/W/GmmeFfDPhyG6+I/h/wj4RlvtUvbmSbUdWj8NWunHV9StLyAA+sfiJ8XPEHhL4o/D74W+GfBdh4l1Lxz8Pviz4/Gpap4g8S6PY6Xb/DPxN8FPDkmmvD4b+G/j67uZdcl+LkN1Hdyw2cFimjzQbLyW9RoQC94J8Q/EKTxpqemeOdd0K703UNAuNZ8O6P4e+CPxa8Mw6AulatbWeq/8JF8XPE/ijVPCGv3l7Dq+knR/DSeHPCPiKeO28Q6vp9trGj6fq8tgAfAfgv/AIKN6p4j+J9x4M1i2+FeiaHZ+J9c0241aXxBcpcHQ9I+Ov7Mnwm+2mS616K0tTd2Hxs1zxMmoOJbND4cisPsjwNf6iAD1rw9+2J4n1f4a+L/AIp3eh6JpujwfGn9nTwjo+mtZatrF3oHgT4u/s8/sx/FLXWv3sL6yn8VeItB1X4s+Jl025sbXS4L6yttGsG0f7TFcXVwAYaftu6z4V8R+FLf4l3Hw0+yaR4W8Naf8VPBvgK/uNe+Kms/Efxdf6IdV1n4GeAovEN/4t+J/wAM/gat9o2g+MtS8J+HfEWpfEe88X3urfDw22sfD3Uvh/r4B+jljdw6hZWd/bCcW97a293ALq0u7G6ENzEs0QubG+gt72yn2EedaXkEN3byb4LmCOdJEoAs0AFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQBznjD/kT/Fn/AGLmuf8Apr1CgC7oH/IB0T/sE6Z/6Rx0Aa1ABQAUAFABQAUAFABQAUAFAHxl+0L8Eb/x98Xfgn400myt7LS/Adn8WvEfiW8g0GPUjr3ifXtP+Fvg3wvpOoQW+h+I5pLvULG1llbW7/wx4j0/TNB8NPHq2k3OmwW9oQDjf2evgL8T/C/xf1H4k+JfDHhPw34feDUYFtfF+m+FfFHxP+3yaZFpEMng7XNA1DxDc+B9Maxt9P02+1ST4l6v4Y13whpHh/wH4O/Zv+DPh/RNJRwDwH4//sufEX4tfFbx78avh18M7HV/FfifQ9L8Nahqvj3w94R0LwxH4C8PwkaJc/D7wb4wvB4l8a/HvS3utQjjm+LWn/DT4W6tYT6Z4dPjfS9E8PfbtcAPSfif8HPiX8Tv2cf2cvAvwb+Euu+DNU/ZX+PH7MXizSvA/wAete8CeC7zxZ4Q/Z+vdIvJtN0/xB8Il+JXhG3u9V0+xtdOsdR0nTLbwodRW7/s22t9LghhoA898dfsuftMeKdI1L9oG08CfD+2+Nsv7b/wj/a/s/2f1+J8qeHp/DPwx+AHh/8AZ9t/h9qHxdPgP7FF471zQ9NvPG2pa7D4XufC1hqc2n+B7W91Gx05/G16Acx8RvA/xh+B3gjXf2l/jPP+zl4L8Y6V+3/aftSaH4H8S/E7x7cfBnUdB8Qfsm237M1l4F8TfGJfguupeDfFWnJqGseKtG8a3vwzvPCVn450Lwz9qFrpN+dStQDJ/Zb+CnxZ+Pnw78afFLULL4Z+G4/G/wDwUJ/aF/aI06PUrXx74w8F6v8ADvxH+yp42/Z20vUfA8vibwT8Lde8X2d34u1qHUPD3izVPD3hXTNd8IWs/jjSLSSK40bw9dAH3L4P+C938MfEP7OvhHw34C1m8/sW90fxv8XvipYatokfgS88Q+CP2XNb/Z5sFbQtW8ajxPb+JtftJPB0dinh7wU2h3Hh/Rbi78Q6/DrFnHDOAe6zaT8XH+POma9b+MNPi+B9t8Jtc0nWPAU3h3Shq1/8XL3xr4cvPDfjDTPFiXVxrDafpHhHTvE+ja54durTTNKS61fw5qmn3Wu3r6rDo4B6tIpeN0WR4mZGVZYxGZIyVYCRBKkkZdCQyiSN49wUOjLvUgH5c6p+zP8AHXxnrf7Sek6PrfjDQta8RXXwJsPBn7RPx21bwP4m1uXxb8E/ENx8T9B+KPg74U/CuTTfBV3o0nipvCul6Zo17pPwvhsbvSvEGsa34J1WGCfQNdAPSdQ8EeN/Gn7Gf7SXwQtv2cLr4WeKdC+F/wAWfh78LPCt14q8I+MbTxv4g8WfBPVbOTxx4X+IMWql9Wl8a+OPF3i7TLvxd49h8KfETXnnv/FfxL8O6LqniHU4XAJviH8Ofina/sf/ALZPgLRPhtr3i7xt8Vr/APa2s/A/hXQNZ8A21/qlr8U7nx5B4P1iW+8UeM/Deh2Vhcx6vY3d5BdasmtW1tKVGkS3ita0Aev/ALTp+JNr4MMfwU8EeKdW+JnjRk8C2njzwfL4Vjvvhto9xDql5P411Ox8TeOvA+n+KH8NxNf3fgvw5rGot4aufG11p1l4ku9L0HUtWvnAM74ZXPj3W/iVptn4/wDhB8afCWn+G/C13rvgjx74p+K2i3WmaxqEgsvDXibwx8UPAfw1+MnizwZe+K2t9RtPEPg/VJ9N1Dw5exN4rutD0nwXq/h+1XVAD5G+Ov7NPxb8fJ8dNQ134ceOtWtv2gdB+O2lJpHwK+Kuh6d4p+G+s+PPhR8Afgp4ZvvF0vib4ufs56P8QvCh8L/Aey8c654Yh8T32m3HijxZN4B1Dw9f6X4T074oamAe3/sz6H8X/hpo/wC1Zq938DPipaat41+NulePvht4b+KHxP8AAms6v4i0a++DfwV+GNtbal45H7R/7Q+p2Nt4Vu/h7dah4t1PWtWju/7Fdrn4eeBdUvPsng4gHnnxC+HPxo0T4TfCv4Q6B+zlqvjfxN8PNK+BHgXXPjB4MPwIvLXxV8L/AIbeOPAfiLVtO8N6h8RPj/8AB/xp4V1fVIfBEOszeGdX8Oa74UsPEtza6Raa7rFpHceNkAPcvjjo3xP+Iegfs5/EDwl8Nfif4U8UeGPibqXivxV4Z0bUf2eH+MngbSNZ/Z3/AGifhnZ3dtP4q8deJPgxrmr+G/EvxK0S8n08eK/EuinT5tSurGDVJY7ixkAPGbH4RePNM+Ffwh8CaF8FvirYXWj+Pf2NPhbZy+KvFfwLv5/DnwL/AGR/jn4T+Jui/Ef4mzeFvH8tguveJfDdn4ssZbb4f/2/LqfiP/hH4H8GeF7W8dIgDsPih4C+I1r+0PqnxfsPhJ4o8b+EbLwlqPhLw7qHw81fwl4a+KGla74lb4cXfxC1m+t3+Kvwe1HxN8Mrix+FHw/sPD8i+M7n4kJ4q0/4gaQPh7r3w71f4deILMAq/saeGviP4E+Bmi/CrxJ8Nfi9pGseGfgN8MPDGpx+LfEGl6H4OvfiF4R8BWfgvWIvA/jCH4p+NfiFov8AwkiWGnRw3mm6TpHhnw1pOgWGt6Nomj+LdQvrbUgDx/4Efsl/G/QfihqeqeNNW8ejQNS+MHhrxv461jx38VPHHiG78bJ8LvhD+zDpvh3xV4d8MwfHP4ieELEfEL4xfCzWdTs9O8X6Pq/jjw18JtE0/SbnxP4Tv7jSfD+pAHu1r8HfGviD4Nf8E8/DmqeBmnn+Fl/4D1P4peHta12DQ5fC9rYfsbfGn4fXa6ld6dcXlzPd6Z438UaBoslp4fXUpZb25WVyugRanrEIBz3iv4MeLbX4Y/Cfw9oHwc8VzeOfEXjH4Q/Dzx3c6F428J/8Il4L+EXgX9pnRPidq/ijxcur+PNLh1x9H8IWvjG/+HOpaF4d8TeMo9d8SS6Bq2i2Ka5rFqgB4x8av2V/2m/FnxA/4KE+EPCngH4Ta18Mv29dJ+GPgtfib4k+It9a6t8I/Dui/AXR/hN408T6t8Nl+H95L4p8QaM6al4g+Gen6P4qSC98SwaQfEOo+HLAT6rQBo/G39mz9q/xD47/AGyfBfw58E/CTWPhp+1h42+B/wAUE+KXi34t+IPDOrfD+4+HPgL4F/DzxH4Ln+HOl/CfxXceKNU1O3+D7a7oOsw+JdJ0RINdS21OaK8017W6APlv9sqfxpD47/ab/ZC+GupfBzx54j/ak/af/ZT+LTaBN4t+J+nfH3wY0WsfsnaLq1t/wrHTPgv4i8OeMvh9o3h34QnxnqHxbb4m6B4b8D+Ez4l0/wAU6euraBYWupAH61fEz4Zw+MfGPhC6sfhraXfg74X+LdX+MPibTrLSPC1lrfxb+JKeGNV07wh4X0CLWtR0HS7tLTVNXXx34m8XeKNX0bTz4t8N/DfRLK/1mzuPHF3oYAfsw+A18BfCgeK/FHw4TwL4z8UeJfjX491PRX0TQ7/x54Z8MfFL4+fFL40aF8PNbufBsuvx6jqXhW18fJZ6po3h7VNX0VPEyaq2iXF2ksd5KAeNfGLwP+0D448e23ivwp8Lbe/+CFt4q8H+Jvin8FvEHjfwz4d+JHxy1zwBLdXXg/xN4MEFvqHhPw/pFrdW3gy/1zwr8SfHWg6n8VYfB3hLwZ4sPwy8H+HfFml+PgD1j4lL8UPjd8NfA2maH8HvEXgLWZ/it8NfHms6X8WPE3w+0t/C1t8DfjD4O+Kdlp+t3Xw28VfFi3vJPiRqXgay8M6HeeFn1+10jStVv/GGssr6ZpvhnVQD441Lwb4m/wCFp+BtT8TfsC/F7xLH4k+MXjr4ifFaRtM/Y81vwJcR+KfhPH8G/DWjafbr+0Q/2rQvCWg6H4Ii1PUvEmkaTf6/Fo2peOJ9Asdb1KXwxbAH21rnwvC/tffDb416f4QmvGtP2efj/wCCvEfilp4bm7tNQ1X4g/st6v4J8I2j6jqJj0uHUrTwv441C0stMNrorX8Wt6lqUqahfzXkwBN+zhpPiyXTfjb4h8d/DvxB8PG+Ivxt8Y+JdM8G+NrnwTqHiBfDUfhnwX4Mhu9XXwR4t8beGvI1y58K6jqOmwW3iC9efQbrTbq9jt57mSxQA+YNU/Z48c2eqfEPxDp3h3Ur+88aTat4es/C2h2sem6rpPh3w9+07+2B430zWbLxCnif4dxLp/i3wx8dtKmbRfDnxm+F3iq0sNLWC51TXdH1PU/BcoB758Efh945+APwW1/SNV0/wLb+J9S8QX19o0XgP4fS6zJDcamtppulX3jtfhx4O+GOl+PNS0y3tLWKE+H/AAJ8MfDeieELHwz8NX1mLT9CPxSugD4G+GX7IXiv4DeL/hvrmn/s7eK9T+EXws8Qx+IPC+neGov2cdf/AGiNV1+3tInjb4hafqXinR/A/gv4YeGNfvdZ1bwJonwO8V+I/Gj6Nb+BPCdr4b8C6L4T1K08RgH6keJLD41az8UfgTrvhLxHbeEPhhpll8QL344+BNc8PeHNU1nxQ+q+FdPtfh9pGn+JrPWdQn8Oaz4Q8TyTanqS6Et/oGvaamp21x4ijNto9tqAB7VQB+ffin4OeIPE+ufErxO/wJvdZj8SaV8SPhrdaIfE3w98Bp4u8AeB9B0AeC/A0VrGfEEfhP4T/tAav4cuvC3j7VUu9R+JniPRNM+D1x4wOmfCjRtM+Gfh0A9U0Hwz8S/DOl/tGr4Y0XxtoNz471W11n4TaF4q8S+D9e8FeG/FnxC8NW134k16yh8KzP4z8GWumfEjXda1j4s6LceLPE+ggaZceM/gtdrL4h1DwnCAeNwfs6/FTwt8Cf2jvhz4VXx3LeWmgeJvB/7Okdp+0J468KXNv4Z0f4B+DPBnw+tvDOmaB4js/DHglE8TaRfNZ21xc+H7e21eS71q/isre5OpyAH1L8ctC8Y3PhGx1P4X6bLJ49g8efA6zm1XS4fC6+J1+Glv8e/hrqnxUsbPU/FYFg1u3gGy8S3ktle3BS5liVrSGXWDZZAFi07x9d/GDwpc3cPjC4+HsHw7+IK69H4guvhs3h9fHSeM/g9f+AJxpWg3P9tz63b6dp/ja503U1s5dJ02KK6W7vbXU7nRo5wDhPF/wbk+JHxw8B69cxeN9I8GfC7WfE3j271af4m/EfT38SfEjXPAuu/DjQ9L8D6HY+M1h0PwxoPhXxl43u/Feow6foUFxrN14R0/woNX0+48dSW4BN+y18I7v4U/BP4fQ6vp/iix8eWXw50nQNb0bVvHPifxHZW09jJe39tZQ6HqfjC78L2l5DPdOv2mxFlcKJ57KfUoYHnAAPTfgZpfxa0T4O/DzS/jt4s0/wAbfFq08N2K+P8AxVpWgaZ4asNW8RP5s11LBoOjXFzpWnGBHhtJo9Mnk0+S4hmuLNvs8qAAHAftV/D/AOJnxR+GGk+CfhhpfhO+1Wf4q/BHxdqt14w8Wz+FtN07QPhh8ZPAvxV1PyZY/hj8UYtSvdbtvBL+G7Kyu/DN1Yx3+rWl5qUUulwX+0A/P7wT+zF8YPDuteCfGGu/AbQfF9n4R/ab+OXxB8faVoWnfCzQPi74jsJP2mvjR8RvgL4h+HPjjXNf8EaJrGmaNqnifQ/HnxPS/Hwpm8Q+DbPwH4X8O6Zri6L4w8AaqAfY3xw+FnxN+IPxN0Pxv4STWrKHwXqfws8D6cmk+MtY8Ba1f+ENY+K/hLx78fNSbX9K1mzu18H6loPhD4f6KLHSpItc8QXuh+MtJ1LQ9T0lPCks4B6l4B8GeMPC/wAYvihrl7b+Iz4M1X4ZfB3TvDMV/wDFTxV4706fxboniv49XfjSPTNM8Yaw9x4f1I6VrngUajqC2FnY61BJpFsuq3kuj3sNmAfnP8P/ANjb4g+E/im/iLX/AIGaBKmo+Kfg2bbWvDOo+B9T0SybXPGv7Pnxb+P2s6mniDxHp+u6d4P0DXPgdf8Ah7wtptjpWr67qt/4ptbSy0eLw59u1SIA9V8JfAD4n6d8L/FvhDQvDnjbwUqftYfs5XvgjVddk+G994zi+HHwX+Ef7MPwdvfincabputeLfC4jm1H4R+IPE2laXqPm3d/oa6de33hy3S+TTQAYej/ALMHxq8I/EfwlY+FYvHF1ovw3/Zs+MPg34ean4r+KPiGx8Ey38t5+yVp3gv4ea1qvgb4m2XifQdQ8e2vw18ZeJfE9x4Q8EeF/h/8OtVvLPQvBOkeNPD/AIO0q81kA+6fEPhDxZqX7Qnwj8bQeH5ZvC3hv4c/FnSfEHiGD43/ABF0G00jxB4g1T4ZvoekS/BDStOXwJ8VRq9vpWtT23jHxjcW2q+BDpr/APCPWxutakFAHulABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAc54w/5E/xZ/2Lmuf+mvUKALugf8gHRP8AsE6Z/wCkcdAGtQAUAFABQAUAFABQAUAFABQB81fFT41+Ofh98ef2YvhfYfDSHUvAnxx8deKfBGvfFC78T6bbr4d1vR/gR8efi3pnh/R/CULSazqeo36fCENf6zera6BYaZem2t5L7WJtlsAfStADJJI4o3lldI44kaSSSRlSOONFZnd3ZgqIqqzMzHaqhiWwC1AHwzpH/BQX4C+K54NM0JviDoEni74cfEb4n/B/xn49+D/xM0L4a/FfwT8OvDcfiPxF438E+IP7CMmueFtP0y90nWEfyrHVdf0HUtL1XwnZ6nY6npN5MAc18If2+9D+I/x68K/Al/AHjzVl8Ufs0/s1/HXSviv4N+FPxkvfhzql78cYviJdHzL268DSWvhHwFBY+EtMk0bxf4r1q1Qa7e+IfBevxWXiHw3q60AfS3xj/aH8E/BTVfCHhnV/D/xH8b+MvHOn+K9b8MeBfhV8O/E3j7xXf+GvBFx4UtPGviiay0S0e003Q/C9z408KWt/danfWs93f6/o2l6HbajqtzHZEA8V8F/tveHfGH7Vfj/9mtfhZ8Y7KHwv8K/gT8SdI8cv8GPjM+k3P/C2tB+LHia407xnJJ8PYLD4d/2RpfgTTdK01PEeoxajrHju58VeAWsLXxX4Z1fSVAN7Rf25/gRdQfEx/Glv8Tvg7d/Cr4W6j8cPFGifGL4S+PfBHiO4+DemTXtrffEHw5oF1o91qniSxtbyyfTbvw9pVrP46sdYuNK0XUvCltrGqaPY3AB458dP2/p/hx4W+CPi7w98Ifi7o9v4z/ag+HfwU8c+FPiR+z/8X7f4gzeDvGPgf4m+J01T4W+FdEtluvGXiW/ufBlhY6bFop8Qro8lzeWXi7w9Y6gYkjAPsD4F/HjwN+0J4U1vxR4KtfFejzeFfGGu/D7xr4S8eeFdW8H+N/Bfjfw+lhcal4c8TeHtWjWazvP7O1XR9asp7eW607UNE1bSdTsL2a3uUYgHxh4u+KH7Rev/ABC+N/g7wP8AEjVdLlsda+I3gLwPouneE/htqeo6d9qs/wBn2wg+Ivh631fSbC78Q3fwPtfH3iLxDc+F9V17Z4y8W+KfhXpl68PgnS/Ht/CAez+Cf2gfiZb6T+0jpXj3wF4i1n4h/BvwJF8XPD3hjw78Pxo934s8DeIv+Ft6Z8O/C2haVb/EfxtqXizx9r958F9cv9Z+zJoWlQ6r4o0bwV4dttSfR7/xFcgHzP48/be8Rw6/Efh5f+Or/W7r4jXWm6F8PNd+BF7pOnX+h+DvFuvfAvx3qGvXt58SbbXfC/h2DxjrOheMmfxXB4du7W6sPBnhvUrfQdW8XSBgD7u+C/ifx98SPgP8N/Hba3o9p4j8baNb+MZNR1fRbLxHosui+I57/WdIh0KHwp4g8Kw3Wh/2TfaSPCmr3N2us3XhmPT7rxXp/wDwlVzq5QAwPAXiv41fEHV/iHYw+K/hrodt8NPjJB4F1I/8Kw8ValdeJPDmk6B4E8Ua59ilb4y2UPh3VtbtPEl1pGn389trdpokkcGqTaXqxD2DAHn/AMafi98Th8ctK+E3whOojU7H4S/EPWInOl6TceENa+MOtaz8MfCXw90XxZrFxY6pqVp4a+FWh+Ob/wCMPxT0vQ4LXX4/DNz8P9TsH1dbr/hD9SAOj/Zc+PF58a/A/wAJNVj1PwBcw6/8DvBHxA1iwh+KkPjf4q29x4n0bwzcaLceJ7LSfhz4I0GOY+Zr1v4vvrG0soE8RLpsem6LZWNwbcAHmSftTXfgT4Pad8RPinfeMr698U+KfiN4L+Hlv4S0bwnKnjz4oad8WviH4M+HfwT0m2Phuf8Asbxj48h0LQdG8Galr11D4e1zX7m8s9R1rTr9LSK7APQvjB4++KPwP/ZM+IHji/1DX/EXxkufCWv6j4e0pf8AhAvFEvhHx1rWiXuoJo2hTaV4I+Fuj+MPA/wfWHUvEl1qevaDDr+p+AfDGt6t4gub68EooA+SPiX+2T8XdAm+E3xF8D+JfDtj4G8feDvC/g610n4i+D7jxfpfhrxhql5aa9rvxX+NPiD4aa34Vk8IWT+FbHWj4e0PSLC5u7lfCXjLW/8AhD9M8D6jrfjjwqAfafx7+NOv+DPAPxL8Q/CPxB4S8S+LvCHwO1/4ueHPBcnw/wDGnj1/FUcej+LLrwfdQ6p4N8YaLDHoHinU/D40q3kgjmmYC4vYr7yJbfABxPwJ/aA+JHi/xxp3g3xb4O1O7b4heJP2lvGejazd32g6La/Dv4TfCb4pWvw08MeHNV8MQaJbeJYPGGp3GqeFRqGj+JXuL0+I5PivdxeJ00fwvofhiUA7j4SfHHxH8QdR+P8A491+DQfDvwP8BfEzxL8IfhjMNH1uTx74q8QfCfxDqnw9+MPinVpYtavra602++LWma98N/hx4N0TwyviK/PhKTxKdW1iTxroPhnSwDyS1+O/xc8OeJ9Z+LviXwL8ZvEXw/8AGd5pHhrQvgP4c+BnxKu/HXw08JaFZ6xfWnxNupl8GxWWteLvFd1d6zffEfwjNrsS2HhK3+G3hb4fRar8U9D1fw74wAPZfi98c38G/CPR/jB4X1K3sLDXW0PQPCPgrx38M/GmieOviF8R/iD4i0Hwl8JvAGlaH4t8S/DLWfBGu+KvFOqW+gTWnjDQwbQ6ra69rM2iaDous3c4B5R8FPil+0hbeJfht8D/AIraLr2veP7LwjpHiH4seOJvAHwVttHsdNkTWrb/AISbVk8C/tb6xqXg/RvHniPQdd8M/C1n+HmoatrMulavNLoeo2vhX4i69YAGdq37UXiWH9qHx14E0jU7P/hFvDFx8PPhz4e8G654W8XSw/Ebx1qvgD9oTx/4x1jwJ4r8C+BfHOuXWp6Nc+BvD3he/wBMu9PbQtA0fwL8ctSuLLUdeh0n7GASfsVfH74yfGT4W6prnxf0O50YaT4VsG0HxLpvhTxxqWt+PLqyGrTeK/Hmmt/wrTwr4bvdCkurzTvC/gHw94c0XUtV8U3vhjxV4u0m68QeENX8K6jIAcYn7WHjWzjn8UTw/E7VGh+JFv4Pj8GTfCHWvCnhnwAPEt/8IhoPgn9o7WPEvw3sPE2gfER/Anj/AE74meGtd8KXOi/Dq71vXbv4W3lz4gn0Twf4r8WAHr4+JXxa1L9kL9o7xv4e1qbU/i14e1v9ujw98LLuLS/Cy3n9v/Dn43fH3wT8F9DsNKudOt/D+qXulW3hbwnoGnxazZ3La7PaW8/iibU9RvdWvpwDm9K+NmveJfiD8H/+EM8e+PZ/B1r8efFfw0+Mr+OJP2bLLRPI034XfFzSrDQIX0K2t/FM99dfGaL4a6NouoeEy8Gs6lcW+lWmo3emXt7DKAXP2mf2ldZ+EvxR8J6D4b1PTLiDwj8M/iT8VPF3gGTV9C0bxF8X/Ej2A8L/AAQ+BPg261zw1rst74j+I3iGTxVr9tb+FJbPxHY3/gvw7Dq90vhXXb2xvQD0D9nn43WnjfWPij4C8XeM7K5+JPhv4nfGVrDwZdR2lhrUHw28LfESfwzYXvhu1j0nSJ/GHhfw5LcaXoOpeLNPg1NbTXb2z0fxBqkGtXFrpwAPUv8Ahd/ws/6Gn/yieJP/AJUUAS2Xxm+G+oeFNX8aW2taguh6PrWqeG5Td+FPGNhrOqeINMVmfRfCvhi/0C28R+NtS1Xaq+FrPwhpOsT+L5ZbaHwcmrTXFssgB8meD/2kPiF4Q8Q/GLxd8ZPDfxAm8E2HijQn8SeFNA8GW/ifVP2Y9F1bwZo2r+CYtVsfASeJvEPxH0vxD4Ya38SfG3WfD0msR/CD4kajJpWiWXib4PNr3xW0YA9H+NPx51DwD8SvhRp+kajqNvoHiX4Y/GHxbfWdz4M1G40vVNU0y18DL4De+vrnTLO+iewutR1NtS8N6PrFhr7C9sLXVbEXV74ejkAOX/Zx/aZ1/wCJHxU8YfDnxPpHiWf+2r34jeMfBOv3+k6FoGiaH4U8A+Ff2U4NT8ERaMw0/wAZtff278cX1mO+8W6P9q8hrq2j1q7tE0+ztwDe/aC+K3xa8B3vwQ023t/Cng8+OfjhpPh1tcsPGura9bTeHPD3gr4i/EzxJo/ifRLr4G39xHpHjXwz8Pr/AMGJqeiXNtqnhXxb4h8NeIrXUr6DTZ9H1AA72x8f/FT4o/Crx54r+C9x8Gxry22v6R8LdT1XVfHfjLwbqPj/AMGeJ/FXhbxhoHjyzj8P/DDWtG0+z8R+G5fCUl5o9zfXul6gNW1uaw1GHTrbQL0A7P4E/FrSfjz8F/hl8ZNF0y90Oz+Ifg/RPEsvhzVGV9X8Lare2if274R1po0SM614S1mO/wDDusmJfJ/tSwvPILRBWIB6vQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFAHOeMP+RP8Wf9i5rn/pr1CgC7oH/IB0T/ALBOmf8ApHHQBrUAFABQAUAFABQAUAFABQAUAfHX7Rnwc/aQ+JvxS/Z98ZfCX4mfBbwb4a+B3jm7+JkejfEP4T+PvG2veIPGGp/Cb44/BrVLd9Z8N/GbwDYWHhweEPjBcX9hZDR59Vi8U6XBd3OsXGjzS6PQB7pr3hP4gTfFLwJ408LfEOTS/B9pa65ovxP+HGq6VDqukeLNMl0jU5/CmveGL9njvvBvjDw14mazW9ubOaTQ/E/hC/1nTfEWkXWtad4K1rTwD0TUtPttW03UdJvA7Wmp2V3p90sblJDbXdvNbThHGSjmOVtrjJVtpGSCaAPwV+Cn7P3x++L/AMSvgh8Pta1LxzpvwW/Zf/ZZ/aW+AHhfxX8Sv2S/FXwI8UacvxC8F/Cv4ReAdG8RXfif4yeJLL43+LYfD3hvU9e1Xxh8KfDfhf4XfYPDazTXsOteL9I0mwAP0D+DP7JHxC+Bfjr4MeKPCfxP8HanpnhP9kz9nj9lL4naZ4h+H+uzX/iHSfgBe+NtR0Xxf4C1HTfiBpsHhbUPE8/xA8R2+qad4g0/xLa6fDDoFzZzTyW+pWt0AdN+2D+zFqH7Stn4CttP0H4DalL4TfxUYda+K/gj4i6j468JXniODQ7GLxB8JPiR8M/ij8O/FPw9urW0s79/E2k2E7N44dPC9qfEnhpNFe8uQDhYP2PPjL4f1PxVceEf2mLmC8+KH7Ivwq/Zk+KPxN1/wj4h1H43nxh8IPCnxt0fwn+0F4F8Z2HxK0qw0jxxq+tfF+bxP4isdc0fWDHq2h2d7pmupd393NGAeC/A7/gmh4m+F3jLxj8Qb6D9jTTdQ8Rfso+Lf2ZZ/APgj9lfXoPhr45vtZ8U+ENc/wCFlftAQa18YZ9c+Ntz4pi8My23jPQdXv8ATNUubLU59MuvG+t3Md54huwDpvh5/wAE5fFXhq4+Hl5f/FDw94X0XwL+038If2g9F+DvgPS/iJqnwh8HWfwy+G/xM8Dah4b+Hdp8QviP4h1jwve/Ea48cWWteIJ9NksfB+kw6Bo+naP4GbUjrXiW/APvH4QfCGX4WeJP2hNek1+PW0+Nnxsl+LtvbJpr2DeHYZvhJ8JPhy2gTStf3g1SRJvhxNqw1JFs1eHU4rM2KSWj3EwB8m/FL9ibxP451D4t+MNM1bwBN4s8T+K/ifrPhfSvHdn4k8beB7/w/wCLPhj4F0TQdD1bwp4hbVvh54N1iD4geCNB8V6544h+Fvj3xMdF0LStA025Fjf6xYAA3/hR+yb4g8A+Evi94d0vw78JfhLp3j74f6j8MLHQfh3aWvjbUZtFttKiTwH4u8T/ABB1L4b/AAi13xP4j8Cah4q+KMMeh+JLPWLfxFpGp+CfP8aaJrdj4w1vVgDxfWf+CcHivV3sra3+KGheHrLW9O+Ndpqz6Hovi+HUfhZe/GWDxpJq3in4V6nD450+DXPiF4CT4j+PvCfwf8WeI9B0zTvCujeJrnxv4i8OeI/F+geGdLkAPvL4LaT8X/CXwu8JeFPG3hT4TaXrXheFvCsGlfDjX/FVl4FsvCHhq2i0Twjd+HLbWvC99qtl/a2m2FvqFz4WvpZk8JC7Phu38UeJ49MTxHeAFHwz4A+J3giL4u3Xhi88DNrXxI+Jk/xD0+511vEV9pOhR3nh7wN4evdHvNO0+20m71hzaeFbqW11GHVNNWK6v7aSaxmhspbe5AOy1Pw54hu/jb4H8Xw2ll/wi+g/C/4q+HL+/bUCNRHiHxZ4w+C2p6RaQ6V9kIksjp/gjWZrnUPtoMNx9ktfsj+d9oABx/7Nfwt8R/Cz4H/AXwb4v1vUrnxL8Pfgj8Pfh5rmkQajYzeGLXWNE8JeFNN1f7Emn6Zp66oNPvtBks9G1a/M96umTXQExe8u5HAPEdG/Zg1rVvhy/wAOfjJ8O/hn8T9CV/i5a2vh/Uvil4vh8K2Np8S/Hvj7Xb7xFpulwfBu3utP8fTeGvFkPhmLxj9vuPEHhCyTXLH4b6xoVv4k8d3WsgHstz4B+I+r/szeN/hFrzWdz4sn+Fvir4Y+HNe1P4hal471PxXE3ge88L6B4w8feLLz4cfD5x4s8R3Ei6n4wSx8Nz2FvqM11c2N/eRymJAD531X9kHxxOfAPhzwV4sXwhonw70yy0Lw/wDELWtU1q5+IekRaRNaNJPomg+GNRtFay1+70nS9bt4NF+I3w98H31/b6cvxv8Agp8U7HTItHnAPbtS+E/xftPjZ/wsTQviFpsvhc/BHwd8N9cku/DmmXnxc8T+JfDPivxtrb61Y6jjQfhr4VXVR4hsLjVLqTwZrNlLIusWOj+FNFjbS7yMA534e/B74z/D/wDaF8a/F2e88DeJvDvxzg0O08feFhr3izSj8El8GWOuSaAfhQbnR9X07x3YeMrvVrq4+I8F7pvw5vNR8aTv4+ikngu5fC1kAL+y/wCHPFvw0sfj58Bte8FXiWHg74vfFnx98M/FF9Z6hD4E+Ivw5/aB+Ifjr40aPp1v4hktNSi/tnwD4g8YeJvhh410iS3u9ZsrLQdA8X3Vhd6d4o0ee5APIdG+E/7WVhoPjrxBq/ws+AfizxL4+8QnxX4o8B+MPjD4h13wJc+F/wCzrLw/L8EPCXg6b9ndNB8CaaPCNgbGDxhaeItQj8QfEO/1Px98Q9E1nRb5vBdoAfSvxr+B2l+N/CHw40jwj4c8P2l98N/if+zpr/hKzZV03Q/CnhD4cfH34S+NfFEHhrSraI6XpN9F4I8F6lo+i/YbGC5+xyf8IxbXlppGoX8TAGL4L+D/AIpl/aE+N/xK8eaFpFn4S1fw18AvBfw2trP4n+NvGOp66vwi8W/GT4gf8Jt4o0fV9B0LTvCsw1r4o6XY6R4Zt9Q8Tx2+peGtS1ttUSK+svNAPNvjb+yZ4q+L3xYu/Gi+KNE0nw2mu+AtcbSni1S8v/E1h4f+BX7V/wAKfEHhHVIo2sbDT9O16f466NLdT3R17T9Q8O2fiLSdR0EzXVpIADlP2UP2ZfjF8Bf+Fm6t4m0P4ba3resfs2fs7fC3wvpdv4v0e10bX/Fnwm/4aDudT0vxP4i8Ifs2eALzw74X1O7+IugW6azc+EviH4mtbSfWL+a61uezttIkAO68O/sq6rLefFvxV480z4P3WqfFHxl4c+J0XhDwn4Y1jSr3wf4r8M+DPgZoUHhDS/jhPK2qXngrxDq/wJ8Laz4lvrf4S6PqV0by9V9HnlsdPdgD0f4MeFvjJ8OvglHpWoeFfBP/AAtDxJ8QfjX8RdU0KPx1qt54C8JXHxc+OPxF+K40Wfxivgez1vxI3hXT/GsOjvc2Hguyi17WbCZEk0jSrpNaiAOS1z4F/EKw8D/CH4QeGh4Y8ReGV+N/hf4z/Gj4k634j1Lw34nHifRfj0v7TviXVfBvw8sfB/iHSL618e/FHTRpa6JdeNNJi8H+G9fmjsZ9WOlQzOAer+MPhJ/wsPx/4U1LxTB4ej8BeBPFWjfE3S9BsbP7TrPjP4r6Lpx07wv4o8Y3dzYQQWGn/D6NIb/w7p2ntqGqap4jsfCet3fiHStO8Mx+GdQAHfB/4Xz+CoPFl14nsNCu9a1D4t/Gnxp4b1K3ijvb7SfD3xC8dalrUFtFf3FlDcaddahpx086zaWUjW7vFBBNPOYFKgHt1ABQB4v8PfBHiXw58Vf2g/Feqxacmg/ELxN4B1XwtLb38s+pzQ6F8LvCnhbWDqVh9hjg0+JNS0iRNPddQubm8X7U9xZ2cEVlPdAHM/Eb4K+MPiJ8T9L8ZyfEiDw54d8KeAvFfhrwnoHh7wnZDxFd6345m02PxfJ408UeIr7xNpmo+ErvTvDuhWum6P4b8I+HPFNjcyaxef8ACbSBrK3UA+fPhJ+z78c/Bnxr8G/E7VPh98KdAmE3i3TPiD4h0z9qL4wePZpvBfizwV4P0/WtD8F/Cq//AGavht4HsNQ1bxj8KvhPr9x4l1HVX8VW+laBqOhnxDe6XdQaYoB9JeKfCfxHHijxH8YNP0Tw54y8X+C/CXiPwx8FPhldeNb/AML+FruLXL7RNS8Q674n8Xt4G1ybSfGHixPD2kaNYSp4b1jTfB+lWd7pmnarNb+K/GGo0AYXg228R/sz/suC98U6BrPxL8f+GtD8T+N/F3hn4U6NrnizVfG/xb8deJtb8a+KtF8EW0GhWeqalba/4/8AFWoWmn+JNc0nSbe20y5Txd45bRNLg1+/tgC3+x98H9c+Af7Mfwe+FfiqWwl8YaD4YOpePG0lmbRl+Ifi7VtU8a/ECHRHZ5Hk0W38XeI9ag0aWV2nk0tLSSd2maVqAPpGgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKAOc8Yf8if4s/7FzXP/AE16hQBd0D/kA6J/2CdM/wDSOOgDWoAKACgAoAKACgAoAKACgAoA/Pf9ubxp+0H8FvDF18a/hZ8dNI0yTS28H+Fvhf8Asyz/AAj8PeJJ/wBoL4wa14gu7fTPhrL4puNa/wCEzkv/AIgwyw6Vpo8CR6JL4I0/TtV+IGvzar4c0vxEIgD9CKAGuQI3Jk8sBGJlyg8sAHMmXVkG3G7LgoP4lIByAfiTqv7VfxF1XwsJbrxd8ZvEGn6J8Rdf8cXd3Ovw08IX/iH4UeB9U/av8V/BO+8J/wDCtfgj4i8QC68Y3n7HupT/ABd0/wAeeH/D1hYrfal4N1Dwnd+APEFzq2mAH2F8L/jh8ZvEXwD+Id7ZWyeJ/iT8E/iJ8N/DHi3xF4y/sbw9/wAJt4X1Hwh8CPjP8S/E9pour+GvgX4f8K3Gm/Dv4o+IND8H6Lq11p2ireaBo2o618RNRivL7xA4BnJ8YPizrq/EjVPhd8Ofipb6341sPh2mn+JtVv8A9m/xX8OPDdz4p0u30rwn468H6RN+2x/ZWp295peoadrM2i6DfR6b4xvbDSooIzqup3l9cgHYftW+NPE0S+F/gl4G+Lt54P8AiX8adPvPC9jZ+F/Cb6x4g8OeE4bTVLz4l/FzShp51LxFo+peGvCNrrLfDu0tYdRk1b4lQeFdJUJpI8WeI7AAb+zf8SfFnxEuNKbUvGnxBFjoPjH9oHwPF4fv/g94vj0DxBo/we+Kviv4R6Zqviv4p+JPBinS/E+of2BZeJo9Du/E0fiG+1CTXNMvpNZuNK1x4AD89/jN+1d8d4/hf4u1Hw38VtM1HxNqHif9pLwpptgnjvSPA2teGJ/AvwT/AGvNd8L2XhfRPBnw3v8AUfEGowa54G8D36HxFrA1C48W6V4K8HxzpY+MteuSAfeH7IfxB1u++GfiPxx4/wDG3jXx34nufDnwu1k+Do7XXfEOrad4c1PwtFb6Xr+ieG7fT5ru5bx14zTxxb3fiHSXm8MSJ4dOk3U+m3vhLxf5ABzWheKP2i9N+OXxY8ZzeDtQ8S+MrP4cfBLxhrvwDsfHWjLp+mfBPxX4r+P+heE/Angue8u9P8FzftCeEtV+H/iXx74p8Y32uQeCPGlx40v/AIHP4sfwn4M+FnxfgAPevix4u8a+MvhZpGieDdH+IPw01L4n+HoLrxN4x1LSLjTPEHwP+Ht7Hat4z166udIuNXi0/wCK1hot5PpngTQ9Lm1m+0fx1cWHinxDpp8FeG/Ft3EAcD4M/aD08/GfTvDfgLw18Uvih8OPi/4I+EnxWg8ZW2meKLs/CuPx5p2oeC/Bl74i0bxxdaPr2i/DPx7o/wANTrVvPpWkXeqaF47tviD4h8a28lvr97qOlAHS/tLaj8X7jw83gH4e2msz+IPFuteEb3wtrPhuTRPCeLPQPHfh3XvFfhZPFOq/GrwnqEviVvBuka/qklhptlZvrvhxNXXTCYdO8S3NmAeofBLx7cfF3wjp/wAWrK91eLwj4x05R4R0TVfD2h6RHLpmk+IvFFpafEHSLzSfEniw6zoPxO0ptK8QeF9SHiC60fU/BKeEvEOjWOnz6rrBuQDzTXPFnizRv2q/FFpo+geOPG9nZfs4eEdSsPCGgeKNE07Qo9avfiV8SIptRudI8VeM/Dfh/wDtfVYtG03TINfFreapZ2UMtobm206W5jmAM79rbx3440L4F+H30Hw3r2maj418c/BLQPHYtPEs2gX/AII8A+KPip4C0P4i23/CY+GpbkQ+IL7Tdbl8BaPJ4U1dNdGp67L4v8N3w0jw9rOtW4B8Y6p8a/jndfG74O/EDQfE/wARtM8P/HDwz8GfFHxO8M+CPB2k+PLT4X/C3wvDrWpf2XoXw21zwdfeP/F1r8Stc8Vz6Rqfxa8K2eiw6Lf69DofhBPjDqHhmHT9AAPev20vij8QfhF8Vf2UvFEnjO78J/CnVPij4k8FawmgeFPF3iq4k8V698HviNL4R1rxZY6BqmjprNtca7Y2/gPwj4E1H7Z4ev8AxH4pt/F92t/430f4eW2mAHc/A74u+OPiTbftG+KrzXdavNI+Hf2fwx4FvtR+G+u/DpL25Hw30Xxtq+q3nhvxFeail9f6fqmtwafbXcUaQLp8Sx3UdwLlfLAPBv2Wv2+fGur/AAL/AGdtW/aV+DfxM8MeIPiT+x5pnx40P4oXdz8IdS0v4za54A+EXgrxn8XVTw98OfFdzafDbX/EkWvv41+H+h6vZaVoOteF11eOeTwpr2lt4LoA+lT+2p8KrPwJ8MviTrmmeKND8JfEb9j/AOKH7an9oXVnp9zN4Y+FXws0b4Fa74o0zXLOw1O5ln8Uf2b8b9EuLKz0k32nzPpGvwtqaONMNwAUvg9+1r4g+IXxyh+APxF/Z1+IvwP8Z6v8HNU+PXhn/hLvE3wz8RWt/wDDyx8aeGPBYsdcj8F+L9bvPDPjuDUfEtq2s+GLi2u9K05Yp4rLxZqkqtgA+zaAPlX9rvxv4m8JfD7wJo/hex8UPP8AEb49fs5fDLxF4g8LatdaBd+D/AXjz48fD3wj4016XxDZXlhqGkvf6RrLeEdMm0G8j8TQ6z4k0/VNJVLfTtS1G2APz58MfEfxx/wrf4eav4q+I3xS0TVPiX4T/ZDi0DVbzVf26NSgt9Wn8R/D21+I2sRX+kfBO+8LazqPxbvfiD4d8I2Fja6zJ4aHiPVNN0e18SxG4mmhAPtj9on4ueOfAGufEjw5rmha7efDXxD8D9U1fwxdfC/xP8ONJ+LNtP4Ws/Hk3xs8RaI/iv45fCDxVZ6j4Z8Pav4Au/D934Istfk0K+VNafXbPVL620yEA9O+Gvif41+JPiPfWvi3wZr/AIB8A+HvAWnLBY+LdO+FN1rvizxhq+u3cQ1NdY8BftA/E2+0y28N6R4faNrTU/D1jY+ILrxFc3FtrLXWgy2LAHzV8SviD8WPh78dPhLovjnxl4I0bwyPFHxQ/aI1OHU/i34i0Pwt4L+HHh/4VaR8G7jwJ428Zx/C7TINR8F6h8V/jNaeP/C0njuyaD+3beDRtMubXTfBnhyyiAO58Yftq/8ACuvCfiTXfFPwh1rxDrVj+1P4R/ZR8J+EvhZ4y8LeI77xh418Zad4NbQ9RGsePn+E2heHYP7b8Sz6DqNpq2oCPT5bCO9udSEd1cQ2oBxGj/8ABQLWTc6gfGv7K/xR8EaL8P8A47eBP2cfjt4sufHfwS1rw/8ADL4nfE/W/hhovw6i0iPSviHJ4g+Ifh69f4w/DXU/Fmt6ZoOmnwxo/iaKW0sNd1XSfFGkWQBt/EL/AIKEfDv4VftS+Ff2Z/HWgaRpl7418f8Agj4YeGdTs/jX8DNY8eT+J/H2lW174U1jVvgPpvj6f4qaD4B1fULmDw9B4sv9BF5Fqk9nqOoeHLXwnd2fiVwDzbU/+CiuseNPgl+1n8T/AILfBy41Ky+Bnwv+O3iHw74hv/iZ8ENa1G38Z/ChfEelra/FD4Rab8UrLxz4D06/1LRLzxFp2mamU8Qal4S0rUIdUsfDvim90LQroA0rv/gorP4G+EP7Pev/ABd+DkngD4rfHnw7quveFfCHjz4w/AD4d+DdQ0Dwl4T8Aa34r+INz8Q9V+K+t+HPDvhu+v8Ax9oWkeF/Ccuoav8AE241C/tEv/CkGi22u+JrYA6Dwt/wUc8K/E/UfhDoHwR+APxm+L/iL4ufB/xV8aNP0vwzqnwM0my8L+GvBHxVs/hJ4xs/E3ijxd8ZfD/hi6vNH8Wy3FlaXXg7V/E2j+IY4rbUPDGp6loVz/bKAH6M0AFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQBznjD/kT/Fn/Yua5/6a9QoAu6B/yAdE/wCwTpn/AKRx0Aa1ABQAUAFABQAUAFABQAUAFAHxF8Wv2OfEPxJ/aF0n9o3w/wDtQfFv4ceKfDXgybwV4L0LTPCXwI8beFPANlqbsfFmr+A9M+KPwm8bN4V8R+O4o7Kz8ZeJNMmj8Qa3pNhp3h271RvDNraaLGAfRGsfC1dR+Jnw/wDihp3jTxdoOq+ErHWdC8UaPpmoQp4Y+KXhnUdG1K30/SvHugG2Gm3V94V8Q3Nr4t8JeI9OtrLXdCul13QdPvIvDPiXxPpVwAepSRxyxvFKiSRyI0ckciq8ckbKyujowKujKWVlYFSrMCCCdwB8K+Nf2Dfhz4y1bxrqt1qt9cz+LdH+Jkrr4mN14rsLTxz4yvv2jZPCniTT9G1K9Sy0XTvhrYftPfGGxstB0c28HiWXxHpGqahNp+seF7HUb0A6nwl+yrceGPhj8c/he/i7Q1034++M/t/iq/8ABHgyXwAvh3wHN8IPhn8HtU0Lw5pg8SeKzN4s1rwn8N4orrxkdT05LTxJ4j1Lxlp+hxHR9P8AC90AY3iL9mv4waf4uv8AxF8NvH/wD1OwkvPCB0Kz+Pn7OGu/E3xZ4S0rwpJJJo2naH4+8M/HT4bSTJ4bb7OfDF5qfhq58SqLKxu/EninWfE/9oeKrkA998V/C258S+MfhR46g1vSNL174davres6jInhaSe28VXOsfD/AF/wQ0cip4jtLzTYLFNcmv7FZ77VZIo449OMrK0l4wBB4A+FOs/DyHT9L0nx9dHw/H8QvjD8Rtc0dfDmkLJ4k1L4ueOvH3xD1TR77U7uS/udP0Xw94p8dXV7oC6Kthq7WmmaPp2t6xqdudXN2AebeP8A9lrTvGv2nTtG8SxfD3w0ya1pCaD4Y8N6bPFeeHPH+rR6l8Ypb6fUZHe38XeNrWXUfDvh/wAU2OyTwVouo67DaWWp6d4h8R6FKAdb+z5+zv4V+AHh77Np9/qfiHxbqXhrwZ4Y8UeLdS1XxLcx6lpngiLXV8OaXoWg614i12w8GeH9MufEfiHU7fw74cNppZ1rXvEOtTwSanqN5cyAHV6R8PNU0348fEL4stq9jJo/jP4T/Bz4eQaEtjcjVLPVPht41+PniS61eXUjefZXsdTtfi3Z2dvYpZG5judNuriW8EUkUTAGh8U/Alx8UPCGq/Dq61RtI8JeL7C+0Px7PYlxr+q+EdQi+xa14S0W42qmhf8ACWaZdX2k6p4rgmbXdD0uS5HhWG08T3mleMdHAOX8BfDHxV4e+MPxh+KHifxF4Y1G18Z+H/hf8PvAvh/wv4V1Lw8nhv4d/DO++JviDSI/ElzqHinxBHrviq6134teKLO81DR7bQtCOgaX4aNroFrfy6qKAOX+PXwAv/2lvDl38O/HvjC68G/Die5+1S2nw3U2vxNv9QsZ7uPTdQtvibqsMsfhDSr/AE68ns/EXhjw94ROs6lbtc6DefEe88Dat4s8H6iAdD8NfBfx68HQ614f8V/Ff4beM/DFhoVrpfw2urT4JX3g7xdpNzby3kNvJ4/fQfisPBfim1sdPj02BbXwN4K+G9ndS/axa2Gk28VvE4BFB8LviLb/ABP1X4qL8QvBjazqvgXw/wCAJbA/DDXv7Ki0rQfEXijxFBeRxj4ufajf3F14lnhlZrs2y20EAS2EzSS0AaHjT4X+I/iF8MoPAvjLxZpesanJ8QfAXi3VNa0/w5ceHtOutD8IfGvw38R18O2ejpr+s3Nm40DQk8J2moyaxc3MlwIdbvWe4e5iIB4e/wCxf4f1q78LWuueI7rRPBvg1tIuvC3hPwb59h4j0S/0W2ttIspbX4kq9g9hf/2DZW2lw/FDwd4L8H/tMWViW0Jf2hLnw2LzSroA9H+OPwO1b443Fppl/e+GND0XSILlND8QXunal4u8U+HtR1O1+z3vjL4e6LcXPh/wx4C+KWioTB4Q+JetxfEKbQrE6lpumeGLLR/Evj3StUAOb+Cv7OvjD4M2nif4e2/izwDrvws8VDxVq2ua2nw81jRfj34p8X+Ikisp/E3xG8dJ481Lwl408Q3OnCOCfXdO8B+FtH0rS9L8PeCvB/gXRPBOm6HpOngHnXwf/YF0P4e6X8OvDfxD+NXxF+OPhP4MfAjVf2dPg14a8X6P8O/DFp4P+HniPwj4R8GeK9Q1W5+HfhDwrceMPGureHPCGm+GtP8AE2ptCmg+GZNTstN0k67q3iXxNfAHNeC/+Ce1l4O8JT+H/H3xs+K/7Rfhzw5+yr8Yf2QvAnwy8Y23wm8C+HtP+B3xGt/hfay+FIdX+Hvw68La1J4sudF+EvhjwxqfxA1zV76S8jkk1ePSNOuIFjIBw37In7On7Slp+0Vrf7Qnx71r4xI2ifs5P+z74Gsvjz46/Z18Z+PpV1f4i6f411fUJX/Zo8BeCvDr6Jo0Xhjw/b2nijxF4l1H4k+M9W1DxBqevW+gW1roVlGAfoF8EfhN4V/Z5+DHgH4QeF7y8fwv8NvC9poVlf61qeoX109rZLPPdXt5qGs6jqV6InnkuJ0S91G5Nla+Xa/apIbdZCAWPjB8Prv4m+EdI8N2WpW+lzad8UvgR8QXurqGWeKW0+FPx0+HXxUv9OVImVluNZsfBtxpNnMSYre8vILmdWgilUgHzZF+yT4ms/CnwBsfD3jrwj4T8Rfs86D4Qs/DIg+Hia54N8fa9o/hfwt4a1/Ufi3op1zw9qniPR7+LwroWv8Ag3RtD1nw/qXgv4ieG/AfxEvPEvie68M6H4ehAPRfjL+zvqXxm1Hxfq118Qb/AMHanJ8MvFvwo+HV7oenw39roHh34iW2lS/E6bxdo95LaweMrfxxe6D4Vs7nRJrq1l0LTPCOk6r4L8RaD4r1bWNXjALnwg+GXxj8AeKPFF74p1n9mu68NappunxWtn8IP2dfFfwi8UapqlktybWXxRr2o/Hn4mWFxpumG5vItPs49EuLkLf3NxHe2hSe2ugDdtfgvLBYfE/WNQ1nw74s+JXxW0ez8O+KPE/jfwVca/4Hbwppi6xBo3w/tvhuni7Tmj+HWlW3iHxG6+FW8WNc6nq3iHxJrniLXdU1DU752APGPD37Gljf/Bz4TeA/ib4rt5fFPgL9o7RP2qdT1T4YaDB4Q8H3fxG0f4sax8TtM8HaJ4a1ufxXcaX8NtATUbPwLpVkNRXX5/C2jaZe3Gq2+sy30jAHU+IP2PPAHiPQPjf4cu/E3i6Gy+OX7Svwi/ae8Sy282iC60rxh8Jr79nG+0fw/oTyaLJFH4c1WX9nXw0upLfw3uqrFrHiBbTUonOmyQAHjs//AATw0S88eHXU/aB+Kdt8Nov2rdM/bR0/4Q6foHwfTSLj42p42j8c6rJ4j8dT/De78f8AiPwdeatEy6HoP/CR2GoaBpci6GviLUPD+meFNJ00A3Z/+Cf/AIG8WfE7xX8UPjD8Q/EXxT1rXvhj8Yvg1aXFx4F+DHgTW2+G/wAaLDRdL8YaT418V/Df4beF9e+Il3YaVodlpHhU65eReHtLtAdU1DwvqvjCKw8VQAGvb/sa+I9K8OfCE6D+1D8WtP8Aid8CtD8ReC/hl8VZvDHwcnnX4Y+J9A+Hej698LfHXgiz+HOmeE/GvhHVLz4ZeEPFlzdmx0nxvb+LtJsNQ0bxlp2lw/2KQD0rwV+zXZ+F/jD4P+O3ij4q+P8A4lfEvw78EvFPwLvNe8XW/wAPtMi8TaJ4n+Jei/E271u/0fwP4H8I6VY6xpuoaDbaLo9votnZaZB4Yijgv7G/1qO41+UA+lnkjjUNI6IpeOMM7KqmSWRYokBZgN8sjLHGudzyMqKC5GQB9ABQAUAIWVRlmCjKqCSANzMEUZJ6sxCqMkliFBLHkAWgBiyRuZFR0donEcqqysY5DGkgSQBiUcxvHIFbDGN0fBVgzAD6ACgCOWWG3hlnnljhggjeWaaV1jhhhjVnkllkdgkccaIzu7sFVVZmYBWYgElADEkjkUtG6SKHkjLIysokikeKVCVYgPHJG8cik7kkV0Yb1bIA+gAoAKACgAoAYskbmRUdHaJxHKqsrGOQxpIEkAYlHMbxyBWwxjdHwVYMwA+gBAyksFYEodrgEEq21WAYAkqdrK2DztZTkggkAWgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgDnPGH/In+LP+xc1z/wBNeoUAXdA/5AOif9gnTP8A0jjoA1qACgAoAKACgAoAKACgAoAKAPzH/wCCjWnfFLwP4A1v49fC/wCI/wC0f4Y17wh4egltte8D+NPBdp+z18CdM0LU31LxH8bPjl8LbiwvfF3xb8HaNol3f6r4u8OaF4M+Kus3mhaD9h0rwz4ahNx4pUA/Si01fSdQne2sNU0+9uIrHTtTkt7S9tbmePTNVN4uk6i8UM0jpY6odPvRp12w+z3htLwWsspt7ggAfqWoW2k6bqOrXhdbTTLK71C6aNC8gtrO3muJyiA5dxHCxVByzFQDnOQD8nbL9uz45z2Xwf1T4hfCT4faL4D/AGqP2Zvjn+0L8KX8BfFLxW3xK8C+HPh18J/DPxI03w942utT+HkWg3PinX9F8b6Ej634Yl/s7wxr0WqW9vaa/Z2Njq16AJ+y9+0J+1X8T/2j/AGhWOm+A7z4D+If2CP2Hfjhd6Z4y+J/iS++I2gz/FST43ReJfFUd7afBeSLxn49v9S8NRaHrNrqfiHRPDmq6FoHh7xPb3GmeINX13R7YA+yfjl8ZPir4e+J/wAK/gR8C/B3gjxH8SfiT4S+J/xHu9c+JniTXdA8C+C/h58LNT+Gug67qd5b+HNC1nW/E2ua54k+Kfg7QdE0PTjYR21vdaz4k1LUxbaTHpV6AfCHxG/aG/bQ+E/xx/bK8baP4R+EvijR/gb+xp+y18bvif8ADTxF8cvinJ4Q0HUdJb9svXviL4f+BMMfwkhs7jXPiFp3gq2sT8QvEmk+FC8nh3whB4m8JanaiGbTQD0n4xf8FAfib4e+JXxP8K/BP9n3xJ8T9J+B2h/D7WPGun2fw9/aM8WeMfiPrPjjwHp3xLHw++Gl58Ivgr8Q/AHhLxJpXgzW/Dc1jf8AxJ8YWlr4g8Va0PD9zpfh7w3p5+IF2AfQPgX47/HT4vfFT4gR/DD4dfC9/gn8KfjPqvwP8W6z40+IPizRvif4h1fwtD4eX4g+M/CGhaP8PvEPh2z0nwjqmrX2i6F4a1/V4tQ8dTaPe6lJr3hLTrnSXuAD4A/4J5f8FBtW8Zfsow61qy698VND/Zc+AHjH4kftY/GXxV4yvNS8by+L7OLxz4r0D4e+B9G1f7Zq3j/XG8O+HtQuPEvi3WdW0fwhoUtpp/grRdU1zxPD4r07QQD6Q8Q/tq/H34QeFPHuufHf4KfDfTdUk/Y2+P8A+2L8KtI+H3xL8Qa/bLD8B9F8Dap4w+CvxF1TVvBOkldftD8SfBYsfiN4ZsZfDuvRyeKPJ8L6VLpOmDUwDT/bJ/aq+KHgv4OftK6N8HND0jRfiJ4X/YD+JH7UnhHxrrHiWWGDw9qmkxavYS2tvYL4M1+G81Xw7YW1z4j8PXN7ay6Vq/iGz0vQda06z0e6vtXiAPs74G6x8Wdf+GHhnWPjTo/gXRvG19ZW11dQfDvxTr3irw7dWFxaW89hqLahr/gXwFeWmp3kbvJqWlQ6LJp9jcBUsdTu4HOwA+Jv2sP2kNc8VfArwZ4n/Z4tvit4f8W2X7X37EvhCPT/AIp/Dz9pL9leHxTb+Lv2ofhXo+qeEdQ1b4kfCDQPEd/4I8W6ReXfh3xnd+H/AAr4q0k6Lf32k6zpN6lw2lzAH0h+zr8Z/iT4+8TfG/4UfGfwh4O8NfE74G+JvCWnatqPw38Sat4i+H3jDwx4+8Gad4y8JeIdFPiHSNE8ReHtTt0uNU8OeIvDWsWd0sF9o0XiDStdvdK1y2srMA+ZPH/7Y3jj4c2P7SWreFPAWoa4fB/7amlfs/6n4m8VXfxQ8ceAvhb4an/ZN+E/xPl+KviLw/8ACv4Y+K/F/h34fjXdTsfB0nh6wsjo9r458V23ivxJ4+0TQ9S1aa1AON8df8FEPH/hfRvg7qtvB+zNp/hXx78PZvG9x+0Rr/xD+Nd3+yd4k16Lx14o8KJ8MfDvxj8MfBDVbD4eeIoNO0Oz8S+L9S+KcdhL4Nl1GfwvaeGPFl3o/iHWLYA+kPGn7Yd34N039tLUW+HtvqQ/ZT+Jnwm8AWcI8Ty2Z8bwfEf4XfAXx4+p3Mp0G7/4R+XRp/i7cacltFHqaX0GkW9y01rJeSxRAHkerft3/FK8+OnjDwd8PPgD4h8Z/Dn4b/H7wt+z/wCK59I+Hn7R2veNNdudVv8A4faV40+JWheLPC3wU1j4I+F/DHwrn8aX2sazoPiv4j/2xrfhXwpreqXGoeGNQv8ARNIkAPtrS/i5oXjrxN4++GXhC2+JmgeM/C1hrcLeI/Gn7O/x28N/DqHUrS5GkQ3/AId8e+NfAng/4dfE6C31G6tr23sPBHjjUDr2kw3Oo6VeNo8d3q8QB+e0v7Qfx9+GH/BOH9sb4t6l47ufiJ8ZPg/8Rf2yvB/hXx5c+FNEt1tZ/Bfx9+IfgHwXr58IW0Nzo66V4HsLfT9UXRbv7ZYf2VpJstUnubRZ5WAPYvhhB8RPhZ+1P8T/ANmXSPjf4z8eeG9f/Zg8J/Gbwlqfxi1uD4j+N/h58Tn+IHjr4e+IdeM7W+gajqXgjxssPhrXrfwXc6lb+HdJ8Q+HPFen+A4/Dug6nPpNsAesfsTa/wDEDxF8BbqX4oeOb34j+M9A+PX7YfgLU/G2oabp+j3Ou2fw2/bE+PPw68PzjRtLVdP0a1tfD/hXSrGw0mxDWunWFvbWEMkiQrKQDzj9reGL4q+KvC37MmmXPxOul+K+h65F8UrbwbqlppXh5fg/4bm0q58e+D0udcl0nw9qvjf4maV4q07wde6OfEljqHhv4ea5qPj+8U3lv4F8OeIQDY/ZZ1Hxh4xkPiLxPpfxjt18O+Ov2pPA9hqWp+NfB3/CsoNG+Hn7RXjL4X+E/Deq+DtH+Ier6pqfi5fDPhXT5Rrv/COz6Baato3iy50rWNIstZ0zSb4A+T/hj/wUA/a1+LOn/sq6vovwF/Z90Oz/AGz9M+Jtr8HbbV/jV8S7278Ea38MfD+teKdX134mTWPwUih1bSdZ8P8Ah3WrjSfC/heOC/t9Yj0XRb/xcLPU9R8Q6YAeq3f7dXju9/Zv+DvxD07w98NfDfxi+IHxG+MHwy1X4a3Nt8f/AIvXmo638B/HfxJ+HXxN1P4SeAfgP8HvGnxV+IegJ4g8Af2s2sXXhjQ9N8G+Dta07VPGV8NXOn6HfAHkl1/wVF8Xat8If2evi3Y/Dv4ffB3wl8U/BvxA8QeNPiX+0Bq3xm0v4M+D/Gnw5+JGqfDnWvhXfeO/Cnwb1GPwLd6teaBr3iSDxt8WbfwjDonhSxS5uPBerauuuaPp4Bq2/wC2N+0f8PfjL/wUp8Y+MtC+Hnjn9nj9l3w74H8caToWh/EDU38a2FpefsvaX8R9K0D4dx2vwbtdO8T23xE117W71zVvFXiqAeGbjVLs+HbfV9MtII7kA2de/wCCg/xy+Gnwb/aW+JXxJ/Zqvbu4+Dvwx0D4oeD9R07wv+0f8Lvh94ou9Y8WzeFtV+EuqeIfj/8AAT4daoPFvhMyaPrcHibw7oup6R4u0XVbuWbw94RutGltrwA/SH4Xah8X9T8O3l38avCXw98G+Jm1m8Gm6J8NfH/iX4haLH4aNtYyadJqXiLxL8NfhldnXluXv7XULWz8PvpfkwWV9aai7Xc9hbAHzl+w6PiDZ/ss/sf2CeFPh9o/gRf2avhRJez6X4q1yfxG2oXPw28F3mkX1poY8AaTo8a38r6pN4itpdXecXt7b3trqN09tdxXYB87+MfFR1T9sDWLPxRMnhP4n6x8Xfhd8CPg1q/hP41R+H/HOkfCzRPAo+PHi99P8C3vw917R/Hem+JYJdc1T4r6NqcWraBe2Z+Fmiahb6XqfgjQfiXGAexfCfWNU8R/F/8AaB13XJtR8Sarc/sqfs/PO2nalF4X1e9EHxr/AOCgEUGl6ZrXh/8AsRtAuY4bW30yy1WzmtL6zeKC+ub99Sim1AgHyXrmueNtX039nm3f/hMPEl3p/wC0tfpqPi/WPH37RnivQtc8bLpfx1bxhp3w71PwFP4w0r/hXPgPxFFqvw9+H8MniKT4rWGh+GYB4j0uaKRvFerAH05LovivUP2VP2Rfg38UPiFN8TZfiffeCfg58ePE8VzJPe+OdNvPhL8Q5fGukr4j1Cyh8U6ZqUWu+HYrL/hM4ZdH+KtnqGm/2xda3pvjZtRvQAeV2P7Si/Gy0+CN5o1iPDf/AAmms/sWfHa7Phb9oXxr47Omw/F74swx3vw58Q6S+leHdP0yDTINK8q90WFW0GeOWWzTQYbYMpAHftTaTb67+0zqNxfxRXFvDJ+wtZ6bpup6n8HtPtry5+Ev7Sfj742eLrSxuviHc2LW83j3wxq9p4T0iy0/xX4Y1DWtX0nUrLVbG/0mLQftwBzv/BOdPiGfE6an4q03Vby+h+EWojxyuqfDz4QeHtZ0L4oXlv8AAzUvEnhhL/wj8KPh3q3ggHxefiF4NX4V6zq0ui6JJ8OotHNla6l4Tv8A7OAeu/EjXrfwv/w0d4w+K/hbxHL8ULj4ISfHe0l0JfCfiHwz8CPht+z5q7+LvgroNxcXHiKCPVPGY+Iy+JfilJv8P32keLfFuj+N/Ciaj4h8A+BvCMt2AfYHw/1P42+Kvh1Fc/E3whpfww+Jem3c8Fzo/hXxppHiTwn4lNpYR/ZtSstfvvB+sXuiaBrtzcl5tOutBl8R6DdWUlml9rGnrHql8AfHvwc1Lxrq/wAZfip4Uk2Sx/tGeI9Z+KvxAuvA/wASraDxd8DvDXgv4MfC/wDZ1fSPGV7pvwY0OW28fav8VPhR4j8LeFoNE8V6f5tpoPj/AMReFtWvLjwH4hjnAP0QvPEvhvT9e0Twtf8AiHRLLxJ4ktdZvvDnh281bT7bXtesfD400+IL3RNImuUv9VtdBGraWdZuLGCeHTBqGm/b5Iftdq0gBt0Afih4kn8b+LfH/wC3X8KfigLG3i8Y+Ifhr43j0fwrHdWXiWWV/AnhuT4U/DvU9Z0XUPEvivX4tAsvDfhO48Y+FvhX4e8X6n4s1638e2PgTwbq1n4q1YXoB9dfsP6h8SPGP7P/AIkbxP4n8RQ+MNZ8a+I7i98cS/EvR/jHo2kXVzewabqfhj4b/wBteMfHOr+DT8ObTS/+EdTwZ8R319vD/jWO71nXL/4ix3muX1+AfnZ8D/i74ptPgd8L/g7ZXHxV0fWj+0b4L+AvjK/vvF/wStPAWuJq37UOmaH8W4RZ6hE+v+Mte8X+AdR8Watq2tWH9rax4s8V6jrHig3t/qM9/dkA+7vj34w/aW039uj4JeBv2fpvBuqJrP7I37SniLWvC/xW+IfxA8N/DRNS8P8Axq/ZQsNF8X3nh7wh4X8VN4q8V2Fvrmp+GdIu7pNKvND0fxN4i1K21q5hF74Y1EA6P9nn9t2T4+/Ef4MeAx8MG8Hn4nfspeJP2iNaluPF1vr1x4T8U+FPi74Y+E3iH4c2j2Oi2ll4l0qz1rU9VudO8cRz6c+r2FlY3J8Lae95NbQgHmMf7b/x2+IPw18F+N/gx8H/AIYvc2n7EvwU/bc+L0HxJ+IvinTNM07Q/jL4d+Imq+FfhP4Cm8NeB9av9T126n+Ffjz7d441qyttJ0O00/QQ/hbVrrXZFsAD7U+CXxv0D4sfCf8AZ78davc6B4R8V/Hr4P8AhH4saH8PpvEdlcaxJb6x4M8KeKPElp4fhuV0/UfEtj4ObxVpdnq2rWemJHbJeaZc6jBZm+toSAe40AfjDrF4viPxP8VPHF34l+IWneBx+1Vp3jrUNK+J/hH4deC7/wAWaf4F/YV8D61r2ow/D/W/g5H43m8U2Xg7QP7Rs9G8caFBYz+DNKt5f+EXXxRDbagAD7K+A4lh+BXjzwh4L0u/1e80Px3431jTb/wJ4z+EulJrV18SvH+r/F7QtMh1LwxfW0Xgy70Twv468MxeM7TxH4L8N6nDpk0t14S8NeIdNudCub4A+bbzSPiPZ65L4c8D+JtV8b/theIrTxfpHxks7fxrrXgzwdbfDT4Sp4v8beA/C+peLbT7brfhm0vm+Ongrwn8MfHkNtqHiSZvHWofEnWvA1xH4a8ZeB9NAP1O8OaQnh7w7oOgR3Wp3yaJo2l6Ql9retal4h1q8TTbGGzW61jxDq0kmqa9qdysIm1DWtTkfUtTu2lv76RruWZiAbFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAc54w/5E/xZ/2Lmuf+mvUKALugf8gHRP8AsE6Z/wCkcdAGtQAUAFABQAUAFABQAUAFABQB8sfGb9j/AOFfx713UdR+Ivif413PhzxFptno3jf4WaJ8efi14f8Ag/490iyRootL8UfDnSPFdtoH2C8iJt/ENpoVtpEHi+zJsPHCa3YlrcgHr+vfCXwJ4i+IHw2+KF7pUtt41+Fsfiay8J63pV9eaXKNB8WaFNouv+FNahsZYYNf8K3rLpuuL4f1WOfTrXxToXhjxJaQxarpVpOQD0WSOOWN4pUSSORGjkjkVXjkjZWV0dGBV0ZSysrAqVZgQQTuAPx5/Zx/YFtJfi8PHfj+b4YxeCPhR4D+PHwC8N/C/wCEP7Qf7TPxW8MaRJ8UG8FaJ4p0mw0b4r+KF0T9nDR/C3hDw3caNbfBn4Z6VLbWt74oi1A+KbXSvDXgrR0APuSz/Zn/AGfvhdq3ww8f6dc698PJPhF8Nfhv8C9C1K1+LPjbwxoOrfDfwVqbWXwu8DfEC2Hiiz0jx7baJreu3kPh2PxXHf313qviLVdPkluxrN3ZTAE/x0+G/wAAPi1F4b8XePvH9z4K1r4XQ+KL/wAL/FDwN8Y9V+F/irwZpniHS4LPxjF/wlnhzxHpIPh3WbHTrCbXtI143nh6e40rRdWurEajpOl38QBpx/sqfBVdG+KWh3Oj+JdWt/jL8FPCf7PnxLv/ABD8QPHniTxD4r+GPg7TPiZpOiWWqeKPEPiLVPEE+vmz+KvjMan4wfU28Vavc6lHf6tq9zqFrbXQAMPxt+x38HPGvi6fxrbX/wAVfh3reseH/DfhLxxN8HfjT8U/hTH8SfC3hO2vbTwvpnj3/hBPFWiTavqGgWl7Lp2l+NbSew+I1toaweGE8Y/8IvEmi0AaM37J3wm/4Wxf/F3S7/4n+GNV1zxfo3xD8W+D/B3xi+J/hP4W+NfiJoNjoWnaT428X/Dfw/4o0/wzrWspY+HNEttZhlsU0XxcunadN480nXru0tblQDL8IfsT/sy+BLP4dWHhf4cpp9v8Nvht4s+Dekxt4g8TXaeI/hF4yk1O61/4afEmK81aeL4o+DX1XVb3xDo+hePY9bs/DXiG5vtW8KppdzqOtG5AM3wV+w3+z34L0vxjoc2n+O/HujeLvhXrXwGbS/ip8VfiN8Rbbw18B9et4rXV/hB4Nk8VeI9RuvDvhHU4Layi1ae2uH8Va1Fp2gR+IPEuopoXh0WoBW8A/sJ/s/eBdK8ZaZfr8T/ijJ4/+E+sfArxjqvxp+NfxX+KOqax8HNZmv3u/h7HJ4t8WX1poegLFqN3awxeHbPS7oQzzyzXUt/Pd3sgB7H8LtH+Gvwr0S3+F3hr4h6nr8ujeIU8JC08d/FjWviF41tvEx8FWnjG18HXGo+LvEWsa9FqkPgOG28XWnhlpEul8JM/i4WDWF3eavKAWvjT8FPAPx/8Dx/D/wCI0HiCTRLfxZ4E8c6fdeFfGHirwR4k0jxd8OvGWi+OfBuu6N4p8H6vo2u6Ve6N4j0HTdQiezv4hL5PkTh4WcEA539n74VfCj4Y+H/F1x8Mdf1bxve+MfHPiC/+JPxJ8UeN9R+IXjbxr8RfCEsXwx11fFni3Ur27lk1DwR/wgsXw+Tw1ZCx0bwhH4ebwxpuh6abO5tQAUtc/Zj+HOp23xATQ9a+J3w81H4k/FeH41+K/EPwy+K3j3wTrt/8RIfhp4b+FgvprnRdbht77QZfCfhXQobjwPq9rqHgefWdPsfEs/h1/ENpY6lEAcHrP7DPwK1jwbp/w5XUPjJo/gEaP4w8P+LfBOg/H/4z6Z4b+J2jePvEfi/xb49i+JllF41ZvE+q+OPE/jbxLrvi3xeJbTxzr8up3Okat4nufDW3RKAOX+JX7HH7Jnjj40Xt3401vxfpPin4yaPpmvat8FtA+PfxG8BeBfirN8FU8AaRY/EDUfhH4V8ZaFpnjDVPhxpsfw68PXuotp91pNhpUXguDWtPa4i0e7AB6bqf7J3wsb4n6r8XNH8QfF/wHqWveJ9I8eeO/DHw4+NnxT8DfDnx94x0G00eysfE/jDwH4Y8Tafol9qdzYeH9J0/xS2nW1hD4+0uxstK+JMHiXTYIrQAHsl5rvgbxxpFl4asvG9jNH8TfBGt614XuvCPjNdP17XvBL2ejWepeNPAOu+H9Uh1Q2emR+MPDk1t4x8M3f8AxKbvWfDV/aanBc3mlzOAfPfhD9k79nP4J/DH4tfDrU9U8X6v8Mfjne3uh/ETRPjX8bPiD460LXtZ+Kmv6zo2s2ljd/EDxdqL6N4h+LPifx/cWWrS6JdWmueMvFmqaQskt5r66W1AG98Lf2bPhH4RsfibqXhPxn8S/GOufEnQn+Fnib4n+IPjb478a/ETSvDHgXVPHui6X4D8L+P7zxHdav4Pb4Z694n8bRWs2jXlr4ssPGtzrOs+J9Wv/G0NxqigFn4I/Av4PfsnWk3g/wAHeMviAIvit468Q32laR8V/jf8RfiTcaz8Qtbn+InxZ8ZDwZF8SPFmvTWmu+J5p/HvxD8XW3h4R3OtNaaz4j1iOdNNkuowD1bxH8OtN8R+OfBPj+TWNa0vW/Auk+M9G0hdMbSDZz23jRvC51Z9Qg1PR9TMssC+F7NbEwPAsYnvDOs7NAYwDM8J/CLQPBVxpr6DrvjC3stO8TfEvxgdE/4SB49D1PxH8VPFXiHxn411DXNOtLW1j1oXfifxNq+uaVaag01l4eu7kQ+HrexsYobUAHk+ifs4/sv/AAat/wBlrRbSwsPCS/AfXPFXhj9m+21vx3rcc8PiX4g+C/F2l+IfD+njWtfaTxvrOueGJ/Et1b6Xqf8Aal9bwW15qOk28AsmlQA5O+/ZF/Zi8WnQPCHhPxB4v8I+Jvgl42+MOtWmofCX43+NvCHxH8I6h+0L4ntPjF8YvCGt6z4a8Tw6/baB8R73xboXia70LU3SfTLGbwVrXhG40m6sfDOqxgDm/YP/AGd9F+Feg/CPSNU+MXgv4SeF/D3j3w7qngvw/wDtFfGrRfDfijwb478R+JfF3jTSvH1wfHTXuuDUdU8S67cXHi251CDxxb6bd3GkR+LU0QyWLADNK+CX7FnxLn+JXxR8I+IfC3iXwXqvg+T4RfGjSPA/xjvLz4D634c8IfDzVfCLeGvif4I8O+LZPh5LfeEfAHig6e/9t6fFqWkaIvhm9uWjOj+GryAAz/D/AOyn+zD4w8C/Ej4Q3XxR+Jnxr8HeP/DZ8F634R8ZftTfFD4lW2heE/C+v2bvo3h21u/H1/LolzomuRWVnq3ihxP44mkSx0DxJ4ou7GK10wAH0N4m8beArnStK8WL+0Dpfgrw1f6Bq3iCw1Sw8SfCdPD+seH9Ee3fXPE0OqeLvD+urPpuhrfWUer6jZX0el6alxZf2h5M08ckgByHw3+HXhTwrYeGPg34B+Pvi+6tP2ftP+G/h+++H9jrnwkv9Y0Tw5pPhu3g8F+GfiFDY/D8eJ7PTvEXh2ygnia/utO1XXLCIanZaiSHu2AGeNv2arbxhrnxO1fTvjJ8W/AVp8W7HT7Pxx4f8GL8IW029ey8JDwTLqGman4v+EPi7xX4f1HUfDCQ6TdXOh+JLL7OsMd/o0en6vJd6hKAdroXwiOhfEj4ufFE/ELxpq3iD4o+GfAvg62t9StvAS6R8PfDfgC7+JGqeHLDwZbaX4H0y5vZI9a+J/inVry98c3viq8unfSrFpl06ye3nAPm/wD4YK8IaFp/gvQfhv8AFTx94I8J+AvEsnjPwp4JuNB+E3jPw5ovi+6j8Qyav4h0668XfDfUfFiya5qninxFr194dvPFN54Es9X1a6l8N+EdItodPtogD6Es/grbzeH/AIZaR4s8a+IPFl98M/HTeP8ATdZk0fwJ4cOpamuleL9IttJvtF8J+EdF0KDQbOx8W3cMNvYadb6rMbayn1HWru6N/cTgFrxz8GNE8ay/Cy3t9d1fwd4e+GXjDwp4tj8JeEdN8F2eheKo/A4nufBXhnXH1HwnqmraV4d8L6z9j1rTbLwbqfh2YvaHSry6n0S6vdPcA4fxj+y/4f8AFPiDxN440P4kfE/4X/ETxTrF5qGpfED4a6v4ZttZGnT+DdL8CwaDBo3jjwj488Hi1sdA0XTm0/VpfDUnifStc/tXWvDmu6TJq+sWs4AfCD9mPTPhD4tsPFy/FT4hePbrSfBfiLwNpFj4v8Nfs+6TbWGleJ/FmieMtdvW1L4W/Ar4a+JNX1XUfEGjtqt5ceINe1S2vNU1bxFrl/ZXPiHUp9XABP8AEb9m3TfiT4M+Jvhm+8f+LNB1j4z2uk+Hfit4y0Oz8KXGseI/hpa2+saXqPwk0m38U+HvE9p4P8Bz6F4m8WafodvoCweI/Dur+Itc8cQeJLzxxqvirX9SAPeNf0/WdU097HRvEMnhqa4EsM+sWml2Go6taQSQTRifRF1ZbrR7XVIJWintrnWtG1zSwY2iu9DuY5DtAPmBf2PfDGga94h8dfCv4t/Gj4S/E/xs1rcfEz4k+HfE3hvxZqfxW1OxtjbafqnxC8J/Fnwb8Rfh7dXumwrFp2i3fhfwf4av/DPhWGx8AeCr7Qfh/p2h+F7UA9zv/hT4M1j4i+A/itrmnQ6144+HHhnxb4X8H6/qFhorX+k2fjZvDv8Awlt5a3dvpVvd2t5rsXhnTLa9is7m30lrdZUTSldlkAB6PQB89+JP2dfC3iLWPiZrI1O50nUPirqGmXnizWbDTNGuteaw0Twd4X8J6R4Zg/tuz1fwvrPhIQaFfX2r+FfHXhLxZoGrXmt3zyafBLb2MygGv4S+A3gf4ceFPEugeAbGGz1Txdb6ZaeKfFfiuTXfFeueJLXTbYabbWWtX/8AwkWjaoNI0zR5L3S/CXhfRNV0fwd4Is7r+zfBfhzS/D0X9guAeTTfsZeFIvEui/EfQPib8RPDPxY8NaaNC8NfELSdP+E7Wmg+FYtHbRbXwho3wuv/AIX3nwn0XSrbTRHpA8TaH4I074uS+F44/Bs3xRbwuqaYADofiF+yb4M+K2rfD7xp4z8ffF+y+KXgHwF4k+HNt8U/hp8TfFPwk8S6v4Y8Z6t4J1vxxp2qWPw8v9D0CW18Sal4E0K5jX+yjeeH5IVvfC1/puuQWWsxgGH4o/YV/Z28RW/wes9J0vx38NLT4KeBbj4UeD4/g18WfiZ8KLm8+EF2uiPe/CvxXrHgTxRomt+JvB13feHNC1iW31HU21hdZ0/+0YNYjn1HxD9sAPm39pP9gDVvGfh74Z/D79n/AEPwP4Q8NeDP2e4v2aYfGWsfHj9qb4eeNNF+Guk6TJoXhLw74j0X4N6/pGn/ALRvgjw5Zyvq0Pw++K3iHS7W48QNqbSeIRpPiHxdYXgB9qeAf2bPhl4Ch/Z/kt9Li1bWP2cfhEPg18Mdc1Gz0+XUNF8M3Gg+DPD2s3NtfTWs+rwXut6b4I0W1vkGrPZyW6TCW2luZDd0Ae/0AfJXiD9jvwH4yuPi7d+N/HHxJ8T3vxTPjNrfVX1bw54d1f4cyeNvB3gjwJrcnw/uvBnhPw3BDNH4T+HvhTw5Y3fiqz8R6hJ4ft/EPh/Xr3V9B8Y/EbTdXAPSPhp8KvHPw88Maz4Z1P8AaB+I3xL+1NYWfhvW/Hfhj4K2er+CdCsrEWIsdDT4cfCv4e6Rqmosha5j1XxZpWuwR3kVgZtJnso9RsrsA4/U/wBlzQjqGpeMPBvxU+MPw7+LWtx2kXiT4yeHPFOi6z4p8WW1lDcx2emeKvB/j/wt4z+EmraFpkl5f3Phfw+vw3ttJ8AXGreJ5vhXbeEpfEXiaS7APoTw7pmoaLoGjaTq3iPVPFupadp1nZ3/AIo1u10Gz1jX7yCBI7jV9Ss/DOjaBoFreX8im4nt9G0bTtMikdks7CCELEADZoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgDnPGH/In+LP+xc1z/016hQBd0D/AJAOif8AYJ0z/wBI46ANagAoAKACgAoAKACgAoAKACgD8Lv+CmPx++JFl4ok8LTaH+038P8A4b/BP42/sUavoWsfDL4M/GXVfDfx+8Z+JP2kfgRqeuPrHxV8E+Hr/wAOQ/DjwR4X1rUPBukfDWTVI9f+I/xwvJrLWbG007wj4MsfEoB+zVl8R/BF74j0bwadet9N8X+IPCqeNdE8Ia9DeeH/ABVqnhhZYYL/AFKw0DXLew1K7OgXFzY2viuzt7aS+8KXepaJa+KbbTbjVdJScA7egD8lPi3pngnx/oPxa+G8/i5/ih8QvEXxjj+CVt4NufDvgnWNA8L3nxa+Ifw2s/GPiBvsHhJdS03xR4W8BaF4k+I114el8TXOq2Hw48N+KPFF14cvdCsrvUqAOyvtE0TQ/hz8cI/Duj6XpGj3f/BSj9leSzTRdPtLDS7mTTv2jf2LvD2oyWy2MMVrM9hqeiXmh3rxbmtdR0y70q4ZLqyngQA86+MvjD9p3WvgD8erP4gaB8WdO8KXf7Nf/BQaTxdqHizwv8G9N8G3S6BYeINJ+ECaKfDEI8e6Kbvwxc3N5Yx+K7XSpvEVpHLqq/b44Jp6AOz/AGufj/8AtQ+Dvih+0noPwZ8e/DXwT4T/AGbv2I/DX7Wtza+KfhPqXjvxD498WnxT+07bT+BJ9XT4leFLDw54J1nS/gzp1prE9pot54shubsXmg+INN8u6hnAOL0H9sf4yfDTWfFg/aG+Kvw8fwz4q/YIvP20PD/izw98F9YsbP4N6vZ+IdA8M3PgyLwpB8TtW1r4s6N53jXw3caNptxruleK9e1iw1LSotbs01rTbeyAKXgX9pv9vZj+018I2+GGqeKfjJ4A+Cv7Pvxk+Edv8UPAnwS8B+M9cs/in8Vvi14H8b2d/wCE/hl+1f438Bauvh3QPhvN4l+Huh+IPHnwz8TX+vNP4L8amOOaw8UuAed+Kvi7+0x8UP8AhkHSPBf7S+p+E/H+kft8ar8KfiPpnxP/AGUfEXw18baF/an7E/xc+JXhfwr8Ufh3pPx00XRvHGkQ6etx4ptdS8PalD4F8Y2fifwLdWBg8R/DzVNS1YA9p0j9ob9ur4gfGn4hW/wy+HsfinwN8Ff2kPCfwG8TaRp/hf4M6R4N8UeFtPg+FD/GX4g+I/GPi79qTT/il4S8U6Zo3i/xP47+Hnhnw18MNW0iPTbTwT4b1KTxpJqmpeJKAPWf2c/iz+1j8c9Z/aK8Tf8ACVfA608IfCv9o39pL4DeCvAEvwx8c2Wvata/Dvxm3h7wn4s8W/E+L4s6rapNp0S+fqOg6L8MoF12OGe1Ou6VPqMGpacAcN4qn8VeGPhp498KfD220K08cfDT9qj4BeHU/aH1W/k1a98QftCfHr4lfC/RfiV8QL3wHaeH9IgvtG0Tw58dR4U1LwdbeMLfT28J3OsfBPw/4g8N2PhqxvrcA+4b7Svizd/DDTtS1dvDE/xk0fwvfPead4R1Tx1YfDvXvEht47ifTdKtJfGXha7t7bWLvTrO30jVPE19eXPhqO7vEE9xbTam9wAfJv7Htha+NpvGtto/iLRfih8DvCnxC8WePfDPjqTRfiF4e1XU/jx8Q/jF47+NnjHw5a6N4i+KPieOGz+BTeNtJ8Ga7Nq+jw+Iv+FmnxV4O8Qx6T4w8B+M9JmAPtrTPij8P9Z+JXi74P6X4ms7v4i+BvDXhLxh4s8Kxw3wvdG8NeNbzxJY+FdUuLmS1SwlTV7nwrriR29rdzXlstok1/b28F3p0swB2d+9/HY3kml21peailtM1haX97Pp1jc3ixubeC81C307VZ7G2lkCJNdQ6bfSwRs8iWVw6CJgD87vF2kaJeeCvjv8btU+LOrXPxK8B3HjKC7+MXhj4E+LxrPwotfgpqXiW5uPCnwo0C48TX+jTaTpijxAus2Wr6t4g0v4lXutavp3xHuNc8Fy2XgSxAPrDSJfil4P+HVnD8X72w+Kvia31LVV1nxP8JdCtPhFpFr4bs21S80nXdY0zxv8bb57CWPTrK0g8S3Gk+LJ7WbW7x5bDw7Y+HIbqaEA/PP9nqfXrpP2XRcfCr4rHVNf/Yc+H/jHXdJ8M+OPDXgCXV/FvhnxD8JvEFhcWK6L8WvDMXhXwtLrfifXhrngi1j0nQNXstWk0TxN4H1DR7WPS4QD6/8A2jH8R6Nq3gv4g6xo/h7xf4a8D+OPAdp8Lfhaddu9IvfHHxu8feILP4deFfEvirV5vDGs29jpvgFvFd5qOiaNa6dqtjps5u/i1rF9Dq3hLwxBYgGR8DJvjD/wv/8AaS0m1uvANl8EPCvxUl0SbwV5Ov3fjHRPHvib4M/BT4x6v4p8K+JlFhpVz4c8ba/8VdfvvE3hLVtAiv8ASvE8V74n0nxVfW/iC68O2IB5P+1XL4g8E+Mvg9Hpfim2Pivw54mufE/7M/grVx8UNYvvjV8VdV+G/wAUvgrL8K9V8TzfGiyXSpfDlj8VtF+IfiTxZPbnV18A2fjvxrFpN14V8CfEzVIAD658ReLPhp+zF8IPF3xT+LHiDRvB/hnw/aQeMPiz41t7HxPPpMmu3MGk6Nq3iFNNkvPFniPyL+8hs7ex0/7Xq2oQWxtLSS6u5Ue6cA9voA/OT9uj4d/FX4ka58MrT4bfEOXwzqGhweMYNPtNIs7iO68FP488F+LvAviL4/eJfEM8F9pul23w38M6nqWl+FtHgbwz4l8SWviH4h6H4Z8YX2t3dj4QuADF+CPgHxD8Nfj1p3i74gXXxW17Q/ib4h8UW/wKudR8FaJ4k8WeEtI0r4d/D34a6zZ/HPVPDXwwsPEngnQ/in4a+E/w88f6DqWvjRIvDesaHp3gb4467pvxUutN8PawAamn3nhC+/bC+O/hq/8AhvrvjbxVrPiaXU9CvNP8N/Bq+TQLL4T/AAE/ZHXxBfjVfiPdWd/bHVR+0h4e07S00W4m3vZ+KY7y0s4lW7vADrv2g9V8UeMP2Nf26rqwuPGcGpRfCP44eErPw58UY/hdDp+jzaL8J9attXm8PXfwzMkkmma4l5cTpc+Ldfv9Qg1pJHS103w+kFrKAfnR+zVofxe1D4sftEvaJ4HvLe6+Pv7dui+KNL0ay8Sajql4bD9o/wCBF1r2m+HbeK6jbTpEuNf8K6jYy6paahHdeH01zTriwhnvLDWrcA9X1bUoNK+Fn7Ht1L4fu/F00f7Ivxrn03wVa+FfEHi1PHer6d+0Z+wNq+l/D670fQrWZpIPH95p8Pg+I61PY+FJr/V7HT/FOpQ6HdXqOAdZ8B9U8ReMf2jbX+w/H2u+HLLS/EUGvyeONL8MfDSz8Y/Hq68W6/48n8e+CvjVrd78bfG3gv4g2Gmad8H5LDwVqPwm8C2Wu+G/Cmg3d98Cbzwn8GtO1LRrkAQfHD9pmfQ/2nZvgT8P8J4U/wCCh3xE+GPxK8R/DPwJb/Ez4i+HvhPpPwQ8EaxB498P/DTx58X/AAtp3jDxlqXjjUPCmgeIRoV1fW2k+C7rV9W0D4S6lqltNqcABS+If7Xv7RS/Dz4X/F/wf43ux+zsPhNrHivx7+0z4I/ZC1vx2+l/Ejwl4z8aaF420f4zfs9ap8cdJ+Kvwt8DeBdE8Mm68af8ItYazrD+KrLxZp//AAl/hG00qz028APdfEX7XXxF0rwX+1h4os4/BUrfB79uD9nT9njwC8thfSadqfw6+KX/AAxMNXvdTePX421XX7qP49+Lp9E1SwuLSxUDw4y6XcxWtwLoA4WH9or9tr4i/Hr4or8HPhlNrXwy+DX7Tnh74Fan4ZXRvgpH4b1vwNZf8Krl+LHjbxh8Q/FH7Snhv4maH4z0Tw94w8R+NfAmj+Ffg9caHNZ2XgzQ76z8VNrGoa2gB986J4z8ZeOtc+IfgbVfg18YfhLpelRa3pOgfFnW9a+AN1ofi1ftt5pFp4g+Hlr4N+L/AMSPF2nSzW/l+JdEHxJ+H3hqSGyazi13R4NZjvPDwAPyv1vxX8R/hr/wTD/bCm0D4k/EPUvEHhj9pH9p/wCG/wDwszW/GE8/xG0H4eXv7a/iT4eeKvFVt4ymjjk0fWfB3w71PXNY0jWtNhs5PD9zp1rqGhR2VzZ2RQA+lfgn8OPC3wt/av8A2ov2cvg3fa34F+Ft3+zV+zn4/n8PeGtd1fUI/hz8VfG3jT9qDwVrfivwrJ4iu/EOmeFvE3jbwr4F8I6tqtq9g41jWPDdn41v7K61TUdd1C9APSf+Ce7aqP2WdEtta8S+JfF1/pnxf/av0N/EvjHW7zxB4p1e20H9rj47aJYXWu65fO91qd/9h061jmuZSN2xVjjjhVIwAfadABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFAHOeMP8AkT/Fn/Yua5/6a9QoAu6B/wAgHRP+wTpn/pHHQBrUAFABQAUAFABQAUAFABQAUAeO/FTxZ+z7FDb+B/jZ4u+FFnFPdeFvGNt4U+JHibwhYfaLrwv4tsvEnhDxJFo3iLUIGnGieLvC1pq2i6iIGit9e0eOe3lF3ZMVAO61fwb4P8S654M8Va14e0jV9e8BalqeteB9eurOCfU/DOpa34c1fwrq97ol8VM1mdW8PazqWk36xSeTd2dwyzo7xQOgB1FAHA6n4B+Hy61P461LSbOy1Ww0rXIm146jfaZHo9tqlts8Q67ZtDf21loWu39hbpa6r4ysUtPE0uk2trp1zrZ0yztYFAPPPB/wJ+BVr8JNE+E/hy1l8S/D9PEXhn4twvrHxB8WeP8AWvE/iIfE+1+Mmi+O/EnjvxN4m8Q+KfHDeIPHejr4hm1PxDrup2ev28Nxo0r3PhxG0xQDv/F/wm+Gfj3wj4o8DeK/BWhal4Z8Y6BrPhfxFp0dkumy32h67p11peq2kWpaS1jqmmy3Fndzxxahpd7a6nZysl3YXkF5FBOoA7Wvhv8ADDxRqnjafxB4M8Ja5q/jn4f2Hw38fSalpOmX2oeJfhgtz41fTvBniPz4ZJ7/AMJPdeK/GrW+k3e7TJp9W8Q7YZJJbsEAztW+CHwY15JYtb+FPgDVop/hnqXwXnh1HwjoV3BN8H9Wewk1T4YTQz2EkUvgXUH02xa68KyK2iym2ty1kdgoA8Vs/wBlf9hj4P8Ah/UfB5+C3wD8F6P8Z5fCPwy1ax1/QPCNtdfFfUdG1HxD4o8BeDNRv/EKvqfj3XtEv5tb1vwXplzd6lrmlvavdeH0gj0m1eAA7q3/AGUf2Zrb4cn4TJ8DfhxN4AfxLZeNbjw3e+F9O1C3vfHNhbWdnaeOdTvb+G51LVPGkVlp9lp//CYajeXHiWTTba202bVXsYo7cAFbWv2RP2WvEXjvQPiZrXwC+F99448NjwoNI8SSeD9IS9jbwMlqngOW+jhto7XWJ/AS2VoPA1zrEF7ceETb27eGJdPaJGoA9a0PwF4R8J6b4l0zwVoWmeC4/FviDxJ4u8QXHhbTdN0q51Lxj4rvJdQ8SeLrxo7J4bzxHrN9K17qGr3sNxdXV1sluHkZFoA4zU/gL8MdVl+G5m03Xbez+GHiq48b+HdF07xt4207w3qni64vNR1eXxH498OWfiGLR/iZrreJtRm8df274/std1v/AIWCF8cnUW8UPd6nKAWvi7D4KHh23m+I3iHxPpvhHVPEfgTwVLpegavr+iRar4j8f+PvDvgTwfZX+o+DRY+Kms9X8TeJtJ0XUbP+2YvC0+m3tw3iuxm0aO9lUA+cdK8J/sM6f458S614H8Q+H/hHq3wb1bwdH4+h+FXxQ8ZfAn4b3V7YeFdD8Q+FbL4i6D4A8V+CPhl8UodI8J32hRtbeLNP8RjR/C82meGdTFr4euYNJlAPpPX/ABV8Lfh54+0CPXL+00vx18YXbw/pcki6je6hq2l+ANE17xCTeSot1F4d8HeFk1K/D6penTvCll4v8XabpUl0vjHxrpVtqAB29j4n8O6pqT6RpmsWWoX0Vl/aMkVjMLuOOz+0C1Ej3Nv5lsj+cQvkNN9o2kSeUYjvIB8/6npP7LA8PePvh/qvjzwtaaJ8UNS8fDxt4fb43arpR1rU/Ho1i48c20Mdr46srrSZ9TjuNUlmtdEaxfT1FzcWCW0kMk4AO/1jVfg78ZPht4gvp/GHhrxl8KY28S6f43udF8Taff8AgvVbHwvc6lp3jLwz4t1LSruWC80KwutPv9P8aeHJ7xNN1Ozg1Pw14ts77w5d61otwAYnhDxh8I/iF41X4j6N/bEHiPw98GvCeqXera/pPiXwzaaF8Pvi1cTeMdP0fXbTXbbT7TR/FkEfgWz1vxR4Z1iG38YeDtKu/D1x4isNOsfEGmNcgHTeJp/h5H8RvB1n4nur3UPGj6B4v8SeAdBWy13VBpVhoJ0Lwt418Z6FY6PYXEOna5aW3xI0fwvP4nuXXXbLRfE2oaD4fvbXSdb8XWt2Ac18OdC+Gnwo3fDnwXD8Tlv/AB74h8X+Mb3XvEmnfGXx5qc+vX8TXd5qni/4neOdN8Sx6YLXTrCz8P8AgyPx34hhtZtK0XR/BnhiO8j0yDSwAP8AEP7NXwS8by6te/EjwPp/xP1fWLSKyuNd+IrTeKtV0uCK6sL9B4KfUnktfhkF1TS9L15Ivhpa+F7ePxLpuj+J4YU8Radp+qIAb3hX4LeBvCfgrW/h6lx468XeF/EN/c3us2XxT+K/xU+Ll7f292lnDdaBc658UfGXi/W5vCd5bWSWV/4Pl1F/DGo2Nxq1nqmlXcGr68tyAer0AeZeOvhB4F+JNxqdx4vs9Wvv7W+GXxD+EF7Ba+JvEmlWb+BfiZJ4cfxpZx2WlapZ20Oral/wi2jJaeJoo18SaNDBNDoeqWUV3qKzAEMHwV+Glr4xTx7b6DcxeJ4vHur/ABKg1JPEHiQR23izXvhnYfCvXmtNP/tf+z7TQNc8L6ZYXGseDbe1j8Hal42tbf4n3+hTfEyMeLSAPs/gz8NrbWfDviS58N2+r+IvDOnfEHTdM1vWJJr24KfE/wAS+F/FvxDvLmxZ00efUPFHiDwhoWpS3n9mrJpMdrJpHhkaXoV1qGmTAGrF8MvAcGjaz4eh8Pwx6Hr3iaDxfq2kJeakunXevQ6npWr+d9kF75NvYXN/o9ncajoVskWganm+h1PTLm31HV4pwDzvwf8AswfBfwBqN1qvg3QNc8O3t7onxF0K8k0fx74+01LiH4neKND8V+NdaeGw8TW0I8a6rqnhzQx/wsZEX4iQ6fpun6anik2dvEgANXwx+z78MfCFh8N9L0bTtWFj8LvhP4o+C3haO/8AEeualct4E8XXPw4u/EMOt6pfXs+ra7rOpXHwx8Mz3PiHUb+bV5phqk9xdS3GoXkrABov7PPwh0LU/EWqQ+GJNSn8Q+IfAPiUweIda13xDYaBqHwzvTqfw9t/BthrWo31r4O0rwbqkt5qXh7SPD8VlYaXJe3Gn2UMWhw6dpMABT8X/swfs6+PdP1HTPFvwa8Barbap4+u/irfP/wj9nY303xNv9Dh8N6j4+XVNNSz1G38WapoEEehapr1vdx6lqOihtLv7mexeWBgDH8RfsffspeLYvB1v4j/AGefhNqdp4E0G38J+FdOm8DaDHpWn+DrWa9ubTwXPpVvZRWGreDbW8v7zUrbwfrFte+GYNXuJtZi0ldVc3lAE/if9kf9lrxt8Vf+F3+Mf2f/AIVeKPirnw1J/wAJ7r/gjQtV8QfbvCN9pl94W1v7Te2U6/8ACR+H30bSrbSvE+z/AISO00jT9O0GHVF0O1ttOUAteK/2Vv2avHXxMsPjH4w+B/w58QfEvT7zw9qMfjXUvC+mza3eal4Tlhm8H6nrU3kCPxDqPg2a3hn8Hahrsd/e+F5445vDk9hKokoA9p1zQ9G8T6HrPhnxFpllrOg+IdK1HQ9d0bUreO607VtG1WzuLDU9Mv7WVWiubK/s7me1ureRWjmglkikVlY0AeL/AA6/ZW/Zm+Efh/x34S+GXwH+F3gvwv8AE3T/AOyfiN4a0LwToNp4f8c6SbXWrOTTPFmjCybT9f0+e08Qa1a3VlqVvPbXVrqeo291FJDczqwA/wAG/sufs4/D3wT45+HXgz4L+ANC8G/EuC4tPiHoFt4espbTxtYz6bJoy6f4plu47i61zTrHRnOiaPp2oTzWOiaEsGh6Hb2ekwW9ooBufCH4A/A79n7S9Z0X4H/CjwL8LNL8Qagmq67YeBvDWl+H7fVtSjjeKO91FNPtoPtdxGjyCOSYsUMszKQ8spYA9doAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoA5zxh/wAif4s/7FzXP/TXqFAF3QP+QDon/YJ0z/0jjoA1qACgAoAKACgAoAKACgAoAKAPxe/b41n4b/Cn4rfGX9pK1+Nn7HPiP4heCv2d/hh4b1P9kX49/Drwz4++I3jmX4feKfjx448G6F8PtTT4u6F4s8C+I/jTJ8XLjwj4X+yfDjxPbX3iXS/DeoS2mt2MV7oagH6mzfF7wdo3j3wD8LvEv9oeFfF/xJ0HUNW8B2GqabcLpPiW70DTZ9W8V+E9J121SfSx4s8KaREdbvvDd/NY6pqHh7+0Nd8M2uq6XofjC508A9E1a4vLTSdUu9OtPt1/a6fe3FhY5K/bLyG2nktrTcCCPtMyRxZByN/XJBoA/na8C/tZ+LNQ1b9n+Pw3+2Xrfxf+IHxc/Y7/AGrviV+1Z8Htav8A4T+IdM+Enxs8B/BXwb4k0rwrP8NbPwRBq3wYbwh4y17xb4cHw88QyRzajYaDDa+KbHWdQtNc1a6APVP2TJZtU/a4+BHxJ8f/ALSvizwPrXxO/wCCZX/BPHxNpHgEX/wS8KeDPin4kl1D48WfirwFoHh3UPhquqaho1jqOp6b4oufDngLVLDWNB1/xoRaX9hoGo+FtCtwD60/4KF+O/iP4Ivvg7L4W+MOjeCfBsmj/F3VfHXw90n9o/4R/s6/Grx7daBH8PLrwx4n+GniT4s+B/Eeh+KdC+G8U/iGDx74SOv+C7C5vPGHgLUPEHiO70qzk8O3YB8pfD/4leEvB/7Vvxw/ae8V/tHfHzR9E1//AIJ7fsZ/Hzwd8H9ej+Ael/Ef43+F9F+G/wC17qXiPTf+FbXPw7g1bxF498MRaQ/jC+8K+Bdc0qx0b4peJdXttRlXwVd+G9AtADzT4E/tU/H3VvHHx5+Gvhr9q74RxWeuf8E/vFf7Qngvx78Qf2q/hx+0PonwN+KqeJfDmieGfGnxZ8f6P+zf8MvCvwsh/szxtba14r8Dx6R8SPhlpZ0aw17wzb3vhma80jUQDnPFXjnXvjXpf7PHwmuPir8d9H8Y+Ev+Cin7M2nat45l+Ln7P/x80/wzP42+A37Q2rrqHwS+N3hT4apomuXd1a201xrHh34heEW1vwTNcaBqen+D9F0LXNAWYA/Xn9jDU/HMNt+018M/GvxG8V/FGH4I/tMeJPht4K8X+PJNJu/G9x4IvfhP8Gvidpul+JtY0nTNIh8QXmg6j8R9X0iy1m5sk1GfRLbSYL+Se5t5LmQA/OJ/2lfHeq/GT47vZftk6+/xq+Gn/BR/4f8A7P3wl/ZKsdb+DJ0bxN8FfEvin4B2njLTte+GVt4IX4h67Z/8IB4p+JXib/hYOqeIAPBtv4Vm8XaXrGlWml+LprwA9ET4/wDjxvi1o3iDT/2ndZ1b4433/BQPX/2ctU/Y1N14HXQLL9nLTfjX4m8GvfL8NotDi8bw6hpX7P8AYWX7WZ+L76sbu5jlXTrrU5/hxNZeFVAOK+Bv7RvjTxT4/wDgRrmn/to678U/jL4v/bf/AGovgn8Q/wBlk6z8F9V0PQf2f/Bfxe/ah0Y3GofDnwT4Q0Hxt4Kf4WeFfB/gfxfYfE/xNq1xqbzv4e8HeItU1XQ/FPhrw8wB+gv7d/gTRfHPwh8FxeK7/V5fCemftC/sqjxB4RsY4m0zxdaa5+1P8F/DVxb66ttp1zr1zBp+l6tqs2m2Gg3tjPLrE1jfyfarvT9NjUA+L/Ang3xr4C/ael1XxBpPw68H+D9d8QtoWt654hsNc8X6ToGufHY/s93Xwl+H3xSl1PUdL0Kf43aJ8O/2b7b4GzxDxfqtxpniT4ufBr4mafrfiHV/irN8PdRAPcf+CgHgrUYvEPwN+M/gXQPDOpeJfhB4u1/xx8UtX8Z+GY/EnhPw98Av+FZeP/BXivW/FFzqus6dY2OkeGLrxZb+MdB8EWElxq3jHxHo1/rWlaCbXw9418caOAd/+wPZ6rrXhv4wfGG9sNFg0f4tfEHSr/wJq/hzwNongbw34u8CeE/AXhXwtp3jHwvpGmeLPEl3L4Y13W7PxFPoGp6smkv4gsFXxloVjeeEtf0DxHegHsvx0/5Kl+xX/wBnJ+K//WMf2vKAOe/bCgsPiJ+yh+074e8P+NbaC30b4bfE7TfHv/CN6ha3WtQLpPw51fxDf+Bbq7tLx28M3uvW1zott4iiu7d9WPgfWNRg0uPTdU1XRPFNmAeFeKvhLoOm/tR/F99M0Dw54k13xd8BNC8a+Jbrxd8IJfi3qfiTxDqHxA+JulwW9lay+I/Dmm2DafoGkaH4J8L2fiDU206Pwto3hrQru8ay0y9vpAD2T4wf2VYftJfCCO68Oa7r9jB+y7+1db2nhvwZbXK+JL27/wCFvfsM2+i2fhiaxvtJbQdUi1A2baX4jbV9DsPCdwkHifUPEug6Zpl14htgDn/2SPCfxj8OeO/jlc/tH6Dfav8AGPVbT4XX0XxktpbO/wDBHif4TzaZ4ntfBXwu8MX1joXhjT9L8R/CbxBpnji8+KGg6P4c0vRdX8UeM7P4xaVZaVpPxG03wBoAB9y0AFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAc54w/5E/xZ/2Lmuf+mvUKALugf8gHRP8AsE6Z/wCkcdAGtQAUAFABQAUAFABQAUAFAHG3niLXLnUdQ03wnoWn6u+jzRWurXus6/PoWmwX0trBerp9rLZ6D4ivLy7htLm1ubomwgs4lureJL2a6W7gjAOa1DRPEmrazpHiLVfhX8J9S17QPO/sHXdQ8W6heazov2gFbj+yNTufg/LeaZ9oXib7HPF5oJEm4ZJANaaT4h3MtnNc+Bvh9cTafcNd2Es3j/XZZbK7ezu7B7qzkk+EzNbXD2V7eWTTwlZWs7q7tWcwTTq4BY/tD4nf9Ch4G/8ADjeIv/nUUAfLfwt/Zg8T/Db4in4p634i8W/GXxjY+HfFPhDwjqXxj+Os/iCHwL4U8Y6t4W1bxVo/huy8P/s9+E7a+uddm8FeErO98VeMY/Enjo6NoOmaFF4qj0dtRs7gA+lGg8cNJp0zfD34bNLpCPHpMreOdYMmlxyRRwSJpzn4RlrFJIYo4nW2aNWiSONgURcgFbWdM8WeI4rWHxD8MvhbrsNjd2+oWUWs+MtT1OK01C1mjntb61jvvhDOtvd208UU1vcxBZ4Zo45Y5BIitQBemPj+4urO+uPAfw7nvdP+0fYLybx7rcl1Y/aoxDdfY7h/hK0tr9qiURXHkunnRgRy71HIBk6ToPiHQLKTTtC+FHwl0awlOpmWw0nxXfafZSnWLo3msGS1s/g9DC51a7Ju9TLITfXRNxdmWYmQgE2kaT4o8P6faaToHwv+FeiaZYXEt3YabpHjDUtO0+yu5jMZrq0s7P4Pw29tcTGecyzQxrK5mm3uxkkLAGul18SImmePwX4Cje4kEtw6fEPX0aeVYYoFlmZfhODLIsMEMIdyziGOKINsjUEA8X+E/wAELv4Na58W/EfhTwT4Uu9a+MXxW8S/GHxTqeu/Ei+vb2z8TeJ9F8M6JqWmaBd23wSsLjT/AA2lp4XsJLTS7iW8njupb+ebUJzOFAB6omneLo9el8Up8M/hcniWfTU0WfxGnjPVF16bRkuRdx6RLq4+EP2+TTUulF0lg9wbRbkCcQiYeYQDzn4M/B/UPgP4WuvCngbwJ4ONve+Lvid4zvNW1f4jajc+ILrVPij8UfF/xU8SW1xqlp8FdPefTbXxF4w1G30S1lR5LLRYNLsp7i7uLZ76UA9F13TfGPiixg0zxD8PPh1q9hbaz4a8RW9pffEHxBNBFrvhLxJpXizwxqqIfhRxeaF4i0XS9a06XrBqFlazrloxQBj6l4Lvtb8Iah4A134NfB3XfBWrNdyax4R13xPe6z4b1ma+1eXXdQuda0bVPg7eWOsXWpa3NNrmo3eowXFzf63NPrF7NNqUst0QCvrHgO/8R6zYa94l+E/wz8TahpF3Z6joP/CS/EPxN4g0/wAN6pYJHHaat4V0fWfhZfaT4W1aNYk3at4fsrDUpmBee6kdnYgGRo/wi0rw58QNU+Knh34A/A/QfiFrkeoJrvjLRPEN3pWva5Lqc8VxqF9rd9YfB23fWNVu3iCzazqP2jVzBJc2gvRa3N3E4B1UXhrWoIoIIPhF8IIYbZEjtoYvE95HFbxxxmGNII0+DgWFI4v3SJGAqxkxrhc5AINa8Jax4h8IeKvAOsfCj4WXfg/xro+uaB4s8ODxxrdtpev6P4i0ufRtdsdSt7T4SwCePVdMnlsbxyRNJbMI/NAVCADUj03xjF4ivPFsfw8+HS+I7/RtN8O3etf8LB8QHUJtC0q/1bUtO0szt8JyUs7e+1rUrsRR7RJPcl5/MMduUAMjxD4MvvF+qaVrfi34MfBnxPq+h2GraXouq+IfEVxrOo6TpmuXOjXet6fpl5qXwaup7Cz1i58P6Jc6pbW0kcN9Ppeky3UckllaOgBRsfhxBpmt6R4l034CfAjT/EOgSXsug6/Y6mlrreiy6jp9zpeoy6RqsHwVjvdMkv8ATbu6069eznia60+4ubK4aS2mmjYA77+0Pid/0KHgb/w43iL/AOdRQAf2h8Tv+hQ8Df8AhxvEX/zqKAD+0Pid/wBCh4G/8ON4i/8AnUUAH9ofE7/oUPA3/hxvEX/zqKAD+0Pid/0KHgb/AMON4i/+dRQAf2h8Tv8AoUPA3/hxvEX/AM6igA/tD4nf9Ch4G/8ADjeIv/nUUAH9ofE7/oUPA3/hxvEX/wA6igA/tD4nf9Ch4G/8ON4i/wDnUUAH9ofE7/oUPA3/AIcbxF/86igA/tD4nf8AQoeBv/DjeIv/AJ1FAB/aHxO/6FDwN/4cbxF/86igA/tD4nf9Ch4G/wDDjeIv/nUUAH9ofE7/AKFDwN/4cbxF/wDOooAP7Q+J3/QoeBv/AA43iL/51FAB/aHxO/6FDwN/4cbxF/8AOooAP7Q+J3/QoeBv/DjeIv8A51FAB/aHxO/6FDwN/wCHG8Rf/OooAP7Q+J3/AEKHgb/w43iL/wCdRQAf2h8Tv+hQ8Df+HG8Rf/OooAP7Q+J3/QoeBv8Aw43iL/51FAB/aHxO/wChQ8Df+HG8Rf8AzqKAD+0Pid/0KHgb/wAON4i/+dRQAf2h8Tv+hQ8Df+HG8Rf/ADqKAD+0Pid/0KHgb/w43iL/AOdRQAf2h8Tv+hQ8Df8AhxvEX/zqKAD+0Pid/wBCh4G/8ON4i/8AnUUAH9ofE7/oUPA3/hxvEX/zqKAD+0Pid/0KHgb/AMON4i/+dRQAf2h8Tv8AoUPA3/hxvEX/AM6igA/tD4nf9Ch4G/8ADjeIv/nUUAH9ofE7/oUPA3/hxvEX/wA6igA/tD4nf9Ch4G/8ON4i/wDnUUAH9ofE7/oUPA3/AIcbxF/86igA/tD4nf8AQoeBv/DjeIv/AJ1FAB/aHxO/6FDwN/4cbxF/86igDd0W48Tz/av+Ej0jQtL2eT9j/sXxHqOu+fu877R9q+3eE/Df2TytsPk+V9r8/wAybzPI8lPNANygAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKAMnX7GbU9A1zTLcqJ9Q0jUrGAscKJrqyu7eMsSeF3SqSc8DPJwTQB5lrfj5NC+DPjLxPoM2nTeI/Avw317WpdFv2Msum654f8L6jex6dr+nQXVvewIl9YCC5hMltJPFva1uVR0uKAPgD9iP8A4KeeFvj7oX7L3gP4w+FfHPgn40fH/wCHWp+JPD3iif4VeKPB/wACPiJ4q8M6bLrHjDw18LPFfiLVL2TXb/QtJCXV6sButHa4jubPT9dubt7S0cA+h/DX/BQb9mzxZ8PfgF8S9G1bxXJ4d/aN+OE37PXwzE/hS9g1G4+JdvrvirQLi01q1ecrpGkwX3hHVS2rSTywPB9lkhSRpSoAPKvE3/BWL9lLwv4z8ReGpdP+MuteGfDnxh039n66+Mvhz4T65q3wSvfjXezw21x8OtM8fxXaWtzrekTvImpSvaxaUyQTXWlajf2MlldTAH6AePPG2k/Dzwpq3ivVrTV9UTT4H+w6B4c02TWPFPibVnSQad4a8K6LDIkuseINauEW00ywWSKN55BNeXNtYQ3t7GAfnJpv7UXif4c+G/ht45+ImvfEzx/45X4m+JfBXxl+Dfhb4S/EWR/B198Y4NM+IHhX4Y+D7KD4faSnifxv8E9GHg1dC0/XtSuPGHi74d61408ReHm1CTXfBXh6QA+yPG/xWubPwJ4b+K/h3xXb+Gvh/rOm2F7JdeJ/2e/jX4t8Rwx6soudN1LVfC2i6x4P8T+CtKSzDtqtx4s8PWsWkyeSdWu7QTLGAD58/ZG+IHxq8Uafpnw28ZfEe0m8efDdbTxF8YvD3jn4C/FW28YL4f8AGviT4jP4U0WL4g638VNP0Sz167sdL0/VtPdtA1ltP8KLp9lLodybg6tAAfWnj/x3pHhdb9db8beH/hz4e0TS9N1jxb498Tajoel6boVnrWrXGi6BaQah4jmj0Ozv9Z1G0uoIbvV1uLWJ4YLRNOu7u/tzGAcX4R+MXw71YXWp+CPjv4J+MHhrS9Q0PTfF0+i+L/h/4jvvBr+I7u407QNSvdR8FyW9rZ6dfajF9nlt9btfNaD7ZqNnqi2+mXNhKAeifD29stRXxteafd219aTeN9VaG6s7iK5tpl/s7RBuinheSORcqRlXIyCM5ByAdzLe2UFzaWc95bQ3V8ZlsbWW4ijubxreIz3C2kDyCS5MEKmaYQq5iiBkkwgLkA8m8XfHn4Z/D/VbfSfHOo6/4Wk1H4k/Dj4R6DqGreBvHMeg+J/iD8UUgHgnRfC3iCDw7PpGvQ6hdzDS9S1nT72XQ/DuspNpXijUtNvU8sgHsVAHmvjH4w/DPwAPh43ivxZZ2EfxT+IWk/CnwBNa2up6zB4i+IOs2XiC/wBN8OwT6HY6lDZSTWvhjXJJdR1OS00ezaxmgvtQguHgicA9B+22QvRpv2y2/tA2zXosPtEX202SzLA14LXzPONsszLC1xsMQmZYjJ5hAIAfbbI3p00XlsdQW2W9aw+0RfbRZNM8C3htfM84WzTRvCtwU8ozK8QkMisCAeY/A/4zeCv2gvhP8PfjD4Ckvk8OfEbwX4Y8e6Lp2txWVn4ksNB8VacupaMNe0uz1HUo9OvJrfeGiS8uIGljnW3u5kjaQgHp91d2lhbTXl9dW9naW6GS4urqeK3toIwQC808zpHEgOAWdwoJALE9QAuLu0s1ia7ure1We4gtIGuJ4oVmu7mQRW1rEZXUSXFzKRHBAhMsshCRqznBAHzTwWyCS4nigjaW3t1kmkSJGnuriK1tYA0jBTLc3MsVvbxAl5riSKCMNK6hgCWgAoAZJJHFG8srpHHEjSSSSMqRxxorM7u7MFRFVWZmY7VUMS2AWoA5zWvFml6HZ6Dftba5rNr4i1zQNB02bwt4c13xUiy+ILlbex1bUW8O2GpLpHhm3U/a9W8V6o1t4c0iw/0zU9TggKOwBmeAPiT4I+KWl67rPgPW/wC3dO8N+OfH/wANtbuf7N1jTfsXjf4aeMtb8CeOdE8nWNP0+e5/sLxR4e1bSv7StI5tI1L7N/aGi6he6VPaX0gB2Ju7QXa2BurcXr273aWRniF21pHLHDJdLbF/Na3jlliiecKYllkjjZw7KGAOB+Gnxb+HHxh+H1j8U/h14nt9e8CahceKLW18Ry2OraJbGbwf4l13wn4nE9r4hsNKv7NNI17w5rFhcTXlrDC/2OS8tpJrCS3u5ADuZ9T022sDqtzqFlb6aIopzqM93bxWAgm2CGc3kkqwCKbfH5UnmbH3psZiwLAHk0nx38BwfHrU/wBne6OqWfjPSfhH4f8AjRd6neQ6fb+Ex4S8R+Ptd+HmlWaatLqi3R1+bX9Bu1Ng2mra/ZJbJ49Rku5vsdAHs1AFa1vbK+FwbK8trsWtzPZXRtbiKcW17bMEubS4MUj+Tc27YWe3kKzRMQsiBuoAtvd2l35/2S6t7n7LcS2lz9nnim+z3cO3zrWfy3fybiLcvmwSYlj3LvUZGQDyH43/AB38B/AH4VeI/i/4xOqar4X8Ma74R8OapD4Th0/VdXXV/F/xA8NfDrTbaO2udU021D2mv+JtP/tZJ76GazslvJRFLcxJaOAezUAFAGPoXiHw94p00ax4Y13R/EWkte6tpq6roWqWOraadS0LV7/Qdc08X2n3FzbG90XWtM1DRtWtBKbjTtXsr/TL2OK+trmFQDQuLu0s1ia7ure1We4gtIGuJ4oVmu7mQRW1rEZXUSXFzKRHBAhMsshCRqznBAPLfif8bvh38GNH8X+JviTd+IfD3hPwH8O/EHxS8X+M18DeONY8JaJ4Q8N3EEGrGbXdB8P6pZ3fiGNJWvrXwbp0l14vvtLgvNTsdEmsYJJyAetUAebfE34v/DX4N/D3xj8VPiP4qtdA8C+AYkm8Y69HaaprY0JHurCzVbvTfD1jq2rPMJtRshJb29jLcRRXEdzLEtsHmoA9Aub2ysjbC8vLa1N5cx2VoLm4igN1eyrI0NpbCWRTPcyrFI0dvFumdY5CqMEc0AEt7ZQXNpZz3ltDdXxmWxtZbiKO5vGt4jPcLaQPIJLkwQqZphCrmKIGSTCAuQDyL4Q/HfwH8bE8fHwkdUspfh78XPih8F9XtfEEOn2F5qHi34U66mgeLbzQra21TUJL/QEvXjaxv5Bb3UlvJFLeadaNIkZAPYpZYbeGWeeWOGCCN5ZppXWOGGGNWeSWWR2CRxxojO7uwVVVmZgFZiAeX/DP4xeDfi1qvxb0nwidRkk+DvxKX4V+KLu8gtEsL/xG/wANvhv8TY73w5c2uoXo1PQ5fDvxL8PLFqEy2ksmorqcCWbWsFvfTgHpct7ZQXNpZz3ltDdXxmWxtZbiKO5vGt4jPcLaQPIJLkwQqZphCrmKIGSTCAuQBZbu0gntbae6t4bi9eWOyt5Z4o57uSGF7iZLWJ3D3DxQRvPKsQdo4UeVwI1Z6APKLP42+DNR+MHjb4NWEWr3WrfDbwNonjn4i+K0g06LwF4KTxJdXi+GvCfiDX7jVoZ4fGet6PpupeL00S1065i0rwdbWmveJtQ0qHXfBaamAfK6f8FGPg7BJ4Qg1bTNbs5Lz4k/FLwH8SrnT9C+IXiDR/hZYfDuTWtOTXNV1rRfh1dWWtahr+uX/wAJtN/4Rize2udHsvin4c13UNTfT4tM/tQA+gfiL+0l4M+G/wACfH/x31fQ/GltpPgnSfGN/D4Y8ReDvFHg/wAW+Irnwtp2r6msGm6H4j0az1S307VNN0qXXX8QXVguleH/AAomq+KPFs2laVoXiqWzAIrH9oUGf4X6Vrnwt8eaJrvxR1jTfDnh6KWXwg/h+812TwvrPjPXINK8QXnifTJNWtND8I+GPFfiyKQ6VaatrGg6Dfvp2hnVXh0qgC98QP2hPC3w++JHh/4d3em61qdxNaeGtX8bappnh/xrqtt4I0Px5rniHwX8LbidPDng/wAQRatqvxH+IOgXnhLQ9EF3YywQ2et67qF3FBZ6bY34A34U/tAaB8SrjTtPvdNn8Mat4tv/AIt6l8M9Okj8Q6inj34VfDLxtpnhJPivY6vJ4W0rRrbQ/F0Gv+FPFGhW8GoajBceG/FXhe9sdYv3u7hIgB3g/wCOdr4r8Dz+O5rDw/oNhBfeOrVtN1HxbeXGutbeCfGHijwpd3cOk6Z4Svby8k1GXw1cXlhp+nQ3d7Ms8Njbx3F6NjAFTQv2ivD9/pfiPU9W0S+sI9H+Mvh/4K6aulznVDrmv+KNK8E33hzUIhqFn4el0y01C48Z2VjNHqESPYPFJcXciwmTYAYF5+1v8KpvA/w+8faB4l8FSaR4w17Q7XWLPxZ480nwxrfhPwxfpqMmra7eaXZ23iaa51XRVslP/CO3DadBdGVlm8Q2TxoJAD2L4hfFDwt8Ofh5qXxHv3ute0uDT7a40DS/CscOta/461bVFWPwt4V8CWENyieJPEvjW+ls9K8Kaba3AXVNRvrKNbhLd5LoAGf8JviYfiHoZtfEWk2vgz4oeHLHRY/il8L/AO3INb1HwF4h1O0lmW0GpR2mnnX/AA1qUlreSeD/ABpb6daaV4r0u2lv7GGG6h1PTLYA+df+G7fh7F8VvE3wnn+H3xGbVPDusw6F/a9nF4Jn0nULs+Kvj54bubqAXXjWwvoNPtG+BGv3byT2i30v9o6Zbwac4Wa5oA7S4/at8MwX3xiMXhbWNR0X4Tav8OfDk97p91bprOveIPGXxg8a/B3VbG10bWItGs7G38N+JfCEslvqM+uy22vafctdQCyhit5bgAw3/bB0lD4W1R/h7r1t4Pk07xV40+Kvi241XTrq1+D/AMIYfFGreGfhd8UfEdt4di8Qpe6P8X4rS38e6VAL2xg8J/CC18cfEjxtqun2PhO7067APrK113Qr7TNK1qy1rSrvSNci02fRNWtdRs59M1iDV44pNIm0q/ine21GLVY5oZNNktJZUvY5YntWlV1YgHJ6B8VPAHin4ifEb4U6D4gW/wDHfwpsvA+o/EDw+NN1m3fQLH4hWWt3/gu4bUbvToNK1NdbtfD+rSouj319JZG0kh1VbWeSCNwDtrO/sNRiafTr20voUllt3ms7mG5iSeFzHNA0kEkiLLC42SxFt8b5VwGBJAPIvib8efAPwpf4PLrr6lq0fxr+MHh/4I+DLrwzFp2qWieM/EGj+LtYtJ9YuJNVs47XRbW38G6vDqF5aG9vbe9FvbJpsrPMyAHd+I/Hng7wj4Z/4TLxB4gsLHwyb3QdOTWkeS9spb7xJ4g03wxoFtbtp8d09zJquu6rp+l2ogRw11dQhmVCz0AeCeE/2u/hR4g8V/FLw5q2rWnh2DwL8Zfh/wDBjw9qc58QXQ8Za58Q/AvwR17wzO1u/hexj8O3OpeLPjBZeA7HTZ7zUI57iwg12fU7aDUm061APQviB8aND8EapqPhOC2t7zxq+kaTN4U0zX9c03wd4Y8UeKfEunfEq+8K+D4fF+rtNEmpX8Xww8TX+tRaRpWuar4e8O2y+IbvRLi3msLecAd4C+M+jeOta0/wxb6LqEHiBfD1/qvi1NK1Pwv4u8O+A/EGlnwml54F8WeJ/CWvavZaT4pvD4oW78NafqEVq/iTRtI8Ra1pYaysCXAL3wg+L/hz4zaB4g1bRNM1/wAOar4O8a+J/h1468FeLrfSrXxd4K8beFryKK/0PxBb6JrXiDSC19pt3pHinw/qWj61qWjeIPBuu+GvFOi6ldaRqllcsAerUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQBx/jrwjB418FeOfCS3EWlT+M/CXiHwpLrK2KXc1mmtaNf6VHeSW4ntHvlsfthuEs2u4BLtMIuIS5lAB+Y/7PH/BMbxX8I/GX7I+r/Ev9qCf4teDf2LPD/j3SfgX4D0n4NaT8N47bVPHfh0eGdT13xj4kt/Hvi/UvFD2emNK1jp4j0+BL8wTtK1ot7p9wAcF8M/+CTHjzwBcfAnwte/teXGv/Br9m79qk/tNfCn4cy/A3w/Z621xc6zruv6l4b8VePLfxut7qFxNf+JNXgstXstLtdPtYZ7i8n8OXUk+n2OnAHwj8Sf2Dv2nta+MTfs3/Bnwp8eNH/Z4uf2+LL9pvWIvH/gf4C6d8H/C2m2viS1uPEHxB8NfGS0+JOsfE3x7Bqejyyf8In8NZfCWh6zZzEwa3NcTWs9w4B/Tx4jn8SW2h6hN4R03SNW8QrHGulWGvaveaHos08lxFE8mo6rY6Lr15a29tA8l2y22lXU9w0QtI1jaYXEYB8aWv7MHjuz8Y/AtrzW/BPifw/4a+NnjL9pf41+Nr211jR/HHjH4x6l4C8f+DvDtr4X8KC38QaFY+EdKh8YaJYaOup+JTrXhTwb4D8MeHYLvXtWnl8TQgH0b8VNM+InijR9Q8EeEfDvw4vdE8VaLqGh+KNd+JV1rWq6PYabq9ve6feWyfDXRtMt2+ItvNZSSwaroepeOvAlpNbXkKQa7ckX1sgB84/Ar4A/H/wDZov7Xwj4V8b+BvjV8OvE/iWHxF8RfH/xeu/Gmj/tGyag+n6Lo95q+peKdKt/Fvhz4t3Vnoui2Hh/wnY6ppvgB/D/hnT/D/h+51zV4tL+2zgH0x498C6V4nTUTrHg7w/8AELQdc0rT9E8W+BPE+n6PqWk+IdP0jVp9Z0GdbLXre40a6vNF1K5ubqG01VY7SZp47lL21vLG1MgBxfhH4O+ANHjutK8G/AvwT8HPDGp6jomqeLNP0Pwr8PNCvPGU/h25nvdAsdTsfAv2zTbqwsL6Vrp59Uvp5vIafTraxWK/v7hAD0H4e2Vnpw8b2NhaW1ja23jfVEis7S3itreBW0vQZVWO3hRI4lZZFlVVUAq6uMht5APwn/4Kf+A4rLSf+Cg/iL4p/sp3Xx6vvHnwY8J2/wCzf8dnsvgj4k0X9nrQbbwBB4UuPB8138SfGmgeLfhVr0nxdk8QeP8AQk+H2i6tq3xJ1PxTpNj4ak1Xxfop0OzAO2/aj/ZH8YfFL4xftReN/F/7Pp+LXgCx/bW/4Jz/ABk0rw7q/gzQPGbePvhR8NPhx4I8LfGlPBXhzXo7i28RHSra61u11/QAqSazZWus6VDbX1xNHYzgH6V/HXwB4X8ffsSeMPht4d8EfEnwR4N8RfBvSfDui/Dr4SeDfCOk/Ebwb4Ul0jSoNP8ABugfDXW5rHwog8M6SkOj618M5/8AiW3vh+z1bwPZ2F0bi206QA/JK9/ZW17xz8Kvh9N4z/Ys+Ffir4c/BP8Abp+E3xRii8IfsaeGfgh4v+M/wY1H4OXfgv4m+Ide/ZY1/XfFNzDq+heIfEOkaB4gI/se68feFfCMWq23w6trHRNMuL4AZ8cvg38SPiB8drfxP4N/ZM8X/DvxP4N+O/7D1/8AAO8+FH7JvwD0XTbb9nvwh46/Zx1LWfFnxY/aR8U6BcfEDwzrPgnwrb/EH4c6x8Gfhnr/AIUuvB3hDRbTwvceGPEXgObXvE1yAfSfw4+B+v8Agn/goJP448EfBebxdpvib45/F3xl8SfiH8dP2YPDOkfEj4V6R4i+HfxN05fGfwW/bL0LxTbv468Da7rh0D4f+BvgxqfhnxP4x0P4Y+KX03XL3wtoWgx3NuAZ37Ff7GjfAex/4Jm+MdI/Z/0v4ZfEfSPgH488K/tR+KdD8M6PoXi6/wBS1r4YeDLuw0L4wa5paQ6j4tkj8Y6HatpFl4iutUTQ9UsIYdLSxWERgA9B/bs0z4Yap+2X+xND8W/2ftS/aQ8KQ/BD9uW4Pw1034Z6H8VTLqS63+xzFZ6veeCPEEq6XqNtbLLNYx3N1DcR2GoahYXkiW8UUuqwAHhPhz9nTVvh14Z/Zjg/at/ZR8V/Hz4Q6D8Afjl4B0H4IaT4V0j9oST4C+MvG3xz07xp8MfAuseEZZ7/AEw3+k/Bz/hH/gzonxd0W4vPC3gFvBGtaRqHjHw34H8RQeIL4A8Os/hfH4a+PXwj+Fn7XX7Lmu/tg/EPwv8A8Elvg94W1TwHp3hXwz8UrnSPiCPi/wDFbTriwu/FPifX5LDQtakit4/B0vxmh1SOEX0F3rz+IrCyvY5HAP3a/Zz8FeO/A37MPwF+HHxQ1FtS+JHhD4GfCzwV8Q9Vh1u+vnv/AB3oPw80PQ/FuoxeI4XttQvWu9ctL25TW4nhvrgyDUEeO5fcAD4l+GP7I37TPhL4j+BvE/iHxbpV1oeg+KdC1bWbZf24/wDgqL4yefS7LUree+ij8I/Ef9ofXvAviaSS2jkWPRPGWj6j4Y1CQra63p9zp8lxCQD3z9vHwNr/AI9+B2iWGn+Cbr4peF9D+MnwX8W/FX4PWF94ettR+L3ws8O/EDS77xN8PbDT/Feq6J4Z8W3GqTLp2ot8PvEWtadpXxAttOuPAkkl7cazb6JeAH5a/Dn4b6p8QNV+Ld98Cv2a9Z+Dng3w3/wV1/Ye8VTfCfT9D+FugT+APCfw9+AH7Lt/8UtX1Tw18KPFfifwl4eh0251C81fxZp9pqbanY6reazYeJbG28V2viHTIgD7v/YC+Afgj9nvxH+0Z4Tt/wBl/SfhH46vfj1+0Z4qg+JugfCrwX4f8P8Ajf4OePfjz4v+IHwj0PQ/iL4ZtkfXtN0nwf4m0K3j8FzzI3g270u+0K60uwm062jcA8V8V/BDXdM/b81fx74T+BsPxeufiB8bfhzrXjfUvjv+yz4W1SH4aeB7P4YeFfCviP4g/s+ftlad4is7jw3oGh6N4ashbfBjxRpvijxDq/i6+8Y+GdM0XQtA1641q3APnzwD+zpqPwH/AGKtc+BXh/8AYi0jTvEUX7Rl/YftQ+LtL/ZK+GHxTv8Axd8F5vjp+0P4w+HXxT+FXgfULObTf2jNe8C2k/gO08M2Or6P4pvfhf4f8Z3PiO08B6jfaJe+GGAOQ8D/ALL3jiD4BS+HfHvw2+Oui6H4O/bZ+Nvjj4JeEPiB+x58G/jr8O0+HfjP4W+DoNLuviv+yV8M7rwl4d0rw9rnibXfHGp+C7n4U2OgxeAPFN34im1+80B9Q1d5gD6A8Efsd3/xv+K/hLxF+05+xl8LdJ0m0/4Ji/D/AOGdh4DHgjwxqXwv+Gfxhj+KHxWnvfBfw406+vPEdr4D1zSPC+saZLYWuia1fX3gvS9Tfw9pvjbUIYp9ZugD9EfhVZfGjwl+wJ8NdNh8IDxX8f8Aw1+yR4MsovAXxD1IQr4l+NGj/BSwgTwh471fUb+IQjWvGduuj+KNSv8AUUEf2m/u7u/UebcgA/n78T/B/wCIHgD4Rft1+PdI+EHxT+Hvwx8S/wDBLz4x6N47t9a/Zh+CH7K3w/vPjjoPifRL3SfC/hD4a/DXSNA1O/8A+EZ0jVfG9p4c8S/EnUfEtzPo93ex+F/iFrnhwz6xKAe8ftYfB/w9o/7N3/BQX4pfCL9mDX/2Yfgnrv7JHwo+HOteD9b8JeHvhhqPxU+Kui/F/Vtek8SyfDrQdUnM1/4I8KeIIfDV/wDE7xM9rqviq+8QSaPpmparpnhq51NAD0v4ofs2654v+H37Xuofsy/skeKfgV8O/Hmg/sEeHfD/AMKj4B8LfDfU/H/xL+F37VF548+KHxEsfhn4f1OVNOt/Dfw61nwtomqeLtXtNO1LxTJ4f1OKFdR0rw7purzAH0Br/wAKPFt1+31q/wCzboa2037OvxA8R/Dn/god8VLNNQQTaL468E3uqeC4fho2lJaXUltoHxZ+M3gT4R/Hi2kvLm30/XdV8D/HrSobGWS+1W7IB+nHxM8JeLvGvhSfQvBPxW8UfB7XXvbK5h8a+ENB+HniHWILe3kdrnTv7L+JHg3xr4cltdQjYJPK2ji/hZIpLO9hPno4B8hfsDfAD46fA34e6hZ/F/4x+PPEgufHP7QdzafC/wASeHPghaaHpB8S/tIfEnxbo/xBstf+HvgbSfEF3qPjrQ9Qg8WT6RqHia80LS28VX2m2mhacun6XptmAcF+2N4L0lv2ivhd8Tvi5+zJcftY/BbRvgv8RfDGm+A4rL4LeKNP+GfxKu/G3gfV9U+KXiXwV8b/ABr4J8JafoV/4PsToVx8WIr69fwJbWmo6Prc2i6R4t+0XwB+ZWg/sl/Fv49fsb/CXQbL4RS+KdJ8a/8ABCe6+Hvh+w8Q2vh670C++Nmp+KPhF8S/hd4Qnk1O8m0Sz8YSNo9rrnh28vbiK30PV7WDVH1WwnsmvIwD9+vgnovw5074J6dpvwk+Ct98AfB1xa+JG0v4VaZ8PNA+D+teH7u51HVBqMlp4P0ldO0bw/qur6g0+q2t+rxQXs1zb61NeFJ3uSAfgp/wxb468UfsmftSfs6+Bv2YvDvi3w/N+zFo+n+F/iZ8Tf2SPBX7PH7SfjP4m+DvG2iazoXwo+Il9aa5ceFv2ifE11oXh671lvi/pHh/w14dtPHU8bpr+tXfirVNRsQD2P8AbD+EEHxM8MeDfhz8N/2IvEHgf4GxfAP4p2/wV0L4a/sQ/s7+IfiPpPxq8ReOfG0Pi/4dazb/ABO0DXPDf7LXgnV7Ww8OfEbT/Fdl4e8Pz/EDWfEl9q9p8QdO8W6Bp+jX4BUuvgl8ZLTxf+zH8Sb74IeIPjJ8fF+DX7DOi+O/Cv7Rv7Mfhz4peCLfXPBsXhdPiL4l+Gf7UUXjDS9Y/Zg8b+AbnV/E/jHxcnitdY/trx/osGteFvAXiO9v5HnAPQvCX7F19px8efF8/s+WGn/Hj/h7fJ8V9B+J0PhrSLP4pv8As9ap+1X4cOtaxaeMoFi8Qy/DfUvhdrPi6fUvDv8AaL6Hd+HtQ166udGkkuLuVgD7g/b88I674s+FvwzkHww8QfGz4ZeE/jt4B8ZftA/BbwvpsHiLWviZ8G9F0vxeLnRYfAdyyw/E2z0Dx5deAfHur/DeTzj4s0fwxfaVDpur3MkXh67APz08Efslr8QX0bQ2/ZE1X4bfAnX/APgrHJ8cj8G/EfgPwv4J0XTvgYv/AATbuPA48Va94E8LalPoWm+FPEPxQhGlar4cuCZdR1bVLjw7400BNRu/EGhqAdF+0z+zVBH4j/aq8A6R+yHq3jTxd46+Hfwu8Kf8E7/iT4A+H3h9vBP7Nt34Z+HEOgeGtG8O+MLE6Zbfst2nwh+NEOq/GzVtStH0HTvEWgazYweHZfEuv6enguMA83+Mfwl0v4v/ALQ3/BSXwb4Y/Zn1X4j/ALSOt/Hb9mOy+DH7RNh4L8O2mlfAXxLpv7Jv7K2rWfxBh+Leraqda+F5+HN7BP48v9L8Oyv4g8WWf9m+FNKj1+/vvsEQB+lP7PWhaPrXj7/gop8G/iPbDW9U8TfH4+KPFWlao0qp4s+DnxZ/Zz+EXhXwHqcUUEdsY/Dp0HwPr/wiilguZrifVvh14kkkuIbgeSgB8fL+zn46+NOg+BLbwp4h1vwd428P/Er4i3+jpp9qtp4P8O+CI/2ifFPjbxn4p+MV4/huO48Q3fxXuPCHw68LeDPhvbare6hbjwl8PPjFp7Ppmi+JrbSwD7F1rVfDHjb9inxf4H8QWfjPwxdfEzwr8S/gz4i0T9ovxXrHhPxe3jrxlF4r8P8Aj60v/F3iCylfxFYwapqHiC98Pap8JtL1vwbqfhy2s4vgZoc3giDwxpEAB8P/AAN8Oa98L/jb8GNR+N2oSaF8O/gtB4mufDvxZ8bfsx/FH4b6j8WfHN34R8Z/CXQNU0rVrHVJ/C/w5gvPDHibxFfa9oXxT0nwx4m1bxJdW2ifDXwL4i8JLpPxenAPqv47eCNf8RftH/ES9E3xJXwxN4H/AOCdkGp6F4Y8EQa94V8b2GgftjftA6z4xsNa1M/D/wAR6vGfCfh66j1nVbfwt4h0PUNP0rUIL/VzJaXNhLQB3HgiyGm/te+EPBOnal4/8Uw/Cz4L/tRPrms+JPh94v0Hw94S0n4x/G/9m7xN8JvAmheMtS8Nab4Y8XaVpui+BPGXhrwnNoGsazeR6P4I1Gz1edL/AE+6UAHi/g74BfFvxx8Dv2gDonjVvClv8Svgv8Uvhd4H0y41H4mWN5oPju3+O37Z2o3ni+Ww8J39i2n2ur6d8SfArWOr6ZpniTX9Qi0lzFor21lpdnqIB0tr4Q1z42eB/iReeEfD/i2XSfEf7dfg3xraNfv42+EOvP4P8B33wo03xlrMd1qcHhXxn4abQ9R8F+JtNla2gtddk1PS7rTdMt7i9eCFwDV+F/w+1v4MeFP2Z/BPi6/+IC+KPET/AAZ8NSfD5rfxN438EeE/EXw30n4n6z4n12Dxpp9jreiaFqviHw3NY2/iEan4jtdK1dfBmm6vpVrN4hv/ABJqF4AewftX+JdG8BeHtB8W2ek+B9c+K19eXng74I2HxM0XxNrvgq3+IeuaZqcEGsX40q9EXhbT9H0N9d1PxlrejWMvj3XPA1prng/wYmr+Ib/R/Cd8AedeBNG+EfxB/aL8K6hq3w10zw98VPAXh/VfHeleL9Q/ZL1L4Yn4n6c+laP4G1zWPDXjT4gaNdeMNKk8C6lqPh2DVPCR1m11K0jv/B9zNL4h0SPQ9egAPzvvv2cbOX9o/wCI/iPxF4Q+PEXh3XNJ07X9I8SDxT8ervw5qmveOf2p/wBqrw/4G8LwX1jes0zeNPh18YvBniu5ie4FtoF/Prmj+KtUs9el1zRZAD6YuvA994asP2v9A0aPWdRttP8Air+zZpdpqd7o/jGVG1jUf2rvFXxPfRft/iSC21HxVf6B4X+JXhG71rVre+votRTUbXVY9auYL6HUHAPOPFn7P/ie9+J/wM8K+NvBHhXxL4pT4x/EnxHpPnfD7wRNpGp6RF8HP2vvESeC9H8S+N/2f/EFx/wp34Wanf8Awc+FHgTxJ481G/1VvEVhZ+MIPhRpXg5vgfrGoAHU/tmfCBPHnh79l/x/4f8Ag94z8U6t4O+CHjbSfCPwW+K37GXw7/aN+D15e+K9J+F2qW3gX4x/CrQNf8ID4K/E8XnhbSdDsfHHgzWfDPw/8O2DePfD+oasdDWwsQAcFY/s+eLfhp8ff2nPjWP2Dvht4q+O/wAVv2Pfg1P8CLi3+Hng/wAW/Dfwh8avA/7PHx38KfFD4L678VJG0rVfC+k+J7qXw38Op7ttU0Wx+I3hXXNC0O58RW9jJqt3YgHh/wAIP2a/FkuqftfaLpnwo/ac8D/A74rfsaeBfC2sP4U/Za/Z3/Zw1XXPizpnxV8cT6ro3w3+AvhHTPCuj+Irfwf4X1+azuLL4pR+IPEvi7wffa74P0/xr4y8P3OgSzAHaaX+zJ48+JPgX4N/DjxH+yj8NpvhDoP/AAUQ+DPjvU7nw7+yrpv7OGnfFj4RWn7PfjbTfGnjv4y/s06n4g8Uw6TH4d8T6nY/D7UdW1mHSrfxxplrp+fh/YaJBBd6gAfXvhj4R6n8B/hr+0p4Q8KfDmz8GeDLj/gof+zv4o+CPgm0il0LwLH4O8RfEH9iq9vJPCdjoWmazb+EvB178Rm8c3eoxaNof9naRq7eJdQOkIq3hIBrfGT4Sav8LX+G4tfiZ428Va98Zf2k/wBnzxB8SfC8fw+8Q674b8f/ABL039q/4E/EW68daHqdiNai+C+kfC74ZeBvE/h/S/Deq65f2V/8IfDfhiy8Q67rXifwVP4zvgDs/wBsn4feLfHvi34I+G7Z/C+l+EPiT8QNS+FHjq9vPCHjX4j6/r/w3n+Dfxb+JniDwZcWGheIfB914E8BeNvEPw28O+GvilpfhHUzffFPw/LoGk+NvEVn4T0OXwnqYBW/ZS8BfF/QPjP8crvU/FPwyvfh54H8R6P8INJtD+z34r8HfE6fwnpfwq+GnxM8GaB4Z+IOrfFm/vI/hd4J1/4t+NtJ0Hwr4v8ADvjG/wBMaC8i8MeMrDQ75NDsQDq/2af+J3+1B/wUC8b+H76G68C3vxS+D3gKN7QQ/wBn6h8Vvhv8DPCemfFLVrW4guZYtSn0621TwV8OdbvTGlzZeJPAmseEbx2uvD0lvEAfcNABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFAHJal4Ue5v7nUtH8Sa74Wur8wHVG0RPD88OpSW8UcEFzc2viDQNdto7yO2ijtTeWsMFxNax21vdyTxWtmsYB414i/ZV+EvjD4i+H/i94u0Tw94o+KnhRNMj8LfE/wARfCX9nrWviL4bj0e8u9Q0dPD/AI11P4M3XiLRU0m+vby+0xdO1KAWN5dXd1aeXcTTyuAes/8ACJeIP+ip+Of/AAXfC7/52tAB/wAIl4g/6Kn45/8ABd8Lv/na0AH/AAiXiD/oqfjn/wAF3wu/+drQAf8ACJeIP+ip+Of/AAXfC7/52tAB/wAIl4g/6Kn45/8ABd8Lv/na0AH/AAiXiD/oqfjn/wAF3wu/+drQBh3fwqgv/EWieL77xhrt54q8Oabr2jeHfFF34X+D1x4i0HR/E02h3HibSdE1ub4WPqOlab4jn8N+H59esLG5htdWm0XQ5dSiuJNN090ANz/hEvEH/RU/HP8A4Lvhd/8AO1oAwF+E1oviuXx0vizWl8aTaBB4Tm8Yr4V+Dg8Vy+FLbU7nWLbwzL4hHwr/ALVk0C31W7utVg0V7w6bFqdxc38dsLuWWdgDf/4RLxB/0VPxz/4Lvhd/87WgA/4RLxB/0VPxz/4Lvhd/87WgDlPHHwV0T4n+FNX8CfEvXb74heCteS0j13wb448FfBXxV4U1qOx1C01SxTV/D2vfCjUNK1JLLUrGz1K0W8tJhb6ha2l7DtuoIZgAN8DfBLQfhd4X07wT8MtbvPh54P0gTjSfCPgbwT8FPCnhfTBcTyXNwNO0DQPhPp+mWIuLiSS4nFtax+bO8k0haVncgHW/8Il4g/6Kn45/8F3wu/8Ana0AH/CJeIP+ip+Of/Bd8Lv/AJ2tAB/wiXiD/oqfjn/wXfC7/wCdrQAf8Il4g/6Kn45/8F3wu/8Ana0AH/CJeIP+ip+Of/Bd8Lv/AJ2tAB/wiXiD/oqfjn/wXfC7/wCdrQBh+JvhVB428Oa34Q8aeMNd8W+FfEmm3ejeIvC/ibwv8Htd8Oa9o99C9vfaTreiar8LLvTtV029gd4buwvrae1uIWeKeJ0ZsgDPFPwmtPHPh/U/CXjfxZrXjDwvrMMdvrHhrxT4V+Dmv+H9Wt4riG6ig1PRtW+Fd5p9/DHcwQ3EcV1byolxFDMoEsaPQBv/APCJeIP+ip+Of/Bd8Lv/AJ2tAGJafCyLT/EGt+LLDxjr1l4n8SWOiaZ4i8S2nhj4PW/iDXtM8OPq7+HNO1vWYfhamoarY+H31zWX0S0vrme30t9V1dtPjha+vjKAbf8AwiXiD/oqfjn/AMF3wu/+drQAf8Il4g/6Kn45/wDBd8Lv/na0AeVfE39lv4V/Gx/Dsnxn0rQ/i1J4Snvrrwm/xN+FH7Pvjp/DF1qJsG1G58Ot4p+DWrNok+oHS9ON9Nppt5Lo2Ngbh5Da25AB6jD4M1u3hit7f4neNYIII0hhhh0v4WRwxQxqEjiijT4aBI440UKiKAqKAqjA5AJP+ES8Qf8ARU/HP/gu+F3/AM7WgA/4RLxB/wBFT8c/+C74Xf8AztaAD/hEvEH/AEVPxz/4Lvhd/wDO1oAP+ES8Qf8ARU/HP/gu+F3/AM7WgA/4RLxB/wBFT8c/+C74Xf8AztaAD/hEvEH/AEVPxz/4Lvhd/wDO1oAP+ES8Qf8ARU/HP/gu+F3/AM7WgA/4RLxB/wBFT8c/+C74Xf8AztaAMPS/hVBoeqeJtc0Txhrukaz4z1Ky1nxjq+l+F/g9Yap4r1jTtC0nwzp2reJtQtPhZFda9qWn+HtC0bw/ZX+qTXN3a6Fpek6PbzJp1jZ26gEX/CpLL/hLf+E+/wCEq1j/AITf/hHv+ER/4TT/AIRP4N/8Jb/wiX9qf2z/AMIt/wAJH/wqv+1v+Ee/tb/ibf2J9s/sz+1P+Jh9l+2fv6AOh/4RLxB/0VPxz/4Lvhd/87WgA/4RLxB/0VPxz/4Lvhd/87WgA/4RLxB/0VPxz/4Lvhd/87WgA/4RLxB/0VPxz/4Lvhd/87WgA/4RLxB/0VPxz/4Lvhd/87WgA/4RLxB/0VPxz/4Lvhd/87WgA/4RLxB/0VPxz/4Lvhd/87WgA/4RLxB/0VPxz/4Lvhd/87WgA/4RLxB/0VPxz/4Lvhd/87WgA/4RLxB/0VPxz/4Lvhd/87WgA/4RLxB/0VPxz/4Lvhd/87WgA/4RLxB/0VPxz/4Lvhd/87WgA/4RLxB/0VPxz/4Lvhd/87WgA/4RLxB/0VPxz/4Lvhd/87WgA/4RLxB/0VPxz/4Lvhd/87WgA/4RLxB/0VPxz/4Lvhd/87WgA/4RLxB/0VPxz/4Lvhd/87WgA/4RLxB/0VPxz/4Lvhd/87WgA/4RLxB/0VPxz/4Lvhd/87WgA/4RLxB/0VPxz/4Lvhd/87WgA/4RLxB/0VPxz/4Lvhd/87WgDnPCXwh0/wAAeH7Pwn4D8Uat4L8MafNqVxYeG/CXhH4NeHfD9jcavqt9rWrz2ejaP8KrOwtZtV1fUb/V9Slht0kvdVvb7Ubtpb24uLhwD1W1hkt7W2t5rqe+lgghhlvrpbVLq8kjjVHurlLK1s7NZ7llM0y2lpbWqyMwt7WGELEACegAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoA//2Q=="

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {/*!
	 * jQuery JavaScript Library v2.0.3
	 * http://jquery.com/
	 *
	 * Includes Sizzle.js
	 * http://sizzlejs.com/
	 *
	 * Copyright 2005, 2013 jQuery Foundation, Inc. and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2013-07-03T13:30Z
	 */
	(function( window, undefined ) {

	// Can't do this because several apps including ASP.NET trace
	// the stack via arguments.caller.callee and Firefox dies if
	// you try to trace through "use strict" call chains. (#13335)
	// Support: Firefox 18+
	//"use strict";
	var
		// A central reference to the root jQuery(document)
		rootjQuery,

		// The deferred used on DOM ready
		readyList,

		// Support: IE9
		// For `typeof xmlNode.method` instead of `xmlNode.method !== undefined`
		core_strundefined = typeof undefined,

		// Use the correct document accordingly with window argument (sandbox)
		location = window.location,
		document = window.document,
		docElem = document.documentElement,

		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,

		// Map over the $ in case of overwrite
		_$ = window.$,

		// [[Class]] -> type pairs
		class2type = {},

		// List of deleted data cache ids, so we can reuse them
		core_deletedIds = [],

		core_version = "2.0.3",

		// Save a reference to some core methods
		core_concat = core_deletedIds.concat,
		core_push = core_deletedIds.push,
		core_slice = core_deletedIds.slice,
		core_indexOf = core_deletedIds.indexOf,
		core_toString = class2type.toString,
		core_hasOwn = class2type.hasOwnProperty,
		core_trim = core_version.trim,

		// Define a local copy of jQuery
		jQuery = function( selector, context ) {
			// The jQuery object is actually just the init constructor 'enhanced'
			return new jQuery.fn.init( selector, context, rootjQuery );
		},

		// Used for matching numbers
		core_pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,

		// Used for splitting on whitespace
		core_rnotwhite = /\S+/g,

		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

		// Match a standalone tag
		rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,

		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		rdashAlpha = /-([\da-z])/gi,

		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function( all, letter ) {
			return letter.toUpperCase();
		},

		// The ready event handler and self cleanup method
		completed = function() {
			document.removeEventListener( "DOMContentLoaded", completed, false );
			window.removeEventListener( "load", completed, false );
			jQuery.ready();
		};

	jQuery.fn = jQuery.prototype = {
		// The current version of jQuery being used
		jquery: core_version,

		constructor: jQuery,
		init: function( selector, context, rootjQuery ) {
			var match, elem;

			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}

			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector.charAt(0) === "<" && selector.charAt( selector.length - 1 ) === ">" && selector.length >= 3 ) {
					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [ null, selector, null ];

				} else {
					match = rquickExpr.exec( selector );
				}

				// Match html or make sure no context is specified for #id
				if ( match && (match[1] || !context) ) {

					// HANDLE: $(html) -> $(array)
					if ( match[1] ) {
						context = context instanceof jQuery ? context[0] : context;

						// scripts is true for back-compat
						jQuery.merge( this, jQuery.parseHTML(
							match[1],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );

						// HANDLE: $(html, props)
						if ( rsingleTag.test( match[1] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {
								// Properties of context are called as methods if possible
								if ( jQuery.isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );

								// ...and otherwise set as attributes
								} else {
									this.attr( match, context[ match ] );
								}
							}
						}

						return this;

					// HANDLE: $(#id)
					} else {
						elem = document.getElementById( match[2] );

						// Check parentNode to catch when Blackberry 4.6 returns
						// nodes that are no longer in the document #6963
						if ( elem && elem.parentNode ) {
							// Inject the element directly into the jQuery object
							this.length = 1;
							this[0] = elem;
						}

						this.context = document;
						this.selector = selector;
						return this;
					}

				// HANDLE: $(expr, $(...))
				} else if ( !context || context.jquery ) {
					return ( context || rootjQuery ).find( selector );

				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor( context ).find( selector );
				}

			// HANDLE: $(DOMElement)
			} else if ( selector.nodeType ) {
				this.context = this[0] = selector;
				this.length = 1;
				return this;

			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( jQuery.isFunction( selector ) ) {
				return rootjQuery.ready( selector );
			}

			if ( selector.selector !== undefined ) {
				this.selector = selector.selector;
				this.context = selector.context;
			}

			return jQuery.makeArray( selector, this );
		},

		// Start with an empty selector
		selector: "",

		// The default length of a jQuery object is 0
		length: 0,

		toArray: function() {
			return core_slice.call( this );
		},

		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function( num ) {
			return num == null ?

				// Return a 'clean' array
				this.toArray() :

				// Return just the object
				( num < 0 ? this[ this.length + num ] : this[ num ] );
		},

		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function( elems ) {

			// Build a new jQuery matched element set
			var ret = jQuery.merge( this.constructor(), elems );

			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;
			ret.context = this.context;

			// Return the newly-formed element set
			return ret;
		},

		// Execute a callback for every element in the matched set.
		// (You can seed the arguments with an array of args, but this is
		// only used internally.)
		each: function( callback, args ) {
			return jQuery.each( this, callback, args );
		},

		ready: function( fn ) {
			// Add the callback
			jQuery.ready.promise().done( fn );

			return this;
		},

		slice: function() {
			return this.pushStack( core_slice.apply( this, arguments ) );
		},

		first: function() {
			return this.eq( 0 );
		},

		last: function() {
			return this.eq( -1 );
		},

		eq: function( i ) {
			var len = this.length,
				j = +i + ( i < 0 ? len : 0 );
			return this.pushStack( j >= 0 && j < len ? [ this[j] ] : [] );
		},

		map: function( callback ) {
			return this.pushStack( jQuery.map(this, function( elem, i ) {
				return callback.call( elem, i, elem );
			}));
		},

		end: function() {
			return this.prevObject || this.constructor(null);
		},

		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: core_push,
		sort: [].sort,
		splice: [].splice
	};

	// Give the init function the jQuery prototype for later instantiation
	jQuery.fn.init.prototype = jQuery.fn;

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

	jQuery.extend({
		// Unique for each copy of jQuery on the page
		expando: "jQuery" + ( core_version + Math.random() ).replace( /\D/g, "" ),

		noConflict: function( deep ) {
			if ( window.$ === jQuery ) {
				window.$ = _$;
			}

			if ( deep && window.jQuery === jQuery ) {
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
		holdReady: function( hold ) {
			if ( hold ) {
				jQuery.readyWait++;
			} else {
				jQuery.ready( true );
			}
		},

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
		},

		// See test/unit/core.js for details concerning isFunction.
		// Since version 1.3, DOM methods and functions like alert
		// aren't supported. They return false on IE (#2968).
		isFunction: function( obj ) {
			return jQuery.type(obj) === "function";
		},

		isArray: Array.isArray,

		isWindow: function( obj ) {
			return obj != null && obj === obj.window;
		},

		isNumeric: function( obj ) {
			return !isNaN( parseFloat(obj) ) && isFinite( obj );
		},

		type: function( obj ) {
			if ( obj == null ) {
				return String( obj );
			}
			// Support: Safari <= 5.1 (functionish RegExp)
			return typeof obj === "object" || typeof obj === "function" ?
				class2type[ core_toString.call(obj) ] || "object" :
				typeof obj;
		},

		isPlainObject: function( obj ) {
			// Not plain objects:
			// - Any object or value whose internal [[Class]] property is not "[object Object]"
			// - DOM nodes
			// - window
			if ( jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
				return false;
			}

			// Support: Firefox <20
			// The try/catch suppresses exceptions thrown when attempting to access
			// the "constructor" property of certain host objects, ie. |window.location|
			// https://bugzilla.mozilla.org/show_bug.cgi?id=814622
			try {
				if ( obj.constructor &&
						!core_hasOwn.call( obj.constructor.prototype, "isPrototypeOf" ) ) {
					return false;
				}
			} catch ( e ) {
				return false;
			}

			// If the function hasn't returned already, we're confident that
			// |obj| is a plain object, created by {} or constructed with new Object
			return true;
		},

		isEmptyObject: function( obj ) {
			var name;
			for ( name in obj ) {
				return false;
			}
			return true;
		},

		error: function( msg ) {
			throw new Error( msg );
		},

		// data: string of html
		// context (optional): If specified, the fragment will be created in this context, defaults to document
		// keepScripts (optional): If true, will include scripts passed in the html string
		parseHTML: function( data, context, keepScripts ) {
			if ( !data || typeof data !== "string" ) {
				return null;
			}
			if ( typeof context === "boolean" ) {
				keepScripts = context;
				context = false;
			}
			context = context || document;

			var parsed = rsingleTag.exec( data ),
				scripts = !keepScripts && [];

			// Single tag
			if ( parsed ) {
				return [ context.createElement( parsed[1] ) ];
			}

			parsed = jQuery.buildFragment( [ data ], context, scripts );

			if ( scripts ) {
				jQuery( scripts ).remove();
			}

			return jQuery.merge( [], parsed.childNodes );
		},

		parseJSON: JSON.parse,

		// Cross-browser xml parsing
		parseXML: function( data ) {
			var xml, tmp;
			if ( !data || typeof data !== "string" ) {
				return null;
			}

			// Support: IE9
			try {
				tmp = new DOMParser();
				xml = tmp.parseFromString( data , "text/xml" );
			} catch ( e ) {
				xml = undefined;
			}

			if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
				jQuery.error( "Invalid XML: " + data );
			}
			return xml;
		},

		noop: function() {},

		// Evaluates a script in a global context
		globalEval: function( code ) {
			var script,
					indirect = eval;

			code = jQuery.trim( code );

			if ( code ) {
				// If the code includes a valid, prologue position
				// strict mode pragma, execute code by injecting a
				// script tag into the document.
				if ( code.indexOf("use strict") === 1 ) {
					script = document.createElement("script");
					script.text = code;
					document.head.appendChild( script ).parentNode.removeChild( script );
				} else {
				// Otherwise, avoid the DOM node creation, insertion
				// and removal by using an indirect global eval
					indirect( code );
				}
			}
		},

		// Convert dashed to camelCase; used by the css and data modules
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function( string ) {
			return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
		},

		nodeName: function( elem, name ) {
			return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
		},

		// args is for internal usage only
		each: function( obj, callback, args ) {
			var value,
				i = 0,
				length = obj.length,
				isArray = isArraylike( obj );

			if ( args ) {
				if ( isArray ) {
					for ( ; i < length; i++ ) {
						value = callback.apply( obj[ i ], args );

						if ( value === false ) {
							break;
						}
					}
				} else {
					for ( i in obj ) {
						value = callback.apply( obj[ i ], args );

						if ( value === false ) {
							break;
						}
					}
				}

			// A special, fast, case for the most common use of each
			} else {
				if ( isArray ) {
					for ( ; i < length; i++ ) {
						value = callback.call( obj[ i ], i, obj[ i ] );

						if ( value === false ) {
							break;
						}
					}
				} else {
					for ( i in obj ) {
						value = callback.call( obj[ i ], i, obj[ i ] );

						if ( value === false ) {
							break;
						}
					}
				}
			}

			return obj;
		},

		trim: function( text ) {
			return text == null ? "" : core_trim.call( text );
		},

		// results is for internal usage only
		makeArray: function( arr, results ) {
			var ret = results || [];

			if ( arr != null ) {
				if ( isArraylike( Object(arr) ) ) {
					jQuery.merge( ret,
						typeof arr === "string" ?
						[ arr ] : arr
					);
				} else {
					core_push.call( ret, arr );
				}
			}

			return ret;
		},

		inArray: function( elem, arr, i ) {
			return arr == null ? -1 : core_indexOf.call( arr, elem, i );
		},

		merge: function( first, second ) {
			var l = second.length,
				i = first.length,
				j = 0;

			if ( typeof l === "number" ) {
				for ( ; j < l; j++ ) {
					first[ i++ ] = second[ j ];
				}
			} else {
				while ( second[j] !== undefined ) {
					first[ i++ ] = second[ j++ ];
				}
			}

			first.length = i;

			return first;
		},

		grep: function( elems, callback, inv ) {
			var retVal,
				ret = [],
				i = 0,
				length = elems.length;
			inv = !!inv;

			// Go through the array, only saving the items
			// that pass the validator function
			for ( ; i < length; i++ ) {
				retVal = !!callback( elems[ i ], i );
				if ( inv !== retVal ) {
					ret.push( elems[ i ] );
				}
			}

			return ret;
		},

		// arg is for internal usage only
		map: function( elems, callback, arg ) {
			var value,
				i = 0,
				length = elems.length,
				isArray = isArraylike( elems ),
				ret = [];

			// Go through the array, translating each of the items to their
			if ( isArray ) {
				for ( ; i < length; i++ ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret[ ret.length ] = value;
					}
				}

			// Go through every key on the object,
			} else {
				for ( i in elems ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret[ ret.length ] = value;
					}
				}
			}

			// Flatten any nested arrays
			return core_concat.apply( [], ret );
		},

		// A global GUID counter for objects
		guid: 1,

		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function( fn, context ) {
			var tmp, args, proxy;

			if ( typeof context === "string" ) {
				tmp = fn[ context ];
				context = fn;
				fn = tmp;
			}

			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if ( !jQuery.isFunction( fn ) ) {
				return undefined;
			}

			// Simulated bind
			args = core_slice.call( arguments, 2 );
			proxy = function() {
				return fn.apply( context || this, args.concat( core_slice.call( arguments ) ) );
			};

			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;

			return proxy;
		},

		// Multifunctional method to get and set values of a collection
		// The value/s can optionally be executed if it's a function
		access: function( elems, fn, key, value, chainable, emptyGet, raw ) {
			var i = 0,
				length = elems.length,
				bulk = key == null;

			// Sets many values
			if ( jQuery.type( key ) === "object" ) {
				chainable = true;
				for ( i in key ) {
					jQuery.access( elems, fn, i, key[i], true, emptyGet, raw );
				}

			// Sets one value
			} else if ( value !== undefined ) {
				chainable = true;

				if ( !jQuery.isFunction( value ) ) {
					raw = true;
				}

				if ( bulk ) {
					// Bulk operations run against the entire set
					if ( raw ) {
						fn.call( elems, value );
						fn = null;

					// ...except when executing function values
					} else {
						bulk = fn;
						fn = function( elem, key, value ) {
							return bulk.call( jQuery( elem ), value );
						};
					}
				}

				if ( fn ) {
					for ( ; i < length; i++ ) {
						fn( elems[i], key, raw ? value : value.call( elems[i], i, fn( elems[i], key ) ) );
					}
				}
			}

			return chainable ?
				elems :

				// Gets
				bulk ?
					fn.call( elems ) :
					length ? fn( elems[0], key ) : emptyGet;
		},

		now: Date.now,

		// A method for quickly swapping in/out CSS properties to get correct calculations.
		// Note: this method belongs to the css module but it's needed here for the support module.
		// If support gets modularized, this method should be moved back to the css module.
		swap: function( elem, options, callback, args ) {
			var ret, name,
				old = {};

			// Remember the old values, and insert the new ones
			for ( name in options ) {
				old[ name ] = elem.style[ name ];
				elem.style[ name ] = options[ name ];
			}

			ret = callback.apply( elem, args || [] );

			// Revert the old values
			for ( name in options ) {
				elem.style[ name ] = old[ name ];
			}

			return ret;
		}
	});

	jQuery.ready.promise = function( obj ) {
		if ( !readyList ) {

			readyList = jQuery.Deferred();

			// Catch cases where $(document).ready() is called after the browser event has already occurred.
			// we once tried to use readyState "interactive" here, but it caused issues like the one
			// discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15
			if ( document.readyState === "complete" ) {
				// Handle it asynchronously to allow scripts the opportunity to delay ready
				setTimeout( jQuery.ready );

			} else {

				// Use the handy event callback
				document.addEventListener( "DOMContentLoaded", completed, false );

				// A fallback to window.onload, that will always work
				window.addEventListener( "load", completed, false );
			}
		}
		return readyList.promise( obj );
	};

	// Populate the class2type map
	jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	});

	function isArraylike( obj ) {
		var length = obj.length,
			type = jQuery.type( obj );

		if ( jQuery.isWindow( obj ) ) {
			return false;
		}

		if ( obj.nodeType === 1 && length ) {
			return true;
		}

		return type === "array" || type !== "function" &&
			( length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj );
	}

	// All jQuery objects should point back to these
	rootjQuery = jQuery(document);
	/*!
	 * Sizzle CSS Selector Engine v1.9.4-pre
	 * http://sizzlejs.com/
	 *
	 * Copyright 2013 jQuery Foundation, Inc. and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2013-06-03
	 */
	(function( window, undefined ) {

	var i,
		support,
		cachedruns,
		Expr,
		getText,
		isXML,
		compile,
		outermostContext,
		sortInput,

		// Local document vars
		setDocument,
		document,
		docElem,
		documentIsHTML,
		rbuggyQSA,
		rbuggyMatches,
		matches,
		contains,

		// Instance-specific data
		expando = "sizzle" + -(new Date()),
		preferredDoc = window.document,
		dirruns = 0,
		done = 0,
		classCache = createCache(),
		tokenCache = createCache(),
		compilerCache = createCache(),
		hasDuplicate = false,
		sortOrder = function( a, b ) {
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}
			return 0;
		},

		// General-purpose constants
		strundefined = typeof undefined,
		MAX_NEGATIVE = 1 << 31,

		// Instance methods
		hasOwn = ({}).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		push_native = arr.push,
		push = arr.push,
		slice = arr.slice,
		// Use a stripped-down indexOf if we can't use a native one
		indexOf = arr.indexOf || function( elem ) {
			var i = 0,
				len = this.length;
			for ( ; i < len; i++ ) {
				if ( this[i] === elem ) {
					return i;
				}
			}
			return -1;
		},

		booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

		// Regular expressions

		// Whitespace characters http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",
		// http://www.w3.org/TR/css3-syntax/#characters
		characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

		// Loosely modeled on CSS identifier characters
		// An unquoted value should be a CSS identifier http://www.w3.org/TR/css3-selectors/#attribute-selectors
		// Proper syntax: http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = characterEncoding.replace( "w", "w#" ),

		// Acceptable operators http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + characterEncoding + ")" + whitespace +
			"*(?:([*^$|!~]?=)" + whitespace + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + identifier + ")|)|)" + whitespace + "*\\]",

		// Prefer arguments quoted,
		//   then not containing pseudos/brackets,
		//   then attribute selectors/non-parenthetical expressions,
		//   then anything else
		// These preferences are here to reduce the number of selectors
		//   needing tokenize in the PSEUDO preFilter
		pseudos = ":(" + characterEncoding + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + attributes.replace( 3, 8 ) + ")*)|.*)\\)|)",

		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

		rsibling = new RegExp( whitespace + "*[+~]" ),
		rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*)" + whitespace + "*\\]", "g" ),

		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),

		matchExpr = {
			"ID": new RegExp( "^#(" + characterEncoding + ")" ),
			"CLASS": new RegExp( "^\\.(" + characterEncoding + ")" ),
			"TAG": new RegExp( "^(" + characterEncoding.replace( "w", "w*" ) + ")" ),
			"ATTR": new RegExp( "^" + attributes ),
			"PSEUDO": new RegExp( "^" + pseudos ),
			"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
				"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
				"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
				whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},

		rnative = /^[^{]+\{\s*\[native \w/,

		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,

		rescape = /'|\\/g,

		// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
		funescape = function( _, escaped, escapedWhitespace ) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ?
				escaped :
				// BMP codepoint
				high < 0 ?
					String.fromCharCode( high + 0x10000 ) :
					// Supplemental Plane codepoint (surrogate pair)
					String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		};

	// Optimize for push.apply( _, NodeList )
	try {
		push.apply(
			(arr = slice.call( preferredDoc.childNodes )),
			preferredDoc.childNodes
		);
		// Support: Android<4.0
		// Detect silently failing push.apply
		arr[ preferredDoc.childNodes.length ].nodeType;
	} catch ( e ) {
		push = { apply: arr.length ?

			// Leverage slice if possible
			function( target, els ) {
				push_native.apply( target, slice.call(els) );
			} :

			// Support: IE<9
			// Otherwise append directly
			function( target, els ) {
				var j = target.length,
					i = 0;
				// Can't trust NodeList.length
				while ( (target[j++] = els[i++]) ) {}
				target.length = j - 1;
			}
		};
	}

	function Sizzle( selector, context, results, seed ) {
		var match, elem, m, nodeType,
			// QSA vars
			i, groups, old, nid, newContext, newSelector;

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}

		context = context || document;
		results = results || [];

		if ( !selector || typeof selector !== "string" ) {
			return results;
		}

		if ( (nodeType = context.nodeType) !== 1 && nodeType !== 9 ) {
			return [];
		}

		if ( documentIsHTML && !seed ) {

			// Shortcuts
			if ( (match = rquickExpr.exec( selector )) ) {
				// Speed-up: Sizzle("#ID")
				if ( (m = match[1]) ) {
					if ( nodeType === 9 ) {
						elem = context.getElementById( m );
						// Check parentNode to catch when Blackberry 4.6 returns
						// nodes that are no longer in the document #6963
						if ( elem && elem.parentNode ) {
							// Handle the case where IE, Opera, and Webkit return items
							// by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}
					} else {
						// Context is not a document
						if ( context.ownerDocument && (elem = context.ownerDocument.getElementById( m )) &&
							contains( context, elem ) && elem.id === m ) {
							results.push( elem );
							return results;
						}
					}

				// Speed-up: Sizzle("TAG")
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Speed-up: Sizzle(".CLASS")
				} else if ( (m = match[3]) && support.getElementsByClassName && context.getElementsByClassName ) {
					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// QSA path
			if ( support.qsa && (!rbuggyQSA || !rbuggyQSA.test( selector )) ) {
				nid = old = expando;
				newContext = context;
				newSelector = nodeType === 9 && selector;

				// qSA works strangely on Element-rooted queries
				// We can work around this by specifying an extra ID on the root
				// and working up from there (Thanks to Andrew Dupont for the technique)
				// IE 8 doesn't work on object elements
				if ( nodeType === 1 && context.nodeName.toLowerCase() !== "object" ) {
					groups = tokenize( selector );

					if ( (old = context.getAttribute("id")) ) {
						nid = old.replace( rescape, "\\$&" );
					} else {
						context.setAttribute( "id", nid );
					}
					nid = "[id='" + nid + "'] ";

					i = groups.length;
					while ( i-- ) {
						groups[i] = nid + toSelector( groups[i] );
					}
					newContext = rsibling.test( selector ) && context.parentNode || context;
					newSelector = groups.join(",");
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch(qsaError) {
					} finally {
						if ( !old ) {
							context.removeAttribute("id");
						}
					}
				}
			}
		}

		// All others
		return select( selector.replace( rtrim, "$1" ), context, results, seed );
	}

	/**
	 * Create key-value caches of limited size
	 * @returns {Function(string, Object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */
	function createCache() {
		var keys = [];

		function cache( key, value ) {
			// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
			if ( keys.push( key += " " ) > Expr.cacheLength ) {
				// Only keep the most recent entries
				delete cache[ keys.shift() ];
			}
			return (cache[ key ] = value);
		}
		return cache;
	}

	/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */
	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}

	/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created div and expects a boolean result
	 */
	function assert( fn ) {
		var div = document.createElement("div");

		try {
			return !!fn( div );
		} catch (e) {
			return false;
		} finally {
			// Remove from its parent by default
			if ( div.parentNode ) {
				div.parentNode.removeChild( div );
			}
			// release memory in IE
			div = null;
		}
	}

	/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */
	function addHandle( attrs, handler ) {
		var arr = attrs.split("|"),
			i = attrs.length;

		while ( i-- ) {
			Expr.attrHandle[ arr[i] ] = handler;
		}
	}

	/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */
	function siblingCheck( a, b ) {
		var cur = b && a,
			diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
				( ~b.sourceIndex || MAX_NEGATIVE ) -
				( ~a.sourceIndex || MAX_NEGATIVE );

		// Use IE sourceIndex if available on both nodes
		if ( diff ) {
			return diff;
		}

		// Check if b follows a
		if ( cur ) {
			while ( (cur = cur.nextSibling) ) {
				if ( cur === b ) {
					return -1;
				}
			}
		}

		return a ? 1 : -1;
	}

	/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */
	function createInputPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */
	function createButtonPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */
	function createPositionalPseudo( fn ) {
		return markFunction(function( argument ) {
			argument = +argument;
			return markFunction(function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;

				// Match elements found at the specified indexes
				while ( i-- ) {
					if ( seed[ (j = matchIndexes[i]) ] ) {
						seed[j] = !(matches[j] = seed[j]);
					}
				}
			});
		});
	}

	/**
	 * Detect xml
	 * @param {Element|Object} elem An element or a document
	 */
	isXML = Sizzle.isXML = function( elem ) {
		// documentElement is verified for cases where it doesn't yet exist
		// (such as loading iframes in IE - #4833)
		var documentElement = elem && (elem.ownerDocument || elem).documentElement;
		return documentElement ? documentElement.nodeName !== "HTML" : false;
	};

	// Expose support vars for convenience
	support = Sizzle.support = {};

	/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */
	setDocument = Sizzle.setDocument = function( node ) {
		var doc = node ? node.ownerDocument || node : preferredDoc,
			parent = doc.defaultView;

		// If no document and documentElement is available, return
		if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}

		// Set our document
		document = doc;
		docElem = doc.documentElement;

		// Support tests
		documentIsHTML = !isXML( doc );

		// Support: IE>8
		// If iframe document is assigned to "document" variable and if iframe has been reloaded,
		// IE will throw "permission denied" error when accessing "document" variable, see jQuery #13936
		// IE6-8 do not support the defaultView property so parent will be undefined
		if ( parent && parent.attachEvent && parent !== parent.top ) {
			parent.attachEvent( "onbeforeunload", function() {
				setDocument();
			});
		}

		/* Attributes
		---------------------------------------------------------------------- */

		// Support: IE<8
		// Verify that getAttribute really returns attributes and not properties (excepting IE8 booleans)
		support.attributes = assert(function( div ) {
			div.className = "i";
			return !div.getAttribute("className");
		});

		/* getElement(s)By*
		---------------------------------------------------------------------- */

		// Check if getElementsByTagName("*") returns only elements
		support.getElementsByTagName = assert(function( div ) {
			div.appendChild( doc.createComment("") );
			return !div.getElementsByTagName("*").length;
		});

		// Check if getElementsByClassName can be trusted
		support.getElementsByClassName = assert(function( div ) {
			div.innerHTML = "<div class='a'></div><div class='a i'></div>";

			// Support: Safari<4
			// Catch class over-caching
			div.firstChild.className = "i";
			// Support: Opera<10
			// Catch gEBCN failure to find non-leading classes
			return div.getElementsByClassName("i").length === 2;
		});

		// Support: IE<10
		// Check if getElementById returns elements by name
		// The broken getElementById methods don't pick up programatically-set names,
		// so use a roundabout getElementsByName test
		support.getById = assert(function( div ) {
			docElem.appendChild( div ).id = expando;
			return !doc.getElementsByName || !doc.getElementsByName( expando ).length;
		});

		// ID find and filter
		if ( support.getById ) {
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== strundefined && documentIsHTML ) {
					var m = context.getElementById( id );
					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document #6963
					return m && m.parentNode ? [m] : [];
				}
			};
			Expr.filter["ID"] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute("id") === attrId;
				};
			};
		} else {
			// Support: IE6/7
			// getElementById is not reliable as a find shortcut
			delete Expr.find["ID"];

			Expr.filter["ID"] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== strundefined && elem.getAttributeNode("id");
					return node && node.value === attrId;
				};
			};
		}

		// Tag
		Expr.find["TAG"] = support.getElementsByTagName ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== strundefined ) {
					return context.getElementsByTagName( tag );
				}
			} :
			function( tag, context ) {
				var elem,
					tmp = [],
					i = 0,
					results = context.getElementsByTagName( tag );

				// Filter out possible comments
				if ( tag === "*" ) {
					while ( (elem = results[i++]) ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}

					return tmp;
				}
				return results;
			};

		// Class
		Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
			if ( typeof context.getElementsByClassName !== strundefined && documentIsHTML ) {
				return context.getElementsByClassName( className );
			}
		};

		/* QSA/matchesSelector
		---------------------------------------------------------------------- */

		// QSA and matchesSelector support

		// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
		rbuggyMatches = [];

		// qSa(:focus) reports false when true (Chrome 21)
		// We allow this because of a bug in IE8/9 that throws an error
		// whenever `document.activeElement` is accessed on an iframe
		// So, we allow :focus to pass through QSA all the time to avoid the IE error
		// See http://bugs.jquery.com/ticket/13378
		rbuggyQSA = [];

		if ( (support.qsa = rnative.test( doc.querySelectorAll )) ) {
			// Build QSA regex
			// Regex strategy adopted from Diego Perini
			assert(function( div ) {
				// Select is set to empty string on purpose
				// This is to test IE's treatment of not explicitly
				// setting a boolean content attribute,
				// since its presence should be enough
				// http://bugs.jquery.com/ticket/12359
				div.innerHTML = "<select><option selected=''></option></select>";

				// Support: IE8
				// Boolean attributes and "value" are not treated correctly
				if ( !div.querySelectorAll("[selected]").length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
				}

				// Webkit/Opera - :checked should return selected option elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":checked").length ) {
					rbuggyQSA.push(":checked");
				}
			});

			assert(function( div ) {

				// Support: Opera 10-12/IE8
				// ^= $= *= and empty values
				// Should not select anything
				// Support: Windows 8 Native Apps
				// The type attribute is restricted during .innerHTML assignment
				var input = doc.createElement("input");
				input.setAttribute( "type", "hidden" );
				div.appendChild( input ).setAttribute( "t", "" );

				if ( div.querySelectorAll("[t^='']").length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
				}

				// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":enabled").length ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}

				// Opera 10-11 does not throw on post-comma invalid pseudos
				div.querySelectorAll("*,:x");
				rbuggyQSA.push(",.*:");
			});
		}

		if ( (support.matchesSelector = rnative.test( (matches = docElem.webkitMatchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector) )) ) {

			assert(function( div ) {
				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				support.disconnectedMatch = matches.call( div, "div" );

				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call( div, "[s!='']:x" );
				rbuggyMatches.push( "!=", pseudos );
			});
		}

		rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
		rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

		/* Contains
		---------------------------------------------------------------------- */

		// Element contains another
		// Purposefully does not implement inclusive descendent
		// As in, an element does not contain itself
		contains = rnative.test( docElem.contains ) || docElem.compareDocumentPosition ?
			function( a, b ) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
					bup = b && b.parentNode;
				return a === bup || !!( bup && bup.nodeType === 1 && (
					adown.contains ?
						adown.contains( bup ) :
						a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
				));
			} :
			function( a, b ) {
				if ( b ) {
					while ( (b = b.parentNode) ) {
						if ( b === a ) {
							return true;
						}
					}
				}
				return false;
			};

		/* Sorting
		---------------------------------------------------------------------- */

		// Document order sorting
		sortOrder = docElem.compareDocumentPosition ?
		function( a, b ) {

			// Flag for duplicate removal
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			var compare = b.compareDocumentPosition && a.compareDocumentPosition && a.compareDocumentPosition( b );

			if ( compare ) {
				// Disconnected nodes
				if ( compare & 1 ||
					(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

					// Choose the first element that is related to our preferred document
					if ( a === doc || contains(preferredDoc, a) ) {
						return -1;
					}
					if ( b === doc || contains(preferredDoc, b) ) {
						return 1;
					}

					// Maintain original order
					return sortInput ?
						( indexOf.call( sortInput, a ) - indexOf.call( sortInput, b ) ) :
						0;
				}

				return compare & 4 ? -1 : 1;
			}

			// Not directly comparable, sort on existence of method
			return a.compareDocumentPosition ? -1 : 1;
		} :
		function( a, b ) {
			var cur,
				i = 0,
				aup = a.parentNode,
				bup = b.parentNode,
				ap = [ a ],
				bp = [ b ];

			// Exit early if the nodes are identical
			if ( a === b ) {
				hasDuplicate = true;
				return 0;

			// Parentless nodes are either documents or disconnected
			} else if ( !aup || !bup ) {
				return a === doc ? -1 :
					b === doc ? 1 :
					aup ? -1 :
					bup ? 1 :
					sortInput ?
					( indexOf.call( sortInput, a ) - indexOf.call( sortInput, b ) ) :
					0;

			// If the nodes are siblings, we can do a quick check
			} else if ( aup === bup ) {
				return siblingCheck( a, b );
			}

			// Otherwise we need full lists of their ancestors for comparison
			cur = a;
			while ( (cur = cur.parentNode) ) {
				ap.unshift( cur );
			}
			cur = b;
			while ( (cur = cur.parentNode) ) {
				bp.unshift( cur );
			}

			// Walk down the tree looking for a discrepancy
			while ( ap[i] === bp[i] ) {
				i++;
			}

			return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck( ap[i], bp[i] ) :

				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 :
				bp[i] === preferredDoc ? 1 :
				0;
		};

		return doc;
	};

	Sizzle.matches = function( expr, elements ) {
		return Sizzle( expr, null, null, elements );
	};

	Sizzle.matchesSelector = function( elem, expr ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		// Make sure that attribute selectors are quoted
		expr = expr.replace( rattributeQuotes, "='$1']" );

		if ( support.matchesSelector && documentIsHTML &&
			( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
			( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

			try {
				var ret = matches.call( elem, expr );

				// IE 9's matchesSelector returns false on disconnected nodes
				if ( ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch(e) {}
		}

		return Sizzle( expr, document, null, [elem] ).length > 0;
	};

	Sizzle.contains = function( context, elem ) {
		// Set document vars if needed
		if ( ( context.ownerDocument || context ) !== document ) {
			setDocument( context );
		}
		return contains( context, elem );
	};

	Sizzle.attr = function( elem, name ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		var fn = Expr.attrHandle[ name.toLowerCase() ],
			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
				fn( elem, name, !documentIsHTML ) :
				undefined;

		return val === undefined ?
			support.attributes || !documentIsHTML ?
				elem.getAttribute( name ) :
				(val = elem.getAttributeNode(name)) && val.specified ?
					val.value :
					null :
			val;
	};

	Sizzle.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};

	/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */
	Sizzle.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			j = 0,
			i = 0;

		// Unless we *know* we can detect duplicates, assume their presence
		hasDuplicate = !support.detectDuplicates;
		sortInput = !support.sortStable && results.slice( 0 );
		results.sort( sortOrder );

		if ( hasDuplicate ) {
			while ( (elem = results[i++]) ) {
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
			}
		}

		return results;
	};

	/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */
	getText = Sizzle.getText = function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;

		if ( !nodeType ) {
			// If no nodeType, this is expected to be an array
			for ( ; (node = elem[i]); i++ ) {
				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent for elements
			// innerText usage removed for consistency of new lines (see #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {
				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
		// Do not include comment or processing instruction nodes

		return ret;
	};

	Expr = Sizzle.selectors = {

		// Can be adjusted by the user
		cacheLength: 50,

		createPseudo: markFunction,

		match: matchExpr,

		attrHandle: {},

		find: {},

		relative: {
			">": { dir: "parentNode", first: true },
			" ": { dir: "parentNode" },
			"+": { dir: "previousSibling", first: true },
			"~": { dir: "previousSibling" }
		},

		preFilter: {
			"ATTR": function( match ) {
				match[1] = match[1].replace( runescape, funescape );

				// Move the given value to match[3] whether quoted or unquoted
				match[3] = ( match[4] || match[5] || "" ).replace( runescape, funescape );

				if ( match[2] === "~=" ) {
					match[3] = " " + match[3] + " ";
				}

				return match.slice( 0, 4 );
			},

			"CHILD": function( match ) {
				/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/
				match[1] = match[1].toLowerCase();

				if ( match[1].slice( 0, 3 ) === "nth" ) {
					// nth-* requires argument
					if ( !match[3] ) {
						Sizzle.error( match[0] );
					}

					// numeric x and y parameters for Expr.filter.CHILD
					// remember that false/true cast respectively to 0/1
					match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
					match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

				// other types prohibit arguments
				} else if ( match[3] ) {
					Sizzle.error( match[0] );
				}

				return match;
			},

			"PSEUDO": function( match ) {
				var excess,
					unquoted = !match[5] && match[2];

				if ( matchExpr["CHILD"].test( match[0] ) ) {
					return null;
				}

				// Accept quoted arguments as-is
				if ( match[3] && match[4] !== undefined ) {
					match[2] = match[4];

				// Strip excess characters from unquoted arguments
				} else if ( unquoted && rpseudo.test( unquoted ) &&
					// Get excess from tokenize (recursively)
					(excess = tokenize( unquoted, true )) &&
					// advance to the next closing parenthesis
					(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

					// excess is a negative index
					match[0] = match[0].slice( 0, excess );
					match[2] = unquoted.slice( 0, excess );
				}

				// Return only captures needed by the pseudo filter method (type and argument)
				return match.slice( 0, 3 );
			}
		},

		filter: {

			"TAG": function( nodeNameSelector ) {
				var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
				return nodeNameSelector === "*" ?
					function() { return true; } :
					function( elem ) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
			},

			"CLASS": function( className ) {
				var pattern = classCache[ className + " " ];

				return pattern ||
					(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
					classCache( className, function( elem ) {
						return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== strundefined && elem.getAttribute("class") || "" );
					});
			},

			"ATTR": function( name, operator, check ) {
				return function( elem ) {
					var result = Sizzle.attr( elem, name );

					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}

					result += "";

					return operator === "=" ? result === check :
						operator === "!=" ? result !== check :
						operator === "^=" ? check && result.indexOf( check ) === 0 :
						operator === "*=" ? check && result.indexOf( check ) > -1 :
						operator === "$=" ? check && result.slice( -check.length ) === check :
						operator === "~=" ? ( " " + result + " " ).indexOf( check ) > -1 :
						operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
						false;
				};
			},

			"CHILD": function( type, what, argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";

				return first === 1 && last === 0 ?

					// Shortcut for :nth-*(n)
					function( elem ) {
						return !!elem.parentNode;
					} :

					function( elem, context, xml ) {
						var cache, outerCache, node, diff, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType;

						if ( parent ) {

							// :(first|last|only)-(child|of-type)
							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( (node = node[ dir ]) ) {
										if ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) {
											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}

							start = [ forward ? parent.firstChild : parent.lastChild ];

							// non-xml :nth-child(...) stores cache data on `parent`
							if ( forward && useCache ) {
								// Seek `elem` from a previously-cached index
								outerCache = parent[ expando ] || (parent[ expando ] = {});
								cache = outerCache[ type ] || [];
								nodeIndex = cache[0] === dirruns && cache[1];
								diff = cache[0] === dirruns && cache[2];
								node = nodeIndex && parent.childNodes[ nodeIndex ];

								while ( (node = ++nodeIndex && node && node[ dir ] ||

									// Fallback to seeking `elem` from the start
									(diff = nodeIndex = 0) || start.pop()) ) {

									// When found, cache indexes on `parent` and break
									if ( node.nodeType === 1 && ++diff && node === elem ) {
										outerCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}

							// Use previously-cached element index if available
							} else if ( useCache && (cache = (elem[ expando ] || (elem[ expando ] = {}))[ type ]) && cache[0] === dirruns ) {
								diff = cache[1];

							// xml :nth-child(...) or :nth-last-child(...) or :nth(-last)?-of-type(...)
							} else {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) && ++diff ) {
										// Cache the index of each encountered element
										if ( useCache ) {
											(node[ expando ] || (node[ expando ] = {}))[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}

							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},

			"PSEUDO": function( pseudo, argument ) {
				// pseudo-class names are case-insensitive
				// http://www.w3.org/TR/selectors/#pseudo-classes
				// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
				// Remember that setFilters inherits from pseudos
				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						Sizzle.error( "unsupported pseudo: " + pseudo );

				// The user may use createPseudo to indicate that
				// arguments are needed to create the filter function
				// just as Sizzle does
				if ( fn[ expando ] ) {
					return fn( argument );
				}

				// But maintain support for old signatures
				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction(function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf.call( seed, matched[i] );
								seed[ idx ] = !( matches[ idx ] = matched[i] );
							}
						}) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}

				return fn;
			}
		},

		pseudos: {
			// Potentially complex pseudos
			"not": markFunction(function( selector ) {
				// Trim the selector passed to compile
				// to avoid treating leading and trailing
				// spaces as combinators
				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrim, "$1" ) );

				return matcher[ expando ] ?
					markFunction(function( seed, matches, context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;

						// Match elements unmatched by `matcher`
						while ( i-- ) {
							if ( (elem = unmatched[i]) ) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) :
					function( elem, context, xml ) {
						input[0] = elem;
						matcher( input, null, xml, results );
						return !results.pop();
					};
			}),

			"has": markFunction(function( selector ) {
				return function( elem ) {
					return Sizzle( selector, elem ).length > 0;
				};
			}),

			"contains": markFunction(function( text ) {
				return function( elem ) {
					return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
				};
			}),

			// "Whether an element is represented by a :lang() selector
			// is based solely on the element's language value
			// being equal to the identifier C,
			// or beginning with the identifier C immediately followed by "-".
			// The matching of C against the element's language value is performed case-insensitively.
			// The identifier C does not have to be a valid language name."
			// http://www.w3.org/TR/selectors/#lang-pseudo
			"lang": markFunction( function( lang ) {
				// lang value must be a valid identifier
				if ( !ridentifier.test(lang || "") ) {
					Sizzle.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( (elemLang = documentIsHTML ?
							elem.lang :
							elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
					return false;
				};
			}),

			// Miscellaneous
			"target": function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},

			"root": function( elem ) {
				return elem === docElem;
			},

			"focus": function( elem ) {
				return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
			},

			// Boolean properties
			"enabled": function( elem ) {
				return elem.disabled === false;
			},

			"disabled": function( elem ) {
				return elem.disabled === true;
			},

			"checked": function( elem ) {
				// In CSS3, :checked should return both checked and selected elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				var nodeName = elem.nodeName.toLowerCase();
				return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
			},

			"selected": function( elem ) {
				// Accessing this property makes selected-by-default
				// options in Safari work properly
				if ( elem.parentNode ) {
					elem.parentNode.selectedIndex;
				}

				return elem.selected === true;
			},

			// Contents
			"empty": function( elem ) {
				// http://www.w3.org/TR/selectors/#empty-pseudo
				// :empty is only affected by element nodes and content nodes(including text(3), cdata(4)),
				//   not comment, processing instructions, or others
				// Thanks to Diego Perini for the nodeName shortcut
				//   Greater than "@" means alpha characters (specifically not starting with "#" or "?")
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeName > "@" || elem.nodeType === 3 || elem.nodeType === 4 ) {
						return false;
					}
				}
				return true;
			},

			"parent": function( elem ) {
				return !Expr.pseudos["empty"]( elem );
			},

			// Element/input types
			"header": function( elem ) {
				return rheader.test( elem.nodeName );
			},

			"input": function( elem ) {
				return rinputs.test( elem.nodeName );
			},

			"button": function( elem ) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === "button" || name === "button";
			},

			"text": function( elem ) {
				var attr;
				// IE6 and 7 will map elem.type to 'text' for new HTML5 types (search, etc)
				// use getAttribute instead to test this case
				return elem.nodeName.toLowerCase() === "input" &&
					elem.type === "text" &&
					( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === elem.type );
			},

			// Position-in-collection
			"first": createPositionalPseudo(function() {
				return [ 0 ];
			}),

			"last": createPositionalPseudo(function( matchIndexes, length ) {
				return [ length - 1 ];
			}),

			"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			}),

			"even": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"odd": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			})
		}
	};

	Expr.pseudos["nth"] = Expr.pseudos["eq"];

	// Add button/input type pseudos
	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}

	// Easy API for creating new setFilters
	function setFilters() {}
	setFilters.prototype = Expr.filters = Expr.pseudos;
	Expr.setFilters = new setFilters();

	function tokenize( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];

		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}

		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;

		while ( soFar ) {

			// Comma and first run
			if ( !matched || (match = rcomma.exec( soFar )) ) {
				if ( match ) {
					// Don't consume trailing commas as valid
					soFar = soFar.slice( match[0].length ) || soFar;
				}
				groups.push( tokens = [] );
			}

			matched = false;

			// Combinators
			if ( (match = rcombinators.exec( soFar )) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					// Cast descendant combinators to space
					type: match[0].replace( rtrim, " " )
				});
				soFar = soFar.slice( matched.length );
			}

			// Filters
			for ( type in Expr.filter ) {
				if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
					(match = preFilters[ type ]( match ))) ) {
					matched = match.shift();
					tokens.push({
						value: matched,
						type: type,
						matches: match
					});
					soFar = soFar.slice( matched.length );
				}
			}

			if ( !matched ) {
				break;
			}
		}

		// Return the length of the invalid excess
		// if we're just parsing
		// Otherwise, throw an error or return tokens
		return parseOnly ?
			soFar.length :
			soFar ?
				Sizzle.error( selector ) :
				// Cache the tokens
				tokenCache( selector, groups ).slice( 0 );
	}

	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[i].value;
		}
		return selector;
	}

	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			checkNonElements = base && dir === "parentNode",
			doneName = done++;

		return combinator.first ?
			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
			} :

			// Check against all ancestor/preceding elements
			function( elem, context, xml ) {
				var data, cache, outerCache,
					dirkey = dirruns + " " + doneName;

				// We can't set arbitrary data on XML nodes, so they don't benefit from dir caching
				if ( xml ) {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || (elem[ expando ] = {});
							if ( (cache = outerCache[ dir ]) && cache[0] === dirkey ) {
								if ( (data = cache[1]) === true || data === cachedruns ) {
									return data === true;
								}
							} else {
								cache = outerCache[ dir ] = [ dirkey ];
								cache[1] = matcher( elem, context, xml ) || cachedruns;
								if ( cache[1] === true ) {
									return true;
								}
							}
						}
					}
				}
			};
	}

	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[i]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[0];
	}

	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;

		for ( ; i < len; i++ ) {
			if ( (elem = unmatched[i]) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}

		return newUnmatched;
	}

	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction(function( seed, results, context, xml ) {
			var temp, i, elem,
				preMap = [],
				postMap = [],
				preexisting = results.length,

				// Get initial elements from seed or context
				elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems,

				matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

						// ...intermediate processing is necessary
						[] :

						// ...otherwise use results directly
						results :
					matcherIn;

			// Find primary matches
			if ( matcher ) {
				matcher( matcherIn, matcherOut, context, xml );
			}

			// Apply postFilter
			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );

				// Un-match failing elements by moving them back to matcherIn
				i = temp.length;
				while ( i-- ) {
					if ( (elem = temp[i]) ) {
						matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
					}
				}
			}

			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {
						// Get the final matcherOut by condensing this intermediate into postFinder contexts
						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( (elem = matcherOut[i]) ) {
								// Restore matcherIn since elem is not yet a final match
								temp.push( (matcherIn[i] = elem) );
							}
						}
						postFinder( null, (matcherOut = []), temp, xml );
					}

					// Move matched elements from seed to results to keep them synchronized
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) &&
							(temp = postFinder ? indexOf.call( seed, elem ) : preMap[i]) > -1 ) {

							seed[temp] = !(results[temp] = elem);
						}
					}
				}

			// Add elements to results, through postFinder if defined
			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		});
	}

	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[0].type ],
			implicitRelative = leadingRelative || Expr.relative[" "],
			i = leadingRelative ? 1 : 0,

			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf.call( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {
				return ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
					(checkContext = context).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );
			} ];

		for ( ; i < len; i++ ) {
			if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
				matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
			} else {
				matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

				// Return special upon seeing a positional matcher
				if ( matcher[ expando ] ) {
					// Find the next relative operator (if any) for proper handling
					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[j].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
						).replace( rtrim, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}

		return elementMatcher( matchers );
	}

	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		// A counter to specify which element is currently being matched
		var matcherCachedRuns = 0,
			bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, expandContext ) {
				var elem, j, matcher,
					setMatched = [],
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					outermost = expandContext != null,
					contextBackup = outermostContext,
					// We must always have either seed elements or context
					elems = seed || byElement && Expr.find["TAG"]( "*", expandContext && context.parentNode || context ),
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1);

				if ( outermost ) {
					outermostContext = context !== document && context;
					cachedruns = matcherCachedRuns;
				}

				// Add elements passing elementMatchers directly to results
				// Keep `i` a string if there are no elements so `matchedCount` will be "00" below
				for ( ; (elem = elems[i]) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;
						while ( (matcher = elementMatchers[j++]) ) {
							if ( matcher( elem, context, xml ) ) {
								results.push( elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
							cachedruns = ++matcherCachedRuns;
						}
					}

					// Track unmatched elements for set filters
					if ( bySet ) {
						// They will have gone through all possible matchers
						if ( (elem = !matcher && elem) ) {
							matchedCount--;
						}

						// Lengthen the array for every element, matched or not
						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}

				// Apply set filters to unmatched elements
				matchedCount += i;
				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( (matcher = setMatchers[j++]) ) {
						matcher( unmatched, setMatched, context, xml );
					}

					if ( seed ) {
						// Reintegrate element matches to eliminate the need for sorting
						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !(unmatched[i] || setMatched[i]) ) {
									setMatched[i] = pop.call( results );
								}
							}
						}

						// Discard index placeholder values to get only actual matches
						setMatched = condense( setMatched );
					}

					// Add matches to results
					push.apply( results, setMatched );

					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {

						Sizzle.uniqueSort( results );
					}
				}

				// Override manipulation of globals by nested matchers
				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}

				return unmatched;
			};

		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}

	compile = Sizzle.compile = function( selector, group /* Internal Use Only */ ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];

		if ( !cached ) {
			// Generate a function of recursive functions that can be used to check each element
			if ( !group ) {
				group = tokenize( selector );
			}
			i = group.length;
			while ( i-- ) {
				cached = matcherFromTokens( group[i] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}

			// Cache the compiled function
			cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );
		}
		return cached;
	};

	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			Sizzle( selector, contexts[i], results );
		}
		return results;
	}

	function select( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			match = tokenize( selector );

		if ( !seed ) {
			// Try to minimize operations if there is only one group
			if ( match.length === 1 ) {

				// Take a shortcut and set the context if the root selector is an ID
				tokens = match[0] = match[0].slice( 0 );
				if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
						support.getById && context.nodeType === 9 && documentIsHTML &&
						Expr.relative[ tokens[1].type ] ) {

					context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
					if ( !context ) {
						return results;
					}
					selector = selector.slice( tokens.shift().value.length );
				}

				// Fetch a seed set for right-to-left matching
				i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
				while ( i-- ) {
					token = tokens[i];

					// Abort if we hit a combinator
					if ( Expr.relative[ (type = token.type) ] ) {
						break;
					}
					if ( (find = Expr.find[ type ]) ) {
						// Search, expanding context for leading sibling combinators
						if ( (seed = find(
							token.matches[0].replace( runescape, funescape ),
							rsibling.test( tokens[0].type ) && context.parentNode || context
						)) ) {

							// If seed is empty or no tokens remain, we can return early
							tokens.splice( i, 1 );
							selector = seed.length && toSelector( tokens );
							if ( !selector ) {
								push.apply( results, seed );
								return results;
							}

							break;
						}
					}
				}
			}
		}

		// Compile and execute a filtering function
		// Provide `match` to avoid retokenization if we modified the selector above
		compile( selector, match )(
			seed,
			context,
			!documentIsHTML,
			results,
			rsibling.test( selector )
		);
		return results;
	}

	// One-time assignments

	// Sort stability
	support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

	// Support: Chrome<14
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = hasDuplicate;

	// Initialize against the default document
	setDocument();

	// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert(function( div1 ) {
		// Should return 1, but returns 4 (following)
		return div1.compareDocumentPosition( document.createElement("div") ) & 1;
	});

	// Support: IE<8
	// Prevent attribute/property "interpolation"
	// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !assert(function( div ) {
		div.innerHTML = "<a href='#'></a>";
		return div.firstChild.getAttribute("href") === "#" ;
	}) ) {
		addHandle( "type|href|height|width", function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
			}
		});
	}

	// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if ( !support.attributes || !assert(function( div ) {
		div.innerHTML = "<input/>";
		div.firstChild.setAttribute( "value", "" );
		return div.firstChild.getAttribute( "value" ) === "";
	}) ) {
		addHandle( "value", function( elem, name, isXML ) {
			if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
				return elem.defaultValue;
			}
		});
	}

	// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if ( !assert(function( div ) {
		return div.getAttribute("disabled") == null;
	}) ) {
		addHandle( booleans, function( elem, name, isXML ) {
			var val;
			if ( !isXML ) {
				return (val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
					elem[ name ] === true ? name.toLowerCase() : null;
			}
		});
	}

	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;
	jQuery.expr[":"] = jQuery.expr.pseudos;
	jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;


	})( window );
	// String to Object options format cache
	var optionsCache = {};

	// Convert String-formatted options into Object-formatted ones and store in cache
	function createOptions( options ) {
		var object = optionsCache[ options ] = {};
		jQuery.each( options.match( core_rnotwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		});
		return object;
	}

	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function( options ) {

		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			( optionsCache[ options ] || createOptions( options ) ) :
			jQuery.extend( {}, options );

		var // Last fire value (for non-forgettable lists)
			memory,
			// Flag to know if list was already fired
			fired,
			// Flag to know if list is currently firing
			firing,
			// First callback to fire (used internally by add and fireWith)
			firingStart,
			// End of the loop when firing
			firingLength,
			// Index of currently firing callback (modified by remove if needed)
			firingIndex,
			// Actual callback list
			list = [],
			// Stack of fire calls for repeatable lists
			stack = !options.once && [],
			// Fire callbacks
			fire = function( data ) {
				memory = options.memory && data;
				fired = true;
				firingIndex = firingStart || 0;
				firingStart = 0;
				firingLength = list.length;
				firing = true;
				for ( ; list && firingIndex < firingLength; firingIndex++ ) {
					if ( list[ firingIndex ].apply( data[ 0 ], data[ 1 ] ) === false && options.stopOnFalse ) {
						memory = false; // To prevent further calls using add
						break;
					}
				}
				firing = false;
				if ( list ) {
					if ( stack ) {
						if ( stack.length ) {
							fire( stack.shift() );
						}
					} else if ( memory ) {
						list = [];
					} else {
						self.disable();
					}
				}
			},
			// Actual Callbacks object
			self = {
				// Add a callback or a collection of callbacks to the list
				add: function() {
					if ( list ) {
						// First, we save the current length
						var start = list.length;
						(function add( args ) {
							jQuery.each( args, function( _, arg ) {
								var type = jQuery.type( arg );
								if ( type === "function" ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && type !== "string" ) {
									// Inspect recursively
									add( arg );
								}
							});
						})( arguments );
						// Do we need to add the callbacks to the
						// current firing batch?
						if ( firing ) {
							firingLength = list.length;
						// With memory, if we're not firing then
						// we should call right away
						} else if ( memory ) {
							firingStart = start;
							fire( memory );
						}
					}
					return this;
				},
				// Remove a callback from the list
				remove: function() {
					if ( list ) {
						jQuery.each( arguments, function( _, arg ) {
							var index;
							while( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
								list.splice( index, 1 );
								// Handle firing indexes
								if ( firing ) {
									if ( index <= firingLength ) {
										firingLength--;
									}
									if ( index <= firingIndex ) {
										firingIndex--;
									}
								}
							}
						});
					}
					return this;
				},
				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function( fn ) {
					return fn ? jQuery.inArray( fn, list ) > -1 : !!( list && list.length );
				},
				// Remove all callbacks from the list
				empty: function() {
					list = [];
					firingLength = 0;
					return this;
				},
				// Have the list do nothing anymore
				disable: function() {
					list = stack = memory = undefined;
					return this;
				},
				// Is it disabled?
				disabled: function() {
					return !list;
				},
				// Lock the list in its current state
				lock: function() {
					stack = undefined;
					if ( !memory ) {
						self.disable();
					}
					return this;
				},
				// Is it locked?
				locked: function() {
					return !stack;
				},
				// Call all callbacks with the given context and arguments
				fireWith: function( context, args ) {
					if ( list && ( !fired || stack ) ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						if ( firing ) {
							stack.push( args );
						} else {
							fire( args );
						}
					}
					return this;
				},
				// Call all the callbacks with the given arguments
				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},
				// To know if the callbacks have already been called at least once
				fired: function() {
					return !!fired;
				}
			};

		return self;
	};
	jQuery.extend({

		Deferred: function( func ) {
			var tuples = [
					// action, add listener, listener list, final state
					[ "resolve", "done", jQuery.Callbacks("once memory"), "resolved" ],
					[ "reject", "fail", jQuery.Callbacks("once memory"), "rejected" ],
					[ "notify", "progress", jQuery.Callbacks("memory") ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					then: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;
						return jQuery.Deferred(function( newDefer ) {
							jQuery.each( tuples, function( i, tuple ) {
								var action = tuple[ 0 ],
									fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];
								// deferred[ done | fail | progress ] for forwarding actions to newDefer
								deferred[ tuple[1] ](function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && jQuery.isFunction( returned.promise ) ) {
										returned.promise()
											.done( newDefer.resolve )
											.fail( newDefer.reject )
											.progress( newDefer.notify );
									} else {
										newDefer[ action + "With" ]( this === promise ? newDefer.promise() : this, fn ? [ returned ] : arguments );
									}
								});
							});
							fns = null;
						}).promise();
					},
					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};

			// Keep pipe for back-compat
			promise.pipe = promise.then;

			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 3 ];

				// promise[ done | fail | progress ] = list.add
				promise[ tuple[1] ] = list.add;

				// Handle state
				if ( stateString ) {
					list.add(function() {
						// state = [ resolved | rejected ]
						state = stateString;

					// [ reject_list | resolve_list ].disable; progress_list.lock
					}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
				}

				// deferred[ resolve | reject | notify ]
				deferred[ tuple[0] ] = function() {
					deferred[ tuple[0] + "With" ]( this === deferred ? promise : this, arguments );
					return this;
				};
				deferred[ tuple[0] + "With" ] = list.fireWith;
			});

			// Make the deferred a promise
			promise.promise( deferred );

			// Call given func if any
			if ( func ) {
				func.call( deferred, deferred );
			}

			// All done!
			return deferred;
		},

		// Deferred helper
		when: function( subordinate /* , ..., subordinateN */ ) {
			var i = 0,
				resolveValues = core_slice.call( arguments ),
				length = resolveValues.length,

				// the count of uncompleted subordinates
				remaining = length !== 1 || ( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

				// the master Deferred. If resolveValues consist of only a single Deferred, just use that.
				deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

				// Update function for both resolve and progress values
				updateFunc = function( i, contexts, values ) {
					return function( value ) {
						contexts[ i ] = this;
						values[ i ] = arguments.length > 1 ? core_slice.call( arguments ) : value;
						if( values === progressValues ) {
							deferred.notifyWith( contexts, values );
						} else if ( !( --remaining ) ) {
							deferred.resolveWith( contexts, values );
						}
					};
				},

				progressValues, progressContexts, resolveContexts;

			// add listeners to Deferred subordinates; treat others as resolved
			if ( length > 1 ) {
				progressValues = new Array( length );
				progressContexts = new Array( length );
				resolveContexts = new Array( length );
				for ( ; i < length; i++ ) {
					if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
						resolveValues[ i ].promise()
							.done( updateFunc( i, resolveContexts, resolveValues ) )
							.fail( deferred.reject )
							.progress( updateFunc( i, progressContexts, progressValues ) );
					} else {
						--remaining;
					}
				}
			}

			// if we're not waiting on anything, resolve the master
			if ( !remaining ) {
				deferred.resolveWith( resolveContexts, resolveValues );
			}

			return deferred.promise();
		}
	});
	jQuery.support = (function( support ) {
		var input = document.createElement("input"),
			fragment = document.createDocumentFragment(),
			div = document.createElement("div"),
			select = document.createElement("select"),
			opt = select.appendChild( document.createElement("option") );

		// Finish early in limited environments
		if ( !input.type ) {
			return support;
		}

		input.type = "checkbox";

		// Support: Safari 5.1, iOS 5.1, Android 4.x, Android 2.3
		// Check the default checkbox/radio value ("" on old WebKit; "on" elsewhere)
		support.checkOn = input.value !== "";

		// Must access the parent to make an option select properly
		// Support: IE9, IE10
		support.optSelected = opt.selected;

		// Will be defined later
		support.reliableMarginRight = true;
		support.boxSizingReliable = true;
		support.pixelPosition = false;

		// Make sure checked status is properly cloned
		// Support: IE9, IE10
		input.checked = true;
		support.noCloneChecked = input.cloneNode( true ).checked;

		// Make sure that the options inside disabled selects aren't marked as disabled
		// (WebKit marks them as disabled)
		select.disabled = true;
		support.optDisabled = !opt.disabled;

		// Check if an input maintains its value after becoming a radio
		// Support: IE9, IE10
		input = document.createElement("input");
		input.value = "t";
		input.type = "radio";
		support.radioValue = input.value === "t";

		// #11217 - WebKit loses check when the name is after the checked attribute
		input.setAttribute( "checked", "t" );
		input.setAttribute( "name", "t" );

		fragment.appendChild( input );

		// Support: Safari 5.1, Android 4.x, Android 2.3
		// old WebKit doesn't clone checked state correctly in fragments
		support.checkClone = fragment.cloneNode( true ).cloneNode( true ).lastChild.checked;

		// Support: Firefox, Chrome, Safari
		// Beware of CSP restrictions (https://developer.mozilla.org/en/Security/CSP)
		support.focusinBubbles = "onfocusin" in window;

		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";

		// Run tests that need a body at doc ready
		jQuery(function() {
			var container, marginDiv,
				// Support: Firefox, Android 2.3 (Prefixed box-sizing versions).
				divReset = "padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",
				body = document.getElementsByTagName("body")[ 0 ];

			if ( !body ) {
				// Return for frameset docs that don't have a body
				return;
			}

			container = document.createElement("div");
			container.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px";

			// Check box-sizing and margin behavior.
			body.appendChild( container ).appendChild( div );
			div.innerHTML = "";
			// Support: Firefox, Android 2.3 (Prefixed box-sizing versions).
			div.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%";

			// Workaround failing boxSizing test due to offsetWidth returning wrong value
			// with some non-1 values of body zoom, ticket #13543
			jQuery.swap( body, body.style.zoom != null ? { zoom: 1 } : {}, function() {
				support.boxSizing = div.offsetWidth === 4;
			});

			// Use window.getComputedStyle because jsdom on node.js will break without it.
			if ( window.getComputedStyle ) {
				support.pixelPosition = ( window.getComputedStyle( div, null ) || {} ).top !== "1%";
				support.boxSizingReliable = ( window.getComputedStyle( div, null ) || { width: "4px" } ).width === "4px";

				// Support: Android 2.3
				// Check if div with explicit width and no margin-right incorrectly
				// gets computed margin-right based on width of container. (#3333)
				// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
				marginDiv = div.appendChild( document.createElement("div") );
				marginDiv.style.cssText = div.style.cssText = divReset;
				marginDiv.style.marginRight = marginDiv.style.width = "0";
				div.style.width = "1px";

				support.reliableMarginRight =
					!parseFloat( ( window.getComputedStyle( marginDiv, null ) || {} ).marginRight );
			}

			body.removeChild( container );
		});

		return support;
	})( {} );

	/*
		Implementation Summary

		1. Enforce API surface and semantic compatibility with 1.9.x branch
		2. Improve the module's maintainability by reducing the storage
			paths to a single mechanism.
		3. Use the same single mechanism to support "private" and "user" data.
		4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
		5. Avoid exposing implementation details on user objects (eg. expando properties)
		6. Provide a clear path for implementation upgrade to WeakMap in 2014
	*/
	var data_user, data_priv,
		rbrace = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
		rmultiDash = /([A-Z])/g;

	function Data() {
		// Support: Android < 4,
		// Old WebKit does not have Object.preventExtensions/freeze method,
		// return new empty object instead with no [[set]] accessor
		Object.defineProperty( this.cache = {}, 0, {
			get: function() {
				return {};
			}
		});

		this.expando = jQuery.expando + Math.random();
	}

	Data.uid = 1;

	Data.accepts = function( owner ) {
		// Accepts only:
		//  - Node
		//    - Node.ELEMENT_NODE
		//    - Node.DOCUMENT_NODE
		//  - Object
		//    - Any
		return owner.nodeType ?
			owner.nodeType === 1 || owner.nodeType === 9 : true;
	};

	Data.prototype = {
		key: function( owner ) {
			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return the key for a frozen object.
			if ( !Data.accepts( owner ) ) {
				return 0;
			}

			var descriptor = {},
				// Check if the owner object already has a cache key
				unlock = owner[ this.expando ];

			// If not, create one
			if ( !unlock ) {
				unlock = Data.uid++;

				// Secure it in a non-enumerable, non-writable property
				try {
					descriptor[ this.expando ] = { value: unlock };
					Object.defineProperties( owner, descriptor );

				// Support: Android < 4
				// Fallback to a less secure definition
				} catch ( e ) {
					descriptor[ this.expando ] = unlock;
					jQuery.extend( owner, descriptor );
				}
			}

			// Ensure the cache object
			if ( !this.cache[ unlock ] ) {
				this.cache[ unlock ] = {};
			}

			return unlock;
		},
		set: function( owner, data, value ) {
			var prop,
				// There may be an unlock assigned to this node,
				// if there is no entry for this "owner", create one inline
				// and set the unlock as though an owner entry had always existed
				unlock = this.key( owner ),
				cache = this.cache[ unlock ];

			// Handle: [ owner, key, value ] args
			if ( typeof data === "string" ) {
				cache[ data ] = value;

			// Handle: [ owner, { properties } ] args
			} else {
				// Fresh assignments by object are shallow copied
				if ( jQuery.isEmptyObject( cache ) ) {
					jQuery.extend( this.cache[ unlock ], data );
				// Otherwise, copy the properties one-by-one to the cache object
				} else {
					for ( prop in data ) {
						cache[ prop ] = data[ prop ];
					}
				}
			}
			return cache;
		},
		get: function( owner, key ) {
			// Either a valid cache is found, or will be created.
			// New caches will be created and the unlock returned,
			// allowing direct access to the newly created
			// empty data object. A valid owner object must be provided.
			var cache = this.cache[ this.key( owner ) ];

			return key === undefined ?
				cache : cache[ key ];
		},
		access: function( owner, key, value ) {
			var stored;
			// In cases where either:
			//
			//   1. No key was specified
			//   2. A string key was specified, but no value provided
			//
			// Take the "read" path and allow the get method to determine
			// which value to return, respectively either:
			//
			//   1. The entire cache object
			//   2. The data stored at the key
			//
			if ( key === undefined ||
					((key && typeof key === "string") && value === undefined) ) {

				stored = this.get( owner, key );

				return stored !== undefined ?
					stored : this.get( owner, jQuery.camelCase(key) );
			}

			// [*]When the key is not a string, or both a key and value
			// are specified, set or extend (existing objects) with either:
			//
			//   1. An object of properties
			//   2. A key and value
			//
			this.set( owner, key, value );

			// Since the "set" path can have two possible entry points
			// return the expected data based on which path was taken[*]
			return value !== undefined ? value : key;
		},
		remove: function( owner, key ) {
			var i, name, camel,
				unlock = this.key( owner ),
				cache = this.cache[ unlock ];

			if ( key === undefined ) {
				this.cache[ unlock ] = {};

			} else {
				// Support array or space separated string of keys
				if ( jQuery.isArray( key ) ) {
					// If "name" is an array of keys...
					// When data is initially created, via ("key", "val") signature,
					// keys will be converted to camelCase.
					// Since there is no way to tell _how_ a key was added, remove
					// both plain key and camelCase key. #12786
					// This will only penalize the array argument path.
					name = key.concat( key.map( jQuery.camelCase ) );
				} else {
					camel = jQuery.camelCase( key );
					// Try the string as a key before any manipulation
					if ( key in cache ) {
						name = [ key, camel ];
					} else {
						// If a key with the spaces exists, use it.
						// Otherwise, create an array by matching non-whitespace
						name = camel;
						name = name in cache ?
							[ name ] : ( name.match( core_rnotwhite ) || [] );
					}
				}

				i = name.length;
				while ( i-- ) {
					delete cache[ name[ i ] ];
				}
			}
		},
		hasData: function( owner ) {
			return !jQuery.isEmptyObject(
				this.cache[ owner[ this.expando ] ] || {}
			);
		},
		discard: function( owner ) {
			if ( owner[ this.expando ] ) {
				delete this.cache[ owner[ this.expando ] ];
			}
		}
	};

	// These may be used throughout the jQuery core codebase
	data_user = new Data();
	data_priv = new Data();


	jQuery.extend({
		acceptData: Data.accepts,

		hasData: function( elem ) {
			return data_user.hasData( elem ) || data_priv.hasData( elem );
		},

		data: function( elem, name, data ) {
			return data_user.access( elem, name, data );
		},

		removeData: function( elem, name ) {
			data_user.remove( elem, name );
		},

		// TODO: Now that all calls to _data and _removeData have been replaced
		// with direct calls to data_priv methods, these can be deprecated.
		_data: function( elem, name, data ) {
			return data_priv.access( elem, name, data );
		},

		_removeData: function( elem, name ) {
			data_priv.remove( elem, name );
		}
	});

	jQuery.fn.extend({
		data: function( key, value ) {
			var attrs, name,
				elem = this[ 0 ],
				i = 0,
				data = null;

			// Gets all values
			if ( key === undefined ) {
				if ( this.length ) {
					data = data_user.get( elem );

					if ( elem.nodeType === 1 && !data_priv.get( elem, "hasDataAttrs" ) ) {
						attrs = elem.attributes;
						for ( ; i < attrs.length; i++ ) {
							name = attrs[ i ].name;

							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice(5) );
								dataAttr( elem, name, data[ name ] );
							}
						}
						data_priv.set( elem, "hasDataAttrs", true );
					}
				}

				return data;
			}

			// Sets multiple values
			if ( typeof key === "object" ) {
				return this.each(function() {
					data_user.set( this, key );
				});
			}

			return jQuery.access( this, function( value ) {
				var data,
					camelKey = jQuery.camelCase( key );

				// The calling jQuery object (element matches) is not empty
				// (and therefore has an element appears at this[ 0 ]) and the
				// `value` parameter was not undefined. An empty jQuery object
				// will result in `undefined` for elem = this[ 0 ] which will
				// throw an exception if an attempt to read a data cache is made.
				if ( elem && value === undefined ) {
					// Attempt to get data from the cache
					// with the key as-is
					data = data_user.get( elem, key );
					if ( data !== undefined ) {
						return data;
					}

					// Attempt to get data from the cache
					// with the key camelized
					data = data_user.get( elem, camelKey );
					if ( data !== undefined ) {
						return data;
					}

					// Attempt to "discover" the data in
					// HTML5 custom data-* attrs
					data = dataAttr( elem, camelKey, undefined );
					if ( data !== undefined ) {
						return data;
					}

					// We tried really hard, but the data doesn't exist.
					return;
				}

				// Set the data...
				this.each(function() {
					// First, attempt to store a copy or reference of any
					// data that might've been store with a camelCased key.
					var data = data_user.get( this, camelKey );

					// For HTML5 data-* attribute interop, we have to
					// store property names with dashes in a camelCase form.
					// This might not apply to all properties...*
					data_user.set( this, camelKey, value );

					// *... In the case of properties that might _actually_
					// have dashes, we need to also store a copy of that
					// unchanged property.
					if ( key.indexOf("-") !== -1 && data !== undefined ) {
						data_user.set( this, key, value );
					}
				});
			}, null, value, arguments.length > 1, null, true );
		},

		removeData: function( key ) {
			return this.each(function() {
				data_user.remove( this, key );
			});
		}
	});

	function dataAttr( elem, key, data ) {
		var name;

		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if ( data === undefined && elem.nodeType === 1 ) {
			name = "data-" + key.replace( rmultiDash, "-$1" ).toLowerCase();
			data = elem.getAttribute( name );

			if ( typeof data === "string" ) {
				try {
					data = data === "true" ? true :
						data === "false" ? false :
						data === "null" ? null :
						// Only convert to a number if it doesn't change the string
						+data + "" === data ? +data :
						rbrace.test( data ) ? JSON.parse( data ) :
						data;
				} catch( e ) {}

				// Make sure we set the data so it isn't changed later
				data_user.set( elem, key, data );
			} else {
				data = undefined;
			}
		}
		return data;
	}
	jQuery.extend({
		queue: function( elem, type, data ) {
			var queue;

			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = data_priv.get( elem, type );

				// Speed up dequeue by getting out quickly if this is just a lookup
				if ( data ) {
					if ( !queue || jQuery.isArray( data ) ) {
						queue = data_priv.access( elem, type, jQuery.makeArray(data) );
					} else {
						queue.push( data );
					}
				}
				return queue || [];
			}
		},

		dequeue: function( elem, type ) {
			type = type || "fx";

			var queue = jQuery.queue( elem, type ),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks( elem, type ),
				next = function() {
					jQuery.dequeue( elem, type );
				};

			// If the fx queue is dequeued, always remove the progress sentinel
			if ( fn === "inprogress" ) {
				fn = queue.shift();
				startLength--;
			}

			if ( fn ) {

				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if ( type === "fx" ) {
					queue.unshift( "inprogress" );
				}

				// clear up the last queue stop function
				delete hooks.stop;
				fn.call( elem, next, hooks );
			}

			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},

		// not intended for public consumption - generates a queueHooks object, or returns the current one
		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return data_priv.get( elem, key ) || data_priv.access( elem, key, {
				empty: jQuery.Callbacks("once memory").add(function() {
					data_priv.remove( elem, [ type + "queue", key ] );
				})
			});
		}
	});

	jQuery.fn.extend({
		queue: function( type, data ) {
			var setter = 2;

			if ( typeof type !== "string" ) {
				data = type;
				type = "fx";
				setter--;
			}

			if ( arguments.length < setter ) {
				return jQuery.queue( this[0], type );
			}

			return data === undefined ?
				this :
				this.each(function() {
					var queue = jQuery.queue( this, type, data );

					// ensure a hooks for this queue
					jQuery._queueHooks( this, type );

					if ( type === "fx" && queue[0] !== "inprogress" ) {
						jQuery.dequeue( this, type );
					}
				});
		},
		dequeue: function( type ) {
			return this.each(function() {
				jQuery.dequeue( this, type );
			});
		},
		// Based off of the plugin by Clint Helfers, with permission.
		// http://blindsignals.com/index.php/2009/07/jquery-delay/
		delay: function( time, type ) {
			time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
			type = type || "fx";

			return this.queue( type, function( next, hooks ) {
				var timeout = setTimeout( next, time );
				hooks.stop = function() {
					clearTimeout( timeout );
				};
			});
		},
		clearQueue: function( type ) {
			return this.queue( type || "fx", [] );
		},
		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function( type, obj ) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function() {
					if ( !( --count ) ) {
						defer.resolveWith( elements, [ elements ] );
					}
				};

			if ( typeof type !== "string" ) {
				obj = type;
				type = undefined;
			}
			type = type || "fx";

			while( i-- ) {
				tmp = data_priv.get( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	});
	var nodeHook, boolHook,
		rclass = /[\t\r\n\f]/g,
		rreturn = /\r/g,
		rfocusable = /^(?:input|select|textarea|button)$/i;

	jQuery.fn.extend({
		attr: function( name, value ) {
			return jQuery.access( this, jQuery.attr, name, value, arguments.length > 1 );
		},

		removeAttr: function( name ) {
			return this.each(function() {
				jQuery.removeAttr( this, name );
			});
		},

		prop: function( name, value ) {
			return jQuery.access( this, jQuery.prop, name, value, arguments.length > 1 );
		},

		removeProp: function( name ) {
			return this.each(function() {
				delete this[ jQuery.propFix[ name ] || name ];
			});
		},

		addClass: function( value ) {
			var classes, elem, cur, clazz, j,
				i = 0,
				len = this.length,
				proceed = typeof value === "string" && value;

			if ( jQuery.isFunction( value ) ) {
				return this.each(function( j ) {
					jQuery( this ).addClass( value.call( this, j, this.className ) );
				});
			}

			if ( proceed ) {
				// The disjunction here is for better compressibility (see removeClass)
				classes = ( value || "" ).match( core_rnotwhite ) || [];

				for ( ; i < len; i++ ) {
					elem = this[ i ];
					cur = elem.nodeType === 1 && ( elem.className ?
						( " " + elem.className + " " ).replace( rclass, " " ) :
						" "
					);

					if ( cur ) {
						j = 0;
						while ( (clazz = classes[j++]) ) {
							if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
								cur += clazz + " ";
							}
						}
						elem.className = jQuery.trim( cur );

					}
				}
			}

			return this;
		},

		removeClass: function( value ) {
			var classes, elem, cur, clazz, j,
				i = 0,
				len = this.length,
				proceed = arguments.length === 0 || typeof value === "string" && value;

			if ( jQuery.isFunction( value ) ) {
				return this.each(function( j ) {
					jQuery( this ).removeClass( value.call( this, j, this.className ) );
				});
			}
			if ( proceed ) {
				classes = ( value || "" ).match( core_rnotwhite ) || [];

				for ( ; i < len; i++ ) {
					elem = this[ i ];
					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 && ( elem.className ?
						( " " + elem.className + " " ).replace( rclass, " " ) :
						""
					);

					if ( cur ) {
						j = 0;
						while ( (clazz = classes[j++]) ) {
							// Remove *all* instances
							while ( cur.indexOf( " " + clazz + " " ) >= 0 ) {
								cur = cur.replace( " " + clazz + " ", " " );
							}
						}
						elem.className = value ? jQuery.trim( cur ) : "";
					}
				}
			}

			return this;
		},

		toggleClass: function( value, stateVal ) {
			var type = typeof value;

			if ( typeof stateVal === "boolean" && type === "string" ) {
				return stateVal ? this.addClass( value ) : this.removeClass( value );
			}

			if ( jQuery.isFunction( value ) ) {
				return this.each(function( i ) {
					jQuery( this ).toggleClass( value.call(this, i, this.className, stateVal), stateVal );
				});
			}

			return this.each(function() {
				if ( type === "string" ) {
					// toggle individual class names
					var className,
						i = 0,
						self = jQuery( this ),
						classNames = value.match( core_rnotwhite ) || [];

					while ( (className = classNames[ i++ ]) ) {
						// check each className given, space separated list
						if ( self.hasClass( className ) ) {
							self.removeClass( className );
						} else {
							self.addClass( className );
						}
					}

				// Toggle whole class name
				} else if ( type === core_strundefined || type === "boolean" ) {
					if ( this.className ) {
						// store className if set
						data_priv.set( this, "__className__", this.className );
					}

					// If the element has a class name or if we're passed "false",
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					this.className = this.className || value === false ? "" : data_priv.get( this, "__className__" ) || "";
				}
			});
		},

		hasClass: function( selector ) {
			var className = " " + selector + " ",
				i = 0,
				l = this.length;
			for ( ; i < l; i++ ) {
				if ( this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf( className ) >= 0 ) {
					return true;
				}
			}

			return false;
		},

		val: function( value ) {
			var hooks, ret, isFunction,
				elem = this[0];

			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] || jQuery.valHooks[ elem.nodeName.toLowerCase() ];

					if ( hooks && "get" in hooks && (ret = hooks.get( elem, "value" )) !== undefined ) {
						return ret;
					}

					ret = elem.value;

					return typeof ret === "string" ?
						// handle most common string cases
						ret.replace(rreturn, "") :
						// handle cases where value is null/undef or number
						ret == null ? "" : ret;
				}

				return;
			}

			isFunction = jQuery.isFunction( value );

			return this.each(function( i ) {
				var val;

				if ( this.nodeType !== 1 ) {
					return;
				}

				if ( isFunction ) {
					val = value.call( this, i, jQuery( this ).val() );
				} else {
					val = value;
				}

				// Treat null/undefined as ""; convert numbers to string
				if ( val == null ) {
					val = "";
				} else if ( typeof val === "number" ) {
					val += "";
				} else if ( jQuery.isArray( val ) ) {
					val = jQuery.map(val, function ( value ) {
						return value == null ? "" : value + "";
					});
				}

				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

				// If set returns undefined, fall back to normal setting
				if ( !hooks || !("set" in hooks) || hooks.set( this, val, "value" ) === undefined ) {
					this.value = val;
				}
			});
		}
	});

	jQuery.extend({
		valHooks: {
			option: {
				get: function( elem ) {
					// attributes.value is undefined in Blackberry 4.7 but
					// uses .value. See #6932
					var val = elem.attributes.value;
					return !val || val.specified ? elem.value : elem.text;
				}
			},
			select: {
				get: function( elem ) {
					var value, option,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one" || index < 0,
						values = one ? null : [],
						max = one ? index + 1 : options.length,
						i = index < 0 ?
							max :
							one ? index : 0;

					// Loop through all the selected options
					for ( ; i < max; i++ ) {
						option = options[ i ];

						// IE6-9 doesn't update selected after form reset (#2551)
						if ( ( option.selected || i === index ) &&
								// Don't return options that are disabled or in a disabled optgroup
								( jQuery.support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null ) &&
								( !option.parentNode.disabled || !jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

							// Get the specific value for the option
							value = jQuery( option ).val();

							// We don't need an array for one selects
							if ( one ) {
								return value;
							}

							// Multi-Selects return an array
							values.push( value );
						}
					}

					return values;
				},

				set: function( elem, value ) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray( value ),
						i = options.length;

					while ( i-- ) {
						option = options[ i ];
						if ( (option.selected = jQuery.inArray( jQuery(option).val(), values ) >= 0) ) {
							optionSet = true;
						}
					}

					// force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		},

		attr: function( elem, name, value ) {
			var hooks, ret,
				nType = elem.nodeType;

			// don't get/set attributes on text, comment and attribute nodes
			if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			// Fallback to prop when attributes are not supported
			if ( typeof elem.getAttribute === core_strundefined ) {
				return jQuery.prop( elem, name, value );
			}

			// All attributes are lowercase
			// Grab necessary hook if one is defined
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
				name = name.toLowerCase();
				hooks = jQuery.attrHooks[ name ] ||
					( jQuery.expr.match.bool.test( name ) ? boolHook : nodeHook );
			}

			if ( value !== undefined ) {

				if ( value === null ) {
					jQuery.removeAttr( elem, name );

				} else if ( hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ) {
					return ret;

				} else {
					elem.setAttribute( name, value + "" );
					return value;
				}

			} else if ( hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ) {
				return ret;

			} else {
				ret = jQuery.find.attr( elem, name );

				// Non-existent attributes return null, we normalize to undefined
				return ret == null ?
					undefined :
					ret;
			}
		},

		removeAttr: function( elem, value ) {
			var name, propName,
				i = 0,
				attrNames = value && value.match( core_rnotwhite );

			if ( attrNames && elem.nodeType === 1 ) {
				while ( (name = attrNames[i++]) ) {
					propName = jQuery.propFix[ name ] || name;

					// Boolean attributes get special treatment (#10870)
					if ( jQuery.expr.match.bool.test( name ) ) {
						// Set corresponding property to false
						elem[ propName ] = false;
					}

					elem.removeAttribute( name );
				}
			}
		},

		attrHooks: {
			type: {
				set: function( elem, value ) {
					if ( !jQuery.support.radioValue && value === "radio" && jQuery.nodeName(elem, "input") ) {
						// Setting the type on a radio button after the value resets the value in IE6-9
						// Reset value to default in case type is set after value during creation
						var val = elem.value;
						elem.setAttribute( "type", value );
						if ( val ) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		},

		propFix: {
			"for": "htmlFor",
			"class": "className"
		},

		prop: function( elem, name, value ) {
			var ret, hooks, notxml,
				nType = elem.nodeType;

			// don't get/set properties on text, comment and attribute nodes
			if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			notxml = nType !== 1 || !jQuery.isXMLDoc( elem );

			if ( notxml ) {
				// Fix name and attach hooks
				name = jQuery.propFix[ name ] || name;
				hooks = jQuery.propHooks[ name ];
			}

			if ( value !== undefined ) {
				return hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ?
					ret :
					( elem[ name ] = value );

			} else {
				return hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ?
					ret :
					elem[ name ];
			}
		},

		propHooks: {
			tabIndex: {
				get: function( elem ) {
					return elem.hasAttribute( "tabindex" ) || rfocusable.test( elem.nodeName ) || elem.href ?
						elem.tabIndex :
						-1;
				}
			}
		}
	});

	// Hooks for boolean attributes
	boolHook = {
		set: function( elem, value, name ) {
			if ( value === false ) {
				// Remove boolean attributes when set to false
				jQuery.removeAttr( elem, name );
			} else {
				elem.setAttribute( name, name );
			}
			return name;
		}
	};
	jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
		var getter = jQuery.expr.attrHandle[ name ] || jQuery.find.attr;

		jQuery.expr.attrHandle[ name ] = function( elem, name, isXML ) {
			var fn = jQuery.expr.attrHandle[ name ],
				ret = isXML ?
					undefined :
					/* jshint eqeqeq: false */
					// Temporarily disable this handler to check existence
					(jQuery.expr.attrHandle[ name ] = undefined) !=
						getter( elem, name, isXML ) ?

						name.toLowerCase() :
						null;

			// Restore handler
			jQuery.expr.attrHandle[ name ] = fn;

			return ret;
		};
	});

	// Support: IE9+
	// Selectedness for an option in an optgroup can be inaccurate
	if ( !jQuery.support.optSelected ) {
		jQuery.propHooks.selected = {
			get: function( elem ) {
				var parent = elem.parentNode;
				if ( parent && parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
				return null;
			}
		};
	}

	jQuery.each([
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function() {
		jQuery.propFix[ this.toLowerCase() ] = this;
	});

	// Radios and checkboxes getter/setter
	jQuery.each([ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			set: function( elem, value ) {
				if ( jQuery.isArray( value ) ) {
					return ( elem.checked = jQuery.inArray( jQuery(elem).val(), value ) >= 0 );
				}
			}
		};
		if ( !jQuery.support.checkOn ) {
			jQuery.valHooks[ this ].get = function( elem ) {
				// Support: Webkit
				// "" is returned instead of "on" if a value isn't specified
				return elem.getAttribute("value") === null ? "on" : elem.value;
			};
		}
	});
	var rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|contextmenu)|click/,
		rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;

	function returnTrue() {
		return true;
	}

	function returnFalse() {
		return false;
	}

	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch ( err ) { }
	}

	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {

		global: {},

		add: function( elem, types, handler, data, selector ) {

			var handleObjIn, eventHandle, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = data_priv.get( elem );

			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if ( !elemData ) {
				return;
			}

			// Caller can pass in an object of custom data in lieu of the handler
			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}

			// Make sure that the handler has a unique ID, used to find/remove it later
			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}

			// Init the element's event structure and main handler, if this is the first
			if ( !(events = elemData.events) ) {
				events = elemData.events = {};
			}
			if ( !(eventHandle = elemData.handle) ) {
				eventHandle = elemData.handle = function( e ) {
					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== core_strundefined && (!e || jQuery.event.triggered !== e.type) ?
						jQuery.event.dispatch.apply( eventHandle.elem, arguments ) :
						undefined;
				};
				// Add elem as a property of the handle fn to prevent a memory leak with IE non-native events
				eventHandle.elem = elem;
			}

			// Handle multiple events separated by a space
			types = ( types || "" ).match( core_rnotwhite ) || [""];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[t] ) || [];
				type = origType = tmp[1];
				namespaces = ( tmp[2] || "" ).split( "." ).sort();

				// There *must* be a type, no attaching namespace-only handlers
				if ( !type ) {
					continue;
				}

				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[ type ] || {};

				// If selector defined, determine special event api type, otherwise given type
				type = ( selector ? special.delegateType : special.bindType ) || type;

				// Update special based on newly reset type
				special = jQuery.event.special[ type ] || {};

				// handleObj is passed to all event handlers
				handleObj = jQuery.extend({
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join(".")
				}, handleObjIn );

				// Init the event handler queue if we're the first
				if ( !(handlers = events[ type ]) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;

					// Only use addEventListener if the special events handler returns false
					if ( !special.setup || special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle, false );
						}
					}
				}

				if ( special.add ) {
					special.add.call( elem, handleObj );

					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}

				// Add to the element's handler list, delegates in front
				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}

				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[ type ] = true;
			}

			// Nullify elem to prevent memory leaks in IE
			elem = null;
		},

		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {

			var j, origCount, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = data_priv.hasData( elem ) && data_priv.get( elem );

			if ( !elemData || !(events = elemData.events) ) {
				return;
			}

			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( core_rnotwhite ) || [""];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[t] ) || [];
				type = origType = tmp[1];
				namespaces = ( tmp[2] || "" ).split( "." ).sort();

				// Unbind all events (on this namespace, if provided) for the element
				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}

				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[2] && new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" );

				// Remove matching events
				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];

					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector || selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );

						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}

				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if ( origCount && !handlers.length ) {
					if ( !special.teardown || special.teardown.call( elem, namespaces, elemData.handle ) === false ) {
						jQuery.removeEvent( elem, type, elemData.handle );
					}

					delete events[ type ];
				}
			}

			// Remove the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				delete elemData.handle;
				data_priv.remove( elem, "events" );
			}
		},

		trigger: function( event, data, elem, onlyHandlers ) {

			var i, cur, tmp, bubbleType, ontype, handle, special,
				eventPath = [ elem || document ],
				type = core_hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = core_hasOwn.call( event, "namespace" ) ? event.namespace.split(".") : [];

			cur = tmp = elem = elem || document;

			// Don't do events on text and comment nodes
			if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
				return;
			}

			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
				return;
			}

			if ( type.indexOf(".") >= 0 ) {
				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split(".");
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf(":") < 0 && "on" + type;

			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[ jQuery.expando ] ?
				event :
				new jQuery.Event( type, typeof event === "object" && event );

			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join(".");
			event.namespace_re = event.namespace ?
				new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" ) :
				null;

			// Clean up the event in case it is being reused
			event.result = undefined;
			if ( !event.target ) {
				event.target = elem;
			}

			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[ event ] :
				jQuery.makeArray( data, [ event ] );

			// Allow special events to draw outside the lines
			special = jQuery.event.special[ type ] || {};
			if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
				return;
			}

			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

				bubbleType = special.delegateType || type;
				if ( !rfocusMorph.test( bubbleType + type ) ) {
					cur = cur.parentNode;
				}
				for ( ; cur; cur = cur.parentNode ) {
					eventPath.push( cur );
					tmp = cur;
				}

				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if ( tmp === (elem.ownerDocument || document) ) {
					eventPath.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}

			// Fire handlers on the event path
			i = 0;
			while ( (cur = eventPath[i++]) && !event.isPropagationStopped() ) {

				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;

				// jQuery handler
				handle = ( data_priv.get( cur, "events" ) || {} )[ event.type ] && data_priv.get( cur, "handle" );
				if ( handle ) {
					handle.apply( cur, data );
				}

				// Native handler
				handle = ontype && cur[ ontype ];
				if ( handle && jQuery.acceptData( cur ) && handle.apply && handle.apply( cur, data ) === false ) {
					event.preventDefault();
				}
			}
			event.type = type;

			// If nobody prevented the default action, do it now
			if ( !onlyHandlers && !event.isDefaultPrevented() ) {

				if ( (!special._default || special._default.apply( eventPath.pop(), data ) === false) &&
					jQuery.acceptData( elem ) ) {

					// Call a native DOM method on the target with the same name name as the event.
					// Don't do default actions on window, that's where global variables be (#6170)
					if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];

						if ( tmp ) {
							elem[ ontype ] = null;
						}

						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						elem[ type ]();
						jQuery.event.triggered = undefined;

						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}

			return event.result;
		},

		dispatch: function( event ) {

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( event );

			var i, j, ret, matched, handleObj,
				handlerQueue = [],
				args = core_slice.call( arguments ),
				handlers = ( data_priv.get( this, "events" ) || {} )[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};

			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[0] = event;
			event.delegateTarget = this;

			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}

			// Determine handlers
			handlerQueue = jQuery.event.handlers.call( this, event, handlers );

			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ( (matched = handlerQueue[ i++ ]) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;

				j = 0;
				while ( (handleObj = matched.handlers[ j++ ]) && !event.isImmediatePropagationStopped() ) {

					// Triggered event must either 1) have no namespace, or
					// 2) have namespace(s) a subset or equal to those in the bound event (both can have no namespace).
					if ( !event.namespace_re || event.namespace_re.test( handleObj.namespace ) ) {

						event.handleObj = handleObj;
						event.data = handleObj.data;

						ret = ( (jQuery.event.special[ handleObj.origType ] || {}).handle || handleObj.handler )
								.apply( matched.elem, args );

						if ( ret !== undefined ) {
							if ( (event.result = ret) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}

			// Call the postDispatch hook for the mapped type
			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}

			return event.result;
		},

		handlers: function( event, handlers ) {
			var i, matches, sel, handleObj,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;

			// Find delegate handlers
			// Black-hole SVG <use> instance trees (#13180)
			// Avoid non-left-click bubbling in Firefox (#3861)
			if ( delegateCount && cur.nodeType && (!event.button || event.type !== "click") ) {

				for ( ; cur !== this; cur = cur.parentNode || this ) {

					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if ( cur.disabled !== true || event.type !== "click" ) {
						matches = [];
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];

							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";

							if ( matches[ sel ] === undefined ) {
								matches[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) >= 0 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matches[ sel ] ) {
								matches.push( handleObj );
							}
						}
						if ( matches.length ) {
							handlerQueue.push({ elem: cur, handlers: matches });
						}
					}
				}
			}

			// Add the remaining (directly-bound) handlers
			if ( delegateCount < handlers.length ) {
				handlerQueue.push({ elem: this, handlers: handlers.slice( delegateCount ) });
			}

			return handlerQueue;
		},

		// Includes some event props shared by KeyEvent and MouseEvent
		props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),

		fixHooks: {},

		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function( event, original ) {

				// Add which for key events
				if ( event.which == null ) {
					event.which = original.charCode != null ? original.charCode : original.keyCode;
				}

				return event;
			}
		},

		mouseHooks: {
			props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function( event, original ) {
				var eventDoc, doc, body,
					button = original.button;

				// Calculate pageX/Y if missing and clientX/Y available
				if ( event.pageX == null && original.clientX != null ) {
					eventDoc = event.target.ownerDocument || document;
					doc = eventDoc.documentElement;
					body = eventDoc.body;

					event.pageX = original.clientX + ( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) - ( doc && doc.clientLeft || body && body.clientLeft || 0 );
					event.pageY = original.clientY + ( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) - ( doc && doc.clientTop  || body && body.clientTop  || 0 );
				}

				// Add which for click: 1 === left; 2 === middle; 3 === right
				// Note: button is not normalized, so don't use it
				if ( !event.which && button !== undefined ) {
					event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
				}

				return event;
			}
		},

		fix: function( event ) {
			if ( event[ jQuery.expando ] ) {
				return event;
			}

			// Create a writable copy of the event object and normalize some properties
			var i, prop, copy,
				type = event.type,
				originalEvent = event,
				fixHook = this.fixHooks[ type ];

			if ( !fixHook ) {
				this.fixHooks[ type ] = fixHook =
					rmouseEvent.test( type ) ? this.mouseHooks :
					rkeyEvent.test( type ) ? this.keyHooks :
					{};
			}
			copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

			event = new jQuery.Event( originalEvent );

			i = copy.length;
			while ( i-- ) {
				prop = copy[ i ];
				event[ prop ] = originalEvent[ prop ];
			}

			// Support: Cordova 2.5 (WebKit) (#13255)
			// All events should have a target; Cordova deviceready doesn't
			if ( !event.target ) {
				event.target = document;
			}

			// Support: Safari 6.0+, Chrome < 28
			// Target should not be a text node (#504, #13143)
			if ( event.target.nodeType === 3 ) {
				event.target = event.target.parentNode;
			}

			return fixHook.filter? fixHook.filter( event, originalEvent ) : event;
		},

		special: {
			load: {
				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {
				// Fire native event if possible so blur/focus sequence is correct
				trigger: function() {
					if ( this !== safeActiveElement() && this.focus ) {
						this.focus();
						return false;
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if ( this === safeActiveElement() && this.blur ) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {
				// For checkbox, fire native event so checked state will be right
				trigger: function() {
					if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
						this.click();
						return false;
					}
				},

				// For cross-browser consistency, don't fire native .click() on links
				_default: function( event ) {
					return jQuery.nodeName( event.target, "a" );
				}
			},

			beforeunload: {
				postDispatch: function( event ) {

					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if ( event.result !== undefined ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		},

		simulate: function( type, elem, event, bubble ) {
			// Piggyback on a donor event to simulate a different one.
			// Fake originalEvent to avoid donor's stopPropagation, but if the
			// simulated event prevents default then we do the same on the donor.
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true,
					originalEvent: {}
				}
			);
			if ( bubble ) {
				jQuery.event.trigger( e, null, elem );
			} else {
				jQuery.event.dispatch.call( elem, e );
			}
			if ( e.isDefaultPrevented() ) {
				event.preventDefault();
			}
		}
	};

	jQuery.removeEvent = function( elem, type, handle ) {
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle, false );
		}
	};

	jQuery.Event = function( src, props ) {
		// Allow instantiation without the 'new' keyword
		if ( !(this instanceof jQuery.Event) ) {
			return new jQuery.Event( src, props );
		}

		// Event object
		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;

			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = ( src.defaultPrevented ||
				src.getPreventDefault && src.getPreventDefault() ) ? returnTrue : returnFalse;

		// Event type
		} else {
			this.type = src;
		}

		// Put explicitly provided properties onto the event object
		if ( props ) {
			jQuery.extend( this, props );
		}

		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();

		// Mark it as fixed
		this[ jQuery.expando ] = true;
	};

	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,

		preventDefault: function() {
			var e = this.originalEvent;

			this.isDefaultPrevented = returnTrue;

			if ( e && e.preventDefault ) {
				e.preventDefault();
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;

			this.isPropagationStopped = returnTrue;

			if ( e && e.stopPropagation ) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function() {
			this.isImmediatePropagationStopped = returnTrue;
			this.stopPropagation();
		}
	};

	// Create mouseenter/leave events using mouseover/out and event-time checks
	// Support: Chrome 15+
	jQuery.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,

			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;

				// For mousenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if ( !related || (related !== target && !jQuery.contains( target, related )) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	});

	// Create "bubbling" focus and blur events
	// Support: Firefox, Chrome, Safari
	if ( !jQuery.support.focusinBubbles ) {
		jQuery.each({ focus: "focusin", blur: "focusout" }, function( orig, fix ) {

			// Attach a single capturing handler while someone wants focusin/focusout
			var attaches = 0,
				handler = function( event ) {
					jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ), true );
				};

			jQuery.event.special[ fix ] = {
				setup: function() {
					if ( attaches++ === 0 ) {
						document.addEventListener( orig, handler, true );
					}
				},
				teardown: function() {
					if ( --attaches === 0 ) {
						document.removeEventListener( orig, handler, true );
					}
				}
			};
		});
	}

	jQuery.fn.extend({

		on: function( types, selector, data, fn, /*INTERNAL*/ one ) {
			var origFn, type;

			// Types can be a map of types/handlers
			if ( typeof types === "object" ) {
				// ( types-Object, selector, data )
				if ( typeof selector !== "string" ) {
					// ( types-Object, data )
					data = data || selector;
					selector = undefined;
				}
				for ( type in types ) {
					this.on( type, selector, data, types[ type ], one );
				}
				return this;
			}

			if ( data == null && fn == null ) {
				// ( types, fn )
				fn = selector;
				data = selector = undefined;
			} else if ( fn == null ) {
				if ( typeof selector === "string" ) {
					// ( types, selector, fn )
					fn = data;
					data = undefined;
				} else {
					// ( types, data, fn )
					fn = data;
					data = selector;
					selector = undefined;
				}
			}
			if ( fn === false ) {
				fn = returnFalse;
			} else if ( !fn ) {
				return this;
			}

			if ( one === 1 ) {
				origFn = fn;
				fn = function( event ) {
					// Can use an empty set, since event contains the info
					jQuery().off( event );
					return origFn.apply( this, arguments );
				};
				// Use same guid so caller can remove using origFn
				fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
			}
			return this.each( function() {
				jQuery.event.add( this, types, fn, data, selector );
			});
		},
		one: function( types, selector, data, fn ) {
			return this.on( types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {
				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {
				// ( types-object [, selector] )
				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {
				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each(function() {
				jQuery.event.remove( this, types, fn, selector );
			});
		},

		trigger: function( type, data ) {
			return this.each(function() {
				jQuery.event.trigger( type, data, this );
			});
		},
		triggerHandler: function( type, data ) {
			var elem = this[0];
			if ( elem ) {
				return jQuery.event.trigger( type, data, elem, true );
			}
		}
	});
	var isSimple = /^.[^:#\[\.,]*$/,
		rparentsprev = /^(?:parents|prev(?:Until|All))/,
		rneedsContext = jQuery.expr.match.needsContext,
		// methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};

	jQuery.fn.extend({
		find: function( selector ) {
			var i,
				ret = [],
				self = this,
				len = self.length;

			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter(function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				}) );
			}

			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}

			// Needed because $( selector, context ) becomes $( context ).find( selector )
			ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
			ret.selector = this.selector ? this.selector + " " + selector : selector;
			return ret;
		},

		has: function( target ) {
			var targets = jQuery( target, this ),
				l = targets.length;

			return this.filter(function() {
				var i = 0;
				for ( ; i < l; i++ ) {
					if ( jQuery.contains( this, targets[i] ) ) {
						return true;
					}
				}
			});
		},

		not: function( selector ) {
			return this.pushStack( winnow(this, selector || [], true) );
		},

		filter: function( selector ) {
			return this.pushStack( winnow(this, selector || [], false) );
		},

		is: function( selector ) {
			return !!winnow(
				this,

				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test( selector ) ?
					jQuery( selector ) :
					selector || [],
				false
			).length;
		},

		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				pos = ( rneedsContext.test( selectors ) || typeof selectors !== "string" ) ?
					jQuery( selectors, context || this.context ) :
					0;

			for ( ; i < l; i++ ) {
				for ( cur = this[i]; cur && cur !== context; cur = cur.parentNode ) {
					// Always skip document fragments
					if ( cur.nodeType < 11 && (pos ?
						pos.index(cur) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector(cur, selectors)) ) {

						cur = matched.push( cur );
						break;
					}
				}
			}

			return this.pushStack( matched.length > 1 ? jQuery.unique( matched ) : matched );
		},

		// Determine the position of an element within
		// the matched set of elements
		index: function( elem ) {

			// No argument, return index in parent
			if ( !elem ) {
				return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
			}

			// index in selector
			if ( typeof elem === "string" ) {
				return core_indexOf.call( jQuery( elem ), this[ 0 ] );
			}

			// Locate the position of the desired element
			return core_indexOf.call( this,

				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[ 0 ] : elem
			);
		},

		add: function( selector, context ) {
			var set = typeof selector === "string" ?
					jQuery( selector, context ) :
					jQuery.makeArray( selector && selector.nodeType ? [ selector ] : selector ),
				all = jQuery.merge( this.get(), set );

			return this.pushStack( jQuery.unique(all) );
		},

		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter(selector)
			);
		}
	});

	function sibling( cur, dir ) {
		while ( (cur = cur[dir]) && cur.nodeType !== 1 ) {}

		return cur;
	}

	jQuery.each({
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return jQuery.dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, i, until ) {
			return jQuery.dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return jQuery.dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return jQuery.dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, i, until ) {
			return jQuery.dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, i, until ) {
			return jQuery.dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return jQuery.sibling( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return jQuery.sibling( elem.firstChild );
		},
		contents: function( elem ) {
			return elem.contentDocument || jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var matched = jQuery.map( this, fn, until );

			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}

			if ( selector && typeof selector === "string" ) {
				matched = jQuery.filter( selector, matched );
			}

			if ( this.length > 1 ) {
				// Remove duplicates
				if ( !guaranteedUnique[ name ] ) {
					jQuery.unique( matched );
				}

				// Reverse order for parents* and prev-derivatives
				if ( rparentsprev.test( name ) ) {
					matched.reverse();
				}
			}

			return this.pushStack( matched );
		};
	});

	jQuery.extend({
		filter: function( expr, elems, not ) {
			var elem = elems[ 0 ];

			if ( not ) {
				expr = ":not(" + expr + ")";
			}

			return elems.length === 1 && elem.nodeType === 1 ?
				jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
				jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
					return elem.nodeType === 1;
				}));
		},

		dir: function( elem, dir, until ) {
			var matched = [],
				truncate = until !== undefined;

			while ( (elem = elem[ dir ]) && elem.nodeType !== 9 ) {
				if ( elem.nodeType === 1 ) {
					if ( truncate && jQuery( elem ).is( until ) ) {
						break;
					}
					matched.push( elem );
				}
			}
			return matched;
		},

		sibling: function( n, elem ) {
			var matched = [];

			for ( ; n; n = n.nextSibling ) {
				if ( n.nodeType === 1 && n !== elem ) {
					matched.push( n );
				}
			}

			return matched;
		}
	});

	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( jQuery.isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {
				/* jshint -W018 */
				return !!qualifier.call( elem, i, elem ) !== not;
			});

		}

		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			});

		}

		if ( typeof qualifier === "string" ) {
			if ( isSimple.test( qualifier ) ) {
				return jQuery.filter( qualifier, elements, not );
			}

			qualifier = jQuery.filter( qualifier, elements );
		}

		return jQuery.grep( elements, function( elem ) {
			return ( core_indexOf.call( qualifier, elem ) >= 0 ) !== not;
		});
	}
	var rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		rtagName = /<([\w:]+)/,
		rhtml = /<|&#?\w+;/,
		rnoInnerhtml = /<(?:script|style|link)/i,
		manipulation_rcheckableType = /^(?:checkbox|radio)$/i,
		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rscriptType = /^$|\/(?:java|ecma)script/i,
		rscriptTypeMasked = /^true\/(.*)/,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,

		// We have to close these tags to support XHTML (#13200)
		wrapMap = {

			// Support: IE 9
			option: [ 1, "<select multiple='multiple'>", "</select>" ],

			thead: [ 1, "<table>", "</table>" ],
			col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
			tr: [ 2, "<table><tbody>", "</tbody></table>" ],
			td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

			_default: [ 0, "", "" ]
		};

	// Support: IE 9
	wrapMap.optgroup = wrapMap.option;

	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;

	jQuery.fn.extend({
		text: function( value ) {
			return jQuery.access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().append( ( this[ 0 ] && this[ 0 ].ownerDocument || document ).createTextNode( value ) );
			}, null, value, arguments.length );
		},

		append: function() {
			return this.domManip( arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.appendChild( elem );
				}
			});
		},

		prepend: function() {
			return this.domManip( arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.insertBefore( elem, target.firstChild );
				}
			});
		},

		before: function() {
			return this.domManip( arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			});
		},

		after: function() {
			return this.domManip( arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			});
		},

		// keepData is for internal use only--do not document
		remove: function( selector, keepData ) {
			var elem,
				elems = selector ? jQuery.filter( selector, this ) : this,
				i = 0;

			for ( ; (elem = elems[i]) != null; i++ ) {
				if ( !keepData && elem.nodeType === 1 ) {
					jQuery.cleanData( getAll( elem ) );
				}

				if ( elem.parentNode ) {
					if ( keepData && jQuery.contains( elem.ownerDocument, elem ) ) {
						setGlobalEval( getAll( elem, "script" ) );
					}
					elem.parentNode.removeChild( elem );
				}
			}

			return this;
		},

		empty: function() {
			var elem,
				i = 0;

			for ( ; (elem = this[i]) != null; i++ ) {
				if ( elem.nodeType === 1 ) {

					// Prevent memory leaks
					jQuery.cleanData( getAll( elem, false ) );

					// Remove any remaining nodes
					elem.textContent = "";
				}
			}

			return this;
		},

		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

			return this.map( function () {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			});
		},

		html: function( value ) {
			return jQuery.access( this, function( value ) {
				var elem = this[ 0 ] || {},
					i = 0,
					l = this.length;

				if ( value === undefined && elem.nodeType === 1 ) {
					return elem.innerHTML;
				}

				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

					value = value.replace( rxhtmlTag, "<$1></$2>" );

					try {
						for ( ; i < l; i++ ) {
							elem = this[ i ] || {};

							// Remove element nodes and prevent memory leaks
							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}

						elem = 0;

					// If using innerHTML throws an exception, use the fallback method
					} catch( e ) {}
				}

				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},

		replaceWith: function() {
			var
				// Snapshot the DOM in case .domManip sweeps something relevant into its fragment
				args = jQuery.map( this, function( elem ) {
					return [ elem.nextSibling, elem.parentNode ];
				}),
				i = 0;

			// Make the changes, replacing each context element with the new content
			this.domManip( arguments, function( elem ) {
				var next = args[ i++ ],
					parent = args[ i++ ];

				if ( parent ) {
					// Don't use the snapshot next if it has moved (#13810)
					if ( next && next.parentNode !== parent ) {
						next = this.nextSibling;
					}
					jQuery( this ).remove();
					parent.insertBefore( elem, next );
				}
			// Allow new content to include elements from the context set
			}, true );

			// Force removal if there was no new content (e.g., from empty arguments)
			return i ? this : this.remove();
		},

		detach: function( selector ) {
			return this.remove( selector, true );
		},

		domManip: function( args, callback, allowIntersection ) {

			// Flatten any nested arrays
			args = core_concat.apply( [], args );

			var fragment, first, scripts, hasScripts, node, doc,
				i = 0,
				l = this.length,
				set = this,
				iNoClone = l - 1,
				value = args[ 0 ],
				isFunction = jQuery.isFunction( value );

			// We can't cloneNode fragments that contain checked, in WebKit
			if ( isFunction || !( l <= 1 || typeof value !== "string" || jQuery.support.checkClone || !rchecked.test( value ) ) ) {
				return this.each(function( index ) {
					var self = set.eq( index );
					if ( isFunction ) {
						args[ 0 ] = value.call( this, index, self.html() );
					}
					self.domManip( args, callback, allowIntersection );
				});
			}

			if ( l ) {
				fragment = jQuery.buildFragment( args, this[ 0 ].ownerDocument, false, !allowIntersection && this );
				first = fragment.firstChild;

				if ( fragment.childNodes.length === 1 ) {
					fragment = first;
				}

				if ( first ) {
					scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
					hasScripts = scripts.length;

					// Use the original fragment for the last item instead of the first because it can end up
					// being emptied incorrectly in certain situations (#8070).
					for ( ; i < l; i++ ) {
						node = fragment;

						if ( i !== iNoClone ) {
							node = jQuery.clone( node, true, true );

							// Keep references to cloned scripts for later restoration
							if ( hasScripts ) {
								// Support: QtWebKit
								// jQuery.merge because core_push.apply(_, arraylike) throws
								jQuery.merge( scripts, getAll( node, "script" ) );
							}
						}

						callback.call( this[ i ], node, i );
					}

					if ( hasScripts ) {
						doc = scripts[ scripts.length - 1 ].ownerDocument;

						// Reenable scripts
						jQuery.map( scripts, restoreScript );

						// Evaluate executable scripts on first document insertion
						for ( i = 0; i < hasScripts; i++ ) {
							node = scripts[ i ];
							if ( rscriptType.test( node.type || "" ) &&
								!data_priv.access( node, "globalEval" ) && jQuery.contains( doc, node ) ) {

								if ( node.src ) {
									// Hope ajax is available...
									jQuery._evalUrl( node.src );
								} else {
									jQuery.globalEval( node.textContent.replace( rcleanScript, "" ) );
								}
							}
						}
					}
				}
			}

			return this;
		}
	});

	jQuery.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1,
				i = 0;

			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone( true );
				jQuery( insert[ i ] )[ original ]( elems );

				// Support: QtWebKit
				// .get() because core_push.apply(_, arraylike) throws
				core_push.apply( ret, elems.get() );
			}

			return this.pushStack( ret );
		};
	});

	jQuery.extend({
		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var i, l, srcElements, destElements,
				clone = elem.cloneNode( true ),
				inPage = jQuery.contains( elem.ownerDocument, elem );

			// Support: IE >= 9
			// Fix Cloning issues
			if ( !jQuery.support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) && !jQuery.isXMLDoc( elem ) ) {

				// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					fixInput( srcElements[ i ], destElements[ i ] );
				}
			}

			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );

					for ( i = 0, l = srcElements.length; i < l; i++ ) {
						cloneCopyEvent( srcElements[ i ], destElements[ i ] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}

			// Preserve script evaluation history
			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}

			// Return the cloned set
			return clone;
		},

		buildFragment: function( elems, context, scripts, selection ) {
			var elem, tmp, tag, wrap, contains, j,
				i = 0,
				l = elems.length,
				fragment = context.createDocumentFragment(),
				nodes = [];

			for ( ; i < l; i++ ) {
				elem = elems[ i ];

				if ( elem || elem === 0 ) {

					// Add nodes directly
					if ( jQuery.type( elem ) === "object" ) {
						// Support: QtWebKit
						// jQuery.merge because core_push.apply(_, arraylike) throws
						jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

					// Convert non-html into a text node
					} else if ( !rhtml.test( elem ) ) {
						nodes.push( context.createTextNode( elem ) );

					// Convert html into DOM nodes
					} else {
						tmp = tmp || fragment.appendChild( context.createElement("div") );

						// Deserialize a standard representation
						tag = ( rtagName.exec( elem ) || ["", ""] )[ 1 ].toLowerCase();
						wrap = wrapMap[ tag ] || wrapMap._default;
						tmp.innerHTML = wrap[ 1 ] + elem.replace( rxhtmlTag, "<$1></$2>" ) + wrap[ 2 ];

						// Descend through wrappers to the right content
						j = wrap[ 0 ];
						while ( j-- ) {
							tmp = tmp.lastChild;
						}

						// Support: QtWebKit
						// jQuery.merge because core_push.apply(_, arraylike) throws
						jQuery.merge( nodes, tmp.childNodes );

						// Remember the top-level container
						tmp = fragment.firstChild;

						// Fixes #12346
						// Support: Webkit, IE
						tmp.textContent = "";
					}
				}
			}

			// Remove wrapper from fragment
			fragment.textContent = "";

			i = 0;
			while ( (elem = nodes[ i++ ]) ) {

				// #4087 - If origin and destination elements are the same, and this is
				// that element, do not do anything
				if ( selection && jQuery.inArray( elem, selection ) !== -1 ) {
					continue;
				}

				contains = jQuery.contains( elem.ownerDocument, elem );

				// Append to fragment
				tmp = getAll( fragment.appendChild( elem ), "script" );

				// Preserve script evaluation history
				if ( contains ) {
					setGlobalEval( tmp );
				}

				// Capture executables
				if ( scripts ) {
					j = 0;
					while ( (elem = tmp[ j++ ]) ) {
						if ( rscriptType.test( elem.type || "" ) ) {
							scripts.push( elem );
						}
					}
				}
			}

			return fragment;
		},

		cleanData: function( elems ) {
			var data, elem, events, type, key, j,
				special = jQuery.event.special,
				i = 0;

			for ( ; (elem = elems[ i ]) !== undefined; i++ ) {
				if ( Data.accepts( elem ) ) {
					key = elem[ data_priv.expando ];

					if ( key && (data = data_priv.cache[ key ]) ) {
						events = Object.keys( data.events || {} );
						if ( events.length ) {
							for ( j = 0; (type = events[j]) !== undefined; j++ ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );

								// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}
						if ( data_priv.cache[ key ] ) {
							// Discard any remaining `private` data
							delete data_priv.cache[ key ];
						}
					}
				}
				// Discard any remaining `user` data
				delete data_user.cache[ elem[ data_user.expando ] ];
			}
		},

		_evalUrl: function( url ) {
			return jQuery.ajax({
				url: url,
				type: "GET",
				dataType: "script",
				async: false,
				global: false,
				"throws": true
			});
		}
	});

	// Support: 1.x compatibility
	// Manipulating tables requires a tbody
	function manipulationTarget( elem, content ) {
		return jQuery.nodeName( elem, "table" ) &&
			jQuery.nodeName( content.nodeType === 1 ? content : content.firstChild, "tr" ) ?

			elem.getElementsByTagName("tbody")[0] ||
				elem.appendChild( elem.ownerDocument.createElement("tbody") ) :
			elem;
	}

	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		var match = rscriptTypeMasked.exec( elem.type );

		if ( match ) {
			elem.type = match[ 1 ];
		} else {
			elem.removeAttribute("type");
		}

		return elem;
	}

	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var l = elems.length,
			i = 0;

		for ( ; i < l; i++ ) {
			data_priv.set(
				elems[ i ], "globalEval", !refElements || data_priv.get( refElements[ i ], "globalEval" )
			);
		}
	}

	function cloneCopyEvent( src, dest ) {
		var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

		if ( dest.nodeType !== 1 ) {
			return;
		}

		// 1. Copy private data: events, handlers, etc.
		if ( data_priv.hasData( src ) ) {
			pdataOld = data_priv.access( src );
			pdataCur = data_priv.set( dest, pdataOld );
			events = pdataOld.events;

			if ( events ) {
				delete pdataCur.handle;
				pdataCur.events = {};

				for ( type in events ) {
					for ( i = 0, l = events[ type ].length; i < l; i++ ) {
						jQuery.event.add( dest, type, events[ type ][ i ] );
					}
				}
			}
		}

		// 2. Copy user data
		if ( data_user.hasData( src ) ) {
			udataOld = data_user.access( src );
			udataCur = jQuery.extend( {}, udataOld );

			data_user.set( dest, udataCur );
		}
	}


	function getAll( context, tag ) {
		var ret = context.getElementsByTagName ? context.getElementsByTagName( tag || "*" ) :
				context.querySelectorAll ? context.querySelectorAll( tag || "*" ) :
				[];

		return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
			jQuery.merge( [ context ], ret ) :
			ret;
	}

	// Support: IE >= 9
	function fixInput( src, dest ) {
		var nodeName = dest.nodeName.toLowerCase();

		// Fails to persist the checked state of a cloned checkbox or radio button.
		if ( nodeName === "input" && manipulation_rcheckableType.test( src.type ) ) {
			dest.checked = src.checked;

		// Fails to return the selected option to the default selected state when cloning options
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}
	jQuery.fn.extend({
		wrapAll: function( html ) {
			var wrap;

			if ( jQuery.isFunction( html ) ) {
				return this.each(function( i ) {
					jQuery( this ).wrapAll( html.call(this, i) );
				});
			}

			if ( this[ 0 ] ) {

				// The elements to wrap the target around
				wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

				if ( this[ 0 ].parentNode ) {
					wrap.insertBefore( this[ 0 ] );
				}

				wrap.map(function() {
					var elem = this;

					while ( elem.firstElementChild ) {
						elem = elem.firstElementChild;
					}

					return elem;
				}).append( this );
			}

			return this;
		},

		wrapInner: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each(function( i ) {
					jQuery( this ).wrapInner( html.call(this, i) );
				});
			}

			return this.each(function() {
				var self = jQuery( this ),
					contents = self.contents();

				if ( contents.length ) {
					contents.wrapAll( html );

				} else {
					self.append( html );
				}
			});
		},

		wrap: function( html ) {
			var isFunction = jQuery.isFunction( html );

			return this.each(function( i ) {
				jQuery( this ).wrapAll( isFunction ? html.call(this, i) : html );
			});
		},

		unwrap: function() {
			return this.parent().each(function() {
				if ( !jQuery.nodeName( this, "body" ) ) {
					jQuery( this ).replaceWith( this.childNodes );
				}
			}).end();
		}
	});
	var curCSS, iframe,
		// swappable if display is none or starts with table except "table", "table-cell", or "table-caption"
		// see here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,
		rmargin = /^margin/,
		rnumsplit = new RegExp( "^(" + core_pnum + ")(.*)$", "i" ),
		rnumnonpx = new RegExp( "^(" + core_pnum + ")(?!px)[a-z%]+$", "i" ),
		rrelNum = new RegExp( "^([+-])=(" + core_pnum + ")", "i" ),
		elemdisplay = { BODY: "block" },

		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: 0,
			fontWeight: 400
		},

		cssExpand = [ "Top", "Right", "Bottom", "Left" ],
		cssPrefixes = [ "Webkit", "O", "Moz", "ms" ];

	// return a css property mapped to a potentially vendor prefixed property
	function vendorPropName( style, name ) {

		// shortcut for names that are not vendor prefixed
		if ( name in style ) {
			return name;
		}

		// check for vendor prefixed names
		var capName = name.charAt(0).toUpperCase() + name.slice(1),
			origName = name,
			i = cssPrefixes.length;

		while ( i-- ) {
			name = cssPrefixes[ i ] + capName;
			if ( name in style ) {
				return name;
			}
		}

		return origName;
	}

	function isHidden( elem, el ) {
		// isHidden might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;
		return jQuery.css( elem, "display" ) === "none" || !jQuery.contains( elem.ownerDocument, elem );
	}

	// NOTE: we've included the "window" in window.getComputedStyle
	// because jsdom on node.js will break without it.
	function getStyles( elem ) {
		return window.getComputedStyle( elem, null );
	}

	function showHide( elements, show ) {
		var display, elem, hidden,
			values = [],
			index = 0,
			length = elements.length;

		for ( ; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}

			values[ index ] = data_priv.get( elem, "olddisplay" );
			display = elem.style.display;
			if ( show ) {
				// Reset the inline display of this element to learn if it is
				// being hidden by cascaded rules or not
				if ( !values[ index ] && display === "none" ) {
					elem.style.display = "";
				}

				// Set elements which have been overridden with display: none
				// in a stylesheet to whatever the default browser style is
				// for such an element
				if ( elem.style.display === "" && isHidden( elem ) ) {
					values[ index ] = data_priv.access( elem, "olddisplay", css_defaultDisplay(elem.nodeName) );
				}
			} else {

				if ( !values[ index ] ) {
					hidden = isHidden( elem );

					if ( display && display !== "none" || !hidden ) {
						data_priv.set( elem, "olddisplay", hidden ? display : jQuery.css(elem, "display") );
					}
				}
			}
		}

		// Set the display of most of the elements in a second loop
		// to avoid the constant reflow
		for ( index = 0; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}
			if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
				elem.style.display = show ? values[ index ] || "" : "none";
			}
		}

		return elements;
	}

	jQuery.fn.extend({
		css: function( name, value ) {
			return jQuery.access( this, function( elem, name, value ) {
				var styles, len,
					map = {},
					i = 0;

				if ( jQuery.isArray( name ) ) {
					styles = getStyles( elem );
					len = name.length;

					for ( ; i < len; i++ ) {
						map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
					}

					return map;
				}

				return value !== undefined ?
					jQuery.style( elem, name, value ) :
					jQuery.css( elem, name );
			}, name, value, arguments.length > 1 );
		},
		show: function() {
			return showHide( this, true );
		},
		hide: function() {
			return showHide( this );
		},
		toggle: function( state ) {
			if ( typeof state === "boolean" ) {
				return state ? this.show() : this.hide();
			}

			return this.each(function() {
				if ( isHidden( this ) ) {
					jQuery( this ).show();
				} else {
					jQuery( this ).hide();
				}
			});
		}
	});

	jQuery.extend({
		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function( elem, computed ) {
					if ( computed ) {
						// We should always get a number back from opacity
						var ret = curCSS( elem, "opacity" );
						return ret === "" ? "1" : ret;
					}
				}
			}
		},

		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"columnCount": true,
			"fillOpacity": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},

		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {
			// normalize float css property
			"float": "cssFloat"
		},

		// Get and set the style property on a DOM Node
		style: function( elem, name, value, extra ) {
			// Don't set styles on text and comment nodes
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
				return;
			}

			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = jQuery.camelCase( name ),
				style = elem.style;

			name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( style, origName ) );

			// gets hook for the prefixed version
			// followed by the unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// Check if we're setting a value
			if ( value !== undefined ) {
				type = typeof value;

				// convert relative number strings (+= or -=) to relative numbers. #7345
				if ( type === "string" && (ret = rrelNum.exec( value )) ) {
					value = ( ret[1] + 1 ) * ret[2] + parseFloat( jQuery.css( elem, name ) );
					// Fixes bug #9237
					type = "number";
				}

				// Make sure that NaN and null values aren't set. See: #7116
				if ( value == null || type === "number" && isNaN( value ) ) {
					return;
				}

				// If a number was passed in, add 'px' to the (except for certain CSS properties)
				if ( type === "number" && !jQuery.cssNumber[ origName ] ) {
					value += "px";
				}

				// Fixes #8908, it can be done more correctly by specifying setters in cssHooks,
				// but it would mean to define eight (for every problematic property) identical functions
				if ( !jQuery.support.clearCloneStyle && value === "" && name.indexOf("background") === 0 ) {
					style[ name ] = "inherit";
				}

				// If a hook was provided, use that value, otherwise just set the specified value
				if ( !hooks || !("set" in hooks) || (value = hooks.set( elem, value, extra )) !== undefined ) {
					style[ name ] = value;
				}

			} else {
				// If a hook was provided get the non-computed value from there
				if ( hooks && "get" in hooks && (ret = hooks.get( elem, false, extra )) !== undefined ) {
					return ret;
				}

				// Otherwise just get the value from the style object
				return style[ name ];
			}
		},

		css: function( elem, name, extra, styles ) {
			var val, num, hooks,
				origName = jQuery.camelCase( name );

			// Make sure that we're working with the right name
			name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( elem.style, origName ) );

			// gets hook for the prefixed version
			// followed by the unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// If a hook was provided get the computed value from there
			if ( hooks && "get" in hooks ) {
				val = hooks.get( elem, true, extra );
			}

			// Otherwise, if a way to get the computed value exists, use that
			if ( val === undefined ) {
				val = curCSS( elem, name, styles );
			}

			//convert "normal" to computed value
			if ( val === "normal" && name in cssNormalTransform ) {
				val = cssNormalTransform[ name ];
			}

			// Return, converting to number if forced or a qualifier was provided and val looks numeric
			if ( extra === "" || extra ) {
				num = parseFloat( val );
				return extra === true || jQuery.isNumeric( num ) ? num || 0 : val;
			}
			return val;
		}
	});

	curCSS = function( elem, name, _computed ) {
		var width, minWidth, maxWidth,
			computed = _computed || getStyles( elem ),

			// Support: IE9
			// getPropertyValue is only needed for .css('filter') in IE9, see #12537
			ret = computed ? computed.getPropertyValue( name ) || computed[ name ] : undefined,
			style = elem.style;

		if ( computed ) {

			if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
				ret = jQuery.style( elem, name );
			}

			// Support: Safari 5.1
			// A tribute to the "awesome hack by Dean Edwards"
			// Safari 5.1.7 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
			// this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values
			if ( rnumnonpx.test( ret ) && rmargin.test( name ) ) {

				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		return ret;
	};


	function setPositiveNumber( elem, value, subtract ) {
		var matches = rnumsplit.exec( value );
		return matches ?
			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max( 0, matches[ 1 ] - ( subtract || 0 ) ) + ( matches[ 2 ] || "px" ) :
			value;
	}

	function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
		var i = extra === ( isBorderBox ? "border" : "content" ) ?
			// If we already have the right measurement, avoid augmentation
			4 :
			// Otherwise initialize for horizontal or vertical properties
			name === "width" ? 1 : 0,

			val = 0;

		for ( ; i < 4; i += 2 ) {
			// both box models exclude margin, so add it if we want it
			if ( extra === "margin" ) {
				val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
			}

			if ( isBorderBox ) {
				// border-box includes padding, so remove it if we want content
				if ( extra === "content" ) {
					val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}

				// at this point, extra isn't border nor margin, so remove border
				if ( extra !== "margin" ) {
					val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			} else {
				// at this point, extra isn't content, so add padding
				val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

				// at this point, extra isn't content nor padding, so add border
				if ( extra !== "padding" ) {
					val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}

		return val;
	}

	function getWidthOrHeight( elem, name, extra ) {

		// Start with offset property, which is equivalent to the border-box value
		var valueIsBorderBox = true,
			val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
			styles = getStyles( elem ),
			isBorderBox = jQuery.support.boxSizing && jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// some non-html elements return undefined for offsetWidth, so check for null/undefined
		// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
		// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
		if ( val <= 0 || val == null ) {
			// Fall back to computed then uncomputed css if necessary
			val = curCSS( elem, name, styles );
			if ( val < 0 || val == null ) {
				val = elem.style[ name ];
			}

			// Computed unit is not pixels. Stop here and return.
			if ( rnumnonpx.test(val) ) {
				return val;
			}

			// we need the check for style in case a browser which returns unreliable values
			// for getComputedStyle silently falls back to the reliable elem.style
			valueIsBorderBox = isBorderBox && ( jQuery.support.boxSizingReliable || val === elem.style[ name ] );

			// Normalize "", auto, and prepare for extra
			val = parseFloat( val ) || 0;
		}

		// use the active box-sizing model to add/subtract irrelevant styles
		return ( val +
			augmentWidthOrHeight(
				elem,
				name,
				extra || ( isBorderBox ? "border" : "content" ),
				valueIsBorderBox,
				styles
			)
		) + "px";
	}

	// Try to determine the default display value of an element
	function css_defaultDisplay( nodeName ) {
		var doc = document,
			display = elemdisplay[ nodeName ];

		if ( !display ) {
			display = actualDisplay( nodeName, doc );

			// If the simple way fails, read from inside an iframe
			if ( display === "none" || !display ) {
				// Use the already-created iframe if possible
				iframe = ( iframe ||
					jQuery("<iframe frameborder='0' width='0' height='0'/>")
					.css( "cssText", "display:block !important" )
				).appendTo( doc.documentElement );

				// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
				doc = ( iframe[0].contentWindow || iframe[0].contentDocument ).document;
				doc.write("<!doctype html><html><body>");
				doc.close();

				display = actualDisplay( nodeName, doc );
				iframe.detach();
			}

			// Store the correct default display
			elemdisplay[ nodeName ] = display;
		}

		return display;
	}

	// Called ONLY from within css_defaultDisplay
	function actualDisplay( name, doc ) {
		var elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),
			display = jQuery.css( elem[0], "display" );
		elem.remove();
		return display;
	}

	jQuery.each([ "height", "width" ], function( i, name ) {
		jQuery.cssHooks[ name ] = {
			get: function( elem, computed, extra ) {
				if ( computed ) {
					// certain elements can have dimension info if we invisibly show them
					// however, it must have a current display style that would benefit from this
					return elem.offsetWidth === 0 && rdisplayswap.test( jQuery.css( elem, "display" ) ) ?
						jQuery.swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						}) :
						getWidthOrHeight( elem, name, extra );
				}
			},

			set: function( elem, value, extra ) {
				var styles = extra && getStyles( elem );
				return setPositiveNumber( elem, value, extra ?
					augmentWidthOrHeight(
						elem,
						name,
						extra,
						jQuery.support.boxSizing && jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
						styles
					) : 0
				);
			}
		};
	});

	// These hooks cannot be added until DOM ready because the support test
	// for it is not run until after DOM ready
	jQuery(function() {
		// Support: Android 2.3
		if ( !jQuery.support.reliableMarginRight ) {
			jQuery.cssHooks.marginRight = {
				get: function( elem, computed ) {
					if ( computed ) {
						// Support: Android 2.3
						// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
						// Work around by temporarily setting element display to inline-block
						return jQuery.swap( elem, { "display": "inline-block" },
							curCSS, [ elem, "marginRight" ] );
					}
				}
			};
		}

		// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
		// getComputedStyle returns percent when specified for top/left/bottom/right
		// rather than make the css module depend on the offset module, we just check for it here
		if ( !jQuery.support.pixelPosition && jQuery.fn.position ) {
			jQuery.each( [ "top", "left" ], function( i, prop ) {
				jQuery.cssHooks[ prop ] = {
					get: function( elem, computed ) {
						if ( computed ) {
							computed = curCSS( elem, prop );
							// if curCSS returns percentage, fallback to offset
							return rnumnonpx.test( computed ) ?
								jQuery( elem ).position()[ prop ] + "px" :
								computed;
						}
					}
				};
			});
		}

	});

	if ( jQuery.expr && jQuery.expr.filters ) {
		jQuery.expr.filters.hidden = function( elem ) {
			// Support: Opera <= 12.12
			// Opera reports offsetWidths and offsetHeights less than zero on some elements
			return elem.offsetWidth <= 0 && elem.offsetHeight <= 0;
		};

		jQuery.expr.filters.visible = function( elem ) {
			return !jQuery.expr.filters.hidden( elem );
		};
	}

	// These hooks are used by animate to expand properties
	jQuery.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function( prefix, suffix ) {
		jQuery.cssHooks[ prefix + suffix ] = {
			expand: function( value ) {
				var i = 0,
					expanded = {},

					// assumes a single number if not a string
					parts = typeof value === "string" ? value.split(" ") : [ value ];

				for ( ; i < 4; i++ ) {
					expanded[ prefix + cssExpand[ i ] + suffix ] =
						parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
				}

				return expanded;
			}
		};

		if ( !rmargin.test( prefix ) ) {
			jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
		}
	});
	var r20 = /%20/g,
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;

	jQuery.fn.extend({
		serialize: function() {
			return jQuery.param( this.serializeArray() );
		},
		serializeArray: function() {
			return this.map(function(){
				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop( this, "elements" );
				return elements ? jQuery.makeArray( elements ) : this;
			})
			.filter(function(){
				var type = this.type;
				// Use .is(":disabled") so that fieldset[disabled] works
				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !manipulation_rcheckableType.test( type ) );
			})
			.map(function( i, elem ){
				var val = jQuery( this ).val();

				return val == null ?
					null :
					jQuery.isArray( val ) ?
						jQuery.map( val, function( val ){
							return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
						}) :
						{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			}).get();
		}
	});

	//Serialize an array of form elements or a set of
	//key/values into a query string
	jQuery.param = function( a, traditional ) {
		var prefix,
			s = [],
			add = function( key, value ) {
				// If value is a function, invoke it and return its value
				value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
				s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
			};

		// Set traditional to true for jQuery <= 1.3.2 behavior.
		if ( traditional === undefined ) {
			traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
		}

		// If an array was passed in, assume that it is an array of form elements.
		if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			});

		} else {
			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}

		// Return the resulting serialization
		return s.join( "&" ).replace( r20, "+" );
	};

	function buildParams( prefix, obj, traditional, add ) {
		var name;

		if ( jQuery.isArray( obj ) ) {
			// Serialize array item.
			jQuery.each( obj, function( i, v ) {
				if ( traditional || rbracket.test( prefix ) ) {
					// Treat each array item as a scalar.
					add( prefix, v );

				} else {
					// Item is non-scalar (array or object), encode its numeric index.
					buildParams( prefix + "[" + ( typeof v === "object" ? i : "" ) + "]", v, traditional, add );
				}
			});

		} else if ( !traditional && jQuery.type( obj ) === "object" ) {
			// Serialize object item.
			for ( name in obj ) {
				buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
			}

		} else {
			// Serialize scalar item.
			add( prefix, obj );
		}
	}
	jQuery.each( ("blur focus focusin focusout load resize scroll unload click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup error contextmenu").split(" "), function( i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	});

	jQuery.fn.extend({
		hover: function( fnOver, fnOut ) {
			return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
		},

		bind: function( types, data, fn ) {
			return this.on( types, null, data, fn );
		},
		unbind: function( types, fn ) {
			return this.off( types, null, fn );
		},

		delegate: function( selector, types, data, fn ) {
			return this.on( types, selector, data, fn );
		},
		undelegate: function( selector, types, fn ) {
			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ? this.off( selector, "**" ) : this.off( types, selector || "**", fn );
		}
	});
	var
		// Document location
		ajaxLocParts,
		ajaxLocation,

		ajax_nonce = jQuery.now(),

		ajax_rquery = /\?/,
		rhash = /#.*$/,
		rts = /([?&])_=[^&]*/,
		rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,
		rurl = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,

		// Keep a copy of the old load method
		_load = jQuery.fn.load,

		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
		prefilters = {},

		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
		transports = {},

		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat("*");

	// #8138, IE may throw an exception when accessing
	// a field from window.location if document.domain has been set
	try {
		ajaxLocation = location.href;
	} catch( e ) {
		// Use the href attribute of an A element
		// since IE will modify it given document.location
		ajaxLocation = document.createElement( "a" );
		ajaxLocation.href = "";
		ajaxLocation = ajaxLocation.href;
	}

	// Segment location into parts
	ajaxLocParts = rurl.exec( ajaxLocation.toLowerCase() ) || [];

	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports( structure ) {

		// dataTypeExpression is optional and defaults to "*"
		return function( dataTypeExpression, func ) {

			if ( typeof dataTypeExpression !== "string" ) {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}

			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match( core_rnotwhite ) || [];

			if ( jQuery.isFunction( func ) ) {
				// For each dataType in the dataTypeExpression
				while ( (dataType = dataTypes[i++]) ) {
					// Prepend if requested
					if ( dataType[0] === "+" ) {
						dataType = dataType.slice( 1 ) || "*";
						(structure[ dataType ] = structure[ dataType ] || []).unshift( func );

					// Otherwise append
					} else {
						(structure[ dataType ] = structure[ dataType ] || []).push( func );
					}
				}
			}
		};
	}

	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

		var inspected = {},
			seekingTransport = ( structure === transports );

		function inspect( dataType ) {
			var selected;
			inspected[ dataType ] = true;
			jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
				var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
				if( typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[ dataTypeOrTransport ] ) {
					options.dataTypes.unshift( dataTypeOrTransport );
					inspect( dataTypeOrTransport );
					return false;
				} else if ( seekingTransport ) {
					return !( selected = dataTypeOrTransport );
				}
			});
			return selected;
		}

		return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	}

	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend( target, src ) {
		var key, deep,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};

		for ( key in src ) {
			if ( src[ key ] !== undefined ) {
				( flatOptions[ key ] ? target : ( deep || (deep = {}) ) )[ key ] = src[ key ];
			}
		}
		if ( deep ) {
			jQuery.extend( true, target, deep );
		}

		return target;
	}

	jQuery.fn.load = function( url, params, callback ) {
		if ( typeof url !== "string" && _load ) {
			return _load.apply( this, arguments );
		}

		var selector, type, response,
			self = this,
			off = url.indexOf(" ");

		if ( off >= 0 ) {
			selector = url.slice( off );
			url = url.slice( 0, off );
		}

		// If it's a function
		if ( jQuery.isFunction( params ) ) {

			// We assume that it's the callback
			callback = params;
			params = undefined;

		// Otherwise, build a param string
		} else if ( params && typeof params === "object" ) {
			type = "POST";
		}

		// If we have elements to modify, make the request
		if ( self.length > 0 ) {
			jQuery.ajax({
				url: url,

				// if "type" variable is undefined, then "GET" method will be used
				type: type,
				dataType: "html",
				data: params
			}).done(function( responseText ) {

				// Save response for use in complete callback
				response = arguments;

				self.html( selector ?

					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery("<div>").append( jQuery.parseHTML( responseText ) ).find( selector ) :

					// Otherwise use the full result
					responseText );

			}).complete( callback && function( jqXHR, status ) {
				self.each( callback, response || [ jqXHR.responseText, status, jqXHR ] );
			});
		}

		return this;
	};

	// Attach a bunch of functions for handling common AJAX events
	jQuery.each( [ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function( i, type ){
		jQuery.fn[ type ] = function( fn ){
			return this.on( type, fn );
		};
	});

	jQuery.extend({

		// Counter for holding the number of active queries
		active: 0,

		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},

		ajaxSettings: {
			url: ajaxLocation,
			type: "GET",
			isLocal: rlocalProtocol.test( ajaxLocParts[ 1 ] ),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/

			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},

			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},

			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},

			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {

				// Convert anything to text
				"* text": String,

				// Text to html (true = no transformation)
				"text html": true,

				// Evaluate text as a json expression
				"text json": jQuery.parseJSON,

				// Parse text as xml
				"text xml": jQuery.parseXML
			},

			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},

		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function( target, settings ) {
			return settings ?

				// Building a settings object
				ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

				// Extending ajaxSettings
				ajaxExtend( jQuery.ajaxSettings, target );
		},

		ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
		ajaxTransport: addToPrefiltersOrTransports( transports ),

		// Main method
		ajax: function( url, options ) {

			// If url is an object, simulate pre-1.5 signature
			if ( typeof url === "object" ) {
				options = url;
				url = undefined;
			}

			// Force options to be an object
			options = options || {};

			var transport,
				// URL without anti-cache param
				cacheURL,
				// Response headers
				responseHeadersString,
				responseHeaders,
				// timeout handle
				timeoutTimer,
				// Cross-domain detection vars
				parts,
				// To know if global events are to be dispatched
				fireGlobals,
				// Loop variable
				i,
				// Create the final options object
				s = jQuery.ajaxSetup( {}, options ),
				// Callbacks context
				callbackContext = s.context || s,
				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context && ( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,
				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks("once memory"),
				// Status-dependent callbacks
				statusCode = s.statusCode || {},
				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},
				// The jqXHR state
				state = 0,
				// Default abort message
				strAbort = "canceled",
				// Fake xhr
				jqXHR = {
					readyState: 0,

					// Builds headers hashtable if needed
					getResponseHeader: function( key ) {
						var match;
						if ( state === 2 ) {
							if ( !responseHeaders ) {
								responseHeaders = {};
								while ( (match = rheaders.exec( responseHeadersString )) ) {
									responseHeaders[ match[1].toLowerCase() ] = match[ 2 ];
								}
							}
							match = responseHeaders[ key.toLowerCase() ];
						}
						return match == null ? null : match;
					},

					// Raw string
					getAllResponseHeaders: function() {
						return state === 2 ? responseHeadersString : null;
					},

					// Caches the header
					setRequestHeader: function( name, value ) {
						var lname = name.toLowerCase();
						if ( !state ) {
							name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},

					// Overrides response content-type header
					overrideMimeType: function( type ) {
						if ( !state ) {
							s.mimeType = type;
						}
						return this;
					},

					// Status-dependent callbacks
					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( state < 2 ) {
								for ( code in map ) {
									// Lazy-add the new callback in a way that preserves old ones
									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							} else {
								// Execute the appropriate callbacks
								jqXHR.always( map[ jqXHR.status ] );
							}
						}
						return this;
					},

					// Cancel the request
					abort: function( statusText ) {
						var finalText = statusText || strAbort;
						if ( transport ) {
							transport.abort( finalText );
						}
						done( 0, finalText );
						return this;
					}
				};

			// Attach deferreds
			deferred.promise( jqXHR ).complete = completeDeferred.add;
			jqXHR.success = jqXHR.done;
			jqXHR.error = jqXHR.fail;

			// Remove hash character (#7531: and string promotion)
			// Add protocol if not provided (prefilters might expect it)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ( ( url || s.url || ajaxLocation ) + "" ).replace( rhash, "" )
				.replace( rprotocol, ajaxLocParts[ 1 ] + "//" );

			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;

			// Extract dataTypes list
			s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( core_rnotwhite ) || [""];

			// A cross-domain request is in order when we have a protocol:host:port mismatch
			if ( s.crossDomain == null ) {
				parts = rurl.exec( s.url.toLowerCase() );
				s.crossDomain = !!( parts &&
					( parts[ 1 ] !== ajaxLocParts[ 1 ] || parts[ 2 ] !== ajaxLocParts[ 2 ] ||
						( parts[ 3 ] || ( parts[ 1 ] === "http:" ? "80" : "443" ) ) !==
							( ajaxLocParts[ 3 ] || ( ajaxLocParts[ 1 ] === "http:" ? "80" : "443" ) ) )
				);
			}

			// Convert data if not already a string
			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}

			// Apply prefilters
			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

			// If request was aborted inside a prefilter, stop there
			if ( state === 2 ) {
				return jqXHR;
			}

			// We can fire global events as of now if asked to
			fireGlobals = s.global;

			// Watch for a new set of requests
			if ( fireGlobals && jQuery.active++ === 0 ) {
				jQuery.event.trigger("ajaxStart");
			}

			// Uppercase the type
			s.type = s.type.toUpperCase();

			// Determine if request has content
			s.hasContent = !rnoContent.test( s.type );

			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			cacheURL = s.url;

			// More options handling for requests with no content
			if ( !s.hasContent ) {

				// If data is available, append data to url
				if ( s.data ) {
					cacheURL = ( s.url += ( ajax_rquery.test( cacheURL ) ? "&" : "?" ) + s.data );
					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}

				// Add anti-cache in url if needed
				if ( s.cache === false ) {
					s.url = rts.test( cacheURL ) ?

						// If there is already a '_' parameter, set its value
						cacheURL.replace( rts, "$1_=" + ajax_nonce++ ) :

						// Otherwise add one to the end
						cacheURL + ( ajax_rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ajax_nonce++;
				}
			}

			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if ( s.ifModified ) {
				if ( jQuery.lastModified[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
				}
				if ( jQuery.etag[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
				}
			}

			// Set the correct header, if data is being sent
			if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
				jqXHR.setRequestHeader( "Content-Type", s.contentType );
			}

			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[0] ] ?
					s.accepts[ s.dataTypes[0] ] + ( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
					s.accepts[ "*" ]
			);

			// Check for headers option
			for ( i in s.headers ) {
				jqXHR.setRequestHeader( i, s.headers[ i ] );
			}

			// Allow custom headers/mimetypes and early abort
			if ( s.beforeSend && ( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {
				// Abort if not done already and return
				return jqXHR.abort();
			}

			// aborting is no longer a cancellation
			strAbort = "abort";

			// Install callbacks on deferreds
			for ( i in { success: 1, error: 1, complete: 1 } ) {
				jqXHR[ i ]( s[ i ] );
			}

			// Get transport
			transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

			// If no transport, we auto-abort
			if ( !transport ) {
				done( -1, "No Transport" );
			} else {
				jqXHR.readyState = 1;

				// Send global event
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
				}
				// Timeout
				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = setTimeout(function() {
						jqXHR.abort("timeout");
					}, s.timeout );
				}

				try {
					state = 1;
					transport.send( requestHeaders, done );
				} catch ( e ) {
					// Propagate exception as error if not done
					if ( state < 2 ) {
						done( -1, e );
					// Simply rethrow otherwise
					} else {
						throw e;
					}
				}
			}

			// Callback for when everything is done
			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;

				// Called once
				if ( state === 2 ) {
					return;
				}

				// State is "done" now
				state = 2;

				// Clear timeout if it exists
				if ( timeoutTimer ) {
					clearTimeout( timeoutTimer );
				}

				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;

				// Cache response headers
				responseHeadersString = headers || "";

				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;

				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;

				// Get response data
				if ( responses ) {
					response = ajaxHandleResponses( s, jqXHR, responses );
				}

				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert( s, response, jqXHR, isSuccess );

				// If successful, handle type chaining
				if ( isSuccess ) {

					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if ( s.ifModified ) {
						modified = jqXHR.getResponseHeader("Last-Modified");
						if ( modified ) {
							jQuery.lastModified[ cacheURL ] = modified;
						}
						modified = jqXHR.getResponseHeader("etag");
						if ( modified ) {
							jQuery.etag[ cacheURL ] = modified;
						}
					}

					// if no content
					if ( status === 204 || s.type === "HEAD" ) {
						statusText = "nocontent";

					// if not modified
					} else if ( status === 304 ) {
						statusText = "notmodified";

					// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {
					// We extract error from statusText
					// then normalize statusText and status for non-aborts
					error = statusText;
					if ( status || !statusText ) {
						statusText = "error";
						if ( status < 0 ) {
							status = 0;
						}
					}
				}

				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = ( nativeStatusText || statusText ) + "";

				// Success/Error
				if ( isSuccess ) {
					deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
				} else {
					deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
				}

				// Status-dependent callbacks
				jqXHR.statusCode( statusCode );
				statusCode = undefined;

				if ( fireGlobals ) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
						[ jqXHR, s, isSuccess ? success : error ] );
				}

				// Complete
				completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
					// Handle the global AJAX counter
					if ( !( --jQuery.active ) ) {
						jQuery.event.trigger("ajaxStop");
					}
				}
			}

			return jqXHR;
		},

		getJSON: function( url, data, callback ) {
			return jQuery.get( url, data, callback, "json" );
		},

		getScript: function( url, callback ) {
			return jQuery.get( url, undefined, callback, "script" );
		}
	});

	jQuery.each( [ "get", "post" ], function( i, method ) {
		jQuery[ method ] = function( url, data, callback, type ) {
			// shift arguments if data argument was omitted
			if ( jQuery.isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}

			return jQuery.ajax({
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			});
		};
	});

	/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses( s, jqXHR, responses ) {

		var ct, type, finalDataType, firstDataType,
			contents = s.contents,
			dataTypes = s.dataTypes;

		// Remove auto dataType and get content-type in the process
		while( dataTypes[ 0 ] === "*" ) {
			dataTypes.shift();
			if ( ct === undefined ) {
				ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
			}
		}

		// Check if we're dealing with a known content-type
		if ( ct ) {
			for ( type in contents ) {
				if ( contents[ type ] && contents[ type ].test( ct ) ) {
					dataTypes.unshift( type );
					break;
				}
			}
		}

		// Check to see if we have a response for the expected dataType
		if ( dataTypes[ 0 ] in responses ) {
			finalDataType = dataTypes[ 0 ];
		} else {
			// Try convertible dataTypes
			for ( type in responses ) {
				if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[0] ] ) {
					finalDataType = type;
					break;
				}
				if ( !firstDataType ) {
					firstDataType = type;
				}
			}
			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}

		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if ( finalDataType ) {
			if ( finalDataType !== dataTypes[ 0 ] ) {
				dataTypes.unshift( finalDataType );
			}
			return responses[ finalDataType ];
		}
	}

	/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */
	function ajaxConvert( s, response, jqXHR, isSuccess ) {
		var conv2, current, conv, tmp, prev,
			converters = {},
			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();

		// Create converters map with lowercased keys
		if ( dataTypes[ 1 ] ) {
			for ( conv in s.converters ) {
				converters[ conv.toLowerCase() ] = s.converters[ conv ];
			}
		}

		current = dataTypes.shift();

		// Convert to each sequential dataType
		while ( current ) {

			if ( s.responseFields[ current ] ) {
				jqXHR[ s.responseFields[ current ] ] = response;
			}

			// Apply the dataFilter if provided
			if ( !prev && isSuccess && s.dataFilter ) {
				response = s.dataFilter( response, s.dataType );
			}

			prev = current;
			current = dataTypes.shift();

			if ( current ) {

			// There's only work to do if current dataType is non-auto
				if ( current === "*" ) {

					current = prev;

				// Convert response if prev dataType is non-auto and differs from current
				} else if ( prev !== "*" && prev !== current ) {

					// Seek a direct converter
					conv = converters[ prev + " " + current ] || converters[ "* " + current ];

					// If none found, seek a pair
					if ( !conv ) {
						for ( conv2 in converters ) {

							// If conv2 outputs current
							tmp = conv2.split( " " );
							if ( tmp[ 1 ] === current ) {

								// If prev can be converted to accepted input
								conv = converters[ prev + " " + tmp[ 0 ] ] ||
									converters[ "* " + tmp[ 0 ] ];
								if ( conv ) {
									// Condense equivalence converters
									if ( conv === true ) {
										conv = converters[ conv2 ];

									// Otherwise, insert the intermediate dataType
									} else if ( converters[ conv2 ] !== true ) {
										current = tmp[ 0 ];
										dataTypes.unshift( tmp[ 1 ] );
									}
									break;
								}
							}
						}
					}

					// Apply converter (if not an equivalence)
					if ( conv !== true ) {

						// Unless errors are allowed to bubble, catch and return them
						if ( conv && s[ "throws" ] ) {
							response = conv( response );
						} else {
							try {
								response = conv( response );
							} catch ( e ) {
								return { state: "parsererror", error: conv ? e : "No conversion from " + prev + " to " + current };
							}
						}
					}
				}
			}
		}

		return { state: "success", data: response };
	}
	// Install script dataType
	jQuery.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /(?:java|ecma)script/
		},
		converters: {
			"text script": function( text ) {
				jQuery.globalEval( text );
				return text;
			}
		}
	});

	// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
		}
	});

	// Bind script tag hack transport
	jQuery.ajaxTransport( "script", function( s ) {
		// This transport only deals with cross domain requests
		if ( s.crossDomain ) {
			var script, callback;
			return {
				send: function( _, complete ) {
					script = jQuery("<script>").prop({
						async: true,
						charset: s.scriptCharset,
						src: s.url
					}).on(
						"load error",
						callback = function( evt ) {
							script.remove();
							callback = null;
							if ( evt ) {
								complete( evt.type === "error" ? 404 : 200, evt.type );
							}
						}
					);
					document.head.appendChild( script[ 0 ] );
				},
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	});
	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;

	// Default jsonp settings
	jQuery.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( ajax_nonce++ ) );
			this[ callback ] = true;
			return callback;
		}
	});

	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
				"url" :
				typeof s.data === "string" && !( s.contentType || "" ).indexOf("application/x-www-form-urlencoded") && rjsonp.test( s.data ) && "data"
			);

		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
				s.jsonpCallback() :
				s.jsonpCallback;

			// Insert callback into url or form data
			if ( jsonProp ) {
				s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
			} else if ( s.jsonp !== false ) {
				s.url += ( ajax_rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
			}

			// Use data converter to retrieve json after script execution
			s.converters["script json"] = function() {
				if ( !responseContainer ) {
					jQuery.error( callbackName + " was not called" );
				}
				return responseContainer[ 0 ];
			};

			// force json dataType
			s.dataTypes[ 0 ] = "json";

			// Install callback
			overwritten = window[ callbackName ];
			window[ callbackName ] = function() {
				responseContainer = arguments;
			};

			// Clean-up function (fires after converters)
			jqXHR.always(function() {
				// Restore preexisting value
				window[ callbackName ] = overwritten;

				// Save back as free
				if ( s[ callbackName ] ) {
					// make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;

					// save the callback name for future use
					oldCallbacks.push( callbackName );
				}

				// Call if it was a function and we have a response
				if ( responseContainer && jQuery.isFunction( overwritten ) ) {
					overwritten( responseContainer[ 0 ] );
				}

				responseContainer = overwritten = undefined;
			});

			// Delegate to script
			return "script";
		}
	});
	jQuery.ajaxSettings.xhr = function() {
		try {
			return new XMLHttpRequest();
		} catch( e ) {}
	};

	var xhrSupported = jQuery.ajaxSettings.xhr(),
		xhrSuccessStatus = {
			// file protocol always yields status code 0, assume 200
			0: 200,
			// Support: IE9
			// #1450: sometimes IE returns 1223 when it should be 204
			1223: 204
		},
		// Support: IE9
		// We need to keep track of outbound xhr and abort them manually
		// because IE is not smart enough to do it all by itself
		xhrId = 0,
		xhrCallbacks = {};

	if ( window.ActiveXObject ) {
		jQuery( window ).on( "unload", function() {
			for( var key in xhrCallbacks ) {
				xhrCallbacks[ key ]();
			}
			xhrCallbacks = undefined;
		});
	}

	jQuery.support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	jQuery.support.ajax = xhrSupported = !!xhrSupported;

	jQuery.ajaxTransport(function( options ) {
		var callback;
		// Cross domain only allowed if supported through XMLHttpRequest
		if ( jQuery.support.cors || xhrSupported && !options.crossDomain ) {
			return {
				send: function( headers, complete ) {
					var i, id,
						xhr = options.xhr();
					xhr.open( options.type, options.url, options.async, options.username, options.password );
					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}
					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}
					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers["X-Requested-With"] ) {
						headers["X-Requested-With"] = "XMLHttpRequest";
					}
					// Set headers
					for ( i in headers ) {
						xhr.setRequestHeader( i, headers[ i ] );
					}
					// Callback
					callback = function( type ) {
						return function() {
							if ( callback ) {
								delete xhrCallbacks[ id ];
								callback = xhr.onload = xhr.onerror = null;
								if ( type === "abort" ) {
									xhr.abort();
								} else if ( type === "error" ) {
									complete(
										// file protocol always yields status 0, assume 404
										xhr.status || 404,
										xhr.statusText
									);
								} else {
									complete(
										xhrSuccessStatus[ xhr.status ] || xhr.status,
										xhr.statusText,
										// Support: IE9
										// #11426: When requesting binary data, IE9 will throw an exception
										// on any attempt to access responseText
										typeof xhr.responseText === "string" ? {
											text: xhr.responseText
										} : undefined,
										xhr.getAllResponseHeaders()
									);
								}
							}
						};
					};
					// Listen to events
					xhr.onload = callback();
					xhr.onerror = callback("error");
					// Create the abort callback
					callback = xhrCallbacks[( id = xhrId++ )] = callback("abort");
					// Do send the request
					// This may raise an exception which is actually
					// handled in jQuery.ajax (so no try/catch here)
					xhr.send( options.hasContent && options.data || null );
				},
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	});
	var fxNow, timerId,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rfxnum = new RegExp( "^(?:([+-])=|)(" + core_pnum + ")([a-z%]*)$", "i" ),
		rrun = /queueHooks$/,
		animationPrefilters = [ defaultPrefilter ],
		tweeners = {
			"*": [function( prop, value ) {
				var tween = this.createTween( prop, value ),
					target = tween.cur(),
					parts = rfxnum.exec( value ),
					unit = parts && parts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

					// Starting value computation is required for potential unit mismatches
					start = ( jQuery.cssNumber[ prop ] || unit !== "px" && +target ) &&
						rfxnum.exec( jQuery.css( tween.elem, prop ) ),
					scale = 1,
					maxIterations = 20;

				if ( start && start[ 3 ] !== unit ) {
					// Trust units reported by jQuery.css
					unit = unit || start[ 3 ];

					// Make sure we update the tween properties later on
					parts = parts || [];

					// Iteratively approximate from a nonzero starting point
					start = +target || 1;

					do {
						// If previous iteration zeroed out, double until we get *something*
						// Use a string for doubling factor so we don't accidentally see scale as unchanged below
						scale = scale || ".5";

						// Adjust and apply
						start = start / scale;
						jQuery.style( tween.elem, prop, start + unit );

					// Update scale, tolerating zero or NaN from tween.cur()
					// And breaking the loop if scale is unchanged or perfect, or if we've just had enough
					} while ( scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations );
				}

				// Update tween properties
				if ( parts ) {
					start = tween.start = +start || +target || 0;
					tween.unit = unit;
					// If a +=/-= token was provided, we're doing a relative animation
					tween.end = parts[ 1 ] ?
						start + ( parts[ 1 ] + 1 ) * parts[ 2 ] :
						+parts[ 2 ];
				}

				return tween;
			}]
		};

	// Animations created synchronously will run synchronously
	function createFxNow() {
		setTimeout(function() {
			fxNow = undefined;
		});
		return ( fxNow = jQuery.now() );
	}

	function createTween( value, prop, animation ) {
		var tween,
			collection = ( tweeners[ prop ] || [] ).concat( tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( (tween = collection[ index ].call( animation, prop, value )) ) {

				// we're done with this property
				return tween;
			}
		}
	}

	function Animation( elem, properties, options ) {
		var result,
			stopped,
			index = 0,
			length = animationPrefilters.length,
			deferred = jQuery.Deferred().always( function() {
				// don't match elem in the :animated selector
				delete tick.elem;
			}),
			tick = function() {
				if ( stopped ) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),
					// archaic crash bug won't allow us to use 1 - ( 0.5 || 0 ) (#12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;

				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( percent );
				}

				deferred.notifyWith( elem, [ animation, percent, remaining ]);

				if ( percent < 1 && length ) {
					return remaining;
				} else {
					deferred.resolveWith( elem, [ animation ] );
					return false;
				}
			},
			animation = deferred.promise({
				elem: elem,
				props: jQuery.extend( {}, properties ),
				opts: jQuery.extend( true, { specialEasing: {} }, options ),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function( prop, end ) {
					var tween = jQuery.Tween( elem, animation.opts, prop, end,
							animation.opts.specialEasing[ prop ] || animation.opts.easing );
					animation.tweens.push( tween );
					return tween;
				},
				stop: function( gotoEnd ) {
					var index = 0,
						// if we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if ( stopped ) {
						return this;
					}
					stopped = true;
					for ( ; index < length ; index++ ) {
						animation.tweens[ index ].run( 1 );
					}

					// resolve when we played the last frame
					// otherwise, reject
					if ( gotoEnd ) {
						deferred.resolveWith( elem, [ animation, gotoEnd ] );
					} else {
						deferred.rejectWith( elem, [ animation, gotoEnd ] );
					}
					return this;
				}
			}),
			props = animation.props;

		propFilter( props, animation.opts.specialEasing );

		for ( ; index < length ; index++ ) {
			result = animationPrefilters[ index ].call( animation, elem, props, animation.opts );
			if ( result ) {
				return result;
			}
		}

		jQuery.map( props, createTween, animation );

		if ( jQuery.isFunction( animation.opts.start ) ) {
			animation.opts.start.call( elem, animation );
		}

		jQuery.fx.timer(
			jQuery.extend( tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			})
		);

		// attach callbacks from options
		return animation.progress( animation.opts.progress )
			.done( animation.opts.done, animation.opts.complete )
			.fail( animation.opts.fail )
			.always( animation.opts.always );
	}

	function propFilter( props, specialEasing ) {
		var index, name, easing, value, hooks;

		// camelCase, specialEasing and expand cssHook pass
		for ( index in props ) {
			name = jQuery.camelCase( index );
			easing = specialEasing[ name ];
			value = props[ index ];
			if ( jQuery.isArray( value ) ) {
				easing = value[ 1 ];
				value = props[ index ] = value[ 0 ];
			}

			if ( index !== name ) {
				props[ name ] = value;
				delete props[ index ];
			}

			hooks = jQuery.cssHooks[ name ];
			if ( hooks && "expand" in hooks ) {
				value = hooks.expand( value );
				delete props[ name ];

				// not quite $.extend, this wont overwrite keys already present.
				// also - reusing 'index' from above because we have the correct "name"
				for ( index in value ) {
					if ( !( index in props ) ) {
						props[ index ] = value[ index ];
						specialEasing[ index ] = easing;
					}
				}
			} else {
				specialEasing[ name ] = easing;
			}
		}
	}

	jQuery.Animation = jQuery.extend( Animation, {

		tweener: function( props, callback ) {
			if ( jQuery.isFunction( props ) ) {
				callback = props;
				props = [ "*" ];
			} else {
				props = props.split(" ");
			}

			var prop,
				index = 0,
				length = props.length;

			for ( ; index < length ; index++ ) {
				prop = props[ index ];
				tweeners[ prop ] = tweeners[ prop ] || [];
				tweeners[ prop ].unshift( callback );
			}
		},

		prefilter: function( callback, prepend ) {
			if ( prepend ) {
				animationPrefilters.unshift( callback );
			} else {
				animationPrefilters.push( callback );
			}
		}
	});

	function defaultPrefilter( elem, props, opts ) {
		/* jshint validthis: true */
		var prop, value, toggle, tween, hooks, oldfire,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHidden( elem ),
			dataShow = data_priv.get( elem, "fxshow" );

		// handle queue: false promises
		if ( !opts.queue ) {
			hooks = jQuery._queueHooks( elem, "fx" );
			if ( hooks.unqueued == null ) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if ( !hooks.unqueued ) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;

			anim.always(function() {
				// doing this makes sure that the complete handler will be called
				// before this completes
				anim.always(function() {
					hooks.unqueued--;
					if ( !jQuery.queue( elem, "fx" ).length ) {
						hooks.empty.fire();
					}
				});
			});
		}

		// height/width overflow pass
		if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {
			// Make sure that nothing sneaks out
			// Record all 3 overflow attributes because IE9-10 do not
			// change the overflow attribute when overflowX and
			// overflowY are set to the same value
			opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

			// Set display property to inline-block for height/width
			// animations on inline elements that are having width/height animated
			if ( jQuery.css( elem, "display" ) === "inline" &&
					jQuery.css( elem, "float" ) === "none" ) {

				style.display = "inline-block";
			}
		}

		if ( opts.overflow ) {
			style.overflow = "hidden";
			anim.always(function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			});
		}


		// show/hide pass
		for ( prop in props ) {
			value = props[ prop ];
			if ( rfxtypes.exec( value ) ) {
				delete props[ prop ];
				toggle = toggle || value === "toggle";
				if ( value === ( hidden ? "hide" : "show" ) ) {

					// If there is dataShow left over from a stopped hide or show and we are going to proceed with show, we should pretend to be hidden
					if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
						hidden = true;
					} else {
						continue;
					}
				}
				orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
			}
		}

		if ( !jQuery.isEmptyObject( orig ) ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = data_priv.access( elem, "fxshow", {} );
			}

			// store state if its toggle - enables .stop().toggle() to "reverse"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}
			if ( hidden ) {
				jQuery( elem ).show();
			} else {
				anim.done(function() {
					jQuery( elem ).hide();
				});
			}
			anim.done(function() {
				var prop;

				data_priv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			});
			for ( prop in orig ) {
				tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );

				if ( !( prop in dataShow ) ) {
					dataShow[ prop ] = tween.start;
					if ( hidden ) {
						tween.end = tween.start;
						tween.start = prop === "width" || prop === "height" ? 1 : 0;
					}
				}
			}
		}
	}

	function Tween( elem, options, prop, end, easing ) {
		return new Tween.prototype.init( elem, options, prop, end, easing );
	}
	jQuery.Tween = Tween;

	Tween.prototype = {
		constructor: Tween,
		init: function( elem, options, prop, end, easing, unit ) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || "swing";
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
		},
		cur: function() {
			var hooks = Tween.propHooks[ this.prop ];

			return hooks && hooks.get ?
				hooks.get( this ) :
				Tween.propHooks._default.get( this );
		},
		run: function( percent ) {
			var eased,
				hooks = Tween.propHooks[ this.prop ];

			if ( this.options.duration ) {
				this.pos = eased = jQuery.easing[ this.easing ](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = ( this.end - this.start ) * eased + this.start;

			if ( this.options.step ) {
				this.options.step.call( this.elem, this.now, this );
			}

			if ( hooks && hooks.set ) {
				hooks.set( this );
			} else {
				Tween.propHooks._default.set( this );
			}
			return this;
		}
	};

	Tween.prototype.init.prototype = Tween.prototype;

	Tween.propHooks = {
		_default: {
			get: function( tween ) {
				var result;

				if ( tween.elem[ tween.prop ] != null &&
					(!tween.elem.style || tween.elem.style[ tween.prop ] == null) ) {
					return tween.elem[ tween.prop ];
				}

				// passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails
				// so, simple values such as "10px" are parsed to Float.
				// complex values such as "rotate(1rad)" are returned as is.
				result = jQuery.css( tween.elem, tween.prop, "" );
				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function( tween ) {
				// use step hook for back compat - use cssHook if its there - use .style if its
				// available and use plain properties where available
				if ( jQuery.fx.step[ tween.prop ] ) {
					jQuery.fx.step[ tween.prop ]( tween );
				} else if ( tween.elem.style && ( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null || jQuery.cssHooks[ tween.prop ] ) ) {
					jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
				} else {
					tween.elem[ tween.prop ] = tween.now;
				}
			}
		}
	};

	// Support: IE9
	// Panic based approach to setting things on disconnected nodes

	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function( tween ) {
			if ( tween.elem.nodeType && tween.elem.parentNode ) {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	};

	jQuery.each([ "toggle", "show", "hide" ], function( i, name ) {
		var cssFn = jQuery.fn[ name ];
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply( this, arguments ) :
				this.animate( genFx( name, true ), speed, easing, callback );
		};
	});

	jQuery.fn.extend({
		fadeTo: function( speed, to, easing, callback ) {

			// show any hidden elements after setting opacity to 0
			return this.filter( isHidden ).css( "opacity", 0 ).show()

				// animate to the value specified
				.end().animate({ opacity: to }, speed, easing, callback );
		},
		animate: function( prop, speed, easing, callback ) {
			var empty = jQuery.isEmptyObject( prop ),
				optall = jQuery.speed( speed, easing, callback ),
				doAnimation = function() {
					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation( this, jQuery.extend( {}, prop ), optall );

					// Empty animations, or finishing resolves immediately
					if ( empty || data_priv.get( this, "finish" ) ) {
						anim.stop( true );
					}
				};
				doAnimation.finish = doAnimation;

			return empty || optall.queue === false ?
				this.each( doAnimation ) :
				this.queue( optall.queue, doAnimation );
		},
		stop: function( type, clearQueue, gotoEnd ) {
			var stopQueue = function( hooks ) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop( gotoEnd );
			};

			if ( typeof type !== "string" ) {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if ( clearQueue && type !== false ) {
				this.queue( type || "fx", [] );
			}

			return this.each(function() {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = data_priv.get( this );

				if ( index ) {
					if ( data[ index ] && data[ index ].stop ) {
						stopQueue( data[ index ] );
					}
				} else {
					for ( index in data ) {
						if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
							stopQueue( data[ index ] );
						}
					}
				}

				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && (type == null || timers[ index ].queue === type) ) {
						timers[ index ].anim.stop( gotoEnd );
						dequeue = false;
						timers.splice( index, 1 );
					}
				}

				// start the next in the queue if the last step wasn't forced
				// timers currently will call their complete callbacks, which will dequeue
				// but only if they were gotoEnd
				if ( dequeue || !gotoEnd ) {
					jQuery.dequeue( this, type );
				}
			});
		},
		finish: function( type ) {
			if ( type !== false ) {
				type = type || "fx";
			}
			return this.each(function() {
				var index,
					data = data_priv.get( this ),
					queue = data[ type + "queue" ],
					hooks = data[ type + "queueHooks" ],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;

				// enable finishing flag on private data
				data.finish = true;

				// empty the queue first
				jQuery.queue( this, type, [] );

				if ( hooks && hooks.stop ) {
					hooks.stop.call( this, true );
				}

				// look for any active animations, and finish them
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
						timers[ index ].anim.stop( true );
						timers.splice( index, 1 );
					}
				}

				// look for any animations in the old queue and finish them
				for ( index = 0; index < length; index++ ) {
					if ( queue[ index ] && queue[ index ].finish ) {
						queue[ index ].finish.call( this );
					}
				}

				// turn off finishing flag
				delete data.finish;
			});
		}
	});

	// Generate parameters to create a standard animation
	function genFx( type, includeWidth ) {
		var which,
			attrs = { height: type },
			i = 0;

		// if we include width, step value is 1 to do all cssExpand values,
		// if we don't include width, step value is 2 to skip over Left and Right
		includeWidth = includeWidth? 1 : 0;
		for( ; i < 4 ; i += 2 - includeWidth ) {
			which = cssExpand[ i ];
			attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
		}

		if ( includeWidth ) {
			attrs.opacity = attrs.width = type;
		}

		return attrs;
	}

	// Generate shortcuts for custom animations
	jQuery.each({
		slideDown: genFx("show"),
		slideUp: genFx("hide"),
		slideToggle: genFx("toggle"),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function( name, props ) {
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return this.animate( props, speed, easing, callback );
		};
	});

	jQuery.speed = function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
		};

		opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
			opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

		// normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}

		// Queueing
		opt.old = opt.complete;

		opt.complete = function() {
			if ( jQuery.isFunction( opt.old ) ) {
				opt.old.call( this );
			}

			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			}
		};

		return opt;
	};

	jQuery.easing = {
		linear: function( p ) {
			return p;
		},
		swing: function( p ) {
			return 0.5 - Math.cos( p*Math.PI ) / 2;
		}
	};

	jQuery.timers = [];
	jQuery.fx = Tween.prototype.init;
	jQuery.fx.tick = function() {
		var timer,
			timers = jQuery.timers,
			i = 0;

		fxNow = jQuery.now();

		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];
			// Checks the timer has not already been removed
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}

		if ( !timers.length ) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};

	jQuery.fx.timer = function( timer ) {
		if ( timer() && jQuery.timers.push( timer ) ) {
			jQuery.fx.start();
		}
	};

	jQuery.fx.interval = 13;

	jQuery.fx.start = function() {
		if ( !timerId ) {
			timerId = setInterval( jQuery.fx.tick, jQuery.fx.interval );
		}
	};

	jQuery.fx.stop = function() {
		clearInterval( timerId );
		timerId = null;
	};

	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,
		// Default speed
		_default: 400
	};

	// Back Compat <1.8 extension point
	jQuery.fx.step = {};

	if ( jQuery.expr && jQuery.expr.filters ) {
		jQuery.expr.filters.animated = function( elem ) {
			return jQuery.grep(jQuery.timers, function( fn ) {
				return elem === fn.elem;
			}).length;
		};
	}
	jQuery.fn.offset = function( options ) {
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each(function( i ) {
					jQuery.offset.setOffset( this, options, i );
				});
		}

		var docElem, win,
			elem = this[ 0 ],
			box = { top: 0, left: 0 },
			doc = elem && elem.ownerDocument;

		if ( !doc ) {
			return;
		}

		docElem = doc.documentElement;

		// Make sure it's not a disconnected DOM node
		if ( !jQuery.contains( docElem, elem ) ) {
			return box;
		}

		// If we don't have gBCR, just use 0,0 rather than error
		// BlackBerry 5, iOS 3 (original iPhone)
		if ( typeof elem.getBoundingClientRect !== core_strundefined ) {
			box = elem.getBoundingClientRect();
		}
		win = getWindow( doc );
		return {
			top: box.top + win.pageYOffset - docElem.clientTop,
			left: box.left + win.pageXOffset - docElem.clientLeft
		};
	};

	jQuery.offset = {

		setOffset: function( elem, options, i ) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
				position = jQuery.css( elem, "position" ),
				curElem = jQuery( elem ),
				props = {};

			// Set position first, in-case top/left are set even on static elem
			if ( position === "static" ) {
				elem.style.position = "relative";
			}

			curOffset = curElem.offset();
			curCSSTop = jQuery.css( elem, "top" );
			curCSSLeft = jQuery.css( elem, "left" );
			calculatePosition = ( position === "absolute" || position === "fixed" ) && ( curCSSTop + curCSSLeft ).indexOf("auto") > -1;

			// Need to be able to calculate position if either top or left is auto and position is either absolute or fixed
			if ( calculatePosition ) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;

			} else {
				curTop = parseFloat( curCSSTop ) || 0;
				curLeft = parseFloat( curCSSLeft ) || 0;
			}

			if ( jQuery.isFunction( options ) ) {
				options = options.call( elem, i, curOffset );
			}

			if ( options.top != null ) {
				props.top = ( options.top - curOffset.top ) + curTop;
			}
			if ( options.left != null ) {
				props.left = ( options.left - curOffset.left ) + curLeft;
			}

			if ( "using" in options ) {
				options.using.call( elem, props );

			} else {
				curElem.css( props );
			}
		}
	};


	jQuery.fn.extend({

		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}

			var offsetParent, offset,
				elem = this[ 0 ],
				parentOffset = { top: 0, left: 0 };

			// Fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is it's only offset parent
			if ( jQuery.css( elem, "position" ) === "fixed" ) {
				// We assume that getBoundingClientRect is available when computed position is fixed
				offset = elem.getBoundingClientRect();

			} else {
				// Get *real* offsetParent
				offsetParent = this.offsetParent();

				// Get correct offsets
				offset = this.offset();
				if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
					parentOffset = offsetParent.offset();
				}

				// Add offsetParent borders
				parentOffset.top += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
			}

			// Subtract parent offsets and element margins
			return {
				top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
				left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
			};
		},

		offsetParent: function() {
			return this.map(function() {
				var offsetParent = this.offsetParent || docElem;

				while ( offsetParent && ( !jQuery.nodeName( offsetParent, "html" ) && jQuery.css( offsetParent, "position") === "static" ) ) {
					offsetParent = offsetParent.offsetParent;
				}

				return offsetParent || docElem;
			});
		}
	});


	// Create scrollLeft and scrollTop methods
	jQuery.each( {scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function( method, prop ) {
		var top = "pageYOffset" === prop;

		jQuery.fn[ method ] = function( val ) {
			return jQuery.access( this, function( elem, method, val ) {
				var win = getWindow( elem );

				if ( val === undefined ) {
					return win ? win[ prop ] : elem[ method ];
				}

				if ( win ) {
					win.scrollTo(
						!top ? val : window.pageXOffset,
						top ? val : window.pageYOffset
					);

				} else {
					elem[ method ] = val;
				}
			}, method, val, arguments.length, null );
		};
	});

	function getWindow( elem ) {
		return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
	}
	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
		jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name }, function( defaultExtra, funcName ) {
			// margin is only for outerHeight, outerWidth
			jQuery.fn[ funcName ] = function( margin, value ) {
				var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
					extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

				return jQuery.access( this, function( elem, type, value ) {
					var doc;

					if ( jQuery.isWindow( elem ) ) {
						// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
						// isn't a whole lot we can do. See pull request at this URL for discussion:
						// https://github.com/jquery/jquery/pull/764
						return elem.document.documentElement[ "client" + name ];
					}

					// Get document width or height
					if ( elem.nodeType === 9 ) {
						doc = elem.documentElement;

						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						return Math.max(
							elem.body[ "scroll" + name ], doc[ "scroll" + name ],
							elem.body[ "offset" + name ], doc[ "offset" + name ],
							doc[ "client" + name ]
						);
					}

					return value === undefined ?
						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css( elem, type, extra ) :

						// Set width or height on the element
						jQuery.style( elem, type, value, extra );
				}, type, chainable ? margin : undefined, chainable, null );
			};
		});
	});
	// Limit scope pollution from any deprecated API
	// (function() {

	// The number of elements contained in the matched element set
	jQuery.fn.size = function() {
		return this.length;
	};

	jQuery.fn.andSelf = jQuery.fn.addBack;

	// })();
	if ( typeof module === "object" && module && typeof module.exports === "object" ) {
		// Expose jQuery as module.exports in loaders that implement the Node
		// module pattern (including browserify). Do not create the global, since
		// the user will be storing it themselves locally, and globals are frowned
		// upon in the Node module world.
		module.exports = jQuery;
	} else {
		// Register as a named AMD module, since jQuery can be concatenated with other
		// files that may use define, but not via a proper concatenation script that
		// understands anonymous AMD modules. A named AMD is safest and most robust
		// way to register. Lowercase jquery is used because AMD module names are
		// derived from file names, and jQuery is normally delivered in a lowercase
		// file name. Do this after creating the global so that if an AMD module wants
		// to call noConflict to hide this version of jQuery, it will work.
		if ( true ) {
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () { return jQuery; }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		}
	}

	// If there is a window object, that at least has a document property,
	// define jQuery and $ identifiers
	if ( typeof window === "object" && typeof window.document === "object" ) {
		window.jQuery = window.$ = jQuery;
	}

	})( window );

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module)))

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ }
/******/ ]);