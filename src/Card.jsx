
function Card({profiles}) {
    return (
        <div>
            {profiles.map((profile, index) => (
                <div key={index}>
                    <h2>{profile.nombre}</h2>
                    <h2>{profile.mascota}</h2>
                </div>
            ))}
        </div>
    )
}

export default Card;

