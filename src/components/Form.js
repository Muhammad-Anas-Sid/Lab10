import React from 'react';
import '../styles/Form.css';

function Form()
{
    return(
        <section className="form-section">
            <div className="container">
                <h2 className="form-heading">Any Trouble?</h2>
                <p className="description">Fill out this form </p>
                <form className="form">
                    <div className="inputGroup">                                                                                                                                                                                    " >
                        <label className="label"> Name </label>
                        <input type="text"
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        className="input"
                        required/>
                    </div>
                    <div className="inputGroup">
                        <label className="label">
                            Email
                        </label>
                        <input type="email" placeholder="Enter your email" className="input"/>
                    </div>
                    <div className="inputGroup">
                        <label className="label">Phone</label>
                        <input type="tel" id="phone" placeholder='Enter your phone number' className="input" pattern="[0-9]{11}" required/>
                    </div>
                    <div className="inputGroup">
                        <label className="label" >
                            Message
                        </label>
                        <textarea name="Message" placeholder='Your Query or message' className='textArea' rows={5} required></textarea>
                    </div>
                    <div><button type="submit" className="submit">Submit</button></div>
                </form>
            </div>
        </section>
    );
}
export default Form;