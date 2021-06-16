import React, {Component} from "react";

class Heart extends Component {
    render() {
        let classes = "fa fa-lg fa-heart";
        if (!this.props.liked) {
            classes += "-o";
        }
        return (
            <div className="heart">
                <button onClick={this.props.onClick} className='btn btn-sm'>
                <i className={classes} aria-hidden="true"> </i>
                </button>
            </div>
        );
    }


}

export default Heart;