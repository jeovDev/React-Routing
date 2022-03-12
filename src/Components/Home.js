import Card from '../mui-component/card'
import Html from '../html.png'
import Css from '../css.png'
import rct from '../react.png'
const Home = () => {

    const first_Def =  "Hypertext Markup Language, a standardized system for tagging text files to achieve font, color, graphic, and hyperlink effects on World Wide Web pages.";
    const sec_Def =  "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.";
    const third_Def =  "React is a free and open-source front-end JavaScript library for building user interfaces based on UI components.";

    return (
        <>
        <div className="Home">
   
      <Card title="HTML" defintion={first_Def} image={Html}/>
      <Card title="CSS" defintion={sec_Def} image={Css}/>
      <Card title="REACTJS" defintion={third_Def} image={rct}/>
        </div>

        
        </>
        
      );
}
 
export default Home;
