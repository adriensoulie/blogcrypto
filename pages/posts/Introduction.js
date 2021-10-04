import ContentMain from '../../components/ContentMain'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'

export default function Introduction() {
  return (
    <div className="flex flex-col">
      <Header/>
      <div className="w-full max-w-8xl mx-auto">
        <div className="lg: flex">
          <Sidebar/>
          <ContentMain/>
        </div>
      </div>
    </div>
  )
}
