export function semverSort(versions: string[]): string[] {
  return versions.sort((a, b) => {
    const parseVersion = (version: string): number[] => {
      const parts = version.split(".").map(Number);
      if (parts.some(isNaN)) {
        throw new Error("Invalid version number");
      }
      while (parts.length < 3) {
        parts.push(0);
      }
      return parts;
    };

    const [majorA, minorA, patchA] = parseVersion(a);
    const [majorB, minorB, patchB] = parseVersion(b);

    if (majorA !== majorB) return majorA - majorB;
    if (minorA !== minorB) return minorA - minorB;
    return patchA - patchB;
  });
}

const sortedVersions = semverSort([
  "1.0.5",
  "2.5.0",
  "0.12.0",
  "1",
  "1.23.45",
  "1.4.50",
  "1.2.3.4.5.6.7",
]);
console.log(sortedVersions);
// [ "0.12.0", "1.0.0", "1.0.5", "1.2.3", "1.4.50", "1.23.45", "2.5.0" ]
