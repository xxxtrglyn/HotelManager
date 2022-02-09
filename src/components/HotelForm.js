import React from 'react';
import './HotelForm.css'

function HotelForm() {
  return(
    <div>
        <form>
        <div className="container">
            <h1>Room Detail</h1>
            <hr></hr>

            <label for="ID"><b>Room ID</b></label>
            <input type="text" placeholder="Enter ID" name="ID" required />

            <label for="Price"><b>Price</b></label>
            <input type="text" placeholder="Enter Price" name="Price" required />

            <label for="BedType"><b>Bed Type</b></label>
            <div className='Roomtype'>
                <input type="radio" name="type" ></input>
                <label for="single"> Single </label>
                <input type="radio" name="type" ></input>
                <label for="single"> Double </label>
            </div>

            <label for="Detail"><b>Detail</b></label>
            <input type="text" placeholder="Describe about the room" name="Describe" required />


            <div className="clearfix">
            <button type="button" class="cancelbtn">Cancel</button>
            <button type="submit" class="signupbtn">Save</button>
            </div>
        </div>
        </form>
    </div>
  )
}

export default HotelForm;
