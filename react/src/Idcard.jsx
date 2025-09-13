function Idcard(person) {

    return ( 
    <div>
        <img src="india-gate.jpg" alt="" />
        <p>{person.name}</p>
<p>Course:{person.course}</p>
<p>Roll No:{person.rollNo}</p>
<p>Blood Group:{person.bloodGroup}</p>
<p>DOB:{person.dob}</p>
        </div>
)
}
export default Idcard