import React, {Component} from "react";

class Heart extends Component {
    render() {
        let classes = "bi bi-heart";
        if (this.props.liked) {
            classes += "-fill red";
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