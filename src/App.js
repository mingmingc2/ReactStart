import './App.css';
import React, {Component} from 'react';
import TOC from './component/TOC';
import ReadContent from './component/ReadContent';
import CreateContent from './component/CreateContent';
import Subject from './component/Subject';
import Control from './component/Control';


class App extends Component{
  //render이전에 초기화해주고싶은 코드는 constructor안에
  constructor(props){
    super(props);
    //앱이 내부적으로 사용할 상태는 state를 통해 정의
    this.max_content_id = 3;//ui랑 상관 없는 값은 state로 정의 안해도 된다. 불필요한 rendering 방지
    this.state = {
      mode:'read',
      selected_content_id:2,
      subject:{title:'WEB', sub:'World Wide Web!'},
      welcome:{title: 'Welcome',desc:'Hello, React!!'},
      contents: [
        {id:1,title:'HTML',desc:'HTML is HyperText ...'},
        {id:2,title:'CSS',desc:'Css is for design'},
        {id:3,title:'JavaScript',desc:'JavaScript is for interactive ...'}
      ]
    }
  }
  
  render(){
    console.log('App_render');
    var _title, _desc, _article =null;
    if(this.state.mode === "welcome"){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    }
    else if(this.state.mode ==="read"){
      var i =0;
      while(i<this.state.contents.length){
        var data = this.state.contents[i];
        if(data.id===this.state.selected_content_id){//title과 description으로
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i++;
      }
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    }
    else if(this.state.mode==="create"){
      _article = <CreateContent onSubmit={function(_title,_desc){
        //add
        //push는 원본 변경, concat는 원본 변경 x이고 리턴값에 넣어줌
        this.max_content_id ++;
        //Array.from()
        //Object.assign({},a)
        //this.state.contents.push({id: this.max_content_id, title: _title, desc: _desc});
        //this.setState({
        //  contents: this.state.contents
        //})
        var _contents = this.state.contents.concat(
          {id: this.max_content_id, title: _title, desc: _desc});
        this.setState({
          contents: _contents
        })
      }.bind(this)}></CreateContent>
    }
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage = {function(){//함수를 전달
            this.setState({
              mode:'welcome'
            })
          }.bind(this)}
          >
        </Subject>
        <TOC 
        onChangePage={function(id){
          this.setState({
            mode:"read",
            selected_content_id:Number(id)
          })
        }.bind(this)}
        data={this.state.contents}>
        </TOC>
        <Control onChangeMode={function(_mode){
          this.setState({
            mode: _mode,
          });
        }.bind(this)}>
        </Control>
        {_article}
      </div>
    );
  }
}

export default App;
