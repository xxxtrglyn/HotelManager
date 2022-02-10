import React from 'react';
import { render } from 'react-dom';
import '../../App.css';
import Cards from '../Cards';
import Footer from '../Footer';

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
    var requestOptions = {
        method: 'GET',
        headers: {
            "access-control-allow-origin" : "*",
            'Content-Type': 'application/json'
        }
    }
    fetch('https://bookhotel-backend.herokuapp.com/api/manager/hotels/2/rooms', requestOptions)
    .then(function(response) {
        return response.json()
    })
    .then((hotels) => {
        this.setState({response: hotels[2].rooms,  name: hotels[2].hotel_name})
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


}
  return (
    <div>

    </div>
  )
export default Home;
