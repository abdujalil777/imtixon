// const run = []
// function Reduxx(state = run, action) {
//     if (action.type === "nimadir") {
//         let shop = [...state]
//         shop.push(action.payload)
//         console.log(shop);
//         return state = shop
//     }
//     return state
// }

// export {Reduxx}


const obuv = []


function initObuv(state = obuv , action){
    if (action.type === 'nimadir'){
        let qiymati = ''
        let son = 0
        let current = [...state]

        for(let i=0; i< current.length; i++){
            if(current[i].name === action.payload.name){
              
                son += current
                console.log(son);
                qiymati = i
            }
        }
        if(son>0){
            current[qiymati] = {
                ...current[qiymati],
                count: current[qiymati].count + 1
            }
        }
        else{
            current.push({
                img:action.payload.url,
                name:action.payload.name,
                narxii: action.payload.narxi,
                count:1
            })
        }
        return state = current
    }
  
    if(action.type == 'plus'){
        let current = [...state]
        current[action.one_joyi] = {
            ...current[action.one_joyi],
            count: current[action.one_joyi].count + 1
        }
        return state = current
    }


    if(action.type == 'minus'){
        let current = [...state]
       if( current[action.one_joyi].count>1){
            current[action.one_joyi] ={
                ...current[action.one_joyi],
                count: current[action.one_joyi].count - 1
            }
        }else{
            current.splice(action.one_joyi,1)
        }
        return state = current
    }
 
    return state
}
export default  initObuv 