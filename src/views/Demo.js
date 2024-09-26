import V86Container from '../components/V86Container';
import bios from '../emulatorFiles/seabios.bin'
import vgabios from '../emulatorFiles/vgabios.bin'
import mp3 from '../osImg/mp3.img'
import v86wasm from '../emulatorFiles/v86.wasm'

const Demo = () => {
    return (<div className="content-container">
        <div className="demo-box">
            <div className="tips-area">
                <div className="page-title">Online Demo</div>
                <div className='image-holder'>
                </div>
                <div>This is an online demo of 391OS.</div>
                <div>For a better experience, we suggest opening this demo on a computer. </div>
                <div>Click "Run" to start the emulator, "Stop" to end the emulator. </div>
                <div>You can read the tips below before you start using the emulator. </div>
            </div>
            <V86Container biosURL={bios} vgaURL={vgabios} hdaURL={mp3} wasmPath={v86wasm}/>
            <div className="tips-area">
                <div>Helpful Information:</div>
                <ul>
                    <li>Ctrl + L: Clear the screen</li>
                    <li>Alt + F1, F2, F3: Swtich between 3 different terminals</li>
                </ul>
                <div>Notes:</div>
                <ul>
                    <li>If you do not see the prompt 391OS, press "Enter" </li>
                    <li>Because it does not have signals implemented, some terminal key combinations, eg "Ctrl+C", will not work</li>
                    <li>You can run up to 6 processes </li>
                    <li>Type "exit" to end shell program, but you cannot end the base shell program in each terminal</li>     
                    <li>Pingpong is not a stoppable program. If you want to stop it, use the "Stop" button on the top</li>  
                    <li>Current supported program: ls, cat, grep, pingpong, fish, counter</li>  
                </ul>
                {/* <div> The on-screen keyboard functionality is on its way. Stay tuned! {`:)`} </div>
                <div id='demo-warning'> 
                    For current ECE 391 students: 
                        This demo shows most of the expected results.
                        Depending on the rubric, the results here may be different from yours.
                </div> */}
            </div>
        </div>
    </div>);
}

export default Demo;