import React from 'react';

function About() {
    return (
        <div className="card w-96 bg-base-100 shadow-xl my-3 mx-auto">
            <figure><img src={require(`../assets/joey.jpg`)} alt="Shoes" /></figure>
            <div className="card-body bg-accent">
                <h2 className="card-title">Joey Bennett</h2>
                <p>In my free time I like to hike in the California Bay Area, above is a photo of me with my dog
                    Flora on a hike near Mount Tamalpais.
                </p>
                <div className="card-actions justify-end">
                <a href="https://github.com/coderbennett" target="_blank" rel="noreferrer" className="btn btn-primary">GitHub</a>
                <a href="https://www.linkedin.com/in/joey-bennett-jkb/" rel="noreferrer" target="_blank" className="btn btn-primary">LinkedIn</a>
                </div>
            </div>
        </div>
    )
}

export default About;