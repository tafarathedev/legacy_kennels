import Cookie from 'js-cookie'

export const GetCookie = (cname) => {
   return Cookie.get(cname)
}