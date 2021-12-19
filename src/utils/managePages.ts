interface RouteDefinition {
  params: Params;
  props: FileDetails;
}

interface Params {
  list: string;
}

interface FileDetails {
  name: string;
  top5: string[];
}

interface Path {
  file: { pathname: string };
}

function getFileName(path: Path): string {
  return path.file.pathname.match(/([A-Za-z0-9-]*).md/)[1];
}

export function matchFileName(nameToMatch: string, path: Path): boolean {
  return nameToMatch === getFileName(path);
}

export function buildTop5Lists(paths: any[]): RouteDefinition[] {
  return paths.map((path) => {
    return {
      params: {
        list: getFileName(path),
      },
      props: {
        name: path["title"],
        top5: path["top5"],
      },
    };
  });
}
