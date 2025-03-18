import { useMemo } from 'react';
import { format, addWeeks, differenceInCalendarWeeks } from 'date-fns';

interface Week {
    weekNumber: number;
    date: string;
}

const UseWeeksFromStart = () => {
    return useMemo(() => {
        const weeksArray: Week[] = [];
        const startDate = new Date(2024, 0, 1);
        const currentDate = new Date();
        const totalWeeksInYear = differenceInCalendarWeeks(currentDate, startDate);

        for (let i = 1; i <= totalWeeksInYear; i++) {
            const weekStartDate = addWeeks(startDate, i - 1);
            weeksArray.push({
                weekNumber: i,
                date: format(weekStartDate, 'MM/yyyy'),
            });
        }

        return weeksArray;
    }, []);
};

export default UseWeeksFromStart;
