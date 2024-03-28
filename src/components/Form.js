import React, { useState } from 'react';
import { Toast } from 'react-bootstrap';
import './Form.css'; // Import your CSS file

const CardComponent = ({ userDisplayName }) => {
    const [checkedMembers, setCheckedMembers] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [alreadyVoted, setAlreadyVoted] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [error, setError] = useState('');
    // Function to handle checkbox change
    const handleCheckboxChange = (memberName) => {
        setCheckedMembers(prevState => ({
            ...prevState,
            [memberName]: !prevState[memberName] // Toggle the checked state
        }));
    };

    // Function to handle form submission
    const handleSubmit = async () => {
        try {
            setIsSubmitting(true);
            const selectedMembers = Object.values(checkedMembers).filter(value => value);
            if (selectedMembers.length !== 1) {
                setError("You can only vote for one member.");
                console.log(error)
                setIsSubmitting(false);
                return;
            }
            // Create a JSON object with checked members and userDisplayName
            const formData = {
                checkedMembers,
                userDisplayName
            };
            console.log(formData);
            // Send formData as JSON in a POST request to your server
            // const response = await fetch('https://kpkdx0345m.execute-api.us-east-1.amazonaws.com/postingvotes/posting', {
            // const response = await fetch('https://czraohk3e3.execute-api.us-east-1.amazonaws.com/poststage/post', {
            const response = await fetch('https://9bbqe612vh.execute-api.us-east-1.amazonaws.com/poststage/post', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            // Check if request was successful
            if (response.ok) {
                const responseData = await response.json();
                setAlreadyVoted(true);
                // console.log(response);
                // console.log(responseData.body);
                const msgbody = JSON.parse(responseData.body);
                // console.log(msgbody.message);
                // Check if the user has already voted
                if (msgbody.message === "You have already voted") {
                    // Display a message indicating the user has already voted
                    // setShowToast(true);
                    setError("You have already voted");
                    console.log('User has already voted.');
                } else {
                    // Display a message indicating successful submission
                    // console.log(responseData);
                    setError("Form submitted successfully!");
                    console.log('Form submitted successfully!');
                }
                setCheckedMembers({}); // Reset form
            } else {
                console.error('Form submission failed.');
            }
        } catch (error) {
            console.error('Error submitting form:', error.message);
            setIsSubmitting(false);
        }
    };
    return (
        <>
            <div className="toast-container">
                <Toast show={error !== ''} onClose={() => setError('')} className="toast" role="alert" aria-live="assertive" aria-atomic="true">
                    <Toast.Header>
                        <strong className="me-auto">Error</strong>
                    </Toast.Header>
                    <Toast.Body>{error}</Toast.Body>
                </Toast>
            </div>
            <div className="container-card">



                <div className="card">
                    <div className="entypo--user"></div>
                    <div className="textBox">
                        <div className="textContent">
                            <p className="h1">Leader 1</p>
                            <label className="container-check">
                                <input type="checkbox" onChange={() => handleCheckboxChange("Member 1")} disabled={alreadyVoted || isSubmitting} />
                                <svg viewBox="0 0 64 64" height="2em" width="2em">
                                    <path
                                        d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                                        pathLength="575.0541381835938" className="path"></path>
                                </svg>
                            </label>
                        </div>
                        {/* <p className="p">Xhattmahs is not attacking your base!</p> */}
                        <div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="entypo--user"></div>
                    <div className="textBox">
                        <div className="textContent">
                            <p className="h1">Leader 2</p>
                            <label className="container-check">
                                <input type="checkbox" onChange={() => handleCheckboxChange("Member 2")} disabled={alreadyVoted || isSubmitting} />
                                <svg viewBox="0 0 64 64" height="2em" width="2em">
                                    <path
                                        d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                                        pathLength="575.0541381835938" className="path"></path>
                                </svg>
                            </label>
                        </div>
                        {/* <p className="p">Xhattmahs is not attacking your base!</p> */}
                        <div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="entypo--user"></div>
                    <div className="textBox">
                        <div className="textContent">
                            <p className="h1">Leader 3</p>
                            <label className="container-check">
                                <input type="checkbox" onChange={() => handleCheckboxChange("Member 3")} disabled={alreadyVoted || isSubmitting} />
                                <svg viewBox="0 0 64 64" height="2em" width="2em">
                                    <path
                                        d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                                        pathLength="575.0541381835938" className="path"></path>
                                </svg>
                            </label>
                        </div>
                        {/* <p className="p">Xhattmahs is not attacking your base!</p> */}
                        <div>
                        </div>
                    </div>
                </div>
                <button onClick={handleSubmit} disabled={alreadyVoted || isSubmitting}>
                    <span>Submit</span>
                    <svg width="34" height="34" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="37" cy="37" r="35.5" stroke="black" stroke-width="3"></circle>
                        <path d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z" fill="black"></path>
                    </svg>
                </button>
            </div>
        </>
    );
};

export default CardComponent;
