import React from 'react';
import { Link } from 'react-router-dom'
import './style.css'
export default function Navbar() {
    //<nav>
      //<ul>
        //<li>
          //<Link to="/">Landing</Link>
        //</li>
        //<li>
          //<Link to="/Create">Create</Link>
        //</li>
      //</ul>
    //</nav>




    //<nav className="navbar navbar-expand-lg bg-body-tertiary">
      //<div className="container-fluid">
        //<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          //<span className="navbar-toggler-icon"></span>
        //</button>
        //<div className="collapse navbar-collapse" id="navbarSupportedContent">
          //<ul className="navbar-nav me-auto mb-2 mb-lg-0">
            //<li className="nav-item">
              //<a className="nav-link active" aria-current="page" href="create">Create</a>
            //</li>
            //<li className="nav-item">
              //<a className="nav-link" href="/">Home</a>
            //</li>
          //</ul>
        //</div>
      //</div>
    //</nav>
  
  
    //<nav className="nav">
      //<ul>
        //<li>
          //<Link className="link" to="/">Home</Link>
        //</li>
        //<li>
          //<Link className="link" to="/create">Create</Link>
        //</li>
      //</ul>
    //</nav>
  return (


    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link" aria-current="page" to="/create">Create</Link>
            <Link className="nav-link" aria-current="page" to="/study">Study</Link>
          </div>
        </div>
      </div>
    </nav>





  );
} 
