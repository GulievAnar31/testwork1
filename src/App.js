import HoverParagraph from './components/HoverParagraph';
import Logo from './components/Logo';
import Users from './components/Users';
import Form from './components/Form'
import NoControlForm from './components/NoControlForm';

function App() {
  return (
    <div className="App">
      <Logo />
      <Users />
      <HoverParagraph />
      <hr />
      {/* <Form /> */}
      <hr />
      <h1>Статическая</h1>
      <NoControlForm />
    </div>
  );
}

export default App;
