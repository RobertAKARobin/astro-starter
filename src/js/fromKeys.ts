export function fromKeys(keys: Array<string>, input: Record<string, unknown>) {
	return keys.map((key) => {
		if (!input[key]) {
			throw new Error(`'${key}' is not a valid key.`);
		} else {
			return input[key];
		}
	});
}
