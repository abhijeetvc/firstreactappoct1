
function Cars({cars}){

    return(
        <div>
            <ul>
                {cars.map((car)=>(
                    <li key={car.id}>{car.brand}</li>
                ))}
            </ul>
        </div>
    )
}

export default Cars