import React from 'react';

const EditHouseComponent = (props) => {
    const userId = localStorage.getItem('userId')

    return(
      <div className="container">
        <div className="text-center mt-4 pb-5">
          <h1>Edit House</h1>
        </div>
        <div className="row mb-4">
          <div className="col-md-8 offset-2 mt-5">
            <form onSubmit={props.updateHouse}>
              <div className="form-group">
                <label className="mb-0" htmlFor="address">Address:</label>
                  <input name="address" id="address" type="text" className="form-control" onChange={props.handleEditFormInput} value={props.house.address} required/>
              </div>
              <div className="form-group">
                <label className="mb-0" htmlFor="address2">Address2:</label>
                  <input name="address2" id="address2" type="text" className="form-control" onChange={props.handleEditFormInput} value={props.house.address2} required/>
              </div>
              <div className="form-group">
                <label className="mb-0" htmlFor="state">State:</label>
                  <input name="state" id="state" type="text" className="form-control" onChange={props.handleEditFormInput} value={props.house.state} required/>
              </div>
              <div className="form-group">
                <label className="mb-0" htmlFor="year">Year:</label>
                  <input name="year" id="year" type="text" className="form-control" onChange={props.handleEditFormInput} value={props.house.year} required/>
              </div>
              <div className="form-group">
                <label className="mb-0" htmlFor="sqft">Sqft:</label>
                  <input name="sqft" id="sqft" type="text" className="form-control" onChange={props.handleEditFormInput} value={props.house.sqft} required />
              </div>
              <div className="form-group">
                <label className="mb-0" htmlFor="pic1">Photo1:</label>
                  <input name="pic1" id="pic1" type="text" className="form-control" onChange={props.handleEditFormInput} value={props.house.pic1} required />
              </div>
              <div className="form-group">
                <label className="mb-0" htmlFor="pic2">Photo1:</label>
                  <input name="pic2" id="pic2" type="text" className="form-control" onChange={props.handleEditFormInput} value={props.house.pic2} required />
              </div>
              <div className="form-group">
                <label className="mb-0" htmlFor="pic3">Photo3:</label>
                  <input name="pic3" id="pic3" type="text" className="form-control" onChange={props.handleEditFormInput} value={props.house.pic3} required />
              </div>
              <div className="form-group">
                <label className="mb-0" htmlFor="pic4">Photo4:</label>
                  <input name="pic4" id="pic4" type="text" className="form-control" onChange={props.handleEditFormInput} value={props.house.pic4} required />
              </div>
              <div className="form-group">
                <label className="mb-0" htmlFor="memo">Memo:</label>
                  <textarea name="memo" id="memo" className="form-group px-4 py-4" rows="8" cols="90" onChange={props.handleEditFormInput} value={props.house.memo} >
                  </textarea>
              </div>

              { userId === '5ce078a9ba00866361956c39'?
                <div>
                  <h1>Admin</h1>
                  <div className="form-group">
                    <label className="mb-0" htmlFor="attic">Attic Insulation:</label>
                      <input name="attic" id="attic" type="text" className="form-control" onChange={props.handleEditFormInput} value={props.house.attic} required />
                  </div>
                  <div className="form-group">
                    <label className="mb-0" htmlFor="whyear">WH Year:</label>
                      <input name="whyear" id="whyear" type="text" className="form-control" onChange={props.handleEditFormInput} value={props.house.whyear} required />
                  </div>
                  <div className="form-group">
                    <label className="mb-0" htmlFor="whef">WH EF:</label>
                      <input name="whef" id="whef" type="text" className="form-control" onChange={props.handleEditFormInput} value={props.house.whef} required />
                  </div>
                  <div className="form-group">
                    <label className="mb-0" htmlFor="whfuel">WH Fuel:</label>
                      <input name="whfuel" id="whfuel" type="text" className="form-control" onChange={props.handleEditFormInput} value={props.house.whfuel} required />
                  </div>
                  <div className="form-group">
                    <label className="mb-0" htmlFor="heatyear">Heating Year:</label>
                      <input name="heatyear" id="heatyear" type="text" className="form-control" onChange={props.handleEditFormInput} value={props.house.heatyear} required />
                  </div>
                  <div className="form-group">
                    <label className="mb-0" htmlFor="heatef">Heating EF:</label>
                      <input name="heatef" id="heatef" type="text" className="form-control" onChange={props.handleEditFormInput} value={props.house.heatef} required />
                  </div>
                  <div className="form-group">
                    <label className="mb-0" htmlFor="heatfuel">Heating Fuel:</label>
                      <input name="heatfuel" id="heatfuel" type="text" className="form-control" onChange={props.handleEditFormInput} value={props.house.heatfuel} required />
                  </div>

                </div>
                : null }


              { userId === '5ce078a9ba00866361956c39'?
              <div>
                <div className="form-group mt-4 mb-4">
                  <label className="mb-0" htmlFor="status">Status:</label>
                    <select name="status" id="status" onChange={props.handleEditFormInput} value={props.house.status}>
                      <option value="Compelted">Completed</option>
                      <option value="Checking">Checking</option>
                    </select>
                </div>
                <div className="form-group">
                  <label className="mb-0" htmlFor="memo2">Memo:</label>
                    <textarea name="memo2" id="memo2" className="form-group px-4 py-4" rows="8" cols="90" onChange={props.handleEditFormInput} value={props.house.memo2} >
                    </textarea>
                </div>
              </div>
                : null }

              <div className="text-center">
                <input type="submit" className="btn btn-primary" />
              </div>
            </form>
          </div>
        </div>
      </div>
    )
}


export default EditHouseComponent
