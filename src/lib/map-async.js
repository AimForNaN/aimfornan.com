export default async function mapAsync(fn, iter) {
	return Promise.all(iter.map(fn));
}
