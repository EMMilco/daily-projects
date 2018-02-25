import React from 'react';

export default class Tabs extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectedIndex: 0
    };
    this.changeTab = this.changeTab.bind(this);
    this.setSelected = this.setSelected.bind(this);
  }

  changeTab(idx){
    return () => {
      this.setState({selectedIndex: idx});
    };
  }

  setSelected(idx){
    return (this.state.selectedIndex === idx ? "selected" : "");
  }

  render(){
    return (
      <div className="tabs">
        <header>
          <ul>
            {this.props.articles.map((article, idx) => {
              return (<li onClick={this.changeTab(idx)} className={this.setSelected(idx)} key={idx}>{article.title}</li>);
            })}
          </ul>
        </header>
        <article>
          {this.props.articles[this.state.selectedIndex].content}
        </article>
      </div>
    );
  }
}
