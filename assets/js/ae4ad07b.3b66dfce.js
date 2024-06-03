"use strict";(self.webpackChunkpython=self.webpackChunkpython||[]).push([[4086],{10282:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var o=n(87462),r=(n(67294),n(3905));n(13848);const s={title:"Python \u6392\u5e8f\u4e09\u5169\u4e8b",description:"Python Sorting",keywords:["Python","Sorting"]},a="Python \u6392\u5e8f\u4e09\u5169\u4e8b",i={unversionedId:"Python\u5169\u4e09\u4e8b/Python_Sorting",id:"Python\u5169\u4e09\u4e8b/Python_Sorting",title:"Python \u6392\u5e8f\u4e09\u5169\u4e8b",description:"Python Sorting",source:"@site/docs/070_Python\u5169\u4e09\u4e8b/082_Python_Sorting.md",sourceDirName:"070_Python\u5169\u4e09\u4e8b",slug:"/Python\u5169\u4e09\u4e8b/Python_Sorting",permalink:"/python/docs/Python\u5169\u4e09\u4e8b/Python_Sorting",draft:!1,tags:[],version:"current",sidebarPosition:82,frontMatter:{title:"Python \u6392\u5e8f\u4e09\u5169\u4e8b",description:"Python Sorting",keywords:["Python","Sorting"]},sidebar:"totem_sidebar",previous:{title:"Python-Sorting by pandas",permalink:"/python/docs/Python\u5169\u4e09\u4e8b/Python_Sorting_by_Pandas"},next:{title:"Send Mail by Python smtplib",permalink:"/python/docs/Python\u5169\u4e09\u4e8b/Send_Eail_By_Python"}},l={},p=[{value:"sorted() \u51fd\u6578: Built-in Tool",id:"sorted-\u51fd\u6578-built-in-tool",level:2},{value:"sort() \u51fd\u6578: List Instance Function",id:"sort-\u51fd\u6578-list-instance-function",level:2},{value:"sorted() syntax",id:"sorted-syntax",level:2},{value:"sorted() \u7bc4\u4f8b",id:"sorted-\u7bc4\u4f8b",level:2},{value:"sorted(): List/Set Example",id:"sorted-listset-example",level:3},{value:"sorted(): Dict/Map Example",id:"sorted-dictmap-example",level:3},{value:"list.sort() in-place \u7bc4\u4f8b",id:"listsort-in-place-\u7bc4\u4f8b",level:2},{value:"operator module \u8207 \u6392\u5e8f",id:"operator-module-\u8207-\u6392\u5e8f",level:2}],m={toc:p},c="wrapper";function d(t){let{components:e,...n}=t;return(0,r.kt)(c,(0,o.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"python-\u6392\u5e8f\u4e09\u5169\u4e8b"},"Python \u6392\u5e8f\u4e09\u5169\u4e8b"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u8a72\u958b\u59cb\u81ea\u5b78 Python \u6642\uff0c\u770b\u5230\u4e00\u5927\u5806\u7bc4\u4f8b\u5728\u4f7f\u7528 sort(), sorted(), \u751a\u81f3\u662f pandas \u7684 sorting\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u8001\u5be6\u8aaa\uff0c\u5b78\u5f97\u4e82\u4e03\u516b\u7cdf\u3002\u4e00\u500b\u7a0b\u5f0f\u8a9e\u8a00\u4e2d\u5230\u5e95\u8981\u6709\u5e7e\u7a2e\u6392\u5e8f\u5de5\u5177\u554a\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","pandas \u7b97\u7b2c\u4e09\u65b9 api \u5148\u4e0d\u63d0\u5b83\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u90a3\u9ebc sort(), sorted() \u90fd\u662f\u8a9e\u8a00\u81ea\u5e36 (built-in) \u5de5\u5177\uff0c\u70ba\u8a2d\u9ebc\u8981\u9019\u9ebc\u591a\u7a2e\u5462?",(0,r.kt)("br",{parentName:"p"}),"\n","\u518d\u52a0\u4e0a in-place\u3001by reference \u6216\u662f return \u65b0 collection\uff0c\u5f7c\u6b64\u4ea4\u4e92\u5f71\u97ff\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u4f7f\u7528\u4e0a\u5230\u5e95\u6709\u6c92\u6709\u72af\u932f\uff0c\u8001\u5be6\u8aaa\u6709\u4e9b\u6c92\u4fe1\u5fc3\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u7576\u6642\uff0c\u6574\u9ad4\u89c0\u5ff5\u6211\u4e86\u89e3\uff0c\u4f46\u5c0d api \u4e0d\u719f\u6089...",(0,r.kt)("br",{parentName:"p"}),"\n","\u73fe\u5728\uff0c\u89ba\u5f97\u8a72\u505a\u4e9b\u7d00\u9304\u4e0d\u7136\u4e0b\u6b21\u4f7f\u7528\u6642\u53c8\u9084\u56de\u53bb...",(0,r.kt)("br",{parentName:"p"}),"\n","\u7562\u7adf\u53ea\u662f Python \u7684\u8f15\u5ea6\u4f7f\u7528\u8005...  ")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5176\u4ed6:"),(0,r.kt)("blockquote",{parentName:"blockquote"},(0,r.kt)("ol",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ol"},"\u4e0b\u9762\u4ecb\u7d39\u7684\u90e8\u5206\u4e5f\u61c9\u8a72\u6ce8\u610f\u4e00\u4e0b\u8a9e\u6cd5\u4e2d\u7684 key:expression \u90e8\u5206\u3002   "),(0,r.kt)("li",{parentName:"ol"},"Reference :",(0,r.kt)("a",{parentName:"li",href:"./Python_Sorting_by_Pandas"},"Python_Sorting_by_Pandas"),"\u3002 "),(0,r.kt)("li",{parentName:"ol"},"\u6392\u5e8f\u6642\u4e5f\u53ef\u4ee5\u642d\u914d operator module \u4f7f\u7528\u3002  ")))),(0,r.kt)("h2",{id:"sorted-\u51fd\u6578-built-in-tool"},"sorted","(",")"," \u51fd\u6578: Built-in Tool"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"sorted","(",")"," \u662f Python built-in function\uff0c\u53ef\u4ee5\u5efa\u7acb\u4e00\u500b ",(0,r.kt)("strong",{parentName:"p"},"\u65b0\u7684")," \u6392\u597d\u5e8f\u7684\u7269\u4ef6\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u539f\u751f\u7684\u96c6\u5408\uff0csequence \u985e\u90fd\u53ef\u4ee5\u4f7f\u7528\u3002\n\u53ef\u4ee5\u60f3\u6210\u662f Java \u7684 Collections \u985e\u5225\u3002\n\u4e5f\u5c31\u662f\u8aaa sorted","(",")"," \u4ed6\u662f\u4e00\u500b\u901a\u7528\u7684\u5de5\u5177\u985e\u3002")),(0,r.kt)("h2",{id:"sort-\u51fd\u6578-list-instance-function"},"sort","(",")"," \u51fd\u6578: List Instance Function"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u9019\u662f\u6700\u8b93\u521d\u5b78\u8005\u6df7\u6dc6\u7684\u90e8\u5206\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","list instance \u7684 in-place-modify function\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u56e0\u70ba\u4e00\u958b\u59cb\u770b\u5230\u7684\u7bc4\u4f8b\u4e2d\u7684\u96c6\u5408\u5927\u591a\u6578\u90fd\u662f\u4f7f\u7528 list class\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u800c list \u985e\u672c\u8eab\u4e5f\u5e36\u4e86\u4e00\u500b sort","(",")"," function\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u4f46\u662f\uff0c\u9019\u908a\u4f7f\u7528\u6642\u9700\u5148\u6709\u4e00\u500b list \u7684 instance\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u7531 list instance \u547c\u53eb\u81ea\u5df1\u7684 sort","(",")","\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u7d50\u679c\u4fbf\u662f\u5c07 list ",(0,r.kt)("strong",{parentName:"p"},"\u4e2d\u7684")," items \u6392\u5e8f\u3002\n\u4e5f\u5c31\u662f\u8aaa list.sort","(",")"," \u662f in-place \u4fee\u6539\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u9019\u610f\u5473\u8457\uff0c\u62ff\u5230 list instance \u7684\u5176\u4ed6\u4eba\u7684\u8cc7\u6599\u4e5f\u6703\u8ddf\u9019\u53d7\u5f71\u97ff\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u9019\u8ddf sorted","(",")"," \u8907\u88fd\u65b0\u7684\u8cc7\u6599\u7d50\u69cb\u6709\u6240\u4e0d\u540c\u3002  ")),(0,r.kt)("h2",{id:"sorted-syntax"},"sorted","(",")"," syntax"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"built-in function sorted","(",")"," \u53ef\u7528\u5728\u591a\u7a2e\u8cc7\u6599\u7d50\u69cb\u4e0b\u3002list/set/map \u7b49\u57fa\u672c\u8cc7\u6599\u7d50\u69cb\u90fd\u53ef\u4f7f\u7528\u3002  ")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f: "),(0,r.kt)("blockquote",{parentName:"blockquote"},(0,r.kt)("p",{parentName:"blockquote"},"\u8a9e\u6cd5\u4e2d\u7684 expression \u4e26\u975e\u662f comparator\uff0c\u50c5\u9700\u63d0\u4f9b\u4e00\u500b\u53c3\u6578\u503c\u4f9b comparator \u6bd4\u5c0d\u4f7f\u7528\u3002\n\u56e0\u70ba Python \u8a9e\u6cd5\u8f03\u70ba\u5bec\u9b06\uff0c\u82e5\u6392\u5e8f\u7684\u689d\u4ef6\u70ba\u4e0d\u540c\u578b\u5225\u6642\uff0c\u5247\u6703\u62cb\u51fa TypeError  "))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# sorted() syntax\ncopy = sorted(iterable, key=expression, reverse)\n\n# list.sort() syntax\nnone = list.sort(key=expression, reverse)\n")),(0,r.kt)("h2",{id:"sorted-\u7bc4\u4f8b"},"sorted","(",")"," \u7bc4\u4f8b"),(0,r.kt)("h3",{id:"sorted-listset-example"},"sorted","(",")",": List/Set Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"nums = {44, 1, 33, 2, 3, 22, 4, 55, 5}\nnums2 = {44, 1, 33, 2, 3, 22, 4, 55, 5}\n\n# built-in sorted() function \u6703\u5efa\u7acb\u4e00\u500b [\u65b0\u7684\u96c6\u5408]\uff0c\u4e0d\u5f71\u97ff\u65e2\u6709\u8cc7\u6599\ncopy = sorted(nums, reverse=True)\ncopy2 = sorted(nums2, reverse=True)\nprint(copy)  # [55, 44, 33, 22, 5, 4, 3, 2, 1]\nprint(copy2)  # [55, 44, 33, 22, 5, 4, 3, 2, 1]\nprint(nums)  # [44, 1, 33, 2, 3, 22, 4, 55, 5]\n\n")),(0,r.kt)("h3",{id:"sorted-dictmap-example"},"sorted","(",")",": Dict/Map Example"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"hint: Python Dict \u53ef\u4ee5\u8f49\u6210 dict_items\uff0c\u91dd\u5c0d dict_items \u9032\u884c item \u6392\u5e8f\u3002\n\u8a3b: dict.items() = \\<class 'dict_items'",">","\nkey = dict_item","[0]","\nvalue = dict_item","[1]")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"\nstudents = {\n    's1': {\n        'name':'Totem',\n        'score1':81,\n        'score2':70\n    },\n    's2': {\n        'name':'Albert',\n        'score1':60,\n        'score2':71\n    },\n    's3': {\n        'name': 'Winnie',\n        'score1':80,\n        'score2':70\n    },\n    's4': {\n        'name': 'Tom',\n        'score1':66,\n        'score2':70\n    },\n    's5': {\n        'name': 'Ben',\n        'score1':45,\n        'score2':50\n    }\n}\n\n#  \u4f9d\u64da score1 \u5c07 items \u6392\u5e8f\n#  \u8a3b: students.items() = <class 'dict_items'>\n#      key = dict_item[0]\n#      value = dict_item[1]\ns2 = sorted(students.items(), key=lambda d_item: d_item[1]['score1'])\nprint(s2)\n# [('s5', {'name': 'Ben', 'score1': 45, 'score2': 50}), \n# ('s2', {'name': 'Albert', 'score1': 60, 'score2': 71}), \n# ('s4', {'name': 'Tom', 'score1': 66, 'score2': 70}), \n# ('s3', {'name': 'Winnie', 'score1': 80, 'score2': 70}), \n# ('s1', {'name': 'Totem', 'score1': 81, 'score2': 70})]\n")),(0,r.kt)("h1",{id:"sorted-class-example"},"sorted","(",")",": Class Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"class Student:\n    def __init__(self, name):\n        self.name = name\n\n    # \u7a0b\u5f0f\u908f\u8f2f\u7528\n    def __repr__(self):\n        return  self.name\n\nstudents = [Student('Totoem'), Student('Albert'), Student('Winnie'), Student('Tom'), Student('Ben')]\n\ns1 = sorted(students, key = lambda s: s.name, reverse = True)\n\nprint(s1) # [Winnie, Totoem, Tom, Ben, Albert]\n")),(0,r.kt)("h2",{id:"listsort-in-place-\u7bc4\u4f8b"},"list.sort","(",")"," in-place \u7bc4\u4f8b"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9019\u500b\u529f\u80fd\u50c5\u9650 list instance \u4f7f\u7528\u3002  ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"nums = [44, 1, 33, 2, 3, 22, 4, 55, 5]\n\n# list function\uff0cin-place\uff0c\u76f4\u63a5\u6539\u539f\u59cb\u8cc7\u6599\u96c6\nx = nums.sort() # \u6c92\u56de\u50b3\u503c\nprint(x)  # None\nprint(nums)  # [1, 2, 3, 4, 5, 22, 33, 44, 55]\n\n")),(0,r.kt)("h2",{id:"operator-module-\u8207-\u6392\u5e8f"},"operator module \u8207 \u6392\u5e8f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u770b\u770b\u5c31\u597d\uff0c\u5b78\u592a\u591a\u7a2e\u65b9\u5f0f\u592a\u70ba\u96e3\u81ea\u5df1\uff0c\u4e5f\u5bb9\u6613\u51fa\u932f\u3002  ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import operator\n\nstudents = [\n    (\"Totem\", 80)\n    , (\"Albert\", 80)\n    , (\"Winnie\", 80)\n    , (\"Tom\", 70)\n    , (\"Ben\", 45)\n]\n\n# operator.itemgetter(1, 0) \u5148\u7531 index=2 \u7684\u5c6c\u6027\u503c\u6392\u5217, \u82e5\u6709\u51fa\u73fe\u76f8\u540c\u5247\u518d\u4f9d\u64da index=0 \u6392\u5e8f\ns_op = sorted(students, key = operator.itemgetter(1, 0))\nprint(s_op) # [('Ben', 45), ('Tom', 70), ('Albert', 80), ('Totem', 80), ('Winnie', 80)]\n")))}d.isMDXComponent=!0}}]);