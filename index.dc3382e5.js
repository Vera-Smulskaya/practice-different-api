!function(){function e(e){return e&&e.__esModule?e.default:e}var t={};Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};var n={};function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,t,n){t&&a(e.prototype,t);n&&a(e,n);return e};var r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e};var c={headers:{"X-RapidAPI-Key":"9b3ff61931msh1b42d77d34e33dap1c29cajsn3d3169","X-RapidAPI-HOST":"free-news.p.rapidapi.com"}},o=new(function(){"use strict";function a(){e(t)(this,a),e(r)(this,"page",1),e(r)(this,"query","")}return e(n)(a,[{key:"getNews",value:function(e){e&&(this.query=e);var t=new URLSearchParams({q:this.query,lang:"en",page:this.page,page_size:10});return fetch("".concat("https://free-news.p.rapidapi.com/v1").concat("/search","?").concat(t),c).then((function(e){return e.json()}))}}]),a}()),i={searchFormEl:document.querySelector(".js-search-form"),loadMoreBtn:document.querySelector(".js-btn-load"),articlesEl:document.querySelector(".js-article-list")};function s(e){var t=e.map((function(e){var t=e.media,n=e.title,a=e.summary,r=e.author;return'<li class="card news-card">\n            <img src="'.concat(t,'" alt="" loading="lazy">\n            <h3>').concat(n,"</h3>\n            <p>").concat(a,"<p>\n            <hr>\n            <span>").concat(r,"</span>\n            </li>\n  ")})).join("");i.articlesEl.insertAdjacentHTML("beforeEnd",t)}i.searchFormEl.addEventListener("submit",(function(e){e.preventDefault();var t=e.target.elements.query.value.trim();e.target.reset(),o.getNews(t).then((function(e){s(e.articles)})),i.loadMoreBtn.disabled=!1,i.articlesEl.innerHTML=""})),i.loadMoreBtn.addEventListener("click",(function(){o.page+=1,o.getNews().then((function(e){s(e.articles),e.page===e.total_pages&&(i.loadMoreBtn.disabled=!0)}))}));var u=document.querySelector(".js-characters-list"),l=document.querySelector(".js-load-more"),d=1;function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return fetch("https://rickandmortyapi.com/api/character?page=".concat(e)).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()}))}function h(e){var t=e.map((function(e){var t=e.image,n=e.name,a=e.status;return'<li class="js-character-item">\n      <img src="'.concat(t,'" alt="').concat(n,'" class="js-character-img">\n      <p class="js-character-name">Name: <b>').concat(n,'</b></p>\n      <p class="js-character-status">Status: <b>').concat(a,"</b></p>\n    </li>")})).join();u.insertAdjacentHTML("beforeend",t)}l.addEventListener("click",(function(){f(d+=1).then((function(e){h(e.results),d===e.info.pages&&(l.hidden=!0)})).catch((function(e){return console.log(e)}))})),f().then((function(e){h(e.results),l.hidden=!1})).catch((function(e){return console.log(e)}));var p=document.getElementById("root"),m=document.createElement("button");consttoDoApi=new v,m.textContent="Load toDoes",p.append(listEl,m),m.addEventListener("click",(function(){m.disabled=!0,v.fetchToDoes().then((function(e){if(0!==e.length){var t=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).map((function(e){return"<li data-id=".concat(e.id,">\n    <p>").concat(e.title,"</p>\n    <input ").concat(e.completed?"checked":"",' type="checkbox"/>\n    </li>')})).join("")}(e);listEl.insertAdjacentHTML("beforeend",t)}else m.style.display="none"})).finally((function(){m.disabled=!1,2===v.page&&(m.textContent="Load More")}))})),p.addEventListener("click",(function(e){var t,n=e.target;if("INPUT"!==n.tagName)return;if(void 0===(null===(t=n.closest("li"))||void 0===t?void 0:t.dataset.id))return}));var v=function(){"use strict";function a(){e(t)(this,a),e(r)(this,"page",1)}return e(n)(a,[{key:"fetchToDoes",value:function(){var e=this,t=new URLSearchParams({_limit:10,_page:this.page});fetch("".concat(BASE_URL,"?").concat(t)).then((function(t){return e.page+=1,t.json()})).catch((function(e){return console.error(e)}))}},{key:"onToDoUpdate",value:function(e,t){return fetch("".concat(BASE_URL,"/").concat(t),{method:"PATCH",body:JSON.stringify({completed:e}),headers:{"Content-type":"application/json; chatset=UTF-8"}}).then((function(e){return e.json()})).then((function(e){return console.log(e)}))}}]),a}();e(r)(v,"BASE_URL","https://jsonplaceholder.typicode.com/todos")}();
//# sourceMappingURL=index.dc3382e5.js.map
