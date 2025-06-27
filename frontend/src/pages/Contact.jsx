import React from 'react'

const Contact = () => {
  return (
    <section className='px-4 mx-auto max-w-screen-md'>
      <h2 className='heading text-center '>
        Contact Us
      </h2>
      <p className='mb-8 lg:mb-16 font-light text-center text__para'>
        Got a technical issue? Want to send Feedback about a beta feature ? Let us Know
      </p>
      <form action="">
        <div>
          <label htmlFor="email"
           className='form__label'
          >Your Email
           <input type="email"  name="email" id="email"
           placeholder='example@gmail.com' 
           className='form__input mt-1'/>
          </label>
        </div>
        <div>
          <label htmlFor="subject"
           className='form__label  '
          >Subject
           <input type="text"  name="subject" id="subject"
           placeholder='Let us Know how we can help you' 
           className='form__input mt-2'/>
          </label>
        </div>
        <div>
          <label htmlFor="message"
           className='form__label  '
          >Your Message 
           <textarea rows={6} type="text"  name="message" id="message"
           placeholder='Leave a Comment' 
           className='form__input '/>
          </label>
        </div>
        <button type='submit' className='btn rounded sm:w-fit'>Submit</button>
      </form>
    </section>
  )
}

export default Contact
