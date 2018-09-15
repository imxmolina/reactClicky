import React, { Component } from 'react';
import Clickable from "./components/Clickable";
import Wrapper from "./components/wrapper";
import images from "./components/images/images.json";
import './App.css';


class App extends Component {
  state = {
    images,
    score: 0,
    topScore: 0,
    clicked: []
  };

  componentDidMount() {
    this.setState({ images: this.shuffle(this.state.images) });
  };

  handleClick = (id) => {

    console.log(id)
    let correct = false;
    const newImage = this.state.images.map(thing => {
      const newThing = { ...thing };
      if (newThing.id === id) {
        if (!newThing.clicked) {
          newThing.clicked = true;
          correct = true;
        }
      }
      return newThing;
    });
    
    correct
      ? this.correctClick(newImage)
      : this.incorrectClick(newImage);
  };

  correctClick = newImages => {
    console.log("It Worked")
    let score = this.state.score;
    let topScore = this.state.topScore;

    this.setState({
      score: this.state.score + 1,
      topScore: score > topScore ? score : topScore,
      images: this.shuffle(newImages),
    });
  }

  incorrectClick = images => {
    console.log("Game Over")
    this.setState({
      images: this.reset(images)
    });
  };

  reset = images => {
    const resetImages = images.map(thing => ({ ...thing, clicked: false }));
    return this.shuffle(resetImages);
  }

  shuffle = (images) => {
    let i = images.length - 1;
    while (i > 0) {
      const x = Math.floor(Math.random() * (i + 1));
      const array = images[i];
      images[i] = images[x];
      images[x] = array;
      i--;
    }
    return images;
  };

  render() {
    return (
      <Wrapper>
        {this.state.images.map(images =>

          <Clickable
            name={images.name}
            key={images.id}
            image={images.image}
            id={images.id}
            handleClick={this.handleClick}
          />

        )}

      </Wrapper>
    );
  }
}

export default App;
