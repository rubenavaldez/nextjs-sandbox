import React, {useState , useEffect} from 'react';
import  Nav from '../../components/Nav/Nav';
import  Card from '../../components/Card/Card';

export default function Pets() {
  const [cats, setCats] = useState([]);

  const fetchCats = async () => {
    const response = await fetch("/api/cats");
    const data = await response.json();

    setCats(data);
  };

  useEffect(() => {
    fetchCats();
  }, []);


return (
  <div>
      <Nav />
      
      {cats.map((cat) =>{(
        <Card 
          name={cat.name}
          id={cat.id}
          email={cat.email}        
          phone={cat.phone}
        
        />
        
      )})}

   </div>
);

};
// https://www.youtube.com/watch?v=6HTs8HtZMt0 39:38