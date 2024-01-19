import { Helmet } from 'react-helmet'

const About = (props) => {
    return (
        <div className="about-container">
            <Helmet>
                <title>About - 361 Project</title>
                <meta property="og:title" content="About - 361 Project" />
            </Helmet>
            <h1 className="about-text">About</h1>
            <img src="https://media.licdn.com/dms/image/D5603AQFoiL5tjqrlng/profile-displayphoto-shrink_400_400/0/1683340457472?e=1689206400&v=beta&t=jbEz7sZuQHtaFavfNXTWbvA1vKeya2m61mUkQlPFWKM" />
            <div>
                We want begin by thanking the honorary 8th member of our group, Jared Hoyt.
            </div>
            <div>
                Without his help, we wouldn't have been able to have half the functionality
                we currently have.
            </div>
            <div>
                Our team is composed of: Kendry, Steve (no ph), David (Spanish), Bobby, Kalim, Kolton, and Winston.
            </div>
        </div>
    )
}

export default About
