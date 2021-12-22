import Logo from '../assets/logo.svg'


function Head() {
    
    
    return (
        <div className="head" >
            <div className="headlogo"> <img className="animate__backInLeft" src={Logo} alt="logo"/> Shoppe</div>
            <div className="txt">Your daily shopping list.</div>
        </div>
    )
}

export default Head
