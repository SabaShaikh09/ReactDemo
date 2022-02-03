import { useState } from "react";
import { NavLink } from "react-router-dom"

export let Nav = () => {
    let [searchId, setUser] = useState();

    const update = (e) => {
        setUser(e.target.value);
        console.log(searchId);
    }
    return (
        <section>
            <nav class="navbar navbar-light bg-secondary">
                <form class="container-fluid justify-content-start">

                    <NavLink to="/student/showall">
                        <button class="btn btn-primary mx-3 fw-bold" type="button">Show All</button>
                    </NavLink>
                    <NavLink to="/student/add">
                        <button class="btn btn-primary mx-3 fw-bold" type="button">Add</button>
                    </NavLink>
                    <span className="mx-5 fw-bold text-center text-white ">Student Management System</span>
                    
                    <NavLink to="/">
                        <button class="btn btn-info mx-3 position-absolute fw-bold top-0 mt-2 end-0" type="button">Home</button>
                    </NavLink>
                </form>
            </nav>
            <div className="d-flex justify-content-center mt-3">

                <input type="number" onChange={update} value={searchId} placeholder="Enter ID "></input>
                <NavLink to={`/student/search/${searchId}`}> 
                    <button className="btn btn-info mx-2" >Search</button>
                </NavLink>
            </div>
        </section>
    )
}