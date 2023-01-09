"use strict";(self.webpackChunkgo_zero=self.webpackChunkgo_zero||[]).push([[9277],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=a,f=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2212:function(e,t,n){n.r(t),n.d(t,{default:function(){return u},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={},s={unversionedId:"blog/showcase/mapping",id:"blog/showcase/mapping",isDocsHomePage:!1,title:"Mapping",description:"The go-zero serialization and deserialization of text is used in three main places",source:"@site/docs/blog/showcase/mapping.md",sourceDirName:"blog/showcase",slug:"/blog/showcase/mapping",permalink:"/docs/blog/showcase/mapping",editUrl:"https://github.com/zeromicro/portal/edit/main/docs/blog/showcase/mapping.md",version:"current",lastUpdatedAt:1673270884,formattedLastUpdatedAt:"1/9/2023",frontMatter:{},sidebar:"blog",previous:{title:"Mysql",permalink:"/docs/blog/showcase/mysql"},next:{title:"Data center",permalink:"/docs/blog/showcase/datacenter"}},d=[{value:"1. deserialization of http api request body",id:"1-deserialization-of-http-api-request-body",children:[{value:"1.1 <code>Data format</code> to order.api file as an example",id:"11-data-format-to-orderapi-file-as-an-example",children:[]},{value:"1.2 <code>Data validation</code> using user.api file as an example",id:"12-data-validation-using-userapi-file-as-an-example",children:[]}]},{value:"2. Serialization of http api return body",id:"2-serialization-of-http-api-return-body",children:[]},{value:"3. deserialization of configuration files",id:"3-deserialization-of-configuration-files",children:[]}],p={toc:d};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The go-zero serialization and deserialization of text is used in three main places"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"deserialization of http api request bodies"),(0,i.kt)("li",{parentName:"ul"},"Serialization of http api return body"),(0,i.kt)("li",{parentName:"ul"},"deserialization of configuration files")),(0,i.kt)("p",null,"This article assumes that the reader has already defined the api file and modified the configuration file, if you are not familiar with it, you can refer to"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"shorturl"},"Quickly build highly concurrent microservices"))),(0,i.kt)("h2",{id:"1-deserialization-of-http-api-request-body"},"1. deserialization of http api request body"),(0,i.kt)("p",null,"In the deserialization process, go-zero implements its own deserialization mechanism for request data ",(0,i.kt)("inlineCode",{parentName:"p"},"data format")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"data validation")," requirements"),(0,i.kt)("h3",{id:"11-data-format-to-orderapi-file-as-an-example"},"1.1 ",(0,i.kt)("inlineCode",{parentName:"h3"},"Data format")," to order.api file as an example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'type (\n    createOrderReq struct {\n        token string `path: "token"` // user token\n        productId string `json: "productId"` // product ID\n        num int `json: "num"` // number of products\n    }\n    createOrderRes struct {\n        success bool `json: "success"` // success or not\n    }\n    findOrderReq struct {\n        token string `path: "token"` // user token\n        page int `form: "page"` // number of pages\n        pageSize int8 `form: "pageSize"` // page size\n    }\n    findOrderRes struct {\n        orderInfo []orderInfo `json: "orderInfo"` // product ID\n    }\n    orderInfo struct {\n        productId string `json: "productId"` // product ID\n        productName string `json: "productName"` // product name\n        num int `json: "num"` // number of products\n    }\n    deleteOrderReq struct {\n        id string `path: "id"`\n    }\n    deleteOrderRes struct {\n        success bool `json: "success"` // whether it succeeded\n    }\n)\n\nservice order {\n    @doc(\n        summary: create order\n    )\n    @handler CreateOrderHandler\n    post /order/add/:token(createOrderReq) returns(createOrderRes)\n\n    @doc(\n        summary: get order\n    )\n    @handler FindOrderHandler\n    get /order/find/:token(findOrderReq) returns(findOrderRes)\n\n    @doc(\n        summary: delete an order\n    )\n    @handler: DeleteOrderHandler\n    delete /order/:id(deleteOrderReq) returns(deleteOrderRes)\n}\n')),(0,i.kt)("p",null,"There are three types of tags for deserialization of http api request bodies."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"path"),": parameter deserialization in http url path"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/order/add/1234567")," will resolve the token to 1234567"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"form"),": http form form deserialization, you need to add Content-Type: multipart/form-data in the header"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/order/find/1234567?page=1&pageSize=20")," will parse out the token as 1234567, page as 1 and pageSize as 20"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"json"),": http request json body deserialization, need header header add Content-Type: application/json"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'{"productId": "321", "num":1}')," will parse out productId as 321 and num as 1")))),(0,i.kt)("h3",{id:"12-data-validation-using-userapi-file-as-an-example"},"1.2 ",(0,i.kt)("inlineCode",{parentName:"h3"},"Data validation")," using user.api file as an example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'type (\n    createUserReq struct {\n        age int8 `json: "age,default=20,range=(12:100]"` // age\n        name string `json: "name"` // Name\n        alias string `json: "alias,optional"` // Alias\n        sex string `json: "sex,options=male|female"` // Sex\n        avatar string `json: "avatar,default=default.png"` // avatar\n    }\n    createUserRes struct {\n        success bool `json: "success"` // success or not\n    }\n)\n\nservice user {\n    @doc(\n        summary: create order\n    )\n    @handler CreateUserHandler\n    post /user/add(createUserReq) returns(createUserRes)\n}\n')),(0,i.kt)("p",null,"There are many ways to validate data, including but not limited to."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"age"),": default is not entered as 20, enter then the range of values is (12:100], open and closed before"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name"),": required, cannot be empty"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"alias"),": optional, can be empty"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sex"),": required, the value is ",(0,i.kt)("inlineCode",{parentName:"li"},"male")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"female"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"avatar"),": optional, default is ",(0,i.kt)("inlineCode",{parentName:"li"},"default.png"))),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/zeromicro/go-zero/blob/master/core/mapping/unmarshaler_test.go"},"unmarshaler_test.go")," for more details"),(0,i.kt)("h2",{id:"2-serialization-of-http-api-return-body"},"2. Serialization of http api return body"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use the official default ",(0,i.kt)("inlineCode",{parentName:"li"},"encoding/json")," package for serialization, so I won't go over it here")),(0,i.kt)("h2",{id:"3-deserialization-of-configuration-files"},"3. deserialization of configuration files"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Configuration file deserialization")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"http api request body deserialization")," use the same set of parsing rules, see ",(0,i.kt)("inlineCode",{parentName:"li"},"http api request body deserialization"))))}u.isMDXComponent=!0}}]);