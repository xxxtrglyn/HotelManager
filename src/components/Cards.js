import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

class Cards extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
        id0: "",
        image0: "",
        stt0: "",
        image1: "",
        stt1: "",
        id1: ""
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
        this.setState({image0: hotel[0].rooms[0].roomImages[0].image, id0: hotel[0].rooms[0].id})
        this.setState({image1: hotel[0].rooms[1].roomImages[1].image, id1: hotel[0].rooms[1].id})
        if (hotel[0].rooms[0].status===true) this.setState({stt0: "Free"})
        else this.setState({stt0: "Hired"})

        if (hotel[0].rooms[1].status===true) this.setState({stt1: "Free"})
        else this.setState({stt1: "Hired"})
        
        console.log(this.state.image1)
    })
    .catch(function(err) {
        console.log(err)
    })
  }

  getInfo = () => {
      const user = JSON.parse(localStorage.getItem('user-info'))
      return user
  }

  render() {
  return (
    <div className='cards'>
      <h1>ROOM</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={this.state.image0}
              text={this.state.id0}
              label={this.state.stt0}
              path='/room1'
            />
            <CardItem
              src={this.state.image1}
              text={this.state.id1}
              label={this.state.stt1}
              path='/Room2'
            />
            <CardItem
              src='images/img-2.jpg'
              text='??'
              label='Maintain'
              path='/Room3'
            />
          </ul>
        </div>
      </div>
    </div>
    )
  }
}

export default Cards;
