import React from 'react';
import PropTypes from 'prop-types';

import Image from '../../generic/Image';
import { buildAssetAbsolutePath } from '../../../lib/assetsHelper';
import SolutionPackageItemText from './SolutionPackageItemText';
import SolutionPackageItem from './SolutionPackageItem';

const lomImage = buildAssetAbsolutePath('/images/solution-package/mainboard.png');

const SolutionPackageLom = ({ backgroundColor, included }) => {

	return (
		<SolutionPackageItem backgroundColor={ backgroundColor }>
			<div>
				<Image path={ lomImage } />
				<SolutionPackageItemText
					header={ `LOM ${ included ? 'Optional' : '???' }` }
					text="Light-out Mgmt (LOM)"
				/>
				<div/>
			</div>
		</SolutionPackageItem>
	);
};

SolutionPackageLom.propTypes = {
	backgroundColor: PropTypes.string,
	included: PropTypes.bool,
};

export default SolutionPackageLom;
