//Basic structure of an Action
const BUY_CAKE= 'BUY_CAKE'
//An action always must have a type property
{
    type:BUY_CAKE;
    info: "First redux action"
}

//An action creater
function buyCake(){
    return{
        type:BUY_CAKE,
        info: "First Redux Action"
    }

}
//(previousState,action)=>newState
const initialState={
    numofCakes :10
}
// It accepts state and action  and returns the newstate
const reducer =(state=initialState,action)=>{
    switch(action.type){
        case BUY_CAKE:return{
            ...state,  
            numofCakes:state.numofCakes-1
        }
      default:return state  
    }

}
const redux=require('redux')
const createStore=redux.createStore


const store=createStore(reducer)
console.log('Initial state',store.getState())
const unsubscribe= store.subscribe(()=>console.log('Updated state',store.getState()))
store.dispatch(buyCake())
unsubscribe();