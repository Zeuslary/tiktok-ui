import trendsApi from '~/apiData/trends';

import { faCircle, faArrowTrendUp, faFire } from '@fortawesome/free-solid-svg-icons';

const levelTrend = [
    { trend: 'hot', icon: faFire },
    { trend: 'rising', icon: faArrowTrendUp },
    { trend: 'popular', icon: faCircle },
];

const trendsData = trendsApi.map((trend) => {
    const icon = levelTrend.find((item) => item.trend === trend.level).icon;
    return {
        ...trend,
        icon: icon,
    };
});

export { trendsData };
