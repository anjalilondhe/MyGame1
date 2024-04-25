import { useEffect, useRef, useState } from 'react';
import Table from 'react-bootstrap/Table';
import ReactConfetti from 'react-confetti';

let data = ["", "", "", "", "", "", "", "", ""]

const Game1 = () => {
    let [count, setCount] = useState(0);
    let [lock, setLock] = useState(false);
    let [array, setArray] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);

    let box1 = useRef(null);
    let box2 = useRef(null);
    let box3 = useRef(null);
    let box4 = useRef(null);
    let box5 = useRef(null);
    let box6 = useRef(null);
    let box7 = useRef(null);
    let box8 = useRef(null);
    let box9 = useRef(null);

    let box_array = [box1, box2, box3, box4, box5, box6, box7, box8, box9]

    const toggle = (e, num) => {

        if (array[num] == 1) return;
        const updatedArr = array.map((elem, idx) => {
            return num == idx ? 1 : elem;
        })
        setArray(updatedArr);
        if (lock) {
            return 0;
        }
        else if (count % 2 === 0) {
            e.target.innerHTML = 'X';
            data[num] = "X";
            setCount(++count);
        }
        else if (count % 2 != 0) {
            e.target.innerHTML = 'O';
            data[num] = "O";
            setCount(++count);
        }
        checkWin();
    }

    const checkWin = () => {
        const winConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let condition of winConditions) {
            const [a, b, c] = condition;
            if (data[a] && data[a] === data[b] && data[a] === data[c]) {
                setLock(true);
                setWin(data[a] == "X" ? 1 : 2);
                return;
            }
        }
    }
    const won = (winner) => {
        setLock(true);
    }
    const reset = (e) => {
        setLock(false);
        setCount(0);
        setArray([0, 0, 0, 0, 0, 0, 0, 0, 0]);
        data = ["", "", "", "", "", "", "", "", ""];
        box_array.map((e) => {
            e.current.innerHTML = " ";
        })
    }
    const [windowDiamention, setDiamention] = useState({ width: window.innerWidth, height: window.innerHeight });
    const detectSize = () => {
        setDiamention({ width: window.innerWidth, height: window.innerHeight });
    }
    useEffect(() => {
        window.addEventListener('resize', detectSize);
    }, [windowDiamention]
    );

    var [win, setWin] = useState(0)
    return (
        <section id='start'>

            {(win === 0) ? <div className="background"> <div className='text-center'>
                <h1 className='title'>Tic Tac Toe Game In <span>React</span></h1>
                <span className='abc' readonly></span>
                <Table striped className='my-5'>
                    <tbody className='board'>
                        <tr className='row1'>
                            <button className='boxes' ref={box1} onClick={(e) => { toggle(e, 0) }} style={{ backgroundColor: 'black', color: 'white', fontSize: '30px', padding: '30px 40px' }}></button>
                            <button className='boxes' ref={box2} onClick={(e) => { toggle(e, 1) }} style={{ backgroundColor: '#fffff6', color: 'black', fontSize: '30px', padding: '30px 40px' }}></button>
                            <button className='boxes' ref={box3} onClick={(e) => { toggle(e, 2) }} style={{ backgroundColor: 'black', color: 'white', fontSize: '30px', padding: '30px 40px' }}></button>
                        </tr>
                        <tr className='row2'>
                            <button className='boxes' ref={box4} onClick={(e) => { toggle(e, 3) }} style={{ backgroundColor: '#fffff6', color: 'black', fontSize: '30px', padding: '30px 40px' }}></button>
                            <button className='boxes' ref={box5} onClick={(e) => { toggle(e, 4) }} style={{ backgroundColor: 'black', color: 'white', fontSize: '30px', padding: '30px 40px' }}></button>
                            <button className='boxes' ref={box6} onClick={(e) => { toggle(e, 5) }} style={{ backgroundColor: '#fffff6', color: 'black', fontSize: '30px', padding: '30px 40px' }}></button>
                        </tr>
                        <tr className='row2'>
                            <button className='boxes' ref={box7} onClick={(e) => { toggle(e, 6) }} style={{ backgroundColor: 'black', color: 'white', fontSize: '30px', padding: '30px 40px' }}></button>
                            <button className='boxes' ref={box8} onClick={(e) => { toggle(e, 7) }} style={{ backgroundColor: '#fffff6', color: 'black', fontSize: '30px', padding: '30px 40px' }}></button>
                            <button className='boxes' ref={box9} onClick={(e) => { toggle(e, 8) }} style={{ backgroundColor: 'black', color: 'white', fontSize: '30px', padding: '30px 40px' }}></button>
                        </tr>
                    </tbody>
                    <button className='my-5 mx-4  gbtn' onClick={(e) => { reset() }}>Reset</button>
                    <a href='#stop'><button className='my-5 mx-4 gbtn'>Stop</button></a>
                </Table>
            </div>
            </div>
                : <>
                    <div className='congrats text-center'>
                        <div>
                            <h1 className='congrats1'>Congratulations</h1>
                            <h4 className='congrats1 my-4'><b>{win == 1 ? 'X' : 'O'} is winner</b></h4>
                            <a href='start'><button className='my-4 px-3 py-2' onClick={(e) => { setWin(0); reset(e) }}>Play Again</button></a><br></br>
                            <a href='#stop'><button className='px-4 py-2 my-4'>Exit</button></a>
                        </div>
                    </div>
                    <ReactConfetti
                        className='confetti1'
                        width={windowDiamention.width}
                        height={windowDiamention.height}
                        tweenDuration={1000}
                    />

                </>
            }
        </section>
    );
}
export default Game1;

