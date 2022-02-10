import React from 'react';
import '../Overview.css'

class Home extends React.Component {


    constructor(props) {
      super(props)
      this.state = {
          response: [],
          name: ""
      }
    }
  
    componentDidMount() {
      this.loadCategory()
    }
  
    loadCategory = () => {
      const user = JSON.parse(localStorage.getItem('user-info'))
      const token = user.token
      console.log(token)
      let bearer = "Bearer " + token;
      var requestOptions = {
        method: 'GET',
        withCredentials: true,
        credentials: 'include',
        headers: {
            'Authorization': bearer,
            'X-FP-API-KEY': 'iphone', //it can be iPhone or your any other attribute
            'Content-Type': 'application/json'
        },
      }
      fetch('https://bookhotel-backend.herokuapp.com/api/manager/users/1/hotels', requestOptions)
      .then(function(response) {
          return response.json()
      })
      .then((hotels) => {
          this.setState({response: hotels[0].rooms,  name: hotels[0].hotel_name, address: hotels[0].address})
          console.log(this.state.response);
      })
      .catch(function(err) {
          console.log(err)
      })
    }
  
    getInfo = () => {
        const user = JSON.parse(localStorage.getItem('user-info'))
        return user
    }
  
  render () {
    return (

          <div className="content">
            <h1>{this.state.name}</h1>
            <Overview data={this.state.response} />
          </div>

    )
  }  
   
}

function Image(props) {
  return (
      <img width={500} height={300} className="room-img" src={props.source} alt="" ></img>
  )
}

function Overview(props) {
  return(
      <div>
          {props.data.map((item) => {
            return(
              <section className="contact">
                <div className="container">
                    <div className="contactInfo">
                        <div className="box">
                            <div className="icon">
                              <i className="fa fa-map-marker" aria-hidden="true"></i>
                            </div>
                            <div className="text">
                                <h3> Address </h3>
                                <p>{item.address}</p>
                            </div>
                        </div>
                        <div className="box">
                          <div className="icon">
                            <i className="fa fa-phone" aria-hidden="true"></i>
                          </div>
                          <div className="text">
                              <h3> Phone </h3>
                              <p>{item.phone}</p>
                          </div>
                      </div>
                        <div className="box">
                          <div className="icon">
                            <i className="fa fa-envelope" aria-hidden="true"></i>
                          </div>
                          <div className="text">
                              <h3> {item.rate} </h3>
                              <p>xxxtrglyn@gmail.com</p>
                          </div>
                      </div>
                    </div>
                  <div className="contactform">
                    <Image source={item.roomImages[0].image} />
                  </div>
                </div>
              </section>
            )
            })}
      </div>
  ) 
}

export default Home;
