import Cookie from 'js-cookie'

export const RemoveCookie = (cname) => {
    Cookie.remove(cname)
}