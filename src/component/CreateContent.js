import React, {Component} from 'react';

class CreateContent extends Component{
    render(){
      return (
        <article>
              <h2>Create</h2>
              {/*method가 post => url 건축 x*/}
              <form action="/create_process" method="post"
               onSubmit={function(e){
                e.preventDefault();//페이지전환 x
                //debugger;
                this.props.onSubmit(
                  e.target.title.value,
                  e.target.desc.value
                );
               }.bind(this)}>
                {/*titleholder가 네모안에 보이는 힌트느낌*/}
                <p>
                  <input type='text' name='title'
                  placeholder='title'></input></p>
                <p>
                  <textarea name="desc" placeholder="description"></textarea>
                </p>
                <p>
                  <input type="submit"></input>
                </p>
              </form>
          </article>
      );
    }
  }

export default CreateContent;