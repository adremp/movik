import { Video } from "../types";


export default (videos: Video[]) => videos.sort((a, b) => a.type === 'Trailer' ? -1 : 1)