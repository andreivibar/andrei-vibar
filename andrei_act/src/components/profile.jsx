import ProfilePic from "../components/negneg.jpg"

function Profile(props) {
    
    return (
       
       <>
     <main className="mt-1 mb-10 ml-25 mr-25 pt-10 pb-10 pl-5 pr-5 rounded shadow-2xl">
            <section className="flex justify-center rounded-full">
                <div className="text-center border h-60 w-70 rounded-xl">
                    <div className="flex justify-center mb-2">
                        <img className="w-25 h-25 rounded-full shadow-2xl mt-3" src={ProfilePic} alt="Profile Picture" />
                    </div>
                    <h1 className="text-2xl font-bold mb-1">{props.name}</h1>
                    <p className="m-5 mt-1 te">{props.bio}</p>
                </div>      
            </section>
            
            <section className="flex w-100vh h-40 border border-black m-6 rounded-xl">
                <div>
                    <h1 className="font-bold text-xl mb-3 ml-2" >Contact Information</h1>
                    <div className="ml-5 m-5">
                        <li className="font-bold m-2">Email: <a className="font-normal text-blue-800" href={`mailto:${props.email}`} target="_blank">{props.email}</a></li>
                        <li className="font-bold m-2">Phone: <a className="font-normal text-blue-800" href="#">{props.phone}</a></li>
                        <li className="font-bold m-2">Address: <a 
                            className="font-normal text-blue-800" 
                            href={`https://www.google.com/maps/search/?q=${encodeURIComponent(props.address)}`} 
                            target="_blank" rel="noopener noreferrer">{props.address}</a></li>
                    </div>
                </div>
            </section>
            
            <section className="w-100vh h-45 border border-black m-6 rounded-xl">
                <h1 className="font-bold text-xl mb-3 ml-2">Skills</h1>
                <div className="ml-5">
                    <ul className="list-disc list-inside text-blue-800 "cd >
                        {props.skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                        ))}
                    </ul>
                </div>
                
            </section >
            
            <section className=" w-100vh h-60 border border-black m-6 rounded-xl">
                <h1 className="font-bold text-xl mb-3 ml-2">Work Experience</h1>
                <div className="ml-5">
                     {props.experience.map((job, index) => (
                        <div key={index} className="mt-2">
                        <h4 className="font-bold m-2">{job.title} at {job.company}</h4>
                        <p className="text-blue-800 m-2">{job.duration}</p>
                        <p className="text-black m-2">{job.description}</p>
                        </div>
                    ))}
                </div>
                
            </section>
        </main>
        </>
    )
}

export default Profile