import styled from 'styled-components';
import Image from 'next/image';
import Head from 'next/head';

import NavBar from '../../components/NavBar';

const Wrapper = styled.div`
  background: #EEF5FF;
  min-height: 100vh;
  width: 100%;
	padding-bottom: 100px;
`;
const BackBtn = styled.a`
  background: #ffffff;
  box-shadow: 0 10px 25px rgba(148, 174, 213, .15);
  border-radius: 10px;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #3260A1;
  margin-top: 30px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  outline: none;
  width: 117px;
  height: 45px;

  :hover {
    box-shadow: 0 0 35px rgba(148, 174, 213, 1);
    transition: .3s all ease;
  }
`;

const PostWrapper = styled.div`
  display: flex;
  background: #FEFEFE;
  border-radius: 15px;
  padding: 35px;
  margin-top: 50px;
	position: relative;
`;

const PostItem = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 50%;
  justify-content: center;
  padding: 35px;
`;
const PostTitle = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  color: #3260A1;
	margin-bottom: 25px;
`;

const PostText = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
`

const RemovePostBtn = styled.a`
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


export default function Post () {
	return (<div>
		<Head>
			<title>NEXT | BLOG Post</title>
		</Head>
		<Wrapper>
			<NavBar/>
			<div className="container">
				<BackBtn>
					<Image
						src="/static/images/arrow.svg"
						alt="sd"
						width={24}
						height={15}
					/>
					Back
				</BackBtn>
				<PostWrapper>
					<PostItem>
						<PostTitle>
							About Something!!
						</PostTitle>
						<PostText>
							Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.
						</PostText>
					</PostItem>
					<PostItem>
						<Image
							src="/static/images/1.jpeg"
							alt="sd"
							width={540}
							height={316}
						/>
					</PostItem>
					<RemovePostBtn>Remove Post</RemovePostBtn>
				</PostWrapper>

			</div>
		</Wrapper>
	</div>);
}
