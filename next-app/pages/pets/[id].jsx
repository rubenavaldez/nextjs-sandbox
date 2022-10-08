import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Nav from '../../components/Nav/Nav'
import DefaultLayout from '../../layouts/Default'
export default function Cat() {
    const [cat, setCat] = useState(null)
    const router = useRouter()
    const {id} = router.query 
    const fetchCat = async () =>{
        const response = await fetch(`/api/cats/${id}`)
        
        const data = await response.json()
        // console.log(data)
        setCat(data)
  }
  useEffect(()=>{
    // async not working, added timeout 3 sec
    fetchCat()
  },[])
    return (
    <div>
      {/* <Nav/> */}
      <DefaultLayout>
        {cat && (
            <div className='continer mt-5 flex'>
                <img src={cat.image.url} alt={cat.image.alt} />
                <div className='mx-5'>
                    <h1>{cat.name}</h1>
                    <p>{cat.description}</p>
                </div>
            </div>
        )}
        </DefaultLayout>
    </div>
  )
}
