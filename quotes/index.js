(function(e,t,r){"use strict";let s=[];var c={onLoad:function(){try{s.push(r.registerCommand({name:"quote",displayName:"quote",description:"generates a quote.",displayDescription:"generates a quote",type:1,applicationId:-1,inputType:1,execute:async function(a,l){let o;function g(){const i=["age","alone","amazing","anger","architecture","art","attitude","beauty","best","birthday","business","car","change","communications","computers","cool","courage","dad","dating","death","design","dreams","education","environmental","equality","experience","failure","faith","family","famous","fear","fitness","food","forgiveness","freedom","friendship","funny","future","god","good","government","graduation","great","happiness","health","history","home","hope","humor","imagination","inspirational","intelligence","jealousy","knowledge","leadership","learning","legal","life","love","marriage","medical","men","mom","money","morning","movies","success"],u=Math.floor(Math.random()*i.length);o=i[u],$.ajax({method:"GET",url:"https://api.api-ninjas.com/v1/quotes?category="+o,headers:{"X-Api-Key":"et6XfFJdPxmYaOgW3lgvRnT2wj1aU5ea6HHMxLxW"},contentType:"application/json",success:function(n){return{content:n}},error:function(n){t.logger.log("Error: ",n.responseText)}})}}}))}catch(a){return t.logger.log(a),{content:"err. check the logs"}}}};return e.default=c,Object.defineProperty(e,"__esModule",{value:!0}),e})({},vendetta,vendetta.commands);
