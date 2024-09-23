import { link } from 'react-router-dom'
import App from './App';
import Logo from './assets/linkedin-logo.png'

function Page(){
    return(
        <div className="header">
            <img src={Logo} alt="linkedin logo" />
        </div>
    )
}

export default Page;