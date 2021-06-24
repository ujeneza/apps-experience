import { ActivityViewModel } from './activity-view.model';


export interface ActivityViewApiModel {
    hasNext: boolean;
    hasPrevious: boolean;
    count: number;
    entities: ActivityViewModel[];
    }