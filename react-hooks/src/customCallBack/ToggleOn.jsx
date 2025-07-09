import { useEffect } from "react"
const ToggleOn =() => {
    
    //this use effect will only run when the component unmounted or destroyed
    useEffect(() => {
        //Add your cleanup logic here
        return () => {
            console.log('Toggle On Component is unmounted')
        }
    })
    return (
        <>
       <img src={'https://www.pcacares.org/wp-content/uploads/2022/03/Lightbulb_illustration_iStock-1305892155-scaled-e1649281092972.jpg'} className="logo" alt="Vite logo" />
        Lights On
        </>
    )
}
export default ToggleOn