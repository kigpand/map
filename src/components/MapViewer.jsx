import { useState } from 'react';
import Draggable from 'react-draggable';
import styled from 'styled-components';
import MapMarker from './MapMarker';
import MAP from '../imgs/map.png';

const MapWrapper = styled.div`
    width: 100%;
    height: 100%;

    .container{
        position: relative;
        .test{
            -webkit-user-drag: none;
            position: relative;
        }
    }
`;
const MapViewer = ({ markerList, setMarkerList}) =>{

    const [left, setLeft] = useState(0);
    const [top, setTop] = useState(0);

    const onDrag = () =>{
        const map = document.querySelector('.map');
        const test = document.querySelector('.test');
        if(left === 0){
            setLeft(map.getBoundingClientRect().width - test.getBoundingClientRect().width);
        }
        if(top === 0){
            setTop(map.getBoundingClientRect().height - test.getBoundingClientRect().height);
        }
    }

    const onRightBtn = (e) =>{
        e.preventDefault();
        setMarkerList([...markerList, { x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY }]);
    }

    return(
        <MapWrapper className="map">
           <Draggable bounds={{ left: left, top: top, right: 0, bottom: 0}} onDrag={onDrag}>
               <div onContextMenu={onRightBtn} className="container">
                <img src={MAP} alt="지도" draggable className="test"/>
                {
                    markerList.length > 0 && markerList.map((v)=>{
                        return <MapMarker x={v.x} y={v.y} />
                    })
                }
               </div>
           </Draggable>
        </MapWrapper>
    )
}

export default MapViewer;