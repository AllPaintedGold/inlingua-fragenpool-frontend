import useSWR from 'swr'
import {useSearchParams} from 'react-router-dom'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

const QuestionForSubject = () =>
{
    const [searchParams, setSearchParams] = useSearchParams()
     
    const { data, error } = 
    useSWR(`${process.env.REACT_APP_API_BASE_URL}/api/Question/GetQuestionsForSubject?subject=${searchParams.get('subject')}`, fetcher)

    console.log(searchParams.get('subject'))
   
    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>
    console.log(data)
    const rows = data.map((e) => {
      return (
        <tr key={e.id} class="bg-white border-b bg-gray-800 border-gray-700">
          <td  class="px-6 py-4">{e.CreatedBy}</td>
          <td  class="px-6 py-4">{e.Subject}</td>
          <td  class="px-6 py-4">{e.DateOfCreation}</td>
          <td class="px-6 py-4 text-right">
            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Detail</a>
          </td>
        </tr>
      )
    })


    return (
     <div class=" shadow-md sm:rounded-lg">
     <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
         <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
        <tbody>
           {rows}
        </tbody>
      </table>
      </div>

    )
}

export default QuestionForSubject;