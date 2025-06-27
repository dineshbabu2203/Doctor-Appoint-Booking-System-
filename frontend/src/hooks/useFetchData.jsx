
import { token } from '../config'
import { useEffect, useState } from 'react'


 const useFetchData = (url) => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    console.log('Fetching:', url)

 
    useEffect(() => {
        if (!url) return;
        // const token = localStorage.getItem('token') || ''
        const fetchData = async () => {
            setLoading(true)

            try {
                const res = await fetch(url, {
                    headers: {"Content-Type" : "application/json" , Authorization: `Bearer ${token}` }
                })

                
                
                const result = await res.json()

                console.log(result)

                if(!res.ok){
                    throw new Error(result.message + '')
                }
               
                  
                setData(result.data || [])
               
                setLoading(false)
            } catch (err) {     
                setLoading(false)
                setError(err.message)

            }
            console.log(data)
        }
        
        fetchData()
        
        
    }, [url])

   
    console.log(data)
    return {data , loading , error};
    
}

export default useFetchData
