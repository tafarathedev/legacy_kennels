import Cookie from 'js-cookie'

export const SetCookies = (cname , userin) => {
   return Cookie.set(cname, userin,{
    path:"/"
   })
}