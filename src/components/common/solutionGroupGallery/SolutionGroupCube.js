import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SolutionGroupCubeBody from './SolutionGroupCubeBody';
import SolutionGroupCubeBodyFooter from './SolutionGroupCubeFooter';
import { hexToRgb } from '../../../lib/utils';
import { colors } from '../../../config/constants';
import { classes as footerClasses } from './SolutionGroupCubeFooter';
import { classes as additionalImagesClasses } from './SolutionGroupCubeBodySmallImages';

const Container = styled.div`  
	width: 300px;
	height: 305px;
    box-shadow: 0px 2px 6px ${ colors.cubeShadow };
    background-color: ${ hexToRgb(colors.solutionCubeBg, 1) };
    border-radius: 8px 8px 8px 8px;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    transition: box-shadow .3s;
    
    :hover {
      box-shadow: 0px 10px 20px ${ colors.cubeShadow };
    }
    
    :hover .${ footerClasses.container } {
      z-index: 20;
      background-color: rgba(${ hexToRgb(colors.checkPointPink) }, .95);
      height: 200px;
      justify-content: start;
      
      > .${ footerClasses.label } {
        color: ${ colors.background };
        font-weight: bold;
        margin-top: 25px;
      }
      
      .${ footerClasses.list } {
        display: block;
      }
    }
    
    :hover .${ additionalImagesClasses.smallImages } {
      filter: none;
    }
`;

const SolutionGroupCube = (props) => {
	const { onClick, mainImagePath, iconPaths, label, features, id, backGroundImage } = props;
	const handleClick = useCallback(() => onClick(id), [ onClick, id ]);

	return (
		<Container onClick={ handleClick }>
			<SolutionGroupCubeBody
				mainImagePath={ mainImagePath }
				iconPaths={ iconPaths }
				backGroundImage={ backGroundImage }
			/>
			<SolutionGroupCubeBodyFooter
				features={ features }
				label={ label }
			/>
		</Container>
	);
};

SolutionGroupCube.defaultProps = {
	iconPaths: [],
};

SolutionGroupCube.propTypes = {
	id: PropTypes.number.isRequired,
	mainImagePath: PropTypes.string.isRequired,
	iconPaths: PropTypes.arrayOf(PropTypes.string),
	label: PropTypes.string.isRequired,
	features: PropTypes.arrayOf(PropTypes.string),
	onClick: PropTypes.func,
	backGroundImage: PropTypes.string,
};

export default SolutionGroupCube;
