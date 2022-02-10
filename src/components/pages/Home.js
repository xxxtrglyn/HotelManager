import React from 'react';
import '../Overview.css'

class Home extends React.Component {


    constructor(props) {
      super(props)
      this.state = {
          response: {}
      }
    }
  
    componentDidMount() {
      this.loadCategory()
    }
  
    loadCategory = () => {
      const user = JSON.parse(localStorage.getItem('user-info'))
      const token = user.token
      
      let auth = "Bearer " + token;
      var requestOptions = {
        method: 'GET',
        headers: {
            'Authorization': auth,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
      }
      fetch(`https://bookhotel-backend.herokuapp.com/api/manager/users/${user.id}/hotel`, requestOptions)
      .then(function(response) {
          return response.json()
      })
      .then((hotel) => {
          console.log(hotel)
          this.setState({response: {id: hotel[0].id, name:hotel[0].hotel_name, address:hotel[0].address, phone:hotel[0].phone, rate:hotel[0].rate, image:hotel[0].image}})
          console.log(this.state.response);
          localStorage.setItem("hotelid", hotel[0].id)
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
          <div>
            <section className="contact">
                <div className="content">
                <h1>{this.state.response.name}</h1>
                </div>
                <div className="container">
                    <div className="contactInfo">
                        <div className="box">
                            <div className="icon">
                              <i className="fa fa-map-marker" aria-hidden="true"></i>
                            </div>
                            <div className="text">
                                <h3> Address </h3>
                                <p>{this.state.response.address}</p>
                            </div>
                        </div>
                        <div className="box">
                          <div className="icon">
                            <i className="fa fa-phone" aria-hidden="true"></i>
                          </div>
                          <div className="text">
                              <h3> Phone </h3>
                              <p>{this.state.response.phone}</p>
                          </div>
                      </div>
                        <div className="box">
                          <div className="icon">
                            <i className="fa fa-envelope" aria-hidden="true"></i>
                          </div>
                          <div className="text">
                              <h3> Rate </h3>
                              <h2>{this.state.response.rate}<i class="fa fa-star" aria-hidden="true"></i></h2>
                              
                          </div>
                      </div>
                    </div>
                  <div className="contactform">
                    <Image source={this.state.response.image} />
                  </div>
                </div>
              </section>
          </div>

    )
  }  
   
}

function Image(props) {
  return (
      <img width={500} height={300} className="room-img" src={props.source} alt="" ></img>
  )
}


export default Home;
