import{S as m,i as a}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();let l;function y(o){const r=document.querySelector("#gallery");r.innerHTML=o.map(({webformatURL:s,largeImageURL:i,tags:e,likes:t,views:n,comments:d,downloads:f})=>`
  <a class="gallery-link" href="${i}">
    <img src="${s}" class="gallery-image" alt="${e}" loading="lazy"/>
        <div class="inform">
          <p><b>Likes</b>: ${t}</p>
          <p><b>Views</b>: ${n}</p>
          <p><b>Comments</b>: ${d}</p>
          <p><b>Downloads</b>: ${f}</p>
        </div>
  </a>
  `).join(""),l?l.refresh():l=new m(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250})}const h="44717269-26bd411e987b6b0139d6ec9c5";function p(o){return fetch(`https://pixabay.com/api/?key=${h}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).catch(r=>{a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})})}const u=document.querySelector(".form"),g=document.querySelector(".gallery"),c=document.querySelector(".loader");u.addEventListener("submit",b);function b(o){o.preventDefault();const r=o.currentTarget.elements.query.value.trim();if(!r){a.error({title:"Error",message:"❌ Please enter a search query"});return}g.innerHTML="",c.classList.remove("hidden"),p(r).then(s=>{s.hits.length===0?a.warning({title:"No Results",message:"Sorry, there are no images matching your search query."}):y(s.hits)}).catch(L).finally(()=>{c.classList.add("hidden"),u.reset()})}function L(o){a.error({title:"Error",message:"❌ No pictures found"})}
//# sourceMappingURL=commonHelpers.js.map
