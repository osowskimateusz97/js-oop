const draggable = (()=>{
    let dragged = null;

    const dragStart = e =>{
        dragged = e.target;
        dragged.style.opacity= 0.7;
    }

    const drop = e => {
        e.preventDefault();
        //replace elements
        const prevContent = dragged.textContent;
        dragged.textContent = e.target.textContent;
        e.target.textContent = prevContent;
        runValidation(e.target) && e.target.classList.remove('draggable');

    };
    const runValidation = dropTarget => dropTarget.nodeName === 'TD';
    
    const dragOver = e =>{
        e.preventDefault();
    }
    const dragEnter = (e) => {
        const dropTarget = e.target;
        runValidation(dropTarget) && dropTarget.classList.add('draggable');
    };

    const dragEnd = e => {
        dragged.style.opacity = 1;
    }

    const dragLeave = e=>{
        const dropTarget = e.target;
        runValidation(dropTarget) && dropTarget.classList.remove('draggable');
    }

    const init = (target) =>{
        target.addEventListener('dragstart',dragStart);
        target.addEventListener('dragend',dragEnd);
        target.addEventListener('dragover',dragOver);
        target.addEventListener('dragenter',dragEnter);
        target.addEventListener('drop',drop);
        target.addEventListener('dragleave',dragLeave)


    }
    return {
        init
    }
})()


const table = (()=>{
    let table = null;
    let tbody = null;
    const ROWS_NUM = 100;
    const COLUMN_NUM = 100;

    const createRowAndCells = (type,columnNum,index)=>{
        const tr = document.createElement(type);
        Array.from({length:columnNum},(_,i)=>{
            const td = document.createElement('td');    
            td.draggable="true";
            td.textContent =  i + 1 + (index * COLUMN_NUM);
            tr.appendChild(td);
        });
        return tr;
    }

    const addDragging = () => draggable.init(table);

    const initTableInfo = (selectedTable) =>{
        table = selectedTable;
        tbody = table.querySelector('tbody');
    }

    const create = (selectedTable, rows = ROWS_NUM, column = COLUMN_NUM) => {
        initTableInfo(selectedTable);
        Array.from({length:rows},(_,i)=>{
            const element = createRowAndCells('tr',column,i);
            tbody.appendChild(element);
        });
        addDragging();
    }
    const getTable = () => table;

    return {
        create,
        getTable,
    }
})();

const selectedTable = document.querySelector('table');
table.create(selectedTable);
const generatedTable = table.getTable();

// ----- EVENT DELEGATION -----

// generatedTable.addEventListener('click',e=>{
//     const { target } = e;
//     // console.log(target);
// })



// const allTd = generatedTable.querySelectorAll('td');
// allTd.forEach(td=>{
//     td.addEventListener('click',e=>{
//         const { target } = e;
//         console.log(target);
//     })
// })