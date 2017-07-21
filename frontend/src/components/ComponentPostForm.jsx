import React, {Component} from 'react';

class ComponentPostForm extends Component {

  constructor(props) {
    super(props);
    this.postMaxLength = 150;
    this.remainingCharacters = this.postMaxLength;
  }

  // send post to main component
  sendPost = () => {

     let text = this.refs.inputPost.value;

    if (text === "") {
      alert("Post is Required !");
      return;
    }

    if (text.length > this.postMaxLength) {
      alert("Maximum number of characters allowed is 150");
      return;
    }

    let post = {
      text: text,
      timestamp: new Date().getTime()
    }

    this.refs.inputPost.value = "";
    this.remainingCharacters = this.postMaxLength;
    this.props.addPost(post);
  }

  // count the number of remaining characters
  countCharacters = () => {
    let length = this.refs.inputPost.value.length;
    if (length >= this.postMaxLength) {
      this.remainingCharacters = 0;
    } else {
      this.remainingCharacters = this.postMaxLength - length;
    }
    this.setState({remainingCharacters: this.remainingCharacters});
  }

  render() {
    return (
      <div>
        <div className="post-form">
          <div className="form-group row">
            <h5 className="col-md-8">Add Post</h5>
          </div>
          <div className="form-group">
            <textarea ref="inputPost" onKeyUp={this.countCharacters.bind(this)} className="form-control form-control-sm" rows="4" maxLength={this.postMaxLength} placeholder="Post Something..."></textarea>
          </div>
          <div className="row">
            <p className="col-md-7 post-remaining-characters">Characters Remaining :
              <strong>{this.remainingCharacters}</strong>
            </p>
            <div className="col-md-5 text-right">
              <button onClick={this.sendPost.bind(this)} className="btn post-btn bg-avo btn-avo">Post</button>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default ComponentPostForm;
