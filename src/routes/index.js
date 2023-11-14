import { useRoutes } from 'react-router-dom';

// project import
import LoginRoutes from './loginRoutes.js';
//import MainRoutes from './MainRoutes';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  return useRoutes([LoginRoutes]);
}
