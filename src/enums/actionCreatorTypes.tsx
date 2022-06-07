import {
	markStartAction,
	markCompleteAction,
} from "./actionsTypes";

export type markCompleteActionCreator = (id: string) => markCompleteAction;

export type markIncompleteActionCreator = (id: string) => markStartAction;

