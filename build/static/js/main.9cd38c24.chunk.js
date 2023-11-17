(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,a,t){e.exports=t(52)},33:function(e,a,t){},52:function(e,a,t){"use strict";t.r(a);var r=t(0),c=t.n(r),n=t(11),l=t.n(n),o=t(1),s=t(2);var m="http://localhost:8003/api";const i=()=>"undefined"!=typeof window&&(!!localStorage.getItem("jwt")&&JSON.parse(localStorage.getItem("jwt"))),d=(e,a)=>e.location.pathname===a?{color:"#ff9900"}:{color:"#ffffff"};var u=Object(s.g)(e=>{let{history:a}=e;return c.a.createElement("div",null,c.a.createElement("ul",{className:"nav nav-tabs bg-primary"},c.a.createElement("li",{className:"nav-item"},c.a.createElement(o.b,{className:"nav-link",style:d(a,"/"),to:"/"},"Home")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(o.b,{className:"nav-link",style:d(a,"/shop"),to:"/shop"},"Shop")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(o.b,{className:"nav-link",style:d(a,"/cart"),to:"/cart"},"Cart"," ",c.a.createElement("sup",null,c.a.createElement("small",{className:"cart-badge"},"undefined"!==typeof window&&localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")).length:0)))),i()&&0===i().user.role&&c.a.createElement("li",{className:"nav-item"},c.a.createElement(o.b,{className:"nav-link",style:d(a,"/user/dashboard"),to:"/user/dashboard"},"Dashboard")),i()&&1===i().user.role&&c.a.createElement("li",{className:"nav-item"},c.a.createElement(o.b,{className:"nav-link",style:d(a,"/admin/dashboard"),to:"/admin/dashboard"},"Dashboard")),!i()&&c.a.createElement(r.Fragment,null,c.a.createElement("li",{className:"nav-item"},c.a.createElement(o.b,{className:"nav-link",style:d(a,"/signin"),to:"/signin"},"Signin")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(o.b,{className:"nav-link",style:d(a,"/signup"),to:"/signup"},"Signup"))),i()&&c.a.createElement("li",{className:"nav-item"},c.a.createElement("span",{className:"nav-link",style:{cursor:"pointer",color:"#ffffff"},onClick:()=>(e=>{if("undefined"!==typeof window)return localStorage.removeItem("jwt"),e(),fetch("".concat(m,"/signout"),{method:"GET"}).then(e=>{console.log("signout",e)}).catch(e=>console.log(e))})(()=>{a.push("/")})},"Signout"))))});t(33);var p=e=>{let{title:a="Title",description:t="description",className:r,children:n}=e;return c.a.createElement("div",null,c.a.createElement(u,null),c.a.createElement("div",{className:"jumbotron"},c.a.createElement("h2",null,a),c.a.createElement("p",{className:"lead"},t)),c.a.createElement("div",{className:r},n))};var E=()=>{const[e,a]=Object(r.useState)({name:"",email:"",password:"",error:"",success:!1}),{name:t,email:n,password:l,success:s,error:i}=e,d=t=>r=>{a({...e,error:!1,[t]:r.target.value})},u=r=>{r.preventDefault(),(e=>fetch("".concat(m,"/signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then(e=>e.json()).catch(e=>{console.log(e)}))({name:t,email:n,password:l}).then(t=>{t.error?a({...e,error:t.error,success:!1}):a({...e,name:"",email:"",password:"",error:"",success:!0})})};return c.a.createElement(p,{title:"Signup Page",description:"Fred Ecommerce App sign up",className:"container col-md-4 offset-md-2"},c.a.createElement("div",{className:"alert alert-info",style:{display:s?"":"none"}},"New account created, please ",c.a.createElement(o.b,{to:"/signin"},"sign in")),c.a.createElement("div",{className:"alert alert-danger",style:{display:i?"":"none"}},i),c.a.createElement("form",null,c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"text-muted"},"Name"),c.a.createElement("input",{onChange:d("name"),type:"text",className:"form-control",value:t})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"text-muted"},"Email"),c.a.createElement("input",{onChange:d("email"),type:"email",className:"form-control",value:n})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"text-muted"},"Password"),c.a.createElement("input",{onChange:d("password"),type:"password",className:"form-control",value:l})),c.a.createElement("button",{onClick:u,className:"btn btn-primary"},"Submit")))};var g=()=>{const[e,a]=Object(r.useState)({email:"enoma@dt.eu",password:"rrrrrrrrr9",error:"",loading:!1,redirectToReferrer:!1}),{email:t,password:n,loading:l,error:o,redirectToReferrer:d}=e,{user:u}=i(),E=t=>r=>{a({...e,error:!1,[t]:r.target.value})},g=r=>{r.preventDefault(),a({...e,error:!1,loading:!0}),(e=>fetch("".concat(m,"/signin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then(e=>e.json()).catch(e=>{console.log(e)}))({email:t,password:n}).then(t=>{t.error?a({...e,error:t.error,loading:!1}):((e,a)=>{"undefined"!==typeof window&&(localStorage.setItem("jwt",JSON.stringify(e)),a())})(t,()=>{a({...e,redirectToReferrer:!0})})})};return c.a.createElement(p,{title:"Signin Page",description:"Fred Ecommerce App sign in",className:"container col-md-4 offset-md-2"},l&&c.a.createElement("div",{className:"alert alert-info"},c.a.createElement("h2",null,"Loading")),c.a.createElement("div",{className:"alert alert-danger",style:{display:o?"":"none"}},o),c.a.createElement("form",null,c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"text-muted"},"Email"),c.a.createElement("input",{onChange:E("email"),type:"email",className:"form-control",value:t})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"text-muted"},"Password"),c.a.createElement("input",{onChange:E("password"),type:"password",className:"form-control",value:n})),c.a.createElement("button",{onClick:g,className:"btn btn-primary"},"Submit")),d?u&&1===u.role?c.a.createElement(s.a,{to:"/admin/dashboard"}):c.a.createElement(s.a,{to:"/user/dashboard"}):i()?c.a.createElement(s.a,{to:"/"}):void 0)},h=t(19),N=t.n(h);const b=e=>fetch("".concat(m,"/products?sortBy=").concat(e,"&order=desc&limit=6"),{method:"GET"}).then(e=>e.json()).catch(e=>console.log(e)),v=()=>(console.log(m),fetch("".concat(m,"/categories"),{method:"GET"}).then(e=>e.json()).catch(e=>console.log(e))),f=function(e,a){const t={limit:a,skip:e,filters:arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}};return fetch("".concat(m,"/products/by/search"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).then(e=>e.json()).catch(e=>{console.log(e)})};var y=e=>{let{item:a,url:t}=e;return c.a.createElement("div",{className:"product-img"},c.a.createElement("img",{src:"".concat(m,"/").concat(t,"/photo/").concat(a._id),alt:a.name,className:"mb-3",style:{maxHeight:"100%",maxWidth:"100%"}}))},S=t(10),w=t.n(S);var j=e=>{let{product:a,showViewProductButton:t=!0,showAddToCartButton:n=!0,cartUpdate:l=!1,showRemoveProductButton:m=!1,setRun:i=(e=>e),run:d}=e;const[u,p]=Object(r.useState)(!1),[E,g]=Object(r.useState)(a.count),h=()=>{!function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=(arguments.length>1&&void 0!==arguments[1]&&arguments[1],arguments.length>2&&void 0!==arguments[2]?arguments[2]:e=>e),t=[];"undefined"!==typeof window&&(localStorage.getItem("cart")&&(t=JSON.parse(localStorage.getItem("cart"))),t.push({...e,count:1}),t=Array.from(new Set(t.map(e=>e._id))).map(e=>t.find(a=>a._id===e)),localStorage.setItem("cart",JSON.stringify(t)),a())}(a,p(!0))},N=e=>a=>{i(!d),g(a.target.value<1?1:a.target.value),a.target.value>=1&&((e,a)=>{let t=[];"undefined"!==typeof window&&(localStorage.getItem("cart")&&(t=JSON.parse(localStorage.getItem("cart"))),t.map((r,c)=>{r._id===e&&(t[c].count=a)}),localStorage.setItem("cart",JSON.stringify(t)))})(e,a.target.value)};return c.a.createElement("div",{className:"card "},c.a.createElement("div",{className:"card-header card-header-1 "},a.name),c.a.createElement("div",{className:"card-body"},(e=>{if(e)return c.a.createElement(s.a,{to:"/cart"})})(u),c.a.createElement(y,{item:a,url:"product"}),c.a.createElement("p",{className:"card-p  mt-2"},a.description.substring(0,100)," "),c.a.createElement("p",{className:"card-p black-10"},"$ ",a.price),c.a.createElement("p",{className:"black-9"},"Category: ",a.category&&a.category.name),c.a.createElement("p",{className:"black-8"},"Added on ",w()(a.createdAt).fromNow()),(e=>e>0?c.a.createElement("span",{className:"badge badge-primary badge-pill"},"In Stock "):c.a.createElement("span",{className:"badge badge-primary badge-pill"},"Out of Stock "))(a.quantity),c.a.createElement("br",null),(e=>e&&c.a.createElement(o.b,{to:"/product/".concat(a._id),className:"mr-2"},c.a.createElement("button",{className:"btn btn-outline-primary mt-2 mb-2 card-btn-1"},"View Product")))(t),(e=>e&&c.a.createElement("button",{onClick:h,className:"btn btn-outline-warning mt-2 mb-2 card-btn-1  "},"Add to cart"))(n),(e=>e&&c.a.createElement("button",{onClick:()=>{(e=>{let a=[];"undefined"!==typeof window&&(localStorage.getItem("cart")&&(a=JSON.parse(localStorage.getItem("cart"))),a.map((t,r)=>{t._id===e&&a.splice(r,1)}),localStorage.setItem("cart",JSON.stringify(a)))})(a._id),i(!d)},className:"btn btn-outline-danger mt-2 mb-2"},"Remove Product"))(m),(e=>e&&c.a.createElement("div",null,c.a.createElement("div",{className:"input-group mb-3"},c.a.createElement("div",{className:"input-group-prepend"},c.a.createElement("span",{className:"input-group-text"},"Adjust Quantity")),c.a.createElement("input",{type:"number",className:"form-control",value:E,onChange:N(a._id)}))))(l)))};var O=()=>{const[e,a]=Object(r.useState)({categories:[],category:"",search:"",results:[],searched:!1}),{categories:t,category:n,search:l,results:o,searched:s}=e;Object(r.useEffect)(()=>{v().then(e=>{e.error?console.log(e.error):a({...e,categories:e})})},[]);const i=()=>{l&&(e=>{const a=N.a.stringify(e);return console.log("query",a),fetch("".concat(m,"/products/search?").concat(a),{method:"GET"}).then(e=>e.json()).catch(e=>console.log(e))})({search:l||void 0,category:n}).then(t=>{t.error?console.log(t.error):a({...e,results:t,searched:!0})})},d=e=>{e.preventDefault(),i()},u=t=>r=>{a({...e,[t]:r.target.value,searched:!1})};return c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"container mb-3"},c.a.createElement("form",{onSubmit:d},c.a.createElement("span",{className:"input-group-text"},c.a.createElement("div",{className:"input-group input-group-lg"},c.a.createElement("div",{className:"input-group-prepend"},c.a.createElement("select",{className:"btn mr-2",onChange:u("category")},c.a.createElement("option",{value:"All"},"All"),t.map((e,a)=>c.a.createElement("option",{key:a,value:e._id},e.name)))),c.a.createElement("input",{type:"search",className:"form-control",onChange:u("search"),placeholder:"Search by name"})),c.a.createElement("div",{className:"btn input-group-append",style:{border:"none"}},c.a.createElement("button",{className:"input-group-text"},"Search"))))),c.a.createElement("div",{className:"container-fluid mb-3"},function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return c.a.createElement("div",null,c.a.createElement("h2",{className:"mt-4 mb-4"},((e,a)=>e&&a.length>0?"Found ".concat(a.length," products"):e&&a.length<1?"No products found":void 0)(s,e)),c.a.createElement("div",{className:"row"},e.map((e,a)=>c.a.createElement("div",{className:"col-4 mb-3"},c.a.createElement(j,{key:a,product:e})))))}(o)))};var k=()=>{const[e,a]=Object(r.useState)([]),[t,n]=Object(r.useState)([]),[l,o]=Object(r.useState)(!1);return Object(r.useEffect)(()=>{b("createdAt").then(e=>{console.log(e),e.error?o(e.error):n(e)}),b("sold").then(e=>{e.error?o(e.error):a(e)})},[]),c.a.createElement(p,{title:"FullStack React Node MongoDB Ecommerce App",description:"Node React E-commerce App",className:"container-fluid"},c.a.createElement(O,null),c.a.createElement("h2",{className:"mb-4"},"New Arrivals"),c.a.createElement("div",{className:"row"},t.map((e,a)=>c.a.createElement("div",{key:a,className:"col-4 mb-3"},c.a.createElement(j,{product:e})))),c.a.createElement("h2",{className:"mb-4"},"Best Sellers"),c.a.createElement("div",{className:"row"},e.map((e,a)=>c.a.createElement("div",{key:a,className:"col-4 mb-3"},c.a.createElement(j,{product:e})))))};var C=e=>{let{component:a,...t}=e;return c.a.createElement(s.b,Object.assign({},t,{render:e=>i()?c.a.createElement(a,e):c.a.createElement(s.a,{to:{pathname:"/signin",state:{from:e.location}}})}))};var x=()=>{const[e,a]=Object(r.useState)([]),{user:{_id:t,name:n,email:l,role:s}}=i(),d=i().token,u=(e,t)=>{((e,a)=>fetch("".concat(m,"/orders/by/user/").concat(e),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(a)}}).then(e=>e.json()).catch(e=>console.log(e)))(e,t).then(e=>{e.error?console.log(e.error):a(e)})};Object(r.useEffect)(()=>{u(t,d)},[]);return c.a.createElement(p,{title:"Dashboard",description:"G'day ".concat(n,"!"),className:"container-fluid"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-3"},c.a.createElement("div",{className:"card"},c.a.createElement("h4",{className:"card-header"},"User Links"),c.a.createElement("ul",{className:"list-group"},c.a.createElement("li",{className:"list-group-item"},c.a.createElement(o.b,{className:"nav-link",to:"/cart"},"My Cart")),c.a.createElement("li",{className:"list-group-item"},c.a.createElement(o.b,{className:"nav-link",to:"/profile/".concat(t)},"Update Profile"))))),c.a.createElement("div",{className:"col-9"},c.a.createElement("div",{className:"card mb-5"},c.a.createElement("h3",{className:"card-header"},"User Information"),c.a.createElement("ul",{className:"list-group"},c.a.createElement("li",{className:"list-group-item"},n),c.a.createElement("li",{className:"list-group-item"},l),c.a.createElement("li",{className:"list-group-item"},1===s?"Admin":"Registered User"))),(e=>c.a.createElement("div",{className:"card mb-5"},c.a.createElement("h3",{className:"card-header"},"Purchase history"),c.a.createElement("ul",{className:"list-group"},c.a.createElement("li",{className:"list-group-item"},e.map((e,a)=>c.a.createElement("div",null,c.a.createElement("hr",null),e.products.map((e,a)=>c.a.createElement("div",{key:a},c.a.createElement("h6",null,"Product name: ",e.name),c.a.createElement("h6",null,"Product price: $",e.price),c.a.createElement("h6",null,"Purchased date:"," ",w()(e.createdAt).fromNow())))))))))(e))))};var T=()=>{const{user:{_id:e,name:a,email:t,role:r}}=i();return c.a.createElement(p,{title:"Dashboard",description:"G'day ".concat(a,"!"),className:"container-fluid"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-3"},c.a.createElement("div",{className:"card"},c.a.createElement("h4",{className:"card-header"},"Admin Links"),c.a.createElement("ul",{className:"list-group"},c.a.createElement("li",{className:"list-group-item"},c.a.createElement(o.b,{className:"nav-link",to:"/create/category"},"Create Category")),c.a.createElement("li",{className:"list-group-item"},c.a.createElement(o.b,{className:"nav-link",to:"/create/product"},"Create Product")),c.a.createElement("li",{className:"list-group-item"},c.a.createElement(o.b,{className:"nav-link",to:"/admin/orders"},"View Orders")),c.a.createElement("li",{className:"list-group-item"},c.a.createElement(o.b,{className:"nav-link",to:"/admin/products"},"Manage Products"))))),c.a.createElement("div",{className:"col-9"},c.a.createElement("div",{className:"card mb-5"},c.a.createElement("h3",{className:"card-header"},"User Information"),c.a.createElement("ul",{className:"list-group"},c.a.createElement("li",{className:"list-group-item"},a),c.a.createElement("li",{className:"list-group-item"},t),c.a.createElement("li",{className:"list-group-item"},1===r?"Admin":"Registered User"))))))};var P=()=>{const[e,a]=Object(r.useState)(""),[t,n]=Object(r.useState)(!1),[l,s]=Object(r.useState)(!1),{user:d,token:u}=i(),E=e=>{n(""),a(e.target.value)},g=a=>{a.preventDefault(),n(""),s(!1),((e,a,t)=>fetch("".concat(m,"/category/create/").concat(e),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(a)},body:JSON.stringify(t)}).then(e=>e.json()).catch(e=>{console.log(e)}))(d._id,u,{name:e}).then(e=>{e.error?n(e.error):(n(""),s(!0))})};return c.a.createElement(p,{title:"Add a new category",description:"Welcome ".concat(d.name,", ready to add a new category?")},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-8 offset-md-2"},(()=>{if(l)return c.a.createElement("h3",{className:"text-success"},e," is created")})(),(()=>{if(t)return c.a.createElement("h3",{className:"text-danger"},"Category should be unique")})(),c.a.createElement("form",{onSubmit:g},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"text-muted"},"Name"),c.a.createElement("input",{type:"text",className:"form-control",onChange:E,value:e,autoFocus:!0,required:!0})),c.a.createElement("button",{className:"btn btn-outline-primary"},"Create Category")),c.a.createElement("div",{className:"mt-5"},c.a.createElement(o.b,{to:"/admin/dashboard",className:"text-warning"},"Back to Dashboard")))))};var A=()=>{const[e,a]=Object(r.useState)({name:"",description:"",price:"",categories:[],category:"",shipping:"",quantity:"",photo:"",loading:!1,error:"",createdProduct:"",redirectToProfile:!1,formData:""}),{user:t,token:n}=i(),{name:l,description:o,price:s,categories:d,category:u,shipping:E,quantity:g,loading:h,error:N,createdProduct:b,redirectToProfile:v,formData:f}=e,y=()=>{fetch("".concat(m,"/categories"),{method:"GET"}).then(e=>e.json()).catch(e=>console.log(e)).then(t=>{t.error?a({...e,error:t.error}):a({...e,categories:t,formData:new FormData})})};Object(r.useEffect)(()=>{y()},[]);const S=t=>r=>{const c="photo"===t?r.target.files[0]:r.target.value;f.set(t,c),a({...e,[t]:c})},w=r=>{r.preventDefault(),a({...e,error:"",loading:!0}),((e,a,t)=>fetch("".concat(m,"/product/create/").concat(e),{method:"POST",headers:{Accept:"application/json",Authorization:"Bearer ".concat(a)},body:t}).then(e=>e.json()).catch(e=>{console.log(e)}))(t._id,n,f).then(t=>{t.error?a({...e,error:t.error}):a({...e,name:"",description:"",photo:"",price:"",quantity:"",loading:!1,createdProduct:t.name})})};return c.a.createElement(p,{title:"Add a new product",description:"G'day ".concat(t.name,", ready to add a new product?")},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-8 offset-md-2"},h&&c.a.createElement("div",{className:"alert alert-success"},c.a.createElement("h2",null,"Loading...")),c.a.createElement("div",{className:"alert alert-info",style:{display:b?"":"none"}},c.a.createElement("h2",null,"".concat(b)," is created!")),c.a.createElement("div",{className:"alert alert-danger",style:{display:N?"":"none"}},N),c.a.createElement("form",{className:"mb-3",onSubmit:w},c.a.createElement("h4",null,"Post Photo"),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"btn btn-secondary"},c.a.createElement("input",{onChange:S("photo"),type:"file",name:"photo",accept:"image/*"}))),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"text-muted"},"Name"),c.a.createElement("input",{onChange:S("name"),type:"text",className:"form-control",value:l})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"text-muted"},"Description"),c.a.createElement("textarea",{onChange:S("description"),className:"form-control",value:o})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"text-muted"},"Price"),c.a.createElement("input",{onChange:S("price"),type:"number",className:"form-control",value:s})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"text-muted"},"Category"),c.a.createElement("select",{onChange:S("category"),className:"form-control"},c.a.createElement("option",null,"Please select"),d&&d.map((e,a)=>c.a.createElement("option",{key:a,value:e._id},e.name)))),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"text-muted"},"Shipping"),c.a.createElement("select",{onChange:S("shipping"),className:"form-control"},c.a.createElement("option",null,"Please select"),c.a.createElement("option",{value:"0"},"No"),c.a.createElement("option",{value:"1"},"Yes"))),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"text-muted"},"Quantity"),c.a.createElement("input",{onChange:S("quantity"),type:"number",className:"form-control",value:g})),c.a.createElement("button",{className:"btn btn-outline-primary"},"Create Product")))))};var _=e=>{let{categories:a,handleFilters:t}=e;const[n,l]=Object(r.useState)([]),o=e=>()=>{const a=n.indexOf(e),r=[...n];-1===a?r.push(e):r.splice(a,1),l(r),t(r)};return a.map((e,a)=>c.a.createElement("li",{key:a,className:"list-unstyled"},c.a.createElement("input",{onChange:o(e._id),value:n.indexOf(-1===e._id),type:"checkbox",className:"form-check-input"}),c.a.createElement("label",{className:"form-check-label"},e.name)))};var I=e=>{let{prices:a,handleFilters:t}=e;const[n,l]=Object(r.useState)(0),o=e=>{t(e.target.value),l(e.target.value)};return a.map((e,a)=>c.a.createElement("div",{key:a},c.a.createElement("input",{onChange:o,value:"".concat(e._id),name:e,type:"radio",className:"mr-2 ml-4"}),c.a.createElement("label",{className:"form-check-label"},e.name)))};const B=[{_id:0,name:"Any",array:[]},{_id:1,name:"$0 to $9",array:[0,9]},{_id:2,name:"$10 to $19",array:[10,19]},{_id:3,name:"$20 to $29",array:[20,29]},{_id:4,name:"$30 to $39",array:[20,29]},{_id:5,name:"More than $40",array:[40,99]}];var J=()=>{const[e,a]=Object(r.useState)({filters:{category:[],price:[]}}),[t,n]=Object(r.useState)([]),[l,o]=Object(r.useState)(!1),[s,m]=Object(r.useState)(6),[i,d]=Object(r.useState)(0),[u,E]=Object(r.useState)(0),[g,h]=Object(r.useState)([]),N=e=>{f(i,s,e).then(e=>{e.error?o(e.error):(h(e.data),E(e.size),d(0))})},b=()=>{let a=i+s;f(a,s,e.filters).then(e=>{e.error?o(e.error):(h([...g,...e.data]),E(e.size),d(a))})};Object(r.useEffect)(()=>{v().then(e=>{e.error?o(e.error):n(e)}),N(i,e.filters)},[]);const y=(t,r)=>{const c={...e};if(c.filters[r]=t,"price"===r){let e=S(t);c.filters[r]=e}N(e.filters),a(c)},S=e=>{const a=B;let t=[];for(let r in a)a[r]._id===parseInt(e)&&(t=a[r].array);return t};return c.a.createElement(p,{title:"Shop Page",description:"Search and find your choice",className:"container-fluid"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-4"},c.a.createElement("h4",null,"Filter by categories"),c.a.createElement("ul",null,c.a.createElement(_,{categories:t,handleFilters:e=>y(e,"category")})),c.a.createElement("h4",null,"Filter by price range"),c.a.createElement("div",null,c.a.createElement(I,{prices:B,handleFilters:e=>y(e,"price")}))),c.a.createElement("div",{className:"col-8"},c.a.createElement("h2",{className:"mb-4"},"Products"),c.a.createElement("div",{className:"row"},g.map((e,a)=>c.a.createElement("div",{key:a,className:"col-4 mb-3"},c.a.createElement(j,{product:e})))),c.a.createElement("hr",null),u>0&&u>=s&&c.a.createElement("button",{onClick:b,className:"btn btn-warning mb-5"},"Load more"))))};var D=e=>{const[a,t]=Object(r.useState)({}),[n,l]=Object(r.useState)([]),[o,s]=Object(r.useState)(!1),i=e=>{(e=>fetch("".concat(m,"/product/").concat(e),{method:"GET"}).then(e=>e.json()).catch(e=>console.log(e)))(e).then(e=>{e.error?s(e.error):(t(e),(e=>fetch("".concat(m,"/products/related/").concat(e),{method:"GET"}).then(e=>e.json()).catch(e=>console.log(e)))(e._id).then(e=>{e.error?s(e.error):l(e)}))})};return Object(r.useEffect)(()=>{const a=e.match.params.productId;i(a)},[e]),c.a.createElement(p,{title:a&&a.name,description:a&&a.description&&a.description.substring(0,100),className:"container-fluid"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-8"},a&&a.description&&c.a.createElement(j,{product:a,showViewProductButton:!1})),c.a.createElement("div",{className:"col-4"},c.a.createElement("h4",null,"Related products"),n.map((e,a)=>c.a.createElement("div",{className:"mb-3",key:a},c.a.createElement(j,{product:e}))))))},R=t(20),F=t.n(R);var G=e=>{let{products:a,setRun:t=(e=>e),run:n}=e;const[l,s]=Object(r.useState)({loading:!1,success:!1,clientToken:null,error:"",instance:{},address:""}),d=i()&&i().user._id,u=i()&&i().token,p=(e,a)=>{((e,a)=>fetch("".concat(m,"/braintree/getToken/").concat(e),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(a)}}).then(e=>e.json()).catch(e=>console.log(e)))(e,a).then(e=>{e.error?(console.log(e.error),s({...e,error:e.error})):(console.log(e),s({clientToken:e.clientToken}))})};Object(r.useEffect)(()=>{p(d,u)},[]);const E=e=>{s({...l,address:e.target.value})},g=()=>a.reduce((e,a)=>e+a.count*a.price,0);let h=l.address;const N=()=>{let e;s({loading:!0}),l.instance.requestPaymentMethod().then(r=>{const c={paymentMethodNonce:e=r.nonce,amount:g()};((e,a,t)=>fetch("".concat(m,"/braintree/payment/").concat(e),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(a)},body:JSON.stringify(t)}).then(e=>e.json()).catch(e=>console.log(e)))(d,u,c).then(e=>{console.log(e);const r={products:a,transaction_id:e.transaction.id,amount:e.transaction.amount,address:h};((e,a,t)=>fetch("".concat(m,"/order/create/").concat(e),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(a)},body:JSON.stringify({order:t})}).then(e=>e.json()).catch(e=>console.log(e)))(d,u,r).then(e=>{(e=>{"undefined"!==typeof window&&(localStorage.removeItem("cart"),e())})(()=>{t(!n),console.log("payment success and empty cart"),s({loading:!1,success:!0})})}).catch(e=>{console.log(e),s({loading:!1})})}).catch(e=>{console.log(e),s({loading:!1})})}).catch(e=>{s({...l,error:e.message})})},b=()=>c.a.createElement("div",{onBlur:()=>s({...l,error:""})},null!==l.clientToken&&a.length>0?c.a.createElement("div",null,c.a.createElement("div",{className:"gorm-group mb-3"},c.a.createElement("label",{className:"text-muted"},"Delivery address:"),c.a.createElement("textarea",{onChange:E,className:"form-control",value:l.address,placeholder:"Type your delivery address here..."})),c.a.createElement(F.a,{options:{authorization:l.clientToken,paypal:{flow:"vault"}},onInstance:e=>l.instance=e}),c.a.createElement("button",{onClick:N,className:"btn btn-success btn-block"},"Pay")):null);return c.a.createElement("div",null,c.a.createElement("h2",null,"Total: $",g()),(e=>e&&c.a.createElement("h2",{className:"text-danger"},"Loading..."))(l.loading),(e=>c.a.createElement("div",{className:"alert alert-info",style:{display:e?"":"none"}},"Thanks! Your payment was successful!"))(l.success),(e=>c.a.createElement("div",{className:"alert alert-danger",style:{display:e?"":"none"}},e))(l.error),i()?c.a.createElement("div",null,b()):c.a.createElement(o.b,{to:"/signin"},c.a.createElement("button",{className:"btn btn-primary"},"Sign in to checkout")))};var $=()=>{const[e,a]=Object(r.useState)([]),[t,n]=Object(r.useState)(!1);Object(r.useEffect)(()=>{a("undefined"!==typeof window&&localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[])},[t]);return c.a.createElement(p,{title:"Shopping Cart",description:"Manage your cart items. Add remove checkout or continue shopping.",className:"container-fluid"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-6"},e.length>0?(e=>c.a.createElement("div",null,c.a.createElement("h2",null,"Your cart has ","".concat(e.length)," items"),c.a.createElement("hr",null),e.map((e,a)=>c.a.createElement(j,{key:a,product:e,showAddToCartButton:!1,cartUpdate:!0,showRemoveProductButton:!0,setRun:n,run:t}))))(e):c.a.createElement("h2",null,"Your cart is empty. ",c.a.createElement("br",null)," ",c.a.createElement(o.b,{to:"/shop"},"Continue shopping"))),c.a.createElement("div",{className:"col-6"},c.a.createElement("h2",{className:"mb-4"},"Your cart summary"),c.a.createElement("hr",null),c.a.createElement(G,{products:e,setRun:n,run:t}))))};var q=()=>c.a.createElement(o.a,null,c.a.createElement(s.d,null,c.a.createElement(s.b,{path:"/",exact:!0,component:k}),c.a.createElement(s.b,{path:"/shop",exact:!0,component:J}),c.a.createElement(s.b,{path:"/signin",exact:!0,component:g}),c.a.createElement(s.b,{path:"/signup",exact:!0,component:E}),c.a.createElement(C,{path:"/user/dashboard",exact:!0,component:x}),c.a.createElement(C,{path:"/admin/dashboard",exact:!0,component:T}),c.a.createElement(C,{path:"/create/category",exact:!0,component:P}),c.a.createElement(C,{path:"/create/product",exact:!0,component:A}),c.a.createElement(s.b,{path:"/product/:productId",exact:!0,component:D}),c.a.createElement(s.b,{path:"/cart",exact:!0,component:$})));l.a.render(c.a.createElement(q,null),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.9cd38c24.chunk.js.map