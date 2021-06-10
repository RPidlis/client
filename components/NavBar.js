import styled from 'styled-components';

const Nav = styled.nav`
  background: #FEFEFE;
  padding: 17px 0;
`;

const NavBarItem = styled.div`
  position: relative;
`;

const Logo = styled.a`
  font-style: normal;
	font-weight: 500;
	font-size: 18px;
	line-height: 21px;
	color: #3260a1;
`
const AddPostBtn = styled.a`
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  color: #FFFFFF;
	background: #67BFFF;
	box-shadow: 0px 10px 25px rgba(148, 174, 213, .15);
	border-radius: 10px;
	position: absolute;
	width: 139px;
	height: 25px;
	left: 50%;
	top: 25px;
	display: flex;
	justify-content: center;
	align-items: center;
	transform: translate(-50%);
`

export default function NavBar () {
	return (<Nav>
		<div className="container">
			<NavBarItem>
				<Logo>NEXT | BLOG</Logo>
				<AddPostBtn>Add Blog</AddPostBtn>
			</NavBarItem>
		</div>
	</Nav>);
}
