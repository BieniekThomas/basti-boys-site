import React from 'react';
import styled from 'styled-components';
import StyledWrapper from '../util/wrapper/wrapper';
import config from '../config';
import Image from '../components/image/image';

const aboutPage = () => {
	const { pictures } = config;
	return (
		<StyledWrapper>
			<h1>about</h1>
			{
				pictures.map( ( image, index ) => {
					const data = {
						url: image.path,
						alt: image.alt,
						copyright: false,
						dimensions: {
							height: image.height,
							width: image.width,
						},
					};
					return (
						<Section key={image.url}>
							<div className={index % 2 === 0 ? 'left' : 'right'}>
								<Image data={data} />
								<div className="text">
									<h3>
										#
										{index + 1}
									</h3>
									<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nulla totam fugiat dolorum aspernatur repellat, incidunt magni quis officia provident numquam. Itaque necessitatibus fugiat voluptas placeat tempore temporibus aperiam quaerat.</p>
								</div>
							</div>
						</Section>
					);
				})
			}
		</StyledWrapper>
	);
};

const Section = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 10vh;

	> div{
		display: flex;
		> *{
			flex-grow: 1;
			padding: 30px;
		}
		> .text {
			max-width: 40%;
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;

			h3{
				font-size: 10vw;
			}
		}
	}
	
	.left{
		
	}

	.right{
		display: flex;
		flex-direction: row-reverse;
	}
`;

export default aboutPage;
