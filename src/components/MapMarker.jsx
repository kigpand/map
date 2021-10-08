import styled from 'styled-components';
import Marker from '../imgs/marker.png';

const MarkerWrapper = styled.div`
    position: absolute;
    transform: translate(-50%, -100%);
    left: ${prop => prop.left}px;
    top: ${prop => prop.top}px;

    img{
        width: 70px;
        height: 100px;
    }
`;

const MapMarker = ({ x, y }) =>{
    return(
        <MarkerWrapper left={x} top={y}>
            <img src={Marker} alt="마커" />
        </MarkerWrapper>
    )
}

export default MapMarker;