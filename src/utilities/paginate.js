import lodash from "lodash";

export function paginate(items, pageNumber, pageSize) {
    const startIndex = (pageNumber - 1) * pageSize;
    return lodash(items).slice(startIndex).take(pageSize).value();
}