(this["webpackJsonptranslate-morse-react"]=this["webpackJsonptranslate-morse-react"]||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var s=n(1),o=n.n(s),r=n(4),c=n.n(r),a=n(5),i=n(6),u=n(8),d=n(7),l=n(0),j={"-----":"0",".----":"1","..---":"2","...--":"3","....-":"4",".....":"5","-....":"6","--...":"7","---..":"8","----.":"9",".-":"a","-...":"b","-.-.":"c","-..":"d",".":"e","..-.":"f","--.":"g","....":"h","..":"i",".---":"j","-.-":"k",".-..":"l","--":"m","-.":"n","---":"o",".--.":"p","--.-":"q",".-.":"r","...":"s","-":"t","..-":"u","...-":"v",".--":"w","-..-":"x","-.--":"y","--..":"z",".-.-.-":".","--..--":",","..--..":"?","-.-.--":"!","-....-":"-","-..-.":"/",".--.-.":"@","-.--.":"(","-.--.-":")"},x=function(t){return console.log("morseText",t),t.length?j[t]||"undefined":""},h=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(t){var s;return Object(a.a)(this,n),(s=e.call(this,t))._checkInactivity=function(t){return function(){if(s.lastButtonPressedUp===t){s.lastButtonPressedDown=void 0,s.lastButtonPressedUp=void 0;var e=s.state.morseText+" ",n=e.split(" ").map(x).join("");s.setState({morseText:e,translatedText:n})}}},s._onButtonMouseDown=function(){s.lastButtonPressedDown=Date.now(),s.lastButtonPressedUp=void 0},s._onButtonMouseUp=function(){var t=Date.now(),e=t-s.lastButtonPressedDown<200?".":"-";s.lastButtonPressedDown=void 0,s.lastButtonPressedUp=t,s.setState({morseText:s.state.morseText+e}),setTimeout(s._checkInactivity(t),600)},s.lastButtonPressedDown=void 0,s.lastButtonPressedUp=void 0,s.state={morseText:"",translatedText:""},s}return Object(i.a)(n,[{key:"render",value:function(){var t=this.state,e=t.morseText,n=t.translatedText;return Object(l.jsxs)("div",{class:"morse-module",children:[Object(l.jsxs)("div",{children:["Morse: ",e]}),Object(l.jsx)("button",{onMouseDown:this._onButtonMouseDown,onMouseUp:this._onButtonMouseUp,children:"Button"}),Object(l.jsxs)("div",{children:["Text: ",n]})]})}}]),n}(o.a.Component),b=n(3);function v(){var t={0:"-----",1:".----",2:"..---",3:"...--",4:"....-",5:".....",6:"-....",7:"--...",8:"---..",9:"----.",a:".-",b:"-...",c:"-.-.",d:"-..",e:".",f:"..-.",g:"--.",h:"....",i:"..",j:".---",k:"-.-",l:".-..",m:"--",n:"-.",o:"---",p:".--.",q:"--.-",r:".-.",s:"...",t:"-",u:"..-",v:"...-",w:".--",x:"-..-",y:"-.--",z:"--..",".":"......",",":".-.-.-",";":"-.-.-.",":":"---...","?":"..--..","!":"--..--","(":"-.--.",")":"-.--.-","/":"-..-.","-":"-....-","@":".--.-.","=":"-...-","+":".-.-.",$:"...-..-","'":".----.","&":".-..."," ":"/"},e=Object(s.useState)(""),n=Object(b.a)(e,2),o=n[0],r=n[1],c=Object(s.useState)(""),a=Object(b.a)(c,2),i=a[0],u=a[1];return Object(l.jsxs)("div",{class:"text-module",children:[Object(l.jsx)("div",{class:"input-container",children:Object(l.jsx)("input",{type:"text",className:"form-control",value:o,onChange:function(t){r(t.target.value)},onKeyUp:function(){for(var e="",n=o.toString().split(""),s=0;s<n.length;s++)e+=t[n[s].toLowerCase()];u(e)}})}),Object(l.jsxs)("div",{children:["Text: ",o]}),Object(l.jsxs)("div",{children:["Morse: ",i]})]})}var O=function(){return Object(l.jsxs)("div",{class:"container",children:[Object(l.jsx)("h1",{children:"Learn To Morse"}),Object(l.jsx)("h2",{children:"Type in your text:"}),Object(l.jsx)(v,{}),Object(l.jsx)("h2",{children:"Hit the button to morse and see the text"}),Object(l.jsx)(h,{})]})};n(14);c.a.render(Object(l.jsx)(o.a.StrictMode,{children:Object(l.jsx)(O,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.bf5cce94.chunk.js.map