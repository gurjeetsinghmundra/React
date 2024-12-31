// function Student(props)
function Student({id,name})
{

    return(
        <div className="student"> 

            <ul>

                {/* <li>{props.id}</li>
                <li>{props.name}</li> */}

                {/* Object Destructuring :-object ko thodna variables me */}
                <li>{id}</li>
                <li>{name}</li>

            </ul>
        </div>
        
    );
}

export default Student;