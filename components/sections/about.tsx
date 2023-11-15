import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const List = [
  {
    head: "会社名",
    body: "株式会社unti deluxe"
  },
  {
    head: "設立",
    body: "2021年4月1日"
  },
  {
    head: "資本金",
    body: "1,000,000円"
  },
  {
    head: "代表取締役",
    body: "尾上 兼透"
  },
  {
    head: "事業内容",
    body: "ソフトウェアの企画・開発・販売"
  },
  {
    head: "所在地",
    body: "〒150-0002 東京都渋谷区渋谷1-2-3"
  },
  {
    head: "電話番号",
    body: "03-1234-5678"
  },
  {
    head: "メールアドレス",
    body: "abcde@unti-deluxe.com",
  }
]

const About = () => {
  return (
    <div className="max-w-[1920px] mx-auto px-24 pt-32">
      <h2 className="mb-3">02 -- About</h2>
      <p className="mb-6 text-3xl max-w-2xl">As a tight-knit team of experts, we create memorable and emotional digital experiences.</p>
      <Table className="max-w-[800px] mx-auto">
        <TableHeader>
          <TableRow>
            <TableHead></TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {List.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{item.head}</TableCell>
              <TableCell className="text-green-900">{item.body}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default About