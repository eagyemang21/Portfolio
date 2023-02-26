import React from "react";

function Navbar(){
    const redirectLink = event => {
        console.log('element clicked!')
        console.log(event.currentTarget)
      }
    return(
        <div className='Links'>
        <a onClick={redirectLink} href="https://www.linkedin.com/in/elijah-n-agyemang/" target="blank" rel="noreferrer"> LinkedIn </a>
        <a onClick={redirectLink} href="https://github.com/eagyemang21" target="blank" rel='noreferrer'> GitHub </a>
        <a onClick={redirectLink} href="https://replit.com/@eagyemang" target="blank" rel='noreferrer'> Repl.it </a>
      </div>
    )
}

export default Navbar;