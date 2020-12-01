import request from '../utils/request';

export async function queryFromHost(params) {
  //debugger
  //const reqHeader = getAuthRequestHeader()
  return request('/dev/',{
    method: 'POST',
    // timeout: 180000,
    // headers: {
    //   hi: "hello"
    // },
    body: JSON.stringify(params)
  });
}

export async function prepareToPlan(params) {
  //debugger
  //const reqHeader = getAuthRequestHeader()
  return request('/dev/',{
    method: 'POST',
    // timeout: 180000,
    // headers: {
    //   hi: "hello"
    // },
    body: JSON.stringify(params)
  });
}

export async function prepareToManage(params) {
  //debugger
  //const reqHeader = getAuthRequestHeader()
  return request('/dev/',{
    method: 'POST',
    // timeout: 180000,
    // headers: {
    //   hi: "hello"
    // },
    body: JSON.stringify(params)
  });
}

// export async function getTheRoute() {
//   //const reqHeader = getAuthRequestHeader()
//   return request('/dev/',{
//     method: 'GET',
//   });
// }