import { useRef, useState } from "react";
import successCheck from "../assets/images/icon-success-check.svg";

function App() {
    const [valid, setValid] = useState({
        "fname": true,
        "lname": true,
        "email": true,
        "query": true,
        "message": true,
        "consent": true,
    });
    const [success, setSuccess] = useState(false);
    console.log(success);

    const fname = useRef(null);
    const lname = useRef(null);
    const email = useRef(null);
    const query = useRef(null);
    const message = useRef(null);
    const consent = useRef(null);

    const setTrue = (key) => {
        setValid(v => {
            if (v[key]) return v;
            let copy = { ...v };
            copy[key] = true;
            return copy;
        });
    };
    const submit = (e) => {
        let copy = { ...valid };
        let allValid = true;

        copy['fname'] = fname.current ? fname.current.checkValidity() : false;
        allValid = allValid && copy['fname'];
        copy['lname'] = lname.current ? lname.current.checkValidity() : false;
        allValid = allValid && copy['lname'];
        copy['email'] = email.current ? email.current.checkValidity() : false;
        allValid = allValid && copy['email'];
        copy['query'] = query.current ? query.current.checkValidity() : false;
        allValid = allValid && copy['query'];
        copy['message'] = message.current ? message.current.checkValidity() : false;
        allValid = allValid && copy['message'];
        copy['consent'] = consent.current ? consent.current.checkValidity() : false;
        allValid = allValid && copy['consent'];
        setValid(copy);

        if (allValid) {
            setSuccess(true);
            setTimeout(() => {
                setSuccess(false);
            }, 3000);
            e.preventDefault();
        }
    };

    return (
        <div className="p-4 min-h-dvh flex flex-col justify-center items-center">
            <div className={`fixed top-4 bg-green-dark text-white p-4 rounded-xl ${success ? 'block' : 'hidden'} animate-fade`}>
                <h3 className="flex items-center font-bold mb-2">
                    <img src={successCheck} className="inline-block mr-2" /> Message Sent!
                </h3>
                Thanks for completing the form. We&apos;ll be in touch soon!
            </div>
            <form className="flex flex-col gap-6 bg-white rounded-lg p-6 text-grey-dark w-full max-w-2xl">
                <h1 className="text-2xl font-bold">Contact Us</h1>
                <div className="flex flex-col gap-6 sm:flex-row sm:gap-4">
                    <label className="flex-grow">
                        First Name <span className="text-green-medium">*</span>
                        <input type="text" ref={fname} onChange={() => setTrue('fname')} className={`block-input mt-3 ${valid['fname'] ? '' : 'border-red'}`} required />
                        {!valid['fname'] && <div className="text-red mt-2">This field is required</div>}
                    </label>
                    <label className="flex-grow">
                        Last Name <span className="text-green-medium">*</span>
                        <input type="text" ref={lname} onChange={() => setTrue('lname')} className={`block-input mt-3 ${valid['lname'] ? '' : 'border-red'}`} required />
                        {!valid['lname'] && <div className="text-red mt-2">This field is required</div>}
                    </label>
                </div>
                <label>
                    Email Address <span className="text-green-medium">*</span>
                    <input type="email" ref={email} onChange={() => setTrue('email')} className={`block-input mt-3 ${valid['email'] ? '' : 'border-red'}`} required />
                    {!valid['email'] && <div className="text-red mt-2">Please enter a valid email address</div>}
                </label>
                <div className="flex flex-col gap-3">
                    <div>
                        Query Type <span className="text-green-medium">*</span>
                    </div>
                    <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                        <label className="block-input has-[:checked]:bg-green-light has-[:checked]:outline">
                            <input ref={query} onChange={() => setTrue('query')} type="radio" name="QueryType" className="mr-2 accent-green-medium" required />
                            General Enquiry
                        </label>
                        <label className="block-input has-[:checked]:bg-green-light has-[:checked]:outline">
                            <input onChange={() => setTrue('query')} type="radio" name="QueryType" className="mr-2 accent-green-medium" />
                            Support Request
                        </label>
                    </div>
                    {!valid['query'] && <div className="text-red mt-[-4px]">Please select a query type</div>}
                </div>
                <label>
                    Message <span className="text-green-medium">*</span>
                    <textarea ref={message} onChange={() => setTrue('message')} rows={3} className={`block-input mt-3 resize-none ${valid['message'] ? '' : 'border-red'}`} required></textarea>
                    {!valid['message'] && <div className="text-red mt-2">This field is required</div>}
                </label>
                <div>
                    <label className="flex gap-4">
                        <input ref={consent} onChange={() => setTrue('consent')} type="checkbox" className="accent-green-medium" required />
                        <div>
                            I consent to being contacted by the team <span className="text-green-medium">*</span>
                        </div>
                    </label>
                    {!valid['consent'] && <div className="text-red mt-2">To submit this form, please consent to being contacted</div>}
                </div>
                <button onClick={submit} className="block-input border-0 bg-green-medium text-white hover:bg-green-dark" >Submit</button>
            </form>
            <div className="mt-4">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" className="text-green-medium">Frontend Mentor</a>.
                Coded by <a href="https://www.github.com/blue56789" target="_blank" className="text-green-medium">blue56789</a>.
            </div>
        </div>
    )
}

export default App;
