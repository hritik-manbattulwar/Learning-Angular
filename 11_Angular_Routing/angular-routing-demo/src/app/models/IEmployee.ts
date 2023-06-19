export interface IEmployee {
	"eid": string,
	"picture": {
		"small": string,
		"medium": string,
		"large": string
	},
	"name": {
		"first": string,
		"last": string
	},
	"bio": {
		"email": string,
		"mobile": string,
		"address": {
			"street": string,
			"city": string,
			"country": string
		}
	},
	"company": {
		"designation": string,
		"department": string,
		"companyName": string
	}
}