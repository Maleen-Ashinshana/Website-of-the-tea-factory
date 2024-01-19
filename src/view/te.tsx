import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../component/card/teaProducts';

interface Data{
  
    id:number,
    item_name:string,
    type:string,
    price:number,
    img:string
}
function Te(){
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/teaPowder/all');
                setData(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);
    return (
        <div>
            <h1>Data from Backend</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {data.map((r:Data,index:number) => (
                    <Card key={r.type}  image={r.img} price={r.price} title={r.item_name}/>
                ))}
            </div>
        </div>
    );

}
export default Te;