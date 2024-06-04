import styled from 'styled-components';

const StyledTestimonials = styled.div`
	box-sizing: border-box;
	width: ${props => props.width};
	height: ${props => props.height};
	background-color: ${props => props['background-color']};
	margin-bottom: 30px;
	border-radius: 10px;
	font-family: 'Barlow Semi Condensed', sans-serif;
	font-weight: 100;
	font-style: normal;
	color: ${props => props.color};
`;

const StyledHeader = styled.div`
	position: absolute;
	z-index: 3;
	align-items: center;
	text-align: center;
	display: flex;
	width: 131px;
	height: 15px;
	padding: 30px;
	justify-content: space-between;

	.div {
		flex-direction: column;
	}
	img {
		width: 28px;
		height: 28px;
		border-radius: 50%;
		border: 1px solid purple;
	}
	h3 {
		font-size: 13px;
		margin: 0;
	}
	p {
		font-size: 11px;

		margin: 2px 0 0 0;
	}
`;

const StyledFirstText = styled.p`
	position: absolute;
	margin-top: ${props => props['margin-top']};
	font-family: 'Barlow Semi Condensed', sans-serif;
	width: ${props => props.width};
	height: ${props => props.height};
	font-size: 20px;
	margin-left: 30px;
	margin-right: 30px;
	line-height: 25px;
`;

const StyledSecondText = styled.p`
	position: absolute;
	margin-top: ${props => props['margin-top']};
	font-family: 'Barlow Semi Condensed', sans-serif;
	width: ${props => props.width};
	height: ${props => props.height};
	font-size: 13px;
	margin-left: 30px;
	margin-right: 30px;
	line-height: 20px;
`;

export { StyledTestimonials, StyledHeader, StyledFirstText, StyledSecondText };
