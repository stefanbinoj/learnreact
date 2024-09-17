import noteContext from "./noteContext";

const noteState = (props) =>{
    const state={
        name:"stefan",
        class:"cs3c"
    }

    return (
        <noteContext.Provider value={state}>
            {props.children}
        </noteContext.Provider>
    )
}
export default noteState;