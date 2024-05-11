import {useState} from 'react';
import './form.css';

function Form() {

    const [user, setUser] = useState({
        name:'Afrih',
        age:23,
        gender: "Male",
        isMarried:true,
        country: 'Sri Lanks',
        bio:"Your bio is here",
    })

    function changeHandler(e) {
        const name = e.target.name;
        //console.log(name);
        const value = e.target.type==="checkbox"? e.target.checked: e.target.value;
        setUser({...user, [name]: value});
    }

  return (
    <>
    <h1>Form</h1>
    <div className='table-div'>
        <table>
            <tbody>
                <tr>
                    <td>Name</td>
                    <td>{user.name}</td>
                </tr>

                <tr>
                    <td>Age</td>
                    <td>{user.age}</td>
                </tr>

                <tr>
                    <td>Gender</td>
                    <td>{user.gender}</td>
                </tr>

                <tr>
                    <td>Maritial Status</td>
                    <td>{user.isMarried? "Married": "Not Married"}</td>
                </tr>

                <tr>
                    <td>Country</td>
                    <td>{user.country}</td>
                </tr>

                <tr>
                    <td>Bio</td>
                    <td>{user.bio}</td>
                </tr>
            </tbody>
            
        </table>
        </div>

        <div className='form-div'>
        <form>
            <input type='text' placeholder='Full Name' value={user.name} name='name' onChange={changeHandler}/>
            <input type='number' placeholder='Current Age' value={user.age} name='age' onChange={changeHandler} />
            <div className="gender">
                <label htmlFor='male'>
                    <input type='radio' name='gender' id='male' checked={user.gender==='Male'} value='Male' onChange={changeHandler} />
                    Male
                </label>

                <label htmlFor='female'>
                    <input type='radio' name='gender' onChange={changeHandler} id='female' checked={user.gender==='Female'} value='Female'/>
                    Female
                </label>
            </div>
            <label htmlFor='isMarried'>
            <input type='checkbox' onChange={changeHandler} name='isMarried' id='isMarried' checked={user.isMarried} />
            isMarried
            </label>
            <div className='selector'>
            <label htmlFor='country'>Select Country:</label>
                <select name='country' value={user.country} onChange={changeHandler}>Select Country:
                    <option value='Sri Lanka'>Sri Lanka</option>
                    <option value='India'>India</option>
                    <option value='USA'>USA</option>
                    <option value='UK'>UK</option>
                </select>
            </div>
            <textarea name='bio' cols={30} rows={5} placeholder='Write something about you' value={user.bio} onChange={changeHandler} />
        </form>
        </div>
    </>
  )
}

export default Form