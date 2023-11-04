import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';


const Body = () => {
  return (
    <div id="body">
      <Header></Header>
      <Card
        className='section'
        img='./Capture1.PNG'
        title='About the company'
        description='Lorem ipsum dolor sit amet, asdas adas'></Card>
      {/* <ContactContainer></ContactContainer> */}
    </div>
  )
}



const Card = (props) => {
  return (
    <div className={props.className}>
      <div className='small-div'>
        <i className={props.className}></i>
        <img src={props.img} alt=''></img>
      </div>
      <div className='big-div'>
        <span className='div-title'>
          {props.title}
        </span>
        <br></br>
        <span>
          {props.description}
        </span>
      </div>
    </div>
  )
}

ReactDOM.render(<Body></Body>, document.getElementById('root'));