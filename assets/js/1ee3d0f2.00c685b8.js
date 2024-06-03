"use strict";(self.webpackChunkpython=self.webpackChunkpython||[]).push([[4338],{58327:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>k,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var r=e(87462),i=(e(67294),e(3905));e(13848);const a={title:"Python \u8fed\u4ee3\u76f8\u95dc\u4e09\u5169\u4e8b",description:"Loop\u3001Iteration\u3001Comprehension",keywords:["Python","Iterations"]},o="Python \u8fed\u4ee3\u76f8\u95dc\u4e09\u5169\u4e8b",p={unversionedId:"Python\u7279\u6b8a\u64cd\u4f5c/Python_2_Iterations_Misc",id:"Python\u7279\u6b8a\u64cd\u4f5c/Python_2_Iterations_Misc",title:"Python \u8fed\u4ee3\u76f8\u95dc\u4e09\u5169\u4e8b",description:"Loop\u3001Iteration\u3001Comprehension",source:"@site/docs/004_Python\u7279\u6b8a\u64cd\u4f5c/034_Python_2_Iterations_Misc.md",sourceDirName:"004_Python\u7279\u6b8a\u64cd\u4f5c",slug:"/Python\u7279\u6b8a\u64cd\u4f5c/Python_2_Iterations_Misc",permalink:"/docs/Python\u7279\u6b8a\u64cd\u4f5c/Python_2_Iterations_Misc",draft:!1,tags:[],version:"current",sidebarPosition:34,frontMatter:{title:"Python \u8fed\u4ee3\u76f8\u95dc\u4e09\u5169\u4e8b",description:"Loop\u3001Iteration\u3001Comprehension",keywords:["Python","Iterations"]},sidebar:"totem_sidebar",previous:{title:"Python Lambda \u533f\u540d\u51fd\u5f0f",permalink:"/docs/Python\u7279\u6b8a\u64cd\u4f5c/Python_2_Labmda"},next:{title:"Python Generator",permalink:"/docs/Python\u7279\u6b8a\u64cd\u4f5c/Python_2_Generator"}},l={},s=[{value:"Built-ins: \u5167\u5efa\u985e\u5225\u672c\u8eab\u5373\u53ef\u9032\u884c\u8fed\u4ee3",id:"built-ins-\u5167\u5efa\u985e\u5225\u672c\u8eab\u5373\u53ef\u9032\u884c\u8fed\u4ee3",level:2},{value:"Manual Iterations(Generator): \u624b\u52d5\u85c9\u7531 iter() \u8207 next() \u4f86\u9054\u6210\u4f9d\u6b21\u8d70\u8a2a\u3002",id:"manual-iterationsgenerator-\u624b\u52d5\u85c9\u7531-iter-\u8207-next-\u4f86\u9054\u6210\u4f9d\u6b21\u8d70\u8a2a",level:2},{value:'<span id="iter_tricky">iter() \u9677\u9631: iterator instance \u5171\u4eab</span>',id:"iter-\u9677\u9631-iterator-instance-\u5171\u4eab",level:2}],c={toc:s},u="wrapper";function k(t){let{components:n,...e}=t;return(0,i.kt)(u,(0,r.Z)({},c,e,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"python-\u8fed\u4ee3\u76f8\u95dc\u4e09\u5169\u4e8b"},"Python \u8fed\u4ee3\u76f8\u95dc\u4e09\u5169\u4e8b"),(0,i.kt)("h2",{id:"built-ins-\u5167\u5efa\u985e\u5225\u672c\u8eab\u5373\u53ef\u9032\u884c\u8fed\u4ee3"},"Built-ins: \u5167\u5efa\u985e\u5225\u672c\u8eab\u5373\u53ef\u9032\u884c\u8fed\u4ee3"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Python's Iterations : \u9019\u908a\u6307\u7684\u662f\u985e\u5225\u672c\u8eab\u5373\u5177\u6709\u8fed\u4ee3\u7684\u7279\u6027\u3002"),(0,i.kt)("p",{parentName:"blockquote"},"\u9700\u6ce8\u610f\u7684\u662f : ",(0,i.kt)("span",{style:{backgroundColor:"#ffd1b3"}},"iterator instance \u662f\u5426\u5171\u7528"),"\u9019\u500b\u8d85\u5927\u9677\u9631\u3002 "),(0,i.kt)("blockquote",{parentName:"blockquote"},(0,i.kt)("p",{parentName:"blockquote"},"\u53c3\u8003 ",(0,i.kt)("a",{parentName:"p",href:"#iter_tricky"},"iter() \u9677\u9631: iterator instance \u5171\u4eab"),(0,i.kt)("br",{parentName:"p"}),"\n","x = iter(object)",(0,i.kt)("br",{parentName:"p"}),"\n","y = iter(object)",(0,i.kt)("br",{parentName:"p"}),"\n","\u7576 object \u5e95\u5c64\u662f\u4e00\u500b  generator\uff0c\u5247 x==y\u3002",(0,i.kt)("br",{parentName:"p"}),"\n","\u7576 object \u5e95\u5c64\u4e0d\u662f\u4e00\u500b  generator\uff0c\u5247 x!=y\u3002",(0,i.kt)("br",{parentName:"p"}),"\n","\u9019\u6703\u5f71\u97ff\u5230 next(y) \u662f\u5426\u5ef6\u7e8c\u5148\u524d\u547c\u53eb\u7684 next(x) \u7684 index  "))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"for/while loop: \u81ea\u884c\u7522\u751f iterator\uff0c\u4e26\u4e14\u547c\u53eb next()\u3002  "),(0,i.kt)("li",{parentName:"ul"},"comprehension: ",(0,i.kt)("span",{style:{color:"#0044FF"}}," ",(0,i.kt)("strong",{parentName:"li"},"\u6548\u7387\u512a\u65bc for/while loop\uff0c\u5e95\u5c64\u7531 C \u5be6\u4f5c")," "),"\u3002  "),(0,i.kt)("li",{parentName:"ul"},"range()/dict/{}/[]/(): iterable types\u3002"),(0,i.kt)("li",{parentName:"ul"},"map()/zip()/filter()/enumerate(): \u6703",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("span",{style:{color:"#0044FF"}},"\u6bcf\u6b21")),"\u5efa\u7acb ",(0,i.kt)("span",{style:{color:"#0044FF"}}," ",(0,i.kt)("strong",{parentName:"li"},"\u65b0\u7684")," ")," generator \u4f9d\u5e8f\u7d66\u503c\u3002  "),(0,i.kt)("li",{parentName:"ul"},"in : \u6aa2\u67e5\u7269\u4ef6\u4e2d\u662f\u5426\u6709\u6307\u5b9a\u5143\u7d20\u3002  ")),(0,i.kt)("h2",{id:"manual-iterationsgenerator-\u624b\u52d5\u85c9\u7531-iter-\u8207-next-\u4f86\u9054\u6210\u4f9d\u6b21\u8d70\u8a2a"},"Manual Iterations(Generator): \u624b\u52d5\u85c9\u7531 iter() \u8207 next() \u4f86\u9054\u6210\u4f9d\u6b21\u8d70\u8a2a\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Manual Iterations : \u9019\u908a\u6307\u7684\u662f\u7d93\u7531 iter() \u628a\u96c6\u5408\u3001\u5e8f\u5217\u3001\u8cc7\u6599\u6d41\u8f49\u6210 iterable object\uff0c\u518d\u5229\u7528 next()\u4f86\u4f9d\u5e8f\u53d6\u503c\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u9019\u985e\u578b\u7684\u8fed\u4ee3\u901a\u5e38\u662f\u5c07\u8cc7\u6599\u624b\u52d5\u8f49\u6210 generator \u5f8c\u4f7f\u7528\u3002",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u53ef\u81ea\u884c\u4ee5 list() \u5c01\u88dd\u3002\u4e00\u6b21\u5168\u53d6\u4e14\u53ef\u91cd\u8907\u53d6\u503c\u3002"))),(0,i.kt)("li",{parentName:"ul"},"\u53ef\u4f9d\u9700\u8981\u4f9d\u6b21\u53d6\u4e00\u500b\u7d50\u679c\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u7576\u8b80\u53d6\u8d85\u51fa\u7bc4\u570d\u5be6\u5247\u62cb\u51fa StopIteration Error\u3002")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"\n# by next function\nwith open(r'D:\\tmp\\AB.txt', 'r', encoding='UTF-8') as file2:\n    print(next(file2)) # \u50c5\u53d6\u4e00\u884c\n    print(next(file2))\n    # print(next(file2)) # \u8d85\u51fa\u7bc4\u570d\u6642: StopIteration\n\n\n# wrapped\nwith open(r'D:\\tmp\\ABCs.txt', 'r', encoding='UTF-8') as file2:\n    x = list(file2) # <class 'list'>\n    for i in x:\n        print(i)\n    print(i[0]) # \u91cd\u8907\u53d6\u503c\n        \n\n#  by iter function\ncontent = 'AB'\nit = iter(content) # <class 'str_iterator'>\nprint(next(it))) \nprint(next(it))\nprint(next(it))  # \u8d85\u51fa\u7bc4\u570d\u6642: StopIteration    \n\n")),(0,i.kt)("h2",{id:"iter-\u9677\u9631-iterator-instance-\u5171\u4eab"},(0,i.kt)("span",{id:"iter_tricky"},"iter() \u9677\u9631: iterator instance \u5171\u4eab")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u9700\u6ce8\u610f\u7684\u662f : ",(0,i.kt)("span",{style:{backgroundColor:"#ffd1b3"}},"iterator \u662f\u5426\u5171\u7528"),"\u9019\u500b\u8d85\u5927\u9677\u9631\u3002 "),(0,i.kt)("blockquote",{parentName:"blockquote"},(0,i.kt)("p",{parentName:"blockquote"},"x = iter(object)",(0,i.kt)("br",{parentName:"p"}),"\n","y = iter(object)",(0,i.kt)("br",{parentName:"p"}),"\n","\u7576 object \u5e95\u5c64\u662f\u4e00\u500b generator\uff0c\u5247 x==y\u3002",(0,i.kt)("br",{parentName:"p"}),"\n","\u7576 object \u5e95\u5c64\u4e0d\u662f\u4e00\u500b generator\uff0c\u5247 x!=y\u3002\n\u9019\u6703\u5f71\u97ff\u5230 next(y) \u662f\u5426\u5ef6\u7e8c\u5148\u524d\u547c\u53eb\u7684 next(x) \u7684 index  "))),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"\u6aa2\u9a57\u662f\u5426\u70ba generator fun \u7684\u5de5\u5177")," ","\u2003"," ",(0,i.kt)("span",{style:{backgroundColor:"#b3ffb3"}},"from inspect import isgeneratorfunction")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"\nfrom inspect import isgeneratorfunction\n\ndef generator_function(n=3, flag=True):\n    out = []\n    for i in range(n):\n        if flag:\n            yield i\n        else:\n            out.append(i)\n    return out\n\nprint(isgeneratorfunction(generator_function))\n# True\n\nresult = generator_function(10)\n\niterA = iter(result)\niter_same_instance = iter(result)\n\nprint(next(iterA))\n# 0\nprint(next(iter_same_instance))\n# 1\nprint(next(iterA))\n# 2\nprint(next(iter_same_instance))\n# 3\n\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"generator \u5171\u7528 iterator instance")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# zip return \u7d50\u679c\u5e95\u5c64\u662f\u4e00\u500b generator\nx = zip([1, 2, 3], [\"A\", 'B', \"C\"])\nit = iter(x)\nprint(next(it))\n# (1, 'A')\n\nit2 = iter(x)\nprint(next(it2))\n# (2, 'B')\n# \u6ce8\u610f\u9019\u908a\u5ef6\u7e8c\u524d\u4e00\u500b\u52d5\u4f5c\u7684\u6307\u6a19\uff0c\u6240\u4ee5\u7531\u7b2c\u4e8c\u500b\u958b\u59cb\n\nprint(it == it2)\n# True, \u5169\u6b21 iter() \u56de\u50b3\u7684\u7adf\u662f\u540c\u4e00\u500b instance\n\ny = zip([1, 2, 3], [\"A\", 'B', \"C\"])\n# y \u662f\u4e00\u500b\u65b0\u7684 generator\nit3 = iter(y)\nprint(next(it3))\nprint(it == it3)\n# False\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"sequence  \u4e0d\u6703\u5171\u7528 iterator instance")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"listX = [1, 2, 3, 4]\nlistX = range(1, 5)\n\nit_fromList = iter(listX)\nprint(next(it_fromList))\n# 1\n\nit_fromList2 = iter(listX)\nprint(next(it_fromList2))\n# 1, \u5f9e\u65b0\u7531\u7b2c\u4e00\u500b\u958b\u59cb\n\nprint(it_fromList == it_fromList2)\n# False, \u672a\u5171\u7528\n\n")))}k.isMDXComponent=!0}}]);