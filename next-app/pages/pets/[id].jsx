import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

export default function Cat() {
    const [cat, setCat] = useState(null)
    const router = useRouter()
    const {id} = router.query 
    const fetchCat = async () =>{
        const response = await fetch(`/api/cats/${id}`)
        const data = await response.json()
        console.log(data)
        setCat(data)
  }
  useEffect(()=>{
    // async not working, added timeout 3 sec
    setTimeout(fetchCat(), 3000)
  },[])
    return (
    <div>
        {cat && (
            <div className='continer mt-5 flex'>
                <img src={cat.image.url} alt={cat.image.alt} />
                <div className='mx-5'>
                    <h1>{cat.name}</h1>
                    <p>{cat.description}</p>
                </div>
            </div>
        )}
    </div>
  )
}
