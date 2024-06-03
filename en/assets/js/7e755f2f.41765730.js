"use strict";(self.webpackChunkpython=self.webpackChunkpython||[]).push([[6634],{62504:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>p,metadata:()=>o,toc:()=>i});var r=e(87462),a=(e(67294),e(3905));const p={title:"Python command line \u57fa\u672c\u8655\u7406",description:"Python Command Line",keywords:["Python","CLI"]},l="Python Parsers",o={unversionedId:"Python\u5169\u4e09\u4e8b/Python_3_CLI",id:"Python\u5169\u4e09\u4e8b/Python_3_CLI",title:"Python command line \u57fa\u672c\u8655\u7406",description:"Python Command Line",source:"@site/docs/070_Python\u5169\u4e09\u4e8b/072_Python_3_CLI.md",sourceDirName:"070_Python\u5169\u4e09\u4e8b",slug:"/Python\u5169\u4e09\u4e8b/Python_3_CLI",permalink:"/pyramid/en/docs/Python\u5169\u4e09\u4e8b/Python_3_CLI",draft:!1,tags:[],version:"current",sidebarPosition:72,frontMatter:{title:"Python command line \u57fa\u672c\u8655\u7406",description:"Python Command Line",keywords:["Python","CLI"]},sidebar:"totem_sidebar",previous:{title:"Python \u6a94\u6848\u8207\u8cc7\u6599\u593e\u8d70\u8a2a",permalink:"/pyramid/en/docs/Python\u5169\u4e09\u4e8b/Python_3_File_and_Dir"},next:{title:"Python \u65e5\u671f\u8207\u6642\u9593",permalink:"/pyramid/en/docs/Python\u5169\u4e09\u4e8b/Python_3_Time"}},s={},i=[{value:"sys module \u89e3\u6790 CLI \u53c3\u6578",id:"sys-module-\u89e3\u6790-cli-\u53c3\u6578",level:2},{value:"CLI pipe line",id:"cli-pipe-line",level:2},{value:"\u5c07\u8cc7\u6599\u5beb\u81f3 log \u6a94",id:"\u5c07\u8cc7\u6599\u5beb\u81f3-log-\u6a94",level:2},{value:"\u57f7\u884c\u5916\u90e8\u7a0b\u5f0f",id:"\u57f7\u884c\u5916\u90e8\u7a0b\u5f0f",level:2}],y={toc:i},d="wrapper";function m(t){let{components:n,...e}=t;return(0,a.kt)(d,(0,r.Z)({},y,e,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"python-parsers"},"Python Parsers"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u9019\u908a\u6458\u8981\u7d00\u9304 Python \u4e2d\u76f8\u95dc\u7684 Parser \u5de5\u5177")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"api"),(0,a.kt)("th",{parentName:"tr",align:null},"Doc Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"./Python_3_Parser_ConfigParser"},"Configparser")),(0,a.kt)("td",{parentName:"tr",align:null},"*.ini")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ElementTree"),(0,a.kt)("td",{parentName:"tr",align:null},"*.xml")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"pandas"),(0,a.kt)("td",{parentName:"tr",align:null},"*.csv")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"pandas"),(0,a.kt)("td",{parentName:"tr",align:null},"*.xls")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"argparse"),(0,a.kt)("td",{parentName:"tr",align:null},"command line")))),(0,a.kt)("h1",{id:"python-\u89e3\u6790-command-line-\u53c3\u6578"},"Python \u89e3\u6790 Command Line \u53c3\u6578"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"sys module \u53ef\u4ee5\u7528\u4f86\u8b80\u53d6 CLI \u53c3\u6578\uff0c\u9700\u81ea\u884c\u6aa2\u67e5\u53c3\u6578\u6578\u8f1b\u7b49\u8cc7\u8a0a\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u76f8\u95dc CLI \u5957\u4ef6\u5305\u542b argparse\u3001getopt \u7b49")),(0,a.kt)("h2",{id:"sys-module-\u89e3\u6790-cli-\u53c3\u6578"},"sys module \u89e3\u6790 CLI \u53c3\u6578"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u85c9\u7531 sys.argv \u5c0d Command Line Arguments \u89e3\u6790")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"args.py")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import sys\nimport pprint\n\nif len(sys.argv) != 2:\n    print('\u975e\u9810\u671f\u53c3\u6578\u6578\u91cf: \u6539\u7528 %s <file_path>' % sys.argv[0])\n    sys.exit(1)\n\nfilename = sys.argv[1]\nwith open(filename, 'r') as file:\n    pass\n\npprint.pprint('arg1', sys.argv[0]) # python file\npprint.pprint('arg2', sys.argv[1]) # 1st argument\n\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"CLI")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ python args.py test.txt\n\narg1 'args.py'\narg2 'test.txt'\n \n")),(0,a.kt)("h2",{id:"cli-pipe-line"},"CLI pipe line"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4ee5 sys.stdin \u8b80\u53d6 CLI \u56de\u50b3\u5167\u5bb9")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"pipe.py")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import sys\n\nif len(sys.argv) != 2:\n    print('\u975e\u9810\u671f\u53c3\u6578\u6578\u91cf: \u6539\u7528 %s <r or w>' % sys.argv[0])\n    sys.exit(1)\n\nif sys.argv[1] == 'r':\n    print('read mode')\nelif sys.argv[1] == 'w':\n    print('write mode')\nelse:\n    print('unexpected mode')\n\nprint(type(sys.stdin)) # <class '_io.TextIOWrapper'>\n\nfor line in sys.stdin:\n    print(line.strip())\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"CLI")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ echo Hello world! | python pipe.py r\nread mode\n<class '_io.TextIOWrapper'>\nHello world!\n\n\n$ ls *.py | python pipe.py r\nread mode\n<class '_io.TextIOWrapper'>\nargs.py\npipe.py\n....\n\n")),(0,a.kt)("h2",{id:"\u5c07\u8cc7\u6599\u5beb\u81f3-log-\u6a94"},"\u5c07\u8cc7\u6599\u5beb\u81f3 log \u6a94"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import sys\n\nprint("Hello world", file=sys.stdout)\nprint("Goodbye", file=sys.stderr)\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"python std.py 1>info.log 2> err.log\n# 1-stdout, 2-stderr\n\npython std.py > output.log\n# \u50c5\u5c07 sys.stdout \u8f38\u51fa\u81f3 output.log\n\npython std.py >> output.log\n# \u8a0a\u606f\u9644\u52a0\n\n")),(0,a.kt)("h2",{id:"\u57f7\u884c\u5916\u90e8\u7a0b\u5f0f"},"\u57f7\u884c\u5916\u90e8\u7a0b\u5f0f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7531\u57f7\u884c\u4e2d\u7684 *.py \u57f7\u884c\u5916\u90e8\u7a0b\u5f0f")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"external.py")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import os, pprint\nret = os.system('dir *.py')\npprint.pprint(ret)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"python external.py >> output.log\n")))}m.isMDXComponent=!0}}]);