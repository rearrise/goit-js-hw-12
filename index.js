import{a as w,S as v,i}from"./assets/vendor-DuKcLXOA.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&d(n)}).observe(document,{childList:!0,subtree:!0});function a(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function d(t){if(t.ep)return;t.ep=!0;const s=a(t);fetch(t.href,s)}})();const x="56294783-65626070dc64ec0f139760a6f";async function u(e,r){return(await w.get("https://pixabay.com/api/",{params:{key:x,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15}})).data}const g=document.querySelector(".gallery"),m=document.querySelector(".loader"),S=new v(".gallery a"),y=document.querySelector(".gallery-load"),b=e=>`
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
  `;function q(){g.innerHTML=""}function h(){m.classList.remove("hidden")}function p(){m.classList.add("hidden")}function f(e){const r=e.map(b).join("");g.insertAdjacentHTML("beforeend",r),S.refresh()}function L(){y.classList.remove("hidden")}function l(){y.classList.add("hidden")}const P=document.querySelector(".form"),$=document.querySelector(".gallery-load");let o=1,c="";P.addEventListener("submit",async e=>{e.preventDefault();const r=e.target.elements["search-text"].value.trim();if(r){c=r,o=1,l(),h(),q();try{const a=await u(c,o);if(a.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}f(a.hits),o++,o*15>=a.totalHits?(l(),i.info({message:"We're sorry, but you've reached the end of search results."})):L()}catch{i.error({message:"Something went wrong. Please try again."})}finally{p()}}});$.addEventListener("click",async()=>{l(),h();try{const e=await u(c,o);if(e.hits.length===0){l(),i.error({message:"Something went wrong. Please try again."});return}f(e.hits),o++;const a=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:a*2,behavior:"smooth"}),o*15>=e.totalHits?(l(),i.info({message:"We're sorry, but you've reached the end of search results."})):L()}catch{i.error({message:"Something went wrong. Please try again."})}finally{p()}});
//# sourceMappingURL=index.js.map
