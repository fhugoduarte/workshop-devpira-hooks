import { Component } from 'react';

interface State {
  workshop: string;
}

class ExampleClassComponent extends Component {
  public state: State;

  constructor(props: any) {
    super(props);

    this.state = {
      workshop: 'Hooks no React'
    }
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate(prevProps: any, prevState: State) {
    if (prevState.workshop !== this.state.workshop) {
      console.log('Alterou o workshop');
    }
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    return <h1>{this.state.workshop}</h1>
  }
}

export default ExampleClassComponent;