(window.webpackJsonp=window.webpackJsonp||[]).push([[11,30],{558:function(e,t,a){"use strict";a.r(t);var n={data:function(){return{visible:!0}},methods:{toggle:function(){this.visible=!this.visible}},props:{title:{type:String,required:!0,default:""},transitionName:{type:String},showText:{type:String,required:!0,default:"Hello"},buttonText:{type:String,default:"Toggle"},animationMode:{type:Boolean,default:!0},animeEnterClassName:{type:String,default:""},animeLeaveClassName:{type:String,default:""}}},i=a(20),s=Object(i.a)(n,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("br"),e._v(" "),a("h2",[e._v(e._s(e.title))]),e._v(" "),a("br"),e._v(" "),a("button",{on:{click:e.toggle}},[e._v("\n    "+e._s(e.buttonText)+"\n  ")]),e._v(" "),e.animationMode?a("transition",{attrs:{name:e.transitionName}},[a("p",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],staticClass:"animateTarget"},[e._v(e._s(e.showText))])]):a("transition",{attrs:{name:e.transitionName,"enter-active-class":e.animeEnterClassName,"leave-active-class":e.animeLeaveClassName}},[a("p",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],staticClass:"animateTarget"},[e._v(e._s(e.showText))])]),e._v(" "),a("br")],1)}),[],!1,null,null,null);t.default=s.exports},593:function(e,t,a){},640:function(e,t,a){"use strict";a(593)},667:function(e,t,a){"use strict";a.r(t);var n=a(558),i=(a(190),{name:"AnimateCSS",components:{ShowPanel:n.default}}),s=(a(640),a(20)),l=Object(s.a)(i,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"demoHeight"},[t("show-panel",{attrs:{title:"AnimateCSS",buttonText:"AnimateCSS",showText:"AnimateCSS TaDa",animeEnterClassName:"animated tada",animeLeaveClassName:"animated bounceOutRight",animationMode:!1}})],1)}),[],!1,null,"1eaeffc2",null);t.default=l.exports}}]);