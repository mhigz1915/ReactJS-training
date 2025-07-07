import melonLogo from '/image/melon.jpg'
import mangoLogo from '/image/mango.jpg'
import grapesLogo from '/image/grapes.jpg'
import guyabanoLogo from '/image/guyabano.jpg'
import watermelonLogo from '/image/watermelon.jpg'
import tamarindLogo from '/image/tamarind.jpg'
const ReactList = () => {
    
    const fruitlist = [
        {
            id:1,
            logos: melonLogo,
            name:'Melon',
            price:'Php 200.00',
        },
        {
            id:2,
            logos: mangoLogo,
            name:'Mango',
            price:'Php 150.00',
        },
       {
            id:3,
            logos: grapesLogo,
            name:'Grapes',
            price:'Php 300.00',
       },
       {
            id:4,
            logos: guyabanoLogo,
            name:'Guyabano',
            price:'Php 200.00',
       },
       {
            id:5,
            logos: watermelonLogo,
            name:'WaterMelon',
            price:'Php 250.00',
       },
       {
            id:6,
            logos: tamarindLogo,
            name:'Tamarind',
            price:'Php 100.00',
       }
        ]
    return (
        <>
       <h3>Fruit List Available</h3>

       
        
           <ol>
        {
            fruitlist.map(fruit=> (
                <li key={fruit.id}>
                <p> <img src={fruit.logos} className="logo" alt="Vite logo" /> </p>
                <p> Fruit Name: {fruit.name} </p>
                <p> Price per Kilo: {fruit.price} </p>
                </li>
            ))
        }
 

        </ol>     
        </>
    )
}
export default ReactList;