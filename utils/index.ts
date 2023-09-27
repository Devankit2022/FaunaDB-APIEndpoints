import { Date } from "../types"

const date = new Date()

export const currentDate: Date["currentDate"] = `${date.getFullYear()}-${
	date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
}-${date.getDate()}`
