
function Home() {
    return (

        <div className='container-fluid full_page'>
            <div className="text-center page">
                <span className="welcome">Welcome</span>
                <div className="text-center" >
                    <h3 className="gamename" style={{ margin: '0 auto' }}>Tic Tac Tie</h3>
                </div>
                <button className="gamebutton mx-3 mt-5">Start</button>
                <button className="gamebutton mx-3">Exit</button>
            </div>
        </div>

    );
}
export default Home;