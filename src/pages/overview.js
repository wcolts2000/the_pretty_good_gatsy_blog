import React from 'react'
import './overview.css'

import Layout from '../components/layout'
import Head from '../components/head'

const Overview = () => (
  <Layout>
    <Head title="About Me" />
    <div className="overview-container">
      <div className="overview-intro">
        <h1>A Little About Me...</h1>
        <h2>
          So how in the world did I end up wanting to learn web development?
        </h2>
      </div>
      <img
        className="overview-img"
        src="https://images.pexels.com/photos/326424/pexels-photo-326424.jpeg?auto=compress&cs=tinysrgb&h=350"
        alt="desk with computer and notepad"
      />
      <div className="overview-intro-container">
        <p>
          I was hired on at a large format printing company that was just
          starting up back in 2013 to be a sales rep for their wholesale
          division. My job would be to go around to the local printing shops and
          related companies or freelancers that needed wholesale printing
          services and establish relationships with them, building the business.
        </p>
        <p>
          A short while after this occurred and my training and research in the
          industry was finishing up, the owners partner decided to part ways due
          to personal differences that I will not go into.
        </p>
        <p>
          This made it difficult as the business was now the owner, myself, and
          a part time, mostly remote graphic designer that was in college
          getting his degree in design.
        </p>
        <p>
          At this time I took it upon myself to learn Adobe Illustrator as this
          was the industry standard for vector graphics and in the large format
          industry you want to work with vectors when at all possible for
          scaling purposes...that's the point of large format...it's large, lol.
        </p>
        <p>
          Mind you now, up to this point, prior to getting hired on to be a
          sales rep, I had no prior knowledge of graphic design, Adobe products
          (beyond having heard of Photoshop) or what large format printing even
          was.
        </p>
        <p>
          Through many months and countless hours of YouTube tutorials on Adobe
          products I was handling all the graphic Design and the print
          production...printing the various medias, mounting the vinyl to the
          substrates for the signage, hemming and grommetting the
          banners...running the entire print shop while the owner focused on
          keeping us going and expanding and I am pleased to say that after the
          few years I was there the shop had grown well and had a decent amount
          of very large wholesale accounts and a steady run of retail clients as
          well.
        </p>
        <p>
          After I left there I approached a prior wholesale client that did
          vehicle wraps and screen printing because I wanted to further my
          knowledge of the print industry and working with him for 2 years I
          taught myself Photoshop through the internet and YouTube again, as
          well as a few tips from my new employer. He taught me how to do
          vehicle wraps and screen print garments and a little web design that
          he had picked up years before...
        </p>
      </div>
      <h2 className="face-palm-header">
        Wait wait wait... did you read that right? Years before?{' '}
      </h2>
      <img
        src="https://images.pexels.com/photos/23180/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
        alt="man holding his face"
        className="face-palm"
      />
      <div className="container-right">
        <p>
          Well my friend, thats right. What he knew was how to use photoshop and
          the slice tool and bring that into Adobe Dreamweaver CS6 and convert
          text areas and activate the anchor tags and that was it, Dreamweaver
          would output a table based layout from the slices and spit it out for
          you. Wham bam thank you ma'am.
        </p>
        <p>
          Well, needless to say, upon doing a little research myself into the
          current state of web development it turns out he was only about 8
          years behind or so. He knew no markup, css, didn't know frameworks
          even existed and knew nothing of SEO, but he DID get me interested in
          it and for that I am eternally grateful.
        </p>
      </div>
      <div className="whats-next">
        <h2>Ok, so now that I have some interest in it, what next?</h2>
        <p>
          Well, sad to say, there was actually a couple websites that went out
          to live that were made with those techniques before I learned
          better...shhhh, don't tell anyone, ok. I went back and remade them
          with actual markup and even made them mobile responsive, I atoned for
          my mistakes.
        </p>
        <p>
          So then came Bootstrap. Anyone who has looked into making web pages
          has heard of Bootstrap if you want to go a different route than the
          plug and play CMS platforms like WIX and WordPress and Joombla,
          etc...It's documentation is pretty easy and its basically cut and
          paste anyway so actual programming knowledge isn't even needed. Mind
          you, at this point I still haven't taught myself JavaScript, just HTML
          and CSS. That's only 2/3 of the basic building blocks of the web.
        </p>
        <p>
          You read that right, only <em>"2/3"</em> of the <em>"basic"</em>{' '}
          building blocks. So... cool, I can make pretty stuff appear on the
          screen, but I can't go beyond that...kinda...
        </p>
        <p>
          One of the clients I got at the place I work with now...Oh yeah,
          forgot to mention, after the guy that taught me vehicle wraps and silk
          screening left town, I went to help a friend run his new print
          shop...I told him a large format printer was a good investment and he
          ended up buying one but not knowing anything about how to run it so
          again, I find myself running a print shop but not really enjoying it.
          We do pick up a few web clients though and I have done 4 different
          sites for clients with him. So...as I was saying...one of the clients
          we got wanted an extensive contact section form for his carpet
          cleaning business and I had <strong>NO IDEA</strong> how to hook up
          the logic for the form. YouTube and a few hours to the rescue. I found
          a tutorial that was using PHP to connect the form logic and email it
          directly to your email...which ever one you coded into it.
        </p>
        <p>
          This was awesome! I had found what I needed and it was actually pretty
          straight forward. This mysterious thing that was programming was
          actually not that scary. I wanted more. So more videos and reading and
          a few Udemy courses on full-stack development and JavaScript and I
          came across a Programming YouTuber by the name of{' '}
          <a
            href="https://www.youtube.com/user/Tychos1"
            rel="noopener noreferrer"
            target="_blank"
          >
            Joshua Fluke
          </a>{' '}
          and he had some videos on this online school named Lambda that had an
          interesting tuition model and curriculum.
        </p>
      </div>
      <div className="lambda-intro">
        <h2>Enter Lambda...</h2>
        <p>
          So Lambda offers a free 2 week web development mini boot camp that
          covers the very basic fundamentals of web development, intro HTML,
          CSS, and a taste of JavaScript. Don't let that last part about a taste
          of JavaScript overshadow the mini boot camps JavaScript portion.
          That's the majority of the curriculum for the 2 weeks and they go
          pretty far for only 2 weeks.
        </p>
        <p>
          So I mentioned an interesting tuition model and curriculum. Let's skip
          over the tuition part for now and hit the curriculum first. So there
          are a bunch of coding boot camps that have been springing up over the
          last few years, saturating the market with sub-par coders with little
          to no foundational knowledge of actual programming principles and
          design patterns. Some have been good, many have been bad, and even a
          few of the ones that were thought highly of have gone under.
        </p>
      </div>
      <div className="wrap-up">
        <h2>So what makes Lambda different?</h2>
        <img
          src="https://images.pexels.com/photos/997725/pexels-photo-997725.jpeg?auto=compress&cs=tinysrgb&h=350"
          alt="lemons sliced in half with one being pink inside"
        />
        <p>
          Firstly, Lambda has 2 paths to choose from if you are interested in
          full stack web development. A part time course that is a year long (12
          months) Mon-Thur 6:00 pm - 9:00 pm Sat 9:00 am - 12:00 noon pacific,
          and a full time course running right around 7.5 months (30 weeks)
          Mon-Fri 8:00 am - 5:00 pm pacific. The full time was definitely the
          course for me. When I go for something, I like to go all in, and the
          fact that I would be coding all day every day was actually very
          appealing to me. Much more so than the evening.
        </p>
        <p>
          Cool, so whats the course look like? the first 5 weeks are on the Web
          Foundations...getting you used to HTML, CSS, JavaScript, a now
          industry standard form of version control called Git, from the creator
          of Linux, Linus Torvalds, and UI principles. Weeks 6-10 are getting a
          bit more advanced and we get into React, a frontend JavaScript library
          for building reusable components brought to us by the team at
          Facebook. We will learn Redux, React Router, HTTP/Ajax, and Functional
          Programming techniques.
        </p>
        <p>
          That's it on the frontend side. Now for the back end. Weeks 11-15 will
          take us through Node.js, Express, SQL, SQLite, Authentication, and
          OAuth.
        </p>
        <p>
          Now it's about this point that many boot camps will wrap up and have
          the final projects and wish you luck on your future endeavors. Not
          Lambda...now weeks 16-20 are going to introduce us to Data Structure
          and Algorithms, learning Python basics, Graphs, and Django, a Python
          framework. Weeks 21-25 will get into Networking and Computer
          Architecture, exposing us to C, a low level programming language,
          Operating Systems, Hash Tables.
        </p>
        <p>
          That's right, Lambda is basically throwing a computer science course
          in with the web development to round out the students knowledge and
          strives to ensure the graduates coming from them are well rounded and
          have the ability to pick up anything that they will need to learn in a
          timely and efficient way.
        </p>
        <p>
          Now comes the capstone project. Weeks 26-30 will be breaking up the
          students into small groups and giving them a project that they will be
          responsible to architect, code, and defend in a final presentation to
          the staff, students, and hiring partners...and to the internets, as
          they are recorded and uploaded to the YouTubes.
        </p>
        <h3>As for the tuition model...</h3>
        <p>
          Lambda has a few options again to choose from. You can pay full
          tuition up front at $20,000, half tuition up front at $10,000 and a
          one year ISA (Income Share Agreement), or $0 upfront and a 2 year ISA.
          So here is the interesting part of the ISA. The contract you sign
          states that you will pay Lambda 17% of your income for 2 years, not to
          exceed $30,000, and this only takes effect after you are making at
          least $50,000 salary. So if you land a dream job and are raking in the
          money, they don't continue to take 17% of the checks once you hit that
          $30,000 mark. The agreement also does not take effect until you have
          landed a job using the skills that you learned at Lambda, something
          involved with tech and web. If you go out and get a job selling real
          estate and are making over that $50,000 mark, the ISA isn't active as
          it is not in the industry. It also will go on hold if you end up
          losing that job until you find another.
        </p>
        <p>
          Lambda also has other courses as well. They have a Data Science
          Course, an Android Development and Computer Science Course, an IOS
          Development and Computer Science Course, a UX Design Course, and are
          looking to expand even more. For more info on these check out{' '}
          <a href="https://lambdaschool.com/about/">Lambda School's Website</a>{' '}
          yourself to see what they have to offer. I would highly recommend it,
          even for those coming in with no prior knowledge at all, as there are
          quite a few in every cohort that comes through and lambda has done an
          amazing job with them.
        </p>
      </div>
    </div>
  </Layout>
)

export default Overview
