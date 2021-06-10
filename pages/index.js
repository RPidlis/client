import Head from 'next/head';
import styled from 'styled-components';
import NavBar from '../components/NavBar';

const Wrapper = styled.div`
  background: #EEF5FF;
  min-height: 100vh;
  width: 100%;

`;

const PostWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 30px;
`;
const Post = styled.a`
  width: 350px;
  height: 270px;
  border-radius: 15px;
  margin-top: 50px;
  position: relative;
  cursor: pointer;
  background: url('${props => props.bgImage}') center / cover no-repeat;
  :hover {
    transform: scale(1.1);
    transition: .3s all ease;
  }
`;

const PostTitle = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  padding: 15px 20px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background: white;
  border-radius: 0 0 15px 15px;
  color: #3260A1;
`;

export default function Home () {
	return (<div>
		<Head>
			<title>Create Next App</title>
		</Head>
		<NavBar/>
		<Wrapper>
			<div className="container">
				<PostWrapper>
					<Post bgImage={'./static/images/1.jpeg'}>
						<PostTitle>Bologging. Paradise or pathos?</PostTitle>
					</Post>
					<Post bgImage={'./static/images/2.jpeg'}>
						<PostTitle>Bologging. Paradise or pathos?</PostTitle>
					</Post>
					<Post bgImage={'./static/images/3.jpeg'}>
						<PostTitle>Bologging. Paradise or pathos?</PostTitle>
					</Post>
					<Post bgImage={'./static/images/4.jpeg'}>
						<PostTitle>Bologging. Paradise or pathos?</PostTitle>
					</Post>
					<Post bgImage={'./static/images/5.jpeg'}>
						<PostTitle>Bologging. Paradise or pathos?</PostTitle>
					</Post>
					<Post bgImage={'./static/images/6.jpeg'}>
						<PostTitle>Bologging. Paradise or pathos?</PostTitle>
					</Post>
				</PostWrapper>

			</div>

		</Wrapper>
	</div>);
}
