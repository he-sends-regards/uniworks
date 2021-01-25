interface IRoutes {
  [key: string]: {label: string, href: string}
}

export const CLIENT_ROUTES: IRoutes = {
  main: {
    label: "Главная",
    href: "/"
  },
  works: {
    label: "Работы",
    href: "/works"
  },
  about: {
    label: "О нас",
    href: "/about"
  },
  rules: {
    label: "Правила",
    href: "/rules"
  },
  auth: {
    label: "Авторизация",
    href: "/auth/:formType"
  },
  account: {
    label: "Аккаунт",
    href: "/account"
  }
}
