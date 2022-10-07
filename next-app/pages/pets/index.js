import React, {useState , useEffect} from 'react';
import  Nav from '../../components/Nav/Nav';
import  Card from '../../components/Card/Card';

export default function Pets() {
  const [cats, setCats] = useState([]);

  const fetchCats = async () => {
    const response = await fetch("/api/cats");
    const data = await response.json();
   
    setCats([...cats].concat(data));
    //  console.log(data)
     console.log("cats",cats)
  };

  useEffect(() => {
    fetchCats();
  }, []);


return (
  <>
  <div className='container mt-5 '>
      <div style={{display:'flex', flexWrap:"wrap",}}>
      pet page
     
      {cats.map((cat)=>{
        return(
          <Card 
            name={cat.name}
            id={cat.id}
            phone={cat.phone}
            image={cat.image}
            email={cat.email}
          
          
          
          />
        )

      })}
</div>
   </div>
   </>
);

};
// https://www.youtube.com/watch?v=6HTs8HtZMt0 46.06