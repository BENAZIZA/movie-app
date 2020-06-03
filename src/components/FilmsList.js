import React ,{useState} from 'react'
import './Style.css'
import FormList from './FormList'
const FilmsList =({showForm,show,filterName,addFilm,films,filmsDetails,showDetails})=>{
	
	return(
	
		

		!showForm ? (<div className="styleFilmList">
	
	<ul className="list-group list-group-flush">
	<div className="row ">
	<li className="list-group-item col-6">Film </li>
	<li className="list-group-item col-3">Rating </li>
    <li className="list-group-item col-3">Details</li>
    </div>
	{
		films.map(film => {return(!film.editMode?(<div className='row' key={film.id}>
			                           <li className="list-group-item col-6">Film : {film.name}</li>
			                           <li className="list-group-item col-3">Rating : {film.Rating}</li>
			                           <li className="list-group-item col-3"><button className="btn btn-primary" onClick={()=>filmsDetails(film.id)}>Details</button></li>
			                     </div>):(""))})
	}
	 </ul>

	
	    </div>):(<FormList addFilm={addFilm} show={show}/>)
	

	
		

		)
}
export default FilmsList;