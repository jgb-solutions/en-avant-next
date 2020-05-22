export const APP_NAME = `Annavan.HT`
export const FB_APP_ID = `232624100615967`
export const TWITTER_HANDLE = `annavan_ht`

// // Google Adsense
// export const GOOGLE_ADS_CLIENT = `ca-pub-3793163111580068`

export const DOMAIN = process.env.REACT_APP_DOMAIN || `https://infotoutan.com`
export const API_URL =
	process.env.NODE_ENV === "development"
		? "http://web.infotoutan.loc/api/news"
		: "https://web.infotoutan.com/api/news"
