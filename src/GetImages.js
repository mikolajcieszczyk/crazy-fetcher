import React, { Component } from 'react'
import axios from 'axios';

function Logo() {
    return (
        <div className="logo">Crazy Fetcher</div>
    )
}

export default class GetImages extends Component {
    constructor(props) {
        super(props);

        this.state = {
            images: [],
            counter: 0,
            secondCounter: 3,
            showPopup: false
        }

        this.nextImages = this.nextImages.bind(this);
        this.hidePopup = this.hidePopup.bind(this);
    }

    componentDidMount() {
        axios.get('https://picsum.photos/v2/list')
            .then(res => {
                this.setState({
                    images: res.data
                })
            })
            .catch((error) => {
                console.log(error.message)
            })
    }

    nextImages() {
        if (this.state.counter < 27) {
            this.setState((prevState) => ({
                counter: prevState.counter + 3,
                secondCounter: prevState.secondCounter + 3,
            }));
        } else {
            this.setState({
                counter: 0,
                secondCounter: 3,
                showPopup: true
            });
        }
        window.scrollTo(0, 0);
    }

    hidePopup() {
        this.setState({
            showPopup: false
        });
    }

    render() {
        return (
            <>
                <Logo />
                <div className="images-container">
                    {
                        this.state.images.slice(this.state.counter, this.state.secondCounter).map(function (image) {
                            return (
                                <div className="one-image" key={image.id}>
                                    <span>ID: {image.id}</span>
                                    <h3>Author: {image.author}</h3>
                                    <img alt={image.id} src={image.download_url} />
                                </div>
                            )
                        })
                    }
                </div>

                <button className="btn-next" onClick={this.nextImages}>
                show next images
                </button>

                <div 
                onClick={this.hidePopup} 
                className={this.state.showPopup === false ? "popup--hidden" : "popup"}
                >
                    <span>That was crazy ride!<p /> Click anywhere to go one more time!</span>
                </div>

                <div 
                onClick={this.hidePopup} 
                className={this.state.showPopup === false ? "popup-background--hidden" : "popup-background"}
                />
            </>

        )
    }
}