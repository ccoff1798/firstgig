import CurecantiMap from '../../src/CurecantiMap.pdf';
export default function Map() {
    return (
        <div>
            <h1 className='center'>Map of Blue Mesa Reservoir and Curecanti National Recreation Area</h1>
            <iframe className = 'center' src={CurecantiMap}
            width='110%' height='500rem'>
            </iframe>

            <h5>Map Provided by the U.S National Parks Service</h5>
        </div>
    );
  }
  