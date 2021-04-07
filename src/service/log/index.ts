import request from "../../utils/request"
import dayjs from 'dayjs'

export enum LogLevel {
  LOG,
  WARN,
  ERROR
}

export class Log {
  created: dayjs.Dayjs
  id: number
  level: LogLevel

  message: any[]

  constructor(log: LogRaw) {
    this.created = dayjs(log.CreatedAt)
    this.level = log.level
    this.message = JSON.parse(log.message)
    this.id = log.ID
  }
}

interface LogRaw {
  ID: number
  CreatedAt: string
  level: LogLevel
  message: string
}

export interface LogQueryParams {
  level?: LogLevel[],
  page: number,
  pageSize: number
}

export const queryLogs = async (params: LogQueryParams) => {
  const res = await request.get<LogRaw[]>('log', { params })
  return res.data.map(log => new Log(log))
}

export const deleteLog = async (id: number) => {
  return request.delete(`log/${id}`)
}