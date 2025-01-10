import React, { useEffect, useState } from 'react'

function GithubCard() {


    let [githubData, setGithubData] = useState({}); //useState me object pass kiya hai
    let [repositories, setRepositories] = useState([]); //useState me array pass kiya hai

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

                //Repositories

                fetch(data.repos_url)
                    .then(repos => repos.json())

                    //will get all the repo here
                    .then(repos => {

                        // console.log("Repos"+repos);
                        setRepositories(repos);
                    })
            })
    }, [])

    return (
        //React ko inline css nhi chahiye
        <div>
            {/* Profile Start */}
            <h1>Github Profile</h1>
            <div className="card github-card">
                <img src={githubData.avatar_url} className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text">Name: {githubData.name}</p>
                    <p className="card-text">Followers: {githubData.followers}</p>
                    <p className="card-text">Following: {githubData.following}</p>
                    <a href={githubData.html_url}>Click Here to Visit Github Profile</a>
                </div>
            </div>

            {/* Repositories Start */}

           
            <table className="table table-success table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Repository Name</th>
                        <th scope="col">Repository Link</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        repositories.map((repoObj)=>{
                            return( <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                            </tr>)
                        })
                    }
                   
                </tbody>
            </table>

            {/* Repositories End */}

        </div>
    )
}

export default GithubCard