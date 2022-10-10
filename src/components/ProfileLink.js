
const ProfileLink = ({id}) => {
   

    return (
		<button className="rounded-full">
			<a href={`/profile/?id=${id}`}>
			<img src="./logo512.png" alt="profile" />
			</a>
			
		</button>
            
                
            
                

    )
}

export default ProfileLink