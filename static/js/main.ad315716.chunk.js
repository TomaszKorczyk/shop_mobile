(this.webpackJsonpshop_mobile=this.webpackJsonpshop_mobile||[]).push([[0],{35:function(e,t,a){},56:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){"use strict";a.r(t);var c=a(2),r=a.n(c),s=a(25),l=a.n(s),n=a(9),i=a(5),o=(a(35),a(21));a(52),a(83),a(82);o.a.initializeApp({apiKey:"AIzaSyBZhCJMWEyPKCpOusYimmSQhfehNBSaCKk",authDomain:"shop-mobile-6a8e6.firebaseapp.com",projectId:"shop-mobile-6a8e6",storageBucket:"shop-mobile-6a8e6.appspot.com",messagingSenderId:"189781979191",appId:"1:189781979191:web:a25dd6963c39ff29514fb2",measurementId:"G-6CH3P30GRD"});var d=o.a.auth(),u=o.a.firestore(),m=o.a.storage(),b=a(6),j=a(46),x=a(40),h=a(41),p=a(47),f=a(45),g=a(1),O=Object(c.createContext)(),v=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(x.a)(this,a);for(var c=arguments.length,r=new Array(c),s=0;s<c;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={products:[]},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.state.products;u.collection("Products").onSnapshot((function(a){a.docChanges().forEach((function(a){"added"===a.type&&t.push({ProductID:a.doc.id,ProductName:a.doc.data().ProductName,ProductPrice:a.doc.data().ProductPrice,ProductImg:a.doc.data().ProductImg,ProductDescription:a.doc.data().ProductDescription}),e.setState({products:t})}))}))}},{key:"render",value:function(){return Object(g.jsx)(O.Provider,{value:{products:Object(j.a)(this.state.products)},children:this.props.children})}}]),a}(c.Component),w=r.a.createContext({loggedIn:!1,user:{}});function y(){var e=function(){var e=Object(c.useState)(localStorage.theme),t=Object(i.a)(e,2),a=t[0],r=t[1],s="dark"===a?"light":"dark";return Object(c.useEffect)((function(){var e=window.document.documentElement;e.classList.remove(s),e.classList.add(a),localStorage.setItem("theme",a)}),[a,s]),[s,r]}(),t=Object(i.a)(e,2),a=t[0],r=t[1];return Object(g.jsx)("span",{onClick:function(){return r(a)},className:"w-10 h-10 bg-blue-300 dark:opacity-80 dark:hover:opacity-100 hover:text-white hover:bg-blue-500 dark:text-white dark:hover:text-black dark:bg-yellow-300 hover:opacity-100 rounded-full cursor-pointer flex items-center justify-center transition duration-300",children:"light"===a?Object(g.jsx)("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:Object(g.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"})}):Object(g.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:Object(g.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"})})})}a(56);function N(){var e=Object(c.useContext)(w),t=Object(i.a)(e,2),a=t[0],r=t[1],s=Object(c.useState)(!1),l=Object(i.a)(s,2),o=l[0],u=l[1],m=Object(b.g)(),j=function(){return u(!o)};return Object(g.jsx)("span",{onClick:j,children:a?Object(g.jsxs)("div",{onClick:j,className:"relative",children:[Object(g.jsx)("div",{className:"relative z-10 flex justify-center w-10 h-10 ".concat(o?"":"hover:text-white hover:bg-blue-500 dark:hover:text-black"," bg-blue-300 dark:bg-yellow-300 dark:text-white rounded-md cursor-pointer"),children:Object(g.jsx)("i",{className:"far fa-user-circle w-full h-full p-1 text-2xl flex justify-center items-center"})}),Object(g.jsx)("button",{onClick:function(){return u(!1)},tabIndex:"-1",className:"".concat(o?"fixed inset-0 w-full h-full opacity-0 cursor-default bg-black":"hidden")}),Object(g.jsx)("div",{className:"".concat(o?"block":"cliked"," ").concat(a?"":"cliked"," dropdown-menu dark:bg-gray-800 border p-1 z-10"),children:Object(g.jsxs)("ul",{children:[Object(g.jsx)("li",{className:"w-full flex m-auto",children:Object(g.jsx)("p",{className:"text-sm m-auto w-max grid px-1 border-b mb-2",children:r.user})}),Object(g.jsx)("li",{className:"bg-blue-300 cursor-pointer hover:bg-blue-500 hover:text-white dark:bg-yellow-300 dark:hover:text-black rounded-md transition duration-300",children:a&&Object(g.jsx)("div",{className:"p-2",onClick:function(){d.signOut().then((function(){u(!1),m.replace("/login")}))},children:"Wyloguj"})})]})})]}):Object(g.jsx)(n.b,{to:"/login",children:Object(g.jsx)("i",{className:"fas fa-user w-10 h-10 bg-blue-300 dark:opacity-80 dark:hover:opacity-100 hover:text-white hover:bg-blue-500 dark:text-white dark:hover:text-black dark:bg-yellow-300 hover:opacity-100 rounded-full cursor-pointer flex items-center justify-center transition duration-300"})})})}function k(){return Object(g.jsx)("div",{className:"init",children:Object(g.jsx)("p",{className:"m-auto",children:Object(g.jsx)("i",{className:"fas fa-circle-notch fa-spin text-5xl text-blue-800"})})})}var P=a(43),S=a(85);function C(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),a=t[0],r=t[1],s=Object(S.a)().y;return Object(c.useEffect)((function(){r(s>400)}),[s]),[a]}function z(){var e=C();return!!Object(i.a)(e,1)[0]&&Object(g.jsx)("div",{className:"fixed w-12 h-12 bottom-5 right-5 rounded-full text-black dark:text-white dark:hover:text-gray-800 bg-blue-300 hover:bg-blue-500 dark:bg-yellow-300  flex cursor-pointer opacity-90 hover:opacity-100 transition duration-300 ease-in-out z-40",onClick:function(){return P.animateScroll.scrollToTop()},children:Object(g.jsx)("i",{className:"icon fas fa-chevron-up text-2xl flex w-full items-center justify-around animate-up"})})}var I=[{id:1,title:"shark",img:a.p+"static/media/shark.622ff321.jpg"},{id:2,title:"pi\u0142ki",img:a.p+"static/media/pi\u0142ki.bbc4fedf.jpg"},{id:3,title:"pude\u0142ko",img:a.p+"static/media/pudelko.9e68adf5.jpg"},{id:4,title:"stopy",img:a.p+"static/media/stopy.ccc2904f.jpg"},{id:5,title:"mata",img:a.p+"static/media/mata.73543f8a.jpg"},{id:6,title:"tablica",img:a.p+"static/media/tablica.e2e19bbd.jpg"}],D=a(44),E=a.n(D),A=(a(73),a(74),a(75),{0:{items:1},600:{items:3},1200:{items:5}});var M=function(){return Object(g.jsx)(E.a,{className:"owl-theme dark:bg-gray-800 anime border-t dark:border-white",loop:!0,autoplay:!0,center:!0,dots:!0,margin:50,responsive:A,children:I.map((function(e,t){return Object(g.jsx)("div",{className:"item",children:Object(g.jsx)("img",{className:"max-h-28 md:max-h-40 lg:max-h-52 w-1/2 grid justify-center m-auto",src:e.img,alt:e.title})},t)}))})},L=(a(76),function(e){var t=e.product;return Object(g.jsxs)("div",{className:"mb-2 border border-gray-500 bg-white dark:bg-gray-800  overflow-hidden anime",children:[Object(g.jsx)("div",{children:Object(g.jsx)("div",{className:"relative flex justify-center imgs mt-1",children:Object(g.jsx)("img",{className:"absolute h-full w-full flex top-0 mt-1 m-auto text-center justify-center object-contain shadow-lg rounded-lg dark:bg-gray-100",src:t.ProductImg,alt:t.ProductName})})}),Object(g.jsxs)("section",{className:"px-2 pt-1",children:[Object(g.jsx)("h4",{className:"w-full text-center capitalize text-lg text-gray-800 dark:text-white",children:t.ProductName}),Object(g.jsxs)("h5",{className:"w-full pr-2 text-right tracking-wide text-gray-700 opacity-70 dark:text-white",children:[t.ProductPrice,".00 z\u0142"]}),Object(g.jsx)("p",{className:"text-center text-sm dark:text-gray-200 tracking-wider",children:t.ProductDescription})]}),Object(g.jsx)("div",{className:"flex justify-center py-1",children:Object(g.jsx)("button",{className:"bg-blue-300 dark:hover:text-black dark:bg-yellow-300 rounded-xl cursor-pointer px-4 py-0.5 my-1 focus:outline-none anime",children:"Add to cart"})})]})}),q=function(){var e=Object(c.useContext)(O).products;return Object(g.jsxs)("main",{className:"mb-5",children:[0!==e.length&&Object(g.jsx)("h1",{className:"flex justify-center font-bold tracking-wider uppercase py-4 text-2xl",children:"Products"}),Object(g.jsxs)("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5",children:[0===e.length&&Object(g.jsx)(k,{}),e.map((function(e){return Object(g.jsx)("div",{className:"grid mx-1",children:Object(g.jsx)(L,{product:e})},e.ProductID)}))]})]})};function B(){return Object(g.jsxs)("div",{className:"overflow-hidden",children:[Object(g.jsx)(M,{}),Object(g.jsx)(q,{})]})}var U=a.p+"static/media/puzzle.a8e67b30.svg",_=[{title:"Home",path:"/shop_mobile",exact:!0,component:function(){return Object(g.jsx)(B,{})},protected:null},{title:"Login",path:"/login",component:function(){return Object(g.jsx)(G,{})},protected:"guest"},{title:"Signup",path:"/signup",component:function(){return Object(g.jsx)(V,{})},protected:"guest"},{title:"Kontakt",path:"/contact",component:function(){return Object(g.jsx)(X,{})},protected:"auth"},{title:"Admin",path:"/admin",component:function(){return Object(g.jsx)($,{})},protected:"admin"},{title:"AddProducts",path:"/addproducts",component:function(){return Object(g.jsx)(te,{})},protected:"admin"}];function F(){var e=Object(c.useContext)(w),t=Object(i.a)(e,2),a=(t[0],t[1],Object(c.useState)(!1)),r=Object(i.a)(a,2),s=r[0],l=r[1],o=C(),d=Object(i.a)(o,1)[0];function u(){l(!s)}return Object(g.jsxs)("nav",{className:"bg-white dark:bg-gray-800 md:sticky anime top-0 z-50",children:[Object(g.jsx)("div",{className:"mx-auto px-4",children:Object(g.jsxs)("div",{className:"flex justify-between",children:[Object(g.jsx)("div",{className:"flex space-x-4",children:Object(g.jsxs)(n.b,{to:"/shop_mobile",className:"flex items-center px-2",children:[Object(g.jsx)("img",{className:"bg-blue-300 dark:bg-yellow-300 opacity-80 hover:opacity-100 hover:bg-blue-600 dark:hover:bg-yellow-500 rounded text-2xl m-2 transition duration-300",src:U,alt:"logo"}),Object(g.jsx)("span",{className:"text-2xl font-semibold dark:text-white",children:"M\u0105dre Zabawki"})]})}),Object(g.jsxs)("div",{className:"flex sm:space-x-6",children:[Object(g.jsx)("div",{className:"flex md:hidden items-center",onClick:function(){return u()},children:Object(g.jsx)("i",{className:"\n                  ".concat(s?"fas fa-times ":"fas fa-bars ","text-black dark:text-white cursor-pointer text-3xl\n                    ")})}),Object(g.jsxs)("div",{className:"flex justify-around sm:space-x-6",children:[Object(g.jsx)("div",{className:"hidden md:grid gap-2.5 h-full text-center items-center",children:Object(g.jsx)(n.b,{className:"text-gray-800 grid cursor-pointer p-2 rounded-lg hover:bg-blue-300 dark:text-white dark:hover:text-gray-800 dark:hover:bg-yellow-300 transition duration-200",to:"/shop_mobile",children:"Home"})}),Object(g.jsx)("div",{className:"hidden md:grid gap-2.5 h-full text-center items-center",children:Object(g.jsx)(n.b,{className:"text-gray-800 grid cursor-pointer p-2 rounded-lg hover:bg-blue-300 dark:text-white dark:hover:text-gray-800 dark:hover:bg-yellow-300 transition duration-200",to:"/contact",children:"Kontakt"})}),Object(g.jsx)("div",{className:"hidden sm:grid items-center",children:Object(g.jsx)(y,{})}),Object(g.jsx)("div",{className:"grid items-center m-2",children:Object(g.jsx)(N,{})})]})]})]})}),Object(g.jsxs)("div",{className:"fixed md:hidden h-full w-64 space-y-6 px-2 py-7 z-50 transform ".concat(s?function(){if(d)return u()}():"-translate-x-full"," bg-blue-500 transition duration-300 ease-in-out inset-y-0 left-0"),children:[Object(g.jsx)("div",{className:"flex space-x-4",children:Object(g.jsxs)(n.b,{to:"/",className:"flex items-center px-2",children:[Object(g.jsx)("img",{className:"bg-blue-300 dark:bg-yellow-300 opacity-80 hover:opacity-100 hover:bg-blue-600 dark:hover:bg-yellow-500 rounded text-2xl m-2 transition duration-300",src:U,alt:"logo",onClick:function(){return u()}}),Object(g.jsx)("span",{className:"text-2xl font-semibold",children:"Sensoryka"})]})}),Object(g.jsx)("nav",{className:"divide-y divide-blue-600",children:_.map((function(e,t){return Object(g.jsx)(n.b,{className:"block py-2 px-4 text-sm hover:bg-blue-200 rounded text-center transition duration-200",to:e.path,onClick:function(){return u()},children:e.title},t)}))})]})]})}a(77);var K=[{title:"Facebook",path:"https://facebook.com/",icons:"facebook-f"},{title:"YouTube",path:"https://youtube.com/",icons:"youtube"},{title:"Twitter",path:"https://twitter.com/",icons:"twitter"},{title:"Instagram",path:"https://instagram.com/",icons:"instagram"}];function R(){return Object(g.jsxs)("footer",{className:"w-full bg-white dark:bg-gray-800 dark:text-white anime bottom-0",children:[Object(g.jsxs)("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-x-2 sm:gap-x-20 md:gap-x-0 grid-rows-2 md:grid-rows-none lg:flex lg:justify-around p-4",children:[Object(g.jsxs)("div",{className:"place",children:[Object(g.jsx)("h1",{className:"pb-2",children:"Services"}),Object(g.jsxs)("div",{className:"lg:pl-5",children:[Object(g.jsx)("p",{children:"Metody p\u0142atno\u015bci"}),Object(g.jsx)("p",{children:"Program partnerski"}),Object(g.jsx)("p",{children:"Program lojalno\u015bciowy"})]})]}),Object(g.jsxs)("div",{className:"place",children:[Object(g.jsx)("h1",{className:"pb-2",children:"About Us"}),Object(g.jsxs)("div",{className:"lg:pl-5",children:[Object(g.jsx)("p",{children:"O nas"}),Object(g.jsx)("p",{children:"Praca"}),Object(g.jsx)("p",{children:"Kariera"}),Object(g.jsx)("p",{children:"Reklam"})]})]}),Object(g.jsxs)("div",{className:"place",children:[Object(g.jsx)("h1",{className:"pb-2",children:"Contact"}),Object(g.jsxs)("div",{className:"lg:pl-5",children:[Object(g.jsx)("p",{children:"Napisz do nas"}),Object(g.jsx)("p",{children:"Biuro Obs\u0142ugi Klienta"}),Object(g.jsx)("p",{children:"Dane kontaktowe"})]})]}),Object(g.jsxs)("div",{className:"place md:ml-5",children:[Object(g.jsx)("h1",{className:"pb-2 ",children:"Social"}),Object(g.jsx)("div",{children:K.map((function(e,t){return Object(g.jsxs)("a",{href:e.path,rel:"noreferrer",target:"_blank",className:"grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-2",children:[Object(g.jsx)("i",{className:"fab fa-".concat(e.icons," py-1 pr-2 lg:text-center")}),Object(g.jsx)("p",{className:"",children:e.title})]},t)}))})]})]}),Object(g.jsx)("div",{className:"flex justify-center items-center h-full pb-5 md:p-5",children:Object(g.jsx)("p",{className:"text-sm text-center",children:"Copyright \xa9 2021 TK. Wszelkie prawa zastrze\u017cone."})})]})}var W=a(27),H=a(16),T=function(e,t){var a=Object(c.useState)({username:"",email:"",password:"",password2:""}),r=Object(i.a)(a,2),s=r[0],l=r[1],n=Object(c.useState)({}),o=Object(i.a)(n,2),d=o[0],u=o[1],m=Object(c.useState)(!1),b=Object(i.a)(m,2),j=b[0],x=b[1];return Object(c.useEffect)((function(){0===Object.keys(d).length&&j&&e()}),[d]),{handleChange:function(e){var t=e.target,a=t.name,c=t.value;l(Object(H.a)(Object(H.a)({},s),{},Object(W.a)({},a,c)))},handleSubmit:function(e){e.preventDefault(),u(t(s)),x(!0)},values:s,errors:d}};function J(e){var t={};return e.email?/\S+@\S+\.\S+/.test(e.email)||(t.email="Email address is invalid"):t.email="Email is required",e.password?e.password.length<8&&(t.password="Password needs to be more than 8 characters"):t.password="Password is required",t}var Z={inputs:[{label:"Email",name:"email",type:"email",icon:"fas fa-envelope"},{label:"Password",name:"password",type:"password",icon:"fas fa-unlock-alt"}]};a(78);function G(){var e=Object(b.g)(),t=Object(c.useState)(!1),a=Object(i.a)(t,2),r=a[0],s=a[1],l=Object(c.useState)(""),o=Object(i.a)(l,2),u=o[0],m=o[1],j=T((function(t){if(r)return;s(!0),d.signInWithEmailAndPassword(p.email,p.password).then((function(t){e.push("/shop_mobile"),m(!1),s(!1)})).catch((function(e){m(e.message),s(!1)}))}),J),x=j.handleChange,h=j.handleSubmit,p=j.values,f=j.errors;return Object(g.jsx)("div",{className:"container justify-center items-center my-10 sm:my-1 sm:m-auto lg:h-2/3 lg:my-5 anime",children:Object(g.jsxs)("div",{className:"bg-blue-300 dark:bg-gray-800 justify-center items-center rounded-md mx-5 grid grid-cols-1 lg:w-2/3 lg:h-full lg:m-auto",children:[Object(g.jsx)("h1",{className:"text-center text-2xl pb-2 my-2",children:"Login"}),Object(g.jsxs)("form",{className:"container justify-center items-center w-full px-2 lg:w-1/2 lg:m-auto",onSubmit:h,children:[Z.inputs.map((function(e,t){return Object(g.jsxs)("div",{className:"w-full flex px-2 group",children:[Object(g.jsx)("div",{className:"flex items-center pb-8 p-3 justify-center",children:Object(g.jsx)("i",{className:"".concat(e.icon," text-xl ").concat(f[e.name]?"text-red-500 opacity-80":" group-hover:text-white dark:group-hover:text-yellow-300 anime")})}),Object(g.jsxs)("div",{className:"w-full",children:[Object(g.jsxs)("div",{className:"formik",children:[Object(g.jsx)("input",{className:"input ".concat(f[e.name]?"border-red-500":"group-hover:border-white dark:group-hover:border-yellow-300 dark:border-white text-white border-black anime"),type:e.type,name:e.name,placeholder:" ",onChange:x,value:p[e.name]}),Object(g.jsx)("label",{className:"label bg-blue-300 dark:bg-gray-800 ".concat(f[e.name]?"text-red-500":"group-hover:text-white anime dark:group-hover:text-yellow-300"),htmlFor:e.name,children:e.label})]}),Object(g.jsx)("div",{children:Object(g.jsx)("p",{className:"err ".concat(f[e.name]?"visible":"invisible"),children:f[e.name]?f[e.name]:"'"})})]})]},t)})),Object(g.jsx)("button",{type:"submit",className:"submit hover:text-white hover:border-white hover:opacity-100 test dark:test dark:hover:text-gray-500 focus:outline-none anime",children:r?Object(g.jsx)("i",{className:"fas fa-circle-notch fa-spin"}):"Login"})]}),""!==u&&Object(g.jsx)("p",{className:"err",children:u}),Object(g.jsxs)("div",{className:"p-1 m-1 justify-center",children:[Object(g.jsx)("p",{className:"text-sm text-center",children:"Don't have an account?"}),Object(g.jsx)(n.b,{to:"/signup",className:"flex justify-center w-max m-auto pt-1 italic border-b border-black hover:text-white hover:border-white anime",children:"Register here"})]})]})})}function Y(e){var t={};return e.username.trim()||(t.username="Username required"),e.email?/\S+@\S+\.\S+/.test(e.email)||(t.email="Email address is invalid"):t.email="Email is required",e.password?e.password.length<8&&(t.password="Password needs to be more than 8 characters"):t.password="Password is required",e.password2?e.password2!==e.password&&(t.password2="Password do not match"):t.password2="Password is required",t}var Q={inputs:[{label:"Username",name:"username",type:"text",icon:"fas fa-user"},{label:"Email",name:"email",type:"email",icon:"fas fa-envelope"},{label:"Password",name:"password",type:"password",icon:"fas fa-unlock-alt"},{label:"Confirm password",name:"password2",type:"password",icon:"fas fa-lock"}]};a(79);function V(e){var t=Object(c.useState)(""),a=Object(i.a)(t,2),r=a[0],s=a[1],l=Object(b.g)(),o=T((function(){d.createUserWithEmailAndPassword(x.email,x.password).then((function(e){u.collection("SignedUpUsersData").doc(e.user.uid).set({Name:x.username,Email:x.email,Password:x.password,Role:"user"}).then((function(){l.replace("/login")})).catch((function(e){return s(e.message)}))})).catch((function(e){return s(e.message)}))}),Y),m=o.handleChange,j=o.handleSubmit,x=o.values,h=o.errors;return Object(g.jsx)("div",{className:"container justify-center items-center my-10 sm:my-1 sm:m-auto lg:h-2/3 lg:my-5 anime",children:Object(g.jsxs)("div",{className:"bg-blue-300 dark:bg-gray-800 justify-center items-center grid grid-cols-1 rounded-md mx-5 py-2 lg:w-2/3 lg:h-full lg:m-auto",children:[Object(g.jsx)("h1",{className:"text-center text-2xl pb-2 my-2",children:"SignUp"}),Object(g.jsxs)("form",{autoComplete:"off",className:"container justify-center items-center w-full px-2 lg:w-1/2 lg:m-auto",onSubmit:j,children:[Q.inputs.map((function(e,t){return Object(g.jsxs)("div",{className:"w-full flex px-2 group",children:[Object(g.jsx)("div",{className:"flex items-center pb-8 p-3 justify-center",children:Object(g.jsx)("i",{className:"".concat(e.icon," text-xl ").concat(h[e.name]?"text-red-500 opacity-80":" group-hover:text-white dark:group-hover:text-yellow-300 anime")})}),Object(g.jsxs)("div",{className:"w-full",children:[Object(g.jsxs)("div",{className:"formik",children:[Object(g.jsx)("input",{className:"input ".concat(h[e.name]?"border-red-500":"group-hover:border-white dark:group-hover:border-yellow-300 dark:border-white border-black anime"),type:e.type,name:e.name,placeholder:" ",onChange:m,value:x[e.name]}),Object(g.jsx)("label",{htmlFor:e.label,className:"label bg-blue-300 dark:bg-gray-800 ".concat(h[e.name]?"text-red-500":"group-hover:text-white anime dark:group-hover:text-yellow-300"),children:e.label})]}),Object(g.jsx)("p",{className:"err ".concat(h[e.name]?"visible":"invisible"),children:h[e.name]?h[e.name]:"'"})]})]},t)})),r&&Object(g.jsx)("div",{className:"",children:r}),Object(g.jsx)("button",{type:"submit",className:"submit hover:text-white hover:border-white hover:opacity-100 test dark:test dark:hover:text-gray-500 focus:outline-none anime",children:"Register"})]}),Object(g.jsxs)("div",{className:"p-1 m-1 justify-center",children:[Object(g.jsx)("p",{className:"text-sm text-center",children:"Already have an account?"}),Object(g.jsx)(n.b,{to:"/login",className:"flex justify-center w-max m-auto pt-1 italic border-b border-black hover:text-white hover:border-white anime",children:"Login here"})]})]})})}function X(){return Object(g.jsx)("div",{className:"init",children:Object(g.jsx)("h1",{className:"text-4xl m-auto",children:"Napisz do Mnie"})})}function $(){return Object(g.jsxs)("div",{className:"w-full lg:h-2/3 flex flex-wrap sm:h-full anime",children:[Object(g.jsx)("div",{className:"grid w-full h-12 justify-center border-t bg-blue-300 dark:bg-gray-800 dark:text-white lg:flex lg:h-16 lg:justify-start lg:pl-5 anime",children:Object(g.jsx)("p",{className:"flex text-2xl font-bold items-center",children:"Admin"})}),Object(g.jsxs)("div",{className:"flex flex-wrap w-full px-2 sm:h-2/3 md:flex-nowrap dark:text-white",children:[Object(g.jsx)("div",{className:"flex w-full justify-center border-b border-yellow-500 dark:border-yellow-600 py-2 sm:items-center md:border-b-0 md:border-r",children:Object(g.jsxs)(n.b,{to:"/addproducts",className:"grid cursor-pointer",children:[Object(g.jsx)("i",{className:"fas fa-shopping-cart flex w-full justify-center"}),Object(g.jsx)("p",{className:"grid pt-1 w-full",children:"Dodaj product"})]})}),Object(g.jsx)("div",{className:"flex w-full justify-center py-2 sm:items-center",children:Object(g.jsxs)(n.b,{to:"/login",className:"grid cursor-pointer",children:[Object(g.jsx)("i",{className:"fas fa-user flex w-full justify-center mt-2"}),Object(g.jsx)("p",{className:"grid pt-1 w-full",children:"Zaloguj"})]})})]})]})}a(80);function ee(){return Object(g.jsx)("svg",{className:"w-8 h-8",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:Object(g.jsx)("path",{d:"M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z"})})}function te(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),a=t[0],r=t[1],s=Object(c.useState)(),l=Object(i.a)(s,2),n=l[0],o=l[1],d=Object(c.useState)(""),b=Object(i.a)(d,2),j=b[0],x=b[1],h=Object(c.useState)(""),p=Object(i.a)(h,2),f=p[0],O=p[1],v=Object(c.useState)(""),w=Object(i.a)(v,2),y=w[0],N=w[1],k=["image/png","image/jpeg","image/jpg"];return Object(g.jsx)("div",{className:"flex justify-center items-center my-5 lg:my-0 lg:h-2/3 dark:text-white anime",children:Object(g.jsxs)("div",{className:"flex flex-wrap w-10/12 h-full lg:h-4/6 bg-blue-300 rounded-md dark:bg-gray-800",children:[Object(g.jsx)("p",{className:"w-full py-2 flex justify-center items-center border-b border-black dark:border-white border-opacity-50",children:"Hi Admin"}),Object(g.jsxs)("form",{onSubmit:function(e){e.preventDefault(),m.ref("product-images/".concat(j.name)).put(j).on("state_changed",(function(e){var t=e.bytesTransferred/e.totalBytes*100;console.log(t)}),(function(e){N(e.message)}),(function(){m.ref("product-images").child(j.name).getDownloadURL().then((function(e){u.collection("Products").add({ProductName:a,ProductPrice:Number(n),ProductImg:e,ProductDescription:f}).then((function(){r(""),o(""),x(""),O(""),N(""),document.getElementById("file").value=""})).catch((function(e){return N(e.message)}))}))}))},autoComplete:"off",className:"flex flex-wrap w-full m-2 overflow-hidden",children:[Object(g.jsxs)("div",{className:"flex flex-wrap w-full lg:m-2 lg:grid lg:grid-rows-1 lg:grid-cols-4",children:[Object(g.jsx)("label",{htmlFor:"product-name",className:"w-full text-center py-2 lg:text-left",children:"Product Name"}),Object(g.jsx)("input",{type:"text",required:!0,className:"w-full mx-3 rounded text-center py-1 outline-none lg:mx-0 lg:py-0 lg:my-1 lg:col-span-3 dark:text-black",onChange:function(e){return r(e.target.value)},value:a})]}),Object(g.jsxs)("div",{className:"flex flex-wrap w-full  lg:m-2 lg:grid lg:grid-rows-1 lg:grid-cols-4",children:[Object(g.jsx)("label",{htmlFor:"product-price",className:"w-full text-center py-2 lg:text-left",children:"Product Price"}),Object(g.jsx)("input",{type:"number",required:!0,min:"0",className:"w-full mx-3 rounded text-center py-1 outline-none lg:mx-0 lg:py-0 lg:my-1 lg:col-span-3 dark:text-black",onChange:function(e){return o(e.target.value)},value:n})]}),Object(g.jsxs)("div",{className:"flex flex-wrap w-full lg:m-2 lg:grid lg:grid-rows-1 lg:grid-cols-4",children:[Object(g.jsx)("label",{htmlFor:"product-description",className:"w-full text-center py-2 lg:text-left",children:"Product Description"}),Object(g.jsx)("input",{type:"text",required:!0,className:"w-full mx-3 rounded text-center py-1 outline-none lg:mx-0 lg:py-0 lg:my-1 lg:col-span-3 dark:text-black",onChange:function(e){return O(e.target.value)},value:f})]}),Object(g.jsxs)("div",{className:"flex flex-wrap w-full  lg:m-2 lg:grid lg:grid-rows-1 lg:grid-cols-4",children:[Object(g.jsx)("p",{className:"w-full text-center py-2 lg:text-left",children:"Product Image"}),Object(g.jsxs)("label",{htmlFor:"file",className:"items-center sm:justify-around lg:justify-center border border-black dark:border-white p-2 mx-3 mb-2 cursor-pointer w-full sm:flex lg:mx-0 lg:py-0 lg:my-1 lg:col-span-3",children:[Object(g.jsx)("div",{className:"flex justify-center sm:mx-2",children:Object(g.jsx)(ee,{})}),Object(g.jsx)("input",{className:"file flex w-full sm:w-min sm:block lg:py-3",type:"file",id:"file",onChange:function(e){var t=e.target.files[0];t&&k.includes(t.type)?(x(t),N("")):(x(null),N("Please select a valid image type png or jpeg"))},required:!0})]})]}),Object(g.jsx)("button",{className:"uppercase bg-yellow-700 dark:bg-yellow-500 w-full m-4 p-1 rounded-lg focus:outline-none",children:"add"})]}),y&&Object(g.jsx)("span",{className:"w-full flex justify-center items-center pb-2",children:y})]})})}function ae(){return Object(g.jsx)("div",{className:"flex h-screen",children:Object(g.jsx)("h1",{className:"text-4xl m-auto",children:"Page Not Found"})})}function ce(e){var t=Object(c.useContext)(w),a=Object(i.a)(t,2),r=a[0],s=a[1];return r&&"admin"===s.role?Object(g.jsx)(b.b,Object(H.a)({},e)):Object(g.jsx)(b.a,{to:"/login"})}function re(e){var t=Object(c.useContext)(w),a=Object(i.a)(t,2),r=a[0],s=a[1];return r&&"user"===s.role?Object(g.jsx)(b.b,Object(H.a)({},e)):Object(g.jsx)(b.a,{to:"/login"})}function se(e){var t=Object(c.useContext)(w),a=Object(i.a)(t,2),r=a[0];a[1];return r?Object(g.jsx)(b.a,{to:"/shop_mobile"}):Object(g.jsx)(b.b,Object(H.a)({},e))}var le=function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),a=t[0],r=t[1],s=Object(c.useState)(!0),l=Object(i.a)(s,2),n=l[0],o=l[1],m=Object(c.useState)({}),j=Object(i.a)(m,2),x=j[0],h=j[1],p=Object(b.h)();return Object(c.useEffect)((function(){o(!0),d.onAuthStateChanged((function(e){e?(r(!0),o(!1),u.collection("SignedUpUsersData").doc(e.uid).get().then((function(e){h({user:e.data().Name,role:e.data().Role})}))):(h({}),r(!1),o(!1))}))}),[]),n?Object(g.jsx)(k,{}):Object(g.jsx)(w.Provider,{value:[a,x],children:Object(g.jsxs)(v,{children:[Object(g.jsx)(F,{}),Object(g.jsx)(z,{}),Object(g.jsxs)(b.d,{location:p,children:[_.map((function(e,t){return"admin"===e.protected?Object(g.jsx)(ce,{path:e.path,exact:e.exact,component:e.component},t):"guest"===e.protected?Object(g.jsx)(se,{path:e.path,exact:e.exact,component:e.component},t):"auth"===e.protected?Object(g.jsx)(re,{path:e.path,exact:e.exact,component:e.component},t):Object(g.jsx)(b.b,{path:e.path,exact:e.exact,component:e.component},t)})),Object(g.jsx)(b.b,{path:"*",children:Object(g.jsx)(ae,{})})]},p.pathname),Object(g.jsx)(R,{})]})})};l.a.render(Object(g.jsx)(n.a,{children:Object(g.jsx)(le,{})}),document.getElementById("root"))}},[[81,1,2]]]);
//# sourceMappingURL=main.ad315716.chunk.js.map