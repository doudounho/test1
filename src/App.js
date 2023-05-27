import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import  Button  from './components/Boutton';
import Footer from './components/Footer';
import Header from './components/Header';
import Checkbox from './components/Checkbox';
import Input from './components/Input';

function App() {

  return (
    <div className="App">
          <main className="form-signin w-100 m-auto">
           {/* form element */}
            <form>
                <Header/>
                <Input type={"email"} placeholder={"name@example.com"} id={"floatingInput"} labelValue={"Email address"} />
                <Input type={"password"} placeholder={"password"} id={"floatingPassword"} labelValue={"Password"} />
                <Checkbox>  </Checkbox>
                <Button>Cliquer ici</Button>
                <Footer></Footer> 
            </form>
          </main>
    </div>
  );
}
// default export of the App components

export default App;