import { Row,Col,Card,CardBody,CardImg,CardTitle,CardText,CardColumns} from 'reactstrap';
import futureOpen from "../../assets/images/the future is open.svg" 
import eventBanner from "../../assets/images/osca summit banner.jpeg"
import audiencePic from "../../assets/images/audience.jpg" 
import stagePic from "../../assets/images/stage.jpg"
import malingaPic from "../../assets/images/malinga speaker.jpeg"
import musokePic from "../../assets/images/musoke speaker.jpeg"


export const SummitHome =()=>{
    return (  
      <div style={{marginLeft:'2%',marginRight:'2%'}} >

         <div>

        
         <Card className='m-2p-3' color='dark' >
             <CardBody>
                 <Row className='text-light' >
                    <Col>
                        <Row  >
                            500+
                        </Row>
                        <Row >
                        ATTENDEES
                        </Row>
                    </Col>
                    <Col>
                         <Row  >
                      1
                        </Row >
                         
                        <Row  >
                        DAYS
                        </Row>
                    </Col>
                    <Col >
                        <Row  >
                            20+
                        </Row>
                        <Row  >
                        TALKS
                        </Row>
                    </Col>
                  
            </Row>
             </CardBody>

         </Card>


         </div>
            
            <hr/>
          <hr/>
          <hr/>

          <div className='list-group-horizontal-sm'>

              <Row>
                  <Col>
                    <div>
                    <img src={futureOpen} width="60%" style={{height:"80%",objectFit:"contain"}}  alt="future is open" />                 

                    </div>

                  </Col>

                  <Col>
                  <div>
                      <p>
                      Open Source Community Africa is a community aimed at creating and
                      supporting the open source movement within Africa. As a community,
                      we intend to help integrate the act of open source contribution to
                      African developers whilst strongly advocating the movement of free
                      and open source software.
                      </p>

                      <p>
                      Open Source Festival is a high profile event that would attract student
                      delegates, developers, designers and corporate organizations on a
                      large scale with series of talks, workshops, and awareness of open-
                      sourced developer tools. The second edition is going to be a forum for networking,
                      discussions and ideas proration around latest happenings
                      in technology as well as the growth of open source in Africa.

 
                      </p>
                      Through this festival, we intend to open the eyes of Africans so they can
                      be aware that FUTURE IS OPEN.

                      <p>
                          
                    </p>
                  </div>

                  </Col>


              </Row>

          </div>
          <hr/>
          <hr/>
          <hr/>
                <br/>

        <div>
                <center><h1>Meet Our <br/>Speakers</h1></center>
                <br/>

        <div>
              <Row>
                  <Col>
                  <img src={malingaPic} width="100%" style={{height:"80%",objectFit:"contain"}} alt="Event Banner" />     

                  </Col>
                  <Col>
                  <img src={musokePic} width="100%" style={{height:"80%",objectFit:"contain"}} alt="Event Banner" />     
                  </Col>
                  
                  
              </Row>
  
          </div>      
        </div>
        
        <br/>
        <hr/>
          <hr/>
          <hr/>

          <center><h1>Sponsors</h1></center>
                <br/>

          <br/>
        <hr/>
          <hr/>
          <hr/>

          <center><h1>Past Events</h1></center>
                <br/>

          <div>
              <Row>
                  <Col>
                  <img src={audiencePic} width="100%" style={{height:"80%",objectFit:"contain"}} alt="Event Banner" />     

                  </Col>
                  <Col>
                  <img src={stagePic} width="100%" style={{height:"80%",objectFit:"contain"}} alt="Event Banner" />     
                  </Col>
                  
                  
              </Row>
  
          </div>      


      </div>
    );
  }
  
  