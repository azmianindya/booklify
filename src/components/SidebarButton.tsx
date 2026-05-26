import { Card } from "@heroui/react"
import { useNavigate } from "react-router"
import type { ReactNode } from "react"

type SidebarButtonProps = {
  icon: ReactNode
  label: string
  isActive: boolean
  url: string
}

const SidebarButton = ({ url, icon, label, isActive }: SidebarButtonProps) => {
  const navigate = useNavigate()
  return (
    <Card 
      className={`rounded-lg cursor-pointer transition ${isActive
        ? "bg-[#ECEBFF] text-[#4338CA]"
        : "bg-white text-gray-600 hover:bg-gray-50"
      }`}
      onClick={() => {
        navigate(url)
      }}
    >
      <Card.Content className="flex flex-row gap-3 items-center p-3">
        {icon}
        <div className="font-medium text-sm">{label}</div>
      </Card.Content>
    </Card>
  )
}

export default SidebarButton