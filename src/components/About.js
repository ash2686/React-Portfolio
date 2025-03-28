import React from 'react';
import './About.css'
import leo from '../MyPics/leo.png'
import matrix from '../assets/mtrxBg.jpg'

const About = () => {
    return (
        <div className='about-main'>
            <div className="about-content">
                <div className="top-text">
                    <h2>About</h2>
                    <div className="line"></div>
                </div>
                <div className="center-area">
                    <h2 className='about-left'> Lorem ipsum dolor hello sit amet consectetur, adipisicing elit. Saepe magni consequatur inventore fuga hic nesciunt totam asperiores, minima, sapiente veniam, incidunt tenetur labore odit eligendi modi. Culpa perspiciatis blanditiis possimus? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores inventore excepturi, fuga et consequuntur a molestias nemo perspiciatis ratione.
                    </h2>
                    <p className='about-right'><img src={leo} alt="Pineapple" style={{width:'170px',height:'170px',marginRight:'10px'}} />Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus tempore rem nostrum, dicta consectetur eveniet nobis fugiat illo quia! Velit doloremque obcaecati quod. Recusandae nihil ullam accu samus repre henderit volup tatibus vero illo fuga explicabo repellat quod maiores nam atque quo optio neque natus provident voluptatum max ime corporis possimus, rem blanditiis corrupti! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Conse ctetur provident id velit cupiditate saepe culpa commodi pariatur quo beatae! Natus molestiae incidunt rem nostrum iure quasi aliquam atque sed autem.
                 
                    
                    </p>
                </div>

                {/* <div className="image-container">
                    <img src={matrix} alt="Image Path not found" />
                </div> */}
            </div>
        </div>
    );
};



export default About;