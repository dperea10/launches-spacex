import { createAction } from '@reduxjs/toolkit';
import { Payload } from "../../interfaces/generalInterfaces";

export const getLaunchesUpcomingApi = createAction<Payload>('getLaunchesUpcomingApi')

export const clearStore = createAction<Payload>('clearStore')
