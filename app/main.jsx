var React = require("react");
var ReactDOM = require("react-dom");
var { SocialIcon }= require('react-social-icons');
// var SchoolsList = require("./components/SchoolsList.jsx");
// var schoolsStore = require("./stores/schoolsStore");
// var _schools = schoolsStore.getSchools();
// schoolsStore.onChange(function(schools){
//     _schools = schools;
//     render();
// });


function render(){
    ReactDOM.render(
        <div className="container" style={{textAlign:"center"}}>
            <div className="container row" style={{textAlign:"center"}}>
                <img src="images/image.png" />
            </div>
            <div className="container row" style={{textAlign:"center"}}>
                <h3>Kumar Jayaram Gayatri</h3>
                <h5>Full Stack Developer | Data Analyst</h5>
                <SocialIcon url="http://www.linkedin.com/in/kumar-jayaram-gayatri-48103179"></SocialIcon>
                <SocialIcon url="http://github.com/kumarGayu"></SocialIcon>
            </div>
            <div className="container">
                <div id="accordion" role="tablist" aria-multiselectable="true">
  <div className="card">
    <div className="card-header" role="tab" id="headingOne">
      <h5 className="mb-0">
        <a data-toggle="collapse" data-parent="#accordion" href="#Education" aria-expanded="true" aria-controls="Education">
            Education
        </a>
      </h5>
    </div>
    <div className="row collapse show" id="Education" role="tabpanel" aria-labelledby="headingThree">
        <div className="col-sm-4">
            <div className="container card">
                <img className="card-img-top" src="images/Web_Development.jpg" alt="Card image cap" />
                <div className="card-block">
                    <h5 className="card-title">University of Texas at Arlington</h5>
                    <a href="#" className="btn btn-primary btn-space">More</a>
                </div>
            </div>
        </div>
        <div className="col-sm-4">
            <div className="container card">
                <img className="card-img-top" src="images/data_analyst.jpg" alt="Card image cap" />
                <div className="card-block">
                    <h5 className="card-title">Bangalore Institute of Technology</h5>
                    <a href="#" className="btn btn-primary btn-space">More</a>
                </div>
            </div>
        </div>
        <div className="col-sm-4">
            <div className="container card">
                <img className="card-img-top" src="images/data_analyst.jpg" alt="Card image cap" />
                <div className="card-block">
                    <h5 className="card-title">PUC</h5>
                    <a href="#" className="btn btn-primary btn-space">More</a>
                </div>
            </div>
        </div>
    </div>
  </div>
  <div className="card">
    <div className="card-header" role="tab" id="headingTwo">
      <h5 className="mb-0">
        <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#profession" aria-expanded="false" aria-controls="profession">
          Profession
        </a>
      </h5>
    </div>
    <div className="row collapse" id="profession" role="tabpanel" aria-labelledby="headingThree">
        <div className="col-sm-4">
            <div className="container card">
                <img className="card-img-top" src="images/Web_Development.jpg" alt="Card image cap" />
                <div className="card-block">
                    <h5 className="card-title">Nokia Networks</h5>
                    <a href="#" className="btn btn-primary btn-space">More</a>
                </div>
            </div>
        </div>
        <div className="col-sm-4">
            <div className="container card">
                <img className="card-img-top" src="images/data_analyst.jpg" alt="Card image cap" />
                <div className="card-block">
                    <h5 className="card-title">Research Assistant</h5>
                    <a href="#" className="btn btn-primary btn-space">More</a>
                </div>
            </div>
        </div>
        <div className="col-sm-4">
            <div className="container card">
                <img className="card-img-top" src="images/data_analyst.jpg" alt="Card image cap" />
                <div className="card-block">
                    <h5 className="card-title">Research Assistant</h5>
                    <a href="#" className="btn btn-primary btn-space">More</a>
                </div>
            </div>
        </div>
    </div>
  </div>
  <div className="card">
    <div className="card-header" role="tab" id="headingThree">
      <h5 className="mb-0">
        <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Projects
        </a>
      </h5>
    </div>
    <div id="collapseThree" className="collapse" role="tabpanel" aria-labelledby="headingThree">
      <div className="card-block">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
</div>
            </div>
            <div style={{textAlign:"center"}}>
                <div className="container card" style={{width: '75%'}}>
                    <img className="card-img-top" src="images/Web_Development.jpg" alt="Card image cap" />
                    <div className="card-block">
                        <h4 className="card-title">Full Stack Developer</h4>
                        <p className="card-text">
                            <b>o</b> Developed dashboards for the telecom operators to monitor their network elements <br/>
                            <b>o</b> Proficient in building web user interfaces using ReactJS, jQuery, Ajax, HTML and CSS <br/>
                            <b>o</b> Implemented many internal web applications using react.js and flux architecture <br/>
                            <b>o</b> Designed RESTful services in Java with encrypting sensitive information <br/>
                            <b>o</b> Reduced the query execution time by 60% for a critical ETL job which scanned 2.5 Million tuples <br/>
                            <b>o</b> Led the automation of the Front-End tests using Selenium web driver for cross browser compatibility <br/>
                        </p>
                        <h4 className="card-title">Skills</h4>
                        <p className="card-text">
                            <b> Object Oriented JavaScript, Java, Python, C#, SQL, RESTful web services, Node.js, AngularJS, ReactJS, Gulp, Bower, Browserify,
                                jQuery, AJAX, MongoDB, Cassandra, PostgreSQL, Oracle 11g and MySQL </b>
                        </p>
                        <a href="#" className="btn btn-primary btn-space">Go somewhere</a>
                        <a href="#" className="btn btn-primary btn-space">Go somewhere</a>
                        <a href="#" className="btn btn-primary btn-space">Go somewhere</a>
                    </div>
                </div>
                <div className="container card" style={{width: '75%'}}>
                    <img className="card-img-top" src="images/data_analyst.jpg" alt="Card image cap" />
                    <div className="card-block">
                        <h4 className="card-title">Data Analyst / Machine Learninng</h4>
                        <p className="card-text">
                        <b>o</b> Modelled prostate cancer data using SVM and random forest algorithms to achieve 70% classification<br />
                        <b>o</b> Tested several Convolutional Neural Networks such as AlexNet, GoogleNet and ResNet in Tensor flow to classify the lung cancer images <br />
                        </p>
                        <h4 className="card-title">Skills</h4>
                        <p className="card-text">
                            <b> Matlab, Python, Tensorflow, SQL, MongoDB, Cassandra, PostgreSQL, Hadoop, Neural Networks, Deep Learning</b>
                        </p>
                        <a href="#" className="btn btn-primary btn-space">Go somewhere</a>
                        <a href="#" className="btn btn-primary btn-space">Go somewhere</a>
                        <a href="#" className="btn btn-primary btn-space">Go somewhere</a>
                    </div>
                </div>
                <div className="container card" style={{width: '75%'}}>
                    <div className="card-block">
                        <h4 className="card-title">Education</h4>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary btn-space">Go somewhere</a>
                        <a href="#" className="btn btn-primary btn-space">Go somewhere</a>
                        <a href="#" className="btn btn-primary btn-space">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>,document.getElementById("container")
        );
}

render();
