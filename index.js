import{a as L,S as x,i as c}from"./assets/vendor-4sM5MW40.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(t){if(t.ep)return;t.ep=!0;const n=o(t);fetch(t.href,n)}})();const v="https://pixabay.com/api/",S="52768941-bbaed3abbd2034f32756ad176",w="photo",q="horizontal",O="true";function P(r,e){return L.get(v,{params:{key:S,q:r,image_type:w,orientation:q,safesearch:O,per_page:21,page:e}}).then(o=>Promise.resolve(o.data.hits))}const h=document.querySelector(".loader"),g=document.querySelector(".gallery");let $=new x(".gallery li a",{captionsData:"alt",captionscaptionDelay:250});function I(r){g.innerHTML=r.map(e=>`<li class="gallery-item">
        <a href=${e.largeImageURL}> <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}">
          <ul class="image-stats-list">
            <li>
              <h3>Likes</h3>
              <p>${e.likes}</p>
            </li>
            <li>
              <h3>Views</h3>
              <p>${e.views}</p>
            </li>
            <li>
              <h3>Comments</h3>
              <p>${e.comments}</p>
            </li>
            <li>
              <h3>Downloads</h3>
              <p>${e.downloads}</p>
            </li>
          </ul>

        </a>
      </li>`).join(""),$.refresh()}function T(){g.innerHTML=""}function C(){h.style.display="inline-block"}function f(){h.style.display="none"}const l=document.querySelector(".form"),p=l.querySelector(".page-scroll-button-prev"),u=l.querySelector(".page-scroll-button-next"),b=l.querySelector(".page-number");let i=1,d="";function m(){p.style.display="none",u.style.display="none",b.textContent=""}function y(r,e){T(),C(),P(r,e).then(o=>{if(f(),o.length===0){c.error({color:"",title:"Oops!",message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter"}),m();return}I(o),b.textContent=`Page ${e}`}).catch(o=>{c.error({color:"",title:"Oops!There seems to be an error!",message:`${o}`,position:"topCenter"}),f(),m()})}l.addEventListener("submit",r=>{r.preventDefault();const e=r.target,o=e.elements["search-text"].value.trim();if(o===""){c.error({title:"Error!",message:"The search field cannot be empty!",position:"topCenter"}),window.alert("");return}const s=o.split(" ").join("+");e.reset(),y(s,1),d=s,i=1,p.style.display="inline-block",u.style.display="inline-block"});p.addEventListener("click",r=>{i<=1||(y(d,i-1),i-=1)});u.addEventListener("click",r=>{y(d,i+1),i+=1});
//# sourceMappingURL=index.js.map
