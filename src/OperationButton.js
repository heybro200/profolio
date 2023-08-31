import { ACTIONS } from "./calculator"
export const OperationButton = ({dispatch, operation}, dark) => {
    return (
        <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
            <div onClick={()=> dispatch({type: ACTIONS.CHOOSE_OPERATION, payload: {operation}})} class="rounded-full h-20 w-20 flex items-center dark:bg-black bg-gray-600 justify-center shadow-lg border-2 border-white cursor-pointer hover:border-2 hover:border-gray-500 focus:outline-none">
                {operation}
            </div>
        </div>
    
    )
}

export default OperationButton