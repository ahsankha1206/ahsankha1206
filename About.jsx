import React from 'react'
import { IoMdCheckboxOutline } from "react-icons/io";

function About() {
  return (
    <>
    
    <div className="full">

    <div  className="container-about">
        <h1>ABOUT THE AMERICAN BOOK PUBLISHING</h1>
        <p>Our team of talented designers can create eye-catching book covers that reflect your book's genre and capture your reader's attention. We'll work with you to create a cover that represents your book and appeals to your target audience.</p>
        </div>

    </div>


   <div className='about-bg'>
    <div  className="container-about-2">
   <div  className="content-2bout-2">
    <h1>
     ABOUT THE AMERICAN BOOK PUBLISHING
     <br/>
     PUBLISHING
     <span>
      PARTNERS
     </span>
    </h1>
    <p>
     Are you ready to share your story with the world? Look no further than The American Book Publishing for all your book publishing needs. Our team of experts will guide you through the entire publishing process, from editing and proofreading to cover design and distribution. We offer a wide range of publishing options, including print-on-demand, e-book, and audiobook formats, to ensure your book is available in the formats your readers prefer.
    </p>
    <p>
     At The American Book Publishing, we have an experienced team of publishing professionals who are dedicated to helping you achieve your book publishing goals. From manuscript evaluation to book design and marketing, our team will work with you to create a book that you'll be proud to share with the world. We pride ourselves on our attention to detail and our commitment to ensuring that your book is published to the highest standards.
    </p>
    <a  className="button-bout-2" href="#">
     Get Started
    </a>
   </div>
   <div  className="image-container-about-2">
    <img alt="Book cover of 'A Family of Time' showing three astronauts in space" height="300" src="aboutimg1.webp" width="600"/>
   </div>
  </div>
  </div>


  <div  className="container-about-3">
        <div  className="text-about-3">
            EXPLORE LITERARY WONDERS<br/>
            WHERE IMAGINATION THRIVES<br/>
            AND STORIES THRIVE.
        </div>
        <a href="#"  className="button-about-3">CONTACT WITH US</a>
    </div>


    {/* ----------------------------------------------------------------

    ABOUT The American Book Publishing PUBLISHING partners

    ---------------------------------------------------------------- */}

<div className="about-American-bg">
<div  className="container-American">
        <div  className="book-image-American">
            <img src="aboutimg2.png" />
        </div>
        <div  className="content-American">
            <h1>ABOUT THE AMERICAN BOOK PUBLISHING PUBLISHING <span>PARTNERS</span></h1>
            <p>Are you ready to share your story with the world? Look no further than The American Book Publishing for all your book publishing needs. Our team of experts will guide you through the entire publishing process, from editing and proofreading to cover design and distribution. We offer a wide range of publishing options, including print-on-demand, e-book, and audiobook formats, to ensure your book is available in the formats your readers prefer.</p>
            <p>At The American Book Publishing, we have an experienced team of publishing professionals who are dedicated to helping you achieve your book publishing goals. From manuscript evaluation to book design and marketing, our team will work with you to create a book that you'll be proud to share with the world. We pride ourselves on our attention to detail and our commitment to ensuring that your book is published to the highest standards.</p>
            <div  className="core-values-American">
                <h3>Our core values comprise:</h3>
                <ul>
                    <li><i><IoMdCheckboxOutline /></i> Always prioritize high-quality work</li>
                    <li><i><IoMdCheckboxOutline /></i> Commitment to working together</li>
                    <li><i><IoMdCheckboxOutline /></i> To be dedicated</li>
                </ul>
            </div>
            <div  className="buttons-American">
                <a  className="get-started-American" href="#">Get Started</a>
                <a  className="chat-now-American" href="#">Chat Now</a>
            </div>
        </div>
    </div>
    </div>

    </>
  )
}

export default About