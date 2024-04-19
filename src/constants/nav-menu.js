import { pageRoutes } from "@/config/page-routes";

const NavigationMenuTypes = {
  GRID: "grid",
  LIST: "list",
};

const DefaultMenuType = {
  type: NavigationMenuTypes.LIST,
};

const navMenuItems = {
  // items: [services, corporate],
};

export { DefaultMenuType, NavigationMenuTypes };
export default navMenuItems;
