
import useSWR from 'swr'


const fetcher = (...args) => fetch(...args).then((res) => res.json())


const Home = () => {

    const { data , error} = 
    useSWR(`${process.env.REACT_APP_BASE_URL}/api/Subject/GetAllSubjects`, fetcher)

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    console.log(data)

    const subjects = data.data.map((e) => {
        return(
                <a key={e.id} href="/QuestionsForSubject/" subject={e.name} class="bg-stone-500 bg-opacity-70 aspect-video rounded-3xl font-bold text-violet-200 text-4xl flex justify-center ">
                    {e.name} 
                </a>
        )
      })

    return(
        <div class="grid grid-cols-3 gap-4 m-40 place-content-center">
            
                {subjects}  

                <a class="bg-stone-500 bg-opacity-70 aspect-video  rounded-3xl font-bold text-violet-200 text-4xl flex justify-center">
                    Add Subject
                </a>

        </div>
        
       

    )
}

export default Home;