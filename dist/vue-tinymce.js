!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VueTinymce=e():t.VueTinymce=e()}(this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=3)}([function(t,e,n){"use strict";e.a={menubar:!1,height:500,theme:"modern",toolbar_items_size:"small",plugins:["advlist autolink link image lists charmap print hr anchor pagebreak spellchecker","searchreplace visualblocks visualchars code fullscreen media nonbreaking","table directionality emoticons template textcolor paste textcolor colorpicker textpattern"],style_formats:[{title:"Bold",icon:"bold",format:"bold"},{title:"Italic",icon:"italic",format:"italic"},{title:"Underline",icon:"underline",format:"underline"},{title:"Strikethrough",icon:"strikethrough",format:"strikethrough"},{title:"Superscript",icon:"superscript",format:"superscript"},{title:"Subscript",icon:"subscript",format:"subscript"},{title:"Code",icon:"code",format:"code"}],block_formats:"Paragraph=p;Heading 1=h1;Heading 2=h2;Heading 3=h3;Heading 4=h4;Heading 5=h5;Heading 6=h6;",toolbar1:"insertfile undo redo | formatselect | bullist numlist | link unlink | uploadimg image media | fullscreen",toolbar2:"styleselect fontsizeselect | forecolor backcolor | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | outdent indent | removeformat"}},function(t,e,n){var i=n(4)(n(2),null,null,null);t.exports=i.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default={props:{value:{type:String,default:""},setup:{type:Function,default:function(){}},setting:{type:Object,default:function(){return tinymceSetting}}},render:function(t){return t("div",{attrs:{id:this.id}})},data:function(){return{id:"vue-tinymce-"+Date.now(),editor:null,status:0,backup:""}},watch:{value:function(t){if(2===this.status||0===this.status)return this.status=1;tinymce.get(this.id).initialized?tinymce.get(this.id).setContent(t):this.backup=t}},created:function(){if("undefined"==typeof tinymce)throw new Error("tinymce undefined")},mounted:function(){var t=this,e=Object.assign({},this.setting,{selector:"#"+this.id,setup:function(e){t.setup(e),t.editor=e,e.on("init",function(){e.setContent(t.value||t.backup),e.on("input change undo redo keyup",function(){if(1===t.status||0===t.status)return t.status=2;t.$emit("input",e.getContent())})})}});tinymce.init(e)},beforeDestroy:function(){tinymce.get(this.id).remove()}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),r=n.n(i),o=n(0);n.d(e,"VueTinymce",function(){return r.a}),n.d(e,"TinymceSetting",function(){return o.a}),e.default=r.a},function(t,e){t.exports=function(t,e,n,i){var r,o=t=t||{},u=typeof t.default;"object"!==u&&"function"!==u||(r=t,o=t.default);var c="function"==typeof o?o.options:o;if(e&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns),n&&(c._scopeId=n),i){var s=Object.create(c.computed||null);Object.keys(i).forEach(function(t){var e=i[t];s[t]=function(){return e}}),c.computed=s}return{esModule:r,exports:o,options:c}}}])});