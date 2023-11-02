"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3290],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),u=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(r),h=n,f=c["".concat(l,".").concat(h)]||c[h]||d[h]||i;return r?o.createElement(f,a(a({ref:t},p),{},{components:r})):o.createElement(f,a({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:n,a[1]=s;for(var u=2;u<i;u++)a[u]=r[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}h.displayName="MDXCreateElement"},5587:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var o=r(7462),n=r(3366),i=(r(7294),r(3905)),a=["components"],s={id:"github",title:"GitHub"},l=void 0,u={unversionedId:"configuration/providers/github",id:"configuration/providers/github",title:"GitHub",description:"1.  Create a new project//github.com/settings/developers",source:"@site/docs/configuration/providers/github.md",sourceDirName:"configuration/providers",slug:"/configuration/providers/github",permalink:"/oauth2-proxy/docs/next/configuration/providers/github",draft:!1,editUrl:"https://github.com/oauth2-proxy/oauth2-proxy/edit/master/docs/docs/configuration/providers/github.md",tags:[],version:"current",frontMatter:{id:"github",title:"GitHub"},sidebar:"docs",previous:{title:"Facebook",permalink:"/oauth2-proxy/docs/next/configuration/providers/facebook"},next:{title:"Gitea",permalink:"/oauth2-proxy/docs/next/configuration/providers/gitea"}},p={},c=[],d={toc:c},h="wrapper";function f(e){var t=e.components,r=(0,n.Z)(e,a);return(0,i.kt)(h,(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create a new project: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/settings/developers"},"https://github.com/settings/developers")),(0,i.kt)("li",{parentName:"ol"},"Under ",(0,i.kt)("inlineCode",{parentName:"li"},"Authorization callback URL")," enter the correct url ie ",(0,i.kt)("inlineCode",{parentName:"li"},"https://internal.yourcompany.com/oauth2/callback"))),(0,i.kt)("p",null,"The GitHub auth provider supports two additional ways to restrict authentication to either organization and optional\nteam level access, or to collaborators of a repository. Restricting by these options is normally accompanied with ",(0,i.kt)("inlineCode",{parentName:"p"},"--email-domain=*")),(0,i.kt)("p",null,"NOTE: When ",(0,i.kt)("inlineCode",{parentName:"p"},"--github-user")," is set, the specified users are allowed to log in even if they do not belong to the specified\norg and team or collaborators."),(0,i.kt)("p",null,"To restrict by organization only, include the following flag:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'-github-org="": restrict logins to members of this organisation\n')),(0,i.kt)("p",null,"To restrict within an organization to specific teams, include the following flag in addition to ",(0,i.kt)("inlineCode",{parentName:"p"},"-github-org"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'-github-team="": restrict logins to members of any of these teams (slug), separated by a comma\n')),(0,i.kt)("p",null,"If you would rather restrict access to collaborators of a repository, those users must either have push access to a\npublic repository or any access to a private repository:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'-github-repo="": restrict logins to collaborators of this repository formatted as orgname/repo\n')),(0,i.kt)("p",null,"If you'd like to allow access to users with ",(0,i.kt)("strong",{parentName:"p"},"read only")," access to a ",(0,i.kt)("strong",{parentName:"p"},"public")," repository you will need to provide a\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/settings/tokens"},"token")," for a user that has write access to the repository. The token must be\ncreated with at least the ",(0,i.kt)("inlineCode",{parentName:"p"},"public_repo")," scope:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'-github-token="": the token to use when verifying repository collaborators\n')),(0,i.kt)("p",null,"To allow a user to log in with their username even if they do not belong to the specified org and team or collaborators,\nseparated by a comma"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'-github-user="": allow logins by username, separated by a comma\n')),(0,i.kt)("p",null,"If you are using GitHub enterprise, make sure you set the following to the appropriate url:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'-login-url="http(s)://<enterprise github host>/login/oauth/authorize"\n-redeem-url="http(s)://<enterprise github host>/login/oauth/access_token"\n-validate-url="http(s)://<enterprise github host>/api/v3"\n')))}f.isMDXComponent=!0}}]);