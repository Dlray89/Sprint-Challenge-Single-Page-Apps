import React, { useState } from "react";



export default function SearchForm(props) {

const [searching, setSearching] = useState([]);
const handlechanges = event => {
      setSearching(event.target.value);
  }


  const submittingHandler = e =>{
      e.preventDefault();
  }

  const characherSearch = props.charachers.filers( character => {
      return character.toLowerCase().indexOf(searching.toLowerCase()) !==1;
  })
  props.searchData(characherSearch);
  console.log(characherSearch);

  return (

    <section className="search-form">
     <form onSubmit={submittingHandler}>
         <input 
         onChange={handlechanges}
         type="text"
         name="character"
         placeholders="Search"
         />
     </form>
    </section>
  );
}
