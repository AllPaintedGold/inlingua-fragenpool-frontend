import ProfileLink from './ProfileLink'

const Navbar = () => {
    return (
      
        <nav className="text-center">
         
       
          

          <button class="bg-gradient-to-r from-sky-500 to-blue-500  hover:from-sky-400 hover:to-blue-400 hover:text-red-50 text-violet-100 font-bold py-2 px-4 rounded inline-flex items-center m-1 border border-violet-200 hover:border-blue-400 hover:shadow-lg">
            <svg width="48px" height="48px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 10.5L4.99591 13.1721C4.41845 13.9421 4.47127 15.0141 5.1216 15.7236L8.9055 19.8515C9.28432 20.2647 9.81826 20.5 10.3789 20.5C11.4651 20.5 13.2415 20.5 15 20.5C17.4 20.5 19 19 19 16.5C19 16.5 19 16.5 19 16.5C19 16.5 19 9.64287 19 7.92859" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M16 8.49995C16 8.49995 16 8.37483 16 7.92852C16 5.6428 19 5.6428 19 7.92852" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M13 8.50008C13 8.50008 13 7.91978 13 7.02715M13 6.50008C13 6.50008 13 6.804 13 7.02715M16 8.50008C16 8.50008 16 8.37496 16 7.92865C16 7.70549 16 7.25031 16 7.02715C16 4.74144 13 4.74144 13 7.02715" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M13 8.50008C13 8.50008 13 7.91978 13 7.02715C13 4.74144 16 4.74144 16 7.02715C16 7.25031 16 7.70549 16 7.92865C16 8.37496 16 8.50008 16 8.50008" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M10 8.50005C10 8.50005 10 7.85719 10 6.50005C10 4.21434 13 4.21434 13 6.50005C13 6.50005 13 6.50005 13 6.50005C13 6.50005 13 6.80397 13 7.02713C13 7.91975 13 8.50005 13 8.50005" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M7 13.5001V6.50006C7 5.67164 7.67157 5.00006 8.5 5.00006V5.00006C9.32843 5.00006 10 5.55527 10 6.38369C10 6.42151 10 6.4603 10 6.50006C10 7.85721 10 8.50006 10 8.50006" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>Drag And Drop</span>
          </button>
          
          <button class="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400  hover:shadow-lg hover:text-red-50 text-violet-100 font-bold py-2 px-4 rounded inline-flex items-center m-1 border border-violet-200 hover:border-teal-400">
            <svg width="48px" height="48px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M8 42H32C33.1046 42 34 41.1046 34 40V8C34 6.89543 33.1046 6 32 6H8C6.89543 6 6 6.89543 6 8V40C6 41.1046 6.89543 42 8 42ZM32 44H8C5.79086 44 4 42.2091 4 40V8C4 5.79086 5.79086 4 8 4H32C34.2091 4 36 5.79086 36 8V40C36 42.2091 34.2091 44 32 44Z" fill="currentColor"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M18 13C18 12.4477 18.4477 12 19 12H31C31.5523 12 32 12.4477 32 13C32 13.5523 31.5523 14 31 14H19C18.4477 14 18 13.5523 18 13Z" fill="currentColor"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M18 17C18 16.4477 18.4477 16 19 16H31C31.5523 16 32 16.4477 32 17C32 17.5523 31.5523 18 31 18H19C18.4477 18 18 17.5523 18 17Z" fill="currentColor"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M18 25C18 24.4477 18.4477 24 19 24H31C31.5523 24 32 24.4477 32 25C32 25.5523 31.5523 26 31 26H19C18.4477 26 18 25.5523 18 25Z" fill="currentColor"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M18 29C18 28.4477 18.4477 28 19 28H31C31.5523 28 32 28.4477 32 29C32 29.5523 31.5523 30 31 30H19C18.4477 30 18 29.5523 18 29Z" fill="currentColor"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M10 26V29H13V26H10ZM9 24H14C14.5523 24 15 24.4477 15 25V30C15 30.5523 14.5523 31 14 31H9C8.44772 31 8 30.5523 8 30V25C8 24.4477 8.44772 24 9 24Z" fill="currentColor"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M15.7071 12.2929C16.0976 12.6834 16.0976 13.3166 15.7071 13.7071L11 18.4142L8.29289 15.7071C7.90237 15.3166 7.90237 14.6834 8.29289 14.2929C8.68342 13.9024 9.31658 13.9024 9.70711 14.2929L11 15.5858L14.2929 12.2929C14.6834 11.9024 15.3166 11.9024 15.7071 12.2929Z" fill="currentColor"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M42 24H40V39.3333L41 40.6667L42 39.3333V24ZM44 40L41 44L38 40V22H44V40Z" fill="currentColor"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M42 17H40V19H42V17ZM40 15H42C43.1046 15 44 15.8954 44 17V21H38V17C38 15.8954 38.8954 15 40 15Z" fill="currentColor"/>
            </svg>
            <span className="pl-1">Multiple Choice</span>
          </button>

          <button class="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-400 hover:to-orange-400 hover:text-red-50 hover:shadow-lg text-violet-100 font-bold py-2 px-4 rounded inline-flex items-center m-1  border border-violet-200 hover:border-red-400">
            <svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              width="24px" height="48px" viewBox="0 0 48 48" enable-background="new 0 0 64 64" xmlSpace="preserve">
              <line fill="none" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" x1="22" y1="6" x2="64" y2="6"/>
              <line fill="none" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" x1="22" y1="16" x2="56" y2="16"/>
              <line fill="none" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" x1="22" y1="26" x2="64" y2="26"/>
              <line fill="none" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" x1="22" y1="36" x2="58" y2="36"/>
              <g>
                <g>
                  <polyline fill="none" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" points="59,48 59,46 57,46 		"/>
                  
                    <line fill="none" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-dasharray="4,2" x1="55" y1="46" x2="26" y2="46"/>
                  <polyline fill="none" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" points="25,46 23,46 23,48 		"/>
                  
                    <line fill="none" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-dasharray="3,2" x1="23" y1="50" x2="23" y2="53"/>
                  <polyline fill="none" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" points="23,54 23,56 25,56 		"/>
                  
                    <line fill="none" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-dasharray="4,2" x1="27" y1="56" x2="56" y2="56"/>
                  <polyline fill="none" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" points="57,56 59,56 59,54 		"/>
                  
                    <line fill="none" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-dasharray="3,2" x1="59" y1="53" x2="59" y2="49"/>
                </g>
              </g>
              <g>
                <polyline fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="bevel" stroke-miterlimit="10" points="10,58 17,51 
                  10,44 	"/>
                <g>
                  <line fill="none" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" x1="17" y1="51" x2="0" y2="51"/>
                </g>
              </g>
            </svg>
            <span className="pl-2">Fill In The Blank</span>
          </button>
          <button className="absolute right-10 m-2">
          <span><ProfileLink id="0"/></span>
          </button>
          
          
        </nav>
        
        
    )
}

export default Navbar 