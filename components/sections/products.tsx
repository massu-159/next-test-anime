import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "../ui/badge"

const List = [
  {
    title: "vr",
    image: "bg-phone-pattern"
  },
  {
    title: "ar",
    image: "bg-object-pattern"
  },
  {
    title: "mr",
    image: "bg-connection-pattern"
  },
]

const Products = () => {
  return (
    <div className="max-w-[1920px] mx-auto px-24 py-24">
      <h2 className="mb-3">01 -- Products</h2>
      <p className="mb-6 text-3xl max-w-2xl">As a tight-knit team of experts, we create memorable and emotional digital experiences.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {List.map((item, index) => (
          <Card key={index} className={`${item.image} bg-cover bg-center`} >
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mt-40 p-2 bg-white backdrop-blur-sm bg-opacity-10">We excel in VR and AR solutions, offering custom development services and expert consultancy. </p>
            </CardContent>
              <hr className="text-xl p-1 mx-4"/>
            <CardFooter className="gap-2">
              <Badge className="bg-white bg-opacity-50 backdrop-blur text-green-900">Unity</Badge>
              <Badge className="bg-white bg-opacity-50 backdrop-blur text-green-900">Blender</Badge>
              <Badge className="bg-white bg-opacity-50 backdrop-blur text-green-900">C#</Badge>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Products