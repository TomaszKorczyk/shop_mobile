(this.webpackJsonpshop_mobile=this.webpackJsonpshop_mobile||[]).push([[0],{33:function(e,t,c){},54:function(e,t,c){},59:function(e,t,c){},67:function(e,t,c){},75:function(e,t,c){},76:function(e,t,c){"use strict";c.r(t);var a=c(2),s=c(24),r=c.n(s),i=c(14),n=(c(33),c(5)),l=[{id:1,title:"shark",img:c.p+"static/media/shark.622ff321.jpg"},{id:2,title:"pi\u0142ki",img:c.p+"static/media/pi\u0142ki.bbc4fedf.jpg"},{id:3,title:"pude\u0142ko",img:c.p+"static/media/pudelko.9e68adf5.jpg"},{id:4,title:"stopy",img:c.p+"static/media/stopy.ccc2904f.jpg"},{id:5,title:"mata",img:c.p+"static/media/mata.73543f8a.jpg"},{id:6,title:"tablica",img:c.p+"static/media/tablica.e2e19bbd.jpg"}],o=c(37),d=c.n(o),j=(c(52),c(53),c(54),c(1)),u={0:{items:1},600:{items:3},1200:{items:5}};var m=function(){return Object(j.jsx)(d.a,{className:"owl-theme dark:bg-gray-800 anime",loop:!0,autoplay:!0,center:!0,dots:!0,margin:50,responsive:u,children:l.map((function(e,t){return Object(j.jsx)("div",{className:"item",children:Object(j.jsx)("img",{className:"img",src:e.img,alt:e.title})},t)}))})},b=c(44),x=c(38),p=c(39),h=c(45),f=c(43),g=c(20);c(56),c(78),c(77);g.a.initializeApp({apiKey:"AIzaSyBZhCJMWEyPKCpOusYimmSQhfehNBSaCKk",authDomain:"shop-mobile-6a8e6.firebaseapp.com",projectId:"shop-mobile-6a8e6",storageBucket:"shop-mobile-6a8e6.appspot.com",messagingSenderId:"189781979191",appId:"1:189781979191:web:a25dd6963c39ff29514fb2",measurementId:"G-6CH3P30GRD"});g.a.auth();var O=g.a.firestore(),v=g.a.storage(),N=Object(a.createContext)(),y=function(e){Object(h.a)(c,e);var t=Object(f.a)(c);function c(){var e;Object(x.a)(this,c);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={products:[]},e}return Object(p.a)(c,[{key:"componentDidMount",value:function(){var e=this,t=this.state.products;O.collection("Products").onSnapshot((function(c){c.docChanges().forEach((function(c){"added"===c.type&&t.push({ProductID:c.doc.id,ProductName:c.doc.data().ProductName,ProductPrice:c.doc.data().ProductPrice,ProductImg:c.doc.data().ProductImg}),e.setState({products:t})}))}))}},{key:"render",value:function(){return Object(j.jsx)(N.Provider,{value:{products:Object(b.a)(this.state.products)},children:this.props.children})}}]),c}(a.Component),w=(c(59),function(e){var t=e.product;return Object(j.jsxs)("div",{className:"mb-2 border border-gray-500 bg-white dark:bg-gray-800  overflow-hidden anime",children:[Object(j.jsx)("div",{children:Object(j.jsx)("div",{className:"relative flex justify-center imgs mt-1",children:Object(j.jsx)("img",{className:"absolute h-full w-full flex top-0 m-auto text-center justify-center object-contain shadow-lg rounded-lg",src:t.ProductImg,alt:t.ProductName})})}),Object(j.jsxs)("section",{className:"px-2 pt-1",children:[Object(j.jsx)("h4",{className:"w-full text-center capitalize text-lg text-gray-800 dark:text-white",children:t.ProductName}),Object(j.jsxs)("h5",{className:"w-full pr-2 text-right tracking-wide text-gray-700 opacity-70 dark:text-white",children:[t.ProductPrice,".00 z\u0142"]}),Object(j.jsx)("p",{className:"text-justify text-sm dark:text-gray-200 tracking-wider",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, expedita."})]}),Object(j.jsx)("div",{className:"flex justify-center py-1",children:Object(j.jsx)("button",{className:"bg-blue-300 dark:hover:text-black dark:bg-yellow-300 rounded-xl cursor-pointer px-4 py-0.5 my-1 focus:outline-none anime",children:"Add to cart"})})]})});function k(){return Object(j.jsx)("div",{className:"flex h-screen",children:Object(j.jsx)("p",{className:"m-auto",children:Object(j.jsx)("i",{className:"fas fa-circle-notch fa-spin text-5xl text-blue-800"})})})}var P=function(){var e=Object(a.useContext)(N).products;return Object(j.jsxs)("main",{className:"mb-5",children:[0!==e.length&&Object(j.jsx)("h1",{className:"flex justify-center font-bold tracking-wider uppercase py-4 text-2xl",children:"Products"}),Object(j.jsxs)("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5",children:[0===e.length&&Object(j.jsx)(k,{}),e.map((function(e){return Object(j.jsx)("div",{className:"grid mx-1",children:Object(j.jsx)(w,{product:e})},e.ProductID)}))]})]})};function C(){return Object(j.jsxs)("div",{className:"overflow-hidden",children:[Object(j.jsx)(m,{}),Object(j.jsx)(P,{})]})}function S(){return Object(j.jsx)("div",{className:"init",children:Object(j.jsx)("h1",{className:"text-4xl m-auto",children:"Napisz do Mnie"})})}function z(){return Object(j.jsxs)("div",{className:"w-full h-full flex flex-wrap",children:[Object(j.jsx)("div",{className:"grid w-full h-12 justify-center items-center top-0 bg-blue-300 lg:flex lg:h-16 lg:justify-start lg:pl-5",children:Object(j.jsx)("p",{className:"flex text-2xl font-bold",children:"Admin"})}),Object(j.jsxs)("div",{className:"flex flex-wrap h-52 w-full items-center justify-center divide-y divide-yellow-500 p-3 md:divide-y-0 md:flex-nowrap md:divide-x md:h-96",children:[Object(j.jsx)("div",{className:"flex w-full h-1/2 justify-center mx-auto",children:Object(j.jsxs)(i.b,{to:"/addproducts",className:"grid items-center cursor-pointer",children:[Object(j.jsx)("i",{className:"fas fa-shopping-cart flex w-full justify-center mt-2"}),Object(j.jsx)("p",{className:"grid pt-1 w-full",children:"Dodaj product"})]})}),Object(j.jsx)("div",{className:"flex w-full h-1/2 justify-center mx-auto",children:Object(j.jsxs)(i.b,{to:"/login",className:"grid items-center cursor-pointer",children:[Object(j.jsx)("i",{className:"fas fa-user flex justify-center mt-2"}),Object(j.jsx)("p",{className:"grid pt-1",children:"Zaloguj"})]})})]})]})}var I=c(8);c(67);function A(){return Object(j.jsx)("svg",{className:"w-8 h-8",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:Object(j.jsx)("path",{d:"M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z"})})}function M(){var e=Object(a.useState)(""),t=Object(I.a)(e,2),c=t[0],s=t[1],r=Object(a.useState)(0),i=Object(I.a)(r,2),n=i[0],l=i[1],o=Object(a.useState)(""),d=Object(I.a)(o,2),u=d[0],m=d[1],b=Object(a.useState)(""),x=Object(I.a)(b,2),p=x[0],h=x[1],f=["image/png","image/jpeg","image/jpg"];return Object(j.jsx)("div",{className:"my-5 py-5 init",children:Object(j.jsxs)("div",{className:"flex flex-wrap w-10/12 bg-blue-300 rounded-md my-5",children:[Object(j.jsx)("p",{className:"w-full flex justify-center pt-1 border-b border-black border-opacity-50",children:"Hi Admin"}),Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),v.ref("product-images/".concat(u.name)).put(u).on("state_changed",(function(e){var t=e.bytesTransferred/e.totalBytes*100;console.log(t)}),(function(e){h(e.message)}),(function(){v.ref("product-images").child(u.name).getDownloadURL().then((function(e){O.collection("Products").add({ProductName:c,ProductPrice:Number(n),ProductImg:e}).then((function(){s(""),l(0),m(""),h(""),document.getElementById("file").value=""})).catch((function(e){return h(e.message)}))}))}))},autoComplete:"off",className:"flex flex-wrap w-full overflow-hidden ",children:[Object(j.jsx)("label",{htmlFor:"product-name",className:"w-full text-center py-2",children:"Product Name"}),Object(j.jsx)("input",{type:"text",required:!0,className:"w-full mx-3 rounded text-center py-1 outline-none",onChange:function(e){return s(e.target.value)},value:c}),Object(j.jsx)("label",{htmlFor:"product-price",className:"w-full text-center py-2",children:"Product Price"}),Object(j.jsx)("input",{type:"number",required:!0,className:"w-full mx-3 rounded text-center py-1 outline-none",onChange:function(e){return l(e.target.value)},value:n}),Object(j.jsx)("p",{className:"w-full text-center py-2",children:"Product Image"}),Object(j.jsxs)("label",{htmlFor:"file",className:"flex items-center text-white justify-center w-full border mx-3 mb-2 cursor-pointer",children:[Object(j.jsx)(A,{}),Object(j.jsx)("input",{className:"input",type:"file",id:"file",onChange:function(e){var t=e.target.files[0];t&&f.includes(t.type)?(m(t),h("")):(m(null),h("Please select a valid image type png or jpeg"))},required:!0,accept:"image/*"})]}),Object(j.jsx)("button",{className:"uppercase bg-yellow-700 w-full mx-4 mb-4 p-1 rounded-lg outline-none",children:"add"})]}),p&&Object(j.jsx)("span",{className:"w-full flex justify-center pb-2",children:p})]})})}var B=[{title:"Home",path:"/shop_mobile",exact:!0,component:function(){return Object(j.jsx)(C,{})},protected:null},{title:"Kontakt",path:"/contact",component:function(){return Object(j.jsx)(S,{})},protected:null},{title:"Admin",path:"/admin",component:function(){return Object(j.jsx)(z,{})},protected:"admin"},{title:"AddProducts",path:"/addproducts",component:function(){return Object(j.jsx)(M,{})},protected:"admin"}],D=c(42),L=c(80);function E(){var e=Object(a.useState)(!1),t=Object(I.a)(e,2),c=t[0],s=t[1],r=Object(L.a)().y;return Object(a.useEffect)((function(){s(r>400)}),[r]),[c]}function K(){var e=E();return!!Object(I.a)(e,1)[0]&&Object(j.jsx)("div",{className:"fixed w-12 h-12 bottom-5 right-5 rounded-full text-black dark:text-white dark:hover:text-gray-800 bg-blue-300 hover:bg-blue-500 dark:bg-yellow-300  flex cursor-pointer opacity-90 hover:opacity-100 transition duration-300 ease-in-out z-40",onClick:function(){return D.animateScroll.scrollToTop()},children:Object(j.jsx)("i",{className:"icon fas fa-chevron-up text-2xl flex w-full items-center justify-around animate-up"})})}var T=c.p+"static/media/puzzle.a8e67b30.svg";function _(){var e=function(){var e=Object(a.useState)(localStorage.theme),t=Object(I.a)(e,2),c=t[0],s=t[1],r="dark"===c?"light":"dark";return Object(a.useEffect)((function(){var e=window.document.documentElement;e.classList.remove(r),e.classList.add(c),localStorage.setItem("theme",c)}),[c,r]),[r,s]}(),t=Object(I.a)(e,2),c=t[0],s=t[1];return Object(j.jsx)("span",{onClick:function(){return s(c)},className:"w-10 h-10 bg-blue-300 dark:opacity-80 dark:hover:opacity-100 hover:text-white hover:bg-blue-500 dark:text-white dark:hover:text-black dark:bg-yellow-300 hover:opacity-100 rounded-full cursor-pointer flex items-center justify-center transition duration-300",children:"light"===c?Object(j.jsx)("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:Object(j.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"})}):Object(j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:Object(j.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"})})})}function F(){var e=Object(a.useState)(!1),t=Object(I.a)(e,2),c=t[0],s=t[1],r=E(),n=Object(I.a)(r,1)[0];function l(){s(!c)}return Object(j.jsxs)("nav",{className:"bg-white dark:bg-gray-800 md:sticky anime top-0 z-50",children:[Object(j.jsx)("div",{className:"mx-auto px-4",children:Object(j.jsxs)("div",{className:"flex justify-between",children:[Object(j.jsx)("div",{className:"flex space-x-4",children:Object(j.jsxs)(i.b,{to:"/shop_mobile",className:"flex items-center px-2",children:[Object(j.jsx)("img",{className:"bg-blue-300 dark:bg-yellow-300 opacity-80 hover:opacity-100 hover:bg-blue-600 dark:hover:bg-yellow-500 rounded text-2xl m-2 transition duration-300",src:T,alt:"logo"}),Object(j.jsx)("span",{className:"text-2xl font-semibold dark:text-white",children:"Sensoryka"})]})}),Object(j.jsxs)("div",{className:"flex space-x-6",children:[Object(j.jsx)("div",{className:"flex md:hidden items-center",onClick:function(){return l()},children:Object(j.jsx)("i",{className:"\n                  ".concat(c?"fas fa-times ":"fas fa-bars ","text-black dark:text-white cursor-pointer text-3xl\n                    ")})}),Object(j.jsxs)("div",{className:"flex justify-around space-x-6",children:[Object(j.jsx)("div",{className:"",children:Object(j.jsx)("ul",{className:"hidden md:grid grid-cols-4 gap-2.5 h-full text-center items-center",children:B.map((function(e,t){return Object(j.jsx)("li",{children:Object(j.jsx)(i.b,{className:"text-gray-800 cursor-pointer p-2 rounded-lg hover:bg-blue-300 dark:text-white dark:hover:text-gray-800 dark:hover:bg-yellow-300 transition duration-200",to:e.path,children:e.title})},t)}))})}),Object(j.jsx)("div",{className:"hidden sm:grid items-center",children:Object(j.jsx)(_,{})})]})]})]})}),Object(j.jsxs)("div",{className:"fixed md:hidden h-full w-64 space-y-6 px-2 py-7 z-50 transform ".concat(c?function(){if(n)return l()}():"-translate-x-full"," bg-blue-500 transition duration-300 ease-in-out inset-y-0 left-0"),children:[Object(j.jsx)("div",{className:"flex space-x-4",children:Object(j.jsxs)(i.b,{to:"/",className:"flex items-center px-2",children:[Object(j.jsx)("img",{className:"bg-blue-300 dark:bg-yellow-300 opacity-80 hover:opacity-100 hover:bg-blue-600 dark:hover:bg-yellow-500 rounded text-2xl m-2 transition duration-300",src:T,alt:"logo",onClick:function(){return l()}}),Object(j.jsx)("span",{className:"text-2xl font-semibold",children:"Sensoryka"})]})}),Object(j.jsx)("nav",{className:"divide-y divide-blue-600",children:B.map((function(e,t){return Object(j.jsx)(i.b,{className:"block py-2 px-4 text-sm hover:bg-blue-200 rounded text-center transition duration-200",to:e.path,onClick:function(){return l()},children:e.title},t)}))})]})]})}c(75);var H=[{title:"Facebook",path:"https://facebook.com/",icons:"facebook-f"},{title:"YouTube",path:"https://youtube.com/",icons:"youtube"},{title:"Twitter",path:"https://twitter.com/",icons:"twitter"},{title:"Instagram",path:"https://instagram.com/",icons:"instagram"}];function W(){return Object(j.jsxs)("footer",{className:"w-full bg-white dark:bg-gray-800 dark:text-white anime bottom-0 ",children:[Object(j.jsxs)("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-x-2 sm:gap-x-20 md:gap-x-0 grid-rows-2 md:grid-rows-none lg:flex lg:justify-around p-4",children:[Object(j.jsxs)("div",{className:"place",children:[Object(j.jsx)("h1",{className:"pb-2",children:"Services"}),Object(j.jsxs)("div",{className:"lg:pl-5",children:[Object(j.jsx)("p",{children:"Metody p\u0142atno\u015bci"}),Object(j.jsx)("p",{children:"Program partnerski"}),Object(j.jsx)("p",{children:"Program lojalno\u015bciowy"})]})]}),Object(j.jsxs)("div",{className:"place",children:[Object(j.jsx)("h1",{className:"pb-2",children:"About Us"}),Object(j.jsxs)("div",{className:"lg:pl-5",children:[Object(j.jsx)("p",{children:"O nas"}),Object(j.jsx)("p",{children:"Praca"}),Object(j.jsx)("p",{children:"Kariera"}),Object(j.jsx)("p",{children:"Reklam"})]})]}),Object(j.jsxs)("div",{className:"place",children:[Object(j.jsx)("h1",{className:"pb-2",children:"Contact"}),Object(j.jsxs)("div",{className:"lg:pl-5",children:[Object(j.jsx)("p",{children:"Napisz do nas"}),Object(j.jsx)("p",{children:"Biuro Obs\u0142ugi Klienta"}),Object(j.jsx)("p",{children:"Dane kontaktowe"})]})]}),Object(j.jsxs)("div",{className:"place md:ml-5",children:[Object(j.jsx)("h1",{className:"pb-2 ",children:"Social"}),Object(j.jsx)("div",{children:H.map((function(e,t){return Object(j.jsxs)("a",{href:e.path,rel:"noreferrer",target:"_blank",className:"grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-2",children:[Object(j.jsx)("i",{className:"fab fa-".concat(e.icons," py-1 pr-2 lg:text-center")}),Object(j.jsx)("p",{className:"",children:e.title})]},t)}))})]})]}),Object(j.jsx)("div",{className:"flex justify-center items-center h-full pb-5 md:p-5",children:Object(j.jsx)("p",{className:"text-sm text-center",children:"Copyright \xa9 2021 TK. Wszelkie prawa zastrze\u017cone."})})]})}function q(){return Object(j.jsx)("div",{className:"flex h-screen",children:Object(j.jsx)("h1",{className:"text-4xl m-auto",children:"Page Not Found"})})}var J=function(){return Object(j.jsxs)(y,{children:[Object(j.jsx)(F,{}),Object(j.jsx)(K,{}),Object(j.jsxs)(n.c,{children:[B.map((function(e,t){return Object(j.jsx)(n.a,{path:e.path,exact:e.exact,component:e.component},t)})),Object(j.jsx)(n.a,{path:"*",children:Object(j.jsx)(q,{})})]}),Object(j.jsx)(W,{})]})};r.a.render(Object(j.jsx)(i.a,{children:Object(j.jsx)(J,{})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.6c9a61e4.chunk.js.map