"use client"
const { createContext, useState, useReducer, useContext,  useCallback } = require("react"); 
import children from "@/utils/childrendata/childdata";
const initialstate={
        state:{
            kids:children,
            error:'',
            msg:''},
        ADD:(data)=>{},
        REMOVE:(data)=>{},
        SETERROR:(message)=>{}
         
}


export const ChildContext=createContext(initialstate)
export const Globalcontext = ({children}) => {
    const [state, setstate]=useState(initialstate.state)
    const ADD = (data) => {
        const {firstname,lastname,gender,adopted}= data
        console.log(data)
        if(firstname === '' || lastname==="" || gender===''|| adopted===''){``
            setstate({...state, error:'please provide all the details'})
            console.log(state)
            return
        }
        setstate({...state, kids:[...state.kids, data] })
    }
    const REMOVE = (data) => {
        console.log(data)
        const filteredkids = state.kids.filter(child =>
            child.firstname !== data
            )
        setstate({...state, kids:filteredkids})
        console.log(filteredkids)
    } 
    const SETERROR = (message) => {
        console.log(message)
        setstate({...state, error:message})
    }
    return  <ChildContext.Provider value={{state, ADD, REMOVE, SETERROR}}>
              {children}
            </ChildContext.Provider>
}

export const useGlobalcontext=()=>{
    const {state,ADD,REMOVE, SETERROR}=useContext(ChildContext)
    return {state,ADD,REMOVE, SETERROR}
}
