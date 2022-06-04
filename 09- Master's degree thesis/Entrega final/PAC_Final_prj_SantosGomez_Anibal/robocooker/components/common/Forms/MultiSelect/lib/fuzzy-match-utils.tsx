import { Option } from "./interfaces";

type MapOfStrings = { [key: string]: string };

export function filterOptions(
  options: Option[],
  filter?: string,
  substitutions?: MapOfStrings
): Option[] {
  if (!filter) {
    return options;
  }

  const cleanFilter = cleanUpText(filter, substitutions);
  return options

    .filter(({ label, value }) => label != null && value != null)

    .map((option) => ({
      option: option,
      score: typeaheadSimilarity(
        cleanUpText(option.label, substitutions),
        cleanFilter
      ),
    }))

    .filter(
      (pair) =>
        pair.score >= Math.max(cleanFilter.length - 2, cleanFilter.length)
    )

    .sort((a, b) => b.score - a.score)

    .map((pair) => pair.option);
}

export function typeaheadSimilarity(a: string, b: string): number {
  let aLength = a.length;
  let bLength = b.length;
  const table: any[] = [];

  if (!aLength || !bLength) {
    return 0;
  }

  // Ensure `a` isn't shorter than `b`.
  if (aLength < bLength) {
    [a, b] = [b, a];
    // Swap the length of these strings.
    [aLength, bLength] = [bLength, aLength];
  }

  if (a.indexOf(b) !== -1) {
    return bLength + 1 / aLength;
  }

  for (let x = 0; x <= aLength; ++x) {
    table[x] = [0];
  }
  for (let y = 0; y <= bLength; ++y) {
    table[0][y] = 0;
  }

  for (let x = 1; x <= aLength; ++x) {
    for (let y = 1; y <= bLength; ++y) {
      table[x][y] =
        a[x - 1] === b[y - 1]
          ? 1 + table[x - 1][y - 1]
          : Math.max(table[x][y - 1], table[x - 1][y]);
    }
  }

  return table[aLength][bLength];
}

export function cleanUpText(
  input?: string,
  substitutions?: MapOfStrings
): string {
  if (!input) {
    return "";
  }

  input = input.toUpperCase().replace(/((?=[^\u00E0-\u00FC])\W)|_/g, "");

  if (!substitutions) {
    return input;
  }
  const safeSubstitutions: MapOfStrings = substitutions; 

  return Object.keys(safeSubstitutions).reduce((output, substitution) => {
    const unsubbed = new RegExp(substitution, "g");
    return output.replace(unsubbed, safeSubstitutions[substitution]);
  }, input);
}
