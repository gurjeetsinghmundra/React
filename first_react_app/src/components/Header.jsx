function Header()
{

    let a=15;
    let student={
        id:101,
        name:"Guru"
    }
    return(
        <div>
 <h1>Header Component {a} </h1> 
 {/* to print js value write inside {} */}

<p>Student Id: {student.id}</p>
<p>Student Name: {student.name}</p>
<p>Student Name: {student["name"]}</p>
        </div>
       

    );

}

export default Header;