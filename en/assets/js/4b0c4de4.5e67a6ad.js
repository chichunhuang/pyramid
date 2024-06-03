"use strict";(self.webpackChunkpython=self.webpackChunkpython||[]).push([[6411],{34256:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>r,default:()=>k,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var l=n(87462),a=(n(67294),n(3905));n(13848);const i={title:"Python \u57fa\u790e\u578b\u5225\u6458\u89811",description:"Python \u578b\u5225:List Dict Set String",keywords:["Python","Tutorial"]},r="Python \u578b\u5225\u6458\u8981",o={unversionedId:"Python\u5165\u9580/Python_Typing_Types",id:"Python\u5165\u9580/Python_Typing_Types",title:"Python \u57fa\u790e\u578b\u5225\u6458\u89811",description:"Python \u578b\u5225:List Dict Set String",source:"@site/docs/002_Python\u5165\u9580/010_Python_Typing_Types.md",sourceDirName:"002_Python\u5165\u9580",slug:"/Python\u5165\u9580/Python_Typing_Types",permalink:"/en/docs/Python\u5165\u9580/Python_Typing_Types",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Python \u57fa\u790e\u578b\u5225\u6458\u89811",description:"Python \u578b\u5225:List Dict Set String",keywords:["Python","Tutorial"]},sidebar:"totem_sidebar",previous:{title:"Python Boolean \u5e03\u6797\u503c",permalink:"/en/docs/Python\u5165\u9580/Python_Typing_Boolean"},next:{title:"Python \u8b8a\u6578\u6307\u6d3e",permalink:"/en/docs/Python\u57fa\u790e\u64cd\u4f5c/Python_Convention_Assignment"}},p={},s=[],m={toc:s},u="wrapper";function k(t){let{components:e,...n}=t;return(0,a.kt)(u,(0,l.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"python-\u578b\u5225\u6458\u8981"},"Python \u578b\u5225\u6458\u8981"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Tuple: \u5c0f\u62ec\u865f, iterable, immutable",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u64cd\u4f5c\u57fa\u672c\u4e0a\u8207 List \u76f8\u540c\uff0c\u4f46 tuple \u662f immutable\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u77e5\u70ba\u4f55\u8981\u984d\u70ba\u5b9a\u7fa9 immutable list?"))),(0,a.kt)("li",{parentName:"ul"},"List: \u4e2d\u62ec\u865f, iterable  ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"}," ",(0,a.kt)("span",{style:{color:"#0044FF"}},"\u6ce8\u610f: Python list \u64cd\u4f5c\u4e2d\u6709\u4e9b\u662f in-plce(\u76f4\u63a5\u5957\u7528\u5230\u65e2\u6709\u7269\u4ef6)"))," \uff0c\u6c92\u56de\u50b3\u503c\u76f4\u63a5\u751f\u6548\uff0c\u53ef\u60f3\u6210\u985e\u4f3c Java \u4e2d\u7684 by reference \u64cd\u4f5c\u3002   "),(0,a.kt)("li",{parentName:"ul"},"l.slice","[0:-1]"," # \u8207 String slicing \u64cd\u4f5c\u76f8\u540c  "),(0,a.kt)("li",{parentName:"ul"},"l.append(e)  "),(0,a.kt)("li",{parentName:"ul"},"l.pop(index) : \u53d6\u51fa\u4e26\u79fb\u9664  "),(0,a.kt)("li",{parentName:"ul"},"l.","[index]"," : \u67e5\u51fa  "),(0,a.kt)("li",{parentName:"ul"},"l.sort()  "),(0,a.kt)("li",{parentName:"ul"},"l.reverse()  "),(0,a.kt)("li",{parentName:"ul"},"nested ok  "),(0,a.kt)("li",{parentName:"ul"},"comprehension ok ","[expression for item in listA]","  ")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"list2 = [1,2,3,4,5]\nl_double =[]\n\n# comprehension\n[l_double.append(item*2) for item in list2]\nprint(l_double)\n# [2, 4, 6, 8, 10]\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Dict: \u5927\u62ec\u865f(Set, Dict \u7686\u662f\u7528\u5927\u62ec\u865f), iterable ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"dict1 = ","{","'k1':'v1','k2':'v2\\'}"),(0,a.kt)("li",{parentName:"ul"},"dict2 = dict( zip( ","[k1, k2]",", ","[v1, v2]",") )"),(0,a.kt)("li",{parentName:"ul"},"dict3 = {}, dict3","['k1']","='v1'"),(0,a.kt)("li",{parentName:"ul"},"nested ok"),(0,a.kt)("li",{parentName:"ul"},"\u53ef\u6df7\u7528\u4e0d\u540c\u578b\u5225\u7684 values"),(0,a.kt)("li",{parentName:"ul"},"\u53ef\u6df7\u7528\u4e0d\u540c\u578b\u5225\u7684 keys"),(0,a.kt)("li",{parentName:"ul"},"values1 = dict1.values(), return dict_values "),(0,a.kt)("li",{parentName:"ul"},"keyValue_dict_items = dict1.items(), return dict_items, collection of tuple2s"),(0,a.kt)("li",{parentName:"ul"},"\u4ee5\u4e2d\u62ec\u865f\u53d6\u503c(\u8207 list \u7684  slice \u64cd\u4f5c\u540c\u7b26\u865f)")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"dict1 = \\{'k1':100, 'k2':'abc', 100:'XYZ'\\}\nfor key,values in  dict1.items():\n    print (key,values)\n# k1 100\n# k2 abc\n# 100 XYZ\n\nfor x in dict1.items():\n    print(x[0])\n# key...   \n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# \u53e6\u4e00\u7a2e\u5167\u5efa\u7684 dict \u8ff4\u5708\u65b9\u5f0f\n# \u4f46\u662f\uff0c\u82e5 key \u51fa\u73fe\u4e0d\u540c type\uff0c\u4e0a\u65b9\u7bc4\u4f8b string/integer\n# \u5247\u6703\u62cb\u51fa TypeError\n\nfor key in sorted(dict1):\n    print(dict1[key])   \n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Set:  \u5927\u62ec\u865f, iterable, \u5206\u70ba set/frozenset \u5169\u985e",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Set : mutable"),(0,a.kt)("li",{parentName:"ul"},"s = set( ","[iterable]"," )  "),(0,a.kt)("li",{parentName:"ul"},"s = set((e1,e2,e3)) : built-in method, \u50b3\u5165 tuple  "),(0,a.kt)("li",{parentName:"ul"},"s = set(","[e1,e2,e3]",") : built-in method, \u50b3\u5165 list  "),(0,a.kt)("li",{parentName:"ul"},"s = set('string') : string \u4e5f\u662f iterable  "),(0,a.kt)("li",{parentName:"ul"},"s = ","{","e1, e2, e3","}"," : \u539f\u751f\u975e\u7269\u4ef6\u7684\u5efa\u7acb\u65b9\u5f0f"),(0,a.kt)("li",{parentName:"ul"},"frozenset : immutable, \u57fa\u672c\u4e0a\u8207 set \u7684\u64cd\u4f5c\u4e00\u81f4\uff0c\u50c5\u5dee\u7570\u5728\u65bc\u5efa\u7acb\u5f8c\u4e0d\u53ef\u4fee\u6539\u9019\u4ef6\u4e8b\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./Python_Typing_Set"},"Set \u8cc7\u6599\u7d50\u69cb"))))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"String: iterable, zero-based index, sequence",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"lengthA = len('Hello World')"),(0,a.kt)("li",{parentName:"ul"},"sliced = strA","[0:-1]"," # \u8207 List slicing \u64cd\u4f5c\u76f8\u540c"),(0,a.kt)("li",{parentName:"ul"},"zero-based index"),(0,a.kt)("li",{parentName:"ul"},"index backward,strA","[-1]",": \u6700\u5f8c char"),(0,a.kt)("li",{parentName:"ul"},"formatting: SC style/tuple, string format function/variable, fString/variable")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"\nstrA ='Hello World'\nprint(strA[0:5])\n# Hello\n\n# String formatting A: C style, \u4ee5 tuple \u63d0\u4f9b\u5167\u5bb9\nformatting = 'I\\'m %s, I\\'m %d-yaar-old.' % ('Rain', 10)\nprint(formatting)\n#I'm Rain, I'm 10-yaar-old.\n\n\n# String formatting B, String \u7684 format function\ntemplate = '\\{pg\\} is a kind of state\\{suffix\\} framework'\nprint(template.format(pg='microservice', suffix='less'))\nprint(template.format(pg='MVC', suffix='ful'))\n# microservice is a kind of stateless framework\n# MVC is a kind of stateful framework\n\n\n# fString (Python 3.6+)\n# variables\nname = \"Totem\"\nage = 40\n# f-string\nprint( f\"I\\'m \\{name\\}, I\\'m \\{age\\}-yaar-old.\")\n# I'm Totem, I'm 40-yaar-old.\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Numeric: ",(0,a.kt)("a",{parentName:"li",href:"./Python_Typing_Numeric"},"Python \u6578\u503c\u578b\u5225"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Integer"),(0,a.kt)("li",{parentName:"ul"},"float ponit"),(0,a.kt)("li",{parentName:"ul"},"complex"),(0,a.kt)("li",{parentName:"ul"},"Decimal"),(0,a.kt)("li",{parentName:"ul"},"Fraction"),(0,a.kt)("li",{parentName:"ul"},"math module")))))}k.isMDXComponent=!0}}]);