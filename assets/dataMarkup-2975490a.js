const d={form:document.querySelector("#task-form"),taskEl:document.querySelector("#task-list"),favoriteList:document.querySelector("#favorite-list")};function n(t){return JSON.parse(localStorage.getItem(t))}function i(t,e){localStorage.setItem(t,JSON.stringify(e))}const u="tasks";function f(t,e){t.addEventListener("click",o);function o(a){if(!a.target.classList.contains("deleteBtn"))return;console.log(a.target.parentNode.id);const r=a.target.parentNode.id,s=n(e).filter(c=>c.id!==r);i(e,s),a.target.parentNode.remove()}}function g({TASK_KEY:t,container:e}){console.log(t,e);const o=n(t);if(!o)return;const a=o.map(r=>`<li id=${r.id}> ${r.task} <button class="deleteBtn"  type='button'>x</button></li >`).join("");e.insertAdjacentHTML("beforeend",a)}export{u as T,f as a,n as g,g as l,d as r,i as s};
//# sourceMappingURL=dataMarkup-2975490a.js.map