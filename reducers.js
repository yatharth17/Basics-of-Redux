//(previousState,action)=>newState
const initialState={
    numofCakes :10
}
// It accepts state and action  and returns the newstate
const reducer =(state=initialState,action)=>{
    switch(action.type){
        case BUY_CAKE:return{
            ...state,  
            numofCakes:state.numofCakes-1;
        }
      default:return state  
    }

}