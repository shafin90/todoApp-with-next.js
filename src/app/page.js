import List from "@/components/List/List"
import TodoAppContainer from "@/components/TodoAppContainer/todoAppContainer"


export default function Home() {
  return (
    <main style={{ minHeight: "200vh" }} className=" bg-slate-800 w-full h-full position-relative pt-28 ">

      <TodoAppContainer></TodoAppContainer>
      <List></List>
    </main>
  )
}
