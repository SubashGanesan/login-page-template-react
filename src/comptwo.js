import React from 'react';

export function Comptwo(props){
    return(
        <div className=" d-flex justify-content-center my-5">
        <div className="card bg-secondary border-primary" style={{width: '25rem'}}>
          <div className="card-body">
            <div className="card-text">
              <h4 className="card-title d-flex justify-content-center my-3">Login</h4>
              <form action="">
                <div class="form-group col-sm-6 my-5">
                  <label for="Password">User Name :</label>
                  <input type="text" className="form-control" id="UserName" placeholder="Enter the username"
                    style={{width: '15rem'}} />
                    </div>
                    <div class="form-group col-sm-6 my-5">
                  <label for="Password">Password :</label>
                  <input type="password" className="form-control" id="Password" placeholder="Enter the Password"
                    style={{width: '15rem'}} />
                    </div>
                    <input className="bg-primary my-2" type="button" value="Login"/>
              </form>
            </div>
        </div>
        </div>

        </div>
)
}