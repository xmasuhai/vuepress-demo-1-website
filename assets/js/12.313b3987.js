(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{665:function(t,i,e){"use strict";var n=e(52);e(46);i.a={methods:{randomIndex:function(){return Math.floor(Math.random()*this.itemList.length)},add:function(){this.itemList.splice(this.randomIndex(),0,this.nextNum++)},remove:function(){this.itemList.splice(this.randomIndex(),1)},recover:function(){this.itemList=Object(n.a)(this.originItems)},oddEven:function(){(10-Math.floor(10*Math.random()))%2==0?this.add():this.remove()},checkItemList:function(){0===this.itemList.length&&(this.itemList.push(0),this.recover())}},watch:{itemList:{handler:"checkItemList"}},created:function(){this.originItems=Object(n.a)(this.itemList)}}},694:function(t,i,e){},743:function(t,i,e){"use strict";e(694)},770:function(t,i,e){"use strict";e.r(i);var n=e(664),s=e.n(n),o={name:"ListFlipShuffleMove",mixins:[e(665).a],data:function(){return{itemList:[1,2,3,4,5,6,7,8,9],originItems:[],nextNum:10}},methods:{shuffle:function(){this.oddEven(),this.randomIndex(),this.itemList=s.a.shuffle(this.itemList)}},updated:function(){this.checkItemList()}},r=(e(743),e(45)),c=Object(r.a)(o,(function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("button",{on:{click:t.shuffle}},[t._v("Shuffle Move")]),t._v(" "),e("transition-group",{attrs:{name:"flip-list",tag:"ul"}},t._l(t.itemList,(function(i){return e("li",{key:i,staticClass:"flip-list-item"},[t._v("\n      "+t._s(i)+"\n    ")])})),0),t._v(" "),e("br"),t._v(" "),e("transition-group",{attrs:{name:"flip-list",tag:"ul"}},t._l(t.itemList,(function(i){return e("li",{key:i},[t._v("\n      "+t._s(i)+"\n    ")])})),0)],1)}),[],!1,null,"7ef527bc",null);i.default=c.exports}}]);