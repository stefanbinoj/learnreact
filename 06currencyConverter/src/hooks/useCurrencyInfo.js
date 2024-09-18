import {useState,useEffect} from 'react'

let options={
    method:"GET",
    
}

function useCurrencyInfo (curr){
    const [data,setData]=useState({})
    let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${curr}.json`
    console.log(url)

    useEffect(()=>{
        fetch(url)
        .then((res)=>{
            console.log(res)
            return res.json()})
        .then((jsonData)=>{
            setData(jsonData.curr)
            console.log(data);


        })
         

    },[curr])
      

    console.log(data)
    return data
}

export default useCurrencyInfo