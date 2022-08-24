import { Fragment } from "react"


const Btn = ({svgPath ,text}) => {
return (
  <Fragment>
   <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
   <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="#00FF00" d={svgPath}/></svg>
    <span>{text}</span>
  </button>
  </Fragment>
)
}

export default Btn