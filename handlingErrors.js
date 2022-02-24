function getRootElement(){
    try{
        const rootElement = document.querySelector('.root');
        if(!rootElement) throw 'there is no element with class root'; 
    }
    catch(err){
        console.log(err);
    }
}
getRootElement()

