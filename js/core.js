
export const $ = sel => document.querySelector(sel);
export function setText(sel, text){ const el=$(sel); if(el) el.textContent=text; }
export async function api(path, method='GET', body){
  const r = await fetch(path, {
    method,
    headers: { 'Content-Type':'application/json', 'X-Client-Fingerprint':'web' },
    body: method==='GET'?undefined:JSON.stringify(body||{})
  });
  if(!r.ok){ throw new Error(await r.text()); }
  const ct = r.headers.get('content-type') || '';
  return ct.includes('application/json') ? r.json() : r.text();
}
export function toast(msg){
  const d = document.createElement('div');
  d.textContent = msg;
  d.style.position='fixed'; d.style.right='20px'; d.style.bottom='20px';
  d.style.background='#333'; d.style.color='#fff'; d.style.padding='10px 14px'; d.style.borderRadius='8px';
  document.body.appendChild(d);
  setTimeout(()=>d.remove(), 2200);
}
