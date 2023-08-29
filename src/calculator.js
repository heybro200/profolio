import { useReducer } from "react"
import DigitButton from "./DigitButton"
import OperationButton from "./OperationButton"

export const ACTIONS = {
  ADD_DIGIT: "add-digit",
  CHOOSE_OPERATION: "choose-operation",
  CLEAR: "clear",
  DELETE_DIGIT: "delete-digit",
  EVALUATE: "evaluate",
}
const reducer = (state, {type, payload}) => {
  switch(type) {
    case ACTIONS.ADD_DIGIT:
      if (state.overwrite){
        return {...state, currentDigit: payload.digit, overwrite:false}
      }
      if (payload.digit == "0" && state.currentDigit == "0") return state
      if (payload.digit == "." && state.currentDigit.includes(".")) return state
      return {...state, currentDigit: `${state.currentDigit || "" }${payload.digit}`}
    case ACTIONS.CLEAR:
      return {}
    case ACTIONS.CHOOSE_OPERATION:
      if(state.currentDigit == null && state.previousDigit == null) return state
      console.log(state)
      if(state.currentDigit == null) {
        return {...state, operation: payload.operation}
      }
      if(state.previousDigit == null) {
        return {...state, operation: payload.operation, previousDigit: state.currentDigit, currentDigit: null}
      }
      return {...state, previousDigit: null, currentDigit: evaluate(state), operation: null, overwrite:true}
    case ACTIONS.EVALUATE:
      if (state.operation == null || state.currentDigit == null || state.previousDigit == null) return state
      return {...state, currentDigit: evaluate(state), previousDigit: null, operation: null, overwrite: true}
    }
  }
  const evaluate = ({currentDigit, previousDigit, operation}) => {
    const pre = parseFloat(previousDigit)
    const cur = parseFloat(currentDigit)
    if (isNaN(pre) || isNaN(cur)) return ""
    let computation = ""
    switch(operation) {
      case "+":
        computation = pre + cur
        break
      case "-": 
        computation = pre - cur
        break
      case "x":
        computation = pre * cur
        break
      case "÷":
        computation = pre / cur
        break
      case "%":
        computation = pre % cur
        break
      }
    return computation.toString()
  }
export const Calculator = () => {
  
    const [{currentDigit, previousDigit, operation, overwrite}, dispatch] = useReducer(reducer, {})
    console.log(operation)
    return (
  <div class="mx-auto overflow-hidden mt-10 shadow-lg mb-2 bg-black shadow-lg border md:w-2/6 sm:w-4/6 max-w-md">
        <div>
          <div class="p-5 text-white text-center text-3xl bg-black"><span class="text-orange-500">Calcu</span>lator</div>
          <div class="pt-16 p-5 pb-0 text-white text-right text-3xl bg-gray-800"> {previousDigit? previousDigit : currentDigit} {operation} {previousDigit ? currentDigit : ""} </div>
          <div class="p-5 text-right text-3xl bg-gray-800 text-orange-500 max-xl:">{overwrite ? currentDigit : ""}</div>
          
          
    <div class="flex items-stretch bg-black h-24">
        <OperationButton operation="%" dispatch={dispatch}/>
        <OperationButton operation="(" dispatch={dispatch}/>
        <OperationButton operation=")" dispatch={dispatch}/>
        <OperationButton operation="÷" dispatch={dispatch}/>
    </div>
      
    <div class="flex items-stretch bg-black h-24">
        <DigitButton digit="7" dispatch={dispatch}/>
        <DigitButton digit="8" dispatch={dispatch}/>
        <DigitButton digit="9" dispatch={dispatch}/>
        <OperationButton operation="x" dispatch={dispatch}/>
    </div>
        
    <div class="flex items-stretch bg-black h-24">
        <DigitButton digit="4" dispatch={dispatch}/>
        <DigitButton digit="5" dispatch={dispatch}/>
        <DigitButton digit="6" dispatch={dispatch}/>
        <OperationButton operation="-" dispatch={dispatch}/>
    </div>
        
    <div class="flex items-stretch bg-black h-24">
        <DigitButton digit="1" dispatch={dispatch}/>
        <DigitButton digit="2" dispatch={dispatch}/>
        <DigitButton digit="3" dispatch={dispatch}/>
        <OperationButton operation="+" dispatch={dispatch}/>
    </div>
        

    <div class="flex items-stretch bg-black h-24 mb-4">
        <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
          <div onClick={()=> dispatch({type: ACTIONS.CLEAR})} class="rounded-full h-20 w-20 flex items-center bg-black justify-center shadow-lg border-2 border-white cursor-pointer hover:border-2 hover:border-gray-500 focus:outline-none">
              AC
          </div>
        </div>
        <DigitButton digit="0" dispatch={dispatch}/>
        <DigitButton digit="." dispatch={dispatch}/>
        <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
          <div onClick={()=> dispatch({type: ACTIONS.EVALUATE})} class="rounded-full h-20 w-20 flex items-center bg-black justify-center shadow-lg border-2 border-white cursor-pointer hover:border-2 hover:border-gray-500 focus:outline-none bg-orange-500">
              =
          </div>
        </div>
    </div>    
      </div>
  </div>
  )

        
        
         
}

export default Calculator