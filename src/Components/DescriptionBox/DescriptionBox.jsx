import React from 'react'
import './DescriptionBox.css'

function DescriptionBox(props) {
    return (
        <div className='descriptionbox'>
            <div className='descriptionbox-navigator'>
                <div className='descriptionbox-nav-box'>Description</div>
                <div className='descriptionbox-nav-box fade'>Reviews (122)</div>
            </div>
            <div className='descriptionbox-description'>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. 
                   It has roots in a piece of classical Latin literature from 45 BC, 
                   making it over 2000 years old. Richard McClintock, a Latin professor 
                   at Hampden-Sydney College in Virginia, looked up one of the more 
                   obscure Latin words, consectetur, from a Lorem Ipsum passage, 
                   and going through the cites of the word in classical literature, 
                   discovered the undoubtable source.</p>
            </div>
        </div>
    )
}

export default DescriptionBox;