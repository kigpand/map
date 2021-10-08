import styled from 'styled-components';
import MapViewer from './MapViewer';
import RESET from '../imgs/reset.png';
import { useState } from 'react/cjs/react.development';

const Wrapper = styled.div`

    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    .item{
        width: 50px;
        height: 50px;
        background-color: blue;
    }

    .viewer{
        border: 1px solid black;
        width: 1024px;
        height: 768px;
        overflow: hidden;
        position: relative;
        
        &:hover{
            cursor: grab;
        }

        .reset{
            position: absolute;
            top: 10px;
            right: 10px;
            z-index: 10;

            &:hover{
                cursor: pointer;
            }
        }
    }
    `;
const MapWrapper = () =>{

    const [markerList, setMarkerList] = useState([]);

    const onReset = () =>{
        setMarkerList([]);
    }

    return(
        <Wrapper>
            <div className="viewer">
                <img src={RESET} alt="리셋버튼" className="reset" onClick={onReset}/>
                <MapViewer markerList={markerList} setMarkerList={setMarkerList} />
            </div>
        </Wrapper>
    )
}

export default MapWrapper;