import Modal from './Modal.js'
const text = 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment.'

const modalContainer1 = document.querySelector('.modal-container1');
const modalContainer2 = document.querySelector('.modal-container2');

const elements= [{
    type:'h1',
    description:'About',
    className:["title"]
    },
    {
        type:'p',
        description:text,
        className:["text"]
    },
    {
        type:'button',
        description:'submit1',
        className:["primary"]
    },
    {
        type:'button',
        description:'submit2',
        className:["primary", "secondary"]
    }
]

const elements2 = [
    {
        type:'h1',
        description:'About',
        className:["title"]
    },
    {
        type:'button',
        description:'submit2',
        className:["primary", "secondary"]
    }
]
const modal1 = new Modal(modalContainer1,elements)
const modal2 = new Modal(modalContainer2,elements2)

const btn1 = document.querySelector('.btn-1');
const btn2 = document.querySelector('.btn-2');
console.log(modal1)
btn1.addEventListener('click',()=>{
   modal1.isVisible ? modal1.hide() : modal1.open()
});

btn2.addEventListener('click',()=>{
    modal2.isVisible ? modal2.hide() : modal2.open()
})
