import React, { useState } from 'react';
import styled from 'styled-components';
import './App.css';

const App = () => {
    const [Hori, setHori] = useState(10);
    const [Blur, setBlur] = useState(10);
    const [Veri, setVeri] = useState(10);
    const [Bor, setBor] = useState(0);
    const [color, setcolor] = useState("black");
    const [shapeColor, setshapeColor] = useState("blue");

    return (
        <div className='container'>
            <div className="cont_main_1">
                <div className="cont-1">
                    <div className="box" style={{ boxShadow: `${Hori}px ${Veri}px ${Blur}px ${color}`, borderRadius: `${Bor}%`, backgroundColor: `${shapeColor}` }}></div>
                    <div className="toggle_btn_box">
                        <p className="btn_font">Outline</p>
                        <div className="switch"></div>
                        <p className="btn_font">Inset</p>
                    </div>
                </div>
                <div className="cont-2">
                    <div className="dump_box">
                        <div className="label">X-axis</div>
                        <input type="range" min="-200" max="200" value={Hori} onChange={(e) => setHori(e.target.value)} />
                        <div className="label">Y-axis</div>
                        <input type="range" min="-200" max="200" value={Veri} onChange={(e) => setVeri(e.target.value)} />
                        <div className="label">Blur</div>
                        <input type="range" min="0" max="200" value={Blur} onChange={(e) => setBlur(e.target.value)} />
                        <div className="label">Border Radius</div>
                        <input type="range" min="0" max="50" value={Bor} onChange={(e) => setBor(e.target.value)} />
                        <div className="label">Color</div>
                        <input type="color" value={color} onChange={(e) => setcolor(e.target.value)} />
                        <div className="label">Shape Color</div>
                        <input type="color" value={shapeColor} onChange={(e) => setshapeColor(e.target.value)} />
                    </div>
                </div>
            </div>
            <div className="cont_main_2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#d4d4d4" fill-opacity="1" d="M0,192L30,181.3C60,171,120,149,180,149.3C240,149,300,171,360,186.7C420,203,480,213,540,213.3C600,213,660,203,720,192C780,181,840,171,900,186.7C960,203,1020,245,1080,245.3C1140,245,1200,203,1260,165.3C1320,128,1380,96,1410,80L1440,64L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
                <p className="message">Made with 💕 by Sumeet.</p>
            </div>
        </div>
    )
}

export default App;
