"use strict";(self.webpackChunkpython=self.webpackChunkpython||[]).push([[778],{74029:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>m,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>a,toc:()=>r});var o=e(87462),i=(e(67294),e(3905));e(13848);const l={title:"Send Mail by Python smtplib",description:"Send Mail by Python smtplib",keywords:["smtplib","Python","mail"]},s=void 0,a={unversionedId:"Python\u5169\u4e09\u4e8b/Send_Eail_By_Python",id:"Python\u5169\u4e09\u4e8b/Send_Eail_By_Python",title:"Send Mail by Python smtplib",description:"Send Mail by Python smtplib",source:"@site/docs/070_Python\u5169\u4e09\u4e8b/083_Send_Eail_By_Python.md",sourceDirName:"070_Python\u5169\u4e09\u4e8b",slug:"/Python\u5169\u4e09\u4e8b/Send_Eail_By_Python",permalink:"/python/docs/Python\u5169\u4e09\u4e8b/Send_Eail_By_Python",draft:!1,tags:[],version:"current",sidebarPosition:83,frontMatter:{title:"Send Mail by Python smtplib",description:"Send Mail by Python smtplib",keywords:["smtplib","Python","mail"]},sidebar:"totem_sidebar",previous:{title:"Python \u6392\u5e8f\u4e09\u5169\u4e8b",permalink:"/python/docs/Python\u5169\u4e09\u4e8b/Python_Sorting"},next:{title:"Pickle \u5e8f\u5217\u5316\u8207\u53cd\u5e8f\u5217\u5316",permalink:"/python/docs/Python\u5169\u4e09\u4e8b/Python_module_pickle"}},m={},r=[],y={toc:r},d="wrapper";function p(t){let{components:n,...e}=t;return(0,i.kt)(d,(0,o.Z)({},y,e,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Python example: Send Mail")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import smtplib\nfrom email.mime.text import MIMEText\n\nmailFrom = 'doraemon+from@gmail.com'\nmailTo = 'doraemon+to@gmail.com'\n\nmsg = MIMEText(\"test\")\nmsg['Subject'] = 'Subject Test'\nmsg['From'] = mailFrom\nmsg['To'] = mailTo\n\ns = smtplib.SMTP('mail.server.edf.org')\ns.sendmail(mailFrom, [mailTo], msg.as_string())\ns.quit()\n")))}p.isMDXComponent=!0}}]);