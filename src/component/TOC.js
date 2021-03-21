import React, {Component} from 'react';

class TOC extends Component{
  //바뀐 props, states값
  shouldComponentUpdate(newProps, newState){//true 혹은 false return
    //render() 이전에 호출되는 함수
    //true일 때 render() 호출, false일 때 render() 호출X
    //새롭게 바뀐 값과 이전 값 접근 가능
    if(this.props.data === newProps.data)
    {
      return false;
    }
    return true;
  }
    render(){
      var lists =[];
      var data = this.props.data;
      var i=0;
      while(i< data.length){
        lists.push(
        <li key={data[i].id}>
          <a href={"/contents/"+data[i].id}
          data-id={data[i].id}//data set을 통해 접근 가능
          onClick={function(e){
            e.preventDefault();
            //e.target.dataset.id를 통해 data-id접근 가능
            this.props.onChangePage(e.target.dataset.id);
          }.bind(this)}>
            {data[i].title}
          </a>
          </li>
        );
        i++;
      }
      return (
        <nav>
              <ul>
                  {lists}
              </ul>
          </nav>
      );
    }
  }

export default TOC;