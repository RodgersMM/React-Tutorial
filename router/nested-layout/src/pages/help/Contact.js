import React from "react";

const About = () => {
    return (
        <div>
            <form>
                <label>
                    <span>Your email:</span>
                    <input type='email' name='email' required />
                </label>
                <label>
                    <span>Your Name:</span>
                    <input type='text' name='message' required />
                </label>
                <submit>Submit</submit>
            </form>
        </div>
    )
}

export default About