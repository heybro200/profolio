import { ACTIONS } from "./calculator"
export const OperationButton = ({dispatch, operation}) => {
    return (
        <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
            <div onClick={()=> dispatch({type: ACTIONS.CHOOSE_OPERATION, payload: {operation}})} class="rounded-full h-20 w-20 flex items-center bg-black justify-center shadow-lg border-2 border-white cursor-pointer hover:border-2 hover:border-gray-500 focus:outline-none">
                {operation}
            </div>
        </div>
    
    )
}

export default OperationButton