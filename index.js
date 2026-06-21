import{a as L,S as w,i as l}from"./assets/vendor-DuKcLXOA.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&d(i)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function d(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();const v="56294783-65626070dc64ec0f139760a6f";async function u(e,s){return(await L.get("https://pixabay.com/api/",{params:{key:v,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:1,per_page:15}})).data}const m=document.querySelector(".gallery"),g=document.querySelector(".loader"),x=new w(".gallery a"),y=document.querySelector(".gallery-load"),b=e=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${e.largeImageURL}">
        <img
          class="gallery-image"
          src="${e.webformatURL}"
          alt="${e.tags}"
        />
      </a>
        <div class="gallery-data">
            <ul class="img-list">
                <li class="img-data">
                    <p class="img-text">Likes</p><p class="img-text">${e.likes}</p>
                </li>
                <li class="img-data">
                    <p class="img-text">Views</p><p class="img-text">${e.views}</p>
                </li>
                <li class="img-data">
                    <p class="img-text">Comments</p><p class="img-text">${e.comments}</p>
                </li>
                <li class="img-data">
                    <p class="img-text">Downloads</p><p class="img-text">${e.downloads}</p>
                </li>
            </ul>
        </div>
     </li>
  `;function q(){m.innerHTML=""}function p(){g.classList.remove("hidden")}function f(){g.classList.add("hidden")}function h(e){const s=e.map(b).join("");m.insertAdjacentHTML("beforeend",s),x.refresh()}function S(){y.classList.remove("hidden")}function c(){y.classList.add("hidden")}const $=document.querySelector(".form"),B=document.querySelector(".gallery-load");let o=1,n="";$.addEventListener("submit",async e=>{e.preventDefault();const s=e.target.elements["search-text"].value.trim();if(s){n=s,o=1,c(),p(),q();try{const a=await u(n,o);if(a.hits.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}h(a.hits),o*15>a.totalHits?(c(),l.error({message:"We're sorry, but you've reached the end of search results."})):S(),o++}catch(a){console.log(a)}finally{f()}}});B.addEventListener("click",async()=>{p();try{const e=await u(n,o);h(e.hits);const s=document.querySelector(".gallery-item"),a=card.getBoundingClientRect().height;window.scrollBy({top:a*2,behavior:"smooth"}),o*15>=e.totalHits&&(c(),l.info({message:"We're sorry, but you've reached the end of search results."})),o++}catch(e){console.log(e)}finally{f()}});
//# sourceMappingURL=index.js.map
