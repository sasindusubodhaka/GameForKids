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
             <div className="pha"><p>Playing video games is a popular activity people do in their free time. However, 
                 video games can have major effects on health. People debate whether these effects are good or bad. Video 
                 games can improve children’s learning, health, and social skills.
Both children and adults enjoy playing video games. There’s research that shows there’s a benefit to playing video games. 
There’s also research that implies video games could lead to disrupted sleep, media addiction, and violent behavior.
If your child is showing concerning behavior, you may need to step in. These may include irritability when not playing their 
game or they’re showing increasing aggression. Even if this behavior occurs, there are steps you can take to regulate violent 
media intake. We hope to help you.
</p>
<h3 className="hed">How Safe Are Video Games?
</h3>
<p>Video gamers, parents, politicians and the press often lionize or attack video games, which opens 
    the door to spin that obfuscates our understanding of how these games affect people. For example, the European 
    Parliament has been debating whether to limit children’s access to video games. In a press statement about the report that 
    resulted from its deliberations, the parliament concluded that games could have “harmful effects on the minds of children.” 
    Reporting on this statement, however, the headline in the Guardian read, “Video games are good for children.”


</p>
<img className="safimge" src="https://www.npd.com/wp-content/uploads/2021/06/Cheerful-kids-are-sitting-together-on-sofa-at-home.-Girls-are-playing-game-console-while-boy-is-cheering-for-them.jpg"/>

  <p>
  Video games are relatively safe for your child to play. Despite previous research suggesting the dangers of video games, 
    there are ways to protect your child. You can prevent potential harm from a video game by monitoring and limiting what 
    they’re playing. Talk to your child about staying safe online. 
Building a trusting relationship will make your child want to talk to you. They’ll be more inclined to let you know how they 
are feeling about life. This can help you notice if they are struggling and need help. There are three parts to consider before 
you worry about your child and violent video games: their personality, the situation they're in, and their motivation behind playing 
video games. These play a part in how they react to violence on screen.</p>
<p>However, Psychologists and neuroscientists conducting well-designed studies are beginning to shed light on the actual effects of video games. These studies show a clear trend: Games have many consequences in the brain,
     and most are not obvious—they happen at a level that overt behaviors do not immediately reflect. Because the effects are subtle,
      many people think video games are simply benign entertainment.

Research projects of variable strength have substantiated claims of both beneficial and harmful effects. Too often the discussion ends 
there in a “good” versus “evil” battle, reminiscent of the plots of the violent video games themselves.</p>
<h3 className="hed">Benefits of Playing Video Games</h3>
<p>Video games are good for helping children develop problem-solving skills. They aren’t lazy as previous research has suggested. 
Video games can strengthen your child’s cognitive skills. They can improve your child’s capacity to think in
 three-dimensional ways. </p>
</div>
             </div>         

       </div>
          
                <Footer/>
             </React.Fragment>  
             
      
             
            
       
    )
}

export default Home;
