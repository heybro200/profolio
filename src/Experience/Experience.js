

export const Experience = () => {
    return (
        <div className="flex">
            <div className='p-10 w-1/3'>
                <h3 className='text-3xl py-1'>Experiences:</h3>
                <p className='text-md py-2 leading-8'>
                    I am a Software Engineer with roughly 3 years of experience. 
                    I started out my Engineering career at Invitae Biotechnology Co. 
                    I've participated in full-stack developement from working on frontend, 
                    backend projects utilizing modern technologies.During my time I have 
                    also mentored some young up and coming engineers fresh out of college 
                    or co-workers who have wanted to switched over to engineering.
                </p>
                <h3 className="text-2xl py-2">Skills:</h3>
                <ol class>
                    <li className="mb-3"><b>Language:</b> Python, Javascript</li>
                    <li className="mb-3"><b>Frameworks:</b> React-Typescript, Django, Flask</li>
                    <li className="mb-3"><b>Tools:</b> AWS, Selenium, Docker, Redis, Git, Git-Lab, Github Actions, Kubernetes, Kafka, Playwright, Jenkins.</li>
                </ol>
            </div>
            <div className="p-10 w-1/2">
                <h3 className="text-3xl py-1">Projects:</h3>
                <ul>
                    <li className="mb-3">WeatherApp <a href="https://github.com/heybro200/profolio/tree/main/src/Weather" target="_blank" className="hover:text-blue-600">[[Source Code]]</a></li>
                    <li className="mb-3">CalculatorApp <a href="https://github.com/heybro200/profolio/tree/main/src/Calculator" target="_blank" className="hover:text-blue-600">[[Source Code]]</a></li>
                    <li className="mb-3">PorfolioApp <a href="https://github.com/heybro200/profolio/tree/main/src/FrontPage" target="_blank" className="hover:text-blue-600">[[Source Code]]</a></li>
                </ul>
            </div>
        </div>
        
    )
    
}

export default Experience;