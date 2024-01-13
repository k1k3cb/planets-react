import { v4 } from 'uuid';
import { COLORS } from '../styles/colors';

export const PLANETS = [
	{
		id: v4(),
		name: 'Mercury',
		overview:
			"Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
		wikipedia: 'http://en.wikipedia.org/wiki/Mercury',
		rotationTime: '58.6 DAYS',
		revolutionTime: '87.97 DAYS',
		radius: '2,439.7 KM',
		averageTemp: '430ºC',
		internalStricture:
			"Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.",
		surfaceGeology:
			"Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.",
		color: COLORS.mercury
	},
	{
		id: v4(),
		name: 'Venus',
		overview:
			'The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate.',
		wikipedia: 'http://en.wikipedia.org/wiki/Venus',
		rotationTime: '243 DAYS',
		revolutionTime: '224.7 DAYS',
		radius: '6,051.8 KM',
		averageTemp: '471ºC',
		internalStricture:
			'Much of the Venusian surface appears to have been shaped by volcanic activity. Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across. The only volcanic complex of this size on Earth is the Big Island of Hawaii.',
		surfaceGeology:
			"Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.",
		color: COLORS.venus
	},
	{
		id: v4(),
		name: 'Earth',
		overview:
			"Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle.",
		wikipedia: 'http://en.wikipedia.org/wiki/Earth',
		rotationTime: '0.99 DAYS',
		revolutionTime: '365.26 DAYS',
		radius: '6,371 KM',
		averageTemp: '16ºC',
		internalStricture:
			'The total surface area of Earth is about 510 million km2. The continental crust consists of lower density material such as the igneous rocks granite and andesite. Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean floors.',
		surfaceGeology:
			"Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.",
		color: COLORS.earth
	},
	{
		id: v4(),
		name: 'Mars',
		overview:
			'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet".',
		wikipedia: 'http://en.wikipedia.org/wiki/Mars',
		rotationTime: '1.03 DAYS',
		revolutionTime: '1.88 YEARS',
		radius: '3,389.5 KM',
		averageTemp: '-28ºC',
		internalStricture:
			'Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur.',
		surfaceGeology:
			'Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt.',
		color: COLORS.mars
	}
];
