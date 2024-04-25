import './App.css';
import FooterExample from './Footer';
import Game1 from './Game1';

function App() {

  const styles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // height: '100vh',
    // width:'200vh',
  };

  return (
    <>
      <div className='full_page' id='stop' style={styles}>
        <div className="text-center page">
          <span className="welcome">Welcome</span>
          <div className="text-center" >
            <h3 className="gamename" style={{ margin: '0 auto' }}>Tic Tac Toe</h3>
          </div>
          <a href='#start'><button className="gamebutton mx-3 mt-5">Start</button></a>
        </div>
      </div>
      <Game1/>
      {/* <Game/> */}
      <FooterExample/>
    </>
  );
}

export default App;
