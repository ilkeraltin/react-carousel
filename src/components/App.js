import React from 'react';
import Slide from './Slide';
import getData from '../utils/api';
import Carousel from './Carousel';

class App extends React.Component {
    state = {
        data: [],
        loaded: false,
    }

    componentDidMount () {
        getData().then((res) => {
            if (res) {
                this.setState(() => ({
                    data: res.data,
                    loaded: true,
                }))
            }
        })
    }

    renderCarousel = () => {
        if (this.state.loaded) {
            return (
                <Carousel
                data={this.state.data}
                //arrowColor={"black"} //or arrowColor={"#000000"}
                //auto={true}
                //delay={5000}
            />
            )
        }
    }


    render() {
        return (
            <div style={{width: "100%"}}>
            {this.renderCarousel()}
            </div>
        )
    }
}

export default App;