"use strict";(self.webpackChunkgo_zero=self.webpackChunkgo_zero||[]).push([[4175],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=i,h=p["".concat(s,".").concat(d)]||p[d]||m[d]||a;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8620:function(e,t,n){n.r(t),n.d(t,{default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],l={},s={unversionedId:"blog/governance/periodlimit",id:"blog/governance/periodlimit",isDocsHomePage:!1,title:"Period Limit",description:"Whether in a single service or in a microservice, the API interface provided by the developer for the front end has an upper limit of access. When the frequency of access or the amount of concurrency exceeds its tolerance, we must consider current limit to ensure the interface. Availability or degraded availability. That is, the interface also needs to be installed with a fuse to prevent the system from being paralyzed due to excessive pressure on the system by unexpected requests.",source:"@site/docs/blog/governance/periodlimit.md",sourceDirName:"blog/governance",slug:"/blog/governance/periodlimit",permalink:"/docs/blog/governance/periodlimit",editUrl:"https://github.com/zeromicro/portal/edit/main/docs/blog/governance/periodlimit.md",version:"current",lastUpdatedAt:1673270884,formattedLastUpdatedAt:"1/9/2023",frontMatter:{},sidebar:"blog",previous:{title:"Load Shedding",permalink:"/docs/blog/governance/loadshedding"},next:{title:"Token Limit",permalink:"/docs/blog/governance/tokenlimit"}},c=[{value:"Usage",id:"usage",children:[]},{value:"periodlimit",id:"periodlimit",children:[]},{value:"Subsequent processing",id:"subsequent-processing",children:[]},{value:"Summary",id:"summary",children:[]},{value:"Reference",id:"reference",children:[]}],u={toc:c};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Whether in a single service or in a microservice, the API interface provided by the developer for the front end has an upper limit of access. When the frequency of access or the amount of concurrency exceeds its tolerance, we must consider current limit to ensure the interface. Availability or degraded availability. That is, the interface also needs to be installed with a fuse to prevent the system from being paralyzed due to excessive pressure on the system by unexpected requests."),(0,a.kt)("p",null,"This article will introduce ",(0,a.kt)("inlineCode",{parentName:"p"},"periodlimit"),"."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'const (\n    seconds = 1\n    total   = 100\n    quota   = 5\n)\n// New limiter\nl := NewPeriodLimit(seconds, quota, redis.NewRedis(s.Addr(), redis.NodeType), "periodlimit")\n\n// take source\ncode, err := l.Take("first")\nif err != nil {\n    logx.Error(err)\n    return true\n}\n\n// switch val => process request\nswitch code {\n    case limit.OverQuota:\n        logx.Errorf("OverQuota key: %v", key)\n        return false\n    case limit.Allowed:\n        logx.Infof("AllowedQuota key: %v", key)\n        return true\n    case limit.HitQuota:\n        logx.Errorf("HitQuota key: %v", key)\n        // todo: maybe we need to let users know they hit the quota\n        return false\n    default:\n        logx.Errorf("DefaultQuota key: %v", key)\n        // unknown response, we just let the sms go\n        return true\n}\n')),(0,a.kt)("h2",{id:"periodlimit"},"periodlimit"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"go-zero")," adopts a ",(0,a.kt)("strong",{parentName:"p"},"sliding window")," counting method to calculate the number of accesses to the same resource within a period of time. If it exceeds the specified ",(0,a.kt)("inlineCode",{parentName:"p"},"limit"),", access is denied. Of course, if you are accessing different resources within a period of time, the amount of access to each resource does not exceed the ",(0,a.kt)("inlineCode",{parentName:"p"},"limit"),". In this case, a large number of requests are allowed to come in."),(0,a.kt)("p",null,"In a distributed system, there are multiple microservices to provide services. So when instantaneous traffic accesses the same resource at the same time, how to make the counter count normally in the distributed system? At the same time, when computing resources are accessed, multiple calculations may be involved. How to ensure the atomicity of calculations?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"go-zero")," counts resource visits with the help of ",(0,a.kt)("inlineCode",{parentName:"li"},"incrby")," of ",(0,a.kt)("inlineCode",{parentName:"li"},"redis")),(0,a.kt)("li",{parentName:"ul"},"Use ",(0,a.kt)("inlineCode",{parentName:"li"},"lua script")," to do the whole window calculation to ensure the atomicity of calculation")),(0,a.kt)("p",null,"Let's take a look at several key attributes controlled by ",(0,a.kt)("inlineCode",{parentName:"p"},"lua script"),":"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"argument")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"mean")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"key","[1]"),(0,a.kt)("td",{parentName:"tr",align:null},"Logo for access to resources")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ARGV","[1]"),(0,a.kt)("td",{parentName:"tr",align:null},"limit => the total number of requests, if it exceeds the rate limit. Can be set to QPS")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ARGV","[2]"),(0,a.kt)("td",{parentName:"tr",align:null},"window size => sliding window, use ttl to simulate the effect of sliding")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'-- to be compatible with aliyun redis, \n-- we cannot use `local key = KEYS[1]` to reuse thekey\nlocal limit = tonumber(ARGV[1])\nlocal window = tonumber(ARGV[2])\n-- incrbt key 1 => key visis++\nlocal current = redis.call("INCRBY", KEYS[1], 1)\n-- If it is the first visit, set the expiration time => TTL = window size\n-- Because it only limits the number of visits for a period\nif current == 1 then\n    redis.call("expire", KEYS[1], window)\n    return 1\nelseif current < limit then\n    return 1\nelseif current == limit then\n    return 2\nelse\n    return 0\nend\n')),(0,a.kt)("p",null,"As for the above ",(0,a.kt)("inlineCode",{parentName:"p"},"return code"),", return it to the caller. The caller decides to request subsequent operations:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"return code")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"tag")),(0,a.kt)("th",{parentName:"tr",align:null},"call code"),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"mean")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"0"),(0,a.kt)("td",{parentName:"tr",align:null},"OverQuota"),(0,a.kt)("td",{parentName:"tr",align:null},"3"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"over limit"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"Allowed"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"in limit"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"2"),(0,a.kt)("td",{parentName:"tr",align:null},"HitQuota"),(0,a.kt)("td",{parentName:"tr",align:null},"2"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"hit limit"))))),(0,a.kt)("p",null,"The following picture describes the process of request entry and the subsequent situation when the request triggers ",(0,a.kt)("inlineCode",{parentName:"p"},"limit"),":\n",(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/zeromicro/zero-doc/main/doc/images/periodlimit-1.png",alt:"image.png"}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/zeromicro/zero-doc/main/doc/images/periodlimit-2.png",alt:"image.png"})),(0,a.kt)("h2",{id:"subsequent-processing"},"Subsequent processing"),(0,a.kt)("p",null,"If a large batch of requests comes in at a certain point in the service, the ",(0,a.kt)("inlineCode",{parentName:"p"},"periodlimit")," reaches the ",(0,a.kt)("inlineCode",{parentName:"p"},"limit")," threshold in a short period of time, and the set time range is far from reaching. The processing of subsequent requests becomes a problem."),(0,a.kt)("p",null,"It is not processed in ",(0,a.kt)("inlineCode",{parentName:"p"},"periodlimit"),", but ",(0,a.kt)("inlineCode",{parentName:"p"},"code")," is returned. The processing of subsequent requests is left to the developer."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"If it is not processed, it is simply to reject the request"),(0,a.kt)("li",{parentName:"ol"},"If these requests need to be processed, developers can use ",(0,a.kt)("inlineCode",{parentName:"li"},"mq")," to buffer the requests to ease the pressure of the requests"),(0,a.kt)("li",{parentName:"ol"},"Use ",(0,a.kt)("inlineCode",{parentName:"li"},"tokenlimit")," to allow temporary traffic impact")),(0,a.kt)("p",null,"So in the next article, we will talk about ",(0,a.kt)("inlineCode",{parentName:"p"},"tokenlimit")),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"periodlimit")," current limiting scheme in ",(0,a.kt)("inlineCode",{parentName:"p"},"go-zero")," is based on ",(0,a.kt)("inlineCode",{parentName:"p"},"redis")," counters. By calling ",(0,a.kt)("inlineCode",{parentName:"p"},"redis lua script"),", it guarantees the atomicity of the counting process and guarantees that the counting is normal under distributed conditions. However, this scheme has disadvantages because it needs to record all behavior records within the time window. If this amount is particularly large, memory consumption will become very serious."),(0,a.kt)("h2",{id:"reference"},"Reference"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/zeromicro/go-zero/blob/master/core/limit/periodlimit.go"},"go-zero periodlimit")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.infoq.cn/article/Qg2tX8fyw5Vt-f3HH673"},"Distributed service current limit actual combat, has already lined up the pits for you")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"tokenlimit"},"tokenlimit"))))}m.isMDXComponent=!0}}]);