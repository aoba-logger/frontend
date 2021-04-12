import React, { useState } from 'react'
import useSWR from 'swr'
import { Log, LogQueryParams, queryLogs } from '../../service/log'
import DetailDialog from './component/detail-dialog'
import Filter from'./component/filter'
import LogTable from './component/log-table'
import Pagination from '@material-ui/lab/Pagination';


function LogViewer () {
  const [ queryParams, setQueryParams ] = useState<LogQueryParams>({page: 1, pageSize: 10})

  const [ viewingLog, setViewingLog ] = useState<Log | undefined>()

  const { data, error } = useSWR(['/api/log', queryParams], (url, params) => queryLogs(params))

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return (
    <div className="container mx-auto flex flex-col h-full">
      <Filter onQuery={(p) => setQueryParams({...queryParams, ...p})}></Filter>
      <div className="flex-auto">
        <LogTable logs={data} onLogClick={setViewingLog}></LogTable>
      </div>
      <Pagination count={100} page={queryParams.page} onChange={(_, page) => {setQueryParams({...queryParams, page})}}></Pagination>
      <DetailDialog log={viewingLog} onClose={() => setViewingLog(undefined)}></DetailDialog>
    </div>
  )
}

export default LogViewer