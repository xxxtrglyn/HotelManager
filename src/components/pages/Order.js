import React, { Component } from 'react'
import { Button } from '../Button'
import '../Table.css'
export default class Order extends Component {

        constructor(props) {
          super(props)
          this.state = {
              response: []
          }
        }
      
        componentDidMount() {
          this.loadCategory()
        }
      
        loadCategory = () => {
          const user = JSON.parse(localStorage.getItem('user-info'))
          const token = user.token 
          const hotelid = JSON.parse(localStorage.getItem('hotelid'))

          let auth = "Bearer " + token;

          var requestOptions = {
            method: 'GET',
            headers: {
                'Authorization': auth,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
          }
          fetch(`https://bookhotel-backend.herokuapp.com/api/manager/hotels/${hotelid}/orders?status=false`, requestOptions)
          .then(function(response) {
              return response.json()
          })
          .then((hotel) => {
              console.log(hotel)
              this.setState({response: hotel})
              console.log(this.state.response);
          })
          .catch(function(err) {
              console.log(err)
          })
        }   
         
         renderTableData() {
            return this.state.response.map((student) => {
               const { id, name, phone, email} = student //destructuring
               return (
                  <tr key={id}>
                     <td>{id}</td>
                     <td>{name}</td>
                     <td>{phone}</td>
                     <td>{email}</td>
                     <td><button onClick={deletes} /></td>
                  </tr>
               )
            })
         }
      
         render() {
            return (
               <div>
                  <h1 id='title'>Confirmed Room List</h1>
                  <table id='students'>
                     {/* <thead>{this.renderTableHeader()}</thead> */}
                     <th>id</th>
                     <th>name</th>
                     <th>phone</th>
                     <th>email</th>
                     <th></th>
                     <tbody>{this.renderTableData()}</tbody>
                  </table>
               </div>
            )
         }
}

function deletes() {

}
