import React from 'react';
import { styled } from "styled-components";
import { Colors } from '#V2/theme';

const Header = ()=>{

return <HeaderWrap>test</HeaderWrap>
}

export default Header;

const HeaderWrap = styled.div`
background-color: ${props => Colors.backgrounds.Flipped_Navy};
color: ${props => Colors.Text};

`
