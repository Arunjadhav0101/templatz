import { Link, Outlet } from '@remix-run/react'

function Dashboard() {
  return (
    <div>
       <div className='w-[200px] bg-red-400 border border-white'>
       <nav>Dahsboard</nav>
        <Link to={"user/abc"}>User</Link>
       </div>
        <Outlet></Outlet>
    </div>
  )
}

export default Dashboard