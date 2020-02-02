import React from 'react';

import SolutionPackageItem from './SolutionPackageItem';
import Image from '../../generic/Image';
import { buildAssetAbsolutePath } from '../../../lib/assetsHelper';

const includeImage = buildAssetAbsolutePath('/images/solution-package/include.png');
const arrowImage = buildAssetAbsolutePath('/images/solution-package/right-arrow.png');

const SolutionPackageIncluded = () => {

	return (
		<SolutionPackageItem>
			<div>
				<Image path={ buildAssetAbsolutePath(includeImage) } />
				<div>Software Included</div>
				<Image path={ buildAssetAbsolutePath(arrowImage) } />
			</div>
		</SolutionPackageItem>
	);
};

export default SolutionPackageIncluded;
