import Header from "./components/Header/Header";
import React, { Component } from "react";
import Mascot from "./components/Mascot";
import MascotFriends from "./mascots.json";
import Wrapper from "./components/Wrapper";
import Score from "./components/Score";

//var ghpages = require('gh-pages');

class App extends Component {
    state = {
        MascotFriends,
        Score: 0,
        HighScore: 0,
        clicked:[]
    };
    handleScore = (id, name) => {
        MascotFriends.sort(() => 0.5 - Math.random())
         console.log(id, name);
         if (this.state.clicked.indexOf(id) === -1) {
            this.setState({ Score: this.state.Score + 1,
                            clicked: [...this.state.clicked, id]
            });
        } else if 
            (this.state.clicked.indexOf(id) != -1 && this.state.Score > this.state.HighScore) {
                alert("New high Score!")
                this.setState({ HighScore: this.state.Score,
                                Score: 0,
                                clicked: []
                })
         }   else {
            alert("You lose!")
                this.setState({ Score: this.state.Score = 0,
                                clicked: [] });
                }
            }
    


    render() {
        return ( 
           
            <Wrapper>
                 <Header/>
                 <Score
                 score = {
                     this.state.Score
                     
                 }
                 HighScore = {
                     this.state.HighScore
                 }
                     />

            {
                this.state.MascotFriends.map(MascotFriend => ( 
                    <Mascot 
                    id = {
                        MascotFriend.id
                    }
                    key = {
                        MascotFriend.id
                    }
                    name = {
                        MascotFriend.name
                    }
                    image = {
                        MascotFriend.image
                    }
                    handleClick = {
                        this.handleScore
                    }
                    />
                    
                ))
            } 
            
     </Wrapper> 
     )
    }

}
//ghpages.publish('dist', function(err) {})
export default App;