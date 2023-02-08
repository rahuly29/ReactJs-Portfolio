

const Contactus = () =>{
  return(
    <main>
      <section className="contact" id="contact">
    <div className="heading">
        <h2>Contact</h2>
        <span>Connect With Us</span>
    </div>
    <div className="contact-form">
        <form action="mailto: yadavrahul3298@gmail.com">
            <input type="text" placeholder="Your Name"/>
            <input type="email" name="" id="" placeholder="Your Email"/>
            <textarea name="" id="" cols="20" rows="10" placeholder="Write Message Here..."></textarea>
            <input type="button" value="Send" class="contact-button" />
        </form>
    </div>
 </section>
    </main>
  )
}

export default Contactus;