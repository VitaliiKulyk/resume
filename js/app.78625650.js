(function(t){function e(e){for(var s,o,l=e[0],r=e[1],c=e[2],d=0,v=[];d<l.length;d++)o=l[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&v.push(i[o][0]),i[o]=0;for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s]);u&&u(e);while(v.length)v.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,l=1;l<a.length;l++){var r=a[l];0!==i[r]&&(s=!1)}s&&(n.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},i={app:0},n=[];function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=r;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"00b9":function(t,e,a){},"04ee":function(t,e,a){},"1ea4":function(t,e,a){"use strict";a("62ff")},"325c":function(t,e,a){"use strict";a("f5ef")},"36db":function(t,e,a){"use strict";a("e6a6")},"414a":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),i=a("ce5b"),n=a.n(i);a("bf40");s["default"].use(n.a);var o=new n.a({theme:{dark:!0,default:"dark",themes:{dark:{}}}}),l=a("8c4f"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"pa-0"},[a("Profile",{staticClass:"pa-5",attrs:{id:"about-me"}}),a("AboutMe",{staticClass:"pa-5 my-4"}),a("div",{staticClass:"d-flex flex-wrap my-4"},[a("Education",{staticClass:"col-12 col-md-6 pa-5"}),a("Languages",{staticClass:"col-12 col-md-6 pa-5"})],1),a("Technologies",{staticClass:"pa-5 my-4",attrs:{id:"technologies"}}),a("EmployeeHistory",{staticClass:"pa-5 my-4",attrs:{id:"employment-history"}}),a("ProjectHistory",{staticClass:"pa-5 my-4",attrs:{id:"project-history"}})],1)},c=[],u=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"d-flex"},[s("img",{staticClass:"avatar-image ma-1 d-none d-sm-flex",attrs:{src:a("915e")}}),s("div",{staticClass:"main-info ma-1 pa-2"},[s("div",{staticClass:"text-h3 name"},[t._v(t._s(t.name))]),s("div",{staticClass:"text-h6 position"},[t._v(t._s(t.position))]),s("div",{staticClass:"contacts my-3"},t._l(t.contacts,(function(e,a){return s("div",{key:a,staticClass:"contact my-1"},[s("v-icon",{staticClass:"mr-1",attrs:{color:e.color}},[t._v(" "+t._s(e.icon))]),s("a",{staticClass:"link",attrs:{href:e.href,target:"_blank"}},[t._v(t._s(e.text))])],1)})),0),s("div",{staticClass:"icon-links ml-auto mt-auto"},t._l(t.iconContacts,(function(e,a){return s("v-btn",{key:a,staticClass:"mx-2",attrs:{to:e.link,target:"_blank",color:"red",elevation:"2",icon:"",tile:"","x-large":""}},[s("v-icon",{attrs:{"x-large":"",color:e.color}},[t._v(" "+t._s(e.icon))])],1)})),1)])])},d=[],v={data:function(){return{name:"Vitalii Kulyk",position:"JavaScript developer",contacts:[{icon:"mdi-email-outline",href:"mailto:vetalkulyk@gmail.com",text:"vetalkulyk@gmail.com",color:"deep-orange lighten-3"},{icon:"mdi-map-marker",href:"https://www.google.com.ua/maps/place/%D0%9B%D1%8C%D0%B2%D1%96%D0%B2,+%D0%9B%D1%8C%D0%B2%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+79000/@48.990886,17.7659202,5.62z/data=!4m5!3m4!1s0x473add7c09109a57:0x4223c517012378e2!8m2!3d49.839683!4d24.029717",text:"Lviv, Ukraine",color:"teal accent-2"}],iconContacts:[{color:"light-blue darken-1",icon:"mdi-linkedin",link:"//www.linkedin.com/in/vitaliikulyk/"},{color:"blue",icon:"mdi-facebook",link:"//www.facebook.com/vitalik.kulyk"},{color:"grey lighten-2",icon:"mdi-github",link:"//github.com/VitaliiKulyk"}]}}},m=v,p=(a("6865"),a("2877")),f=Object(p["a"])(m,u,d,!1,null,null,null),b=f.exports,y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex flex-column parent-block"},[a("div",{staticClass:"text-h5"},[t._v("About me")]),a("div",{staticClass:"mx-5 mt-4"},t._l(t.text,(function(e,s){return a("div",{key:s,staticClass:"text-subtitle-1"},[t._v(" "+t._s(e)+" ")])})),0)])},g=[],h={data:function(){return{text:["Full-stack engineer with more than 7 years of experience in javascript ecosystem.","My passion is developing code software. Not just working code, but clean, reusable, extendable, consistent, distributed, and self-commented code.",""]}}},_=h,C=(a("1ea4"),Object(p["a"])(_,y,g,!1,null,null,null)),x=C.exports,k=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},w=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex flex-column"},[a("div",{staticClass:"text-h5"},[t._v("Education")]),a("div",{staticClass:"mx-5 mt-4"},[a("div",{staticClass:"text-h6"},[t._v("Ivan Franko National University of Lviv")]),a("div",{staticClass:"text-subtitle-2"},[t._v("Computer science.")]),a("div",{staticClass:"text-subtitle-2"},[t._v("Master's degree. 2010-2015")])])])}],j={},S=Object(p["a"])(j,k,w,!1,null,null,null),D=S.exports,E=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},O=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex flex-column"},[a("div",{staticClass:"text-h5"},[t._v("Languages")]),a("div",{staticClass:"mx-5 mt-2"},[a("div",{staticClass:"my-2"},[a("div",{staticClass:"text-h6"},[t._v("English")]),a("div",{staticClass:"text-subtitle-2"},[t._v("Full Professional Proficiency")])]),a("div",{staticClass:"my-2"},[a("div",{staticClass:"text-h6"},[t._v("Ukrainian")]),a("div",{staticClass:"text-subtitle-2"},[t._v("Native proficiency")])]),a("div",{staticClass:"my-2"},[a("div",{staticClass:"text-h6"},[t._v("Russian")]),a("div",{staticClass:"text-subtitle-2"},[t._v("Full Professional Proficiency")])])])])}],P={},B=Object(p["a"])(P,E,O,!1,null,null,null),M=B.exports,N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex flex-column parent-block"},[a("div",{staticClass:"text-h5"},[t._v("Technologies")]),t._l(t.skills,(function(e,s){return[a("div",{key:s,staticClass:"my-3"},[a("div",{staticClass:"divider-container"},[a("v-divider"),a("div",{staticClass:"divider-text-container"},[a("div",{staticClass:"divider-text"},[t._v(t._s(e.title))])])],1),a("div",{staticClass:"d-flex flex-wrap"},t._l(e.list,(function(s,i){return a("v-chip",{key:i,staticClass:"ma-1",attrs:{large:"large"===e.size,outlined:"",label:""}},[t._v(" "+t._s(s)+" ")])})),1)])]}))],2)},R=[],T={data:function(){return{skills:[{title:"Comfort with",size:"large",list:["JavaScript","Typescript","Node.js","Vue","React.js","PosgreSQL","HTML/CSS"]},{title:"More detailed",list:["MongoDB","Less","Webpack","Vuex","Redux","SQL","NoSQL","Socket.io","AWS services","Vuetify","Material design","Express","JWT","d3.js","Three.js","Backbone","REST","GraphQL","Meteor","Redis"]},{title:"Experienced with",list:["C#","Unity","React Native"]}]}}},J=T,$=(a("baf0"),Object(p["a"])(J,N,R,!1,null,null,null)),A=$.exports,L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex flex-column"},[a("div",{staticClass:"text-h5 mb-3"},[t._v("Employment history")]),t._l(t.history,(function(e,s){return a("v-card",{key:s,staticClass:"elevation-2 pa-3 my-2 history-card",attrs:{tile:"",color:"#3b3b3b"}},[e.link?a("router-link",{staticClass:"link",attrs:{to:e.link,target:"_blank"}},[a("v-card-title",{staticClass:"py-0 my-0"},[t._v(" "+t._s(e.companyName)+" ")])],1):a("v-card-title",{staticClass:"py-0 my-0"},[t._v(" "+t._s(e.companyName)+" ")]),t._l(e.positions,(function(e,s){return a("div",{key:s,staticClass:"my-3"},[a("v-card-title",{staticClass:"py-0 my-0 positionName"},[t._v(" "+t._s(e.name)+" ")]),a("v-card-subtitle",{staticClass:"py-0 my-0"},[t._v(" "+t._s(e.dates)+" ")])],1)}))],2)}))],2)},U=[],W={data:function(){return{history:[{companyName:"Freelance",positions:[{name:"Javascript Developer",dates:"Jul 2020 - Present"}]},{companyName:"Eliftech",link:"//www.eliftech.com",positions:[{name:"Software Developer",dates:"Jan 2015 – Jul 2020"},{name:"Competence Manager",dates:"May 2018 – Jun 2020"},{name:"Mentor at IT School",dates:"Jan 2016 – Dec 2018"}]},{companyName:"Compta Software",positions:[{name:"Software Developer",dates:"Jun 2014 – Dec 2014"}]}]}}},z=W,F=(a("325c"),Object(p["a"])(z,L,U,!1,null,null,null)),I=F.exports,H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex flex-column parent-block"},[a("div",{staticClass:"text-h5 mb-3"},[t._v("Favorite projects")]),a("div",{staticClass:"grid"},[a("div",{staticClass:"grid-sizer"}),t._l(t.projects,(function(t,e){return a("div",{key:e,staticClass:"grid-item"},[a("div",{staticClass:"ma-1"},[a("Project",{attrs:{item:t}})],1)])}))],2)])},Q=[],V=a("63f9"),G=a.n(V),K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"elevation-2 pa-3 project-card",attrs:{tile:"",color:"#3b3b3b"}},[a("v-card-title",{staticClass:"py-0 my-0 title"},[a("div",[t._v(t._s(t.item.title))]),a("router-link",{staticClass:"link",attrs:{to:t.item.link,target:"_blank"}},[t._v(" website link ")])],1),a("v-card-text",[t._l(t.item.description,(function(e,s){return a("div",{key:s},[t._v(t._s(e))])})),a("div",{staticClass:"d-flex flex-wrap mt-2"},t._l(t.item.tags,(function(e,s){return a("v-chip",{key:s,staticClass:"mr-1 mb-1",attrs:{outlined:"",label:""}},[t._v(" "+t._s(e)+" ")])})),1)],2)],1)},q=[],X={props:{item:Object}},Y=X,Z=(a("f362"),Object(p["a"])(Y,K,q,!1,null,null,null)),tt=Z.exports,et={components:{Project:tt},data:function(){return{projects:[{title:"Bomb. Party Game",link:"//play.google.com/store/apps/details?id=com.bombgameandroid",description:["Personal project","The android game initially made with React Native.","The new version is written on Unity.","175K+ downloads."],tags:["React native","JavaScript","Unity","C#","Android","Spine"],images:[]},{title:"ClassWallet",link:"//classwallet.com/",description:["A huge US service that allows teachers and schools to forget about paperwork and provides digital reimbursement and shopping system for the teaching sector.","Over 3,500 schools use ClassWallet to automate processes for transactions for over 135,000 teachers and principals."],tags:["React","JavaScript","Node.js","MongoDB","Redis","Backbone","AWS services"],images:[]},{title:"Ariot",link:"//ariot.io/",description:["Ariot is an AR (augmented reality) tool for building operators and construction workers."],tags:["JavaScript","React","Redux","Akita","D3.js ","Node.js","PostgreSQL"],images:[]},{title:"Neupart",link:"//neupart.com/",description:["Neupart provides Information Security Management System, Secure ISMS, allowing organizations to automate IT Governance, Risk, and Compliance management.","Neupart allows being compliant with ISO 27001 or EU Data Protection Regulation (GDPR)."],tags:["JavaScript","React","Redux","D3.js "],images:[]}]}},mounted:function(){new G.a(".grid",{itemSelector:".grid-item",columnWidth:".grid-sizer",percentPosition:!0})}},at=et,st=(a("6dd9"),Object(p["a"])(at,H,Q,!1,null,null,null)),it=st.exports,nt={components:{Profile:b,AboutMe:x,Education:D,Languages:M,Technologies:A,EmployeeHistory:I,ProjectHistory:it}},ot=nt,lt=(a("de16"),Object(p["a"])(ot,r,c,!1,null,null,null)),rt=lt.exports;s["default"].use(l["a"]);var ct=[{path:"/",component:rt}],ut=new l["a"]({mode:"history",base:"/",routes:ct}),dt=ut,vt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{staticClass:"unselectable"},[a("Background"),a("TopBar"),a("v-main",[a("router-view")],1)],1)},mt=[],pt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("svg",{staticClass:"d-none d-md-block",attrs:{id:"bg-shape-1"}},[a("polygon",{staticClass:"shape",attrs:{points:"0 500, 600 320, 150 0, 0 100"}})]),a("svg",{staticClass:"d-none d-md-block",attrs:{id:"bg-shape-2"}},[a("polygon",{staticClass:"shape",attrs:{points:"0 400, 900 0, 900 400"}})])])},ft=[],bt=(a("b3e5"),{}),yt=Object(p["a"])(bt,pt,ft,!1,null,"0aa2e19f",null),gt=yt.exports,ht=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app-bar",{attrs:{app:"",dense:"","elevate-on-scroll":""}},[a("v-tabs",{attrs:{dark:"",centered:"","hide-slider":"",value:null}},t._l(t.tabs,(function(e,s){return a("v-tab",{key:s,staticClass:"not-activable",on:{click:function(a){return t.$vuetify.goTo(e.target,t.options)}}},[t._v(" "+t._s(e.text)+" ")])})),1)],1)},_t=[],Ct={data:function(){return{tabs:[{text:"About me",target:"#about-me"},{text:"Technologies",target:"#technologies"},{text:"Employment history",target:"#employment-history"},{text:"Projects",target:"#project-history"}]}}},xt=Ct,kt=(a("36db"),Object(p["a"])(xt,ht,_t,!1,null,"6266b42a",null)),wt=kt.exports,jt={components:{Background:gt,TopBar:wt}},St=jt,Dt=(a("73e6"),Object(p["a"])(St,vt,mt,!1,null,"585ebf3a",null)),Et=Dt.exports;a("d5e8"),a("5363");new s["default"]({router:dt,vuetify:o,render:function(t){return t(Et)}}).$mount("#app")},"62ff":function(t,e,a){},6865:function(t,e,a){"use strict";a("00b9")},"6dd9":function(t,e,a){"use strict";a("f304")},"71ef":function(t,e,a){},"73e6":function(t,e,a){"use strict";a("bd48")},"8d91":function(t,e,a){},"915e":function(t,e,a){t.exports=a.p+"img/avatar.a8da1700.jpg"},b3e5:function(t,e,a){"use strict";a("71ef")},baf0:function(t,e,a){"use strict";a("414a")},bd48:function(t,e,a){},de16:function(t,e,a){"use strict";a("8d91")},e6a6:function(t,e,a){},f304:function(t,e,a){},f362:function(t,e,a){"use strict";a("04ee")},f5ef:function(t,e,a){}});
//# sourceMappingURL=app.78625650.js.map