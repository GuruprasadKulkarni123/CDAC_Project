import Footer from '../../Footer/Footer'
import Header2 from '../../Header2/Header2'
import Background from '../../../images/licoffice.webp';


const AgentBenefits = () => {
    return (
        <div>
            <Header2/>

            <h1 style = {{textAlign : "center", color: "darkgoldenrod", backgroundColor: "darkblue", paddingBottom :10}}> Agent Benefits</h1>

            <div className="row" style={{  backgroundImage: `url(${Background})`, backgroundRepeat : "no-repeat", backgroundSize : "110%", paddingTop:50, paddingBottom:50}}>
                <div className="col-1"></div>
                <div className="col" style = {{ backgroundColor: "lightyellow", opacity : 0.9}}>
                    <div style = {{fontSize : 24}}><b>Know more about the benefits of becoming an LIC agent</b></div>
                    <br/>
                    <ul>
                        <li style = {{fontSize : 20}}>
                            <b>Rewarding Career</b>
                            <div>You will help people realise their dreams by fulfilling their financial goals. 
                                The difference you make to their lives is more rewarding and satisfying than you could ever imagine.</div>
                        </li>

                        <li style = {{fontSize : 20}}>
                            <b>A Successful Team</b>
                            <div>By joining us, you will be a part of the country's finest team of life insurance Agents. In the year 2015, 
                                we contributed 4021 members to the Million Dollar Round Table: a global forum that salutes the world's most successful Insurance Agents.</div>
                        </li>

                        <li style = {{fontSize : 20}}>
                            <b>Attractive Remuneration</b>
                            <div>We offer one of the best remuneration systems in the industry that not only takes care of your current earnings, but also guarantees an earning for the future. 
                                What's more, you can set your own income targets with a potential to earn as much as you want for the rest of your life.</div>
                        </li>

                        <li style = {{fontSize : 20}}>
                            <b>Independence</b>
                            <div>As an Agent, you will be a true entrepreneur. You have the freedom to be your own boss: work for yourself, choose your own clients and make your own money. 
                                All of this, without your having to make any initial capital investment.</div>
                        </li>

                        <li style = {{fontSize : 20}}>
                            <b>World-Class Training</b>
                            <div>We provide you with the best-in-class training systems, since that is what differentiates LIC Agent from the rest. 
                                Even if you don't have previous experience in selling, our multi-dimensional training programme conducted by our qualified in-house training personnel, will make you a specialist in life insurance sales.</div>
                        </li>

                        <li style = {{fontSize : 20}}>
                            <b>Commitment To Career Agency System</b>
                            <div>Our commitment to the Career Agency System means that, we support you and your efforts not just today, but at every stage of your business. 
                                We believe in encouraging our Agents to strive towards the highest levels of success, throughout their careers. 
                                In fact, depending on your performance, we also offer a management career option with the company.</div>
                        </li>

                        <li style = {{fontSize : 20}}>
                            <b>Infrastructure Support</b>
                            <div>We have invested in creating a state-of-the-art infrastructure at each of our Branch Offices. 
                                You will have access to the necessary tools, technology and people support that will enable you to build a profitable long-term business.</div>
                        </li>

                        <li style = {{fontSize : 20}}>
                            <b>Full Range Of Products And Services</b>
                            <div>You can offer your customers over 50 product combinations of our unique Products and Riders, to help them meet all their financial goals. 
                                In order to give you a greater competitive edge, we are also continuously working on newer and more innovative products.</div>
                        </li>

                        <li style = {{fontSize : 20}}>
                            <b>Sales And Marketing Support </b>
                            <div>We support our Agents with innovative sales and marketing tools. 
                                The Sales, Promotions and Marketing collaterals that we provide will help you take your business to new heights. </div>
                        </li>

                        <li style = {{fontSize : 20}}>
                            <b>Financial Strength</b>
                            <div>LIC offers you and your customer unmatched financial strength and solidity.</div>
                        </li>
                    </ul>
                </div>
                <div className="col-1"></div>
            </div>
            <Footer></Footer>
        </div>
    );
}
export default AgentBenefits