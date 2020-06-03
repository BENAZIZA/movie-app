import React from 'react'
import './Style.css'
const Details =({films,film,filmsDetails})=>
{
	return(<div className="styleDetails">
		<h1>Details</h1>
		<ul className="list-group list-group-flush">
		<li className="list-group-item">Name:     {films[film].name}  </li>
		<li className="list-group-item"> Rating:  {films[film].Rating}</li>
		<li className="list-group-item"> Genre:    {films[film].genre}</li>
		<li className="list-group-item"> realisator:    {films[film].realisator}</li>
		</ul>
		<button onClick={filmsDetails} className="btn btn-primary">Ok</button>


	 </div>)

}
export default Details;