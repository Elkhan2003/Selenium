import React, {FC} from "react";

const Menu: FC = () => {

  return <>Menu
    <div className="nav-menu-container">
      <ul id="nav">
        <li><a href="#">Main Item 1</a></li>
        <li><a href="#">Main Item 2</a>
          <ul>
            <li><a href="#">Sub Item</a></li>
            <li><a href="#">Sub Item</a></li>
            <li><a href="#">SUB SUB LIST »</a>
              <ul>
                <li><a href="#">Sub Sub Item 1</a></li>
                <li><a href="#">Sub Sub Item 2</a></li>
              </ul>
            </li>
          </ul>
        </li>
        <li><a href="#">Main Item 3</a></li>
      </ul>
    </div>
  </>;
};

export default Menu;
