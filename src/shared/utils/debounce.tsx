

export default <F extends (...args: any[]) => any>(fn: F, delay: number) => {
	let timer: NodeJS.Timeout;
	return ((...args: string[]) => {
		clearTimeout(timer);
		timer = setTimeout(() => fn(...args), delay);
	}) as F
}