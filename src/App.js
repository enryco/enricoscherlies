import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <header className="">
          <br />
          <h1 className="">Welcome</h1>
        </header>

        <div>
          <div className="row justify-content-md-center">
            <div className="text-left col-md-9">
              <h3>Enrico Scherlies</h3>
              <div className="row">
                <div className="col-3 text-right">
                  <img src={require("./media/profile_300.jpeg")} className="img-fluid profile" alt="" />
                </div>
                <div className="col-9 text-left">
                  <span>
                    <p>As a product development engineer I build products both in the physical and digital world.</p>
                    <h4>Education</h4>
                    <p>Bachelor of Engineering in Mechanical Engineering</p>
                  </span>

                </div>
              </div>
            </div>
          </div>
        </div>


        <div>
          {/* <hr style={{ transform: "translateY(30px)"}}/> */}
          <div className="row justify-content-md-center">
            <div className="col-md-9">
              <div>
                <div className="fancy">
                  <span>
                    <h2 className=""><i className="fa fa-rocket" aria-hidden="true"></i> Projects</h2>
                  </span>
                </div>
              </div>
            </div>
            <div className="text-left col-md-9">
              <h3>Kitabote</h3>
              <div className="row">
                <div className="col-3 text-right">

                  <img src={require("./media/kibo.png")} alt="Kibo" className="img-fluid" />
                </div>
                <div className="col-9 text-left">
                  <span>
                    <h4>Description</h4>
                    <a href="http://www.kitabote.de" target="blank">Kitabote.de</a>
                    <p>Der Kitabote ist eine App, mit der Eltern und Kita-Leitung einfach, sicher und kostenlos Informationen austauschen können.</p>
                    <div className="row">
                      <div className="col">
                        <h4>Plattform</h4>
                        <p>iOS, Android, Web</p>
                      </div>
                      <div className="col">
                        <h4>Technologies</h4>
                        <p>React & React Native (JavaScript)</p>
                      </div>
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3>MH Hub</h3>
        <p>Tech Advisor</p>

        <hr />
        <iframe
          height='418' 
          scrolling='no' 
          title='_verse' 
          src='//codepen.io/enryco/embed/MOWVMo/?height=418&theme-id=0&default-tab=js,result&embed-version=2' 
          frameBorder='no' 
          allowTransparency='true' 
          allowFullScreen='true' 
          style={{width: '100%'}}>See the Pen <a href='https://codepen.io/enryco/pen/MOWVMo/'>_verse</a> by enryco (<a href='https://codepen.io/enryco'>@enryco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

        <div>
          <h2><i className="fa fa-wrench" aria-hidden="true"></i> Toolz</h2>
          <div>
            {
              tools.map((value, index, array) =>
                (<span key={index} style={{ color: `rgba(4, 81, 180, ${1 - (index / array.length)})` }}>{value}<br /></span>))
            }
          </div>
        </div>


      </div>
    );
  }
}

const tools = [
  "JavaScript", "ES6", "React", "React Native", "Firebase", "Bootstrap", "HTML/CSS", "jQuery", "Node"
]

export default App;
