"use strict";(self.webpackChunkpython=self.webpackChunkpython||[]).push([[2397],{53089:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>h,toc:()=>m});var n=a(87462),o=(a(67294),a(3905));a(13848);const r={title:"Python \u62bd\u8c61\u65b9\u6cd5",description:"Python Abstract Method",keywords:["Python","abstractmethod"]},s="Python \u62bd\u8c61\u65b9\u6cd5 (Abstract Method)",h={unversionedId:"Python\u985e\u5225\u8207OOP/Python_4_AbstractMethod",id:"Python\u985e\u5225\u8207OOP/Python_4_AbstractMethod",title:"Python \u62bd\u8c61\u65b9\u6cd5",description:"Python Abstract Method",source:"@site/docs/005_Python\u985e\u5225\u8207OOP/046_Python_4_AbstractMethod.md",sourceDirName:"005_Python\u985e\u5225\u8207OOP",slug:"/Python\u985e\u5225\u8207OOP/Python_4_AbstractMethod",permalink:"/pyramid/docs/Python\u985e\u5225\u8207OOP/Python_4_AbstractMethod",draft:!1,tags:[],version:"current",sidebarPosition:46,frontMatter:{title:"Python \u62bd\u8c61\u65b9\u6cd5",description:"Python Abstract Method",keywords:["Python","abstractmethod"]},sidebar:"totem_sidebar",previous:{title:"Python \u7e7c\u627f\u4ecb\u7d39",permalink:"/pyramid/docs/Python\u985e\u5225\u8207OOP/Python_4_Inheritance_Basic"},next:{title:"Python \u8207 OOP",permalink:"/pyramid/docs/Python\u985e\u5225\u8207OOP/Python_4_OOP"}},c={},m=[{value:"Abstract Method",id:"abstract-method",level:2}],i={toc:m},l="wrapper";function d(t){let{components:e,...a}=t;return(0,o.kt)(l,(0,n.Z)({},i,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"python-\u62bd\u8c61\u65b9\u6cd5-abstract-method"},"Python \u62bd\u8c61\u65b9\u6cd5 (Abstract Method)"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u53c3\u8003: "),(0,o.kt)("blockquote",{parentName:"blockquote"},(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"../Python%E5%9F%BA%E7%A4%8E%E6%93%8D%E4%BD%9C/Python_2_Function"},"Python \u51fd\u6578"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"./Python_4_Class#instance-object-append-method"},"Instance Object \u8ffd\u52a0 Method"),": ",(0,o.kt)("span",{style:{color:"#0044FF"}}," ",(0,o.kt)("strong",{parentName:"p"},"abstract method \u4e0d\u53ef\u4ee5\u4ee5\u8ffd\u52a0\u7684\u65b9\u5f0f\u5be6\u4f5c")," "),"  "))),(0,o.kt)("h2",{id:"abstract-method"},"Abstract Method"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u9700\u4f7f\u7528 abc \u5957\u4ef6",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"ABCMeta Class"),(0,o.kt)("li",{parentName:"ul"},"@abstractmethod annotation"))),(0,o.kt)("li",{parentName:"ul"},"\u5b50\u985e\u5225\u82e5\u672a\u5be6\u4f5c Abstract Method \u56de\u62cb\u51fa: ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("span",{style:{color:"#0044FF"}}," TypeError: Can't instantiate abstract class ClassName with abstract method MethodName")," ")))),(0,o.kt)("li",{parentName:"ul"},"metaclass : Python interpreter \u7528\u4f86\u7ba1\u7406\u5efa\u69cb type \u6642\u4f7f\u7528")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"\nfrom abc import ABCMeta\nfrom abc import abstractmethod\n\n# \u6ce8\u610f: metaclass\nclass Html_Form(metaclass=ABCMeta):\n    def __init__(self):\n        pass\n\n    @abstractmethod\n    def submit(self, forward_to, **kwargs):\n        print('Submit Abstract Html_Form')\n\n\nclass LoginForm(Html_Form):\n\n    def submit(self, forward_to, **kwargs):\n        print('Submit LoginForm')\n        print(kwargs)\n\n\nf = LoginForm()\nf.submit(forward_to='roadmap', username='username', pwd='password')\n    \n")))}d.isMDXComponent=!0}}]);