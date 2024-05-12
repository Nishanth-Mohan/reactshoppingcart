import React, { useState } from 'react'
import NavBar from './Components/NavBar'
import Header from './Components/Header'
import Card from './Components/Card'
import Footer from './Components/Footer'

const App = () => {
  const [value, setValue]=useState(0);
  const data = [
    { 
      id:"1",
      image:"https://www.tennisplaza.com/prodimages/28850-DEFAULT-l.jpg",
      itemDetails:"Fancy Product",
      price:"$40.00 - $80.00",
    },
    { 
      id:"2",
      image:"https://th.bing.com/th/id/OIP.1oBuDJC8-4lZgBuEfZjW8QAAAA?rs=1&pid=ImgDetMain",
      itemDetails:"Special Item",
      price:"$20.00-$18.00",
    },
    { 
      id:"3",
      image:"https://theluxauthority.com/wp-content/uploads/2019/01/best-shoe-brands-for-women-lou.jpg",
      itemDetails:"Sale Item",
      price:"$50.00-$25.00",
    },
    { 
      id:"4",
      image:"https://th.bing.com/th/id/OIP.7NSATBA1qJnVeD2ukZmTfgAAAA?rs=1&pid=ImgDetMain",
      itemDetails:"Popular Item",
      price:"$40.00",
    },
    { 
      id:"5",
      image:"https://th.bing.com/th/id/OIP.TJJoRgOcCZMQoCmVKTrfcwAAAA?rs=1&pid=ImgDetMain",
      itemDetails:"Sale Item",
      price:"$50.00-$25.00",
    },
    { 
      id:"6",
      image:"https://i5.walmartimages.com/asr/da1f7ab9-c573-4013-aaa1-e5966be55216_1.ab1614fa64d1f8370ca3d619339b9aaf.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff",
      itemDetails:"Fancy Product",
      price:"$120.00 - $280.00",
    },
    { 
      id:"7",
      image:"https://www.tennisplaza.com/prodimages/28850-DEFAULT-l.jpg",
      itemDetails:"Special Item",
      price:"$20.00 $18.00",
    },
    { 
      id:"8",
      image:"https://th.bing.com/th/id/OIP.1oBuDJC8-4lZgBuEfZjW8QAAAA?rs=1&pid=ImgDetMain",
      itemDetails:"Popular Item",
      price:"$40.00",
    },
]
 
const [details, setDetails] = useState(data);

  return (
    <div>
      <NavBar value={value} setValue={setValue}/>
      <Header/>
      <Card details={details} setDetails={setDetails} value={value} setValue={setValue}/>
      <Footer/> 
    </div>
  )
}

export default App