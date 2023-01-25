import Cookie from 'js-cookie'

export const SetCookie = (cname , userin) => {
   return Cookie.set(cname, userin,{
    path:"/"
   })
}