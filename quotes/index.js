(function(e,a,o){"use strict";let i=[];var r={onLoad:function(){try{i.push(o.registerCommand({name:"quote",displayName:"quote",description:"generates a quote.",displayDescription:"generates a quote",type:1,applicationId:-1,inputType:1,choices:[{name:"age",displayName:"age",description:"Get a quote about age",displayDescription:"Get a quote about age",required:!1},{name:"anger",displayName:"anger",description:"Get a quote about anger",displayDescription:"Get a quote about anger",required:!1},{name:"love",displayName:"love",description:"Get a quote about love",displayDescription:"Get a quote about love",required:!1},{name:"hope",displayName:"hope",description:"Get a quote about hope",displayDescription:"Get a quote about hope",required:!1},{name:"leadership",displayName:"leadership",description:"Get a quote about leadership",displayDescription:"Get a quote about leadership",required:!1}],execute:async function(t,n){return{content:"Ello, i work"}}}))}catch(t){return a.logger.log(t),{conent:"err. check the logs"}}}};return e.default=r,Object.defineProperty(e,"__esModule",{value:!0}),e})({},vendetta,vendetta.commands);
