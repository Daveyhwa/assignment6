export class Satellite {
	name: string;
	orbitType: string;
	type: string;
	operational: boolean;
	launchDate: string;
	constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {}
	shouldShowWarning() {
		if (this.type.toLowerCase() == 'space debris') {
			return true;
		} else {
			return false;
		}
	}
}
