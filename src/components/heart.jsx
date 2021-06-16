import React, {Component} from "react";

class Heart extends Component {
    state = {
        like: false
    };

    constructor(props) {
        super(props);
        this.handleLike = this.handleLike.bind(this);
    }

    render() {
        return (
            <div className="heart">
                <button onClick={this.handleLike} className='btn btn-sm'>
                <i className={this.getHeartClasses()} aria-hidden="true"> </i>
                </button>
            </div>
        );
    }

    handleLike() {
        let like = !this.state.like;
        this.setState({like: like});
    }

    getHeartClasses() {
        let classes = 'fa fa-lg fa-heart';
        if (!this.state.like) {
            classes += '-o';
        }
        return classes;
    }
}

export default Heart;