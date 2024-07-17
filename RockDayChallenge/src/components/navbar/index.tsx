import { useState } from "react";
import { NavbarStatic } from "./navbar-static";
import { NavbarNew } from "./navbar-new";
import { NavbarSearch } from "./navbar-search";

export function Navbar() {
  const [isVisibleNewRegister, setVisibilityNewRegister] = useState(false);
  const [isVisibleSearch, setVisibilitySearch] = useState(false);

  const ShowHideNewRegister = () => {
    setVisibilityNewRegister(!isVisibleNewRegister);
    if (isVisibleSearch) setVisibilitySearch(false);
  };

  const ShowHideSearch = () => {
    setVisibilitySearch(!isVisibleSearch);
    if (isVisibleNewRegister) setVisibilityNewRegister(false);
  };

  const HideAll = () => {
    setVisibilityNewRegister(false);
    setVisibilitySearch(false);
  };

  return (
    <div className="flex-1 flex-row">
      <NavbarStatic
        hideAll={HideAll}
        showNewRegister={ShowHideNewRegister}
        showSearch={ShowHideSearch}
      />
      {isVisibleNewRegister && <NavbarNew />}
      {isVisibleSearch && <NavbarSearch />}
    </div>
  );
}
