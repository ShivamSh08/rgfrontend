import { useState } from "react";
import axios from "axios";

const Enquiry1 = () => {
    const [frmObj, setFrmObj] = useState({ name: "", email: "", query: "" });
    const [submitStatus, setSubmitStatus] = useState('');

    const changeHandler = (e) => {
        setFrmObj({ ...frmObj, [e.target.name]: e.target.value });
        console.log(frmObj);
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(frmObj);
        const handleSubmit = async () => {
            try {
                const response = await axios.post(process.env.REACT_APP_BACKEND_URL + "user/enquiry/", frmObj);
                let data = response.data;
                console.log(data);
                setSubmitStatus('Thank you for your enquiry!');
            } catch (err) {
                console.error("Submission Failed:", err);
                setSubmitStatus('Failed to submit enquiry. Please try again.');
            }
        };
        handleSubmit();
    }

    if (submitStatus === '') {
        return (
            <>
                <form onSubmit={onSubmitHandler}>
                    <div className="row d-flex justify-content-center">
                        <div className="col-sm-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                placeholder=""
                                onChange={changeHandler}
                            />
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <div className="col-sm-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                placeholder="abc@mail.com"
                                onChange={changeHandler}
                            />
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <div className="col-sm-3">
                            <label htmlFor="query" className="form-label">Query</label>
                            <textarea
                                className="form-control"
                                name="query"
                                rows="3"
                                onChange={changeHandler}
                            ></textarea>
                        </div>
                    </div>
                    
                    <div className="row d-flex justify-content-center mt-3">
                        <div className="col-sm-3 ">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </form>
            </>
        );
    } else {
        return (
            <>
                <div className="row d-flex justify-content-center">
                    <div className="col-sm-3">
                        <h4 className='text-primary'>{submitStatus}</h4>
                    </div>
                </div>
            </>
        );
    }
}

export default Enquiry1;
