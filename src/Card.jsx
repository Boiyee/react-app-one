import profilePic from './assets/Eren.png'

function Card() {

    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture" />
            <h2 className='card-title'>Boiyee(Jubreel)</h2>
            <p className='card-text'>I am a Frontend developer</p>
        </div>
    );
}

export default Card