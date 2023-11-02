"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8967],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return k}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(a),h=r,k=d["".concat(s,".").concat(h)]||d[h]||m[h]||l;return a?n.createElement(k,i(i({ref:t},u),{},{components:a})):n.createElement(k,i({ref:t},u))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},2970:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return d}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=["components"],o={id:"alpha-config",title:"Alpha Configuration"},s=void 0,p={unversionedId:"configuration/alpha-config",id:"version-7.0.x/configuration/alpha-config",title:"Alpha Configuration",description:"This page contains documentation for alpha features.",source:"@site/versioned_docs/version-7.0.x/configuration/alpha_config.md",sourceDirName:"configuration",slug:"/configuration/alpha-config",permalink:"/oauth2-proxy/docs/7.0.x/configuration/alpha-config",draft:!1,editUrl:"https://github.com/oauth2-proxy/oauth2-proxy/edit/master/docs/versioned_docs/version-7.0.x/configuration/alpha_config.md",tags:[],version:"7.0.x",frontMatter:{id:"alpha-config",title:"Alpha Configuration"},sidebar:"version-7.0.x/docs",previous:{title:"TLS Configuration",permalink:"/oauth2-proxy/docs/7.0.x/configuration/tls"},next:{title:"Endpoints",permalink:"/oauth2-proxy/docs/7.0.x/features/endpoints"}},u={},d=[{value:"Using Alpha Configuration",id:"using-alpha-configuration",level:2},{value:"Converting configuration to the new structure",id:"converting-configuration-to-the-new-structure",level:3},{value:"Removed options",id:"removed-options",level:2},{value:"Configuration Reference",id:"configuration-reference",level:2},{value:"AlphaOptions",id:"alphaoptions",level:3},{value:"ClaimSource",id:"claimsource",level:3},{value:"Duration",id:"duration",level:3},{value:"(<code>string</code> alias)",id:"string-alias",level:4},{value:"Header",id:"header",level:3},{value:"HeaderValue",id:"headervalue",level:3},{value:"SecretSource",id:"secretsource",level:3},{value:"Upstream",id:"upstream",level:3},{value:"Upstreams",id:"upstreams",level:3},{value:"([]Upstream alias)",id:"upstream-alias",level:4}],m={toc:d},h="wrapper";function k(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)(h,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("admonition",{type:"warning"},(0,l.kt)("p",{parentName:"admonition"},"This page contains documentation for alpha features.\nWe reserve the right to make breaking changes to the features detailed within this page with no notice."),(0,l.kt)("p",{parentName:"admonition"},"Options described in this page may be changed, removed, renamed or moved without prior warning.\nPlease beware of this before you use alpha configuration options.")),(0,l.kt)("p",null,"This page details a set of ",(0,l.kt)("strong",{parentName:"p"},"alpha")," configuration options in a new format.\nGoing forward we are intending to add structured configuration in YAML format to\nreplace the existing TOML based configuration file and flags."),(0,l.kt)("p",null,"Below is a reference for the structure of the configuration, with\n",(0,l.kt)("a",{parentName:"p",href:"#alphaoptions"},"AlphaOptions")," as the root of the configuration."),(0,l.kt)("p",null,"When using alpha configuration, your config file will look something like below:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"upstreams:\n  - id: ...\n    ...\ninjectRequestHeaders:\n  - name: ...\n    ...\ninjectResponseHeaders:\n  - name: ...\n    ...\n")),(0,l.kt)("p",null,"Please browse the ",(0,l.kt)("a",{parentName:"p",href:"#configuration-reference"},"reference")," below for the structure\nof the new configuration format."),(0,l.kt)("h2",{id:"using-alpha-configuration"},"Using Alpha Configuration"),(0,l.kt)("p",null,"To use the new ",(0,l.kt)("strong",{parentName:"p"},"alpha")," configuration, generate a YAML file based on the format\ndescribed in the ",(0,l.kt)("a",{parentName:"p",href:"#configuration-reference"},"reference")," below."),(0,l.kt)("p",null,"Provide the path to this file using the ",(0,l.kt)("inlineCode",{parentName:"p"},"--alpha-config")," flag."),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"When using the ",(0,l.kt)("inlineCode",{parentName:"p"},"--alpha-config")," flag, some options are no longer available.\nSee ",(0,l.kt)("a",{parentName:"p",href:"#removed-options"},"removed options")," below for more information.")),(0,l.kt)("h3",{id:"converting-configuration-to-the-new-structure"},"Converting configuration to the new structure"),(0,l.kt)("p",null,"Before adding the new ",(0,l.kt)("inlineCode",{parentName:"p"},"--alpha-config")," option, start OAuth2 Proxy using the\n",(0,l.kt)("inlineCode",{parentName:"p"},"convert-config-to-alpha")," flag to convert existing configuration to the new format."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"oauth2-proxy --convert-config-to-alpha --config ./path/to/existing/config.cfg\n")),(0,l.kt)("p",null,"This will convert any options supported by the new format to YAML and print the\nnew configuration to ",(0,l.kt)("inlineCode",{parentName:"p"},"STDOUT"),"."),(0,l.kt)("p",null,"Copy this to a new file, remove any options from your existing configuration\nnoted in ",(0,l.kt)("a",{parentName:"p",href:"#removed-options"},"removed options")," and then start OAuth2 Proxy using\nthe new config."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"oauth2-proxy --alpha-config ./path/to/new/config.yaml --config ./path/to/existing/config.cfg\n")),(0,l.kt)("h2",{id:"removed-options"},"Removed options"),(0,l.kt)("p",null,"The following flags/options and their respective environment variables are no\nlonger available when using alpha configuration:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"flush-interval"),"/",(0,l.kt)("inlineCode",{parentName:"li"},"flush_interval")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"pass-host-header"),"/",(0,l.kt)("inlineCode",{parentName:"li"},"pass_host_header")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"proxy-websockets"),"/",(0,l.kt)("inlineCode",{parentName:"li"},"proxy_websockets")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ssl-upstream-insecure-skip-verify"),"/",(0,l.kt)("inlineCode",{parentName:"li"},"ssl_upstream_insecure_skip_verify")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"upstream"),"/",(0,l.kt)("inlineCode",{parentName:"li"},"upstreams"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"pass-basic-auth"),"/",(0,l.kt)("inlineCode",{parentName:"li"},"pass_basic_auth")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"pass-access-token"),"/",(0,l.kt)("inlineCode",{parentName:"li"},"pass_access_token")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"pass-user-headers"),"/",(0,l.kt)("inlineCode",{parentName:"li"},"pass_user_headers")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"pass-authorization-header"),"/",(0,l.kt)("inlineCode",{parentName:"li"},"pass_authorization_header")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"set-basic-auth"),"/",(0,l.kt)("inlineCode",{parentName:"li"},"set_basic_auth")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"set-xauthrequest"),"/",(0,l.kt)("inlineCode",{parentName:"li"},"set_xauthrequest")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"set-authorization-header"),"/",(0,l.kt)("inlineCode",{parentName:"li"},"set_authorization_header")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"prefer-email-to-user"),"/",(0,l.kt)("inlineCode",{parentName:"li"},"prefer_email_to_user")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"basic-auth-password"),"/",(0,l.kt)("inlineCode",{parentName:"li"},"basic_auth_password")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"skip-auth-strip-headers"),"/",(0,l.kt)("inlineCode",{parentName:"li"},"skip_auth_strip_headers"))),(0,l.kt)("p",null,"Attempting to use these options via flags or via config when ",(0,l.kt)("inlineCode",{parentName:"p"},"--alpha-config"),"\nset will result in an error."),(0,l.kt)("admonition",{type:"important"},(0,l.kt)("p",{parentName:"admonition"},"You must remove these options before starting OAuth2 Proxy with ",(0,l.kt)("inlineCode",{parentName:"p"},"--alpha-config"))),(0,l.kt)("h2",{id:"configuration-reference"},"Configuration Reference"),(0,l.kt)("h3",{id:"alphaoptions"},"AlphaOptions"),(0,l.kt)("p",null,"AlphaOptions contains alpha structured configuration options.\nUsage of these options allows users to access alpha features that are not\navailable as part of the primary configuration structure for OAuth2 Proxy."),(0,l.kt)("admonition",{type:"warning"},(0,l.kt)("p",{parentName:"admonition"},"The options within this structure are considered alpha.\nThey may change between releases without notice.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"upstreams")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},(0,l.kt)("a",{parentName:"em",href:"#upstreams"},"Upstreams"))),(0,l.kt)("td",{parentName:"tr",align:null},"Upstreams is used to configure upstream servers.",(0,l.kt)("br",null),"Once a user is authenticated, requests to the server will be proxied to",(0,l.kt)("br",null),"these upstream servers based on the path mappings defined in this list.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"injectRequestHeaders")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},(0,l.kt)("a",{parentName:"em",href:"#header"},"[]Header"))),(0,l.kt)("td",{parentName:"tr",align:null},"InjectRequestHeaders is used to configure headers that should be added",(0,l.kt)("br",null),"to requests to upstream servers.",(0,l.kt)("br",null),"Headers may source values from either the authenticated user's session",(0,l.kt)("br",null),"or from a static secret value.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"injectResponseHeaders")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},(0,l.kt)("a",{parentName:"em",href:"#header"},"[]Header"))),(0,l.kt)("td",{parentName:"tr",align:null},"InjectResponseHeaders is used to configure headers that should be added",(0,l.kt)("br",null),"to responses from the proxy.",(0,l.kt)("br",null),"This is typically used when using the proxy as an external authentication",(0,l.kt)("br",null),"provider in conjunction with another proxy such as NGINX and its",(0,l.kt)("br",null),"auth_request module.",(0,l.kt)("br",null),"Headers may source values from either the authenticated user's session",(0,l.kt)("br",null),"or from a static secret value.")))),(0,l.kt)("h3",{id:"claimsource"},"ClaimSource"),(0,l.kt)("p",null,"(",(0,l.kt)("strong",{parentName:"p"},"Appears on:")," ",(0,l.kt)("a",{parentName:"p",href:"#headervalue"},"HeaderValue"),")"),(0,l.kt)("p",null,"ClaimSource allows loading a header value from a claim within the session"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"claim")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"Claim is the name of the claim in the session that the value should be",(0,l.kt)("br",null),"loaded from.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"prefix")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"Prefix is an optional prefix that will be prepended to the value of the",(0,l.kt)("br",null),"claim if it is non-empty.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"basicAuthPassword")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},(0,l.kt)("a",{parentName:"em",href:"#secretsource"},"SecretSource"))),(0,l.kt)("td",{parentName:"tr",align:null},"BasicAuthPassword converts this claim into a basic auth header.",(0,l.kt)("br",null),"Note the value of claim will become the basic auth username and the",(0,l.kt)("br",null),"basicAuthPassword will be used as the password value.")))),(0,l.kt)("h3",{id:"duration"},"Duration"),(0,l.kt)("h4",{id:"string-alias"},"(",(0,l.kt)("inlineCode",{parentName:"h4"},"string")," alias)"),(0,l.kt)("p",null,"(",(0,l.kt)("strong",{parentName:"p"},"Appears on:")," ",(0,l.kt)("a",{parentName:"p",href:"#upstream"},"Upstream"),")"),(0,l.kt)("p",null,'Duration is as string representation of a period of time.\nA duration string is a is a possibly signed sequence of decimal numbers,\neach with optional fraction and a unit suffix, such as "300ms", "-1.5h" or "2h45m".\nValid time units are "ns", "us" (or "\xb5s"), "ms", "s", "m", "h".'),(0,l.kt)("h3",{id:"header"},"Header"),(0,l.kt)("p",null,"(",(0,l.kt)("strong",{parentName:"p"},"Appears on:")," ",(0,l.kt)("a",{parentName:"p",href:"#alphaoptions"},"AlphaOptions"),")"),(0,l.kt)("p",null,"Header represents an individual header that will be added to a request or\nresponse header."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"name")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"Name is the header name to be used for this set of values.",(0,l.kt)("br",null),"Names should be unique within a list of Headers.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"preserveRequestValue")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"bool")),(0,l.kt)("td",{parentName:"tr",align:null},"PreserveRequestValue determines whether any values for this header",(0,l.kt)("br",null),"should be preserved for the request to the upstream server.",(0,l.kt)("br",null),"This option only applies to injected request headers.",(0,l.kt)("br",null),"Defaults to false (headers that match this header will be stripped).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"values")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},(0,l.kt)("a",{parentName:"em",href:"#headervalue"},"[]HeaderValue"))),(0,l.kt)("td",{parentName:"tr",align:null},"Values contains the desired values for this header")))),(0,l.kt)("h3",{id:"headervalue"},"HeaderValue"),(0,l.kt)("p",null,"(",(0,l.kt)("strong",{parentName:"p"},"Appears on:")," ",(0,l.kt)("a",{parentName:"p",href:"#header"},"Header"),")"),(0,l.kt)("p",null,"HeaderValue represents a single header value and the sources that can\nmake up the header value"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"value")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"[]byte")),(0,l.kt)("td",{parentName:"tr",align:null},"Value expects a base64 encoded string value.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"fromEnv")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"FromEnv expects the name of an environment variable.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"fromFile")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"FromFile expects a path to a file containing the secret value.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"claim")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"Claim is the name of the claim in the session that the value should be",(0,l.kt)("br",null),"loaded from.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"prefix")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"Prefix is an optional prefix that will be prepended to the value of the",(0,l.kt)("br",null),"claim if it is non-empty.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"basicAuthPassword")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},(0,l.kt)("a",{parentName:"em",href:"#secretsource"},"SecretSource"))),(0,l.kt)("td",{parentName:"tr",align:null},"BasicAuthPassword converts this claim into a basic auth header.",(0,l.kt)("br",null),"Note the value of claim will become the basic auth username and the",(0,l.kt)("br",null),"basicAuthPassword will be used as the password value.")))),(0,l.kt)("h3",{id:"secretsource"},"SecretSource"),(0,l.kt)("p",null,"(",(0,l.kt)("strong",{parentName:"p"},"Appears on:")," ",(0,l.kt)("a",{parentName:"p",href:"#claimsource"},"ClaimSource"),", ",(0,l.kt)("a",{parentName:"p",href:"#headervalue"},"HeaderValue"),")"),(0,l.kt)("p",null,"SecretSource references an individual secret value.\nOnly one source within the struct should be defined at any time."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"value")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"[]byte")),(0,l.kt)("td",{parentName:"tr",align:null},"Value expects a base64 encoded string value.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"fromEnv")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"FromEnv expects the name of an environment variable.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"fromFile")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"FromFile expects a path to a file containing the secret value.")))),(0,l.kt)("h3",{id:"upstream"},"Upstream"),(0,l.kt)("p",null,"(",(0,l.kt)("strong",{parentName:"p"},"Appears on:")," ",(0,l.kt)("a",{parentName:"p",href:"#upstreams"},"Upstreams"),")"),(0,l.kt)("p",null,"Upstream represents the configuration for an upstream server.\nRequests will be proxied to this upstream if the path matches the request path."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"id")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"ID should be a unique identifier for the upstream.",(0,l.kt)("br",null),"This value is required for all upstreams.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"path")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"Path is used to map requests to the upstream server.",(0,l.kt)("br",null),"The closest match will take precedence and all Paths must be unique.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"uri")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"The URI of the upstream server. This may be an HTTP(S) server of a File",(0,l.kt)("br",null),"based URL. It may include a path, in which case all requests will be served",(0,l.kt)("br",null),"under that path.",(0,l.kt)("br",null),"Eg:",(0,l.kt)("br",null),"- http://localhost:8080",(0,l.kt)("br",null),"- ",(0,l.kt)("a",{parentName:"td",href:"https://service.localhost"},"https://service.localhost"),(0,l.kt)("br",null),"- ",(0,l.kt)("a",{parentName:"td",href:"https://service.localhost/path"},"https://service.localhost/path"),(0,l.kt)("br",null),"- file://host/path",(0,l.kt)("br",null),'If the URI\'s path is "/base" and the incoming request was for "/dir",',(0,l.kt)("br",null),'the upstream request will be for "/base/dir".')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"insecureSkipTLSVerify")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"bool")),(0,l.kt)("td",{parentName:"tr",align:null},"InsecureSkipTLSVerify will skip TLS verification of upstream HTTPS hosts.",(0,l.kt)("br",null),"This option is insecure and will allow potential Man-In-The-Middle attacks",(0,l.kt)("br",null),"betweem OAuth2 Proxy and the usptream server.",(0,l.kt)("br",null),"Defaults to false.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"static")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"bool")),(0,l.kt)("td",{parentName:"tr",align:null},"Static will make all requests to this upstream have a static response.",(0,l.kt)("br",null),'The response will have a body of "Authenticated" and a response code',(0,l.kt)("br",null),"matching StaticCode.",(0,l.kt)("br",null),"If StaticCode is not set, the response will return a 200 response.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"staticCode")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"int")),(0,l.kt)("td",{parentName:"tr",align:null},"StaticCode determines the response code for the Static response.",(0,l.kt)("br",null),"This option can only be used with Static enabled.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"flushInterval")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},(0,l.kt)("a",{parentName:"em",href:"#duration"},"Duration"))),(0,l.kt)("td",{parentName:"tr",align:null},"FlushInterval is the period between flushing the response buffer when",(0,l.kt)("br",null),"streaming response from the upstream.",(0,l.kt)("br",null),"Defaults to 1 second.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"passHostHeader")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"bool")),(0,l.kt)("td",{parentName:"tr",align:null},"PassHostHeader determines whether the request host header should be proxied",(0,l.kt)("br",null),"to the upstream server.",(0,l.kt)("br",null),"Defaults to true.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"proxyWebSockets")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"bool")),(0,l.kt)("td",{parentName:"tr",align:null},"ProxyWebSockets enables proxying of websockets to upstream servers",(0,l.kt)("br",null),"Defaults to true.")))),(0,l.kt)("h3",{id:"upstreams"},"Upstreams"),(0,l.kt)("h4",{id:"upstream-alias"},"(",(0,l.kt)("a",{parentName:"h4",href:"#upstream"},"[]Upstream")," alias)"),(0,l.kt)("p",null,"(",(0,l.kt)("strong",{parentName:"p"},"Appears on:")," ",(0,l.kt)("a",{parentName:"p",href:"#alphaoptions"},"AlphaOptions"),")"),(0,l.kt)("p",null,"Upstreams is a collection of definitions for upstream servers."))}k.isMDXComponent=!0}}]);