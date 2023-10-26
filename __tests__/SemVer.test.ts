import { semverSort } from '../src/SemVer';

describe('semverSort', () => {
  it('should sort an array of semver strings', () => {
    const versions = ["1.0.5", "2.5.0", "0.12.0", "1.0.0", "1.23.45", "1.4.50", "1.2.3"];
    const sorted = semverSort(versions);
    expect(sorted).toEqual(["0.12.0", "1.0.0", "1.0.5", "1.2.3", "1.4.50", "1.23.45", "2.5.0"]);
  });

  it('should handle versions with different numbers of digits', () => {
    const versions = ["1.10", "1.2", "1.0.0"];
    const sorted = semverSort(versions);
    expect(sorted).toEqual(["1.0.0", "1.2", "1.10"]);
  });

  it('should throw an error for invalid version numbers', () => {
    const versions = ["1.0.5", "invalid", "1.2.3"];
    expect(() => semverSort(versions)).toThrow('Invalid version number');
  });
});
