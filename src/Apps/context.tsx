import { JSX, createContext, useContext } from "solid-js";
import { createStore } from "solid-js/store";

export const AppContext = createContext()

export function ContextProvider(props: { children: number | boolean | Node | JSX.ArrayElement | (string & {}) | null | undefined; }){
    const [newReport,setNewReport] = createStore([{}])
    return <AppContext.Provider value={{newReport,setNewReport}}>{props.children}</AppContext.Provider>
}

export const useApp = () => {
    return useContext(AppContext)
}
