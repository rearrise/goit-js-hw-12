import{a as w,S,i as o}from"./assets/vendor-DuKcLXOA.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function a(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(t){if(t.ep)return;t.ep=!0;const s=a(t);fetch(t.href,s)}})();const v="56294783-65626070dc64ec0f139760a6f";async function u(e,r){return(await w.get("https://pixabay.com/api/",{params:{key:v,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15}})).data}const m=document.querySelector(".gallery"),g=document.querySelector(".loader"),x=new S(".gallery a"),y=document.querySelector(".gallery-load"),b=e=>`
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
  `;function q(){m.innerHTML=""}function h(){g.classList.remove("hidden")}function p(){g.classList.add("hidden")}function f(e){const r=e.map(b).join("");m.insertAdjacentHTML("beforeend",r),x.refresh()}function L(){y.classList.remove("hidden")}function i(){y.classList.add("hidden")}const P=document.querySelector(".form"),$=document.querySelector(".gallery-load");let n=1,d="";P.addEventListener("submit",async e=>{e.preventDefault();const r=e.target.elements["search-text"].value.trim();if(r){d=r,n=1,i(),h(),q();try{const a=await u(d,n);if(a.hits.length===0){o.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}f(a.hits),document.querySelectorAll(".gallery-item").length>=a.totalHits?(i(),o.info({message:"We're sorry, but you've reached the end of search results."})):L(),n++}catch{o.error({message:"Something went wrong. Please try again."})}finally{p()}}});$.addEventListener("click",async()=>{i(),h();try{const e=await u(d,n);if(e.hits.length===0){i(),o.error({message:"Something went wrong. Please try again."});return}f(e.hits);const r=document.querySelectorAll(".gallery-item").length,l=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:l*2,behavior:"smooth"}),r>=e.totalHits?(i(),o.info({message:"We're sorry, but you've reached the end of search results."})):L(),n++}catch{o.error({message:"Something went wrong. Please try again."})}finally{p()}});
//# sourceMappingURL=index.js.map
