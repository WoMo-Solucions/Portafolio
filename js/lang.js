
let dict = {};
const elements = ()=> document.querySelectorAll('[data-i18n]');

export async function i18nInit(lang='es'){
  await setLang(lang);
}
export async function setLang(lang){
  const res = await fetch(`./i18n/${lang}.json`);
  dict = await res.json();
  apply();
}
export function t(key){ return dict[key] || key; }
function apply(){
  elements().forEach(el => { const key=el.getAttribute('data-i18n'); if(key) el.textContent = t(key); });
}
