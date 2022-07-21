function ModuleAllowance(parentId) {
	const urlPath = String(window.location.hash).split("/");
	const currentParent = urlPath[1]
	parentId = parentId.split('-')

	if (parentId[0] === 'table') {
		parentId = parentId[2]
	} else {
		parentId = parentId[0]
	}

	console.log(currentParent, parentId)

	if (parentId === currentParent) {
		return true
	} else {
		return false
	}
}



