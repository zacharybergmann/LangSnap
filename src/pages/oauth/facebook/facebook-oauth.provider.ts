import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { IOathProvider } from '../oauth.provider.interface';
import { CordovaOauth } from 'ng2-cordova-oauth/oauth';
import { Facebook } from 'ng2-cordova-oauth/provider/facebook';
import { Config } from '../../../config';
import { OAuthProfile } from '../models/oauth-profile.model';
import { ProfileService } from '../../../services/profile.service'

interface ILoginResponse {
	access_token: string;
}
interface IProfileResponse {
	first_name: string;
	last_name: string;
}
@Injectable()
export class FacebookOauthProvider implements IOathProvider {
	private cordovaOauth: CordovaOauth;
	private http: Http;
	private config: Config;
	private facebook: Facebook;
	private profileService: ProfileService;
	public test: any;
	constructor(http: Http, config: Config, profileService: ProfileService) {
		this.http = http;
		this.config = config;
		this.facebook = new Facebook({ clientId: config.facebook.appId, appScope: config.facebook.scope });
		this.cordovaOauth = new CordovaOauth();
		this.profileService = profileService;
	}
	login(): Promise<string> {
		return this.cordovaOauth.login(this.facebook)
			.then((x: ILoginResponse) => x.access_token);
	}

	getProfile(accessToken): Promise<OAuthProfile> {
		let query = `access_token=${accessToken}&format=json`;
		let url = `${this.config.facebook.apiUrl}me?${query}`;
		return this.http.get(url)
			.map(x => x.json())
			.map((x: IProfileResponse) => {
				console.log(x, 'this is x')
				let profile: OAuthProfile = {
					firstName: x['name'].split(' ')[0],
					lastName: x['name'].split(' ')[1],
					provider: 'facebook'
				};
				this.profileService.setUser(x['name'], (JSON.parse(localStorage.oauthToken).source));
				return profile;
			})
			.toPromise();
	}
}