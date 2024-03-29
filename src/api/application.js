import service from '@/utils/request'
// @Tags User
// @Summary 分页获取用户列表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body modelInterface.PageInfo true "分页获取用户列表"
// @Success 200 {string} json "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /user/getUserList [post]
export const getApplicationList = (data) => {
  return service({
    url: '/application/getApplicationList',
    method: 'post',
    data: data
  })
}

export const create = (data) => {
  return service({
    url: '/application/create',
    method: 'post',
    data
  })
}


export const deleteApi = (data) => {
  return service({
    url: '/application/delete',
    method: 'delete',
    data: data
  })
}

export const getApplicationById = (data) => {
  return service({
    url: '/application/getApplicationById',
    method: 'post',
    data
  })
}