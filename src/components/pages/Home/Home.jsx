import React,{useEffect} from 'react';
import '../../assets/css/style.css';
import bg from '../../assets/img/home.jpg'
import { SocialIcon } from 'react-social-icons';
import { Link } from 'react-router-dom';
import NavBar from '../../NavBar/Header/Navbar'
import Footer from '../../NavBar/Footer/Footer'
import "./Home.css";
function Home() {
    
    useEffect(()=>{
        document.body.style.backgroundImage = `url('${bg}')  `;  
        
    },[]);
    return (
       <React.Fragment>
           <NavBar />
       
                                
           <div className="containerh" id="homes" >
          
          <header className="masthead" >    
          
          </header>  
           
         <div className="textc">
         <center>                     
  <div className="topphoto">

  </div>
         </center> 
             <div className="pha"><p>Computer games are the most popular entertainments in modern societies and they target
                  a variety of people in different ages. The addiction to the rivalry and excitements of 
                  the games make them the most common recreational programs for today's teenagers, so that they 
                  do anything to reach a higher level of the game, they immerse in the game so much that they completely 
                  separate from their surroundings. Challenging with the obstacles and reaching a higher level in the game,
                   make the players excited and losing the game make them anxious.</p>
<p>Since these games are known as the second entertainment after TV, opponents of these games emphasize on their negative 
effects such as stimulating anger and violence, costing a lot of money and having negative effects of physical and 
mental health, which are much higher than the positive effects of the games such as increasing the coordination of 
eyes and hands.
Currently in Iran, a great part of students' leisure time out of school is spent on computer games.6 The reasons for 
adolescents' attraction to these games include being excited and easily accessible while authorities and families do not have 
any proper plan for students' leisure time and there is not many options for their entertainments. 
Playing computer games to some extent can be useful, but long-term playing leads to various physical and mental 
complications.</p>

  <p>
  Long term involvement with these games means the players long term tension, restlessness and worrisome 
  and during the game, physical tensions and real physical stimulations are experiences. By sympathetic 
  nervous system stimulation, this can gradually make this system sensitive and ready for response to 
  limited stimulants, while causes anxiety symptoms in the player. A study by Sherry et al (2001) investigating 
  the reasons for playing video and computer games by adolescents and their game priorities on 535 adolescents in 
  age 15-20 in the West USA found that 68% of adolescents had these games as their weekly entertainment. 
  The reasons for playing these games among boys were excitements and challenges and they insisted to win. Moreover, 
  sport and violent games were more attractive for boys</p></div>
             </div>         

       </div>
          
                <Footer/>
             </React.Fragment>  
             
      
             
            
       
    )
}

export default Home;
