import { fakeTrendsApi } from '~/api';
import LEVEL_TRENDS from '~/config/trendConfig';

const trendsData = fakeTrendsApi.map((trend) => {
    const icon = LEVEL_TRENDS.find((item) => item.trend === trend.level).icon;
    return {
        ...trend,
        icon: icon,
    };
});

export default trendsData;
