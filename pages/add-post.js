import styled from 'styled-components';
import Image from 'next/image';
import Head from 'next/head';

import NavBar from '../components/NavBar';

const Wrapper = styled.div`
  background: #EEF5FF;
  min-height: 100vh;
  width: 100%;

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

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Form = styled.form`
  background: #ffffff;
  border-radius: 15px;
  padding: 30px;
  max-width: 500px;
  width: 100%;

`;

const InpitField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const TextLabel = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  color: #222222;
  margin-bottom: 5px;

`;
const Input = styled.input`
  width: 100%;
  display: flex;
  border: 1px solid #E5E5E5;
  box-sizing: border-box;
  border-radius: 5px;
  outline: none;
  padding: 5px 10px;
`;

const TextArea = styled.textarea`
	border: 1px solid #E5E5E5;
  box-sizing: border-box;
  border-radius: 5px;
	min-height: 150px;
	resize: none;
	outline: none;
	padding: 10px 15px;
  margin-bottom: 5px;
`

const FormBtn = styled.button`
	width: 139px;
	height: 33px;
	display: flex;
	justify-content: center;
	align-items: center;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
	text-align: center;
	color: #FFFFFF;
  background: #67BFFF;
  box-shadow: 0 10px 25px rgba(148, 174, 213, .15);
	border-radius: 10px;
	border: none;
  margin: 15px auto 0;
  cursor: pointer;
`

export default function AddPost () {
	return (<div>
		<Head>
			<title>Add Post</title>
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
				<FormWrapper>
					<Form>
						<InpitField>
							<TextLabel>
								Blog Name:
							</TextLabel>
							<Input/>
						</InpitField>
						<InpitField>
							<TextLabel>
								Blog Text:
							</TextLabel>
							<TextArea/>
						</InpitField>
						<InpitField>
							<TextLabel>
								URL Image:
							</TextLabel>
							<Input/>
						</InpitField>
						<FormBtn>ADD</FormBtn>
					</Form>
				</FormWrapper>
			</div>
		</Wrapper>
	</div>);
}
