(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{1128:function(t,e,o){"use strict";o(819)},1129:function(t,e,o){var r=o(4)((function(i){return i[1]}));r.push([t.i,".category-section[data-v-1a9283de]{margin-top:20px}.category-section__title[data-v-1a9283de]{margin:20px 0 24px}",""]),r.locals={},t.exports=r},1130:function(t,e,o){"use strict";o(820)},1131:function(t,e,o){var r=o(4)((function(i){return i[1]}));r.push([t.i,'@keyframes spin-14131a2d{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.platform-page[data-v-14131a2d]{position:relative}.platform-page__skeletons[data-v-14131a2d]{background:#fff;bottom:0;min-height:100vh;position:absolute;top:0;width:100%;z-index:2}.platform-page__header[data-v-14131a2d]{margin-top:12px}.platform-page .search-tags[data-v-14131a2d]{margin-bottom:8px}.platform-page__header+.platform-page__content[data-v-14131a2d]{margin-top:16px}.container[data-v-14131a2d]{padding:0 32px}@media(max-width:768px){.container[data-v-14131a2d]{padding:12px 10px 0 20px}}.is-loading[data-v-14131a2d]{height:100px;position:relative}.is-loading[data-v-14131a2d]:after{animation:spin-14131a2d 1s linear infinite;border:2px solid hsla(0,0%,67%,.2);border-radius:50%;border-top-color:hsla(0,0%,67%,.8);content:"";height:3rem;left:50%;margin-left:-1.5rem;margin-top:-1.5rem;position:absolute;top:50%;width:3rem}.icons-descr-wrap[data-v-14131a2d]{grid-row-gap:24px;border-bottom:1px solid var(--c-transparent-black_200);border-top:1px solid var(--c-transparent-black_200);display:grid;grid-template:repeat(2,max-content)/none;margin:32px 0;padding:24px 0;row-gap:24px}.item-category[data-v-14131a2d]{margin-top:20px}@media(min-width:768px){.page-descr[data-v-14131a2d]{border-left:1px solid var(--c-transparent-black_200);padding-left:32px}.icons-descr-wrap[data-v-14131a2d]{grid-template:none/repeat(2,1fr);padding:32px 0}.missing-icon[data-v-14131a2d]{margin-right:32px}}',""]),r.locals={},t.exports=r},1458:function(t,e,o){"use strict";o.r(e);var r=o(6),n=o(12),c=o(88),l=o(636),d=o(627),m=o(695),f={name:"PackPlatformPage",components:{ShutterstockAds:d.default,searchNothingFound:m.a,appPageSectionTitle:l.a},props:{category:{type:Object,default:()=>{}},pack:{type:Object,default:()=>{}},platform:{type:Object,default:()=>{}}},computed:{shutterQuery(){const t=this.category.name,style=this.platform.title;let e="";return e+="Popular"!==t?t:style.replace(/ .*/,""),{query:e,platform:this.platform.apiCode}}},methods:{uppercaseFirstLetter:n.uppercaseFirstLetter}},h=(o(1128),o(3)),v=Object(h.a)(f,(function(){var t=this,e=t._self._c;return e("div",[t.category?t._l(t.category.subcategory,(function(o,r){return e("div",{key:r,class:{"category-section":0!==r}},[e("appPageSectionTitle",{staticClass:"category-section__title"},[t._v("\n        "+t._s(t.uppercaseFirstLetter(o.name.toLowerCase()))+"\n      ")]),t._v(" "),e("icon-grid",{key:"grid"+r,attrs:{id:o.name,icons:o.icons,action:"select","ads-params-two":1===r?{rowAds:3}:{},"carbon-ad":0===r}}),t._v(" "),1===r?e("client-only",{key:o.name+r},[t.pack&&t.platform?e("div",{staticClass:"ads"},[e("ShutterstockAds",{attrs:{"ad-params":t.shutterQuery}})],1):t._e()]):t._e()],1)})):e("search-nothing-found")],2)}),[],!1,null,"1a9283de",null).exports,y=o(635),_=o(737),C=o(682),A=o(619),E=o(617),T=o(615),P={name:"SearchPage",components:{packPlatformPage:v,searchNothingFound:m.a,requestIcon:y.a,CrossSearchBar:_.a,SimilarTags:C.a,appPopularRequest:()=>o.e(18).then(o.bind(null,697))},layout:"app",scrollToTop:!0,data:()=>({term:"",icons:[],countAll:0,isFound:!1,page:1,isLoaded:!1,isLoadedAll:!1,parsedParams:null,searchTemplate:null,category:null,pageSubtitle:null,similarTags:null,bySellAds:null}),computed:{...Object(r.e)({isContentLoaded:t=>t.ui.isContentLoaded,isPageLoaded:t=>t.ui.isPageLoaded,platform:t=>t.platform,user:t=>t.auth.user,pack:t=>t.pack,packs:t=>t.appInfo.packs,isAnimated:t=>t.filters.isAnimated,platforms:t=>t.appInfo.platforms}),isColor(){return this.platforms[this.platform.apiCode].isColor}},async asyncData(t){let{app:e,params:o,store:r,redirect:n,res:l,route:d}=t;if(!o.platform)return void n(301,encodeURI(`/icons/set/${o.term}`));const m=Object(c.a)(o.platform),f=Object(T.a)(r,e).beautifyMadeIn(Object(A.a)(o.term)),h={term:o.term,beautyTerm:f,parsedParams:m};r.dispatch("setPlatform",m.$rootPath),r.dispatch("setIsPageLoading",!0),r.dispatch("setFilterAuthors",Object(A.c)(o.platform)),r.dispatch("setFilterIsAnimated",Object(A.b)(o.platform)),r.dispatch("setFilterColor",Object(A.d)(o.platform).code||Object(A.d)(o.platform).value),r.dispatch("setSearchColor",Object(A.d)(o.platform)),r.dispatch("icon/changeColor",Object(A.d)(o.platform).value||"000000"),r.commit("IS_CONTENT_LOADED",!1),r.commit("SET_PLACEHOLDER_TYPE","icon");const{fetchDataCategory:v,fetchDataIcons:y}=Object(E.a)(r,e,d),_=await v(h);let C;if(_&&_.category&&(C=!!_.category.subcategory&&!!_.category.subcategory.length),_&&C)return _;const P=await y(h);return l&&!P.isFound&&(l.statusCode=404),P},watch:{isPageLoaded(t){t&&this.sendGA()},user(t){t&&this.$analytics.trackSearchEvent({userId:t.id,platform:this.platform.apiCode,isPaidUser:!!t.activeLicense,type:"icon",term:this.term,ip:t.ip})}},mounted(){this.setContentLoaded(500),this.setFilters(),this.sendGA(),this.setIsPageLoading(!1)},async created(){this.bySellAds=await Object(n.clientOnly)(o.e(14).then(o.bind(null,1431)))},methods:{...Object(r.b)(["setFilterColorGradient","setIsPageLoading"]),fetchNext(t){const e=this.searchTemplate;"icons"===e&&this.fetchNextIcons(t),"category"===e&&this.fetchNextCategory(t)},async fetchNextIcons(t){var e;const{isColorFilters:o}=Object(E.a)(this.$store),r=this.$i18n.localeProperties.iso,n=this.$store.state.platform.apiCode,c=this.$route.params.term,l=null!==(e=this.isAnimated)&&void 0!==e?e:null,d=`${this.beautyTerm}`.toLowerCase(),m=this.page+1,f=o();if(this.icons.length>=this.countAll)return t.complete(),void(this.isLoadedAll=!0);const h={term:c,beautyTerm:d,page:m,isAnimated:l,isColor:f,platform:n};try{const e=await Object(E.a)(this.$store).getIcons(h,r);if(!e.success)throw e;e.icons.length?(this.icons=this.icons.concat(e.icons),this.page=this.page+1,t.loaded()):(t.complete(),this.isLoadedAll=!0)}catch(e){t.complete(),this.isLoadedAll=!0,console.error("fetchNextIcons",e)}},async fetchNextCategory(t){var e;if(this.isLoadedAll)return void t.complete();const o={pack:this.pack.code,platform:this.platform.apiCode,page:this.page+1,isAnimated:null!==(e=this.isAnimated)&&void 0!==e?e:null},{getCategory:r}=Object(E.a)(this.$store,this);try{const e=await r(o);e.success?(this.mergeCategories(this.category,e.category),this.page++,t.loaded()):(t.complete(),this.isLoadedAll=!0)}catch(e){t.complete(),this.isLoadedAll=!0,console.error("fetchNextCategory",e)}},mergeCategories(t,e){e.subcategory.forEach((e=>{const sub=t.subcategory.find((t=>t.code===e.code));sub?sub.icons.push(...e.icons):t.subcategory.push(e)}))},setFilters(){this.parsedParams&&this.platform&&"nolan"!==this.platform.apiCode&&this.setFilterColorGradient(void 0)},sendGA(){window.ga&&window.ga("send","pageview"),this.$analytics.trackIconSearch({term:this.term}),this.isFound||this.$analytics.track({event:"Nothing found",category:this.$route.params.platform})},setContentLoaded(t){setTimeout((()=>{this.$store.commit("IS_CONTENT_LOADED",!0)}),t)}}},x=(o(1130),Object(h.a)(P,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"platform-page"},[t.isContentLoaded?t._e():e("div",{staticClass:"platform-page__skeletons container"},[e("icon-placeholder",{attrs:{tags:"",type:t.$store.state.ui.placeholderType,"aggregated-tags":!0,"short-bottom-margin":!0,"icons-heading":!1}})],1),t._v(" "),[e("div",{staticClass:"platform-page__header container"},[e("SimilarTags",{staticClass:"search-tags",attrs:{tags:t.similarTags}}),t._v(" "),"emoji"!==t.term?e("client-only",[e(t.bySellAds,{tag:"component",attrs:{"model-value":!0,"single-icon-page":!0}})],1):t._e()],1),t._v(" "),"emoji"===t.term?e("appPopularRequest",{attrs:{request:t.term}}):t._e(),t._v(" "),e("div",{staticClass:"platform-page__content container"},[e("client-only",["emoji"===t.term?e("BySellAds"):t._e()],1),t._v(" "),t.isFound?t._e():e("search-nothing-found"),t._v(" "),t.category&&"category"===t.searchTemplate?e("packPlatformPage",{staticClass:"is-body",attrs:{category:t.category,pack:t.pack,platform:t.platform}}):t._e(),t._v(" "),"icons"===t.searchTemplate?e("div",[e("icon-grid",{attrs:{icons:t.icons,"ads-params":{rowAds:5,term:t.term,platform:t.platform.apiCode},"carbon-ad":!0,"found-language":t.foundLanguage,action:"select"}})],1):t._e(),t._v(" "),e("client-only",[e("infinite-loading",{directives:[{name:"show",rawName:"v-show",value:!t.isLoadedAll&&t.isFound,expression:"!isLoadedAll && isFound"}],attrs:{distance:350},on:{infinite:t.fetchNext}},[e("div",{staticClass:"is-loading",attrs:{slot:"spinner"},slot:"spinner"})])],1),t._v(" "),t.isFound?e("div",{staticClass:"icons-descr-wrap"},[e("request-icon",{staticClass:"missing-icon"}),t._v(" "),e("app-bottom-info",{staticClass:"page-descr",attrs:{subtitle:t.pageSubtitle}})],1):t._e(),t._v(" "),t.isLoadedAll&&t.isFound?e("client-only",[e("CrossSearchBar",{attrs:{"search-query":t.beautyTerm.toLowerCase()}})],1):t._e()],1)]],2)}),[],!1,null,"14131a2d",null));e.default=x.exports},615:function(t,e,o){"use strict";o.d(e,"a",(function(){return d}));var r=o(12),n=o(10),c=o(21);const l=Object(c.a)({baseURL:"https://search.icons8.com/api/iconsets"});function d(t,e){function o(t,e){const{commonName:o,platform:r,colorHex:n}=t;if(!o||!r)return;let image=`https://img.icons8.com/${r}/${e}/${o}.png`;return n&&(image=`https://img.icons8.com/${r}/${e}w/${n}/${o}.png`),image}function c(t,e,o){var r,n;const c=e.parsedParams.animation||null,l=null===(r=e.parsedParams)||void 0===r||null===(n=r.color)||void 0===n?void 0:n.toUpperCase(),d="animated"===c;return o?t.t("WEB_APP.SEO.SEARCH.TITLE_DYNAMIC."+(d?"ONE_PLATFORM_ANIMATED":"ONE_PLATFORM"),{term:e.beautyTerm,platforms:e.style}):d?t.t("WEB_APP.SEO.SEARCH.META."+(d?"TITLE_ANIMATED":"TITLE_STATIC"),{term:e.beautyTerm}):l&&!l.includes("C-")?t.t(`WEB_APP.SEO.SEARCH.TITLE_ALL_${l}`,{term:e.beautyTerm}):t.t("WEB_APP.SEO.SEARCH.TITLE_ALL",{term:e.beautyTerm})}function d(t,e,o){return o?t.t("WEB_APP.SEO.SEARCH.DESCRIPTION_SINGLE",{term:e.beautyTerm,platform:e.platformName}):t.t("WEB_APP.SEO.SEARCH.DESCRIPTION_PAGE",{term:e.beautyTerm,platforms:"iOS, Material, Windows",pixelPerfectLink:"https://blog.icons8.com/articles/make-pixel-perfect-icons/",newIconsLink:"/icons/new",popularIconsLink:"/icons/set/popular"})}function m(t,e,o){var r,n;const c=e.parsedParams.animation||null,l="animated"===c,d="static"===c,m=null===(r=e.parsedParams)||void 0===r||null===(n=r.color)||void 0===n?void 0:n.toUpperCase();return o?t.t("WEB_APP.SEO.SEARCH.META."+(l?"DESCRIPTION_STYLE_ANIMATED":"DESCRIPTION_STYLE"),{term:e.beautyTerm,platform:e.style}):l?t.t("WEB_APP.SEO.SEARCH.META.DESCRIPTION_ANIMATED",{term:e.beautyTerm}):d?t.t("WEB_APP.SEO.SEARCH.META.DESCRIPTION_STATIC",{term:e.beautyTerm}):m&&!m.includes("C-")?t.t(`WEB_APP.SEO.SEARCH.META.DESCRIPTION_${m}`,{term:e.beautyTerm}):t.t("WEB_APP.SEO.SEARCH.META.DESCRIPTION",{term:e.beautyTerm})}function f(t,e){void 0===t&&(t=[]),void 0===e&&(e={});(e.removeStatic||!1)&&t.length&&t.forEach((link=>(link.hreflang&&(link.href=link.href.replace("--static","")),link)))}return{getCanonical:function(t){const o=e.$hostUrl||"https://icons8.com";let r=t.url;try{r=decodeURIComponent(t.url)}catch(e){r=t.url}return`${o}${r}`},getShareImageLink:function(t,e){const o=t.pngSizes[t.pngSizes.length-1],r=o?o.title:"2x";return`https://img.icons8.com/${t.seoCode}/${r}w/${e}.png`},injectIconsSEO:function(r,l){var h;const style=t.state.platform.title,v=e.$hostUrl||"https://icons8.com",[y]=n.d.filter((t=>t.code===r.parsedParams.color)),_=t.state.filters.colorGradient,C="all"!==t.state.platform.apiCode;let A=(null==y||null===(h=y.value)||void 0===h?void 0:h.replace("#",""))||"000000";if(_){A=`${t.state.filters.colorGradient.start.replace("#","")||"000000"}/${t.state.filters.colorGradient.end.replace("#","")||"000000"}`}const E={titlePage:r.beautyTerm,descriptionPage:d(e.i18n,r,C),title:c(e.i18n,{...r,style:style},C),description:m(e.i18n,{...r,style:style},C),image:o({...r,colorHex:A},600)};if(l){E.canonical=function(t,e,o){const style=e.parsedParams.$rootPath||"ios",r=e.parsedParams.color||null,n=e.parsedParams.animation||null,c=e.parsedParams.authors||null;if(o){let o=`${t}/icon/set/${e.term}/${style}`;return r&&(o+=`--${r}`),"animated"===n&&(o+=`--${n}`),c&&(o+=`--${c}`),o}let l=`${t}/icons/set/${e.term}`;r&&(l+=`--${r}`);"animated"===n&&(l+=`--${n}`);c&&(l+=`--${c}`);return l}(v,r,C);f(t.state.seo.data.link,{removeStatic:"static"===r.parsedParams.animation&&!1})}else E.noindex=!0;t.dispatch("updateSEO",E)},injectIconsContent:async function(t){return{pageSubtitle:e.i18n.t("WEB_APP.SEO.SEARCH.SUBTITLE_PLATFORMS",{amount:t.amount,term:t.beautyTerm,platform:t.platformName}),similarTags:(await async function(t){let{term:e,limit:o=10,lang:r="en",platform:n="all"}=t;try{const t=await l.get("/similarTags",{params:{term:e,limit:o,lang:r,platform:n}});return t.data.success?t.data.data:null}catch(t){return null}}({term:t.term,limit:20,lang:e.i18n.localeProperties.code,platform:"all"})).filter((e=>e.toLowerCase()!==t.term.toLowerCase()))}},updateHreflang:f,translateHreflang:function(e){const{path:path,locales:o,routeParams:n,translations:c=[],isPack:l=!1}=e,d=n.term.split("--"),m=n.term.split("--")[0],f=o.map((t=>{let e=null;e=l?c[t.iso]:c[t.code],e||(e=c.en||m);const o=Object(r.normalizeValue)(e);let f=`${path}${o}`;return d.map(((param,t)=>(f+=0!==t?`--${param}`:"",f))),n.platform&&(f+=`/${n.platform}`),{lang:t.code,url:t.href+f}}));t.dispatch("updateHreflangListHref",{locales:f})},beautifyMadeIn:function(text,pattern,t){void 0===pattern&&(pattern="Made in"),void 0===t&&(t=" in ");const e=""+text;if(!new RegExp(pattern).test(e))return e;const content=e.split(t);if(!content[1])return e;let o=!1;return["USA","UK","UAE","NBA","FIFA"].forEach((t=>{t.toLowerCase()===content[1].toLowerCase()&&(content[1]=t,o=!0)})),o||(content[1]=content[1].replace(/(^|\s)\S/g,(t=>t.toUpperCase()))),content.join(t)}}}},617:function(t,e,o){"use strict";o.d(e,"a",(function(){return y}));var r=o(90),n=o(29),c=o(91),l=o(615),d=o(89),m=o(21);const f=Object(m.a)({baseURL:"https://api-icons.icons8.com"});var h=o(613),v=o(10);function y(t,e,o){const m=Object(l.a)(t,e,o);function y(t,e){const o={term:t.term,platform:t.platform,page:t.page,isAnimated:t.isAnimated,authors:t.authors,language:e,isColor:t.isColor,amount:t.amount};return Object(r.a)(o)}async function _(t){var e;let{platform:o,pack:r,amount:n=24,language:c,sortBy:l="popular"}=void 0===t?{}:t;const{category:d}=await Object(h.a)({platform:o,pack:r,amount:n,language:c,sortBy:l});return null!==(e=d.icons)&&void 0!==e?e:[]}async function C(t){var e,o;let{pack:r}=t;const{category:n}=await Object(h.a)({pack:r,authors:"external"});return null!==(e=null===(o=n.subcategory[0])||void 0===o?void 0:o.icons)&&void 0!==e?e:[]}async function A(t){var o,r;const n=e.i18n||e.$i18n,c={pack:t.pack,platform:t.platform,page:t.page,isAnimated:t.isAnimated,language:n.localeProperties.iso},l=await Object(h.a)(c),d=l.success,m=!!l&&!1,f=d&&(null===(o=l.category)||void 0===o||null===(r=o.subcategory)||void 0===r?void 0:r.length),v=m&&!1===d;return{...l,isFound:f,isLoaded:m,isLoadedAll:v}}function E(){const e=t.state.platform.isColor;let o;return t.state.filters.color&&!e&&(o=!1),o}function T(t){return["svg","social-media","notion","emoji","christmas","new-year"].includes(t)}return{fetchDataIcons:async function(r){var l,d;const f=t.state.filters.isAnimated,h=t.state.filters.authors,v=t.state.platform.apiCode,_=t.state.platform.title,C=E(),A=e.i18n.localeProperties.iso,P={...r,page:1,platform:v,platformName:_,isAnimated:f,authors:h,isColor:C},x=await y(P,A);if("nolan"===v){const[e]=Object(c.a)(),o={end:e.end,start:e.start,id:e.id};t.dispatch("SET_FILTER_COLOR_GRADIENT",o),t.state.filters.colorGradient=e}const[w]=x.icons;x.success&&w&&Object.assign(P,{platform:w.platform,commonName:w.commonName});const S=x.icons.length,O=x.success&&x.countAll<=S,I=x.success&&S,L=Object(n.b)(null===(l=o.params)||void 0===l?void 0:l.term,{isAnimated:f,authors:t.state.filters.authors,color:null===(d=r.parsedParams)||void 0===d?void 0:d.color}),k=/[\u3131-\u3162 | \uAC00-\uD7AF]/giu.test(L),$=I&&L.length<=30&&L.split("-").length<=2&&!k,j=I&&L.length<=30&&L.split("-").length<=2&&!o.fullPath.includes("--static")&&!k;if(m.injectIconsSEO(P,$),j){var R;const path=null===(R=o.matched[0])||void 0===R?void 0:R.path.split(":")[0];m.translateHreflang({path:path,locales:e.i18n.locales,routeParams:o.params,translations:x.searchTranslations})}else t.dispatch("deleteHreflang");const content=await m.injectIconsContent({...P,amount:x.countAll}),N=T(r.term);return{...x,...content,...r,isFound:I,isLoadedAll:O,isPopular:N,searchTemplate:"icons"}},fetchDataCategory:async function(r){const n=function(o){const r=o.replace(/-/g," ").replace(/[/\\^$*+?.()|[\]{}]/g,""),n=new RegExp(`^${r}$`,"i"),c=e.i18n.localeProperties.iso,l=t.state.appInfo.packs.find((t=>n.test(t.name[c])));return l}(r.term),c=t.state.platform.apiCode,l=t.state.platform.title,d=t.state.filters.isAnimated;if(!n)return null;t.dispatch("setPack",n.code);const f={...r,page:1,platform:c,platformName:l,pack:n.code,isAnimated:d};if(m.injectIconsSEO(r,!0),o.fullPath.includes("--static"))t.dispatch("deleteHreflang");else{var h;const t={path:null===(h=o.matched[0])||void 0===h?void 0:h.path.split(":")[0],locales:e.i18n.locales.filter((t=>t.code!==e.i18n.locale)),routeParams:o.params,translations:n.name,isPack:!0};m.translateHreflang(t)}let v={isFound:!1},content={},y=!1;try{var _,C,E;v=await A(f);y=(null!==(_=null===(C=v.category)||void 0===C||null===(E=C.subcategory)||void 0===E?void 0:E.reduce(((t,e)=>{var o;return t+=null===(o=e.icons)||void 0===o?void 0:o.length}),0))&&void 0!==_?_:0)>=10,content=await m.injectIconsContent(f)}catch(t){console.error(t)}return{...v,...r,...content,isSubcategoryIcons:y,searchTemplate:"category"}},getNewIcons:async function(t){return await async function(t){let{amount:e=100,page:o=1,platform:r,language:n,authors:c="all",isColor:l,isAnimated:d}=t;const m={amount:e,offset:(o-1)*e,platform:r,language:n,authors:c,isColor:l,isAnimated:d},{data:data}=await f.get("/siteApi/icons/latest",{params:m});return data}(t)},getIcons:y,getIcon:async function(e){const{icon:o}=await t.dispatch("getIcon",{id:e,info:!0});return o},clearCache:async function(e){const o=t.state.auth.user.authToken;await Object(d.a)(o,e)},getIconsByDate:function(t){const e=v.f,o=v.g,r={};return t.forEach((t=>{const n=function(t){const r={date:"",code:""},n=new Date(t);switch(function(t){const e=864e5,o=Date.now(),r=new Date(Date.now()),n=new Date(t);return o-t<=e?"today":o-t<2*e?"yesterday":Math.ceil((o-t)/e)<=r.getDay()?"this_week":Math.ceil((o-t)/e)>r.getDay()&&Math.ceil((o-t)/e)<=r.getDay()+7?"last_week":r.getFullYear()===n.getFullYear()?"this_year":"other"}(t)){case"today":r.date="Today",r.code="today";break;case"yesterday":r.date="Yesterday",r.code="yesterday";break;case"this_week":r.date=e[n.getDay()],r.code=r.date.toLowerCase();break;case"last_week":r.date="Last "+e[n.getDay()],r.code="last_"+r.date.toLowerCase();break;case"this_year":r.date=o[n.getMonth()];break;default:r.date=`${o[n.getMonth()]} ${n.getFullYear()}`}return r}(1e3*t.timestamp);r[n.date]=r[n.date]||[],r[n.date].push(t)})),r},getCategory:A,getRelatedIconsList:async function(t,o){if(t.id&&!t.isExternal){const r={platform:t.platform,pack:t.categoryApiCode,language:e.$i18n.localeProperties.iso,amount:o};return await _(r)}if(t.isExternal)return await C({pack:t.categoryApiCode})},getRelatedIcons:_,getRelatedExternalIcons:C,getSimilarIcons:async function(e){var o,r;let{term:n,amount:c=24,language:l,isColor:d}=void 0===e?{}:e;return null!==(o=null===(r=await t.dispatch("search",{term:n,amount:c,language:l,...d&&{isColor:d}}))||void 0===r?void 0:r.icons)&&void 0!==o?o:[]},isColorFilters:E,isPopularRequest:T}}},619:function(t,e,o){"use strict";o.d(e,"d",(function(){return l})),o.d(e,"b",(function(){return d})),o.d(e,"c",(function(){return m})),o.d(e,"a",(function(){return f}));var r=o(10),n=o(88),c=o(12);function l(t){const e=Object(n.a)(t);var o,c;if(e.color&&e.color.includes("c-"))return{title:`#${null===(o=e.color.replace("c-",""))||void 0===o?void 0:o.toLowerCase()}`,code:null,value:`#${null===(c=e.color.replace("c-",""))||void 0===c?void 0:c.toLowerCase()}`};const[l]=r.d.filter((t=>t.code===e.color));return l||r.c}function d(t){const e=Object(n.a)(t);let o;return"animated"===e.animation&&(o=!0),"static"===e.animation&&(o=!1),o}function m(t){return Object(n.a)(t).authors}function f(t){const e=Object(n.a)(t);return Object(c.uppercaseFirstLetter)(Object(c.prettifyValue)(e.$rootPath)).replace(/&apos;/g,"'")}},621:function(t,e,o){var content=o(630);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(5).default)("ec898cf6",content,!0,{sourceMap:!1})},623:function(t,e,o){var content=o(634);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(5).default)("3a2a1191",content,!0,{sourceMap:!1})},629:function(t,e,o){"use strict";o(621)},630:function(t,e,o){var r=o(4)((function(i){return i[1]}));r.push([t.i,".request-icon[data-v-c411141a]{font:var(--font-normal) var(--h4-font-size)/20px var(--font-family-legacy);font:var(--request-icon-font,var(--request-icon-font-weight,var(--font-normal)) var(--request-icon-font-size,var(--h4-font-size))/var(--request-icon-font-line-height,20px) var(--request-icon-font-family,var(--font-family-legacy)))}.request-icon img[data-v-c411141a]{height:24px;width:24px}.request-icon .title-wrap[data-v-c411141a]{align-items:center;display:flex}.request-icon .title[data-v-c411141a]{font-size:var(--font-lg);font-weight:var(--font-bold);letter-spacing:-.005em;line-height:24px;margin-left:8px}.request-icon .request-text[data-v-c411141a]{margin:16px 0;max-width:576px}",""]),r.locals={},t.exports=r},633:function(t,e,o){"use strict";o(623)},634:function(t,e,o){var r=o(4)((function(i){return i[1]}));r.push([t.i,'.app-page-section-title{align-items:center;display:flex;font-weight:var(--font-bold);letter-spacing:-.005em;margin:20px 0 24px;text-align:left;text-transform:none;white-space:nowrap}.app-page-section-title:after{background:var(--c-transparent-black_200);bottom:0;content:"";height:1px;margin-left:24px;width:100%}',""]),r.locals={},t.exports=r},635:function(t,e,o){"use strict";var r={name:"RequestIcon",components:{I8Button:o(13).b},props:{requestTextExtra:{type:String,default:""}},data(){var t;return{staticUrl:null!==(t="https://maxst.icons8.com")?t:""}},methods:{moveToRequestIcon(){this.$router.push("/icons/request-icon")}}},n=(o(629),o(3)),component=Object(n.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"request-icon"},[e("div",{staticClass:"title-wrap"},[e("img",{attrs:{src:`${t.staticUrl}/vue-static/icon/search.png`,alt:"magnifier"}}),t._v(" "),e("div",{staticClass:"title",domProps:{innerHTML:t._s(t.$t("REQUEST_ICONS.WEBAPP_REQUEST.TITLE"))}})]),t._v(" "),e("div",{staticClass:"request-text",domProps:{innerHTML:t._s(t.$t("REQUEST_ICONS.WEBAPP_REQUEST.TEXT"))}}),t._v(" "),e("I8Button",{attrs:{size:"large"},on:{click:t.moveToRequestIcon}},[t._v("\n    "+t._s(t.$t("REQUEST_ICONS.TITLE"))+"\n  ")])],1)}),[],!1,null,"c411141a",null);e.a=component.exports},636:function(t,e,o){"use strict";o(633);var r=o(3),component=Object(r.a)({},(function(){return(0,this._self._c)("h6",{staticClass:"app-page-section-title"},[this._t("default")],2)}),[],!1,null,null,null);e.a=component.exports},639:function(t,e,o){var content=o(669);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(5).default)("4e97e2c2",content,!0,{sourceMap:!1})},668:function(t,e,o){"use strict";o(639)},669:function(t,e,o){var r=o(4)((function(i){return i[1]}));r.push([t.i,".similar-tags[data-v-5292c5a8]{margin:0;overflow:hidden}.similar-tags a[data-v-5292c5a8]{display:inline-block;font-size:14px;font-weight:400;transition:all .2s}.chips[data-v-5292c5a8]{border:1px solid var(--c-transparent-black_200);border-radius:100px;color:var(--c-black_900);line-height:1.1;margin:0 8px 8px 0;padding:6px 12px}.chips-container[data-v-5292c5a8]{height:30px}.links[data-v-5292c5a8]{color:var(--c-transparent-black_600);margin-right:16px}@media(max-width:600px){.links[data-v-5292c5a8]{margin-bottom:10px}}.links[data-v-5292c5a8]:hover{color:var(--c-black)}.links-container[data-v-5292c5a8]{height:24px}",""]),r.locals={},t.exports=r},682:function(t,e,o){"use strict";var r=o(2),n=o(6),c=o(88),l=Object(r.defineComponent)({name:"SimilarTags",props:{tags:{type:Array,required:!0,default:()=>[]},mode:{type:String,required:!1,default:"links",validator:t=>["links","chips"].includes(t)}},computed:{...Object(n.e)({platform:t=>t.platform}),normalizedTags(){if(this.tags&&this.platform)return this.tags.map((t=>{const label=t.toLowerCase(),e=Object(c.a)(this.$route.fullPath);let o="";e.color&&(o=`--${e.color}`);const r={label:label,url:""};return this.platform.seoCode&&"all"!==this.platform.seoCode?r.url=`/icon/set/${label.split(" ").join("-")}/${this.platform.seoCode}${o}`:r.url=`/icons/set/${label.split(" ").join("-")}${o}`,r}))}}}),d=(o(668),o(3)),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{class:["similar-tags",`${t.mode}-container`]},t._l(t.normalizedTags,(function(o,i){return e("nuxt-link",{key:i,class:t.mode,attrs:{to:o.url}},[t._v("\n    "+t._s(o.label)+"\n  ")])})),1)}),[],!1,null,"5292c5a8",null);e.a=component.exports},819:function(t,e,o){var content=o(1129);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(5).default)("ca5311ca",content,!0,{sourceMap:!1})},820:function(t,e,o){var content=o(1131);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(5).default)("83e9f8fe",content,!0,{sourceMap:!1})}}]);
//# sourceMappingURL=_platform.678f10f83f927b4f18ab.js.map