import { Link } from "react-router-dom";

export const Main:React.FC = () => (
    <div className="screen">
      <div className="container">
        <div className="screen_content">
          <h1>fuccbo11 store</h1>
          <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h4>
          <Link to="/market/products"><button className="btn">Shop NOW!</button></Link> 
        </div>
      </div>
    </div> 
)
