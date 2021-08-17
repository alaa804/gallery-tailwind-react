import React,{useState} from 'react'


const ImageSearch = ({ searchText , showAlert}) => {
    const [text , setText] = useState('');

     const onSubmit = e => {
         e.preventDefault();
         if(text === '') {
           showAlert('success','Please Enter Something To Search...!')
         }else { 
           searchText(text);
         }
     }

    return (
    <div className='max-w-sm rounded overflow-hidden my-10 mx-auto'>
        <form onSubmit={onSubmit}  className="w-full max-w-sm">
          <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
             <input onChange={e => setText(e.target.value)} value={text} className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"  placeholder="Search Image Term..." />
             <button className="flex-shrink-0 bg-green-500 hover:bg-pink-700 border-green-500 hover:border-red-700 text-sm border-4 text-green py-1 px-2 rounded
               transition duration-20 ease-in"
               type="submit">
              Search...
           </button>
         </div>
       </form>
    </div>
        
    )
}

export default ImageSearch
