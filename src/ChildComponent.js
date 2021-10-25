
function ChildComponent({person}){

    return(
        <div>
            <h2>Child Component</h2>
            <p>FirstName : {person.firstName}</p>
            <p>LastName : {person.lastName}</p>
            <p>City : {person.city}</p>

        </div>
    )
}

export default ChildComponent