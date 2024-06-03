"use strict";(self.webpackChunkpython=self.webpackChunkpython||[]).push([[4471],{57265:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>p,toc:()=>k});var a=n(87462),l=(n(67294),n(3905));const r={title:"Python \u8b8a\u6578\u8207\u8b8a\u6578\u5b58\u53d6\u7bc4\u570d",description:"Python \u8b8a\u6578\u8207\u8b8a\u6578\u5b58\u53d6\u7bc4\u570d",keywords:["Python","Var Scope"]},o="Python \u8b8a\u6578\u8207\u8b8a\u6578\u5b58\u53d6\u7bc4\u570d:",p={unversionedId:"Python\u7279\u6b8a\u64cd\u4f5c/Python_2_Variable_and_Scope",id:"Python\u7279\u6b8a\u64cd\u4f5c/Python_2_Variable_and_Scope",title:"Python \u8b8a\u6578\u8207\u8b8a\u6578\u5b58\u53d6\u7bc4\u570d",description:"Python \u8b8a\u6578\u8207\u8b8a\u6578\u5b58\u53d6\u7bc4\u570d",source:"@site/docs/004_Python\u7279\u6b8a\u64cd\u4f5c/030_Python_2_Variable_and_Scope.md",sourceDirName:"004_Python\u7279\u6b8a\u64cd\u4f5c",slug:"/Python\u7279\u6b8a\u64cd\u4f5c/Python_2_Variable_and_Scope",permalink:"/en/docs/Python\u7279\u6b8a\u64cd\u4f5c/Python_2_Variable_and_Scope",draft:!1,tags:[],version:"current",sidebarPosition:30,frontMatter:{title:"Python \u8b8a\u6578\u8207\u8b8a\u6578\u5b58\u53d6\u7bc4\u570d",description:"Python \u8b8a\u6578\u8207\u8b8a\u6578\u5b58\u53d6\u7bc4\u570d",keywords:["Python","Var Scope"]},sidebar:"totem_sidebar",previous:{title:"Python \u6a94\u6848\u64cd\u4f5c",permalink:"/en/docs/Python\u57fa\u790e\u64cd\u4f5c/Python_File"},next:{title:"Python \u4f8b\u5916\u8207\u932f\u8aa4",permalink:"/en/docs/Python\u7279\u6b8a\u64cd\u4f5c/Python_2_Exception_Error"}},i={},k=[{value:"\u547d\u540d\u898f\u5247: Variable Naming Rules",id:"\u547d\u540d\u898f\u5247-variable-naming-rules",level:2},{value:"_x \u55ae\u4e00\u5e95\u7dda\u8b8a\u6578",id:"_x-\u55ae\u4e00\u5e95\u7dda\u8b8a\u6578",level:3},{value:"__x \u96d9\u5e95\u7dda\u8b8a\u6578",id:"__x-\u96d9\u5e95\u7dda\u8b8a\u6578",level:3},{value:"__x__ \u524d\u5f8c\u96d9\u5e95\u7dda",id:"__x__-\u524d\u5f8c\u96d9\u5e95\u7dda",level:3},{value:"\u6c42\u503c\u7b56\u7565: Argument Evaluation Binding",id:"\u6c42\u503c\u7b56\u7565-argument-evaluation-binding",level:2},{value:"\u8b8a\u6578\u5b58\u53d6\u7bc4\u570d: Variable Scope",id:"\u8b8a\u6578\u5b58\u53d6\u7bc4\u570d-variable-scope",level:2},{value:"Shadow Effect : LEGB Rule",id:"shadow-effect--legb-rule",level:3},{value:'<span id="lambda_var_scope">\u5d4c\u5957\u4f5c\u7528\u57df Enclosing Scope</span>',id:"\u5d4c\u5957\u4f5c\u7528\u57df-enclosing-scope",level:3},{value:"\u5de5\u5ee0\u51fd\u6578 Factory Function",id:"\u5de5\u5ee0\u51fd\u6578-factory-function",level:3},{value:"global \u95dc\u9375\u5b57",id:"global-\u95dc\u9375\u5b57",level:3},{value:"nonlocal \u95dc\u9375\u5b57",id:"nonlocal-\u95dc\u9375\u5b57",level:3}],m={toc:k},s="wrapper";function u(e){let{components:t,...n}=e;return(0,l.kt)(s,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"python-\u8b8a\u6578\u8207\u8b8a\u6578\u5b58\u53d6\u7bc4\u570d"},"Python \u8b8a\u6578\u8207\u8b8a\u6578\u5b58\u53d6\u7bc4\u570d:"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Variables and Scopes")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Python \u4e16\u754c\u7684\u908f\u8f2f\u662f ",(0,l.kt)("span",{style:{backgroundColor:"#ffd1b3"}}," ",(0,l.kt)("strong",{parentName:"p"},"We are all consenting adults!")," "),"\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u6240\u4ee5\uff0c\u5c0f\u6a19\u984c\u5beb\u7684\u662f Naming Rules \u800c\u4e0d\u662f Conventions\u3002  "),(0,l.kt)("blockquote",{parentName:"blockquote"},(0,l.kt)("p",{parentName:"blockquote"},"\u6211\u6c92\u8981\u6c42\u4f60\uff0c\u4f46\u4f60\u61c9\u8a72\u9019\u6a23\u505a\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u82e5\u505a\u4e0d\u5230\uff0c\u6211\u6703\u5728\u5fc3\u88e1\u7b11\u4f60\u6c92\u9577\u5927\u3002  ")),(0,l.kt)("p",{parentName:"blockquote"},"class name \u4ee5\u5927\u5beb\u5b57\u6bcd\u958b\u982d(same as Java)",(0,l.kt)("br",{parentName:"p"}),"\n","module name (package name) \u4ee5\u5c0f\u5beb\u5b57\u6bcd\u958b\u982d(Java)",(0,l.kt)("br",{parentName:"p"}),"\n","function name \u4ee5\u5c0f\u5beb\u5b57\u6bcd\u958b\u982d\uff0c\u4ee5 Underscore \u9023\u63a5\u55ae\u8a5e")),(0,l.kt)("h2",{id:"\u547d\u540d\u898f\u5247-variable-naming-rules"},"\u547d\u540d\u898f\u5247: Variable Naming Rules"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"varName"),(0,l.kt)("td",{parentName:"tr",align:null},"public")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"_varName"),(0,l.kt)("td",{parentName:"tr",align:null},"module /package, \u7121\u6cd5 from x import x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"__varName"),(0,l.kt)("td",{parentName:"tr",align:null},"local variable \u985e\u5225\u5167")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"varName")),(0,l.kt)("td",{parentName:"tr",align:null},"\u7cfb\u7d71\u8b8a\u6578 system variables")))),(0,l.kt)("p",null," \u8207 Java \u4e0d\u540c:  "),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"underscore _ (\u7269\u4ef6\u5c01\u88dd) : \u7576\u4e0d\u5e0c\u671b caller \u76f4\u63a5\u4f7f\u7528\u6642\u7684\u898f\u5247  ")),(0,l.kt)("h3",{id:"_x-\u55ae\u4e00\u5e95\u7dda\u8b8a\u6578"},"_","x \u55ae\u4e00\u5e95\u7dda\u8b8a\u6578"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u55ae\u4e00\u5e95\u7dda\u8b8a\u6578: weak internal use indicator,\u96b1\u542b\u7684 import \u8a9e\u6cd5:  ")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u544a\u77e5\u9019\u500b\u8b8a\u6578\u6216\u65b9\u6cd5\u61c9\u8a72\u9650\u5236\u5728 class \u4e4b\u5167\u4f7f\u7528\uff0c",(0,l.kt)("br",{parentName:"p"}),"\n","\u4e0d\u61c9\u8a72\u88ab\u4efb\u610f import\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u4f46\u9700\u6ce8\u610f\u7684\u662f ",(0,l.kt)("span",{style:{backgroundColor:"#ffd1b3"}},"single underscore \u4e26\u975e\u4e00\u7a2e\u9650\u5236\uff0c\u53ea\u662f\u544a\u77e5"),"\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u6240\u4ee5\u9084\u662f\u53ef\u4ee5\u7d93\u7531 classInstance._x \u53d6\u5f97\u5167\u5bb9\u3002  "),(0,l.kt)("p",{parentName:"blockquote"},"\u4e14\u5728 Object Oriented \u7d50\u69cb\u4e0b\uff0c\u55ae\u4e00\u5e95\u7dda\u8b8a\u6578 ","_","x \u4ed6\u9084\u96b1\u542b\u8457: \u9019\u500b",(0,l.kt)("span",{style:{backgroundColor:"#ffd1b3"}},"\u8b8a\u6578\u5c07\u88ab\u5b50\u985e\u5225\u8907\u5beb\u7684\u610f\u601d"),"\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u6240\u4ee5\u8981\u8b8a\u514d\u76f4\u63a5\u4f7f\u7528\u55ae\u4e00\u5e95\u7dda\u8b8a\u6578\u3002  "),(0,l.kt)("p",{parentName:"blockquote"},"test.py \u4e2d\u7684\u55ae\u4e00\u5e95\u7dda\u8b8a\u6578 _x",(0,l.kt)("br",{parentName:"p"}),"\n","\u7121\u6cd5\u7d93\u7531",(0,l.kt)("br",{parentName:"p"}),"\n","from test import * \u88ab\u532f\u5165  "),(0,l.kt)("p",{parentName:"blockquote"},"\u4f46\u662f\u53ef\u4ee5\u660e\u78ba\u7684",(0,l.kt)("br",{parentName:"p"}),"\n","from test import _x \u88ab\u532f\u5165  ")),(0,l.kt)("h3",{id:"__x-\u96d9\u5e95\u7dda\u8b8a\u6578"},"_","_","x \u96d9\u5e95\u7dda\u8b8a\u6578"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u96d9\u5e95\u7dda\u8b8a\u6578:\u985e\u4f3c\u79c1\u6709\u8b8a\u6578"),"  "),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6703\u88ab Python \u7684 name managling \u6a5f\u5236\u6539\u540d\u70ba\uff0c _className",(0,l.kt)("strong",{parentName:"p"},"x\u3002",(0,l.kt)("br",{parentName:"strong"}),"\u56e0\u6b64\u7121\u6cd5\u7d93\u7531 classInstance."),"x \u53d6\u5f97\uff0c\u800c",(0,l.kt)("span",{style:{backgroundColor:"#ffd1b3"}},"\u907f\u514d\u8cc7\u8a0a\u88ab\u8aa4\u7528"),"\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u9032\u800c\u7522\u751f\u51fa ",(0,l.kt)("strong",{parentName:"p"},"\u985e\u4f3c\u79c1\u6709\u8b8a\u6578")," (private variable)\u7684\u7d50\u679c\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u4f46\u8a2d\u8a08(\u6539\u540d\u6a5f\u5236)\u672c\u610f\u662f\uff0c\u907f\u514d\u8cc7\u6599\u88ab\u8aa4\u7528\uff0c\u6216\u662f\u65b9\u6cd5\u88ab\u5b50\u985e\u8986\u5beb\u7b49\u60c5\u5883\u3002  ")),(0,l.kt)("h3",{id:"__x__-\u524d\u5f8c\u96d9\u5e95\u7dda"},"_","_","x","_","_"," \u524d\u5f8c\u96d9\u5e95\u7dda"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u524d\u5f8c\u96d9\u5e95\u7dda:Python \u7cfb\u7d71\u6240\u4f7f\u7528\u8207\u5b9a\u7fa9\u7684\u8b8a\u6578"),"  "),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u7528\u4f86\u63d0\u9192\u8a72\u8b8a\u6578\u662f Python \u7cfb\u7d71\u5167\u5efa\u4f7f\u7528\u7684\u8b8a\u6578\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u7279\u6b8a\u9577\u76f8\uff0c\u4e00\u65b9\u9762\u53ef\u7528\u4f5c\u63d0\u9192\uff0c\u53e6\u4e00\u65b9\u9762\u4e5f\u53ef\u907f\u514d\u8207\u4f7f\u7528\u8005\u81ea\u8a02\u8b8a\u6578\u76f8\u885d\u7a81\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u7c21\u55ae\u7684\u4f86\u8aaa\u5c31\u662f")),(0,l.kt)("h2",{id:"\u6c42\u503c\u7b56\u7565-argument-evaluation-binding"},"\u6c42\u503c\u7b56\u7565: Argument Evaluation Binding"),(0,l.kt)("p",null,"\u8207\u5927\u591a\u6578\u7a0b\u5f0f\u8a9e\u8a00\u76f8\u540c\uff0c\u6613\u7406\u89e3\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Primitive type(Immutable Arguments) : Call by Value",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6578\u503c, \u5b57\u4e32"))),(0,l.kt)("li",{parentName:"ul"},"Object type(Mutable Arguments) : Call by reference",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"list, map, object...")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f:",(0,l.kt)("br",{parentName:"p"}),"\n","\u532f\u5165\u6a21\u7d44\u4e2d\u7684 ",(0,l.kt)("em",{parentName:"p"},"\u503c\u8b8a\u6578")," value variable  "),(0,l.kt)("p",{parentName:"blockquote"},"from x import y ","\xa0",":","\xa0"," call by value",(0,l.kt)("br",{parentName:"p"}),"\n","import y ","\xa0",":","\xa0"," call by reference  ")),(0,l.kt)("h2",{id:"\u8b8a\u6578\u5b58\u53d6\u7bc4\u570d-variable-scope"},"\u8b8a\u6578\u5b58\u53d6\u7bc4\u570d: Variable Scope"),(0,l.kt)("h3",{id:"shadow-effect--legb-rule"},"Shadow Effect : LEGB Rule"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Python \u4e2d\u8b8a\u6578\u67e5\u627e\u7684\u9806\u5e8f(\u7531\u5167\u800c\u5916)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6ce8\u610f ","_","x \u7121\u6cd5\u7d93\u7531 import * \u53d6\u5f97"),(0,l.kt)("li",{parentName:"ul"},"\u6ce8\u610f ","_","_","x \u6703\u88ab\u6539\u540d  ")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Local","\xa0","\xa0","=>","\xa0","\xa0","Enclosing","\xa0","\xa0","=>","\xa0","\xa0","Global","\xa0","\xa0","=>","\xa0","\xa0","Built-in  ")),(0,l.kt)("h3",{id:"\u5d4c\u5957\u4f5c\u7528\u57df-enclosing-scope"},(0,l.kt)("span",{id:"lambda_var_scope"},"\u5d4c\u5957\u4f5c\u7528\u57df Enclosing Scope")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"enclosing scope(\u5d4c\u5957\u4f5c\u7528\u57df) \u53c8\u7a31 statically nested scope(\u975c\u614b\u5d4c\u5957\u4f5c\u7528\u57df)")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u9019\u908a\u6307\u7684\u662f\u69fd\u4e32\u5167\u90e8\u7684 function \u53ef\u4ee5\u53d6\u5f97\u5916\u90e8 host \u7684\u8cc7\u8a0a\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u4e0b\u65b9\u7bc4\u4f8b labmda \u53ef\u53d6\u5f97\u5916\u9762 host_var\u3002   ")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"\u7bc4\u4f8b: \u5d4c\u5957\u4f5c\u7528\u57df Enclosing Scope")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def host_fun(a, b):\n    host_var = 100\n    sum = lambda i, j: i + j + host_var\n    return sum(a, b)\n\nprint(host_fun(1, 3))\n#104\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"\u7bc4\u4f8b: \u5d4c\u5957\u4f5c\u7528\u57df Enclosing Scope \u9047\u5230\u8ff4\u5708")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e0b\u9762\u7bc4\u4f8b\u91cb\u7591: ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u7b2c\u4e00\u7bc4\u4f8b: \u78ba\u5be6\u4ee5\u8ff4\u5708\u5efa\u7acb\u591a\u500b lambdas\uff0c\u6bcf\u500b lambda \u4e5f\u78ba\u5be6\u53ef\u4ee5\u62ff\u5230 host \u7684\u5f15\u6578\uff0c\u4f46\u53ea\u62ff\u5230 reference\uff0c\u6240\u4ee5\u7576\u8ff4\u5708\u4e0d\u65b7\u6539\u8b8a\u5f15\u6578\u503c\u6642\uff0c\u771f\u6b63\u4f7f\u7528\u7684\u662f\u6700\u5f8c\u7684\u5143\u7d20\u503c\u3002  "),(0,l.kt)("li",{parentName:"ul"},"\u7b2c\u4e8c\u7bc4\u4f8b: \u5229\u7528 python \u672a function arguments \u53ef\u6307\u5b9a\u9810\u8a2d\u503c\u7684\u7279\u6027\u4f86\u66ab\u5b58\u8ff4\u5708\u7684  index\u3002  ")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def magazine(bullet: int):\n    shoots = []\n    for i in range(bullet):\n        shoots.append(lambda : 'Got %d Points' % (i + 1))\n        # \u6b64\u8655\u56e0\u70ba labmda \u5c1a\u672a\u57f7\u884c\uff0c\u800c looping \u904e\u7a0b\u4e2d i \u503c\u4e0d\u65b7\u6539\u8b8a\u3002\n        # \u6700\u7d42\u9020\u6210\u6bcf\u500b lambda \u7684 i \u503c\u90fd\u76f8\u540c\n    return shoots\n\nshooting = magazine(3)\nfor s in shooting:\n    print(s())\n# Got 3 Points\n# Got 3 Points\n# Got 3 Points\n\ndef magazine(bullet: int):\n    shoots = []\n    for i in range(bullet):\n        shoots.append(lambda s=i: 'Got %d Points' % (s + 1))\n        # \u6b64\u8655\u56e0\u70ba labmda \u6709\u5c07 i \u503c\u53e6\u5b58\u4fdd\u7559(\u6307\u5b9a\u55ae\u4e00 lambda \u7684\u9810\u8a2d)\uff0c\u6240\u4ee5\u5f97\u5230\u4e0d\u540c\u7d50\u679c\n    return shoots\n\nshooting = magazine(3)\nfor s in shooting:\n    print(s())\n# Got 1 Points\n# Got 2 Points\n# Got 3 Points\n")),(0,l.kt)("h3",{id:"\u5de5\u5ee0\u51fd\u6578-factory-function"},"\u5de5\u5ee0\u51fd\u6578 Factory Function"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Factory Function \u53c8\u7a31 closure",(0,l.kt)("br",{parentName:"p"}),"\n","\u6307\u7684\u662f nested function \u5728 runtime \u6642\u53ef\u4ee5\u8a18\u4f4f host \u6240\u5c6c\u8b8a\u6578\u503c\u7684\u7279\u6027\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u800c host \u51fd\u5f0f\u56e0\u70ba\u5177\u5099\u5efa\u7acb\u5167\u5c64\u51fd\u5f0f\u6240\u9700\u8981\u7684\u74b0\u5883\uff0c\u6545\u88ab\u7a31\u70ba factory function\u3002  ")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"\u7bc4\u4f8b: shoot function \u53ef\u4ee5\u8a18\u4f4f bullet \u7684\u7e3d\u6578 ")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def magazine(bullet):\n    def shoot(fire):\n        return '%d bullets left' % (bullet - fire)\n    return shoot\n\nshooting = magazine(10) # \u8fd4\u56de\u5167\u5c64\u7684 shoot()\nprint(shooting(2)) # shoot() \u4fdd\u7559\u4e86 bullets \u7e3d\u6578,\u5373\u4f7f\u5916\u5c64 scope \u5df2\u6d88\u5931 \n# 8 bullets left\n# magazine(10)(2)\n")),(0,l.kt)("h3",{id:"global-\u95dc\u9375\u5b57"},"global \u95dc\u9375\u5b57"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"global \u95dc\u9375\u5b57\u53ea\u6703\u51fa\u73fe\u5728 ",(0,l.kt)("em",{parentName:"p"},(0,l.kt)("span",{style:{backgroundColor:"#ffd1b3"}}," \u975e\u9802\u5c64 "))," \u7684\u7d50\u69cb\u4e2d\u3002\n\u7528\u4f86\u6307\u50cf\u9802\u5c64\u7684\u5168\u57df\u8b8a\u6578\u7528(\u8207 nonlocal \u6bd4\u8f03)\u3002  "),(0,l.kt)("p",{parentName:"blockquote"},"\u4f7f\u7528\u60c5\u5883\u7565\u5206\u70ba\u4e0b\u5217\u4e09\u9805:  "),(0,l.kt)("ol",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u89e3\u6c7a\u5340\u57df\u8b8a\u6578\u8207\u5168\u57df\u8b8a\u6578\u547d\u540d\u885d\u7a81",(0,l.kt)("br",{parentName:"p"}),"\n","\u7528\u4f86\u5ba3\u544a\u5c07 ",(0,l.kt)("span",{style:{backgroundColor:"#ffd1b3"}}," ",(0,l.kt)("strong",{parentName:"p"},"\u540c\u540d\u7684\u5340\u57df\u8b8a\u6578\u6307\u5411\u5168\u57df\u8b8a\u6578")," "),"\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","Enclosing Scope(\u5d4c\u5957\u4f5c\u7528\u57df)\u7684\u904b\u4f5c\u4e0b\uff0c",(0,l.kt)("br",{parentName:"p"}),"\n","\u51fd\u6578\u6216\u662f\u4e00\u822c\u7684\u7a0b\u5f0f\u5340\u584a\u9810\u8a2d\u662f  ",(0,l.kt)("strong",{parentName:"p"},"\u53ef\u76f4\u63a5\u5b58\u53d6\uff0c\u4f46\u4e0d\u80fd\u6539\u8b8a")," \u5168\u57df\u8b8a\u6578\u7684\u5167\u5bb9\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u56e0\u6b64\u82e5\u60f3\u5728\u5340\u584a\u5167\u66f4\u6539\u5168\u57df\u8b8a\u6578\u5167\u5bb9\u7684\u8a71\uff0c",(0,l.kt)("br",{parentName:"p"}),"\n","\u6703\u9700\u8981\u5728\u5340\u57df\u5340\u584a\u5167\u5c07\u8b8a\u6578\u88dc\u4e0a global \u4fee\u98fe\u8a5e\u3002  ")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5728\u7a0b\u5f0f\u5340\u57df\u5340\u584a\u4e2d\u8072\u660e\u4e00\u500b\u5168\u57df\u8b8a\u6578\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u6309\u7167 Python \u7d93\u5e38\u51fa\u73fe\u7684\u7701\u7565\u8a9e\u6cd5\uff0c\u53ef\u4ee5\u76f4\u63a5\u60f3\u6210:",(0,l.kt)("br",{parentName:"p"}),"\n","\u52a0 global \u4fee\u98fe\u8a5e\u7684\u5340\u57df\u8b8a\u6578\uff0c\u7b49\u540c\u65bc ",(0,l.kt)("strong",{parentName:"p"},"\u4e5f")," \u5728\u5168\u57df\u5ba3\u544a\u4e86\u4e00\u500b\u540c\u540d\u7684\u5168\u57df\u8b8a\u6578\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u82e5\u60f3\u5728\u5340\u584a\u5167\u4fee\u6539\u5168\u57df\u8b8a\u6578\uff0c\u5247\u5fc5\u9808\u4ee5 gloabl \u95dc\u9375\u544a\u77e5 VM\uff0c\u6b64\u8b8a\u6578\u662f\u5168\u57df\u8b8a\u6578\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u4e0d\u7136\u5340\u584a\u5167\u7684\u8b8a\u6578\u9810\u8a2d\u8996\u70ba\u5340\u57df\u8b8a\u6578\u3002 ")))),(0,l.kt)("div",{style:{backgroundColor:"#b3ffb3"}},(0,l.kt)("pre",null,"\u95dc\u65bc global \u7684\u8a9e\u6cd5\u9762\u5c31\u5982\u540c\u4e0a\u9762\u6558\u8ff0\u3002",(0,l.kt)("p",null,"$ hidden\n$ insect-totem.net\n$ TODO: "),(0,l.kt)("p",null,"\u56de\u6b78\u5230\u7a0b\u5f0f\u8a9e\u8a00\u7684\u8a2d\u8a08\u9762\uff0c\n\u5230\u5e95 Python \u4ec0\u9ebc\u6642\u5019\u6703\u7528\u5230 global/nonlocal?  "),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u70ba\u4ec0\u9ebc\u6703\u6709\u5de5\u7a0b\u5e2b\u60f3\u8981\u6216\u662f\u5fc5\u8981\u8a2d\u8a08\u51fa\u547d\u540d\u885d\u7a81\u7684\u8b8a\u6578\u6216\u65b9\u6cd5?",(0,l.kt)("br",{parentName:"li"}),"LEGB Rule \u8b8a\u6578\u67e5\u627e\u904e\u7a0b\u9810\u8a2d\u6703\u7531\u5167\u5f80\u5916\u627e\u3002",(0,l.kt)("br",{parentName:"li"}),"\u6240\u4ee5\u5373\u4f7f\u547d\u540d\u885d\u7a81\u90a3\u901a\u5e38\u60f3\u8981\u7684\u4e5f\u662f local \u7684\u90a3\u4e00\u500b\u554a?",(0,l.kt)("br",{parentName:"li"}),"\u82e5\u767c\u751f\uff0c\u6211\u8a8d\u70ba\u662f\u8aa4\u7528\u3002",(0,l.kt)("br",{parentName:"li"}),""),(0,l.kt)("li",{parentName:"ol"},"\u5168\u57df\u8b8a\u6578\u6649\u5347\u3002\u70ba\u4ec0\u9ebc\u8981\u5728\u51fd\u6578\u4e2d\u5b9a\u7fa9\u4e00\u500b\u4e0d\u662f\u81ea\u5df1\u80fd\u7ba1\u8f44\u7684\u5168\u57df\u8b8a\u6578?",(0,l.kt)("br",{parentName:"li"}),"\u860b\u679c\u61c9\u8a72\u9577\u5728\u860b\u679c\u6a39\u4e0a\u3002\u5168\u57df\u7684\u5c31\u61c9\u8a72\u653e\u5728\u5168\u57df\u5427?",(0,l.kt)("br",{parentName:"li"}),"\u9019\u5c0d\u6211\u4f86\u8aaa\uff0c\u5b8c\u5168\u4e0d\u5408\u7406\u3002",(0,l.kt)("br",{parentName:"li"}),"\u9019\u60c5\u5f62\u5c31\u50cf\u662f\u516c\u53f8\u7684\u734e\u901e\u5236\u5ea6\u5b9a\u7fa9\u5728\u6e05\u6f54\u4eba\u54e1\u8eab\u4e0a\u4e00\u6a23\u96e3\u4ee5\u7406\u89e3\u3002",(0,l.kt)("br",{parentName:"li"}),""),(0,l.kt)("li",{parentName:"ol"},"\u5269\u4e0b global \u7684\u7528\u9014\u4fbf\u662f\u60f3\u66f4\u6539\u5168\u57df\u8b8a\u6578\u5167\u5bb9\u3002",(0,l.kt)("br",{parentName:"li"}),"\u6211\u63a5\u53d7\u3002\n\u6211\u9858\u610f\u63a5\u53d7\u5728\u4e00\u500b module Scope \u6216 class Scope \u4e2d\u7684\u5168\u57df\u8b8a\u6578\uff0c",(0,l.kt)("br",{parentName:"li"}),"\u88ab\u4e00\u500b\u660e\u78ba\u6307\u540d\u7570\u52d5\u8a72\u8b8a\u6578\u7684\u65b9\u6cd5\u4e2d\u4f7f\u7528\uff0c\u4e0d\u7136\u6703\u5929\u4e0b\u5927\u4e82\u3002  ")))),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"\u89e3\u6c7a\u5340\u57df\u8b8a\u6578\u8207\u5168\u57df\u8b8a\u6578\u547d\u540d\u885d\u7a81")," and ",(0,l.kt)("em",{parentName:"p"},"\u5340\u584a\u5167\u4fee\u6539\u5168\u57df\u8b8a\u6578")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"address = 'Taipei, Taiwan'\n\n# LEGB\ndef resetIp():\n    address = '0.0.0.0'\n    return address\n\n# modify global var\ndef uproot(location:str):\n    global address\n    address = location\n    return address\n\nprint(address)\n# print host address variable\n# 'Taipei, Taiwan'\n\n\n# uproot should be invoked out of this module\n# and host address sholud be renamed to __address\nuproot(\"Taichun, Taiwan\")\nprint(address)\n# update and print host address variable\n# 'Taichun, Taiwan'\n\n\nprint(resetIp())\n# LEGB\n# 0.0.0.0\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"\u5728\u7a0b\u5f0f\u5340\u57df\u5340\u584a\u4e2d\u8072\u660e\u4e00\u500b\u5168\u57df\u8b8a\u6578:\u5168\u57df\u8b8a\u6578\u6649\u5347")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"\ndef fun():\n    global public_X\n    public_X = 55\n    print(public_X)\n    # print(y)\n\n\ndef fun2():\n    global public_X\n    print(public_X)\n\n\nfun() # \u9700\u544a\u4e26\u521d\u59cb\u5316\u5168\u57df\u8b8a\u6578\u8655\nfun2() # \u53d6\u7528\u96b1\u85cf\u7684\u5168\u57df\u8b8a\u6578\n# 55\n# 55\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"\u6a21\u7d44\u5167\u5168\u57df\u8b8a\u6578\u88ab\u5176\u4ed6\u6a21\u7d44\u532f\u5165")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u5728\u7a0b\u5f0f\u5340\u584a(\u5982:\u51fd\u5f0f\u4e2d)\u5c07 global \u6307\u5411 import \u9032\u4f86\u7684 variable\u3002\u6703\u767c\u751f? ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5148\u8a18\u5f97\u4e00\u4ef6\u4e8b: primitive type \u6703 copy \u9032\u4f86\u3002 object type \u662f\u50b3\u9032 reference\u3002"),(0,l.kt)("li",{parentName:"ul"},"imported  vars \u672c\u8eab\u88ab\u8996\u70ba\u662f\u6a21\u7d44\u5167\u7684\u5168\u57df\u8b8a\u6578\u3002  "),(0,l.kt)("li",{parentName:"ul"},"\u6240\u4ee5\uff0c\u6574\u500b\u60c5\u5883\u662f\u8ddf module \u5167\u5168\u57df\u8b8a\u6578\u7684\u4e00\u6a23\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4f46 ",(0,l.kt)("span",{style:{backgroundColor:"#ffd1b3"}},"\u8981\u6ce8\u610f object type call by reference"),"\uff0c\u4e5f\u5c31\u662f\u8aaa\u4f60\u6703\u6539\u5230 ",(0,l.kt)("strong",{parentName:"li"},"\u4f86\u6e90\u6a21\u7d44")," \u7684\u5167\u5bb9\u3002\u4e5f\u6703 ",(0,l.kt)("strong",{parentName:"li"},"\u5f71\u97ff\u5230\u5176\u4ed6 import \u540c\u6a21\u7d44")," \u7684\u7a0b\u5f0f\u7247\u6bb5\u3002    ")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u9019\u908a\u7684\u91cd\u9ede\u5728 ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"\u5c01\u88dd"))),(0,l.kt)("p",{parentName:"blockquote"},"\u532f\u5165\u7684\u8cc7\u6599\u9810\u8a2d\u662f\u6574\u500b module \u7684\u5168\u57df\u8b8a\u6578\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u56de\u6b78\u524d\u9762\u8aaa\u7684 Pythonic Convention: underscore \u8b8a\u6578\u540d\u540d\u898f\u5247\uff0c\u4f60\u61c9\u8a72\u5148\u505a ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"\u9069\u7576\u5c01\u88dd"))," \u3002",(0,l.kt)("br",{parentName:"p"}),"\n","We are all consenting adults\u3002\u8b8a\u6578\u653e\u51fa\u4f86\uff0c\u5c31\u5225\u602a\u5176\u4ed6\u4f7f\u7528\u8005\u6539\u8b8a\u4f60\u7684\u8b8a\u6578\u503c\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u4e5f\u5c31\u662f\u4f7f\u7528 ","_","_","x \u96d9\u5e95\u7dda\u8b8a\u6578\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# \u5c0f\u5fc3 \u8cc7\u6599\u88ab\u8aa4\u6539\u554a.\n")),(0,l.kt)("h3",{id:"nonlocal-\u95dc\u9375\u5b57"},"nonlocal \u95dc\u9375\u5b57"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5728 ",(0,l.kt)("span",{style:{backgroundColor:"#ffd1b3"}},"\u69fd\u4e32\u7d50\u69cb"),"\u4e2d\uff0c\u4f8b\u5982 function \u4e2d\u53c8\u518d\u5b9a\u7fa9 function \u6642\uff0c\u6700\u5167\u5c64(inner fun)\u53ef\u4ee5\u85c9\u7531 nonlocal \u53d6\u5f97\u5916\u5c64(outer fun)\u4e2d\u8b8a\u6578\u7684 reference\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u9019\u8a2d\u8a08\u7684\u908f\u8f2f\u5230\u5e95\u662f...... \u771f\u65b9\u4fbf\u4f7f\u7528...... "),(0,l.kt)("li",{parentName:"ul"},"\u907f\u514d\u547d\u540d\u885d\u7a81\u624d\u662f\u4e0a\u7b56\u3002 ")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"nonlocal \u95dc\u9375\u5b57\u53ea\u6703\u51fa\u73fe\u5728 ",(0,l.kt)("em",{parentName:"p"},(0,l.kt)("span",{style:{backgroundColor:"#ffd1b3"}}," \u69fd\u4e32\u7d50\u69cb "))," \u7684\u5167\u5c64\u7d50\u69cb\u4e2d\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u7528\u4f86\u6307\u50cf\u5916\u5c64\u7684\u540c\u540d\u8b8a\u6578\u7528\u3002\u6240\u4ee5\u9019\u908a\u96b1\u542b\u8457 \u5168\u57df/\u4e2d\u9593\u5c64s/\u5167\u5c64 \u81f3\u5c11\u51fa\u73fe ",(0,l.kt)("strong",{parentName:"p"},"\u4e09\u6b21\u540c\u540d\u8b8a\u6578")," \u7684\u60c5\u5883\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u771f\u7684\u662f\u4f86\u4e82\u7684\u3002"),(0,l.kt)("p",{parentName:"blockquote"},"\u8207 global \u4e0d\u540c\u8655\u5728\u65bc\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u5167\u5c64\u7684\u5340\u584a\u4e2d\u7684 global \u6307\u5411\u5168\u57df\u540c\u540d\u8b8a\u6578(\u6700\u5916\u5c64)\u3002  "),(0,l.kt)("p",{parentName:"blockquote"},"\u800c nonlacal \u5247\u662f",(0,l.kt)("br",{parentName:"p"}),"\n","\u5167\u5c64\u7684\u5340\u584a\u4e2d\u7684 nonlacal \u6307\u5411\u7531\u5167\u5411\u5916\u4f9d\u5e8f\u767c\u73fe\u7684\u7b2c\u4e00\u500b\u540c\u540d\u8b8a\u6578(\u5167\u5411\u5916\u7b2c\u4e00\u500b\u767c\u73fe)\u3002  ")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"nonlocal \u7bc4\u4f8b")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'\npassenger = "PASSENGER"\n\n\n# without nonlocal\ndef tom():\n    passenger = "TOM"\n\n    def tom_jr():\n        passenger = "TOM JUNIOR"\n        print(\'tom_jr: \', passenger)\n\n    tom_jr()  # tom_jr() ececuting\n    print(\'********** tom: \', passenger)\n\n\ntom()  # executing\nprint("passenger: ", passenger)\n# tom_jr:  TOM JUNIOR\n# **********  tom:  TOM  **********\n# passenger:  PASSENGER\n\n\n# with nonlocal\ndef gary():\n    passenger = "GARY" # modified by nonlocal var\n\n    def gary_jr():\n        nonlocal passenger # ref to var in gary()\n        passenger = "GARY JUNIOR"\n        print(\'gary_jr: \', passenger)\n\n    gary_jr()  # tom_jr() ececuting\n    print(\'********** gary: \', passenger)\n\n\ngary()  # executing\nprint("passenger: ", passenger)\n# gary_jr:  GARY JUNIOR\n# **********  gary:  GARY JUNIOR  **********\n# passenger:  PASSENGER\n')))}u.isMDXComponent=!0}}]);