import{i as m,S as u}from"./assets/vendor-7659544d.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&t(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function f(a){return a.hits.map(e=>`<div class="gallery-item">
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
        </div>`).join("")}const d="42725994-1a6cd5432fa5183da0eabdd43",g="https://pixabay.com/api/",c=document.querySelector(".loader");function h(a){const e={key:d,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0},n=new URLSearchParams(e);return c.style.display="block",fetch(`${g}?${n}`).then(t=>{if(!t.ok)throw new Error(`Error! Status: ${t.status}`);return t.json()}).then(t=>(c.style.display="none",t.hits.length===0&&m.error({timeout:3e3,position:"topRight",message:"There are no images matching your search query. Please, enter something else!"}),t)).catch(t=>{console.error("Error fetching data!",t)})}const y=new u(".gallery a",{nav:!0,captions:!0,captionsData:"alt",captionDelay:150}),i=document.querySelector(".search-form"),l=document.querySelector(".gallery");let p="";i.addEventListener("submit",L);function L(a){a.preventDefault(),l.innerHTML="",p=i.elements.searchWord.value.trim(),h(p).then(e=>{const n=f(e);l.insertAdjacentHTML("beforeend",n),y.refresh()}).catch(e=>{console.error("Error:",e)}),i.reset()}
//# sourceMappingURL=commonHelpers.js.map
