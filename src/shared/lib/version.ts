export class AppVersion {
  private static _major: number = 2022;
  private static _minor: number = 0;
  private static _patch: number = 0;

  public static getVersion(): string {
    return `v${AppVersion._major}.${AppVersion._minor}.${AppVersion._patch}`;
  }
}
