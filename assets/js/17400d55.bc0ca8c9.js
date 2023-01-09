"use strict";(self.webpackChunkgo_zero=self.webpackChunkgo_zero||[]).push([[437],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return d}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=n.createContext({}),g=function(e){var r=n.useContext(a),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=g(e.components);return n.createElement(a.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,c=e.originalType,a=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=g(t),d=o,m=u["".concat(a,".").concat(d)]||u[d]||s[d]||c;return t?n.createElement(m,i(i({ref:r},l),{},{components:t})):n.createElement(m,i({ref:r},l))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var c=t.length,i=new Array(c);i[0]=u;var p={};for(var a in r)hasOwnProperty.call(r,a)&&(p[a]=r[a]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var g=2;g<c;g++)i[g]=t[g];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2050:function(e,r,t){t.r(r),t.d(r,{default:function(){return s},frontMatter:function(){return p},metadata:function(){return a},toc:function(){return g}});var n=t(7462),o=t(3366),c=(t(7294),t(3905)),i=["components"],p={},a={unversionedId:"design/rpc-dir",id:"design/rpc-dir",isDocsHomePage:!1,title:"RPC Directory Structure",description:"proto",source:"@site/docs/design/rpc-dir.md",sourceDirName:"design",slug:"/design/rpc-dir",permalink:"/docs/design/rpc-dir",editUrl:"https://github.com/zeromicro/portal/edit/main/docs/design/rpc-dir.md",version:"current",lastUpdatedAt:1673270884,formattedLastUpdatedAt:"1/9/2023",frontMatter:{},sidebar:"design",previous:{title:"API directory introduction",permalink:"/docs/design/api-dir"}},g=[{value:"proto",id:"proto",children:[{value:"goctl rpc protoc",id:"goctl-rpc-protoc",children:[]}]}],l={toc:g};function s(e){var r=e.components,t=(0,o.Z)(e,i);return(0,c.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"proto"},"proto"),(0,c.kt)("p",null,"greet.proto"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-protobuf"},'syntax = "proto3";\n\npackage stream;\n\noption go_package = "./greet";\n\nmessage StreamReq {\n  string name = 1;\n}\n\nmessage StreamResp {\n  string greet = 1;\n}\n\nservice StreamGreeter {\n  rpc greet(StreamReq) returns (StreamResp);\n}\n')),(0,c.kt)("h3",{id:"goctl-rpc-protoc"},"goctl rpc protoc"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-shell"},'$ goctl rpc protoc greet.proto --go_out=. --go-grpc_out=. --zrpc_out=. --verbose                                                                                               \n[goctl-env]: preparing to check env\n\n[goctl-env]: looking up "protoc"\n[goctl-env]: "protoc" is installed\n\n[goctl-env]: looking up "protoc-gen-go"\n[Goctl-env]: "protoc-gen-go" is installed\n\n[goctl-env]: looking up "protoc-gen-go-grpc"\n[goctl-env]: "protoc-gen-go-grpc" is installed\n\n[goctl-env]: congratulations, your goctl environment is ready!\n[command]: protoc greet.proto --go_out=. --go-grpc_out=.\nDone.\n')),(0,c.kt)("p",null,"dir structure:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-text"},".\n\u251c\u2500\u2500 etc\n\u2502\xa0\xa0 \u2514\u2500\u2500 greet.yaml\n\u251c\u2500\u2500 go.mod\n\u251c\u2500\u2500 go.sum\n\u251c\u2500\u2500 greet // [1]\n\u2502\xa0\xa0 \u251c\u2500\u2500 greet.pb.go\n\u2502\xa0\xa0 \u2514\u2500\u2500 greet_grpc.pb.go\n\u251c\u2500\u2500 greet.go\n\u251c\u2500\u2500 greet.proto\n\u251c\u2500\u2500 internal\n\u2502\xa0\xa0 \u251c\u2500\u2500 config\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 config.go\n\u2502\xa0\xa0 \u251c\u2500\u2500 logic\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 greetlogic.go\n\u2502\xa0\xa0 \u251c\u2500\u2500 server\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 streamgreeterserver.go\n\u2502\xa0\xa0 \u2514\u2500\u2500 svc\n\u2502\xa0\xa0     \u2514\u2500\u2500 servicecontext.go\n\u2514\u2500\u2500 streamgreeter\n    \u2514\u2500\u2500 streamgreeter.go\n")),(0,c.kt)("p",null,"[1]"," The directory where the ",(0,c.kt)("inlineCode",{parentName:"p"},"pb.go & _grpc.pb.go")," files are located is not fixed, it is determined by ",(0,c.kt)("inlineCode",{parentName:"p"},"go_opt & go-grpc_opt")," in conjunction with the ",(0,c.kt)("inlineCode",{parentName:"p"},"go_package")," value in the proto file, to understand the logic of the grpc code generation directory read ",(0,c.kt)("a",{parentName:"p",href:"https://developers.google.com/protocol-buffers/docs/reference/go-generated"},"Go Generated Code")))}s.isMDXComponent=!0}}]);