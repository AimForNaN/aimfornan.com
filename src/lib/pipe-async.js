import { pipeWith } from "ramda"

export default pipeWith((f, p) => p.then(f));
