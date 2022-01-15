import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from "@material-ui/icons/Close";
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars);

    return (
        <Container>
          <a>
            <img src="/images/logo.svg" alt="" />
          </a>
          <Menu>
            <a href="#">Model S</a>
            <a href="#">Model 3</a>
            <a href="#">Model X</a>
            <a href="#">Model Y</a>
            <a href="#">Solar Roof</a>
            <a href="#">Solar Panels</a>
            </Menu>
          <RightMenu>
            <a href="#">Shop</a>
            <a href="#">Account</a>
            <CustomMenu onClick={() => setBurgerStatus(true)} />
          </RightMenu>
          <BurgerNav show={burgerStatus}>
            <CloseWrapper>
              <CustomClose onClick={() => setBurgerStatus(false)} />
            </CloseWrapper>
            {cars && cars.map((car, index) => (
              <li key={index} href="#">{car}</li>
            ))}
            <li><a href="#">Solar Roof</a></li>
            <li><a href="#">Solar Panels</a></li>
            <li><a href="#">Existing Inventory</a></li>
            <li><a href="#">Used Inventory</a></li>
            <li><a href="#">Trade-In</a></li>
            <li><a href="#">Test Drive</a></li>
            <li><a href="#">Commercial Energy</a></li>
            <li><a href="#">Utilities</a></li>
            <li><a href="#">Charging</a></li>
            <li><a href="#">Find Us</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">Investor Relations</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Account</a></li>
            <li><a href="#">More</a></li>
          </BurgerNav>
        </Container>
    );
}

export default Header;

const Container = styled.div`
 min-height: 60px;
 position: fixed;
 display: flex;
 align-items: center;
 justify-content: space-between;
 padding: 0 20px;
 top: 0;
 left: 0;
 right: 0;
 z-index: 1;
`

const Menu = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 flex: 1;
 a {
  font-weight: 510;
  padding: 0 10px;
  flex-wrap: nowrap;
 }

 @media (max-width: 768px) {
  display: none;
 }
`
const RightMenu = styled.div`
  display: flex;
  a {
  margin-right: 10px;
  flex-wrap: nowrap;
 }
`
const CustomMenu = styled(MenuIcon)`
 cursor: pointer;
`

const BurgerNav = styled.div`
 position: fixed;
 top: 0;
 bottom: 0;
 right: 0;
 background: linear-gradient(blue, pink);
 width: 300px;
 z-index: 16;
 list-style: none;
 padding: 20px;
 display: flex;
 flex-direction: column;
 text-align: start;
 overflow: scroll;
 border-radius: 2px;
 transform: ${props => props.show ? 'translateX(0)': 'translateX(100%)'};
 transition: transform 0.3s ease-out;
 li {
   padding: 15px 0;
   border-bottom: 1px solid rgba(0, 0, 0, .2);

   a {
    font-weight: 510;
   }
 }

 ::-webkit-scrollbar {
    display: none;
}
`
const CustomClose = styled(CloseIcon)`
 cursor: pointer;
`

const CloseWrapper = styled.div`
 display: flex;
 justify-content: flex-end;
`