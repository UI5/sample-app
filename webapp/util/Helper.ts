export default {
	resolvePath(sPath: string): string {
		// Relative to application root
		return (sap.ui.require as unknown as { toUrl: (path: string) => string }).toUrl("../") + sPath;
	}
};
