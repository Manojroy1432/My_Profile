import React from 'react'
import { toast } from 'react-toastify';

function Contact() {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "959ae268-d4b6-4ba3-9d39-7c05426ebc67");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("");
        toast.success("Form Submitted Successfully")
        event.target.reset();
      } else {
        console.log("Error", data);
        toast.error(data.message);
        setResult("")  
    }
    };



    return (
        <div>
            <div className='container mx-auto p-7 md:p-10 lg:p-32 flex items-center justify-center flex-col ' id='Contact'>
                <h2 className='font-bold text-xl md:text-4xl lg:text-6xl my-3 md:my-7'>Contact <span className='underline font-light'>With Us</span></h2>
                <p className=' text-sm md:text-xl max-w-80 items-center text-gray-500 '>Let's discuss Manoj's all projects</p>
                <form action="" className='max-w-2xl mx-auto text-gray-600 pt-8' onSubmit={onSubmit}>
                    <div className='flex flex-wrap'>
                        <div className='w-full md:w-1/2 text-left'> Your Name
                            <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="text" name='Name' placeholder='Your Name' required />
                        </div>
                        <div className='w-full md:w-1/2 text-left md:pl-4'>Your Email
                            <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="email" name='Email' placeholder='Your Email' required />
                        </div>
                    </div>
                    <div className='my-6 text-left'>
                        Message
                        <textarea name="Message" id="" placeholder='Write Something' className='w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none' required></textarea>
                    </div>
                    <button className='bg-blue-600 text-white px-12 mb-10 py-2 rounded'>{result ? result : "Send Message"}</button>
                </form>
            </div>
        </div>
    )
}

export default Contact