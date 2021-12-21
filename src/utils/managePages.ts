interface GameRouteDefinition {
  params: GameParams;
}

interface GameParams {
  game: string;
}

interface GameProps {
  content: any;
  title: string;
  publisher: string;
  image: string;
  review: string;
  purchaseAt: PurchaseAtOptions;
}

interface PurchaseAtOptions {
  amazon?: string;
  nintendo?: string;
}

interface Top5RouteDefinition {
  params: Top5Params;
  props: Top5FileDetails;
}

interface Top5Params {
  list: string;
}

interface Top5FileDetails {
  name: string;
  top5: string[];
}

interface Path {
  file: { pathname: string };
}

export function getFileName(path: Path): string {
  return path.file.pathname.match(/([A-Za-z0-9-]*).md/)[1];
}

export function matchFileName(nameToMatch: string, path: Path): boolean {
  return nameToMatch === getFileName(path);
}

export function buildGamePage(paths: any[]): GameRouteDefinition[] {
  return paths.map((path) => {
    return {
      params: {
        game: getFileName(path),
      },
    };
  });
}

export function buildTop5Lists(paths: any[]): Top5RouteDefinition[] {
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
