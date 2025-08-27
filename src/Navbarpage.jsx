import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const Navbarpage = () => {
  const links = [
    { author: "home", href: "#", id: 1 },
    { author: "About", href: "#", id: 2 },
    { author: "contact", href: "#", id: 3 },
    { author: "services", href: "#", id: 4 },
    { author: "checkings", href: "#", id: 5 },
  ];
  const [togglebutton, settogglebutton] = useState(false);
  const [submitting, setSubmitting]= useState(false)
  //  const [statusMessage, setStatusMessage] = useState('')


    const form = useRef(null)
    const submittedAlert = () => toast.success("submitted",{style:{background:'#ECFDF5', color:'#065F46',},})
    const failedAlert = () => toast.error('not submitted',{style:{background:'#FEE2E2', color: '#991B1B',}})

 const sendEmail = (e) => {
    e.preventDefault();
    setSubmitting(true)
    if(!form.current.from_name.value){
      return
    }

    emailjs
      .sendForm('service_huq2609', 'template_3ppkath', form.current,
       'aHDyWXNTMgxi9SoPN',
      )
      .then(
        () => {
          console.log('SUCCESS!');
          
          form.current.reset()
          console.log(form.current.firstname)
          setSubmitting(false)
          // setStatusMessage('meesage sent to mail')
        submittedAlert();
        },
        (error) => {
          console.log('FAILED...', error.text);
          setSubmitting(false)
          // setStatusMessage('not submitted')
          failedAlert();
         
 });
  };



  return (
    <div>
      <header className="bg-blue-500 p-2">
        <div className="max-w-6xl mx-auto flex justify-between">
          <a href="#">
            <i>
              <b>FastCars</b>
            </i>
          </a>

          <button
            className="block sm:hidden font-bold text-xl"
            onClick={() => settogglebutton(!togglebutton)}
          >
            {togglebutton ? "✕" : "☰"}
          </button>

          <nav className="space-x-3 hidden sm:block ">
            {links.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="text-white hover:text-yellow-300 transition-colors duration-300"
              >
                {link.author}
              </a>
            ))}
          </nav>
        </div>

        <div
          className={`transition-all duration-900 ${
            togglebutton ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {togglebutton && (
            <nav className="flex flex-col items-end sm:hidden">
              {links.map((link) => (
                <div key={link.id} href={link.href}>
                  <h3 className={togglebutton && "text-white"}>
                    {link.author}
                  </h3>
                </div>
              ))}
            </nav>
          )}
        </div>
      </header>

      <section>
        <div
          className="h-screen bg-cover bg-center"
          style={{ backgroundImage: "url('/images/peter-broomfield.jpg')" }}
        >
          {/* <div> */}
          <h2 className="sm:block hidden text-purple-200 text-5xl font-thin uppercase pt-25 pl-25">
            Schedule an on-site visit to cash <br />
            in your vehicle and enjoy the
            <br />
            <span className="text-yellow-400">advantages to sell</span> your car
            at <br />
            the best price.
          </h2>
        </div>
      </section>

      <section className="max-w-6xl mx-auto">
        <h2 className="py-10 text-center text-4xl text-purple-500"><span className="text-2xl">LGND Motorsports</span><br/> BEST IN CLASS VEHICLES
</h2>
        <div className="flex flex-col sm:flex-row justify-between gap-6 px-3">
          <div className="flex flex-col">
            <img src="/images/josh-berquist.jpg" className="w-500 h-auto" alt="" />
            <h2 className="font-bold text-xl">Inventory</h2>
            <h3 className="font-thin text-lg text-black">Whether you're purchasing online, picking out a car to come see in person, or just browsing, click below to view our vehicles!</h3>
          </div>
          <div className="flex flex-col">
            <img src="/images/marek-posp.jpg" className="w-500 h-auto" alt="" />
            <h2 className="font-bold text-xl">Autoworld Advantage</h2>
            <h3 className="font-thin text-lg text-black">Easy and quick financing options for all types of credit. Get pre-approved in seconds with our secure credit application.</h3>
          </div>
          <div className="flex flex-col">
            <img src="/images/panyukov.jpg" className="w-500 h-auto" alt="" />
            <h2 className="font-bold text-xl">BEST PRICING/RATES WITHIN 300 MILES</h2>
            <h3 className="font-thin text-lg text-black">Schedule an on-site visit to cash in your vehicle and enjoy the advantages to sell your car at the best price.
</h3>
          </div>
        </div>
      </section>

      <section className="py-10 px-5">
        <h3 className="text-center text-3xl"><i>SEND US A MESSAGE!!!</i></h3>
        <form 
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col w-full max-w-xl mx-auto">

          <label className="text-2xl font-thin">Name</label>
          <input type="text" name="from_name" className="flex-1  rounded-sm border border-gray-400 outline-none p-2" />

          <label className="text-2xl font-thin">Address</label>
          <input type="text" name="reply_to" className="flex-1 rounded-sm border border-gray-400 outline-none p-2"/>

          <label className="text-2xl font-thin">Email</label>
          <input type="text" name="Email" className="flex-1 rounded-sm border border-gray-400 outline-none p-2"/>

          <label className="text-2xl font-thin">PhoneNumber</label>
          <input type="text" name="phone-number" className="flex-1 rounded-sm border border-gray-400 outline-none p-2"/>
 <button className="bg-green-500 py-1 px-5 text-white my-3">{submitting ? "submitting" : "submit"}</button>
 {/* <div ><p className={`text-center ${statusMessage ? "text-green-500" : "text-red-600"}`}>{statusMessage ? "meesage sent to mail" : "not submitted"}</p></div> */}
        </form>

       
      </section>
          <Toaster />
    </div>
  );
};

export default Navbarpage;
