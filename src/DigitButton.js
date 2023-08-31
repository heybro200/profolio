import { ACTIONS } from "./calculator"
export const DigitButton = ({dispatch, digit}, dark) => {
    return (
        <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
            <div onClick={()=> dispatch({type: ACTIONS.ADD_DIGIT, payload: { digit }})} class="rounded-full h-20 w-20 flex items-center dark:bg-black bg-gray-600 justify-center shadow-lg border-2 border-white cursor-pointer hover:border-2 hover:border-orange-400 focus:outline-none">
                {digit}
            </div>
        </div>
    
    )
}

export default DigitButton