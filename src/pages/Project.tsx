import NavigationMain from "@/components/nav-menu/NavigationMain"
import ContentArea from "@/components/sidebar/ContentArea"

const Project = () => {
  return (
    <div className="w-full">
      <NavigationMain />
      <ContentArea> 
        <div>
          <h1 className="text-2xl">Project</h1>
        </div>
      </ContentArea>
    </div>
  )
}

export default Project