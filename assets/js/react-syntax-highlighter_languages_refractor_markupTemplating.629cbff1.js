"use strict";(self.webpackChunkpython=self.webpackChunkpython||[]).push([[3047],{93205:e=>{function n(e){!function(e){function n(e,n){return"___"+e.toUpperCase()+n+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(t,a,o,r){if(t.language===a){var u=t.tokenStack=[];t.code=t.code.replace(o,(function(e){if("function"==typeof r&&!r(e))return e;for(var o,c=u.length;-1!==t.code.indexOf(o=n(a,c));)++c;return u[c]=e,o})),t.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(t,a){if(t.language===a&&t.tokenStack){t.grammar=e.languages[a];var o=0,r=Object.keys(t.tokenStack);!function u(c){for(var i=0;i<c.length&&!(o>=r.length);i++){var p=c[i];if("string"==typeof p||p.content&&"string"==typeof p.content){var s=r[o],l=t.tokenStack[s],g="string"==typeof p?p:p.content,f=n(a,s),k=g.indexOf(f);if(k>-1){++o;var h=g.substring(0,k),m=new e.Token(a,e.tokenize(l,t.grammar),"language-"+a,l),y=g.substring(k+f.length),d=[];h&&d.push.apply(d,u([h])),d.push(m),y&&d.push.apply(d,u([y])),"string"==typeof p?c.splice.apply(c,[i,1].concat(d)):p.content=d}}else p.content&&u(p.content)}return c}(t.tokens)}}}})}(e)}e.exports=n,n.displayName="markupTemplating",n.aliases=[]}}]);