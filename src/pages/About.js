import React from "react"
import '../css/about2.css'
import { Link } from 'react-router-dom';

function About() {
    return (
        <div>
            <div className="left">
                <div className="box">
                    <p>About US</p>
                </div>
                <div className="textabout">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo molestiae repellendus laborum excepturi ad ullam,
                    nisi illo, odit nulla veritatis officiis reprehenderit beatae necessitatibus eveniet quia magni amet et velit
                    nihil ea deserunt harum blanditiis! Velit quaerat veniam animi alias! Reprehenderit sequi enim vitae ullam, eum
                    eius ipsum consectetur? Officia expedita porro accusantium illo aspernatur maiores cumque? Ipsa asperiores,
                    consequuntur corporis, blanditiis eum illo modi maiores id corrupti quam vel perferendis fuga! Doloribus,
                    tempora qui quasi tenetur dolorem ipsum harum autem, velit modi at accusamus, ratione et inventore. Quam
                    inventore reiciendis totam libero repellat aliquam quibusdam earum explicabo. Dolores, atque.
                </div>
                <div className="social-icons"><a href="#" target="_blank" className="social-link twitter-link "><img src="twitter.png" width={36} height={36} alt="" /></a>
                    <a href="#" target="_blank" className="social-link facebook-link "><img src="./assets/fb.png" width={36} height={36} alt="" /></a>
                    <a href="#" target="_blank" className="social-link instagram-link "><img src="./assets/insta.png" width={36} height={36} alt="" /></a>
                    <a href="#" target="_blank" className="social-link dribble-link "><img src="./assets/dribble.png" width={36} height={36} alt="" /></a>
                    <a href="#" target="_blank" className="social-link behance-link"><img src="./assets/behance.png" width={36} height={36} alt="" /></a>
                </div>

            </div>
        </div>
    )
}

export default About;