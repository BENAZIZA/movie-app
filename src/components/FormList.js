import React ,{useState} from 'react'

import './Style.css'
const FormList =({addFilm,show})=>{
	const [newName,setName]=useState("")
	const [newRating,setRating]=useState(0)
	const [newGenre,setGenre]=useState("")
	const [newRealisator,setRealisator]=useState("")
	const changeName =(e)=>
	{
		setName(e.target.value)
	}
	const changeRating = (e)=>{
		if (e.target.value<=0) 
			{setRating(0)}
		else if (e.target.value>=10) 
		{
			setRating(10)
		}
		else
		{
		setRating(e.target.value)
		}
	}
	const changeGenre =(e)=>{
		setGenre(e.target.value)
	}
	const changeRealisator=(e)=>{
		setRealisator(e.target.value)
	}
	const submitFilm=(e)=>{
		e.preventDefault()
		addFilm(newName,newRating,newRealisator,newGenre)
		show()
	}

	return(<form className="StyleForm">
  <div className="form-group">
    <label >Name : </label>
    <input type="text" className="form-control" id="Name" aria-describedby="emailHelp" onChange={changeName} />
  </div>
  <div className="form-group">
    <label >Rating</label>
    <input type="number" value={newRating} className="form-control" id="Rating" onChange={changeRating} / >
  </div>
  <div className="form-group">
    <label >genre</label>
    <input type="text" className="form-control" id="Genre" onChange={changeGenre} / >
  </div>
  <div className="form-group">
    <label >realisator</label>
    <input type="text" className="form-control" id="Realisator" onChange={changeRealisator} / >
  </div>
  
  <button type="submit" className="btn btn-primary" onClick={submitFilm}>Submit</button>

</form>)
}
export default FormList;