import { useState } from "react";
const Form = () => {
  const[formData,setFormData] = useState({
        firstName:'', 
    lastName:''})
   const handleChange = event => {
   // console.log(formData)
   const { name, value} = event.target; 
   setFormData (prevState => ({
    ...prevState,
    [name]: value
   }))
} 

return (
<>
<form>
<label>Student No. : </label>
<input type="text" pattern="^[0-9\b]+$" name="studentNo" placeholder="Student No."></input>
<br/>
<label>First Name : </label>
<input type="text" name="firstName" value={formData.firstName} placeholder="First Name"    onChange ={handleChange}></input> 
<br/>
<label>Last Name : </label>
<input type="text" name="lastName" value={formData.lastName} placeholder="Last Name"    onChange ={handleChange}></input>

<br/>
<label>Course Chosen : </label>
<input type="text" name="sycourse" value={formData.course} placeholder="Course Chosen"    onChange ={handleChange}></input>

 
</form>

</>
)

}
export default Form;