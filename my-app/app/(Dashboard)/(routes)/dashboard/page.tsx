import { UserButton } from "@clerk/nextjs"

const DashboardPage = () => {
  return (
    <>
      <p>dashboard page</p>
      <UserButton afterSignOutUrl="/"/>
    </>
  )
}

export default DashboardPage
