import Spline, { SplineEvent } from '@splinetool/react-spline';
import bg_img from '../../assets/map_bg/ukiyoe4.png';

interface MapProps {
  setPage: React.Dispatch<React.SetStateAction<string>>;
  traversedPages: number;
  setTraversedPages: React.Dispatch<React.SetStateAction<number>>;
  isEarthQuaking: boolean;
}

const MapUltra: React.FC<MapProps> = ({ setPage, traversedPages, setTraversedPages, isEarthQuaking }) => {

  const handleMouseDown = (event: SplineEvent) => {
    console.log(event.target.name);
    setTraversedPages((prev) => prev + 1);

    if (event.target.name === 'maparrow_cyaya') {
      if (traversedPages >= 6) {
        setPage('6');
      }
      setPage('2');
    } else if (event.target.name === 'maparrow_karasu') {
      if (traversedPages >= 6) {
        setPage('6');
      }
      setPage('5');
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* bg */}  
      <div
        className="ml-16 mt-4 w-4/5 h-4/5 absolute opacity-80 inset-0 bg-cover bg-center bg-no-repeat pointer-events-none rounded-xl shadow-2xl border border-black"
        style={{
          backgroundImage: `url(${bg_img})`,
        }}
      ></div>

      {/* glass */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-4/5 h-3/4 bg-white bg-opacity-10 backdrop-blur-md rounded-xl shadow-2xl border-2 border-gray-300">
        </div>
      </div>
      
      <div className="absolute inset-0 z-10">
        {isEarthQuaking?  <Spline
        scene="https://prod.spline.design/2jgr7fhKbfGU-8-r/scene.splinecode"
        onSplineMouseDown={handleMouseDown}
      /> :  <Spline
        scene="https://prod.spline.design/KN2xBEacJDgB9Juy/scene.splinecode"
        onSplineMouseDown={handleMouseDown}
      />}
     </div>

      <div className="relative flex justify-between items-center px-8 py-16 h-full">
        <div className="text-8xl font-bold opacity-80">
          <p className='text-gray-100'><span className="text-9xl">U</span>LTRA<br/>MAN<br/>ウルトラマン商店街</p>
        </div>

        <div className="text-8xl font-semibold bg-gray-800 bg-opacity-50">
          {isEarthQuaking ? (
            <p className="text-yellow-100"><span className="text-9xl">EAR</span><span className="text-8xl">TH</span><br/><span className="text-9xl">QUA</span>KE<br/>!!!!</p>
          ) : (<></>)}
        </div>
      </div>
    </div>
  );
};

export default MapUltra;
