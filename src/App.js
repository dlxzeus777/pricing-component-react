import React from 'react'
import Header from './Header'
import Cards from './Cards'
import './style.css'
import './media.css'

const App = () => {

    const [slider, setSlider] = React.useState(JSON.parse(localStorage.getItem('options') || true))
    
    function toggleSlider() {
        setSlider(prevMode => !prevMode)
    }
    console.log(slider)

    React.useEffect(() => {
      localStorage.setItem('options', JSON.stringify(slider));
    }, [slider]);


  return (
    <div>
        <Header
            event={toggleSlider}
            toggle={slider}
        />
        <Cards 
          prices={slider}
        />
    </div>
  )
}

export default App