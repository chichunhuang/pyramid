"use strict";(self.webpackChunkpython=self.webpackChunkpython||[]).push([[6986],{62247:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>r,frontMatter:()=>c,metadata:()=>p,toc:()=>d});var i=n(87462),a=(n(67294),n(3905)),l=n(13848);const c={title:"Python dict \u5b57\u5178\u9375\u503c\u6620\u5c04\u7d50\u69cb",description:"Python Dict \u8cc7\u6599\u7d50\u69cb\u8207\u64cd\u4f5c",keywords:["Python","Dict"]},o="Python Dict \u4ecb\u7d39",p={unversionedId:"Python\u5165\u9580/Python_Typing_dict",id:"Python\u5165\u9580/Python_Typing_dict",title:"Python dict \u5b57\u5178\u9375\u503c\u6620\u5c04\u7d50\u69cb",description:"Python Dict \u8cc7\u6599\u7d50\u69cb\u8207\u64cd\u4f5c",source:"@site/docs/002_Python\u5165\u9580/007_Python_Typing_dict.md",sourceDirName:"002_Python\u5165\u9580",slug:"/Python\u5165\u9580/Python_Typing_dict",permalink:"/docs/Python\u5165\u9580/Python_Typing_dict",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Python dict \u5b57\u5178\u9375\u503c\u6620\u5c04\u7d50\u69cb",description:"Python Dict \u8cc7\u6599\u7d50\u69cb\u8207\u64cd\u4f5c",keywords:["Python","Dict"]},sidebar:"totem_sidebar",previous:{title:"Python List \u8207 Tuple \u53ef\u8b8a\u52d5\u8207\u4e0d\u53ef\u8b8a\u52d5\u5217\u8868",permalink:"/docs/Python\u5165\u9580/Python_Typing_list"},next:{title:"Python Set \u4e0d\u91cd\u8907\u7121\u5e8f\u8cc7\u6599\u7d50\u69cb",permalink:"/docs/Python\u5165\u9580/Python_Typing_Set"}},s={},d=[{value:"Dict \u91cd\u9ede\u6458\u8981",id:"dict-\u91cd\u9ede\u6458\u8981",level:2},{value:"Python Dict \u5efa\u69cb\u65b9\u5f0f",id:"python-dict-\u5efa\u69cb\u65b9\u5f0f",level:2},{value:"Dict \u5efa\u69cb: dict()",id:"dict-\u5efa\u69cb-dict",level:3},{value:"Dict \u5efa\u69cb: dict() with tuple",id:"dict-\u5efa\u69cb-dict-with-tuple",level:3},{value:"Dict \u5efa\u69cb: dict() with dict_items",id:"dict-\u5efa\u69cb-dict-with-dict_items",level:3},{value:"Dict \u5efa\u69cb: zip()",id:"dict-\u5efa\u69cb-zip",level:3},{value:"Dict \u5efa\u69cb: \u4ee5 dict.fromkeys() \u7d66\u4e88\u9810\u8a2d\u503c",id:"dict-\u5efa\u69cb-\u4ee5-dictfromkeys-\u7d66\u4e88\u9810\u8a2d\u503c",level:3},{value:"Dict \u5efa\u69cb: \u4ee5 defaultdict \u7d66\u4e88\u9810\u8a2d\u503c",id:"dict-\u5efa\u69cb-\u4ee5-defaultdict-\u7d66\u4e88\u9810\u8a2d\u503c",level:3},{value:"Python Dict \u64cd\u4f5c",id:"python-dict-\u64cd\u4f5c",level:2}],u={toc:d},k="wrapper";function r(t){let{components:e,...n}=t;return(0,a.kt)(k,(0,i.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"python-dict-\u4ecb\u7d39"},"Python Dict \u4ecb\u7d39"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Dict \u5728 Python \u8a9e\u8a00\u4e2d\u53c8\u7a31\u70ba associated array"),(0,a.kt)("p",{parentName:"blockquote"},"\u57fa\u672c\u4e0a Dict instance \u5927\u62ec\u865f\u5305\u8d77\u4f86\u4fbf\u662f\uff0c\n\u9700\u6ce8\u610f\u7684\u662f\uff0cSet \u8cc7\u6599\u7d50\u69cb\u4e5f\u53ef\u4ee5\u4ee5\u5927\u62ec\u865f\u5448\u73fe\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u4f46\u4e2d ",(0,a.kt)("span",{style:{color:"#0044FF"}}," ",(0,a.kt)("strong",{parentName:"p"},"\u7a7a\u5927\u62ec\u865f\u578b\u5225\u9810\u8a2d\u70ba Dict")," "),(0,a.kt)("br",{parentName:"p"}),"\n","\u5141\u8a31\u653e\u5165\u4e0d\u540c\u578b\u5225\u7684\u5143\u7d20\uff0c",(0,a.kt)("br",{parentName:"p"}),"\n","\u4f46\uff0c\u82e5\u4e0d\u540c\u578b\u5225\u5728\u8ff4\u5708\u8207 Comprehension \u8d70\u8a2a\u6642\u9700\u6ce8\u610f\u53ef\u80fd\u51fa\u932f\u3002   "),(0,a.kt)("p",{parentName:"blockquote"},"\u53e6\u5916\uff0c\u4ee5\u4e2d\u62ec\u865f\u53d6\u503c\u7684\u64cd\u4f5c:  "),(0,a.kt)("blockquote",{parentName:"blockquote"},(0,a.kt)("p",{parentName:"blockquote"},"list \u7684 slice \u64cd\u4f5c\uff0cex:  list","[","1:2","]",(0,a.kt)("br",{parentName:"p"}),"\n","dict \u7684 get \u64cd\u4f5c\uff0cex: dict","[","'key'","]","    "))),(0,a.kt)(l.dn,{text:"\ndict1 = {}\nprint(type(dict1))                                                             \n# <class 'dict'>\n    ",language:"python",showLineNumbers:"true",mdxType:"CodeBlock"}),(0,a.kt)("h2",{id:"dict-\u91cd\u9ede\u6458\u8981"},"Dict \u91cd\u9ede\u6458\u8981"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7a7a\u5927\u62ec\u865f\u9810\u8a2d\u70ba\u5275\u5efa dict\uff0cex: dict1 = ","{","\u2003","\xa0","}","     "),(0,a.kt)("li",{parentName:"ul"},"put \u4ee5\u4e2d\u62ec\u865f\u8ce6\u503c\uff0cex: dict1","[","'new_key'","]","='new_value'    "),(0,a.kt)("li",{parentName:"ul"},"get \u4ee5\u4e2d\u62ec\u865f\u53d6\u503c\uff0cex: fetch = dict1","[","'k'","]","    "),(0,a.kt)("li",{parentName:"ul"},"values() \u53d6\u5168\u90e8\u503c\u3002"),(0,a.kt)("li",{parentName:"ul"},"keys() \u53d6\u5168\u90e8 keys\u3002"),(0,a.kt)("li",{parentName:"ul"},"items() \u53d6\u5168\u90e8 key-value pairs\u3002")),(0,a.kt)("h2",{id:"python-dict-\u5efa\u69cb\u65b9\u5f0f"},"Python Dict \u5efa\u69cb\u65b9\u5f0f"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u56e0\u70ba\u662f\u7b46\u8a18\u6240\u4ee5\u7d00\u9304\u4e0b\u5408\u8a9e\u6cd5\u7684\u5efa\u69cb\u65b9\u5f0f\uff0c",(0,a.kt)("br",{parentName:"p"}),"\n","\u5225\u70ba\u96e3\u81ea\u5df1\uff0c\u8a18\u4f4f\u6700\u7c21\u55ae\u7684\u5c31\u597d\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u770b\u5b8c\u4e0b\u9762\u7bc4\u4f8b\uff0c\u7d55\u5c0d\u8b93\u4f60\u61f7\u7591\u4eba\u751f\u3002  ")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Dict \u57fa\u672c\u5efa\u7acb\u65b9\u5f0f")),(0,a.kt)(l.dn,{text:"\nbasic_dict1 = {}\nprint(type(basic_dict1))\n# <class 'dict'>\nbasic_dict2 = {'k': 'v', 1: 30}\nprint(basic_dict2)\n# {'k': 'v', 1: 30}\n# then use square quotes to add/get item                                        \n    ",language:"python",showLineNumbers:"true",mdxType:"CodeBlock"}),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"dict-\u5efa\u69cb-dict"},"Dict \u5efa\u69cb: dict","(",")"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u61f7\u7591\u4eba\u751f\u7684 dict function \u5efa\u69cb\u6cd5: \u591a\u500b ",(0,a.kt)("strong",{parentName:"li"},"overloaded dict()"))),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"equal style\uff0c\u6bd4\u8f03\u5bb9\u6613\u6df7\u4e82")," \uff0c\u6211\u50be\u5411\u5fd8\u4e86\u4ed6"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5de6\u5074\u70ba key\uff0c\u81ea\u52d5\u8f49 String\uff0c\u4e0d\u53ef\u52a0 single quote\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u53f3\u6e2c\u70ba value\uff0c\u63a1\u901a\u7528\u898f\u77e9\u3002  ")),(0,a.kt)(l.dn,{text:"  \ndict_equale = dict(k=1, k2=2)\n# {'k': 1, 'k2': 2}\n# \u6ce8\u610f k -> 'k'                                                                              \n    ",language:"python",showLineNumbers:"true",mdxType:"CodeBlock"}),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"dict-\u5efa\u69cb-dict-with-tuple"},"Dict \u5efa\u69cb: dict","(",")"," with tuple"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"tuple2 list style1\uff0c\u76f4\u63a5\u50b3\u5165 tuple2 \u7684 sequence")," "),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"dict function \u63a5\u53d7 tuple2 sequence\uff0c\u6240\u4ee5\u884d\u751f\u51fa\u5f8c\u7e8c\u5176\u4ed6\u8b8a\u5f62")),(0,a.kt)(l.dn,{text:"  \ndict_tuples = dict([['key1', 'v1'], ['key2', 'v2']])\ndict_tuples = dict([('key1', 'v1'), ('key2', 'v2')]) # \u540c\u65bc\u4e0a\u65b9\u7bc4\u4f8b\n# {'key1': 'v1', 'key2': 'v2'}                                                                              \n    ",language:"python",showLineNumbers:"true",mdxType:"CodeBlock"}),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"dict-\u5efa\u69cb-dict-with-dict_items"},"Dict \u5efa\u69cb: dict","(",")"," with dict_items"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"tuple2 list style2\uff0c\u8b8a\u5f62A: \\<class 'dict_items'",">"," ")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"tuple list style\uff0c\u76f4\u63a5\u50b3\u5165 tuple2 \u7684 sequence\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u6240\u4ee5\u9019\u908a\u53ef\u4ee5\u5229\u7528 dict.values \u5f97\u5230\u4e8c\u5143\u7d20\u7684 list ie: \\<class 'dict_items'",">","\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u518d\u5229\u7528\u6b64\u7279\u6027\u8907\u88fd\u6216\u5efa\u69cb\u4e00\u500b\u65b0\u7684 dict\u3002  ")),(0,a.kt)(l.dn,{text:"  \nprint(type(basic_dict2.items()))                                                \n#  <class 'dict_items'>\ndict_unpack = dict(basic_dict2.items())\n# {'k': 'v', 1: 30}\n    ",language:"python",showLineNumbers:"true",mdxType:"CodeBlock"}),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"dict-\u5efa\u69cb-zip"},"Dict \u5efa\u69cb: zip","(",")"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"tuple2 list style3\uff0c\u8b8a\u5f62B: zip fucntion ")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"zip style\uff0czip \u65b9\u5f0f\u4e5f\u662f tuple2 sequence \u7684\u8b8a\u5f62\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","zip function \u53ef\u4ee5\u5c07\u5169\u500b lists \u4f9d\u9806\u5e8f\u4f9d\u6b21\u7d44\u5408\u6210 tuple2\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u6240\u4ee5 zip function \u5c31\u662f\u4e00\u500b\u5efa\u69cb tuple2 sequence \u7684\u5de5\u5177\u3002  ")),(0,a.kt)(l.dn,{text:"  \nkeys = ('a1', 'a2', 'a3')                                                         \nvalues = ('v1', 'v2') # \u6545\u610f\u7d66\u4e0d\u540c\u9577\u5ea6\u6e2c\u8a66                                            \nzip_seq = zip(keys, values)\nprint(type(zip_seq))\n# <class 'zip'>\ndict_zip = dict(zip_seq)\nprint(dict_zip)\n# {'a1': 'v1', 'a2': 'v2'}\n# zip \u7121\u6cd5\u7d44\u5408\u90e8\u5206\u6703\u88ab\u6368\u68c4\n    ",language:"python",showLineNumbers:"true",mdxType:"CodeBlock"}),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"dict-\u5efa\u69cb-\u4ee5-dictfromkeys-\u7d66\u4e88\u9810\u8a2d\u503c"},"Dict \u5efa\u69cb: \u4ee5 dict.fromkeys","(",")"," \u7d66\u4e88\u9810\u8a2d\u503c"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"dict_fromKeys style \u5efa\u7acb\u6709\u9810\u8a2d\u503c\u7684 dict")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u9019\u908a\u662f\u4f7f\u7528 class dict \u7684 fromkeys \u985e\u5225\u65b9\u6cd5",(0,a.kt)("br",{parentName:"p"}),"\n","\u4f9d\u6307\u5b9a\u7684 keys \u4f86\u751f\u51fa\u6709\u9810\u8a2d\u7684 dict  ")),(0,a.kt)(l.dn,{text:"  \ndeafult_value = 0                                                               \ndict_fromKeys = dict.fromkeys(('k1','k2','k3','k4'), deafult_value)\n# {'k1': 0, 'k2': 0, 'k3': 0, 'k4': 0}\n    ",language:"python",showLineNumbers:"true",mdxType:"CodeBlock"}),(0,a.kt)("h3",{id:"dict-\u5efa\u69cb-\u4ee5-defaultdict-\u7d66\u4e88\u9810\u8a2d\u503c"},"Dict \u5efa\u69cb: \u4ee5 defaultdict \u7d66\u4e88\u9810\u8a2d\u503c"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u901a\u5e38\u5efa\u7acb dict \u6642\u9700\u8981\u5148\u63d0\u4f9b key/value pairs\uff0c\u5982\u4e0a\u65b9\u6240\u6709\u5efa\u7acb dict \u7684\u7bc4\u4f8b\u4e2d\u986f\u793a\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u90e8\u5206\u6642\u5019\uff0c\u82e5\u55ae\u53ea\u662f\u60f3\u5efa\u7acb\u4e00\u500b dict \u7684\u7a7a\u96c6\u5408\uff0c\u7b49\u5230\u9700\u8981\u6642\u518d\u7d66\u4e88\u8cc7\u6599\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u6b64\u6642\u5c31\u53ef\u4ee5\u4f7f\u7528 defaultdict\uff0c\u5148\u5b9a\u7fa9 dict \u7a7a\u6bbc\uff0c",(0,a.kt)("br",{parentName:"p"}),"\n","\u4e26\u9650\u5236 value \u7684\u578b\u5225\uff0c\u5e36\u9700\u8981\u6642\u518d\u9010\u4e00\u9935\u503c\u3002 ")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4f7f\u7528\u60c5\u5883:   "),(0,a.kt)("blockquote",{parentName:"blockquote"},(0,a.kt)("p",{parentName:"blockquote"},"\u7522\u751f\u4e00\u500b\u6709\u9810\u8a2d\u503c\u7684 value container",(0,a.kt)("br",{parentName:"p"}),"\n","\u8cc7\u6599\u5206\u7fa4(\u985e\u4f3c Google collection \u4e0b\u7684 Multimap)  "))),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Syntax of defaultdict")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"value_type \u53ef\u4ee5\u662f\u5167\u5efa\u8cc7\u6599\u578b\u5225\u5982 int/float/list/set/lambda... \u7b49\uff0c\u4e5f\u53ef\u4ee5\u662f\u81ea\u8a02\u578b\u5225\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from collections import defaultdict\n\ninstance_var = defaultdict(value_type)\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"defaultdict examples")),(0,a.kt)(l.dn,{text:"  \nfrom collections import defaultdict\nscores = defaultdict(int)\nprint(scores) # defaultdict(<class 'int'>, {})\nprint(scores.items()) # dict_items([])\nscores['Totem'] # \u6b64\u8655\u5df2\u64da type \u8a2d\u5b9a\u7d66\u4e88\u9810\u8a2d\u503c: 0\nscores['Winnie'] = 90\nprint(scores.items()) # dict_items([('Totem', 0), ('Winnie', 90)])\n    ",language:"python",showLineNumbers:"true",mdxType:"CodeBlock"}),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"\u81ea\u8a02\u9810\u8a2d\u578b\u5225")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class ExamScore:\n    def __init__(self, test='midterm exam', score='60'):\n        self.test = test\n        self.score = score\n\n    def __repr__(self):\n        return '%s=%s' % (self.test, self.score)\n\nexams = defaultdict(ExamScore)\nexams['Totem'] = ExamScore('final exam', '80')\nexams['Insect'] # \u7d66\u4e88\u9810\u8a2d\u7684 ExamScore\nprint(exams)\n# defaultdict(<class '__main__.ExamScore'>, {'Totem': final exam=80, 'Insect': midterm exam=60})        \n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"\u8cc7\u6599\u5206\u7fa4")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"books = [('Totem', 'Java'), ('Maggot', 'Entomology'), ('Totem', 'Python')]\nauth_book = defaultdict(list) # \u4ee5 list \u4f86\u6536\u76f8\u540c Author \u7684 books\u3002\nfor author, book in books:\n    auth_book[author].append(book)\n\nprint(auth_book.items())\n# dict_items([('Totem', ['Java', 'Python']), ('Maggot', ['Entomology'])])\n")),(0,a.kt)("h2",{id:"python-dict-\u64cd\u4f5c"},"Python Dict \u64cd\u4f5c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"dict \u53d6 value"),(0,a.kt)("li",{parentName:"ul"},"dict \u53d6\u5168\u90e8 values"),(0,a.kt)("li",{parentName:"ul"},"dict \u53d6\u5168\u90e8 keys"),(0,a.kt)("li",{parentName:"ul"},"dict \u53d6 items, \\<class 'dict_items'",">"," : python \u7684\u7279\u6b8a\u529f\u80fd\uff0c\u53d6\u51fa dict \u4e2d\u7684 pairs\u3002  ")),(0,a.kt)(l.dn,{text:"                                                \n#                                                                               \nmap1 = dict(zip(('a','b','c'), ('A','B','C')))                                   \ngetValue = map1['a']\nprint(getValue)\n# A\n#\n#\ngetValues = map1.values()\nprint(getValues)\n# dict_values(['A', 'B', 'C'])\nprint(type(getValues))\n# <class 'dict_values'>\nfor v in getValues:\n    print(v)\ngetKeys = map1.keys()\nprint(getKeys)\n#\n#\n# dict_keys(['a', 'b', 'c'])\nprint(type(getKeys))\n# <class 'dict_keys'>\nfor k in getKeys:\n    print(k)\ngetItems = map1.items()\nprint(getItems)\n#\n#\n# dict_items([('a', 'A'), ('b', 'B'), ('c', 'C')])\nprint(type(getItems))\n# <class 'dict_items'>\nfor k, v in getItems:\n    print(k + ':' + v)\n# a:A\n# b:B\n# c:C\n",language:"python",showLineNumbers:"true",mdxType:"CodeBlock"}))}r.isMDXComponent=!0}}]);