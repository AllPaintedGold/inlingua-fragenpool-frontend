import { useParams } from 'react-router-dom'
import useSWR from 'swr'


const fetcher = (...args) => fetch(...args).then((res) => res.json())

const QuestionForSubject = () =>
{
  let { subject } = useParams();
  const { data , error} = 
  useSWR(`${process.env.REACT_APP_BASE_URL}/api/Question/GetQuestionsForSubject/${subject}`, fetcher)
      
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
   console.log(data)
   
    const rows = data.data.map((e) => {
      return (
        <tr key={e.id} class="border-t border-gray-400 text-xl" >
          <td  class="px-6 py-4">{e.createdBy}</td>
          <td  class="px-6 py-4">{e.subject}</td>
          <td  class="px-6 py-4">{e.dateOfCreation}</td>
          <td class="px-6 py-4 text-right">
            <a href={`/QuestionDetail/${e.id}`} class="font-medium text-violet-200 bg-emerald-500 rounded-lg p-3 ">Detail</a>
          </td>
        </tr>
      )
    })


    return (
      <div >
        <h1 class="text-center pt-5 font-bold text-gray-700 text-lg">{subject}</h1>
     <div class="m-5 py-5 border-2 border-gray-300 rounded-3xl shadow-outer">
      <table class="w-full text-sm text-left text-gray-500 table-auto ">
         <thead class="text-xl uppercase  text-gray-600 ">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Created By
                </th>
                <th scope="col" class="px-6 py-3">
                    Subject
                </th>
                <th scope="col" class="px-6 py-3">
                    Date Of Creation
                </th>
                <th scope="col" class="px-6 py-3">
                    <span class="sr-only">Detail</span>
                </th>
            </tr>
        </thead>
        <tbody >
           {rows}
        </tbody>
    </table>
      </div>
      </div>

    )
}

export default QuestionForSubject;