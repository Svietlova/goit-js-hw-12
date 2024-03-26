import{i as f,a as h,S as b}from"./assets/vendor-b42c18af.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();function y(s){return s.hits.map(e=>`<div class="gallery-item">
            <a class="gallery-link" href="${e.largeImageURL}">
                <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}" />
            </a>
            <div class="gallery-item-info">
                <p class="gallery-item-info-par">
                    <span class="gallery-item-info-span">Likes: <span>${e.likes}</span>
                    </span>    
                </p>
                <p class="gallery-item-info-par">
                    <span class="gallery-item-info-span">Views: <span>${e.views}</span>
                    </span>    
                </p>
                <p class="gallery-item-info-par">
                    <span class="gallery-item-info-span">Comments: <span>${e.comments}</span>
                    </span>    
                </p>
                <p class="gallery-item-info-par">
                    <span class="gallery-item-info-span">Downloads: <span>${e.downloads}</span>
                    </span>    
                </p>
            </div>
        </div>`).join("")}function L(){f.info({timeout:3e3,position:"topRight",message:"We're sorry, but you've reached the end of search results."})}function v(){f.info({timeout:3e3,position:"topRight",message:"The search query can not be epty!"})}function w(){f.error({timeout:3e3,position:"topRight",message:"There are no images matching your search query. Please, enter something else!"})}async function g(s,e){const n="42725994-1a6cd5432fa5183da0eabdd43",o="https://pixabay.com/api/";return(await h.get(o,{params:{key:n,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15}})).data}const m=new b(".gallery a",{nav:!0,captions:!0,captionsData:"alt",captionDelay:150}),c=document.querySelector(".search-form"),a=document.querySelector(".gallery"),d=document.querySelector(".loader"),i=document.querySelector(".load-btn");let l="",p;c.addEventListener("submit",M);i.addEventListener("click",q);async function M(s){if(s.preventDefault(),p=1,a.innerHTML="",l=c.elements.searchWord.value.trim(),i.style.display="block",l===""){v(),a.innerHTML="",i.style.display="none",c.reset();return}d.style.display="block";try{const e=await g(l,p).then(n=>{const o=y(n);if(n.hits.length===0){w(),i.style.display="none",d.style.display="none";return}a.insertAdjacentHTML("beforeend",o),m.refresh(),d.style.display="none"})}catch(e){console.error("Error:",e)}c.reset()}async function q(){p+=1;try{const s=await g(l,p).then(e=>{const n=y(e);a.insertAdjacentHTML("beforeend",n),m.refresh();const o=a.getBoundingClientRect().height;window.scrollBy({top:2*o,behavior:"smooth"}),e.hits.length<15&&(i.style.display="none",L(),m.refresh())})}catch(s){console.error("Error:",s)}}
//# sourceMappingURL=commonHelpers.js.map
