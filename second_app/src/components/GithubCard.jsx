import React, { useEffect, useState } from 'react'

function GithubCard() {


    let [githubData, setGithubData] = useState({});

    //  useEffect ko ek function aur ek array chahiye raheta hai
    useEffect(() => {

        //fetch return promise  object
        fetch("https://api.github.com/users/gurjeetsinghmundra") //github api link
            .then(data => data.json()) //will also return promise
            .then(data => {
                // console.log(data["name"]);
                // console.log(data["followers"]);
                // console.log(data["following"]);
                console.log(githubData);

                setGithubData(data);
            })
    }, [])

    return (
        //React ko inline css nhi chahiye
        <div>
            <h1>Github Profile</h1>
            <div className="card github-card">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text"></p>
                </div>
            </div>
        </div>
    )
}

export default GithubCard