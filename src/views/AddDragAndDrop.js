

import { looseIndexOf } from '@vue/shared'
import { useState } from 'react'

const AddDragAndDrop = () => {
  
    
    const [questionParts, setQuestionParts] = useState([]) 

    const handleAddPart = () => {
      let a = [] 
      a.push(document.getElementById('part').value)
      setQuestionParts(questionParts.concat(a))
      document.getElementById('part').value = ""
    }

    return(
        <div >
            <div className="flex justify-center full-w m-10 text-2xl font-bold text-gray-800 italic">
              { questionParts } 
            </div>
        
        <div class="md:flex md:items-center mb-6">
            
          </div>
          <div class=" p-5 flex  justify-center">
            <form action="/">
              <div className="justify-center flex full-w">
                <button type="button" onClick={ handleClick } className="m-2 
                  text-white hover:cursor-pointer  bg-emerald-500 border border-emerald-600
                  font-bold py-2 px-4 rounded ml-5" >
                  Add Part
                </button>
              </div>
              <textarea id="part" name="part" rows="6" cols="50" className=" ring ring-gray-400 p-5 text-gray-800 text-3xl font-bold rounded focus:outline-none italic" placeholder='write part to drag and drop here'></textarea>
              <div className="justify-center flex full-w">
              <button type="submit" onClick={ handleAddPart} className="m-2  bg-red-500 text-white border border-red-800
                focus:outline-none  hover:cursor-pointer 
                font-bold py-2 px-4 rounded ml-5" >
                Submit Question
              </button>
            </div>
            </form >
           
          </div>     
  
        
      </div>
       

    )
}

export default AddDragAndDrop;