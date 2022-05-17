function About() {
    return(
        <section>
            <div className='center' id='about'>
                <h1 className="page-header">About me</h1>
            </div>
            <div className="center">
                <img
                 src={require('../../assets/images/my-photo.jpg')}
                 alt="about-me"
                 className= "photo"
                />

            </div>
            <div>
                <p>
                    My name is Wilmer I'm currently an student of the University of Miami Bootcamp
                </p>
                    
            
            
            </div>
        </section>
    )
}

export default About