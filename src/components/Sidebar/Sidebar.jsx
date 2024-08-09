import LocationBar from '../LocationBar/LocationBar';
import TypeBar from '../TypeBar/TypeBar';
import VehicleBar from '../VehicleBar/VehicleBar';

const Sidebar = () => {
  return (
    <div>
      <LocationBar />
      <TypeBar />
      <VehicleBar />
    </div>
  );
};

export default Sidebar;
