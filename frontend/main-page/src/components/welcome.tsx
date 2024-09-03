import '../styles/welcome.css'

function Welcome(){
    let username = '{fullName}';
    return(
        <div className='ad'>
            <p>¡Welcome, {username}!</p>
        </div>
    );
}

export default Welcome;