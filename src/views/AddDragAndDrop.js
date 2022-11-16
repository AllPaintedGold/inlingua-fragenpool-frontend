import { useState } from 'react'
import Axios from 'axios'
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

const AddDragAndDrop = () => {

  const [kindOfQuestion, setKindOfQuestion] = useState() 
  const [createdBy, setCreatedBy] = useState() 
  const [subject, setSubject] = useState() 
  const [typeSpecifics, setTypeSpecifics] = useState([]) 
  const [specifics, setSpecifics] = useState([])

  const { data , error} = 
  useSWR(`${process.env.REACT_APP_BASE_URL}/api/Subject/GetAllSubjects`, fetcher)
      
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
   console.log(data)

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
      typeSpecifics : specifics
    }).then(res => console.log('Posting Data', res)).catch(err => console.log(err))
  }

    const AddPartButton = () => {
      let a = [] 
      a.push(document.getElementById('part').value)
      setTypeSpecifics(typeSpecifics.concat(a))
      document.getElementById('part').value = ""
      let b = Object.assign({},typeSpecifics)
      setSpecifics(JSON.stringify(b))
    }

    
    return(
        <div >
            <div className="flex justify-center full-w m-10 text-2xl font-bold text-gray-800 italic">
              { typeSpecifics } 
            </div>
        
        <div class="md:flex md:items-center mb-6">
            
          </div>
          <div class=" p-5 flex  justify-center">
            <form action="/">
              <div className="justify-center flex full-w">
                <button type="button" onClick={ AddPartButton } className="m-2 
                  text-white hover:cursor-pointer  bg-emerald-500 border border-emerald-600
                  font-bold py-2 px-4 rounded ml-5" >
                  Add Part
                </button>
              </div>
              <textarea id="part" name="part" rows="6" cols="50" className=" ring ring-gray-400 p-5 text-gray-800 text-3xl font-bold rounded focus:outline-none italic" placeholder='write part to drag and drop here'></textarea>
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
              <button type="button" onClick= { SubmitQuestionButton }  className="m-2  bg-red-500 text-white border border-red-800
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