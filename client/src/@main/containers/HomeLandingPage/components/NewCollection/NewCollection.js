import {ContainerWrapper, NewInH1, NewInLink, ImageText, GridContainer, GridItem} from './NewCollection.styles'
import {Container} from '@mui/material';

const itemData = [
	{
		img: 'img/mainPage/photo-1487222477894-8943e31ef7b2.svg',
		title: 'NEW IN',
		rows: 2,
		cols: 1,
		path: '/store/man',
	},
	{
		img: 'img/mainPage/Mask Group.svg',
		title: 'NEW COLLECTION',
		rows: 1,
		cols: 1,
		path: '/store/woman',
	},
	{
		img: 'img/mainPage/Mask Group (1).svg',
		title: 'NEW COLLECTION',
		rows: 1,
		cols: 1,
		path: '/store/accessories',
	}
]


function srcset(image, size, rows = 1, cols = 1) {
	return {
		src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
		srcSet: `${image}?w=${size * cols}&h=${
			size * rows
		}&fit=crop&auto=format&dpr=2 2x`,
	};
}

function NewCollection() {
	return (
		<ContainerWrapper>
			<Container maxWidth='lg'>
				<NewInH1>New</NewInH1>
				<GridContainer>
					{itemData.map((item) => (
						<GridItem key={item.img} column={item.cols} row={item.rows}>
							<NewInLink to={item.path}>
								<img
									{...srcset(item.img, 121, item.rows, item.cols)}
									alt={item.title}
									loading="lazy"
								/>
								<ImageText>{item.title}</ImageText>
							</NewInLink>
						</GridItem>
					))}
				</GridContainer>
			</Container>
		</ContainerWrapper>
	);
}

export default NewCollection;

