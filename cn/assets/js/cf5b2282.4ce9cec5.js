"use strict";(self.webpackChunkgo_zero=self.webpackChunkgo_zero||[]).push([[2186],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return c}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),m=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=m(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),g=m(t),c=i,d=g["".concat(p,".").concat(c)]||g[c]||u[c]||o;return t?r.createElement(d,a(a({ref:n},s),{},{components:t})):r.createElement(d,a({ref:n},s))}));function c(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=g;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var m=2;m<o;m++)a[m]=t[m];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},9469:function(e,n,t){t.r(n),t.d(n,{default:function(){return u},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m}});var r=t(7462),i=t(3366),o=(t(7294),t(3905)),a=["components"],l={},p={unversionedId:"component/logx",id:"component/logx",isDocsHomePage:!1,title:"logx",description:"logx \u914d\u7f6e",source:"@site/i18n/cn/docusaurus-plugin-content-docs/current/component/logx.md",sourceDirName:"component",slug:"/component/logx",permalink:"/cn/docs/component/logx",editUrl:"https://github.com/zeromicro/portal/edit/main/i18n/cn/docusaurus-plugin-content-docs/current/component/logx.md",version:"current",lastUpdatedAt:1673270884,formattedLastUpdatedAt:"1/9/2023",frontMatter:{},sidebar:"docs",previous:{title:"\u7ec4\u4ef6\u5256\u6790",permalink:"/cn/docs/component/components"},next:{title:"\u8fdb\u9636\u6307\u5357",permalink:"/cn/docs/advance/advance"}},m=[{value:"logx \u914d\u7f6e",id:"logx-\u914d\u7f6e",children:[]},{value:"\u6253\u5370\u65e5\u5fd7\u65b9\u6cd5",id:"\u6253\u5370\u65e5\u5fd7\u65b9\u6cd5",children:[]},{value:"\u4e0e\u7b2c\u4e09\u65b9\u65e5\u5fd7\u5e93\u96c6\u6210",id:"\u4e0e\u7b2c\u4e09\u65b9\u65e5\u5fd7\u5e93\u96c6\u6210",children:[]},{value:"\u5c06\u65e5\u5fd7\u5199\u5230\u6307\u5b9a\u7684\u5b58\u50a8",id:"\u5c06\u65e5\u5fd7\u5199\u5230\u6307\u5b9a\u7684\u5b58\u50a8",children:[]},{value:"\u8fc7\u6ee4\u654f\u611f\u5b57\u6bb5",id:"\u8fc7\u6ee4\u654f\u611f\u5b57\u6bb5",children:[]},{value:"\u66f4\u591a\u793a\u4f8b",id:"\u66f4\u591a\u793a\u4f8b",children:[]}],s={toc:m};function u(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"logx-\u914d\u7f6e"},"logx \u914d\u7f6e"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'type LogConf struct {\n    ServiceName         string `json:",optional"`\n    Mode                string `json:",default=console,options=[console,file,volume]"`\n    Encoding            string `json:",default=json,options=[json,plain]"`\n    TimeFormat          string `json:",optional"`\n    Path                string `json:",default=logs"`\n    Level               string `json:",default=info,options=[info,error,severe]"`\n    Compress            bool   `json:",optional"`\n    KeepDays            int    `json:",optional"`\n    StackCooldownMillis int    `json:",default=100"`\n}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ServiceName"),"\uff1a\u8bbe\u7f6e\u670d\u52a1\u540d\u79f0\uff0c\u53ef\u9009\u3002\u5728 ",(0,o.kt)("inlineCode",{parentName:"li"},"volume")," \u6a21\u5f0f\u4e0b\uff0c\u8be5\u540d\u79f0\u7528\u4e8e\u751f\u6210\u65e5\u5fd7\u6587\u4ef6\u3002\u5728 ",(0,o.kt)("inlineCode",{parentName:"li"},"rest/zrpc")," \u670d\u52a1\u4e2d\uff0c\u540d\u79f0\u5c06\u88ab\u81ea\u52a8\u8bbe\u7f6e\u4e3a ",(0,o.kt)("inlineCode",{parentName:"li"},"rest"),"\u6216",(0,o.kt)("inlineCode",{parentName:"li"},"zrpc")," \u7684\u540d\u79f0\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Mode"),"\uff1a\u8f93\u51fa\u65e5\u5fd7\u7684\u6a21\u5f0f\uff0c\u9ed8\u8ba4\u662f ",(0,o.kt)("inlineCode",{parentName:"li"},"console"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"console")," \u6a21\u5f0f\u5c06\u65e5\u5fd7\u5199\u5230 ",(0,o.kt)("inlineCode",{parentName:"li"},"stdout/stderr")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"file")," \u6a21\u5f0f\u5c06\u65e5\u5fd7\u5199\u5230 ",(0,o.kt)("inlineCode",{parentName:"li"},"Path")," \u6307\u5b9a\u76ee\u5f55\u7684\u6587\u4ef6\u4e2d"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"volume")," \u6a21\u5f0f\u5728 docker \u4e2d\u4f7f\u7528\uff0c\u5c06\u65e5\u5fd7\u5199\u5165\u6302\u8f7d\u7684\u5377\u4e2d"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Encoding"),": \u6307\u793a\u5982\u4f55\u5bf9\u65e5\u5fd7\u8fdb\u884c\u7f16\u7801\uff0c\u9ed8\u8ba4\u662f ",(0,o.kt)("inlineCode",{parentName:"li"},"json"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"json"),"\u6a21\u5f0f\u4ee5 json \u683c\u5f0f\u5199\u65e5\u5fd7"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"plain"),"\u6a21\u5f0f\u7528\u7eaf\u6587\u672c\u5199\u65e5\u5fd7\uff0c\u5e76\u5e26\u6709\u7ec8\u7aef\u989c\u8272\u663e\u793a"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"TimeFormat"),"\uff1a\u81ea\u5b9a\u4e49\u65f6\u95f4\u683c\u5f0f\uff0c\u53ef\u9009\u3002\u9ed8\u8ba4\u662f ",(0,o.kt)("inlineCode",{parentName:"li"},"2006-01-02T15:04:05.000Z07:00")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Path"),"\uff1a\u8bbe\u7f6e\u65e5\u5fd7\u8def\u5f84\uff0c\u9ed8\u8ba4\u4e3a ",(0,o.kt)("inlineCode",{parentName:"li"},"logs")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Level"),": \u7528\u4e8e\u8fc7\u6ee4\u65e5\u5fd7\u7684\u65e5\u5fd7\u7ea7\u522b\u3002\u9ed8\u8ba4\u4e3a ",(0,o.kt)("inlineCode",{parentName:"li"},"info"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"info"),"\uff0c\u6240\u6709\u65e5\u5fd7\u90fd\u88ab\u5199\u5165"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"error"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"info")," \u7684\u65e5\u5fd7\u88ab\u4e22\u5f03"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"severe"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"info")," \u548c ",(0,o.kt)("inlineCode",{parentName:"li"},"error")," \u65e5\u5fd7\u88ab\u4e22\u5f03\uff0c\u53ea\u6709 ",(0,o.kt)("inlineCode",{parentName:"li"},"severe")," \u65e5\u5fd7\u88ab\u5199\u5165"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Compress"),": \u662f\u5426\u538b\u7f29\u65e5\u5fd7\u6587\u4ef6\uff0c\u53ea\u5728 ",(0,o.kt)("inlineCode",{parentName:"li"},"file")," \u6a21\u5f0f\u4e0b\u5de5\u4f5c"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"KeepDays"),"\uff1a\u65e5\u5fd7\u6587\u4ef6\u88ab\u4fdd\u7559\u591a\u5c11\u5929\uff0c\u5728\u7ed9\u5b9a\u7684\u5929\u6570\u4e4b\u540e\uff0c\u8fc7\u671f\u7684\u6587\u4ef6\u5c06\u88ab\u81ea\u52a8\u5220\u9664\u3002\u5bf9 ",(0,o.kt)("inlineCode",{parentName:"li"},"console")," \u6a21\u5f0f\u6ca1\u6709\u5f71\u54cd"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"StackCooldownMillis"),"\uff1a\u591a\u5c11\u6beb\u79d2\u540e\u518d\u6b21\u5199\u5165\u5806\u6808\u8ddf\u8e2a\u3002\u7528\u6765\u907f\u514d\u5806\u6808\u8ddf\u8e2a\u65e5\u5fd7\u8fc7\u591a")),(0,o.kt)("h2",{id:"\u6253\u5370\u65e5\u5fd7\u65b9\u6cd5"},"\u6253\u5370\u65e5\u5fd7\u65b9\u6cd5"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"type Logger interface {\n    // Error logs a message at error level.\n    Error(...interface{})\n    // Errorf logs a message at error level.\n    Errorf(string, ...interface{})\n    // Errorv logs a message at error level.\n    Errorv(interface{})\n    // Errorw logs a message at error level.\n    Errorw(string, ...LogField)\n    // Info logs a message at info level.\n    Info(...interface{})\n    // Infof logs a message at info level.\n    Infof(string, ...interface{})\n    // Infov logs a message at info level.\n    Infov(interface{})\n    // Infow logs a message at info level.\n    Infow(string, ...LogField)\n    // Slow logs a message at slow level.\n    Slow(...interface{})\n    // Slowf logs a message at slow level.\n    Slowf(string, ...interface{})\n    // Slowv logs a message at slow level.\n    Slowv(interface{})\n    // Sloww logs a message at slow level.\n    Sloww(string, ...LogField)\n    // WithContext returns a new logger with the given context.\n    WithContext(context.Context) Logger\n    // WithDuration returns a new logger with the given duration.\n    WithDuration(time.Duration) Logger\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Error"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Info"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Slow"),": \u5c06\u4efb\u4f55\u7c7b\u578b\u7684\u4fe1\u606f\u5199\u8fdb\u65e5\u5fd7\uff0c\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"li"},"fmt.Sprint(...)")," \u6765\u8f6c\u6362\u4e3a ",(0,o.kt)("inlineCode",{parentName:"li"},"string")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Errorf"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Infof"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Slowf"),": \u5c06\u6307\u5b9a\u683c\u5f0f\u7684\u4fe1\u606f\u5199\u5165\u65e5\u5fd7"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Errorv"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Infov"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Slowv"),": \u5c06\u4efb\u4f55\u7c7b\u578b\u7684\u4fe1\u606f\u5199\u5165\u65e5\u5fd7\uff0c\u7528 ",(0,o.kt)("inlineCode",{parentName:"li"},"json marshal")," \u7f16\u7801"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Errorw"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Infow"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Sloww"),": \u5199\u65e5\u5fd7\uff0c\u5e76\u5e26\u4e0a\u7ed9\u5b9a\u7684 ",(0,o.kt)("inlineCode",{parentName:"li"},"key:value")," \u5b57\u6bb5"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"WithContext"),"\uff1a\u5c06\u7ed9\u5b9a\u7684 ctx \u6ce8\u5165\u65e5\u5fd7\u4fe1\u606f\uff0c\u4f8b\u5982\u7528\u4e8e\u8bb0\u5f55 ",(0,o.kt)("inlineCode",{parentName:"li"},"trace-id"),"\u548c",(0,o.kt)("inlineCode",{parentName:"li"},"span-id")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"WithDuration"),": \u5c06\u6307\u5b9a\u7684\u65f6\u95f4\u5199\u5165\u65e5\u5fd7\u4fe1\u606f\u4e2d\uff0c\u5b57\u6bb5\u540d\u4e3a ",(0,o.kt)("inlineCode",{parentName:"li"},"duration"))),(0,o.kt)("h2",{id:"\u4e0e\u7b2c\u4e09\u65b9\u65e5\u5fd7\u5e93\u96c6\u6210"},"\u4e0e\u7b2c\u4e09\u65b9\u65e5\u5fd7\u5e93\u96c6\u6210"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"zap",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u5b9e\u73b0\uff1a",(0,o.kt)("a",{parentName:"li",href:"https://github.com/zeromicro/zero-contrib/blob/main/logx/zapx/zap.go"},"https://github.com/zeromicro/zero-contrib/blob/main/logx/zapx/zap.go")),(0,o.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u793a\u4f8b\uff1a",(0,o.kt)("a",{parentName:"li",href:"https://github.com/zeromicro/zero-examples/blob/main/logx/zaplog/main.go"},"https://github.com/zeromicro/zero-examples/blob/main/logx/zaplog/main.go")))),(0,o.kt)("li",{parentName:"ul"},"logrus",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u5b9e\u73b0\uff1a",(0,o.kt)("a",{parentName:"li",href:"https://github.com/zeromicro/zero-contrib/blob/main/logx/logrusx/logrus.go"},"https://github.com/zeromicro/zero-contrib/blob/main/logx/logrusx/logrus.go")),(0,o.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u793a\u4f8b\uff1a",(0,o.kt)("a",{parentName:"li",href:"https://github.com/zeromicro/zero-examples/blob/main/logx/logrus/main.go"},"https://github.com/zeromicro/zero-examples/blob/main/logx/logrus/main.go"))))),(0,o.kt)("p",null,"\u5bf9\u4e8e\u5176\u5b83\u7684\u65e5\u5fd7\u5e93\uff0c\u8bf7\u53c2\u8003\u4e0a\u9762\u793a\u4f8b\u5b9e\u73b0\uff0c\u5e76\u6b22\u8fce\u63d0\u4ea4 ",(0,o.kt)("inlineCode",{parentName:"p"},"PR")," \u5230 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/zeromicro/zero-contrib"},"https://github.com/zeromicro/zero-contrib")),(0,o.kt)("h2",{id:"\u5c06\u65e5\u5fd7\u5199\u5230\u6307\u5b9a\u7684\u5b58\u50a8"},"\u5c06\u65e5\u5fd7\u5199\u5230\u6307\u5b9a\u7684\u5b58\u50a8"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"logx"),"\u5b9a\u4e49\u4e86\u4e24\u4e2a\u63a5\u53e3\uff0c\u65b9\u4fbf\u81ea\u5b9a\u4e49 ",(0,o.kt)("inlineCode",{parentName:"p"},"logx"),"\uff0c\u5c06\u65e5\u5fd7\u5199\u5165\u4efb\u4f55\u5b58\u50a8\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"logx.NewWriter(w io.Writer)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"logx.SetWriter(write logx.Writer)"))),(0,o.kt)("p",null,"\u4f8b\u5982\uff0c\u5982\u679c\u6211\u4eec\u60f3\u628a\u65e5\u5fd7\u5199\u8fdbkafka\uff0c\u800c\u4e0d\u662f\u63a7\u5236\u53f0\u6216\u6587\u4ef6\uff0c\u6211\u4eec\u53ef\u4ee5\u50cf\u4e0b\u9762\u8fd9\u6837\u505a\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'type KafkaWriter struct {\n    Pusher *kq.Pusher\n}\n\nfunc NewKafkaWriter(pusher *kq.Pusher) *KafkaWriter {\n    return &KafkaWriter{\n        Pusher: pusher,\n    }\n}\n\nfunc (w *KafkaWriter) Write(p []byte) (n int, err error) {\n    // writing log with newlines, trim them.\n    if err := w.Pusher.Push(strings.TrimSpace(string(p))); err != nil {\n        return 0, err\n    }\n\n    return len(p), nil\n}\n\nfunc main() {\n    pusher := kq.NewPusher([]string{"localhost:9092"}, "go-zero")\n    defer pusher.Close()\n\n    writer := logx.NewWriter(NewKafkaWriter(pusher))\n    logx.SetWriter(writer)\n  \n    // more code\n}\n')),(0,o.kt)("p",null,"\u5b8c\u6574\u4ee3\u7801\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://github.com/zeromicro/zero-examples/blob/main/logx/tokafka/main.go"},"https://github.com/zeromicro/zero-examples/blob/main/logx/tokafka/main.go")),(0,o.kt)("h2",{id:"\u8fc7\u6ee4\u654f\u611f\u5b57\u6bb5"},"\u8fc7\u6ee4\u654f\u611f\u5b57\u6bb5"),(0,o.kt)("p",null,"\u5982\u679c\u6211\u4eec\u9700\u8981\u9632\u6b62  ",(0,o.kt)("inlineCode",{parentName:"p"},"password")," \u5b57\u6bb5\u88ab\u8bb0\u5f55\u4e0b\u6765\uff0c\u6211\u4eec\u53ef\u4ee5\u50cf\u4e0b\u9762\u8fd9\u6837\u5b9e\u73b0\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'type (\n    Message struct {\n        Name     string\n        Password string\n        Message  string\n    }\n\n    SensitiveLogger struct {\n        logx.Writer\n    }\n)\n\nfunc NewSensitiveLogger(writer logx.Writer) *SensitiveLogger {\n    return &SensitiveLogger{\n        Writer: writer,\n    }\n}\n\nfunc (l *SensitiveLogger) Info(msg interface{}, fields ...logx.LogField) {\n    if m, ok := msg.(Message); ok {\n        l.Writer.Info(Message{\n            Name:     m.Name,\n            Password: "******",\n            Message:  m.Message,\n        }, fields...)\n    } else {\n        l.Writer.Info(msg, fields...)\n    }\n}\n\nfunc main() {\n    // setup logx to make sure originalWriter not nil,\n    // the injected writer is only for filtering, like a middleware.\n\n    originalWriter := logx.Reset()\n    writer := NewSensitiveLogger(originalWriter)\n    logx.SetWriter(writer)\n\n    logx.Infov(Message{\n        Name:     "foo",\n        Password: "shouldNotAppear",\n        Message:  "bar",\n    })\n  \n    // more code\n}\n')),(0,o.kt)("p",null,"\u5b8c\u6574\u4ee3\u7801\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://github.com/zeromicro/zero-examples/blob/main/logx/filterfields/main.go"},"https://github.com/zeromicro/zero-examples/blob/main/logx/filterfields/main.go")),(0,o.kt)("h2",{id:"\u66f4\u591a\u793a\u4f8b"},"\u66f4\u591a\u793a\u4f8b"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/zeromicro/zero-examples/tree/main/logx"},"https://github.com/zeromicro/zero-examples/tree/main/logx")))}u.isMDXComponent=!0}}]);