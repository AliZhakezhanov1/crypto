import { FC } from "react"
import { Route, Routes } from "react-router";
import { publicRoutes } from "@/shared/routes";

const AppRouter: FC = (props) => {
  return (
    <Routes>
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component {...props}/>} />
      ))}
    </Routes>
  )
}

export default AppRouter
