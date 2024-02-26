import { TTimeframeName, TTimestampRange } from '../typings/types';

export const ONE_DAY_MS = 86_400_000;
export const ONE_DAY_MS_MINUS_ONE = ONE_DAY_MS - 1;

function getDatesNumberOfDaysAgo(daysAgo: number, startOfTodayMS: number, endOfTodayMS: number): [number, number] {
    const startOfRangeMS = startOfTodayMS - (daysAgo * ONE_DAY_MS);
    return [startOfRangeMS, endOfTodayMS];
}

export function makeDate(
    year: number,
    month: number,
    day: number,
    hour: number,
    min: number,
    sec: number,
    ms: number
) {
    const date = new Date();
    date.setUTCFullYear(year, month, day); // year, month (0-11), day
    date.setUTCHours(hour, min, sec, ms); // hour, minute, second, millisecond
    return date;
}

export function getDatesRangeFromTimeframeName(timeframeTypeName: TTimeframeName): TTimestampRange {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();

    const startOfTodayMS = makeDate(year, month, day, 0, 0, 0, 0).getTime();
    const endOfTodayMS = startOfTodayMS + ONE_DAY_MS_MINUS_ONE;

    switch (timeframeTypeName) {
        case '1d':
            return [startOfTodayMS, endOfTodayMS];
        case '1w':
            return getDatesNumberOfDaysAgo(7, startOfTodayMS, endOfTodayMS);
        case '1m':
            return getDatesNumberOfDaysAgo(30, startOfTodayMS, endOfTodayMS);
        case '3m':
            return getDatesNumberOfDaysAgo(90, startOfTodayMS, endOfTodayMS);
        case '6m':
            return getDatesNumberOfDaysAgo(180, startOfTodayMS, endOfTodayMS);
        case '1y':
            return getDatesNumberOfDaysAgo(365, startOfTodayMS, endOfTodayMS);
        default:
            return getDatesNumberOfDaysAgo(7, startOfTodayMS, endOfTodayMS);
    }
}
