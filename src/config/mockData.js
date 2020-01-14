import { cardTypes } from './constants';

export const mockData = {

	// MOCK FOR MOBILE AND ENDPOINT CARD
	[cardTypes.mobileAndEndpoint]: {
		title: 'Unified Endpoint Security',
		additionalLabel: 'Advanced',
		description: 'Check Point Unified Endpoint Security Advanced offers comprehensive, enterprise-grade endpoint and mobile device security that protects PCs, Mac, iOS and Android devices against known, unknown and Zero-day threats.',
		includedPackages: [
			{	id: 1, feature: 'SandBlast Agent Advanced.' },
			{	id: 2, feature: 'SandBlast Mobile Per Device' },
			{	id: 3, feature: 'Two 6500 gateways' },
			{	id: 4, feature: '450 Gbps using 52 gateways' },
		],
		price: 59,
		additionalText: '1 PC/YEAR & 1 Mobile/Year' },

	// MOCK FOR MANAGEMENT CARD
	[cardTypes.management]: {
		title: 'Smart-1 5150 NGSM',
		subTitle: 'Number of Gateways',
		description: 'SMART-1 5150 Security Management for 150 gateways and over. High-performance management solution, including policy, logs and events in a single box. Choose between Security, Event, or Log management',
		specificationsTitles: {
			mountable: '2U rack',
			storage: 'Upto 48 TB',
			raid: '5, 6, 10, 50 ,60',
			cores: 'Up to 24',
			ram: 'Up to 256 GB',
			powerSupply: 'Dual AC',
			ports: '4x16GbE',
			optionalMessage: 'Extended 1GbE or 10Gbe ports (optional)'
		},
		numberOfDomainsOptions: [
			{ value: '100', label: '100 Domainas', price: '$200,000' },
			{ value: '50', label: '50 Domainas', price: '$185,000' },
			{ value: '25', label: '25 Domainas', price: '$155,000' },
			{ value: '10', label: '10 Domainas', price: '$121,000' }
		]
	},

	// MOCK FOR CLOUD GUARD CARD
	[cardTypes.cloudGuard]: {
		price: 1500,
		additionalText: '1 PC/YEAR & 1 Mobile/Year',
		title: 'CloudGuard IaaS for NSX Next Generation Threat Prevention Gateway' ,
		description: 'The Check Point CloudGuard IaaS Security Gateway for industry leading Hypervisors (VMware ESXi, Hyper-V and KVM) protects your assets from internal and external threats with the full range of Check Point Software Blades . Combined with advanced integration options, security is tailored to fit the most dynamic environment needs. Virtual gateways as well as physical gateways are managed by a unified management platform',
		includedPackages: [
			{	id: 1, feature: 'Hyper-Visors supported: VMware ESXi, Hyper-V, KVM.' },
			{	id: 2, feature: 'CloudGuard IaaS controller with integration to NSX and vCenter.' },
			{	id: 3, feature: 'Unified management for both virtual and physical gateways.' },
		]
	},

	// MOCK FOR SMALL BUSINESSES CARD
	[cardTypes.smallBusinesses]: {
		price: 999,
		title: '910 Next Generation Threat Prevention',
		description: 'The Check Point 910 security gateway is an all-inclusive security appliance for medium size businesses. The 910 Appliance offers enterprise-class Check Point security, with double connection capacity in a rack mount form factor.',
		specificationsTitles: {
			ports: '18x1GbE',
			supportsExternal: '3G/4G/LTE',
			formFactor: 'Desktop',
			wireless: true
		}
	},

	// MOCK FOR NETWORK CARD
	[cardTypes.network]: {
		price: '35,000',
		title: '6800 Based Solution',
		description: 'Hyperscale Security Gateway Solution based on the Maestro Security Orchestrator 140 (MHO-140) and 6800 Security Gateway Appliances',
		specificationsTitles: {
			ram: '32 GB',
			maxNetworkPorts: '18',
			storage: 'Dual SSD',
			networkInterfaces: 'Up to 25 GbE'
		},
		includedPackages: [
			{	id: 1, feature: 'SandBlast Agent Advanced.' },
			{	id: 2, feature: 'SandBlast Mobile Per Device' },
			{	id: 3, feature: 'Two 6500 gateways' },
		],
		genBlocks: [
			{ title: 'Gen V Security', subTitle: 'Full Threat Prevention with Sandblast Zero-Day', gbps: '16.4' },
			{ title: 'Gen III Security', subTitle: 'Next-gen firewall', gbps: '20.4' },
			{ title: 'Gen II Security', subTitle: 'Gen II Security', gbps: '65' },
		]
	},

	// MOCK FOR PAGINATOR
	paginationButtons: [ 1, 2, 3, 4, 5 ],

	// MOCK FOR COMPARE PANEL
	compareList: [
		{
			image: '/images/MaestroHyperscaleGateway.png',
			title: '6500 Based Solution',
			price: 35000,
		},
		{
			image: '/images/MaestroHyperscaleGateway.png',
			title: '7500 Based Solution',
			price: 38000,
		},
		{
			image: '/images/MaestroHyperscaleGateway.png',
			title: '8500 Based Solution',
			price: 20000,
		},
	],

	// MOCK FOR MENU
	menuItems: [
		{
			id: 1,
			label: 'Explore Product',
			imagePath: '/images/hot-air-balloon.svg',
		},
		{
			id: 2,
			label: 'Quick Quote',
			imagePath: '/images/XMLID_806_.svg',
		},
		{
			id: 3,
			label: 'Quote By Sizing',
			imagePath: '/images/size.svg',
		},
	],

	// MOCK FOR NETWORK SECURITY FILTERS
	networkSecurityFilters: {

	}
};

/*
filters: [
{
	type: 'marketSegment',
	options: [ { value, label } ],
},
],
onChange: (updatedFilters) => [ { type, selectedOptions } ]
 */