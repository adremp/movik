import { MediaTypeParams } from "../layout"

export type Params = {
	params: {id: string, mediaType: MediaTypeParams & string}
}

export type SearchParams = {
	searchParams: {
		video?: boolean,
		trailer?: boolean
		season?: string
	}
}