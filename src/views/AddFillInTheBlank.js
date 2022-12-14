import { useState, useEffect } from 'react'
import Axios from 'axios'
import useSWR from 'swr'


const fetcher = (...args) => fetch(...args).then((res) => res.json())

const AddFillInTheBlank = () => {

  const [kindOfQuestion, setKindOfQuestion] = useState() 
  const [createdBy, setCreatedBy] = useState() 
  const [subject, setSubject] = useState() 
  const [text, setText] = useState([]) 
  const [textJSON, setTextJSON] = useState([])
  
  const [options, setOptions] = useState([])
  const [optionsJSON, setOptionsJSON] = useState()
  const [isAddingText, setIsAddingText] = useState(true)

  const [newOptions, setNewOptions] = useState(true)
  const [preview, setPreview] = useState([])
  
  
 
  

  
  


  const { data , error} = useSWR(`${process.env.REACT_APP_BASE_URL}/api/Subject/GetAllSubjects`, fetcher) 
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  const subjects = data.data.map((e) => {
    return (
      <option key={e.id}>{e.name}</option>
    )
  })

  const SubmitQuestionButton = (e) => {
    e.preventDefault()
    Axios.post(`https://localhost:7246/api/Question/AddQuestion`,
    {
      kindOfQuestion ,
      createdBy ,
      subject ,
      typeSpecifics : textJSON
    }).then(res => console.log('Posting Data', res)).catch(err => console.log(err))
  }

    const AddTextButton = () => {
      if(document.getElementById('part').value === "") return 
      let a = [] 
      a.push(document.getElementById('part').value)
      setText(text.concat(a))
      document.getElementById('part').value = ""
      let b = Object.assign({},text)
      setTextJSON(JSON.stringify(b))
      setIsAddingText(false)
      console.log(`text ${JSON.stringify(text)}`)
    }

    
    
    const AddOptionButton = () => {
      if(document.getElementById('option').value === "") return 
      
      document.getElementById('option').value = ""
    }
    const AddOptionsButton = () => {
      setIsAddingText(true)
      
      console.log(JSON.stringify(options))
    }

    const AddingOptions = () => {
        return (
            <div>
            <div className="justify-center flex full-w">
            <button type="button" onClick={ AddOptionsButton } className="m-2 
              text-white hover:cursor-pointer  bg-indigo-500 border border-indigo-600
              font-bold py-2 px-4 rounded ml-5" >
              Add Options
            </button>
            <button type="button" onClick={ AddOptionButton } className="m-2 
              text-white hover:cursor-pointer  bg-indigo-500 border border-indigo-600
              font-bold py-2 px-4 rounded ml-5" >
              Add Option
            </button>
          </div>
          <textarea id="option" name="part" rows="6" cols="50" className=" ring ring-gray-400 p-5 text-gray-800 text-3xl font-bold rounded focus:outline-none italic" placeholder='write part to drag and drop here'></textarea>
          </div>
        )
    }
    const AddingText = () => {
        return (
            <div>
                <div className="justify-center flex full-w">
                <button type="button" onClick={ AddTextButton } className="m-2 
                  text-white hover:cursor-pointer  bg-gradient-to-r from-indigo-500 via-indigo-500 to-indigo-500 border border-indigo-600
                  font-bold py-2 px-4 rounded ml-5" >
                  Add Text
                </button>
              </div>
              <textarea id="part" name="part" rows="6" cols="50" className=" ring ring-gray-400 p-5 text-gray-800 text-3xl font-bold rounded focus:outline-none italic" placeholder='write part to drag and drop here'></textarea>
            </div>
        )
    }


 
    
    return(
        <div >
            <div className="flex justify-center full-w m-10 text-2xl font-bold text-gray-800 italic">
              { preview } 
            </div>
        
        <div class="md:flex md:items-center mb-6">
          </div>
          <div class=" p-5 flex  justify-center">
            <form action="/">    
                {isAddingText? AddingText() : AddingOptions()}
                {text}
                {options}
              <div class="md:flex md:items-center mb-6">
              <div class="md:w-1/3 m-5">
                <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4 italic" htmlFor="kindOfQuestion">
                  Kind Of Question 
                </label>
              </div>
              <div>
                <select class="bg-gray-200  border-2 border-gray-200 rounded w-full py-2 px-4 
                  text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 ring ring-gray-400 " 
                  id="kindOfQuestion" type="text" name="kindOfQuestion"  onChange={(e) => setKindOfQuestion(e.target.value)} required>
                  <option>Drag And Drop</option>
                  <option>Multiple Choice</option>
                  <option>Fill In The Blank</option>
                </select>
              </div>
              </div>
              <div class="md:flex md:items-center mb-6">
              <div class="md:w-1/3 m-5">
                <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4 italic" htmlFor="createdBy">
                  Created By
                </label>
              </div>
              <div>
                <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 
                  text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 ring ring-gray-400 " 
                  id="createdBy" type="text" name="createdBy"  onChange={(e) => setCreatedBy(e.target.value)} required>
                    
                </input>
              </div>
              </div>
              <div class="md:flex md:items-center mb-6">
              <div class="md:w-1/3 m-5">
                <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4 italic" htmlFor="subject">
                  Subject
                </label>
              </div>
              <div>
                <select class="bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 
                  text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 ring ring-gray-400 " 
                  id="subject" type="text" name="subject"  onChange={(e) => setSubject(e.target.value)} required>
                  {subjects}
                </select>
              </div>
              </div>
              <div className="justify-center flex full-w">
              <button type="button" onClick= { SubmitQuestionButton }  className="m-2  bg-indigo-500 text-white border border-blue-800
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

export default AddFillInTheBlank;