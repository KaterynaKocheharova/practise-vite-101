import{g as r,T as e,s as i,r as s,l,a as c}from"./assets/dataMarkup-d11a45c6.js";import{n as u}from"./assets/vendor-342e672c.js";function m(t,a){const o=r(e)||[],n={task:a,id:t};o.push(n),i(e,o)}function f(t){const a=u();s.taskEl.insertAdjacentHTML("beforeend",`<li id=${a}>${t}<button class="deleteBtn" type='button'>x</button></li>`),m(a,t)}l({container:s.taskEl,TASK_KEY:e});c(s.taskEl,e);s.form.addEventListener("submit",d);function d(t){t.preventDefault();const a=t.currentTarget.elements.taskName.value.trim();a&&(f(a),console.log(a),t.currentTarget.reset())}
//# sourceMappingURL=commonHelpers.js.map
