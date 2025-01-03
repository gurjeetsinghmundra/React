import { useState } from "react";


function LoggedIn()
{
    let[loggedIn,setLoggedIn]=useState(false)
//webpage kholne pe jab tak login btn pe click nhi karenge tab tak value false he rahegi

    
    return(
        <div>

{/* In react && operator can be used with tags along with boolen values */}
{/* So if the condition is true only then the output inside tag will be shown */}
{/* It can be used when you want to display something only if the value is true  */}
            {true && <h1>Condition is True</h1>}

            {false && <h1>Condition is True</h1>}

            <hr />
            
            {/* Ternary Operator :- a>b?a:b */}
            {loggedIn?   
            <div>
                  <h1>Welcome User</h1>
                  <button onClick={()=>{
                     setLoggedIn(false); //btn pe click karenge toh value false hoyegi and condition after colon(:) run hoyega
                  }}>Log Out</button>
            </div>:
             <button onClick={()=>{
                setLoggedIn(true); //btn pe click karenge toh first condition run hoyegi coz the statement will become true
             }}>Log In</button>
            }

            <hr />
        </div>
    );
}

export default LoggedIn;