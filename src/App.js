import React,{useState} from 'react';
import './App.css';
import Head from './components/Head'
import FilmsList from './components/FilmsList'
import Details from './components/Details'
import './components/Style.css'


function App() {
  const [films,setFilms]=useState([{name :'Godfather',Rating:5,id:1,editMode:false,realisator:"Tom Hagen",genre:"drama"},{name :'BatMan',Rating:9,id:2,editMode:false,realisator:"Christopher Nolan",genre:'action'}])
  const [showForm,setShowForm]=useState(false)
  const [showDetails,setShowDetail]=useState(false)
  const [filterFilm,setFilter]=useState("")
  const [filterRating,setFilterRating] =useState(0)
  const [filerFilm,setFilterFilm]=useState("") 
  const [filmDetail,setfilmDetail]=useState(0)
    const addFilm =(newName,newRating,newRealisator,newGenre)=>{
      setFilms([...films,{name:newName,Rating:newRating,id:new Date(),editMode:false,realisator:newRealisator,genre:newGenre}])

    }
    
  const filterValue =(e)=>{
    setFilter(e.target.value)
  }
  

  const filteringFilm=()=>

    {
      let NewFilmsRating=[...films]
      films.map(film=>(film.Rating >=filterRating)&&(film.name.toUpperCase().indexOf(filterFilm.toUpperCase())>-1)?(film.editMode=false):(film.editMode=true))
      setFilms(NewFilmsRating)
    }
  
  const filterRatingValue=(e)=>{
    setFilterRating(e.target.value)
    console.log(filterRating)

  }
  const show =()=>{
    setShowForm(!showForm)
  }
  const filmsDetails=(id)=>
  {
        let film = films.findIndex(film=>film.id===id)
        setfilmDetail(film)
        setShowDetail(!showDetails)

  }
  console.log(filmDetail)

  return (
    <div className="App">
      <Head />
      <div className='searchStyle'>
    <span>Search for a movie ...</span>
    <input type="text" placeholder="search for a movie" value={filterFilm} onChange={filterValue}/>
    <button type="button" className="btn btn-primary" onClick={filteringFilm}>Search</button>
    <span>Search by rating</span>
    <form >

  <select className="form-control" id="selecting" value={filterRating} onChange={filterRatingValue}>
      <option value={1}>+1</option>
      <option value={2}>+2</option>
      <option value={3}>+3</option>
      <option value={4}>+4</option>
      <option value={5}>+5</option>
      <option value={6}>+6</option>
      <option value={7}>+7</option>
      <option value={8}>+8</option>
      <option value={9}>+9</option>
    </select>
      <button type="button" className="btn btn-primary StyleButtonSerach" onClick={filteringFilm} >Search</button>
    </form>
    <span>Add a film</span>
    <button type="button" className="btn btn-primary" onClick={show} >Add a film</button>
    </div>
       { showDetails ?
       (<Details films={films} film={filmDetail} filmsDetails={filmsDetails}/>)
     :(<FilmsList showForm={showForm} show={show}  addFilm={addFilm} films={films} filmsDetails={filmsDetails} showDetails={showDetails}/>)}
    </div>
  );
}
export default App;
