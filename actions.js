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