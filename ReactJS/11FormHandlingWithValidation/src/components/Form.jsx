import React,{useState} from 'react'

function Form() {
    const [Name, setName] = useState('')
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [ContactInfo, setContactInfo] = useState(0)
    const [Error, setError] = useState({})

    function validateForm() {
        let error = {};
        if(!Name){
            error.Name = "Name is required";
        }
        if(!Email){
            error.Email = "Email is required";
        }
        if(!Password){
            error.Password = "Password is required";
        }
        if(!ContactInfo){
            error.ContactInfo = "Contact Info is required";
        }

        setError(error);
        return Object.keys(error) == 0;
    }

    const handleSubmit=(event) => {
        event.preventDefault();
        if(!validateForm()){
            return;
        }
        localStorage.setItem('Name', Name);
        localStorage.setItem('Email', Email);
        localStorage.setItem('Password', Password);
        localStorage.setItem('ContactInfo', ContactInfo);
        alert('Form submitted successfully!');
    }

  return (
    <>
    <form method="Post" onSubmit={handleSubmit}>
      <input type="text" name="Name" placeholder="Enter your name" value={Name} onChange={(e) => setName(e.target.value)} />

      <br />
      {Error.Name && <p style={{color:'red'}}>{Error.Name}</p>}

      <br />
      <input type="email" name="Email" placeholder="Enter your email" value={Email} onChange={(e) => setEmail(e.target.value)} />
      <br />
      {Error.Email && <p style={{color:'red'}}>{Error.Email}</p>}
      <br />
      <input type="password" name="Password" id="" placeholder="Enter your password" value={Password} onChange={(e) => setPassword(e.target.value)} />
      <br />
      {Error.Password && <p style={{color:'red'}}>{Error.Password}</p>}
        <br />
      <input type="number" name="ContactInfo" id="" placeholder="Enter your contact info" value={ContactInfo} onChange={(e) => setContactInfo(e.target.value)} />
      <br />
      {Error.ContactInfo && <p style={{color:'red'}}>{Error.ContactInfo}</p>}
        <br />
      <button type="submit">Add User</button>
    </form>
    </>
  )
} 

export default Form;