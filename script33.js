function wrapperFunc(){
    let counter = 1;
    function innerFunc(){
        if(counter === 1){
            console.log('Function called 1st time.');
        }else if(counter >= 1){
            console.log(`Mai ${counter-1} baar already call ho chuka hu..`)
        }
        counter += 1
    }
    return innerFunc;
} 

const getFunVal = wrapperFunc();
getFunVal();
getFunVal();
