function Profile() {
    const name = "Ruthika Amarthaluri"
    const age = 20
    const isStudent = true
    return (

        <div>
            <p>Name:{name}</p>
            <p>Age:{age}</p>
            <p>{isStudent === true ? "I am student" : "I'm not a student"}</p>
        </div>
    )
}
export default Profile
