
export class Chatbot{
  constructor(logSelector, onSend){
    this.log = document.querySelector(logSelector);
    this.onSend = onSend;
  }
  append(author, text){
    const p = document.createElement('div');
    p.className = 'msg '+(author==='me'?'me':'bot');
    p.textContent = (author==='me'?'Yo: ':'Bot: ') + text;
    this.log.appendChild(p);
    this.log.scrollTop = this.log.scrollHeight;
  }
  async send(text, lang='es'){
    if(!text) return;
    this.append('me', text);
    try{
      const reply = await this.onSend(text, lang);
      this.append('bot', reply || '...');
    }catch(e){
      this.append('bot', 'Error de chat');
    }
  }
}
