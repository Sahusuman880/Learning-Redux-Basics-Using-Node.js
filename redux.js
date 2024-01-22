const redux=require ('redux');
const InitialValue={
  counter:0
}
function reducer(store=InitialValue,action){
  let newstore=store;
  if(action.type==="increment"){
    newstore={counter:store.counter+1}
  }
  if(action.type==="decrement"){
    newstore={counter:store.counter-1};
  }
  if(action.type==="addition"){
    newstore={counter:store.counter+action.payload}
  }
  return newstore ;
}
const store =redux.createStore(reducer);

const subscriber=()=>{
const state=store.getState();
console.log(state);
}
store.subscribe(subscriber);

store.dispatch({type:"increment"});
store.dispatch({type:"increment"});
store.dispatch({type:"increment"});
store.dispatch({type:"increment"});
store.dispatch({type:"decrement"});
store.dispatch({type:"increment"});
store.dispatch({type:"addition",payload:7});
store.dispatch({type:"decrement"});