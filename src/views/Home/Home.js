import React from 'react'
import "./Home.css"
import FeatureCard from '../../components/FeatureCard/FeatureCard'
import { Link } from 'react-router-dom'
// import HeadingImage from "./../../assets/background-heading-img.jpg"

const Features = [
    {
        featureImg: "https://img.freepik.com/free-vector/cyber-security-concept_23-2148532223.jpg",
        featureText: "Notes will be saved securely in your browsers local storage"
    },

    {
        featureImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1d-6vBf7RvcRaGND6qrF_yC6toH5ICgXDEA&s",
        featureText: "Use your brain for thinking , not for remembering things"
    },
    {
        featureImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7o_iM09BEOOcLkLW4v5kPvReF4qcqQJFNww&s",
        featureText: "Loved by 100 + users. feedbacks are always welcome!"
    }
]

function Home() {
    return (
        <>

            <img src="https://img.freepik.com/free-photo/flat-lay-concept-clipboard_23-2148102704.jpg" className='home-head-background-img' />

            <div className='home-heading-division'>
                <h1 className='text-center text-primary app-title' >📘 Quick Note</h1>
                <p className='text-center subheading' >Your Pocket friendly app. <del>Never Forget anything again!</del>
                    <span className='text-highlight tagline-highlight'>Remember everything! 🧠</span></p>
            </div>

            <h3 className='text-center why-should-heading'>Why you should use Quick Note?</h3>


            <div className='feature-container'>
                {
                    Features.map((feature,i) => {
                        const { featureImg, featureText } = feature
                        return (
                            <FeatureCard
                                key={i}
                                featureImg={featureImg}
                                featureText={featureText}
                            />
                        )
                    })
                }

            </div>
            <div className='buttons-container'>
                <Link to="/add">
                    <button className='btn text-white btn-primary add-note-butn:hover'>✍ Add Note</button>
                </Link>

                <Link to="/show">
                    <button className=' btn btn-secondary'>📖 Show Note</button>
                </Link>
            </div>

        </>
    )
}

export default Home