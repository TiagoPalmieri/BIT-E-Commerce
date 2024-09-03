import '../styles/header.css';
import { Fragment } from "react";
function Head(){
    return(
    <Fragment>
<header>
        <nav>
            <ul>
                <li><a className='material-symbols-outlined' href="#">home</a></li>
                <li><a className='material-symbols-outlined' href="#">account_circle</a></li>
                <li><a className='material-symbols-outlined' href="#">settings</a></li>
                <li><a className='material-symbols-outlined' href="#">search</a></li>
            </ul>
        </nav>
    </header>
    </Fragment>
    )
}

export default Head;