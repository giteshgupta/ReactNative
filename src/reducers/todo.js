import { ADD_TODO } from '../actions/actionTypes'

const initialState={
    data:[], // this is my todos array which is kept here and not in Addtodo file.
} 
const todos=(state=initialState,action)=>{
 switch(action.type){
      
      case ADD_TODO:{
          return{
              ...state,
              data:[
                  ...state.data,
                  {
                      text:action.text
                  }
              ]
          }

      }
      default: return state
  }
}
export default todos