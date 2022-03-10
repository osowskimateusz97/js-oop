import { MockGui } from './Gui.js'

const form = document.getElementById('shipmentForm')
const responseContainer = document.getElementById('response')
const gui = new MockGui(form); 
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const res = gui.send();
    Object.keys(res).forEach(key=>{
        const p = document.createElement('p');
        p.textContent = `${key} : ${res[key]}`;
        responseContainer.appendChild(p);
    })
})
