"use strict";(self.webpackChunkgo_zero=self.webpackChunkgo_zero||[]).push([[3666],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return g}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),i=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},s=function(e){var r=i(e.components);return n.createElement(c.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=i(t),g=a,d=u["".concat(c,".").concat(g)]||u[g]||m[g]||o;return t?n.createElement(d,l(l({ref:r},s),{},{components:t})):n.createElement(d,l({ref:r},s))}));function g(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=u;var p={};for(var c in r)hasOwnProperty.call(r,c)&&(p[c]=r[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var i=2;i<o;i++)l[i]=t[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2555:function(e,r,t){t.r(r),t.d(r,{default:function(){return m},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return i}});var n=t(7462),a=t(3366),o=(t(7294),t(3905)),l=["components"],p={},c={unversionedId:"quick-start/micro-service",id:"quick-start/micro-service",isDocsHomePage:!1,title:"\u5fae\u670d\u52a1",description:"\u5728\u4e0a\u4e00\u7bc7\u6211\u4eec\u5df2\u7ecf\u6f14\u793a\u4e86\u600e\u6837\u5feb\u901f\u521b\u5efa\u4e00\u4e2a\u5355\u4f53\u670d\u52a1\uff0c\u63a5\u4e0b\u6765\u6211\u4eec\u6765\u6f14\u793a\u4e00\u4e0b\u5982\u4f55\u5feb\u901f\u521b\u5efa\u5fae\u670d\u52a1\uff0c",source:"@site/i18n/cn/docusaurus-plugin-content-docs/current/quick-start/micro-service.md",sourceDirName:"quick-start",slug:"/quick-start/micro-service",permalink:"/cn/docs/quick-start/micro-service",editUrl:"https://github.com/zeromicro/portal/edit/main/i18n/cn/docusaurus-plugin-content-docs/current/quick-start/micro-service.md",version:"current",lastUpdatedAt:1673270884,formattedLastUpdatedAt:"1/9/2023",frontMatter:{},sidebar:"docs",previous:{title:"\u5355\u4f53\u670d\u52a1",permalink:"/cn/docs/quick-start/monolithic-service"},next:{title:"\u7ec4\u4ef6\u5256\u6790",permalink:"/cn/docs/component/components"}},i=[{value:"\u524d\u8a00",id:"\u524d\u8a00",children:[]},{value:"\u60c5\u666f\u63d0\u8981",id:"\u60c5\u666f\u63d0\u8981",children:[]},{value:"\u6f14\u793a\u529f\u80fd\u76ee\u6807",id:"\u6f14\u793a\u529f\u80fd\u76ee\u6807",children:[]},{value:"\u670d\u52a1\u8bbe\u8ba1\u5206\u6790",id:"\u670d\u52a1\u8bbe\u8ba1\u5206\u6790",children:[]},{value:"\u521b\u5efamall\u5de5\u7a0b",id:"\u521b\u5efamall\u5de5\u7a0b",children:[]},{value:"\u521b\u5efauser rpc\u670d\u52a1",id:"\u521b\u5efauser-rpc\u670d\u52a1",children:[]},{value:"\u521b\u5efaorder api\u670d\u52a1",id:"\u521b\u5efaorder-api\u670d\u52a1",children:[]},{value:"\u542f\u52a8\u670d\u52a1\u5e76\u9a8c\u8bc1",id:"\u542f\u52a8\u670d\u52a1\u5e76\u9a8c\u8bc1",children:[]}],s={toc:i};function m(e){var r=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5728\u4e0a\u4e00\u7bc7\u6211\u4eec\u5df2\u7ecf\u6f14\u793a\u4e86\u600e\u6837\u5feb\u901f\u521b\u5efa\u4e00\u4e2a\u5355\u4f53\u670d\u52a1\uff0c\u63a5\u4e0b\u6765\u6211\u4eec\u6765\u6f14\u793a\u4e00\u4e0b\u5982\u4f55\u5feb\u901f\u521b\u5efa\u5fae\u670d\u52a1\uff0c\n\u5728\u672c\u5c0f\u8282\u4e2d\uff0capi\u90e8\u5206\u5176\u5b9e\u548c\u5355\u4f53\u670d\u52a1\u7684\u521b\u5efa\u903b\u8f91\u662f\u4e00\u6837\u7684\uff0c\u53ea\u662f\u5728\u5355\u4f53\u670d\u52a1\u4e2d\u6ca1\u6709\u670d\u52a1\u95f4\u7684\u901a\u8baf\u800c\u5df2\uff0c\n\u4e14\u5fae\u670d\u52a1\u4e2dapi\u670d\u52a1\u4f1a\u591a\u4e00\u4e9brpc\u8c03\u7528\u7684\u914d\u7f6e\u3002"),(0,o.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,o.kt)("p",null,"\u672c\u5c0f\u8282\u5c06\u4ee5\u4e00\u4e2a",(0,o.kt)("inlineCode",{parentName:"p"},"\u8ba2\u5355\u670d\u52a1"),"\u8c03\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"\u7528\u6237\u670d\u52a1"),"\u6765\u7b80\u5355\u6f14\u793a\u4e00\u4e0b\uff0c\u6f14\u793a\u4ee3\u7801\u4ec5\u4f20\u9012\u601d\u8def\uff0c\u5176\u4e2d\u6709\u4e9b\u73af\u8282\u4e0d\u4f1a\u4e00\u4e00\u5217\u4e3e\u3002"),(0,o.kt)("h2",{id:"\u60c5\u666f\u63d0\u8981"},"\u60c5\u666f\u63d0\u8981"),(0,o.kt)("p",null,"\u5047\u8bbe\u6211\u4eec\u5728\u5f00\u53d1\u4e00\u4e2a\u5546\u57ce\u9879\u76ee\uff0c\u800c\u5f00\u53d1\u8005\u5c0f\u660e\u8d1f\u8d23\u7528\u6237\u6a21\u5757(user)\u548c\u8ba2\u5355\u6a21\u5757(order)\u7684\u5f00\u53d1\uff0c\u6211\u4eec\u59d1\u4e14\u5c06\u8fd9\u4e24\u4e2a\u6a21\u5757\u62c6\u5206\u6210\u4e24\u4e2a\u5fae\u670d\u52a1\u2460"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"[\u6ce8\u610f]"," \u2460\uff1a\u5fae\u670d\u52a1\u7684\u62c6\u5206\u4e5f\u662f\u4e00\u95e8\u5b66\u95ee\uff0c\u8fd9\u91cc\u6211\u4eec\u5c31\u4e0d\u8ba8\u8bba\u600e\u4e48\u53bb\u62c6\u5206\u5fae\u670d\u52a1\u7684\u7ec6\u8282\u4e86\u3002")),(0,o.kt)("h2",{id:"\u6f14\u793a\u529f\u80fd\u76ee\u6807"},"\u6f14\u793a\u529f\u80fd\u76ee\u6807"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u8ba2\u5355\u670d\u52a1(order)\u63d0\u4f9b\u4e00\u4e2a\u67e5\u8be2\u63a5\u53e3"),(0,o.kt)("li",{parentName:"ul"},"\u7528\u6237\u670d\u52a1(user)\u63d0\u4f9b\u4e00\u4e2a\u65b9\u6cd5\u4f9b\u8ba2\u5355\u670d\u52a1\u83b7\u53d6\u7528\u6237\u4fe1\u606f")),(0,o.kt)("h2",{id:"\u670d\u52a1\u8bbe\u8ba1\u5206\u6790"},"\u670d\u52a1\u8bbe\u8ba1\u5206\u6790"),(0,o.kt)("p",null,'\u6839\u636e\u60c5\u666f\u63d0\u8981\u6211\u4eec\u53ef\u4ee5\u5f97\u77e5\uff0c\u8ba2\u5355\u662f\u76f4\u63a5\u9762\u5411\u7528\u6237\uff0c\u901a\u8fc7http\u534f\u8bae\u8bbf\u95ee\u6570\u636e\uff0c\u800c\u8ba2\u5355\u5185\u90e8\u9700\u8981\u83b7\u53d6\u7528\u6237\u7684\u4e00\u4e9b\u57fa\u7840\u6570\u636e\uff0c\u65e2\u7136\u6211\u4eec\u7684\u670d\u52a1\u662f\u91c7\u7528\u5fae\u670d\u52a1\u7684\u67b6\u6784\u8bbe\u8ba1\uff0c\n\u90a3\u4e48\u4e24\u4e2a\u670d\u52a1\uff08user, order\uff09\u5c31\u5fc5\u987b\u8981\u8fdb\u884c\u6570\u636e\u4ea4\u6362\uff0c\u670d\u52a1\u95f4\u7684\u6570\u636e\u4ea4\u6362\u5373\u670d\u52a1\u95f4\u7684\u901a\u8baf\uff0c\u5230\u4e86\u8fd9\u91cc\uff0c\u91c7\u7528\u5408\u7406\u7684\u901a\u8baf\u534f\u8bae\u4e5f\u662f\u4e00\u4e2a\u5f00\u53d1\u4eba\u5458\u9700\u8981\n\u8003\u8651\u7684\u4e8b\u60c5\uff0c\u53ef\u4ee5\u901a\u8fc7http\uff0crpc\u7b49\u65b9\u5f0f\u6765\u8fdb\u884c\u901a\u8baf\uff0c\u8fd9\u91cc\u6211\u4eec\u9009\u62e9rpc\u6765\u5b9e\u73b0\u670d\u52a1\u95f4\u7684\u901a\u8baf\uff0c\u76f8\u4fe1\u8fd9\u91cc\u6211\u5df2\u7ecf\u5bf9"rpc\u670d\u52a1\u5b58\u5728\u6709\u4ec0\u4e48\u4f5c\u7528\uff1f"\u5df2\u7ecf\u4f5c\u4e86\u4e00\u4e2a\u6bd4\u8f83\u597d\u7684\u573a\u666f\u63cf\u8ff0\u3002\n\u5f53\u7136\uff0c\u4e00\u4e2a\u670d\u52a1\u5f00\u53d1\u524d\u8fdc\u4e0d\u6b62\u8fd9\u70b9\u8bbe\u8ba1\u5206\u6790\uff0c\u6211\u4eec\u8fd9\u91cc\u5c31\u4e0d\u8be6\u7ec6\u63cf\u8ff0\u4e86\u3002\u4ece\u4e0a\u6587\u5f97\u77e5\uff0c\u6211\u4eec\u9700\u8981\u4e00\u4e2a'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"user rpc"),(0,o.kt)("li",{parentName:"ul"},"order api")),(0,o.kt)("p",null,"\u4e24\u4e2a\u670d\u52a1\u6765\u521d\u6b65\u5b9e\u73b0\u8fd9\u4e2a\u5c0fdemo\u3002"),(0,o.kt)("h2",{id:"\u521b\u5efamall\u5de5\u7a0b"},"\u521b\u5efamall\u5de5\u7a0b"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u4f60\u8dd1\u4e86\u5355\u4f53\u7684\u793a\u4f8b\uff0c\u91cc\u9762\u4e5f\u53eb ",(0,o.kt)("inlineCode",{parentName:"p"},"go-zero-demo"),"\uff0c\u4f60\u53ef\u80fd\u9700\u8981\u6362\u4e00\u4e2a\u7236\u76ee\u5f55\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ mkdir go-zero-demo\n$ cd go-zero-demo\n$ go mod init go-zero-demo\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u8bf4\u660e\uff1a\u5982\u65e0 ",(0,o.kt)("inlineCode",{parentName:"p"},"cd")," \u6539\u53d8\u76ee\u5f55\u7684\u64cd\u4f5c\uff0c\u6240\u6709\u64cd\u4f5c\u5747\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"go-zero-demo")," \u76ee\u5f55\u6267\u884c")),(0,o.kt)("h2",{id:"\u521b\u5efauser-rpc\u670d\u52a1"},"\u521b\u5efauser rpc\u670d\u52a1"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u521b\u5efauser rpc\u670d\u52a1"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ mkdir -p mall/user/rpc\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u6dfb\u52a0",(0,o.kt)("inlineCode",{parentName:"p"},"user.proto"),"\u6587\u4ef6\uff0c\u589e\u52a0",(0,o.kt)("inlineCode",{parentName:"p"},"getUser"),"\u65b9\u6cd5"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ vim mall/user/rpc/user.proto\n")),(0,o.kt)("p",{parentName:"li"},"\u589e\u52a0\u5982\u4e0b\u4ee3\u7801\uff1a"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-protobuf"},'syntax = "proto3";\n\npackage user;\n  \n// protoc-gen-go \u7248\u672c\u5927\u4e8e1.4.0, proto\u6587\u4ef6\u9700\u8981\u52a0\u4e0ago_package,\u5426\u5219\u65e0\u6cd5\u751f\u6210\noption go_package = "./user";\n\nmessage IdRequest {\n    string id = 1;\n}\n  \nmessage UserResponse {\n    // \u7528\u6237id\n    string id = 1;\n    // \u7528\u6237\u540d\u79f0\n    string name = 2;\n    // \u7528\u6237\u6027\u522b\n    string gender = 3;\n}\n  \nservice User {\n    rpc getUser(IdRequest) returns(UserResponse);\n}\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u751f\u6210\u4ee3\u7801\n\u5982\u672a\u5b89\u88c5 ",(0,o.kt)("inlineCode",{parentName:"p"},"protoc"),",",(0,o.kt)("inlineCode",{parentName:"p"},"protoc-gen-go"),",",(0,o.kt)("inlineCode",{parentName:"p"},"protoc-gen-grpc-go")," \u4f60\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u6307\u4ee4\u4e00\u952e\u5b89\u88c5:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ goctl env check -i -f\n")),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\n1\u3001\u6bcf\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"*.proto"),"\u6587\u4ef6\u53ea\u5141\u8bb8\u6709\u4e00\u4e2aservice ",(0,o.kt)("inlineCode",{parentName:"p"},"error: only one service expected"))),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ cd mall/user/rpc\n$ goctl rpc protoc user.proto --go_out=./types --go-grpc_out=./types --zrpc_out=.\nDone.\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u586b\u5145\u4e1a\u52a1\u903b\u8f91"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ vim internal/logic/getuserlogic.go\n")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package logic\n\nimport (\n    "context"\n\n    "go-zero-demo/mall/user/rpc/internal/svc"\n    "go-zero-demo/mall/user/rpc/types/user"\n\n    "github.com/zeromicro/go-zero/core/logx"\n)\n\ntype GetUserLogic struct {\n    ctx    context.Context\n    svcCtx *svc.ServiceContext\n    logx.Logger\n}\n\nfunc NewGetUserLogic(ctx context.Context, svcCtx *svc.ServiceContext) *GetUserLogic {\n    return &GetUserLogic{\n        ctx:    ctx,\n        svcCtx: svcCtx,\n        Logger: logx.WithContext(ctx),\n    }\n}\n\nfunc (l *GetUserLogic) GetUser(in *user.IdRequest) (*user.UserResponse, error) {\n    return &user.UserResponse{\n            Id:   "1",\n            Name: "test",\n    }, nil\n}\n')))),(0,o.kt)("h2",{id:"\u521b\u5efaorder-api\u670d\u52a1"},"\u521b\u5efaorder api\u670d\u52a1"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u521b\u5efa ",(0,o.kt)("inlineCode",{parentName:"p"},"order api"),"\u670d\u52a1"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# \u56de\u5230 go-zero-demo/mall \u76ee\u5f55\n$ mkdir -p order/api && cd order/api\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u6dfb\u52a0api\u6587\u4ef6"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ vim order.api\n")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-go"},'type(\n    OrderReq {\n        Id string `path:"id"`\n    }\n  \n    OrderReply {\n        Id string `json:"id"`\n        Name string `json:"name"`\n    }\n)\nservice order {\n    @handler getOrder\n    get /api/order/get/:id (OrderReq) returns (OrderReply)\n}\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u751f\u6210order\u670d\u52a1"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ goctl api go -api order.api -dir .\nDone.\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u6dfb\u52a0user rpc\u914d\u7f6e"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ vim internal/config/config.go\n")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package config\n\nimport (\n    "github.com/zeromicro/go-zero/zrpc"\n    "github.com/zeromicro/go-zero/rest"\n)\n\ntype Config struct {\n    rest.RestConf\n    UserRpc zrpc.RpcClientConf\n}\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u6dfb\u52a0yaml\u914d\u7f6e"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ vim etc/order.yaml \n")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"Name: order\nHost: 0.0.0.0\nPort: 8888\nUserRpc:\n  Etcd:\n    Hosts:\n    - 127.0.0.1:2379\n    Key: user.rpc\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u5b8c\u5584\u670d\u52a1\u4f9d\u8d56"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ vim internal/svc/servicecontext.go\n")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package svc\n\nimport (\n    "go-zero-demo/mall/order/api/internal/config"\n    "go-zero-demo/mall/user/rpc/userclient"\n\n    "github.com/zeromicro/go-zero/zrpc"\n)\n\ntype ServiceContext struct {\n    Config  config.Config\n    UserRpc userclient.User\n}\n\nfunc NewServiceContext(c config.Config) *ServiceContext {\n    return &ServiceContext{\n        Config:  c,\n        UserRpc: userclient.NewUser(zrpc.MustNewClient(c.UserRpc)),\n    }\n}\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u6dfb\u52a0order\u6f14\u793a\u903b\u8f91"),(0,o.kt)("p",{parentName:"li"},"\u7ed9 ",(0,o.kt)("inlineCode",{parentName:"p"},"getorderlogic")," \u6dfb\u52a0\u4e1a\u52a1\u903b\u8f91"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ vim internal/logic/getorderlogic.go\n")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package logic\n\nimport (\n    "context"\n    "errors"\n\n    "go-zero-demo/mall/order/api/internal/svc"\n    "go-zero-demo/mall/order/api/internal/types"\n    "go-zero-demo/mall/user/rpc/types/user"\n\n    "github.com/zeromicro/go-zero/core/logx"\n)\n\ntype GetOrderLogic struct {\n    logx.Logger\n    ctx    context.Context\n    svcCtx *svc.ServiceContext\n}\n\nfunc NewGetOrderLogic(ctx context.Context, svcCtx *svc.ServiceContext) GetOrderLogic {\n    return GetOrderLogic{\n        Logger: logx.WithContext(ctx),\n        ctx:    ctx,\n        svcCtx: svcCtx,\n    }\n}\n\nfunc (l *GetOrderLogic) GetOrder(req *types.OrderReq) (*types.OrderReply, error) {\n    user, err := l.svcCtx.UserRpc.GetUser(l.ctx, &user.IdRequest{\n        Id: "1",\n    })\n    if err != nil {\n        return nil, err\n    }\n\n    if user.Name != "test" {\n        return nil, errors.New("\u7528\u6237\u4e0d\u5b58\u5728")\n    }\n\n    return &types.OrderReply{\n        Id:   req.Id,\n        Name: "test order",\n    }, nil\n}\n')))),(0,o.kt)("h2",{id:"\u542f\u52a8\u670d\u52a1\u5e76\u9a8c\u8bc1"},"\u542f\u52a8\u670d\u52a1\u5e76\u9a8c\u8bc1"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u542f\u52a8etcd"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ etcd\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u4e0b\u8f7d\u4f9d\u8d56"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# \u5728 go-zero-demo \u76ee\u5f55\u4e0b\n$ go mod tidy\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u542f\u52a8user rpc"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# \u5728 mall/user/rpc \u76ee\u5f55\n$ go run user.go -f etc/user.yaml\nStarting rpc server at 127.0.0.1:8080...\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u542f\u52a8order api"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# \u5728 mall/order/api \u76ee\u5f55\n$ go run order.go -f etc/order.yaml\nStarting server at 0.0.0.0:8888...\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u8bbf\u95eeorder api"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl -i -X GET http://localhost:8888/api/order/get/1\nHTTP/1.1 200 OK\nContent-Type: application/json\nDate: Sun, 07 Feb 2021 03:45:05 GMT\nContent-Length: 30\n\n{"id":"1","name":"test order"}\n')))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u5728\u6f14\u793a\u4e2d\u7684\u63d0\u53ca\u7684api\u8bed\u6cd5\uff0crpc\u751f\u6210\uff0cgoctl\uff0cgoctl\u73af\u5883\u7b49\u600e\u4e48\u4f7f\u7528\u548c\u5b89\u88c5\uff0c\u5feb\u901f\u5165\u95e8\u4e2d\u4e0d\u4f5c\u8be6\u7ec6\u6982\u8ff0\uff0c\u6211\u4eec\u540e\u7eed\u90fd\u4f1a\u6709\u8be6\u7ec6\u7684\u6587\u6863\u8fdb\u884c\u63cf\u8ff0\uff0c\u4f60\u4e5f\u53ef\u4ee5\u70b9\u51fb\u4e0b\u6587\u7684\u3010\u731c\u4f60\u60f3\u770b\u3011\u5feb\u901f\u8df3\u8f6c\u7684\u5bf9\u5e94\u6587\u6863\u67e5\u770b\u3002")),(0,o.kt)("h1",{id:"\u6e90\u7801"},"\u6e90\u7801"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/zeromicro/go-zero-demo/tree/master/mall"},"mall\u6e90\u7801")))}m.isMDXComponent=!0}}]);