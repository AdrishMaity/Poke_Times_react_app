import React from 'react';

const Contact = (props) => {

    // added redirect to Home page after 2000 ms 
    // setTimeout(() => {
    //     props.history.push('/')
    // }, 2000);

    return(
        <div className="container">
            <h4 className="center">Contact</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit ab soluta vero qui, voluptate modi tenetur, error expedita est pariatur repudiandae? Deserunt ut amet reiciendis recusandae eius rem autem fuga?</p>
        </div>
    )
}

export default Contact