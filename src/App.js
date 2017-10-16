import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <header className="">
          <br />
          <h1 className="">Welcome <span role="img" aria-label="hello">🖕😊</span></h1>
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
                    <a href="http://www.kitabote.de" target="blank">Kitabote</a>
                    <p>Der Kitabote ist eine App, mit der Eltern und Kita-Leitung einfach, sicher und kostenlos Informationen austauschen können.</p>
                    <h4>Plattform</h4>
                    <p>iOS, Android, Web</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3>MH Hub</h3>
        <p>Tech Advisor</p>

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
