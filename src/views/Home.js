import AddSubjectPopUp from '../components/AddSubjectPopup'
import useSWR from 'swr'
import React, { useState } from 'react';


const fetcher = (...args) => fetch(...args).then((res) => res.json())


const Home = () => {

    const [AddSubjectIsOpen, setAddSubjectIsOpen ] = useState(false)
    const { data , error} = 
    useSWR(`${process.env.REACT_APP_BASE_URL}/api/Subject/GetAllSubjects`, fetcher)

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    console.log(data)

    const subjects = data.data.map((e) => {
        return(
                <a key={e.id} href={`/QuestionsForSubject/${e.name}`} class=" py-10 font-bold  border-2 border-stone-500 rounded-2xl text-center font-bold text-3xl flex justify-center">
                <span className="truncate">{e.name}</span>
                </a>
        )
      })

    return(
        <div >
             <AddSubjectPopUp/>
        <div class="grid grid-cols-3 gap-2 mx-10 place-content-center text-gray-600"> 
            {subjects}     
        </div>
        </div>
    )
}

export default Home;