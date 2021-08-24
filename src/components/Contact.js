import React, { useState, useRef } from 'react'
import { motion } from "framer-motion"
import { useOnScreen } from "../hooks"

const Contact = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        date: "",
        time: "",
        number: "",
        message: "",
    })

    function handleChange(e) {
        const value = e.target.value;
        setForm({
            ...form,
            [e.target.name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("submitted")
    }

    //  FRAMER ANIMATIONS
    const ref = useRef()
    const inView = useOnScreen(ref);

    return (
        <motion.section
            ref={ref}
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ type: "tween", duration: 0.8 }}
            className="contact"
            id="contact">
            <div className="container">
                <aside>
                    <h3>Book an appointment with us, we’ll be glad to meet you.</h3>
                    <div className="underline"></div>
                    <p>Fill the form to schedule an appointment with us.</p>
                </aside>
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-12">
                            <label htmlFor="name">Full Name</label>
                            <input
                                type="text"
                                value={form.name}
                                onChange={handleChange}
                                name="name"
                                placeholder="Jack Robbin" />
                        </div>

                        <div className="col-12 col-sm-6">
                            <label htmlFor="email">E-mail</label>
                            <input
                                type="text"
                                value={form.email}
                                onChange={handleChange}
                                name="email"
                                placeholder="name@domian.com" />
                        </div>
                        <div className="col-12 col-sm-6">
                            <label htmlFor="number">Phone Number</label>
                            <input
                                type="text"
                                value={form.number}
                                onChange={handleChange}
                                name="number"
                                placeholder="+234 ___ ___ ____" />
                        </div>

                        <div className="col-12 col-sm-6">
                            <label htmlFor="date">Preferred Date</label>
                            <input
                                type="date"
                                value={form.date}
                                onChange={handleChange}
                                name="date" />
                        </div>
                        <div className="col-12 col-sm-6">
                            <label htmlFor="time">Preferred Time</label>
                            <input
                                type="time"
                                value={form.time}
                                onChange={handleChange}
                                name="time" />
                        </div>

                        <div className="col-12">
                            <label htmlFor="message">Message</label>
                            <textarea
                                type="text"
                                value={form.message}
                                onChange={handleChange} name="message"
                                placeholder="Have something to tell us, type here..."
                                rows="4" />
                        </div>

                        <button
                            className="btn-main"
                            type="submit">Schedule Appointment</button>
                    </div>
                </form>
            </div>
        </motion.section>
    )
}

export default Contact
