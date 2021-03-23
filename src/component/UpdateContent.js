import React, {Component} from 'react';

class UpdateContent extends Component{
  constructor(props){
    super(props);
    this.state = {
      id: this.props.data.id,
      title: this.props.data.title,
      desc: this.props.data.desc
    }
    this.inputFormHandler = this.inputFormHandler.bind(this);
  }
  inputFormHandler(e){
    this.setState({[e.target.name]: e.target.value});
  }
    render(){
      return (
        <article>
              <h2>Update</h2>
              {/*method가 post => url 건축 x*/}
              <form action="/create_process" method="post"
               onSubmit={function(e){
                e.preventDefault();//페이지전환 x
                this.props.onSubmit(
                  this.state.id,
                  this.state.title,
                  this.state.desc
                );
               }.bind(this)}>
                {/*titleholder가 네모안에 보이는 힌트느낌*/}
                <input type="hidden" name="id" value={this.state.id}></input>
                <p>
                  <input type='text'
                  name='title'
                  placeholder='title'
                  value={this.state.title}
                  onChange={this.inputFormHandler}>
                  </input>
                </p>
                <p>
                  <textarea name="desc" placeholder="description"
                  value={this.state.desc} onChange={this.inputFormHandler}>
                  </textarea>
                </p>
                <p>
                  <input type="submit"></input>
                </p>
              </form>
          </article>
      );
    }
  }

export default UpdateContent;