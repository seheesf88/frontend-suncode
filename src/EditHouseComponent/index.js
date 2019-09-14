import React from 'react';

const EditHouseComponent = (props) => {
    const userId = localStorage.getItem('userId');
    const username = localStorage.getItem('username');
    // console.log('what is props in edit ====>', props.house);

    return(
          <div className="container">
            <div className="text-center mt-4 pb-5">
              <h1>Exam House</h1>
            </div>
            <div className="row container mb-4">
                <div className="col-5 mt-5 border">
                  <img className="mainPhoto border my-2" height={200} width={200} src={`${process.env.REACT_APP_API}/` + props.house.productImage1} />

                  <img className="subPhoto1 border my-2" height={200} width={200} src={`${process.env.REACT_APP_API}/` + props.house.productImage2} />

                  <img className="subPhoto2 border my-2" height={200} width={200} src={`${process.env.REACT_APP_API}/` + props.house.productImage3} />

                  <img className="subPhoto3 border my-2" height={200} width={200} src={`${process.env.REACT_APP_API}/` + props.house.productImage4} />

            </div>
                <div className="col-7 mt-5 container">
                  <form onSubmit={props.updateHouse}>
                    <div className="row">
                      <div className="col-10 offset-1">
                        <div className="form-group">
                          <label className="mb-0" htmlFor="address">Address:</label>
                            <input name="address" id="address" type="text" className="form-control" onChange={props.handleEditFormInput} value={props.house.address} />
                        </div>
                        <div className="form-group">
                          <label className="mb-0" htmlFor="address2">Address2:</label>
                            <input name="address2" id="address2" type="text" className="form-control" onChange={props.handleEditFormInput} value={props.house.address2} />
                        </div>
                        <div className="form-group">
                          <label className="mb-0" htmlFor="state">State:</label>
                            <input name="state" id="state" type="text" className="form-control" onChange={props.handleEditFormInput} value={props.house.state} />
                        </div>
                        <div className="form-group">
                          <label className="mb-0" htmlFor="year">Year:</label>
                            <input name="year" id="year" type="text" className="form-control" onChange={props.handleEditFormInput} value={props.house.year} />
                        </div>
                        <div className="form-group">
                          <label className="mb-0" htmlFor="sqft">Sqft:</label>
                            <input name="sqft" id="sqft" type="text" className="form-control" onChange={props.handleEditFormInput} value={props.house.sqft}  />
                        </div>
                        <div className="form-group">
                          <label className="mb-0" htmlFor="memo">Memo:</label>
                            <textarea name="memo" id="memo" className="form-group px-4 py-4" rows="3" cols="53" onChange={props.handleEditFormInput} value={props.house.memo}></textarea>
                        </div>
                      </div>
                    </div>

  { username === 'admin'?
                <div className="col-10 offset-1">
                  <h1>Admin only</h1>
                  <div className="form-group">
                    <label className="mb-0" htmlFor="attic">Attic Insulation:</label>
                      <input name="attic" id="attic" type="text" className="form-control" onChange={props.handleEditFormInput} value={props.house.attic}  />
                  </div>
                  <div className="form-group">
                    <label className="mb-0" htmlFor="whyear">WH Year:</label>
                      <input name="whyear" id="whyear" type="text" className="form-control" onChange={props.handleEditFormInput} value={props.house.whyear}  />
                  </div>
                  <div className="form-group">
                    <label className="mb-0" htmlFor="whef">WH EF:</label>
                      <input name="whef" id="whef" type="text" className="form-control" onChange={props.handleEditFormInput} value={props.house.whef}  />
                  </div>
                  <div className="form-group">
                    <label className="mb-0" htmlFor="whfuel">WH Fuel:</label>
                      <input name="whfuel" id="whfuel" type="text" className="form-control" onChange={props.handleEditFormInput} value={props.house.whfuel}  />
                  </div>
                  <div className="form-group">
                    <label className="mb-0" htmlFor="heatyear">Heating Year:</label>
                      <input name="heatyear" id="heatyear" type="text" className="form-control" onChange={props.handleEditFormInput} value={props.house.heatyear}  />
                  </div>
                  <div className="form-group">
                    <label className="mb-0" htmlFor="heatef">Heating EF:</label>
                      <input name="heatef" id="heatef" type="text" className="form-control" onChange={props.handleEditFormInput} value={props.house.heatef}  />
                  </div>
                  <div className="form-group">
                    <label className="mb-0" htmlFor="heatfuel">Heating Fuel:</label>
                      <input name="heatfuel" id="heatfuel" type="text" className="form-control" onChange={props.handleEditFormInput} value={props.house.heatfuel}  />
                  </div>
                </div>
: null }
{ username === 'admin'?

                <div className="col-10 offset-1">
                  <div className="form-group mt-4 mb-4">
                    <label className="mb-0 mr-2" htmlFor="status">Status:</label>
                      <select name="status" id="status" onChange={props.handleEditFormInput} value={props.house.status}>
                        <option value="Compelted">Completed</option>
                        <option value="Checking">Checking</option>
                      </select>
                  </div>
                  <div className="form-group">
                    <label className="mb-0" htmlFor="memo2">Memo:</label>
                      <textarea name="memo2" id="memo2" className="form-group px-4 py-4" rows="3" cols="50" onChange={props.handleEditFormInput} value={props.house.memo2} >
                      </textarea>
                  </div>
                </div>
:
              <div>
                <div>...</div>
              </div>


}

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
//
//
// return(
//       <div className="container">
//         <div className="text-center mt-4 pb-5">
//           <h1>Exam House</h1>
//         </div>
//         <div className="row container mb-4">
//             <div className="col-5 mt-5 border">
//               <img className="mainPhoto border my-2" height={200} width={200} src={`${process.env.REACT_APP_API}/` + props.house.productImage1} />
//
//               <img className="subPhoto1 border my-2" height={200} width={200} src={`${process.env.REACT_APP_API}/` + props.house.productImage2} />
//
//               <img className="subPhoto2 border my-2" height={200} width={200} src={`${process.env.REACT_APP_API}/` + props.house.productImage3} />
//
//               <img className="subPhoto3 border my-2" height={200} width={200} src={`${process.env.REACT_APP_API}/` + props.house.productImage4} />
//
//             </div>
//             <div className="col-7 mt-5 container">
//               <form onSubmit={props.updateHouse}>
//                 <div className="row">
//                   <div className="col-10 offset-1">
//                     <div className="form-group">
//                       <label className="mb-0" htmlFor="address">Address:</label>
//                         <input name="address" id="address" type="text" className="form-control" onChange={props.handleEditFormInput} value={props.house.address} />
//                     </div>
//                     <div className="form-group">
//                       <label className="mb-0" htmlFor="address2">Address2:</label>
//                         <input name="address2" id="address2" type="text" className="form-control" onChange={props.handleEditFormInput} value={props.house.address2} />
//                     </div>
//                     <div className="form-group">
//                       <label className="mb-0" htmlFor="state">State:</label>
//                         <input name="state" id="state" type="text" className="form-control" onChange={props.handleEditFormInput} value={props.house.state} />
//                     </div>
//                     <div className="form-group">
//                       <label className="mb-0" htmlFor="year">Year:</label>
//                         <input name="year" id="year" type="text" className="form-control" onChange={props.handleEditFormInput} value={props.house.year} />
//                     </div>
//                     <div className="form-group">
//                       <label className="mb-0" htmlFor="sqft">Sqft:</label>
//                         <input name="sqft" id="sqft" type="text" className="form-control" onChange={props.handleEditFormInput} value={props.house.sqft}  />
//                     </div>
//                     <div className="form-group">
//                       <label className="mb-0" htmlFor="memo">Memo:</label>
//                         <textarea name="memo" id="memo" className="form-group px-4 py-4" rows="3" cols="53" onChange={props.handleEditFormInput} value={props.house.memo}></textarea>
//                     </div>
//                   </div>
//                 </div>
//
// { username === 'admin'?
//             <div className="col-10 offset-1">
//               <h1>Admin</h1>
//               <div className="form-group">
//                 <label className="mb-0" htmlFor="attic">Attic Insulation:</label>
//                   <input name="attic" id="attic" type="text" className="form-control" onChange={props.handleEditFormInput} value={props.house.attic}  />
//               </div>
//               <div className="form-group">
//                 <label className="mb-0" htmlFor="whyear">WH Year:</label>
//                   <input name="whyear" id="whyear" type="text" className="form-control" onChange={props.handleEditFormInput} value={props.house.whyear}  />
//               </div>
//               <div className="form-group">
//                 <label className="mb-0" htmlFor="whef">WH EF:</label>
//                   <input name="whef" id="whef" type="text" className="form-control" onChange={props.handleEditFormInput} value={props.house.whef}  />
//               </div>
//               <div className="form-group">
//                 <label className="mb-0" htmlFor="whfuel">WH Fuel:</label>
//                   <input name="whfuel" id="whfuel" type="text" className="form-control" onChange={props.handleEditFormInput} value={props.house.whfuel}  />
//               </div>
//               <div className="form-group">
//                 <label className="mb-0" htmlFor="heatyear">Heating Year:</label>
//                   <input name="heatyear" id="heatyear" type="text" className="form-control" onChange={props.handleEditFormInput} value={props.house.heatyear}  />
//               </div>
//               <div className="form-group">
//                 <label className="mb-0" htmlFor="heatef">Heating EF:</label>
//                   <input name="heatef" id="heatef" type="text" className="form-control" onChange={props.handleEditFormInput} value={props.house.heatef}  />
//               </div>
//               <div className="form-group">
//                 <label className="mb-0" htmlFor="heatfuel">Heating Fuel:</label>
//                   <input name="heatfuel" id="heatfuel" type="text" className="form-control" onChange={props.handleEditFormInput} value={props.house.heatfuel}  />
//               </div>
//             </div>
// : null }
// { username === 'admin'?
//
//             <div className="col-10 offset-1">
//               <div className="form-group mt-4 mb-4">
//                 <label className="mb-0 mr-2" htmlFor="status">Status:</label>
//                   <select name="status" id="status" onChange={props.handleEditFormInput} value={props.house.status}>
//                     <option value="Compelted">Completed</option>
//                     <option value="Checking">Checking</option>
//                   </select>
//               </div>
//               <div className="form-group">
//                 <label className="mb-0" htmlFor="memo2">Memo:</label>
//                   <textarea name="memo2" id="memo2" className="form-group px-4 py-4" rows="3" cols="50" onChange={props.handleEditFormInput} value={props.house.memo2} >
//                   </textarea>
//               </div>
//             </div>
// :
//           <div>
//             <div>...</div>
//           </div>
//
//
// }
//
//               <div className="text-center">
//                 <input type="submit" className="btn btn-primary" />
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     )
//
// }
