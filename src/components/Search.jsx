import {useState} from 'react';

 const  Search = ({onSearch}) => {
    const [searchOption,setSearchOption]=useState('shows');
    const [searchvalue,setSearchvalue]=useState("");
    
  const handleText=(e)=>{
    setSearchvalue(e.target.value);
  
  }
  const onRadioChange=e=>{
    setSearchOption(e.target.value);
  }
  const onSubmit=(ev)=>{
    ev.preventDefault();
    const options={
        q:searchvalue,
        searchOption
    }
    onSearch(options);
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className='flex flex-col justify-center items-center gap-5'>
      <input type="text" value={searchvalue} onChange={handleText} placeholder="Search" className='m-4 border-black border-2 rounded-md p-4 text-xl text-blue-600'/>
      <div className='gap-3 flex text-lg'>
        <label >
        Shows
        <input type="radio" name="search-option" value="shows" checked={searchOption==='shows'} onChange={onRadioChange}/>
      </label>
      <label>
        Actors
        <input type="radio" name="search-option" value="actors" checked={searchOption==='actors'} onChange={onRadioChange}/>
      </label>
      </div>
      <button className="bg-blue-700 w-24  p-3">Search</button>
      </div>
      </form>
    </div>
  )
}
export default Search



